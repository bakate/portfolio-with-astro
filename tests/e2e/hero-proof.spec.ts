import { test } from '@playwright/test';
import type { Proof } from '@/features/projects';
import type { LanguageCode } from '@/i18n/ui';
import { createSystemUnderTest } from './support/system-under-test';

const clients = ['Bayer', 'Unilever', 'HSBC'];

const languages = {
  fr: {
    name: 'French',
    home: '/',
    portraitAlt: 'Portrait de Bakate Idrissa, souriant',
    pitch:
      "Je conçois des produits SaaS de bout en bout : un domaine métier isolé et testé (DDD, architecture hexagonale, TDD), quel que soit le framework (NestJS, Express…), des interfaces Next.js et Angular, et l'IA là où elle sert vraiment.",
    proofs: [
      {
        figure: '7-8 s → moins de 2 s',
        context: 'Chargement du module analytique chez Bloomflow',
      },
      {
        figure: '2 jours → quelques clics',
        context: 'Outil interne de back-office',
      },
      {
        figure: '5 ans',
        context: 'de SaaS en production chez Bayer, Unilever, HSBC',
      },
    ],
  },
  en: {
    name: 'English',
    home: '/en',
    portraitAlt: 'Portrait of Bakate Idrissa, smiling',
    pitch:
      'I build SaaS products end to end: an isolated, tested business domain (DDD, hexagonal architecture, TDD), whatever the framework (NestJS, Express…), Next.js and Angular interfaces, and AI where it actually helps.',
    proofs: [
      {
        figure: '7-8 s → under 2 s',
        context: 'Analytics module load time at Bloomflow',
      },
      {
        figure: '2 days → a few clicks',
        context: 'Internal back-office tool',
      },
      {
        figure: '5 years',
        context: 'of SaaS in production at Bayer, Unilever, HSBC',
      },
    ],
  },
} as const satisfies Record<
  LanguageCode,
  {
    name: string;
    home: string;
    portraitAlt: string;
    pitch: string;
    proofs: ReadonlyArray<Proof>;
  }
>;

for (const language of Object.values(languages)) {
  test(`Given the ${language.name} home page, when a visitor reads past the hero, then the proof section shows the three figures with their context`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.home);
    await site.thenProofSectionShows(language.proofs);
  });

  test(`Given the ${language.name} home page, when a visitor looks for client logos, then clients are named in text and no image shows a client`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.home);
    await site.thenProofSectionHasNoImage();
    await site.thenNoImageOnThePageShows(clients);
  });

  test(`Given the ${language.name} home page, when a visitor reads the hero, then the CV photo is described as "${language.portraitAlt}"`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.home);
    await site.thenHeroPhotoIsDescribedAs(language.portraitAlt);
  });

  test(`Given a 375 px wide phone, when a visitor opens the ${language.name} home page, then the page does not scroll sideways and the photo sits beside or above the name`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorUsesAScreenWide(375);
    await site.visitorOpens(language.home);
    await site.thenPageDoesNotScrollSideways();
    await site.thenHeroPhotoIsNextToTheName();
  });

  test(`Given a desktop screen, when a visitor opens the ${language.name} home page, then the hero text starts at the content's left edge, leaves the right side open and sets the photo into the title block`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorUsesAScreenWide(1280);
    await site.visitorOpens(language.home);
    await site.thenHeroIsAsymmetric({ pitch: language.pitch });
  });
}
