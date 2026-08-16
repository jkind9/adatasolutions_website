---
id: "01"
title: Add TMICC logo, drop impact bars, reframe second patent as phase awareness
status: closed
priority: MED
type: infra
blocked_by: []
blocks: []
verification_test: ""
plan_reviewed: null
files:
  - static/images/tmicc.png
  - src/lib/components/sections/WorkedWith.svelte
  - src/lib/components/sections/Projects.svelte
  - src/lib/components/layout/Footer.svelte
  - src/lib/components/sections/Skills.svelte
  - src/lib/data/skills.ts
  - src/lib/data/experience.ts
  - src/lib/data/projects.ts
  - src/routes/expertise/+page.svelte
  - src/routes/about/+page.svelte
docs:
  - "docs n/a: content/copy and cosmetic component changes only, README unaffected"
baseline_metric:
  source: ""
  field: ""
  baseline_value: ""
  target: ""
created: 2026-08-16
last_updated: 2026-08-16
superseded_by: null
---

# Task 01 — Add TMICC logo, drop impact bars, reframe second patent as phase awareness

## In plain English

Four small changes to James's personal website. Add the logo of a new client (TMICC) to the
"Worked With" section. Remove the decorative "Impact" progress bars under each project card,
and remove the rotating customer quotes in the page footer — both look tacky. Finally, fix the
description of the second pending patent: it is about phase awareness (using repeating video
cycles to watch chaotic scenes over time and spot what matters, not just what looks different),
not merely fast anomaly detection.

## What

Copy the provided logo into the site's image folder and add a TMICC entry to the companies
list; delete the impact-bar markup and its styles; delete the footer testimonial carousel and
its styles; reword every second-patent description around phase awareness.

## Why

User request: new client logo, remove tacky visual elements, and the patent description
mischaracterized the invention.

## How

**Reuse evidence**

| Claim | Existing owner | Callers/consumers | Evidence |
|---|---|---|---|
| Company logos list | WorkedWith.svelte | routes/+page.svelte | WorkedWith.svelte:4-9 |
| Impact bar markup + styles | Projects.svelte | — | Projects.svelte:102-108, 434-481 |
| Footer testimonial carousel | Footer.svelte | +layout.svelte | Footer.svelte:4-71 |
| Second-patent copy locations | skills.ts, Skills.svelte, experience.ts, projects.ts, expertise/+page.svelte, about/+page.svelte | — | skills.ts:67, Skills.svelte:117-125, experience.ts:28, projects.ts:19+25, expertise/+page.svelte:40-45, about/+page.svelte:30-35 |

Plan: pure copy/markup/style deletions and one image asset addition; verify with `npm run build`.

## Invariants and recovery

invariants n/a: static-site copy/markup change, no state or deployment logic.

## Verification

tests n/a: content and cosmetic-only change; check is `npm run build` passing, grep showing no
remaining impact-bar/testimonial references, and the TMICC logo present in the built output.

- **Before:** no TMICC logo (WorkedWith.svelte:4-9), impact bars rendered (Projects.svelte:102-108),
  footer shows 3 rotating quotes (Footer.svelte:4-20), patent copy says "zero-shot CPU-only
  anomaly detection" only.
- **Target:** TMICC in Worked With; no impact bars; no footer quotes; patent copy centers on
  phase awareness; build green.

## Receipts

| field | value |
|---|---|
| closing commit | 6e6bc39 |
| files changed | tmicc.png (new), WorkedWith.svelte, Projects.svelte, Footer.svelte, Skills.svelte, skills.ts, experience.ts, projects.ts, expertise/+page.svelte, about/+page.svelte |
| test | tests n/a: content/cosmetic only; `npm run build` green, grep shows 0 impact-bar/testimonial refs, tmicc.png present in build output |
| before / after | before: no TMICC logo, impact bars on 4 project cards, 3 rotating footer quotes, patent copy said "zero-shot CPU-only anomaly detection", duplicated "revolutionary", 150+ vs 1000+ FPS unqualified; after: TMICC in Worked With, bars and quotes gone, patent copy centers on phase awareness, one "revolutionary", FPS figures qualified (benchmark vs 1080p production) |
| result | build green; all four requests + two mid-session fixes done |

Notes / caveats / follow-ups:

- Uploaded logo file was a PNG misnamed .jpg; stored as static/images/tmicc.png.
