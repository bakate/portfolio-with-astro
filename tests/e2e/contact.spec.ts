import { test } from '@playwright/test';
import type { LanguageCode } from '@/i18n/ui';
import { createSystemUnderTest } from './support/system-under-test';

/** Public booking page. Never the Google Calendar admin URL, which only works for its owner. */
const bookingPage = 'https://calendar.app.google/jQDVwUPrguURGuBH9';

const languages = {
  fr: {
    name: 'French',
    lang: 'fr',
    contact: '/contact',
    sendButton: 'Envoyer',
    freelanceLine: 'Disponible aussi en mission freelance.',
    labels: {
      firstName: 'Prénom',
      lastName: 'Nom',
      email: 'Email',
      message: 'Message',
    },
    confirmation: 'Message envoyé avec succès !',
  },
  en: {
    name: 'English',
    lang: 'en',
    contact: '/en/contact',
    sendButton: 'Send',
    freelanceLine: 'Also available for freelance missions.',
    labels: {
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      message: 'Message',
    },
    confirmation: 'Message sent successfully!',
  },
} as const satisfies Record<
  LanguageCode,
  {
    name: string;
    lang: LanguageCode;
    contact: string;
    sendButton: string;
    freelanceLine: string;
    labels: Record<'firstName' | 'lastName' | 'email' | 'message', string>;
    confirmation: string;
  }
>;

const recruiter = {
  firstName: 'Camille',
  lastName: 'Martin',
  email: 'camille.martin@example.com',
  message: 'Bonjour, un poste Full-Stack TypeScript pourrait vous intéresser.',
};

for (const language of Object.values(languages)) {
  test(`Given the ${language.name} contact page, when a visitor looks for a call, then it links to the public booking page in a new tab`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.contact);
    await site.thenPageLinksInNewTabTo(bookingPage);
  });

  test(`Given the ${language.name} contact page, when a visitor arrives, then the booking link comes before the message form`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.contact);
    await site.thenLinkComesBeforeButton(bookingPage, language.sendButton);
  });

  test(`Given the ${language.name} contact page, when a client looks for a mission, then one line says freelance missions are welcome too`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.visitorOpens(language.contact);
    await site.thenPageShows([language.freelanceLine]);
  });

  test(`Given the ${language.name} contact page, when a recruiter fills in the form and sends it, then the message reaches the contact service in ${language.name} and the page confirms it was sent`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.givenTheContactServiceAcceptsMessages();
    await site.visitorOpens(language.contact);
    await site.visitorSendsMessage(
      {
        [language.labels.firstName]: recruiter.firstName,
        [language.labels.lastName]: recruiter.lastName,
        [language.labels.email]: recruiter.email,
        [language.labels.message]: recruiter.message,
      },
      language.sendButton
    );
    await site.thenContactServiceReceived({
      ...recruiter,
      lang: language.lang,
    });
    await site.thenVisitorIsTold(language.confirmation);
  });
}
