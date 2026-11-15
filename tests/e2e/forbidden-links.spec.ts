import { expect, test } from '@playwright/test';
import { crawlSite, localePath, locales } from './support/site';

/** Expired, dead or login-walled destinations no page may point to. */
const forbiddenDomains = [
  'parentup.eu', // expired, can be bought by anyone
  'codehaven.eu', // no longer answers
  'terral-hub-senegal', // responds 500
  'e-commerce-cms-ebon', // CMS demo, only shows a login page
];

test('no page references a dead or buyable domain', async ({ request }) => {
  const pages = await crawlSite(request);

  for (const lang of locales) {
    expect(pages.has(localePath(lang, '/projects/parent-up'))).toBe(true);
  }

  const offenders = [...pages].flatMap(([path, html]) =>
    forbiddenDomains
      .filter((domain) => html.includes(domain))
      .map((domain) => `${path} → ${domain}`)
  );
  expect(offenders).toEqual([]);
});
