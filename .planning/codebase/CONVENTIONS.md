# Coding Conventions

**Analysis Date:** 2026-04-11

## Naming Patterns

**Files:**
- Astro Components: PascalCase (`HomeSection.astro`)
- React Components: PascalCase (`ContactForm.tsx`)
- TypeScript Modules: camelCase (`service.ts`, `utils.ts`)

**Functions:**
- camelCase (`formatDate`, `useTranslations`)

**Variables:**
- camelCase (`userProfile`, `isSubmitting`)

**Types/Interfaces:**
- PascalCase (`LanguageCode`, `ProjectData`)

## Code Style

**Formatting:**
- Prettier - Enforced via `.prettierrc.json`.
- Settings: singleQuote: true, semi: true, tabWidth: 2.
- Astro plugin used for `.astro` files.

**Linting:**
- Not explicitly configured in root (likely internal to Astro/TSE).

## Import Organization

**Order:**
1. Built-in Astro/React imports.
2. External package imports (e.g., `lucide-react`).
3. Core shared alias (`@/components/...`).
4. Local relative imports (`../components/...`).

**Path Aliases:**
- `@/`: Points to `src/` (configured in `tsconfig.json`).

## Error Handling

**Patterns:**
- Schema validation with Zod.
- Toast notifications using Sonner (`sonner`).
- Return objects for service results.

## Function Design

**Size:** Preference for short, single-purpose functions.

**Parameters:** Receiving Objects (RO) is preferred for complex data.

**Return Values:** Returning Objects (RO) or specific types for consistency.

## Module Design

**Exports:** Named exports preferred over default exports for clarity and discovery.

**Barrel Files:** Used occasionally but primarily direct imports are seen.

---

*Convention analysis: 2026-04-11*
