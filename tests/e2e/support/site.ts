import type { APIRequestContext } from '@playwright/test';
import { defaultLanguage, languages, type LanguageCode } from '@/i18n/ui';

export const locales = Object.keys(languages) as Array<LanguageCode>;

/** Top-level routes every locale serves, written without the locale prefix. */
export const sectionRoutes = [
  '/',
  '/experience',
  '/projects',
  '/blog',
  '/tips',
  '/contact',
] as const;

/** `/projects` → `/projects` in French (default, unprefixed), `/en/projects` in English. */
export function localePath(lang: LanguageCode, route: string): string {
  if (lang === defaultLanguage) return route;
  return route === '/' ? `/${lang}` : `/${lang}${route}`;
}

function hrefsIn(html: string): Array<string> {
  return [...html.matchAll(/href="([^"]+)"/g)].map(([, href]) => href);
}

const isPage = (href: string) =>
  href.startsWith('/') &&
  !href.startsWith('//') &&
  !href.startsWith('/_astro/') &&
  !href.startsWith('/favicons/') &&
  !/\.[a-z0-9]+$/i.test(href);

/**
 * Every page reachable by following internal links from each locale's home,
 * with its HTML. Crawls breadth-first, each page fetched once.
 */
export async function crawlSite(
  request: APIRequestContext
): Promise<Map<string, string>> {
  const pages = new Map<string, string>();
  const queue = locales.map((lang) => localePath(lang, '/'));
  const seen = new Set(queue);

  while (queue.length > 0) {
    const path = queue.shift()!;
    const response = await request.get(path);
    if (!response.ok()) continue;
    const html = await response.text();
    pages.set(path, html);

    for (const href of hrefsIn(html)) {
      const next = href.split(/[?#]/)[0].replace(/(.)\/$/, '$1');
      if (isPage(next) && !seen.has(next)) {
        seen.add(next);
        queue.push(next);
      }
    }
  }
  return pages;
}

/** Project detail routes, read from the links a visitor sees on the projects page. */
export async function projectRoutes(
  request: APIRequestContext,
  lang: LanguageCode
): Promise<Array<string>> {
  const prefix = localePath(lang, '/projects/');
  const html = await (await request.get(localePath(lang, '/projects'))).text();
  const slugs = hrefsIn(html)
    .filter((href) => href.startsWith(prefix) && href.length > prefix.length)
    .map((href) => href.slice(prefix.length).replace(/\/$/, ''));
  return [...new Set(slugs)].sort().map((slug) => `/projects/${slug}`);
}
