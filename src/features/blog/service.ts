import type { LanguageCode } from '@/i18n/ui';
import { getPublishedEntries } from '@/lib/published-content';

/** The published articles of one language, newest first. */
export const getPublishedPosts = (lang: LanguageCode) =>
  getPublishedEntries('blog', lang);
