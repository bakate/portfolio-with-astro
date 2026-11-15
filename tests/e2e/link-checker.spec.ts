import { test } from './support/link-checker-under-test';

// `.invalid` is reserved (RFC 2606): it never resolves, like a domain left to expire.
const expiredDomain = 'https://portfolio-demo.invalid/';

test('Given a built site linking to a domain that no longer resolves, a demo answering 500 and a demo now behind a login page, when the link checker runs, then it fails and reports each link with its problem and the page it is on', async ({
  linkChecker,
}) => {
  const failingDemo = linkChecker.thirdPartyAddress('/failing-demo');
  const privateDemo = linkChecker.thirdPartyAddress('/private-demo');
  linkChecker.givenBuiltPageLinksTo('projects/parent-up', [expiredDomain]);
  linkChecker.givenBuiltPageLinksTo('en/projects/terralhub', [failingDemo]);
  linkChecker.givenBuiltPageLinksTo('projects/cms', [privateDemo]);

  await linkChecker.whenTheLinkCheckerRuns();

  linkChecker.thenTheCheckFails();
  linkChecker.thenReportFlags(expiredDomain, 'domain does not resolve', {
    on: '/projects/parent-up',
  });
  linkChecker.thenReportFlags(failingDemo, 'HTTP 500', {
    on: '/en/projects/terralhub',
  });
  linkChecker.thenReportFlags(privateDemo, 'redirects to a login page', {
    on: '/projects/cms',
  });
});

test('Given a built site linking to an address that now redirects to another domain, when the link checker runs, then it fails and reports the redirect', async ({
  linkChecker,
}) => {
  const movedAddress = linkChecker.thirdPartyAddress('/moved-demo');
  linkChecker.givenBuiltPageLinksTo('projects/code-haven', [movedAddress]);

  await linkChecker.whenTheLinkCheckerRuns();

  linkChecker.thenTheCheckFails();
  linkChecker.thenReportFlags(movedAddress, 'redirects to another domain', {
    on: '/projects/code-haven',
  });
});

test('Given a built site whose external links all answer, when the link checker runs, then it passes without flagging them or the internal links', async ({
  linkChecker,
}) => {
  const healthyDemo = linkChecker.thirdPartyAddress('/healthy');
  linkChecker.givenBuiltPageLinksTo('', [healthyDemo, '/projects', '#hero']);

  await linkChecker.whenTheLinkCheckerRuns();

  linkChecker.thenTheCheckPasses();
  linkChecker.thenReportDoesNotFlag([healthyDemo, '/projects', '#hero']);
});

test('Given a built site linking to a page that was removed and to a demo that never answers, when the link checker runs, then it fails and reports the 404 and the timeout', async ({
  linkChecker,
}) => {
  const removedPage = linkChecker.thirdPartyAddress('/removed-page');
  const silentDemo = linkChecker.thirdPartyAddress('/silent-demo');
  linkChecker.givenBuiltPageLinksTo('blog/fr/objets', [removedPage]);
  linkChecker.givenBuiltPageLinksTo('en/projects/avionics', [silentDemo]);

  await linkChecker.whenTheLinkCheckerRuns();

  linkChecker.thenTheCheckFails();
  linkChecker.thenReportFlags(removedPage, 'HTTP 404', {
    on: '/blog/fr/objets',
  });
  linkChecker.thenReportFlags(silentDemo, 'no answer within 1s', {
    on: '/en/projects/avionics',
  });
});
