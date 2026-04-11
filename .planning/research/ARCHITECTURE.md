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
