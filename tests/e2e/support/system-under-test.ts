import { expect, type APIRequestContext, type Page } from '@playwright/test';

type Fixtures = { page: Page; request: APIRequestContext };

const hrefsIn = (html: string): Array<string> =>
  [...html.matchAll(/href="([^"]+)"/g)].map(([, href]) => href);

const isInternalPage = (href: string) =>
  href.startsWith('/') &&
  !href.startsWith('//') &&
  !href.startsWith('/_astro/') &&
  !href.startsWith('/favicons/') &&
  !/\.[a-z0-9]+$/i.test(href);

const withoutQueryOrTrailingSlash = (href: string) =>
  href.split(/[?#]/)[0].replace(/(.)\/$/, '$1');

/**
 * The built site as a visitor and a crawler see it. Scenario bodies call these
 * helpers only: Given/When steps first, then the `then*` checks.
 */
export function createSystemUnderTest({ page, request }: Fixtures) {
  const crawled = new Map<string, string>();
  const hero = page.locator('#hero');

  async function statusOf(path: string): Promise<number> {
    return (await request.get(path)).status();
  }

  async function projectPagesListedOn(projectsPath: string) {
    const prefix = `${projectsPath}/`;
    const html = await (await request.get(projectsPath)).text();
    const slugs = hrefsIn(html)
      .filter((href) => href.startsWith(prefix) && href.length > prefix.length)
      .map((href) => withoutQueryOrTrailingSlash(href.slice(prefix.length)));
    return [...new Set(slugs)].sort();
  }

  const meta = (property: string) =>
    page.locator(`meta[property="${property}"]`).getAttribute('content');

  /** Bodies posted to the contact service, once it is stubbed. */
  const messagesReceived: Array<unknown> = [];

  return {
    // Given / When

    /**
     * The static build serves no API, so the contact service is stubbed. It
     * answers success with no message of its own: the confirmation the visitor
     * reads is the site's.
     */
    async givenTheContactServiceAcceptsMessages() {
      await page.route('**/api/contact', async (route) => {
        messagesReceived.push(route.request().postDataJSON());
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ status: 'success', message: '' }),
        });
      });
    },

    /** Fills each field by its visible label, then presses the send button. */
    async visitorSendsMessage(
      fields: Record<string, string>,
      sendButton: string
    ) {
      const form = page.locator('main form');
      // The form is a React island: typing before it hydrates is lost, as it
      // would be for a visitor on a slow connection.
      await page.waitForFunction(
        () => !document.querySelector('main astro-island:has(form)[ssr]')
      );
      for (const [label, value] of Object.entries(fields)) {
        await form.getByLabel(label, { exact: true }).fill(value);
      }
      await form.getByRole('button', { name: sendButton, exact: true }).click();
    },

    async visitorOpens(path: string) {
      const response = await page.goto(path);
      expect(response?.status(), path).toBe(200);
    },

    async visitorOpensMissingPage(path: string) {
      const response = await page.goto(path);
      expect(response?.status(), path).toBe(404);
    },

    /** Follows every internal link, breadth-first, from the given home pages. */
    async crawlerFollowsEveryLinkFrom(homes: ReadonlyArray<string>) {
      const queue = [...homes];
      const seen = new Set(queue);
      for (let next = queue.shift(); next; next = queue.shift()) {
        const response = await request.get(next);
        if (!response.ok()) continue;
        const html = await response.text();
        crawled.set(next, html);
        for (const href of hrefsIn(html).map(withoutQueryOrTrailingSlash)) {
          if (isInternalPage(href) && !seen.has(href)) {
            seen.add(href);
            queue.push(href);
          }
        }
      }
    },

    // Then

    async thenEachAddressResponds(
      paths: ReadonlyArray<string>,
      status: number
    ) {
      for (const path of paths) expect(await statusOf(path), path).toBe(status);
    },

    async thenEveryProjectPageHasACounterpart(
      projectsPathByLanguage: Record<string, string>
    ) {
      const [reference, ...others] = Object.values(projectsPathByLanguage);
      const slugs = await projectPagesListedOn(reference);
      expect(slugs.length, `projects listed on ${reference}`).toBeGreaterThan(
        0
      );
      for (const projectsPath of [reference, ...others]) {
        expect(await projectPagesListedOn(projectsPath), projectsPath).toEqual(
          slugs
        );
        for (const slug of slugs) {
          const path = `${projectsPath}/${slug}`;
          expect(await statusOf(path), path).toBe(200);
        }
      }
    },

    /** Fails on an empty crawl, so an unreachable site never passes. */
    thenNoVisitedPageMentions(
      needles: ReadonlyArray<string>,
      { visitedAtLeast }: { visitedAtLeast: ReadonlyArray<string> }
    ) {
      for (const path of visitedAtLeast) {
        expect(crawled.has(path), `crawl reached ${path}`).toBe(true);
      }
      const mentions = [...crawled].flatMap(([path, html]) => {
        const text = html.toLowerCase();
        return needles
          .filter((needle) => text.includes(needle.toLowerCase()))
          .map((needle) => `${path} → ${needle}`);
      });
      expect(mentions).toEqual([]);
    },

    async thenHeroShows({
      heading,
      texts,
      without,
    }: {
      heading: string;
      texts: ReadonlyArray<string>;
      without: ReadonlyArray<string>;
    }) {
      await expect(hero.getByRole('heading', { level: 1 })).toHaveText(heading);
      for (const text of texts) await expect(hero).toContainText(text);
      for (const text of without) await expect(hero).not.toContainText(text);
    },

    async thenPageIsSharedAs({
      title,
      description,
    }: {
      title: string;
      description: string;
    }) {
      await expect(page).toHaveTitle(new RegExp(title));
      expect(await meta('og:title')).toContain(title);
      expect(await meta('og:description')).toContain(description);
    },

    /** The image must be announced at its production URL and served by the build. */
    async thenShareImageIs(url: string) {
      expect(await meta('og:image')).toBe(url);
      const image = await request.get(new URL(url).pathname);
      expect(image.status()).toBe(200);
      expect(image.headers()['content-type']).toBe('image/png');
    },

    async thenPageDeclaresPerson(expected: {
      name: string;
      jobTitle: string;
      profiles: ReadonlyArray<string>;
    }) {
      const json = await page
        .locator('script[type="application/ld+json"]')
        .textContent();
      const person = JSON.parse(json ?? '{}') as Record<string, unknown>;
      expect(person).toMatchObject({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: expected.name,
        jobTitle: expected.jobTitle,
      });
      expect(person.sameAs).toEqual(
        expect.arrayContaining([...expected.profiles])
      );
    },

    async thenHeroLinkOpensInNewTab(name: string, url: string) {
      const link = hero.getByRole('link', { name });
      await expect(link).toHaveAttribute('href', url);
      await expect(link).toHaveAttribute('target', '_blank');
      await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    },

    async thenPageLinksInNewTabTo(url: string) {
      const link = page.locator(`main a[href="${url}"]`).first();
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('target', '_blank');
      await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    },

    async thenHeroLinkDownloads(
      name: string,
      file: { path: string; contentType: string }
    ) {
      const link = hero.getByRole('link', { name });
      await expect(link).toHaveAttribute('href', file.path);
      const response = await request.get(file.path);
      expect(response.status()).toBe(200);
      expect(response.headers()['content-type']).toBe(file.contentType);
    },

    async thenPageHasNoLinkNamed(name: string) {
      await expect(page.getByRole('link', { name })).toHaveCount(0);
    },

    async thenPageDoesNotLinkTo(path: string) {
      await expect(page.locator(`a[href^="${path}"]`)).toHaveCount(0);
    },

    async thenPageHeadingIs(heading: string) {
      await expect(page.getByRole('heading', { level: 1 })).toHaveText(heading);
    },

    async thenSearchEnginesAreAskedNotToIndexThePage() {
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
        'content',
        /noindex/
      );
    },

    async thenSearchEnginesMayIndexThePage() {
      await expect(
        page.locator('meta[name="robots"][content*="noindex"]')
      ).toHaveCount(0);
    },

    async thenPageLinksTo(url: string) {
      await expect(page.locator(`main a[href="${url}"]`).first()).toBeVisible();
    },

    async thenPageShows(texts: ReadonlyArray<string>) {
      const main = page.locator('main');
      for (const text of texts) await expect(main).toContainText(text);
    },

    async thenPageNeverMentions(texts: ReadonlyArray<string>) {
      const main = page.locator('main');
      await expect(main).toBeVisible();
      for (const text of texts) await expect(main).not.toContainText(text);
    },

    async thenVisitorIsTold(confirmation: string) {
      await expect(page.getByText(confirmation, { exact: true })).toBeVisible();
    },

    async thenFormExplains(errors: ReadonlyArray<string>) {
      const form = page.locator('main form');
      for (const error of errors) {
        await expect(form.getByText(error, { exact: true })).toBeVisible();
      }
    },

    thenContactServiceReceivedNothing() {
      expect(messagesReceived).toEqual([]);
    },

    async thenContactServiceReceived(message: Record<string, string>) {
      await expect.poll(() => messagesReceived).toEqual([message]);
    },

    /** The page's sections (level-2 headings), in reading order. */
    async thenSectionsAre(headings: ReadonlyArray<string>) {
      await expect(
        page.locator('main').getByRole('heading', { level: 2 })
      ).toHaveText([...headings]);
    },

    async thenLinkComesBeforeButton(url: string, buttonName: string) {
      const link = page.locator(`main a[href="${url}"]`).first();
      const button = page.getByRole('button', {
        name: buttonName,
        exact: true,
      });
      await expect(link).toBeVisible();
      await expect(button).toBeVisible();
      const linkIsFirst = await link.evaluate(
        (linkElement, buttonElement) =>
          Boolean(
            linkElement.compareDocumentPosition(buttonElement as Node) &
            Node.DOCUMENT_POSITION_FOLLOWING
          ),
        await button.elementHandle()
      );
      expect(linkIsFirst, `${url} before "${buttonName}"`).toBe(true);
    },

    async thenPageHasButton(name: string) {
      await expect(
        page.getByRole('button', { name, exact: true })
      ).toBeVisible();
    },
  };
}
