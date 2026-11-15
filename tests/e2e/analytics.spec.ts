import { test } from '@playwright/test';
import { createSystemUnderTest } from './support/system-under-test';

/** Hosts of Umami Cloud: its script and the endpoint that receives page views and events. */
const umamiHosts = ['umami.is', 'umami.dev'];

/** The suite's build is made without `PUBLIC_UMAMI_WEBSITE_ID`, as local and preview builds are. */
const pages = ['/', '/en', '/contact', '/en/contact', '/experience'];

for (const path of pages) {
  test(`Given a build without the Umami website ID, when a visitor opens ${path}, then the page loads no Umami script and sends nothing to Umami`, async ({
    page,
    request,
  }) => {
    const site = createSystemUnderTest({ page, request });
    await site.givenEveryRequestIsRecorded();
    await site.visitorOpens(path);
    await site.thenPageLoadsNoScriptFrom(umamiHosts);
    await site.thenNoRequestGoesTo(umamiHosts);
  });
}
