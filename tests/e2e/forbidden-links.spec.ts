import { test } from '@playwright/test';
import type { LanguageCode } from '@/i18n/ui';
import { createSystemUnderTest } from './support/system-under-test';

/** Destinations no page may point to. */
const forbiddenDestinations = [
  'parentup.eu', // expired, can be bought by anyone
  'codehaven.eu', // no longer answers
  'terral-hub-senegal', // responds 500
  'e-commerce-cms-ebon', // CMS demo, only shows a login page
  'calendar.google.com', // Google Calendar admin, only works for its owner
];

test('Given the whole site in French and English, when a crawler follows every link, then no page mentions a dead, buyable or private destination', async ({
  page,
  request,
}) => {
  const site = createSystemUnderTest({ page, request });
  await site.crawlerFollowsEveryLinkFrom(['/', '/en']);
  site.thenNoVisitedPageMentions(forbiddenDestinations, {
    visitedAtLeast: ['/projects/parent-up', '/en/projects/parent-up'],
  });
});

const languages = {
  fr: {
    name: 'French',
    projectsPath: '/projects',
    demoButton: 'Visiter le Projet',
  },
  en: {
    name: 'English',
    projectsPath: '/en/projects',
    demoButton: 'Visit Project',
  },
} as const satisfies Record<
  LanguageCode,
  { name: string; projectsPath: string; demoButton: string }
>;

/** Projects whose demo died: still shown, without demo, public repository kept. */
const projectsWithoutDemo = [
  { name: 'Parent Up', slug: 'parent-up', repository: undefined },
  { name: 'Terral Hub', slug: 'terralhub', repository: undefined },
  {
    name: 'CodeHaven',
    slug: 'code-haven',
    repository: 'https://github.com/bakate/code-haven',
  },
  {
    name: 'the CMS',
    slug: 'cms',
    repository: 'https://github.com/bakate/e-commerce-cms',
  },
];

for (const language of Object.values(languages)) {
  for (const project of projectsWithoutDemo) {
    const outcome = project.repository
      ? 'it is shown without a demo button and still links to its public repository'
      : 'it is shown without a demo button';

    test(`Given ${project.name}, whose demo is gone, when a visitor opens its ${language.name} page, then ${outcome}`, async ({
      page,
      request,
    }) => {
      const site = createSystemUnderTest({ page, request });
      await site.visitorOpens(`${language.projectsPath}/${project.slug}`);
      await site.thenPageHasNoLinkNamed(language.demoButton);
      if (project.repository) await site.thenPageLinksTo(project.repository);
    });
  }
}
