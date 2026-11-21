import type { LanguageCode } from '@/i18n/ui';
import { getCollection } from 'astro:content';
import { getRelativeLocaleUrl } from 'astro:i18n';

export type SeriesKind = 'blog' | 'tips';

export type SeriesPart = {
  id: string;
  kind: SeriesKind;
  title: string;
  href: string;
  isCurrent: boolean;
};

export type SeriesPosition = {
  name: string;
  parts: Array<SeriesPart>;
  currentIndex: number;
};

/**
 * Gathers every entry of a series, blog articles and tips alike, in the
 * entry's language and in publication order. Drafts are left out, except the
 * entry being viewed, so a draft can be reviewed at its future place.
 */
export async function getSeriesPosition(
  name: string,
  lang: LanguageCode,
  current: { kind: SeriesKind; id: string }
): Promise<SeriesPosition> {
  const inSeries = <
    T extends { id: string; data: { series?: string; isDraft: boolean } },
  >(
    kind: SeriesKind,
    entry: T
  ) => {
    const isCurrent = kind === current.kind && entry.id === current.id;
    return (
      entry.id.startsWith(`${lang}/`) &&
      entry.data.series === name &&
      (!entry.data.isDraft || isCurrent)
    );
  };

  const [posts, tips] = await Promise.all([
    getCollection('blog', (entry) => inSeries('blog', entry)),
    getCollection('tips', (entry) => inSeries('tips', entry)),
  ]);

  const parts = [
    ...posts.map((entry) => ({ kind: 'blog' as const, entry })),
    ...tips.map((entry) => ({ kind: 'tips' as const, entry })),
  ]
    .sort(
      (a, b) =>
        a.entry.data.pubDate.getTime() - b.entry.data.pubDate.getTime() ||
        a.entry.id.localeCompare(b.entry.id)
    )
    .map(({ kind, entry }) => ({
      id: entry.id,
      kind,
      title: entry.data.title,
      href: getRelativeLocaleUrl(lang, `/${kind}/${entry.id}`),
      isCurrent: kind === current.kind && entry.id === current.id,
    }));

  return {
    name,
    parts,
    currentIndex: parts.findIndex((part) => part.isCurrent),
  };
}
