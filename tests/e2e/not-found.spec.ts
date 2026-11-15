import { test } from '@playwright/test';
import { createSystemUnderTest } from './support/system-under-test';

// The build serves a single not-found page for every unknown address, French or
// English, so that page speaks both languages.
const missingAddresses = [
  '/this-page-does-not-exist',
  '/en/this-page-does-not-exist',
];

for (const address of missingAddresses) {
  test(`Given ${address}, which the site does not have, when a visitor lands on it, then the page says so in French and English and leads back to both home pages`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpensMissingPage(address);
    await site.thenPageHeadingIs('Page introuvable');
    await site.thenPageShows(['Page not found']);
    await site.thenPageLinksTo('/');
    await site.thenPageLinksTo('/en/');
  });
}

test('Given an address the site does not have, when a search engine lands on it, then it is asked not to index the page', async ({
  page,
  request,
}) => {
  const site = createSystemUnderTest({ page, request });
  await site.visitorOpensMissingPage('/this-page-does-not-exist');
  await site.thenSearchEnginesAreAskedNotToIndexThePage();
});
