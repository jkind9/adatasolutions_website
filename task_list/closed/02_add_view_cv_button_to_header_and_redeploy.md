---
id: "02"
title: Add View CV button to header and redeploy
status: closed
priority: MED
type: infra
blocked_by: []
blocks: []
verification_test: ""
plan_reviewed: null
files:
  - static/James-Alexander-CV.pdf
  - src/lib/components/layout/Header.svelte
  - src/lib/components/layout/MobileNav.svelte
docs:
  - README.md
baseline_metric:
  source: ""
  field: ""
  baseline_value: ""
  target: ""
created: 2026-08-19
last_updated: 2026-08-19
superseded_by: null
---

# Task 02 — Add View CV button to header and redeploy

## In plain English

Visitors to the personal website should be able to open the owner's CV with one click.
We add a "View CV" button at the top of every page, next to the existing LinkedIn button,
which opens the CV document in a new browser tab. The same button also appears in the
menu shown on phones. The site is then rebuilt and pushed so the live site picks it up.

## What

Copy the Aug 2026 CV PDF into the site's static assets as `static/James-Alexander-CV.pdf`,
add a "View CV" outline button to the desktop nav in `Header.svelte` (next to the Connect
button) and to the mobile menu footer in `MobileNav.svelte`, then build, commit, and push
to master (hosting rebuilds on push).

## Why

The user asked for a button at the top of the site to view their CV, and a redeploy.

## How

**Reuse evidence**

| Claim | Existing owner | Callers/consumers | Evidence |
|---|---|---|---|
| Header already has an external-link button pattern (LinkedIn "Connect") to mirror | Header.svelte | rendered in desktop nav | src/lib/components/layout/Header.svelte:78-88 |
| Mobile menu footer already carries the LinkedIn button to mirror | MobileNav.svelte | rendered in mobile nav footer | src/lib/components/layout/MobileNav.svelte:73-84 |
| Static assets are served from `static/` (robots.txt, images already live there) | adapter-static config | build output | svelte.config.js:14-19 |

Plan: new CSS classes `cv-btn` / `cv-btn-mobile` styled as outline variants of the existing
primary buttons; link `/James-Alexander-CV.pdf` with `target="_blank"`.

## Invariants and recovery

invariants n/a: static marketing site, no state, single build artifact deployed by push.

## Verification

- `npm run build` succeeds and `build/James-Alexander-CV.pdf` exists in the output.
- Baseline: no CV link anywhere in the site (grep for "CV" in src had no nav hits). Target:
  "View CV" link present in both desktop nav and mobile menu markup.
- tests n/a: presentational markup/CSS-only change on a site with no test harness; verified by
  production build succeeding and the asset landing in the build output.

docs n/a: header button is self-evident site chrome; README documents dev setup, not page content.

## Receipts

| field | value |
|---|---|
| closing commit | 55dcbfc |
| files changed | Header.svelte, MobileNav.svelte, static/James-Alexander-CV.pdf (+ this task file) |
| test | tests n/a: markup/CSS-only change, no test harness in repo; verified via production build |
| before / after | before: 0 CV links in nav; after: "View CV" button in desktop nav + mobile menu, PDF in build output |
| result | build green (`vite build` 2.3s), pushed to master 6e95bb5..55dcbfc; hosting redeploys on push |

Notes / caveats / follow-ups:

- CV served at /James-Alexander-CV.pdf; replace static/James-Alexander-CV.pdf when the CV is updated.
