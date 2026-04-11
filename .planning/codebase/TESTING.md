# Testing Patterns

**Analysis Date:** 2026-04-11

## Test Framework

**Runner:**
- Playwright 1.52.0 (Detected in `package.json`).
- Config: `playwright.config.ts` (Not detected in root, likely to be added).

**Assertion Library:**
- Playwright's built-in `expect`.

**Run Commands:**
```bash
npx playwright test    # Run all tests (implied)
```

## Test File Organization

**Location:**
- Proposed: `tests/` directory at root for E2E.
- Alternative: Co-located `*.test.ts` for unit tests.

**Naming:**
- `*.spec.ts` or `*.test.ts`.

## Test Types

**E2E Tests:**
- Primary intended testing method via Playwright.
- Scope: Form submissions (`/contact`), page transitions, and i18n switching.

**Unit Tests:**
- Not explicitly configured yet.

## Common Gaps

- Missing test suite for core logic (services).
- Missing visual regression tests for UI components.

---

*Testing analysis: 2026-04-11*
