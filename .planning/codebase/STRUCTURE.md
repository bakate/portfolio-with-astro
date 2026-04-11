# Codebase Structure

**Analysis Date:** 2026-04-11

## Directory Layout

```
[project-root]/
├── src/
│   ├── assets/       # Static assets (images, icons)
│   ├── components/   # Shared UI components
│   │   └── ui/       # Atom components (shadcn style)
│   ├── features/     # Feature-based logic and components
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── experience/
│   │   └── projects/
│   ├── i18n/         # Internationalization files
│   ├── layouts/      # Astro page layouts
│   ├── lib/          # Shared utilities
│   ├── pages/        # File-based routing (Astro)
│   ├── stores/       # Nanostores state management
│   └── styles/       # Global CSS and themes
├── public/           # Static public assets
└── .planning/        # GSD planning and context
```

## Directory Purposes

**src/features/:**
- Purpose: Core business functionality divided by domain.
- Contains: Components, screens, services, and types specific to a feature.
- Key files: `service.ts`, `screens/*.astro`.

**src/components/ui/:**
- Purpose: Reusable, low-level UI components.
- Contains: Styled primitives (React/Astro).
- Key files: `button.tsx`, `input.tsx`.

**src/pages/:**
- Purpose: Defines the application's routes.
- Contains: Astro components for every URL.

## Key File Locations

**Entry Points:**
- `src/pages/index.astro`: Home page.
- `src/pages/api/contact.ts`: Contact API endpoint.

**Configuration:**
- `astro.config.mjs`: Main config.
- `package.json`: Project dependencies and scripts.

**Core Logic:**
- `src/features/[feature]/service.ts`: Feature-specific logic.
- `src/lib/utils.ts`: Shared helper functions.

## Naming Conventions

**Files:**
- Components/Screens: PascalCase (`ExperienceScreen.astro`, `ContactForm.tsx`)
- Utilities/Services: camelCase (`service.ts`, `utils.ts`)
- Config: kebab-case (`astro.config.mjs`)

**Directories:**
- Feature folders: kebab-case (`blog`, `contact`)

## Where to Add New Code

**New Feature:**
- Primary code: `src/features/[feature-name]/`
- Screens: `src/features/[feature-name]/screens/`

**New Component/Module:**
- Shared UI: `src/components/ui/`
- Feature-specific: `src/features/[feature]/components/`

**Utilities:**
- Global helpers: `src/lib/`
- Feature helpers: `src/features/[feature]/utils/` (if needed)

## Special Directories

**dist/:**
- Purpose: Build output.
- Generated: Yes.
- Committed: No.

---

*Structure analysis: 2026-04-11*
