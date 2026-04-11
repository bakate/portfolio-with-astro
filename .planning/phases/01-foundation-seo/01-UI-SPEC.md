# Phase 01: foundation-seo - UI Design Contract

**Created:** 2026-04-11
**Status:** Approved

## 1. Visual Language

### Typography
- **Primary Font**: `Outfit` (already imported in `BaseLayout`).
- **Body Text**: `Outfit`, weight 400.
- **Semantic Tags**: Title and description tags must use accurate, standard fonts.

### Colors
- **Layout**: Follows current Tailwind 4 `bg-background` and `text-foreground`.
- **Link Color**: `text-primary` (brand color).

## 2. Component Specifications

### `<MetaTags />` (Layout Logic)
- **Title**: `<title>` must be `{entry.data.title} | {SITE_NAME}`.
- **Description**: `<meta name="description">` from `entry.data.description`.
- **Rel Alternate**: Generate `<link rel="alternate" hreflang="x" href="y" />` for all supported languages (`fr`, `en`).

### Reading Time (Display)
- **Position**: Below the article title, next to the date.
- **Style**: Text-sm, muted color (`text-muted-foreground`).
- **Format**: `☕ {time} min read` (icon prefix optional but recommended for wow factor).

## 3. Brand & Social (OG/Twitter)

### OpenGraph
- **Dimensions**: 1200x630 px.
- **Defaults**:
  - `og:image`: `{entry.data.image || '/images/og-brand.png'}`.
  - `og:type`: `article`.
  - `og:site_name`: `Bakate | Portfolio`.

## 4. Interaction Design
- **Social Sharing (Future)**: Placeholder logic for future sharing buttons.
- **Hover Transitions**: Standard 200ms ease-in-out for any UI links added.

---
*Phase: 01-foundation-seo*
