import { test } from '@playwright/test';
import type { LanguageCode } from '@/i18n/ui';
import { createSystemUnderTest } from './support/system-under-test';

/** The experience page tells the same story as the CV, most recent first. */
const companies = ['leZèbre Tech', 'Teranga Pulse', 'Bloomflow'];

const languages = {
  fr: {
    name: 'French',
    experience: '/experience',
    bloomflowResults: [
      'de 7-8 s à moins de 2 s',
      'une tâche de 2 jours ramenée à quelques clics',
    ],
  },
  en: {
    name: 'English',
    experience: '/en/experience',
    bloomflowResults: [
      'from 7–8 s to under 2 s',
      'a critical 2-day manual task into a few clicks',
    ],
  },
} as const satisfies Record<
  LanguageCode,
  {
    name: string;
    experience: string;
    bloomflowResults: ReadonlyArray<string>;
  }
>;

for (const language of Object.values(languages)) {
  test(`Given the ${language.name} experience page, when a recruiter reads it, then it lists leZèbre Tech, Teranga Pulse and Bloomflow, most recent first`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.experience);
    await site.thenSectionsAre(companies);
  });

  test(`Given the ${language.name} experience page, when a recruiter reads Bloomflow, then its results are given in figures`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.experience);
    await site.thenPageShows(language.bloomflowResults);
  });

  test(`Given the ${language.name} experience page, when a recruiter reads it, then it names no contract type and no side studio`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.experience);
    await site.thenPageNeverMentions([
      'Thrashnochados',
      'CDI',
      'CDD',
      'Freelance',
      'freelance',
    ]);
  });
}
