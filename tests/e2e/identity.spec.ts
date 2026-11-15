import { test } from '@playwright/test';
import type { LanguageCode } from '@/i18n/ui';
import { createSystemUnderTest } from './support/system-under-test';

const languages = {
  fr: {
    name: 'French',
    home: '/',
    pitch:
      "Je conçois des produits SaaS de bout en bout : un domaine métier isolé et testé (DDD, architecture hexagonale, TDD), quel que soit le framework (NestJS, Express…), des interfaces Next.js et Angular, et l'IA là où elle sert vraiment.",
    availability: 'Disponible · Hybride Île-de-France / remote',
  },
  en: {
    name: 'English',
    home: '/en',
    pitch:
      'I build SaaS products end to end: an isolated, tested business domain (DDD, hexagonal architecture, TDD), whatever the framework (NestJS, Express…), Next.js and Angular interfaces, and AI where it actually helps.',
    availability: 'Available · Hybrid Île-de-France / remote',
  },
} as const satisfies Record<
  LanguageCode,
  { name: string; home: string; pitch: string; availability: string }
>;

for (const language of Object.values(languages)) {
  test(`Given the ${language.name} home page, when a visitor reads the hero, then it shows Bakate Idrissa, Software Engineer Full-Stack TypeScript, the pitch and the availability badge`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.home);
    await site.thenHeroShows({
      heading: 'Bakate Idrissa',
      texts: [
        'Software Engineer Full-Stack TypeScript',
        language.pitch,
        language.availability,
      ],
      without: ['Fastify'],
    });
  });

  test(`Given the ${language.name} home page, when it is shared, then its title and preview name Bakate Idrissa Ba with the Full-Stack TypeScript positioning and the share image`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.home);
    await site.thenPageIsSharedAs({
      title: 'Bakate Idrissa Ba',
      description: 'Full-Stack TypeScript',
    });
    await site.thenShareImageIs('https://bakateba.tech/images/og-brand.png');
  });

  test(`Given the ${language.name} home page, when a search engine reads it, then it finds Bakate Idrissa Ba as a Person with GitHub and LinkedIn profiles`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.home);
    await site.thenPageDeclaresPerson({
      name: 'Bakate Idrissa Ba',
      jobTitle: 'Software Engineer Full-Stack TypeScript',
      profiles: [
        'https://github.com/bakate',
        'https://www.linkedin.com/in/bakate-ba',
      ],
    });
  });
}

test('Given the whole site in French and English, when a crawler follows every link, then no page presents Bakate with the former Angular identity', async ({
  page,
  request,
}) => {
  const site = createSystemUnderTest({ page, request });
  await site.crawlerFollowsEveryLinkFrom(['/', '/en']);
  site.thenNoVisitedPageMentions(
    [
      'Développeur Angular',
      'Angular Engineer',
      'Angular Expertise',
      'Expertise Angular',
    ],
    { visitedAtLeast: ['/', '/en', '/experience', '/en/experience'] }
  );
});

test('Given the whole site in French and English, when a crawler follows every link, then no page mentions the Thrashnochados studio', async ({
  page,
  request,
}) => {
  const site = createSystemUnderTest({ page, request });
  await site.crawlerFollowsEveryLinkFrom(['/', '/en']);
  site.thenNoVisitedPageMentions(['Thrashnochados'], {
    visitedAtLeast: ['/', '/en', '/experience', '/en/experience'],
  });
});
