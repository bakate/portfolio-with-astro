# Research Summary: Portfolio Optimization

**Analysis Date:** 2026-04-11

## Key Findings

**Stack:**
- Astro 5 + MDX is the foundation.
- Shiki for syntax highlighting.
- Vanilla JavaScript `IntersectionObserver` for active ToC state.

**Table Stakes:**
- ToC (automatic).
- Enhanced typography (Mona Sans/Inter).
- Copy-to-clipboard on code blocks.

**Watch Out For:**
- Cumulative Layout Shift (CLS) from CodeSandbox embeds.
- Performance impact of heavy React islands in articles.

---
*Summary: 2026-04-11*

## Validation Architecture

### Verification Strategy
- **Unit Tests**: Validate `reading-time` extraction for various MDX content sizes.
- **Integration Tests**: Verify `<MetaTags />` presence in `BaseLayout` with correct values from frontmatter.
- **E2E Tests**: Use Playwright to check social share previews or at least the presence of `og:*` and `rel="alternate"` tags in the rendered HTML.
- **Visual Regression**: Basic check that social sharing links (if any) are correctly styled.

### must_haves
- All blog/tip pages must have a non-empty `meta description`.
- Canonical links must correctly point to the current language's main route.
- Reading time must be accurate within 1 minute tolerance.
# Research: Stack (Blog & Tips 2025)

**Analysis Date:** 2026-04-11

## Core Recommendations

### 1. ToC Generation
- **Pattern**: Astro's built-in `render()` function and `headings` property.
- **Why**: Most performant and stable way in Astro 5. Avoids external Remark plugins that break hydration.
- **Implementation**: `const { Content, headings } = await render(entry);` in `[slug].astro`.

### 2. Syntax Highlighting
- **Tool**: Shiki (v1+).
- **Theme**: "Slack Dark" or "Monokai Pro" for high-end look, matching Tailwind 4 default palettes if possible.
- **Feature**: Transformers for line highlighting and diff showing.

### 3. Interactive Code
- **Service**: CodeSandbox.
- **Pattern**: Custom React MDX component wrapper around an `<iframe>`.
- **Optimization**: Lazy-load the iframe using Astro's `client:visible`.

### 4. SEO & Social
- **Pattern**: Astro SEO (`astro-seo`) or custom layout tags.
- **Asset**: Satori for generating OG images from HTML/CSS (if dynamic mapping is needed).

---
*Research: 2026-04-11*
# Research: Features (Expert Dev Blog)

**Analysis Date:** 2026-04-11

## Table Stakes (Must-Have)
- **Automatic ToC**: Essential for long technical guides.
- **Reading Time**: Managing reader expectations.
- **Copy Button**: On every code block.
- **Responsive Typography**: Perfect legibility on mobile.

## Differentiators (Premium)
- **CodeSandbox Embeds**: interactive learning.
- **Sticky Sidebar for Meta**: Breadcrumbs, publish date, and ToC.
- **Tag Clusters**: Visual hierarchy of skills.
- **Flux RSS**: For developer discoverability.

## Anti-Features (Avoid)
- **Comments Section**: High maintenance, low value for resume/portfolio. Use LinkedIn/Twitter links instead.
- **Heavy Tracking Scripts**: Keep it fast and private.

---
*Research: 2026-04-11*
# Research: Architecture & Pitfalls

**Analysis Date:** 2026-04-11

## Component Architecture
- **Islands of Interactivity**: Keep the article content static (SSR) but the ToC and CodeBlocks interactive (React client components).
- **Layout Nesting**: Use a dedicated `ArticleLayout.astro` that extends `BaseLayout.astro`.

## Critical Pitfalls
- **Layout Shift (CLS)**: CodeSandbox iframes can cause huge CLS. Use aspect-ratio wrappers and skeletons.
- **Bundle Bloat**: Avoid importing massive React libraries for simple features. Keep it vanilla where possible.
- **SEO for i18n**: Ensure `rel="alternate"` tags are correctly generated for different languages.

---
*Research: 2026-04-11*
