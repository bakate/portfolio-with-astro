import { test } from '@playwright/test';
import type { LanguageCode } from '@/i18n/ui';
import { createSystemUnderTest } from './support/system-under-test';

/**
 * The basic JavaScript articles written before the redesign. They stay on the
 * blog but no longer speak for Bakate on the home page.
 */
const languages = {
  fr: {
    name: 'French',
    home: '/',
    blog: '/blog',
    oldJavaScriptArticles: [
      '/blog/fr/closures-javascript-la-memoire-des-fonctions',
      '/blog/fr/javascript-typeof-null-evolution',
      '/blog/fr/objets-javascript-ordre-insertion-proprietes',
      '/blog/fr/fonctions-javascript-specialisation-es6',
    ],
    drafts: [
      '/blog/fr/qualifier-un-modele-ia-comme-une-dependance',
      '/tips/fr/go-ports-adaptateurs-sans-implements',
    ],
  },
  en: {
    name: 'English',
    home: '/en',
    blog: '/en/blog',
    oldJavaScriptArticles: [
      '/en/blog/en/javascript-closures-function-memory',
      '/en/blog/en/javascript-typeof-null-evolution',
      '/en/blog/en/javascript-objects-property-insertion-order',
      '/en/blog/en/javascript-functions-es6-specialization',
    ],
    drafts: [
      '/en/blog/en/qualifying-an-ai-model-as-a-dependency',
      '/en/tips/en/go-ports-and-adapters-without-implements',
    ],
  },
} as const satisfies Record<
  LanguageCode,
  {
    name: string;
    home: string;
    blog: string;
    oldJavaScriptArticles: ReadonlyArray<string>;
    drafts: ReadonlyArray<string>;
  }
>;

for (const language of Object.values(languages)) {
  test(`Given the old basic JavaScript articles, when a visitor opens the ${language.name} home page, then none of them is linked`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.home);
    for (const article of language.oldJavaScriptArticles) {
      await site.thenPageDoesNotLinkTo(article);
    }
  });

  test(`Given the old basic JavaScript articles, when a visitor browses the ${language.name} blog, then each of them is still listed`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.blog);
    for (const article of language.oldJavaScriptArticles) {
      await site.thenPageLinksToPage(article);
    }
  });

  // While the first recent article and tip are drafts, nothing recent is
  // published. When one of them is, replace this scenario with one that reads
  // it in the latest content section.
  test(`Given no recent article or tip is published yet, when a visitor opens the ${language.name} home page, then no latest content section is shown and no draft is linked`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.home);
    await site.thenPageHasNoSection('latest');
    for (const draft of language.drafts) {
      await site.thenPageDoesNotLinkTo(draft);
    }
  });
}
