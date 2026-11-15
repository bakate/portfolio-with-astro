import { test } from '@playwright/test';
import type { LanguageCode } from '@/i18n/ui';
import { createSystemUnderTest } from './support/system-under-test';

/** Words that would state a contract type; leZèbre shows its dates without one. */
const contractTypes = [
  'CDI',
  'CDD',
  'Freelance',
  'Stage',
  'Alternance',
  'Intérim',
  'Full-time',
  'Contract',
  'Internship',
] as const;

const languages = {
  fr: {
    name: 'French',
    home: '/',
    experienceHeading: 'Expérience',
    leZebre: 'Juillet 2026 – octobre 2026',
    terangaPulse: 'Fondateur',
    bloomflow: '4 ans',
    experienceLink: { name: 'Voir tout mon parcours', path: '/experience' },
    howIWorkHeading: 'Comment je travaille',
    practices: [
      'DDD et architecture hexagonale',
      "TDD et tests d'acceptation Gherkin",
      'RAG',
      'spécifications assistées par LLM',
    ],
    careerChange: '10 ans dans la vente',
  },
  en: {
    name: 'English',
    home: '/en',
    experienceHeading: 'Experience',
    leZebre: 'July 2026 – October 2026',
    terangaPulse: 'Founder',
    bloomflow: '4 years',
    experienceLink: { name: 'See my full background', path: '/en/experience' },
    howIWorkHeading: 'How I work',
    practices: [
      'DDD and hexagonal architecture',
      'TDD and Gherkin acceptance tests',
      'RAG',
      'LLM-assisted specifications',
    ],
    careerChange: '10 years in sales',
  },
} as const satisfies Record<
  LanguageCode,
  {
    name: string;
    home: string;
    experienceHeading: string;
    leZebre: string;
    terangaPulse: string;
    bloomflow: string;
    experienceLink: { name: string; path: string };
    howIWorkHeading: string;
    practices: ReadonlyArray<string>;
    careerChange: string;
  }
>;

for (const language of Object.values(languages)) {
  test(`Given the ${language.name} home page, when a visitor scrolls past the hero, then the proof, the experience, the featured projects and how I work follow in that order`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.home);
    await site.thenSectionsFollowInOrder([
      'hero',
      'proof',
      'experience',
      'projects',
      'how-i-work',
    ]);
  });

  test(`Given the ${language.name} home page, when a visitor reads the experience, then it shows leZèbre with its dates and no contract type, Teranga Pulse and Bloomflow`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.home);
    await site.thenSectionShows('experience', {
      heading: language.experienceHeading,
    });
    await site.thenSectionEntryShows('experience', 'leZèbre', {
      texts: [language.leZebre],
      without: contractTypes,
    });
    await site.thenSectionEntryShows('experience', 'Teranga Pulse', {
      texts: [language.terangaPulse],
    });
    await site.thenSectionEntryShows('experience', 'Bloomflow', {
      texts: [language.bloomflow],
    });
  });

  test(`Given the ${language.name} home page, when a visitor wants the whole background, then the experience links to the full experience page`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.home);
    await site.thenSectionLinksTo(
      'experience',
      language.experienceLink.name,
      language.experienceLink.path
    );
  });

  test(`Given the ${language.name} home page, when a visitor reads how I work, then it names DDD, hexagonal architecture, TDD, Gherkin and AI, and tells the career change from sales`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.home);
    await site.thenSectionShows('how-i-work', {
      heading: language.howIWorkHeading,
      texts: [...language.practices, language.careerChange],
    });
  });
}
