import { test } from '@playwright/test';
import type { LanguageCode } from '@/i18n/ui';
import { createSystemUnderTest } from './support/system-under-test';

// The draft below is the one under review. When it is published, point these
// scenarios at the next draft, or remove them if none is left.
const languages = {
  fr: {
    name: 'the French',
    blog: '/blog',
    draft: {
      address: '/blog/fr/qualifier-un-modele-ia-comme-une-dependance',
      title:
        "Qualifier un modèle d'IA comme une dépendance : évaluations enregistrées dans un projet DDD",
    },
    published: '/blog/fr/javascript-typeof-null-evolution',
  },
  en: {
    name: 'the English',
    blog: '/en/blog',
    draft: {
      address: '/en/blog/en/qualifying-an-ai-model-as-a-dependency',
      title:
        'Qualifying an AI Model as a Dependency: Recorded Evaluations in a DDD Project',
    },
    published: '/en/blog/en/javascript-typeof-null-evolution',
  },
} as const satisfies Record<
  LanguageCode,
  {
    name: string;
    blog: string;
    draft: { address: string; title: string };
    published: string;
  }
>;

for (const language of Object.values(languages)) {
  test(`Given ${language.name} draft article, when a visitor opens its hidden address, then the article is shown and search engines are asked not to index it`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.draft.address);
    await site.thenPageHeadingIs(language.draft.title);
    await site.thenSearchEnginesAreAskedNotToIndexThePage();
  });

  test(`Given ${language.name} draft article, when a visitor browses the blog, then the draft is not listed`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.blog);
    await site.thenPageDoesNotLinkTo(language.draft.address);
  });

  test(`Given ${language.name} published article, when a visitor opens it, then search engines may index it`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.published);
    await site.thenSearchEnginesMayIndexThePage();
  });
}
