# Portfolio (Astro)

Bilingual (FR/EN) portfolio and technical blog of Bakate Idrissa Ba, _Software Engineer Full-Stack TypeScript_. Its job is to convince recruiters (a permanent position comes first) and, second, freelance clients. Content quality matters as much as code.

- **Positioning**: the method (isolated, tested business domain: DDD, hexagonal architecture, TDD), not a framework. Angular is one skill among others, never the title. Name in the interface: "Bakate Idrissa"; full name "Bakate Idrissa Ba" for SEO, sharing and structured data. Identity and links live in `src/lib/profile.ts`.
- **Visual direction**: restraint. Generous whitespace, one accent colour, a strong heading font; no radial gradients, blurred blobs, over-rounded cards or tilt-on-hover effects. Content stays visible without JavaScript and honours `prefers-reduced-motion`.
- The full redesign spec is GitHub issue #1.

Stack: Astro 7 with React 19 islands, Tailwind 4, shadcn/ui (Radix), MDX, deployed on Vercel. Versions and scripts live in `package.json`.

## Commands

pnpm is the only package manager (version pinned by `packageManager`; run `corepack enable`). One-off tools go through `pnpm dlx`.

- `pnpm build` is the check that a change works; `pnpm astro check` typechecks.
- `pnpm preview` does not work: the Vercel adapter refuses it. Use `vercel dev` to test the contact form (`/api/contact`); serving `.vercel/output/static` only shows the prerendered pages.
- `pnpm test:e2e` builds, then runs the Playwright suite (`tests/e2e/`) against the build served by `scripts/serve-static.mjs`. `pnpm exec playwright test <file>` re-runs on the last build. It is the only test level, and every test is a `Given …, when …, then …` behaviour scenario: read `CODING_STANDARDS.md` before writing one. CI runs it on every PR.

## Bilingual by construction

French is the default locale, served without prefix; English lives under `/en`. Every user-facing change lands in both languages:

- **Pages**: each route exists twice, `src/pages/<route>` and `src/pages/en/<route>`, as thin files that read `Astro.currentLocale` and pass translated strings to a feature screen. Edit both.
- **UI strings**: `src/i18n/languages/{fr,en}/`, read through `useTranslations(lang, feature)` from `@/i18n/ui`. Keys are typed against French only, and a key missing in English silently falls back to French, so the compiler will not catch a forgotten translation.
- **Content**: blog and tips articles are MDX under `src/features/{blog,tips}/content/{fr,en}/`, schemas in `src/content.config.ts`.

## Code layout

- Feature modules in `src/features/<feature>/` (`screens/`, `components/`, `service.ts`, `index.ts` as public API). Pages import from the feature's `index.ts`.
- Shared UI in `src/components/` (shadcn primitives in `src/components/ui/`), helpers in `src/lib/`, nanostores in `src/stores/`.
- Import via the `@/` alias for `src/`.
- Interactive parts are React islands; everything else stays static `.astro`.

## Conventions and gotchas

- Formatting is Prettier (`pnpm format`).
- Validate input with Zod at the boundary; user feedback goes through Sonner toasts.
- Brand/social icons come from `react-icons` (lucide 1.x dropped brand icons); lucide stays for generic icons.
- The contact form posts to `src/pages/api/contact.ts` (the only server route) and sends mail via Resend. It needs `RESEND_API_KEY`, `RESEND_FROM_EMAIL` and `CONTACT_FORM_TO_EMAIL`. The booking link and CV paths are constants in `src/lib/profile.ts`; the CV PDFs live in `public/cv/` under stable names.

## Agent skills

### Issue tracker

Issues and specs live in GitHub Issues (`bakate/portfolio-with-astro`), managed through the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Domain docs

Single-context: one `GLOSSARY.md` and `docs/adr/` at the repo root, created lazily. See `docs/agents/domain.md`.
