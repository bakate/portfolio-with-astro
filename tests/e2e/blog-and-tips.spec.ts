import { test } from '@playwright/test';
import type { LanguageCode } from '@/i18n/ui';
import { createSystemUnderTest } from './support/system-under-test';

const languages = {
  fr: {
    name: 'French',
    blog: {
      path: '/blog',
      heading: 'Blog : architecture, tests et TypeScript',
      search: 'Rechercher un article',
      tagButton: 'Filtrer par tag',
      noResult: 'Aucun article trouvé.',
    },
    tips: {
      path: '/tips',
      heading: 'Astuces',
      search: 'Rechercher une astuce',
      noResult: 'Aucune astuce trouvée.',
    },
    typeofNull:
      "JavaScript : L'Étrange Cas de `typeof null` et l'Évolution d'un Langage",
    propertyOrder:
      "Objets JavaScript : Pourquoi l'ordre d'insertion des propriétés est-il préservé ?",
    viteTip: 'Booste ton dev avec les alias Vite',
  },
  en: {
    name: 'English',
    blog: {
      path: '/en/blog',
      heading: 'Blog: architecture, testing and TypeScript',
      search: 'Search articles',
      tagButton: 'Filter by tag',
      noResult: 'No posts found.',
    },
    tips: {
      path: '/en/tips',
      heading: 'Tips',
      search: 'Search tips',
      noResult: 'No tips found.',
    },
    typeofNull:
      "JavaScript: The Curious Case of `typeof null` and a Language's Evolution",
    propertyOrder:
      'JavaScript Objects: Why is Property Insertion Order Preserved?',
    viteTip: 'Boost Your Dev with Vite Aliases',
  },
} as const satisfies Record<
  LanguageCode,
  {
    name: string;
    blog: {
      path: string;
      heading: string;
      search: string;
      tagButton: string;
      noResult: string;
    };
    tips: { path: string; heading: string; search: string; noResult: string };
    typeofNull: string;
    propertyOrder: string;
    viteTip: string;
  }
>;

/** The positioning the site left behind: the blog no longer claims it. */
const formerPositioning = ['Angular & SaaS Engineering', 'Angular Articles'];

for (const language of Object.values(languages)) {
  test(`Given the ${language.name} blog, when a visitor opens it, then its title tells the method and no longer the former Angular positioning`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.blog.path);
    await site.thenPageHeadingIs(language.blog.heading);
    await site.thenPageNeverMentions(formerPositioning);
  });

  test(`Given the ${language.name} blog, when a visitor searches for "typeof", then only the typeof null article is listed`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.blog.path);
    await site.visitorSearches(language.blog.search, 'typeof');
    await site.thenListedEntriesAre([language.typeofNull]);
  });

  test(`Given a shared link to the ${language.name} blog searched for "typeof", when a visitor opens it, then only the typeof null article is listed`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(`${language.blog.path}?q=typeof`);
    await site.thenListedEntriesAre([language.typeofNull]);
  });

  test(`Given the ${language.name} blog, when a visitor picks the "objects" tag, then only the property order article is listed`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.blog.path);
    await site.visitorPicksOption(language.blog.tagButton, 'Objects');
    await site.thenListedEntriesAre([language.propertyOrder]);
  });

  test(`Given the ${language.name} blog, when a visitor searches for a word no article contains, then the blog says so`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.blog.path);
    await site.visitorSearches(language.blog.search, 'zzzzzz');
    await site.thenListedEntriesAre([]);
    await site.thenVisitorIsTold(language.blog.noResult);
  });

  test(`Given the ${language.name} tips, when a visitor opens them, then the page is titled and lists the Vite tip`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.tips.path);
    await site.thenPageHeadingIs(language.tips.heading);
    await site.thenListedEntriesAre([language.viteTip]);
  });

  test(`Given the ${language.name} tips, when a visitor searches for a word no tip contains, then the tips page says so`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.tips.path);
    await site.visitorSearches(language.tips.search, 'zzzzzz');
    await site.thenListedEntriesAre([]);
    await site.thenVisitorIsTold(language.tips.noResult);
  });
}
