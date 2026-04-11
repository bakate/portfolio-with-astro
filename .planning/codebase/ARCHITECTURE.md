# Architecture

**Analysis Date:** 2026-04-11

## Pattern Overview

**Overall:** Feature-based Component Architecture (Modular Monolith style).

**Key Characteristics:**
- **Co-location:** Business logic, components, and types are co-located within feature directories.
- **Astro Islands:** Interactive elements are isolated as React components within a primarily static Astro site.
- **Content-Driven:** heavy use of Astro Content Collections for blog-like data.

## Layers

**UI Layer (Astro/React):**
- Purpose: Render views and handle user interaction.
- Location: `src/features/` (screens), `src/components/` (shared).
- Contains: `.astro` files (Astro), `.tsx` files (React).
- Depends on: Feature services and shared lib.

**Service Layer:**
- Purpose: Specific business logic and data fetching.
- Location: `src/features/[feature]/service.ts`.
- Contains: Data fetching logic, transformations.
- Depends on: External APIs (Resend).

**State Layer (Nanostores):**
- Purpose: Lightweight cross-component state.
- Location: `src/stores/`.
- Contains: Store definitions for UI state.

**I18n Layer:**
- Purpose: Multi-language support.
- Location: `src/i18n/`.
- Contains: Dictionary definitions and utility functions.

## Data Flow

**Page Request:**
1. Astro router matches URL in `src/pages/`.
2. Page layout (`src/layouts/`) wraps the content.
3. Feature screens (`src/features/.../screens/`) fetch data via services.
4. Static content is rendered on the server.
5. React islands are hydrated on the client if interactive.

## Key Abstractions

**Feature Screen:**
- Purpose: Represents a full page layout within a feature.
- Examples: `src/features/projects/screens/ProjectScreen.astro`
- Pattern: Astro components acting as view controllers.

**UI Component (shadcn):**
- Purpose: Low-level reusable UI primitives.
- Examples: `src/components/ui/button.tsx`
- Pattern: Radix UI primitives with Tailwind styling.

## Entry Points

**Main App:**
- Location: `src/pages/index.astro`
- Responsibilities: Main landing page.

**API Endpoints:**
- Location: `src/pages/api/`
- Responsibilities: Server-side handling (e.g., form submissions).

## Error Handling

**Strategy:** Fail-fast with validation.

**Patterns:**
- Zod schema validation for input.
- Sonner notifications for user feedback.

---

*Architecture analysis: 2026-04-11*
