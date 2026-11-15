import { test } from '@playwright/test';
import type { LanguageCode } from '@/i18n/ui';
import { createSystemUnderTest } from './support/system-under-test';

/** Public booking page. Never the Google Calendar admin URL, which only works for its owner. */
const bookingPage = 'https://calendar.app.google/jQDVwUPrguURGuBH9';

const languages = {
  fr: {
    name: 'French',
    home: '/',
    contact: '/contact',
    bookButton: 'Réserver 15 min',
    cvButton: 'Télécharger mon CV',
    cv: '/cv/bakate-idrissa-ba-cv-fr.pdf',
    sendButton: 'Envoyer',
  },
  en: {
    name: 'English',
    home: '/en',
    contact: '/en/contact',
    bookButton: 'Book a 15-min call',
    cvButton: 'Download my CV',
    cv: '/cv/bakate-idrissa-ba-cv-en.pdf',
    sendButton: 'Send',
  },
} as const satisfies Record<
  LanguageCode,
  {
    name: string;
    home: string;
    contact: string;
    bookButton: string;
    cvButton: string;
    cv: string;
    sendButton: string;
  }
>;

for (const language of Object.values(languages)) {
  test(`Given the ${language.name} home page, when a visitor chooses "${language.bookButton}", then the public booking page opens in a new tab`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.home);
    await site.thenHeroLinkOpensInNewTab(language.bookButton, bookingPage);
  });

  test(`Given the ${language.name} home page, when a visitor chooses "${language.cvButton}", then the ${language.name} CV downloads as a PDF`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.home);
    await site.thenHeroLinkDownloads(language.cvButton, {
      path: language.cv,
      contentType: 'application/pdf',
    });
  });

  test(`Given the ${language.name} contact page, when a visitor looks for a call, then it links to the public booking page in a new tab`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.contact);
    await site.thenPageLinksInNewTabTo(bookingPage);
  });

  test(`Given the ${language.name} contact page, when a visitor prefers writing, then the message form is still there`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.contact);
    await site.thenPageHasButton(language.sendButton);
  });
}
