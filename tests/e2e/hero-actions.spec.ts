import { expect, test, type Locator } from '@playwright/test';
import type { LanguageCode } from '@/i18n/ui';
import { localePath, locales } from './support/site';

/** Public booking page. Never the Google Calendar admin URL, which only works for its owner. */
const bookingUrl = 'https://calendar.app.google/jQDVwUPrguURGuBH9';

const labelsByLocale = {
  fr: { book: 'Réserver 15 min', cv: 'Télécharger mon CV' },
  en: { book: 'Book a 15-min call', cv: 'Download my CV' },
} as const satisfies Record<LanguageCode, { book: string; cv: string }>;

async function expectOpensBookingInNewTab(link: Locator) {
  await expect(link).toHaveAttribute('href', bookingUrl);
  await expect(link).toHaveAttribute('target', '_blank');
  await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
}

for (const lang of locales) {
  const labels = labelsByLocale[lang];

  test.describe(`hero actions (${lang})`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(localePath(lang, '/'));
    });

    test('"book a call" opens the public booking page in a new tab', async ({
      page,
    }) => {
      const hero = page.locator('#hero');
      await expectOpensBookingInNewTab(
        hero.getByRole('link', { name: labels.book })
      );
    });

    test('"download my CV" serves the PDF in the page language', async ({
      page,
      request,
    }) => {
      const link = page.locator('#hero').getByRole('link', { name: labels.cv });
      const href = await link.getAttribute('href');
      expect(href).toBe(`/cv/bakate-idrissa-ba-cv-${lang}.pdf`);

      const pdf = await request.get(href!);
      expect(pdf.status()).toBe(200);
      expect(pdf.headers()['content-type']).toBe('application/pdf');
    });
  });

  test(`contact page links to the booking page (${lang})`, async ({ page }) => {
    await page.goto(localePath(lang, '/contact'));
    await expectOpensBookingInNewTab(
      page.locator(`main a[href="${bookingUrl}"]`).first()
    );
  });
}
