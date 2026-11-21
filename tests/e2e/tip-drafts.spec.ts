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
      title: 'Des ports et adaptateurs sans implements',
      series: ['Série · Go vu par un dev Node.js', 'Partie 1 sur 1'],
    },
    published: '/tips/fr/premiere-astuce-vite',
  },
  en: {
    name: 'the English',
    tips: '/en/tips',
    draft: {
      address: '/en/tips/en/go-ports-and-adapters-without-implements',
      title: 'Ports and Adapters Without implements',
      series: ['Series · Go Through a Node.js Dev’s Eyes', 'Part 1 of 1'],
    },
    published: '/en/tips/en/first-vite-tip',
  },
} as const satisfies Record<
  LanguageCode,
  {
    name: string;
    tips: string;
    draft: {
      address: string;
      title: string;
      series: ReadonlyArray<string>;
    };
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

  test(`Given ${language.name} draft tip opening a series, when a visitor opens it, then the page names the series and the tip's place in it`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.draft.address);
    await site.thenPageShows(language.draft.series);
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
