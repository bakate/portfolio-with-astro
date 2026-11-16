import { test } from '@playwright/test';
import type { LanguageCode } from '@/i18n/ui';
import { createSystemUnderTest } from './support/system-under-test';

const languages = {
  fr: { name: 'French', home: '/' },
  en: { name: 'English', home: '/en' },
} as const satisfies Record<LanguageCode, { name: string; home: string }>;

/** The home page's sections, by their anchors, in reading order. */
const sections = [
  'hero',
  'proof',
  'experience',
  'projects',
  'how-i-work',
] as const;

for (const language of Object.values(languages)) {
  test(`Given the ${language.name} home page, when it is captured in full without scrolling, then every section shows its content`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorAllowsMotion();
    await site.visitorOpens(language.home);
    await site.thenFullPageCaptureShowsEverySection(sections);
  });

  test(`Given the ${language.name} home page and a visitor who allows motion, when they scroll to the bottom, then the sections fade in on the way and every section shows its content`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorAllowsMotion();
    await site.visitorOpens(language.home);
    await site.visitorScrollsToTheBottom();
    await site.thenSomeSectionsFadeIn();
    await site.thenFullPageCaptureShowsEverySection(sections);
  });

  test(`Given a visitor who allows motion and has scrolled to the bottom of the ${language.name} home page, when they reload it, then the sections on screen show their content without fading in`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorAllowsMotion();
    await site.visitorOpens(language.home);
    await site.visitorScrollsToTheBottom();
    await site.visitorReloadsThePage();
    await site.thenNoSectionAnimates();
  });

  test(`Given the ${language.name} home page and a visitor who prefers reduced motion, when they scroll to the bottom, then nothing animates and every section shows its content`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorPrefersReducedMotion();
    await site.visitorOpens(language.home);
    await site.visitorScrollsToTheBottom();
    await site.thenNoSectionAnimates();
    await site.thenFullPageCaptureShowsEverySection(sections);
  });
}

test.describe('without JavaScript', () => {
  test.use({ javaScriptEnabled: false });

  for (const language of Object.values(languages)) {
    test(`Given the ${language.name} home page and a visitor without JavaScript, when it is captured in full, then every section shows its content`, async ({
      page,
      request,
    }) => {
      const site = createSystemUnderTest({ page, request });
      await site.visitorOpens(language.home);
      await site.thenFullPageCaptureShowsEverySection(sections);
    });
  }
});
