import { expect, test } from '@playwright/test';
import type { LanguageCode } from '@/i18n/ui';
import { crawlSite, localePath, locales } from './support/site';

const fullName = 'Bakate Idrissa Ba';
const jobTitle = 'Software Engineer Full-Stack TypeScript';

const heroByLocale = {
  fr: {
    pitch:
      "Je conçois des produits SaaS de bout en bout : un domaine métier isolé et testé (DDD, architecture hexagonale, TDD), quel que soit le framework (NestJS, Express…), des interfaces Next.js et Angular, et l'IA là où elle sert vraiment.",
    availability: 'Disponible · Hybride Île-de-France / remote',
  },
  en: {
    pitch:
      'I build SaaS products end to end: an isolated, tested business domain (DDD, hexagonal architecture, TDD), whatever the framework (NestJS, Express…), Next.js and Angular interfaces, and AI where it actually helps.',
    availability: 'Available · Hybrid Île-de-France / remote',
  },
} as const satisfies Record<
  LanguageCode,
  { pitch: string; availability: string }
>;

/** Former positioning, which must no longer present Bakate anywhere. */
const formerIdentities = [
  'Développeur Angular',
  'Angular Engineer',
  'Angular Expertise',
  'Expertise Angular',
];

for (const lang of locales) {
  test.describe(`home page (${lang})`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(localePath(lang, '/'));
    });

    test('hero shows name, title, pitch and availability', async ({ page }) => {
      const hero = page.locator('#hero');
      await expect(hero.getByRole('heading', { level: 1 })).toHaveText(
        'Bakate Idrissa'
      );
      await expect(hero).toContainText(jobTitle);
      await expect(hero).toContainText(heroByLocale[lang].pitch);
      await expect(hero).toContainText(heroByLocale[lang].availability);
      await expect(hero).not.toContainText('Fastify');
    });

    test('title and Open Graph use the full name and new title', async ({
      page,
      request,
    }) => {
      await expect(page).toHaveTitle(new RegExp(fullName));
      const meta = (property: string) =>
        page.locator(`meta[property="${property}"]`).getAttribute('content');

      expect(await meta('og:title')).toContain(fullName);
      expect(await meta('og:description')).toContain('Full-Stack TypeScript');

      const ogImage = await meta('og:image');
      expect(ogImage).toBeTruthy();
      const image = await request.get(new URL(ogImage!).pathname);
      expect(image.status()).toBe(200);
      expect(image.headers()['content-type']).toBe('image/png');
    });

    test('declares a Person in structured data', async ({ page }) => {
      const json = await page
        .locator('script[type="application/ld+json"]')
        .textContent();
      const person = JSON.parse(json!);
      expect(person).toMatchObject({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: fullName,
        jobTitle,
      });
      expect(person.sameAs).toEqual(
        expect.arrayContaining([
          expect.stringContaining('github.com/'),
          expect.stringContaining('linkedin.com/in/'),
        ])
      );
    });
  });
}

test('no page presents the former Angular identity', async ({ request }) => {
  const pages = await crawlSite(request);
  const offenders = [...pages].flatMap(([path, html]) =>
    formerIdentities
      .filter((identity) => html.toLowerCase().includes(identity.toLowerCase()))
      .map((identity) => `${path} → ${identity}`)
  );
  expect(offenders).toEqual([]);
});
