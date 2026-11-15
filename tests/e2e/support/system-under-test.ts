import {
  expect,
  type APIRequestContext,
  type Locator,
  type Page,
} from '@playwright/test';
import type { Proof } from '@/features/projects';

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
  const proof = page.locator('#proof');

  async function boxOf(locator: Locator) {
    const box = await locator.boundingBox();
    expect(box, 'element is laid out').not.toBeNull();
    return box!;
  }

  type Box = Awaited<ReturnType<typeof boxOf>>;

  /** True when the two boxes overlap vertically, i.e. sit on the same rows. */
  const sharesRows = (a: Box, b: Box) =>
    a.y < b.y + b.height && b.y < a.y + a.height;

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

  return {
    // Given / When

    async visitorOpens(path: string) {
      const response = await page.goto(path);
      expect(response?.status(), path).toBe(200);
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

    async thenProofSectionShows(proofs: ReadonlyArray<Proof>) {
      const items = proof.getByRole('listitem');
      await expect(items).toHaveCount(proofs.length);
      for (const [index, { figure, context }] of proofs.entries()) {
        await expect(items.nth(index)).toContainText(figure);
        await expect(items.nth(index)).toContainText(context);
      }
    },

    async thenProofSectionHasNoImage() {
      await expect(proof).toBeVisible();
      await expect(proof.getByRole('img')).toHaveCount(0);
    },

    /** Reads every image's description and address for the given names. */
    async thenNoImageOnThePageShows(names: ReadonlyArray<string>) {
      const images = await page
        .locator('img')
        .evaluateAll((elements) =>
          elements.map(
            (image) =>
              `${image.getAttribute('alt') ?? ''} ${image.getAttribute('src') ?? ''}`
          )
        );
      expect(images.length, 'images on the page').toBeGreaterThan(0);
      const matches = images.filter((image) =>
        names.some((name) => image.toLowerCase().includes(name.toLowerCase()))
      );
      expect(matches).toEqual([]);
    },

    async thenHeroPhotoIsDescribedAs(alt: string) {
      await expect(hero.getByRole('img', { name: alt })).toBeVisible();
    },

    async visitorUsesAScreenWide(width: number) {
      await page.setViewportSize({ width, height: 800 });
    },

    async thenPageDoesNotScrollSideways() {
      const { scrollWidth, clientWidth } = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }));
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
    },

    /** Beside: overlapping rows. Above: photo ends before the name starts. */
    async thenHeroPhotoIsNextToTheName() {
      const photo = await boxOf(hero.getByRole('img'));
      const name = await boxOf(hero.getByRole('heading', { level: 1 }));
      const beside = sharesRows(photo, name);
      const above = photo.y + photo.height <= name.y;
      expect(beside || above, 'photo beside or above the name').toBe(true);
      expect(photo.height, 'compact photo').toBeLessThan(200);
    },

    /**
     * The title block and the pitch start at the left edge the next section
     * starts from, the pitch stops well before the right edge, and the photo
     * stays compact on the title rows instead of filling a column of its own.
     */
    async thenHeroIsAsymmetric({ pitch }: { pitch: string }) {
      const section = await boxOf(hero);
      const leftEdge = (await boxOf(proof.getByRole('heading'))).x;
      const name = await boxOf(hero.getByRole('heading', { level: 1 }));
      const photo = await boxOf(hero.getByRole('img'));
      const text = await boxOf(hero.getByText(pitch));
      expect(photo.x, 'title block starts at the left edge').toBeCloseTo(
        leftEdge,
        0
      );
      expect(text.x, 'pitch starts at the left edge').toBeCloseTo(leftEdge, 0);
      expect(
        text.x + text.width,
        'right side of the hero left open'
      ).toBeLessThan(section.x + section.width * 0.75);
      expect(photo.width, 'compact photo').toBeLessThan(section.width / 4);
      expect(sharesRows(photo, name), 'photo shares the title rows').toBe(true);
    },

    async thenPageHasButton(name: string) {
      await expect(
        page.getByRole('button', { name, exact: true })
      ).toBeVisible();
    },
  };
}
