import { expect, test } from '@playwright/test';
import type { LanguageCode } from '@/i18n/ui';
import { findMentions, localePath, locales } from './support/site';

/** Destinations no page may point to. */
const forbiddenDomains = [
  'parentup.eu', // expired, can be bought by anyone
  'codehaven.eu', // no longer answers
  'terral-hub-senegal', // responds 500
  'e-commerce-cms-ebon', // CMS demo, only shows a login page
  'calendar.google.com', // Google Calendar admin, only works for its owner
];

test('no page references a dead, buyable or private destination', async ({
  request,
}) => {
  expect(await findMentions(request, forbiddenDomains)).toEqual([]);
});

const demoButtonByLocale = {
  fr: 'Visiter le Projet',
  en: 'Visit Project',
} as const satisfies Record<LanguageCode, string>;

/** Projects whose demo died: still shown, without demo, public repo kept. */
const projectsWithoutDemo = [
  { slug: 'parent-up', repository: undefined },
  { slug: 'terralhub', repository: undefined },
  { slug: 'code-haven', repository: 'https://github.com/bakate/code-haven' },
  { slug: 'cms', repository: 'https://github.com/bakate/e-commerce-cms' },
];

for (const lang of locales) {
  for (const { slug, repository } of projectsWithoutDemo) {
    test(`${slug} (${lang}) stays listed without a demo button`, async ({
      page,
    }) => {
      const response = await page.goto(localePath(lang, `/projects/${slug}`));
      expect(response?.status()).toBe(200);
      await expect(
        page.getByRole('link', { name: demoButtonByLocale[lang] })
      ).toHaveCount(0);
      if (repository) {
        await expect(
          page.locator(`main a[href="${repository}"]`).first()
        ).toBeVisible();
      }
    });
  }
}
