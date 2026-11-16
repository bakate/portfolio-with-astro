import type { LanguageCode } from '@/i18n/ui';
import { getPublishedEntries } from '@/lib/published-content';

/** The published tips of one language, newest first. */
export const getPublishedTips = (lang: LanguageCode) =>
  getPublishedEntries('tips', lang);
