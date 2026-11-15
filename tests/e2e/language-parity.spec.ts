import { test } from '@playwright/test';
import { createSystemUnderTest } from './support/system-under-test';

const sectionAddresses = [
  { fr: '/', en: '/en' },
  { fr: '/experience', en: '/en/experience' },
  { fr: '/projects', en: '/en/projects' },
  { fr: '/blog', en: '/en/blog' },
  { fr: '/tips', en: '/en/tips' },
  { fr: '/contact', en: '/en/contact' },
];

test('Given every section of the site, when a visitor requests it in French and in English, then both pages respond', async ({
  page,
  request,
}) => {
  const site = createSystemUnderTest({ page, request });
  await site.thenEachAddressResponds(
    sectionAddresses.flatMap(({ fr, en }) => [fr, en]),
    200
  );
});

test('Given the projects listed in French, when a visitor opens each project in English, then the same projects are listed and every page responds', async ({
  page,
  request,
}) => {
  const site = createSystemUnderTest({ page, request });
  await site.thenEveryProjectPageHasACounterpart({
    fr: '/projects',
    en: '/en/projects',
  });
});

test('Given an address the site does not have, when a visitor requests it, then the site answers not found', async ({
  page,
  request,
}) => {
  const site = createSystemUnderTest({ page, request });
  await site.thenEachAddressResponds(['/this-page-does-not-exist'], 404);
});
