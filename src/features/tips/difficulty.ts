import type { CollectionEntry } from 'astro:content';

export type Difficulty = NonNullable<
  CollectionEntry<'tips'>['data']['difficulty']
>;

/** Each difficulty in the page's language, easiest first. */
export const difficultyLabels = (
  copy: Record<
    'difficultyBeginner' | 'difficultyIntermediate' | 'difficultyAdvanced',
    string
  >
) =>
  ({
    beginner: copy.difficultyBeginner,
    intermediate: copy.difficultyIntermediate,
    advanced: copy.difficultyAdvanced,
  }) as const satisfies Record<Difficulty, string>;
