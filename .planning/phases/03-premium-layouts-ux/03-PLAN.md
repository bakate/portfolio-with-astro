# Phase 3 Plan: Premium Layouts & UX Articles

## Phase Overview
Objective: Transform the basic article view into a professional, fluid, and interactive reading experience.

## Tasks

### 1. Style System & Highlighting
- [ ] Configure Shiki with dual themes in `astro.config.mjs`.
  - Use `github-dark` and `github-light`.
  - Ensure compatibility with the existing theme switcher.
- [ ] Implement global styles for code blocks (font-size, line-height, padding, border-radius).

### 2. Layout & Typography
- [ ] Create `src/components/TableOfContents.astro`.
  - Logic: Parse headings from Astro props.
  - Script: Intersection Observer for active state.
- [ ] Update `BlogPostLayout.astro` and `TipLayout.astro`:
  - 3-column grid structure on desktop (Empty/Nav | Content | TOC).
  - Responsive behavior (Stack on mobile, Sidebar on desktop).
  - typography: optimize `line-height` and `max-width`.

### 3. Code Block Features
- [ ] Create a "Copy" button mechanism for Shiki blocks.
  - Option: Client-side script in `BaseLayout.astro` or specific layouts that targets `div.expressive-code` or standard `pre` blocks.
  - Add visual feedback (Check icon) on success.

## Verification Items
- [ ] Verify light/dark theme switching on code blocks.
- [ ] Test TOC highlighting on long articles.
- [ ] Confirm Copy button functionality and "copied" icon.
- [ ] Check responsive layout on mobile/tablet.
