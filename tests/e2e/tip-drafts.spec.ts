import { test } from '@playwright/test';
import type { LanguageCode } from '@/i18n/ui';
import { createSystemUnderTest } from './support/system-under-test';

// The draft below is the one under review. When it is published, point these
// scenarios at the next draft, or remove them if none is left.
const languages = {
  fr: {
    name: 'the French',
    tips: '/tips',
    draft: {
      address: '/tips/fr/go-ports-adaptateurs-sans-implements',
      title:
        'Go vu par un dev TypeScript : des ports et adaptateurs sans implements',
    },
    published: '/tips/fr/premiere-astuce-vite',
  },
  en: {
    name: 'the English',
    tips: '/en/tips',
    draft: {
      address: '/en/tips/en/go-ports-and-adapters-without-implements',
      title:
        'Go Through a TypeScript Dev’s Eyes: Ports and Adapters Without implements',
    },
    published: '/en/tips/en/first-vite-tip',
  },
} as const satisfies Record<
  LanguageCode,
  {
    name: string;
    tips: string;
    draft: { address: string; title: string };
    published: string;
  }
>;

for (const language of Object.values(languages)) {
  test(`Given ${language.name} draft tip, when a visitor opens its hidden address, then the tip is shown and search engines are asked not to index it`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.draft.address);
    await site.thenPageHeadingIs(language.draft.title);
    await site.thenSearchEnginesAreAskedNotToIndexThePage();
  });

  test(`Given ${language.name} draft tip, when a visitor browses the tips, then the draft is not listed`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.tips);
    await site.thenPageDoesNotLinkTo(language.draft.address);
  });

  test(`Given ${language.name} published tip, when a visitor opens it, then search engines may index it`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.published);
    await site.thenSearchEnginesMayIndexThePage();
  });
}
