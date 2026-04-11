# Technology Stack

**Analysis Date:** 2026-04-11

## Languages

**Primary:**
- TypeScript 5.x - Core logic and type safety across the application.
- Astro - Component framework and routing.

**Secondary:**
- JavaScript (ESM) - Build scripts and configuration files (e.g., `astro.config.mjs`).

## Runtime

**Environment:**
- Node.js - Development and build environment.

**Package Manager:**
- bun - High-performance package manager and runner (detected `bun.lock`).
- Lockfile: present (`bun.lock`).

## Frameworks

**Core:**
- Astro 5.15.6 - Static site generator and web framework.
- React 19.1.0 - Used for interactive components (islands).

**Testing:**
- Playwright 1.52.0 - E2E testing framework (dependency present).

**Build/Dev:**
- Vite (Internal to Astro) - Development server and bundling.
- Tailwind CSS 4.1.7 - Utility-first CSS framework.

## Key Dependencies

**Critical:**
- `zod` 3.25.7 - Schema validation for data and forms.
- `resend` 4.5.1 - Client for sending emails.
- `@astrojs/vercel` 9.0.0 - Deployment adapter for Vercel.

**Infrastructure:**
- `lucide-react` - Icon library.
- `nanostores` - Lightweight state management.
- `radix-ui` - Headless UI components for accessibility.

## Configuration

**Environment:**
- Configured via `.env` files (e.g., `.env`).
- Key configs required: Resend API keys, deployment settings.

**Build:**
- `astro.config.mjs` - Main Astro configuration.
- `tsconfig.json` - TypeScript compiler settings.
- `components.json` - shadcn/ui configuration.

## Platform Requirements

**Development:**
- Bun or Node.js runtime.

**Production:**
- Vercel (Primary target).

---

*Stack analysis: 2026-04-11*
