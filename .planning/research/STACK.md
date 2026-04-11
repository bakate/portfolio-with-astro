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
