// Checks every external link of the built site and prints a Markdown report.
// Flags domains that no longer resolve, timeouts, 4xx/5xx answers, and redirects
// to a login page or to another domain (an expired domain usually lands on a
// registrar's parking page). Exits 1 when a link is broken.
//
// It depends on third-party sites, so it stays out of the PR test suite: it runs
// on demand (`pnpm check:links`) and weekly in CI (.github/workflows/external-links.yml).
//
// Usage: node scripts/check-external-links.mjs [built-site-dir]
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const siteDir = path.resolve(process.argv[2] ?? '.vercel/output/static');
const timeoutMs = Number(process.env.LINK_CHECK_TIMEOUT_MS ?? 15_000);
const maxRedirects = 10;
const concurrency = 8;
const userAgent = 'Mozilla/5.0 (compatible; portfolio-link-checker)';

/** Cross-domain redirects that are the service working as intended. */
const expectedRedirects = {
  'calendar.app.google': ['calendar.google.com'], // public booking page
};

/** Links that send anonymous visitors to sign in by design. */
const signInByDesign = [
  /^https:\/\/github\.com\/[^/]+\/[^/]+\/edit\//, // "Edit on GitHub"
];

/** Sites that refuse robots: their refusal says nothing about the link. */
const refusesRobots = (url, status) =>
  status === 999 ||
  (/(^|\.)linkedin\.com$/.test(url.hostname) && [403, 429].includes(status));

const loginPath = /\/(log-?in|sign-?in|sign_in|auth|sso|oauth)(\/|$)/i;
const loginHost = /^(login|accounts|auth|sso)\./i;
const looksLikeLogin = (url) =>
  loginHost.test(url.hostname) || loginPath.test(url.pathname);

const withoutWww = (hostname) => hostname.replace(/^www\./, '');
const isSameDomain = (from, to) =>
  withoutWww(from.hostname) === withoutWww(to.hostname) ||
  (expectedRedirects[from.hostname] ?? []).includes(to.hostname);

const networkProblemByCode = {
  ENOTFOUND: 'domain does not resolve',
  EAI_AGAIN: 'domain does not resolve',
  ECONNREFUSED: 'connection refused',
  ECONNRESET: 'connection reset',
};

function describeNetworkError(error) {
  if (error.name === 'TimeoutError')
    return `no answer within ${timeoutMs / 1000}s`;
  const code = error.cause?.code ?? error.code;
  return networkProblemByCode[code] ?? `unreachable (${code ?? error.message})`;
}

const broken = (problem) => ({ verdict: 'broken', problem });
const ok = { verdict: 'ok' };

/** Follows redirects one hop at a time, so each hop can be judged. */
async function checkOnce(href) {
  const origin = new URL(href);
  let current = origin;
  for (let hop = 0; hop <= maxRedirects; hop++) {
    let response;
    try {
      response = await fetch(current, {
        redirect: 'manual',
        signal: AbortSignal.timeout(timeoutMs),
        headers: { 'user-agent': userAgent, accept: 'text/html,*/*' },
      });
      await response.body?.cancel();
    } catch (error) {
      return { ...broken(describeNetworkError(error)), retry: true };
    }

    const location = response.headers.get('location');
    if (response.status >= 300 && response.status < 400 && location) {
      const next = new URL(location, current);
      if (looksLikeLogin(next)) {
        if (signInByDesign.some((pattern) => pattern.test(href))) return ok;
        return broken(
          `redirects to a login page (${next.origin}${next.pathname})`
        );
      }
      if (!isSameDomain(current, next))
        return broken(
          `redirects to another domain (${next.origin}${next.pathname})`
        );
      current = next;
      continue;
    }

    if (refusesRobots(current, response.status))
      return {
        verdict: 'unverified',
        problem: `HTTP ${response.status}, the site refuses robots`,
      };
    if (response.status >= 400)
      return {
        ...broken(`HTTP ${response.status}`),
        retry: response.status >= 500,
      };
    return ok;
  }
  return broken(`more than ${maxRedirects} redirects`);
}

/** Network failures and 5xx answers get a second chance before being reported. */
async function check(href) {
  const first = await checkOnce(href);
  return first.retry ? checkOnce(href) : first;
}

async function htmlFilesIn(dir) {
  const entries = await readdir(dir, { recursive: true, withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.html'))
    .map((entry) => path.join(entry.parentPath, entry.name));
}

/** `projects/cms/index.html` → `/projects/cms`, `404.html` → `/404`. */
const pagePathOf = (file) =>
  '/' +
  path
    .relative(siteDir, file)
    .split(path.sep)
    .join('/')
    .replace(/(^|\/)index\.html$/, '')
    .replace(/\.html$/, '');

const decodeEntities = (value) =>
  value.replaceAll('&amp;', '&').replaceAll('&#38;', '&');

const externalLinksIn = (html) =>
  [...html.matchAll(/<a\b[^>]*?\shref="([^"]*)"/gi)]
    .map(([, href]) => decodeEntities(href))
    .filter((href) => /^https?:\/\//i.test(href));

/** Every external link of the site, with the pages it appears on. */
async function collectLinks() {
  const pagesByLink = new Map();
  for (const file of await htmlFilesIn(siteDir)) {
    const page = pagePathOf(file);
    for (const href of externalLinksIn(await readFile(file, 'utf8'))) {
      if (!pagesByLink.has(href)) pagesByLink.set(href, new Set());
      pagesByLink.get(href).add(page);
    }
  }
  return pagesByLink;
}

async function mapWithConcurrency(items, limit, task) {
  const results = new Array(items.length);
  let next = 0;
  const worker = async () => {
    while (next < items.length) {
      const index = next++;
      results[index] = await task(items[index]);
    }
  };
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, worker)
  );
  return results;
}

function section(title, results) {
  if (results.length === 0) return [];
  return [
    `## ${title} (${results.length})`,
    '',
    ...results.map(
      ({ href, problem, pages }) =>
        `- ${href} → ${problem}\n  on ${[...pages].sort().join(', ')}`
    ),
    '',
  ];
}

const pagesByLink = await collectLinks();
if (pagesByLink.size === 0) {
  console.error(`No external link found in ${siteDir}. Is the site built?`);
  process.exit(1);
}

const links = [...pagesByLink.keys()].sort();
const results = (await mapWithConcurrency(links, concurrency, check)).map(
  (result, index) => ({
    ...result,
    href: links[index],
    pages: pagesByLink.get(links[index]),
  })
);
const brokenLinks = results.filter((result) => result.verdict === 'broken');
const unverifiedLinks = results.filter(
  (result) => result.verdict === 'unverified'
);

console.log(
  [
    '# External link check',
    '',
    `${links.length} external links checked, ${brokenLinks.length} broken, ${unverifiedLinks.length} could not be verified.`,
    '',
    ...section('Broken', brokenLinks),
    ...section('Could not be verified', unverifiedLinks),
  ].join('\n')
);

process.exit(brokenLinks.length > 0 ? 1 : 0);
