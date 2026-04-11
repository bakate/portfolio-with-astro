# External Integrations

**Analysis Date:** 2026-04-11

## APIs & External Services

**Email:**
- Resend - Transactional email service for contact form.
  - SDK/Client: `resend`
  - Auth: `RESEND_API_KEY` (implied)

**Cloud/Edge:**
- Vercel - Hosting and edge functions.
  - SDK/Client: `@astrojs/vercel`

## Data Storage

**Databases:**
- None detected (Stateless or Local Content).
  - Client: Astro Content Collections (`src/content.config.ts`)

**File Storage:**
- Local filesystem (via Astro static assets and content collections).

**Caching:**
- Vercel Edge caching (implied by adapter).

## Authentication & Identity

**Auth Provider:**
- None detected.

## Monitoring & Observability

**Error Tracking:**
- None detected.

**Logs:**
- Standard output (Console).

## CI/CD & Deployment

**Hosting:**
- Vercel.

**CI Pipeline:**
- Vercel GitHub Integration (implied).

## Environment Configuration

**Required env vars:**
- `RESEND_API_KEY` - Required for contact form functionality.

**Secrets location:**
- `.env` (local development).
- Vercel Environment Variables (production).

---

*Integration audit: 2026-04-11*
