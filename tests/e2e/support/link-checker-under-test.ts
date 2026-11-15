import { test as base, expect } from '@playwright/test';
import { execFile } from 'node:child_process';
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { createServer, type Server } from 'node:http';
import type { AddressInfo } from 'node:net';
import { tmpdir } from 'node:os';
import path from 'node:path';

/**
 * Stand-ins for the third-party sites the portfolio links to, served locally so
 * the scenario never depends on the real internet. `localhost` and `127.0.0.1`
 * play two different domains.
 */
type Answer = { status: number; location?: string } | 'never';

const thirdParty = {
  '/healthy': { status: 200 },
  '/failing-demo': { status: 500 },
  '/removed-page': { status: 404 },
  '/silent-demo': 'never',
  '/private-demo': { status: 302, location: '/login?next=/private-demo' },
  '/login': { status: 200 },
  '/moved-demo': {
    status: 301,
    location: 'http://127.0.0.1:{port}/parked',
  },
  '/parked': { status: 200 },
} as const satisfies Record<string, Answer>;

type ThirdPartyPath = keyof typeof thirdParty;

type Run = { exitCode: number; report: string };

/**
 * The link checker (`pnpm check:links`) as its user sees it: a built site goes
 * in, a report and an exit code come out.
 */
export function createLinkCheckerUnderTest({
  siteDir,
  port,
}: {
  siteDir: string;
  port: number;
}) {
  const pages = new Map<string, Array<string>>();
  let run: Run | undefined;

  const ran = (): Run => {
    if (!run) throw new Error('The link checker has not run yet');
    return run;
  };

  /** One entry per flagged link, each starting with the link. */
  const reportEntries = () => ran().report.split('\n- ').slice(1);

  return {
    /** A third-party address played by the local stand-in server. */
    thirdPartyAddress(standIn: ThirdPartyPath) {
      return `http://localhost:${port}${standIn}`;
    },

    // Given / When

    givenBuiltPageLinksTo(page: string, hrefs: ReadonlyArray<string>) {
      pages.set(page, [...(pages.get(page) ?? []), ...hrefs]);
    },

    async whenTheLinkCheckerRuns() {
      for (const [page, hrefs] of pages) {
        const file = path.join(siteDir, page, 'index.html');
        await mkdir(path.dirname(file), { recursive: true });
        const links = hrefs.map((href) => `<a href="${href}">link</a>`);
        await writeFile(file, `<!doctype html><main>${links.join('')}</main>`);
      }
      run = await new Promise<Run>((resolve) => {
        execFile(
          process.execPath,
          ['scripts/check-external-links.mjs', siteDir],
          { env: { ...process.env, LINK_CHECK_TIMEOUT_MS: '1000' } },
          (error, stdout, stderr) =>
            resolve({
              exitCode: error ? Number(error.code ?? 1) : 0,
              report: stdout + stderr,
            })
        );
      });
    },

    // Then

    thenTheCheckFails() {
      expect(ran().exitCode, ran().report).toBe(1);
    },

    thenTheCheckPasses() {
      expect(ran().exitCode, ran().report).toBe(0);
    },

    /** The report names the link, why it is broken and the page it is on. */
    thenReportFlags(href: string, problem: string, { on }: { on: string }) {
      const entry = reportEntries().find((block) =>
        block.startsWith(`${href} `)
      );
      expect(entry, `report entry for ${href}\n${ran().report}`).toBeDefined();
      expect(entry).toContain(problem);
      expect(entry).toContain(on);
    },

    thenReportDoesNotFlag(hrefs: ReadonlyArray<string>) {
      const flagged = reportEntries().filter((entry) =>
        hrefs.some((href) => entry.startsWith(`${href} `))
      );
      expect(flagged, ran().report).toEqual([]);
    },
  };
}

type LinkCheckerUnderTest = ReturnType<typeof createLinkCheckerUnderTest>;

/** Gives each scenario its own built site and stand-in server, removed afterwards. */
export const test = base.extend<{ linkChecker: LinkCheckerUnderTest }>({
  // eslint-disable-next-line no-empty-pattern
  linkChecker: async ({}, use) => {
    const siteDir = await mkdtemp(path.join(tmpdir(), 'built-site-'));
    let port = 0;
    const server: Server = createServer((req, res) => {
      const { pathname } = new URL(req.url ?? '/', 'http://localhost');
      const answer: Answer | undefined = thirdParty[pathname as ThirdPartyPath];
      if (!answer) return res.writeHead(404).end();
      if (answer === 'never') return; // keeps the connection open, never answers
      const headers = answer.location
        ? { location: answer.location.replace('{port}', String(port)) }
        : undefined;
      res.writeHead(answer.status, headers).end();
    });
    await new Promise<void>((resolve) => server.listen(0, resolve));
    port = (server.address() as AddressInfo).port;

    await use(createLinkCheckerUnderTest({ siteDir, port }));

    server.closeAllConnections();
    await new Promise((resolve) => server.close(resolve));
    await rm(siteDir, { recursive: true, force: true });
  },
});
