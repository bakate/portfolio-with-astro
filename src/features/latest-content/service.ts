import { getPublishedPosts } from '@/features/blog/service';
import { getPublishedTips } from '@/features/tips/service';
import type { LanguageCode } from '@/i18n/ui';
import { getRelativeLocaleUrl } from 'astro:i18n';

export type LatestContentKind = 'article' | 'tip';

export type LatestContentEntry = {
  kind: LatestContentKind;
  title: string;
  description: string;
  pubDate: Date;
  href: string;
};

/**
 * Content published since the redesign. The basic JavaScript articles written
 * before it stay on the blog, but no longer speak for Bakate on the home page.
 * A fixed date rather than a rolling window: a quiet month never empties the
 * section, and the build gives the same result whatever day it runs.
 */
const latestContentSince = new Date('2026-01-01');

const latestContentCount = 3;

/** Recent articles and tips of one language, newest first, at most three. */
export async function getLatestContent(
  lang: LanguageCode
): Promise<Array<LatestContentEntry>> {
  const [posts, tips] = await Promise.all([
    getPublishedPosts(lang),
    getPublishedTips(lang),
  ]);

  const entries: Array<LatestContentEntry> = [
    ...posts.map((post) => ({
      kind: 'article' as const,
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      href: getRelativeLocaleUrl(lang, `/blog/${post.id}`),
    })),
    ...tips.map((tip) => ({
      kind: 'tip' as const,
      title: tip.data.title,
      description: tip.data.description,
      pubDate: tip.data.pubDate,
      href: getRelativeLocaleUrl(lang, `/tips/${tip.id}`),
    })),
  ];

  return entries
    .filter((entry) => entry.pubDate >= latestContentSince)
    .sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf())
    .slice(0, latestContentCount);
}
