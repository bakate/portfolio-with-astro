import type { LanguageCode } from '@/i18n/ui';
import { getCollection, render, type CollectionEntry } from 'astro:content';

type EditorialCollection = 'blog' | 'tips';

/**
 * The published entries of one collection and language, newest first, with
 * their reading time. Drafts are left out: they are built at a hidden address,
 * never listed.
 */
export async function getPublishedEntries<C extends EditorialCollection>(
  collection: C,
  lang: LanguageCode
): Promise<Array<CollectionEntry<C>>> {
  const entries = (await getCollection(
    collection,
    ({ data, id }) => !data.isDraft && id.startsWith(`${lang}/`)
  )) as Array<CollectionEntry<C>>;

  const withReadingTime = await Promise.all(
    entries.map(async (entry) => {
      const { remarkPluginFrontmatter } = await render(entry);
      return {
        ...entry,
        data: {
          ...entry.data,
          readingTimeMinutes: remarkPluginFrontmatter.readingTimeMinutes,
        },
      };
    })
  );

  return withReadingTime.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
}
