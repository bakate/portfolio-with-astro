# Codebase Concerns

**Analysis Date:** 2026-04-11

## Tech Debt

**Internationalization (i18n):**
- Issue: `src/i18n/ui.ts` is extremely large (~1600 lines) and contains all translation keys in one file.
- Impact: Hard to maintain, slow IDE performance for this file, potential merge conflicts.
- Fix approach: Split translation keys into feature-based files (e.g., `src/i18n/locales/en/projects.json`).

**Component Consistency:**
- Issue: Mix of Astro and React components for UI elements.
- Impact: Increased bundlesize (if React is used unnecessarily) and inconsistent dev experience.
- Fix approach: Audit components and use Astro for purely static parts.

## Test Coverage Gaps

**Core Logic:**
- What's not tested: Feature services (`service.ts`) and i18n logic.
- Risk: Regressions in data fetching or translation logic may go unnoticed.
- Priority: High.

**Contact Form:**
- What's not tested: Submission flow and Resend integration.
- Risk: Potential failure in lead generation.
- Priority: High.

## Performance Bottlenecks

**Large Assets:**
- Problem: `src/assets/` contains large images (e.g., `bakate-hero.jpeg`).
- Cause: Unoptimized original assets.
- Improvement path: Ensure Astro `<Image />` component is used everywhere and check output sizes.

## Scale Limits

**I18n Management:**
- Current capacity: Single file.
- Limit: Becomes unmanageable with more languages or more content.
- Scaling path: Move to a structured CMS or externalized JSON files.

---

*Concerns audit: 2026-04-11*
