import { test } from '@playwright/test';
import type { LanguageCode } from '@/i18n/ui';
import { createSystemUnderTest } from './support/system-under-test';

const languages = {
  fr: {
    name: 'French',
    home: '/',
    projectsPath: '/projects',
    archivesHeading: 'Archives',
    demoButton: 'Démo',
    codeButton: 'Code source',
  },
  en: {
    name: 'English',
    home: '/en',
    projectsPath: '/en/projects',
    archivesHeading: 'Archives',
    demoButton: 'Demo',
    codeButton: 'Source code',
  },
} as const satisfies Record<
  LanguageCode,
  {
    name: string;
    home: string;
    projectsPath: string;
    archivesHeading: string;
    demoButton: string;
    codeButton: string;
  }
>;

const featuredProjects = [
  'Resume Studio',
  'Parent Up',
  'Terral Hub',
  'Avionics',
] as const;

const archivedProjects = [
  'Code Haven',
  'AfrikaZon',
  'Samoura Store',
  'CMS e-commerce',
] as const;

/** Projects new to the site, with the links a visitor must find on their page. */
const newProjects = [
  {
    name: 'Resume Studio',
    slug: 'resume-studio',
    demo: 'https://resume-studio.bakateba.workers.dev/',
    repository: 'https://github.com/bakate/resume-tailoring',
  },
  {
    name: 'b2b-order-platform',
    slug: 'b2b-order-platform',
    demo: undefined,
    repository: 'https://github.com/bakate/b2b-order-platform',
  },
] as const;

for (const language of Object.values(languages)) {
  test(`Given the ${language.name} home page, when a visitor reaches the featured projects, then they see ${featuredProjects.join(', ')}, in that order`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.home);
    await site.thenSectionListsProjects('#projects', featuredProjects);
  });

  test(`Given the ${language.name} projects page, when a visitor reads it, then the featured projects come first, followed by b2b-order-platform`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.projectsPath);
    await site.thenSectionListsProjects('#featured', [
      ...featuredProjects,
      'b2b-order-platform',
    ]);
  });

  test(`Given the ${language.name} projects page, when a visitor scrolls to the end, then an Archives section holds the older projects`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.projectsPath);
    await site.thenSectionIsTitled('#archives', language.archivesHeading);
    await site.thenSectionListsProjects('#archives', archivedProjects);
  });

  for (const project of newProjects) {
    const links = project.demo
      ? 'its demo and its public repository'
      : 'its public repository, and no demo button';

    test(`Given ${project.name}, when a visitor opens its ${language.name} page, then it links to ${links}`, async ({
      page,
      request,
    }) => {
      const site = createSystemUnderTest({ page, request });
      await site.visitorOpens(`${language.projectsPath}/${project.slug}`);
      await site.thenPageHeadingIs(project.name);
      await site.thenPageLinksTo(project.repository);
      if (project.demo) await site.thenPageLinksTo(project.demo);
      else await site.thenPageHasNoLinkNamed(language.demoButton);
    });
  }

  test(`Given Parent Up, whose repository is private, when a visitor sees its card on the ${language.name} home page, then the card offers neither a demo nor a source code button`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.home);
    await site.thenProjectCardHasNoLinkNamed('Parent Up', [
      language.demoButton,
      language.codeButton,
    ]);
  });
}

test('Given the whole site in French and English, when a crawler follows every link, then no link points nowhere', async ({
  page,
  request,
}) => {
  const site = createSystemUnderTest({ page, request });
  await site.crawlerFollowsEveryLinkFrom(['/', '/en']);
  site.thenNoVisitedPageHasAnEmptyLink({
    visitedAtLeast: ['/projects/resume-studio', '/en/projects/resume-studio'],
  });
});
