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

/** Project detail routes, read from the links a visitor sees on the projects page. */
export async function projectRoutes(
  request: APIRequestContext,
  lang: LanguageCode
): Promise<Array<string>> {
  const prefix = localePath(lang, '/projects/');
  const html = await (await request.get(localePath(lang, '/projects'))).text();
  const slugs = [...html.matchAll(/href="([^"]+)"/g)]
    .map(([, href]) => href)
    .filter((href) => href.startsWith(prefix) && href.length > prefix.length)
    .map((href) => href.slice(prefix.length).replace(/\/$/, ''));
  return [...new Set(slugs)].sort().map((slug) => `/projects/${slug}`);
}
