<!-- GSD:project-start source:PROJECT.md -->
## Project

**Portfolio Astro (Freelance Focus)**

Un portfolio professionnel haute performance conçu avec Astro 5 pour mettre en valeur l'expertise technique d'un Senior FullStack Developer. Le projet sert de vitrine pour attirer des missions freelance en démontrant une maîtrise des architectures modernes, de la performance et de l'expérience utilisateur.

**Core Value:** Démontrer l'expertise technique à travers un contenu riche (Blog/Tips) et une interface premium pour convaincre les recruteurs/clients potentiels.

### Constraints

- **Tech Stack** : Astro 5, React 19, Tailwind 4.
- **Aesthetic** : "Premium & Wow factor" obligatoire (règle Antigravity).
<!-- GSD:project-end -->

<!-- GSD:stack-start source:codebase/STACK.md -->
## Technology Stack

## Languages
- TypeScript 5.x - Core logic and type safety across the application.
- Astro - Component framework and routing.
- JavaScript (ESM) - Build scripts and configuration files (e.g., `astro.config.mjs`).
## Runtime
- Node.js - Development and build environment.
- bun - High-performance package manager and runner (detected `bun.lock`).
- Lockfile: present (`bun.lock`).
## Frameworks
- Astro 5.15.6 - Static site generator and web framework.
- React 19.1.0 - Used for interactive components (islands).
- Playwright 1.52.0 - E2E testing framework (dependency present).
- Vite (Internal to Astro) - Development server and bundling.
- Tailwind CSS 4.1.7 - Utility-first CSS framework.
## Key Dependencies
- `zod` 3.25.7 - Schema validation for data and forms.
- `resend` 4.5.1 - Client for sending emails.
- `@astrojs/vercel` 9.0.0 - Deployment adapter for Vercel.
- `lucide-react` - Icon library.
- `nanostores` - Lightweight state management.
- `radix-ui` - Headless UI components for accessibility.
## Configuration
- Configured via `.env` files (e.g., `.env`).
- Key configs required: Resend API keys, deployment settings.
- `astro.config.mjs` - Main Astro configuration.
- `tsconfig.json` - TypeScript compiler settings.
- `components.json` - shadcn/ui configuration.
## Platform Requirements
- Bun or Node.js runtime.
- Vercel (Primary target).
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

## Naming Patterns
- Astro Components: PascalCase (`HomeSection.astro`)
- React Components: PascalCase (`ContactForm.tsx`)
- TypeScript Modules: camelCase (`service.ts`, `utils.ts`)
- camelCase (`formatDate`, `useTranslations`)
- camelCase (`userProfile`, `isSubmitting`)
- PascalCase (`LanguageCode`, `ProjectData`)
## Code Style
- Prettier - Enforced via `.prettierrc.json`.
- Settings: singleQuote: true, semi: true, tabWidth: 2.
- Astro plugin used for `.astro` files.
- Not explicitly configured in root (likely internal to Astro/TSE).
## Import Organization
- `@/`: Points to `src/` (configured in `tsconfig.json`).
## Error Handling
- Schema validation with Zod.
- Toast notifications using Sonner (`sonner`).
- Return objects for service results.
## Function Design
## Module Design
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

## Pattern Overview
- **Co-location:** Business logic, components, and types are co-located within feature directories.
- **Astro Islands:** Interactive elements are isolated as React components within a primarily static Astro site.
- **Content-Driven:** heavy use of Astro Content Collections for blog-like data.
## Layers
- Purpose: Render views and handle user interaction.
- Location: `src/features/` (screens), `src/components/` (shared).
- Contains: `.astro` files (Astro), `.tsx` files (React).
- Depends on: Feature services and shared lib.
- Purpose: Specific business logic and data fetching.
- Location: `src/features/[feature]/service.ts`.
- Contains: Data fetching logic, transformations.
- Depends on: External APIs (Resend).
- Purpose: Lightweight cross-component state.
- Location: `src/stores/`.
- Contains: Store definitions for UI state.
- Purpose: Multi-language support.
- Location: `src/i18n/`.
- Contains: Dictionary definitions and utility functions.
## Data Flow
## Key Abstractions
- Purpose: Represents a full page layout within a feature.
- Examples: `src/features/projects/screens/ProjectScreen.astro`
- Pattern: Astro components acting as view controllers.
- Purpose: Low-level reusable UI primitives.
- Examples: `src/components/ui/button.tsx`
- Pattern: Radix UI primitives with Tailwind styling.
## Entry Points
- Location: `src/pages/index.astro`
- Responsibilities: Main landing page.
- Location: `src/pages/api/`
- Responsibilities: Server-side handling (e.g., form submissions).
## Error Handling
- Zod schema validation for input.
- Sonner notifications for user feedback.
<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->
## Project Skills

No project skills found. Add skills to any of: `.agent/skills/`, `.agents/skills/`, `.cursor/skills/`, or `.github/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
