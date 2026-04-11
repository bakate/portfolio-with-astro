# Portfolio Astro (Freelance Focus)

## What This Is

Un portfolio professionnel haute performance conçu avec Astro 5 pour mettre en valeur l'expertise technique d'un Senior FullStack Developer. Le projet sert de vitrine pour attirer des missions freelance en démontrant une maîtrise des architectures modernes, de la performance et de l'expérience utilisateur.

## Core Value

Démontrer l'expertise technique à travers un contenu riche (Blog/Tips) et une interface premium pour convaincre les recruteurs/clients potentiels.

## Requirements

### Validated

- ✓ Architecture modulaire basée sur les "features" (`src/features/`) — existing
- ✓ Support multi-langue (i18n) avec dictionnaire centralisé — existing
- ✓ Intégration Resend pour le formulaire de contact — existing
- ✓ Base technique Astro 5 + React 19 + Tailwind 4 — existing

### Active

- [ ] **Distinction Blog vs Tips** : Séparation claire entre articles de fond (Blog) et snippets de code/astuces rapides (Tips).
- [ ] **Table des matières automatique (ToC)** : Génération dynamique d'une ToC pour faciliter la navigation dans les articles longs.
- [ ] **Optimisation SEO & Social** : Boost des Meta Tags et OpenGraph pour un partage premium sur LinkedIn/Twitter.
- [ ] **Display Article Premium** : Amélioration radicale de la lisibilité (typo), des blocs de code (syntax highlighting, copy button) et du layout global.
- [ ] **Embeds Interactifs** : Support des embeds CodeSandbox pour permettre de tester le code directement dans les articles.

### Out of Scope

- **Refactoring i18n (`ui.ts`)** — Différé pour se concentrer sur l'impact visuel et le contenu (décision utilisateur).
- **Call to Action (CTA) Recrutement** — L'utilisateur souhaite rester subtil pour l'instant (décision utilisateur).

## Context

- Le portfolio est déjà déployé et en ligne.
- L'utilisateur est basé à Paris et vise des missions freelance.
- Une dette technique est identifiée sur la gestion de l'i18n (`ui.ts` fait ~1600 lignes).

## Constraints

- **Tech Stack** : Astro 5, React 19, Tailwind 4.
- **Aesthetic** : "Premium & Wow factor" obligatoire (règle Antigravity).

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Report du refactoring i18n | Focus prioritaire sur les fonctionnalités visibles (Blog/Tips) pour aider à la recherche de mission. | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-11 after initialization*
