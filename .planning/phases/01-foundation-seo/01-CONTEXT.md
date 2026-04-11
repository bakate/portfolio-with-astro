# Context: Phase 1 — Foundation & SEO

## Decisions

### 1. Metadata & Defaults
- **Mandatory Description**: Every blog post or tip MUST provide a `description` in its frontmatter. No auto-truncation logic for now (user's preference for quality control).
- **Internationalization**: Global SEO defaults (title, description) will be stored in `src/i18n/ui.ts` under the `site` key for each language.
- **Canonical URLs**: The `BaseLayout` will automatically generate `<link rel="alternate" hreflang="..." />` tags based on available locales to optimize international SEO.

### 2. OpenGraph Strategy (SEO-02)
- **Manual Control**: Articles can specify an `image` path in their frontmatter.
- **Fallback**: If no image is provided, the system defaults to a generic "Brand" OpenGraph image (e.g., logo with tagline).

### 3. Reading Time (BLOG-03)
- **Implementation**: Use a Remark plugin (`remark-reading-time` or equivalent) to inject reading time data into the frontmatter/data object during the Astro build process.
- **Visual**: Displayed as "X min read" in the article meta header.

### 4. Technical Stack Impact
- Need to install `reading-time` and `mdast-util-to-string`.
- Update `astro.config.mjs` to include the remark plugin.
- Update `BaseLayout.astro` to handle the new OG and Canonical meta tags.

## Specifics

- **Brand Image Path**: `/images/og-brand.png` (to be created or checked).
- **Translations**: Ensure `site.description` keys exist in EN and FR.

---
*Context created: 2026-04-11*
