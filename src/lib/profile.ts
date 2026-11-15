import type { LanguageCode } from '@/i18n/ui';

/** Who the site presents. Single source for the page chrome, SEO and contact links. */
export const profile = {
  /** Name used in the interface. */
  displayName: 'Bakate Idrissa',
  /** Full name, used for SEO, sharing and structured data. */
  fullName: 'Bakate Idrissa Ba',
  jobTitle: 'Software Engineer Full-Stack TypeScript',
  links: {
    github: 'https://github.com/bakate',
    linkedin: 'https://www.linkedin.com/in/bakate-ba',
  },
  /** Public Google Calendar booking page. Never the calendar admin URL. */
  bookingUrl: 'https://calendar.app.google/jQDVwUPrguURGuBH9',
  /** CV served from `public/cv/` under stable names: replace a PDF without touching code. */
  cvPathByLanguage: {
    fr: '/cv/bakate-idrissa-ba-cv-fr.pdf',
    en: '/cv/bakate-idrissa-ba-cv-en.pdf',
  } satisfies Record<LanguageCode, string>,
} as const;
