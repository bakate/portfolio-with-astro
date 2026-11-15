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
const thirdParty = {
  '/healthy': { status: 200 },
  '/failing-demo': { status: 500 },
  '/private-demo': { status: 302, location: '/login?next=/private-demo' },
  '/login': { status: 200 },
  '/expired-domain': {
    status: 301,
    location: 'http://127.0.0.1:{port}/parked',
  },
  '/parked': { status: 200 },
} as const satisfies Record<string, { status: number; location?: string }>;

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
          { env: { ...process.env, LINK_CHECK_TIMEOUT_MS: '5000' } },
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
      const entry = ran()
        .report.split('\n- ')
        .find((block) => block.includes(href));
      expect(entry, `report entry for ${href}\n${ran().report}`).toBeDefined();
      expect(entry).toContain(problem);
      expect(entry).toContain(on);
    },

    thenReportDoesNotFlag(href: string) {
      expect(ran().report).not.toContain(`${href} `);
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
      const answer: { status: number; location?: string } | undefined =
        thirdParty[pathname as ThirdPartyPath];
      if (!answer) return res.writeHead(404).end();
      const headers = answer.location
        ? { location: answer.location.replace('{port}', String(port)) }
        : undefined;
      res.writeHead(answer.status, headers).end();
    });
    await new Promise<void>((resolve) => server.listen(0, resolve));
    port = (server.address() as AddressInfo).port;

    await use(createLinkCheckerUnderTest({ siteDir, port }));

    await new Promise((resolve) => server.close(resolve));
    await rm(siteDir, { recursive: true, force: true });
  },
});
