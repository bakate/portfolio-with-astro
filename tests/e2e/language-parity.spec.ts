import { expect, test } from '@playwright/test';
import { defaultLanguage } from '@/i18n/ui';
import {
  localePath,
  locales,
  projectRoutes,
  sectionRoutes,
} from './support/site';

test.describe('language parity', () => {
  for (const lang of locales) {
    for (const route of sectionRoutes) {
      const path = localePath(lang, route);
      test(`${path} responds 200`, async ({ request }) => {
        expect((await request.get(path)).status()).toBe(200);
      });
    }
  }

  test('every French project page has an English counterpart', async ({
    request,
  }) => {
    const frenchProjects = await projectRoutes(request, defaultLanguage);
    expect(frenchProjects.length).toBeGreaterThan(0);

    for (const lang of locales) {
      expect(await projectRoutes(request, lang)).toEqual(frenchProjects);
      for (const route of frenchProjects) {
        const path = localePath(lang, route);
        expect((await request.get(path)).status(), path).toBe(200);
      }
    }
  });

  test('an unknown page responds 404', async ({ request }) => {
    expect((await request.get('/this-page-does-not-exist')).status()).toBe(404);
  });
});
