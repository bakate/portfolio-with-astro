import type { LanguageCode } from '@/i18n/ui';
import { getCollection, render, type CollectionEntry } from 'astro:content';

type EditorialCollection = 'blog' | 'tips';

/** A published entry, its reading time always worked out. */
export type PublishedEntry<C extends EditorialCollection> =
  CollectionEntry<C> & {
    data: CollectionEntry<C>['data'] & { readingTimeMinutes: number };
  };

/**
 * The published entries of one collection and language, newest first, with
 * their reading time. Drafts are left out: they are built at a hidden address,
 * never listed.
 */
export async function getPublishedEntries<C extends EditorialCollection>(
  collection: C,
  lang: LanguageCode
): Promise<Array<PublishedEntry<C>>> {
  const entries = (await getCollection(
    collection,
    ({ data, id }) => !data.isDraft && id.startsWith(`${lang}/`)
  )) as Array<CollectionEntry<C>>;

  const published = await Promise.all(
    entries.map(async (entry) => {
      const { remarkPluginFrontmatter } = await render(entry);
      return {
        ...entry,
        data: {
          ...entry.data,
          readingTimeMinutes: remarkPluginFrontmatter.readingTimeMinutes,
        },
      } as PublishedEntry<C>;
    })
  );

  return published.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
}
