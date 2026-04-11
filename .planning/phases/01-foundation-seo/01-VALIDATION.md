# Phase 01: foundation-seo - Validation Strategy

**Created:** 2026-04-11
**Status:** Initialized

## Quality Dimensions

1. **Precision**: All articles must have mandatory `og:description`.
2. **Resilience**: BaseLayout handles missing frontmatter gracefully (using global i18n fallbacks).
3. **Performance**: `reading-time` calculated at build-time (Remark), zero client-side impact.
4. **Security**: Validate that meta tags are properly escaped to prevent XSS.
5. **Observability**: Verification tasks should log the count of articles updated vs skipped.
6. **Evolvability**: Meta components are centralized in `src/components/SEO/`.
7. **Simplicity**: No heavy OG generation libraries for now; just frontmatter links.
8. **Verification**: 
   - [ ] Automated check for `<meta property="og:title"` presence.
   - [ ] Automated check for `<link rel="alternate"` tags.
   - [ ] Build-time validation: `npm run build` must pass.

## Verification Tasks

### Task 1: Semantic Metadata Check
- `grep -r "og:title" dist/` (after build)
- Verify `canonical` link matches the URL structure.

### Task 2: Reading Time Accuracy
- Sample 3 articles and check if `min read` is present and plausible.

---
*Phase: 01-foundation-seo*
