---
id: "00"
title: Update website content from Aug 2026 CV
status: pending_review
priority: MED
type: infra
blocked_by: []
blocks: []
verification_test: ""
files:
  - src/lib/data/experience.ts
  - src/lib/data/skills.ts
  - src/lib/data/projects.ts
  - src/lib/components/sections/Hero.svelte
  - src/lib/components/sections/Skills.svelte
  - src/routes/about/+page.svelte
  - src/routes/expertise/+page.svelte
  - src/routes/+page.svelte
docs:
  - "docs n/a: content-only update to site data/copy, README unaffected"
baseline_metric:
  source: ""
  field: ""
  baseline_value: ""
  target: ""
created: 2026-08-16
last_updated: 2026-08-16
superseded_by: null
---

# Task 00 — Update website content from Aug 2026 CV

## In plain English

James has a newer version of his CV (dated August 2026) and his personal website still shows
older information. The main changes: his computer vision patent has now been granted (it used
to say "pending"), a second patent is now pending for a new fast anomaly-detection method, and
his current McLaren contract role has new concrete results (large cost savings for a food
manufacturer and a drinks company). We will update the website's text so it matches the new CV.

## What

Update site copy and data files so every fact matches the Aug 2026 CV: Ensign patent GB2631290
is granted (not pending), a second patent is pending (zero-shot CPU-only anomaly detection,
>1000 FPS), McLaren role achievements are replaced with CV bullets (5x downtime reduction /
~10x ROI / $10m+ per year for a food manufacturer; bottle-cap defect detection and ~20% eOEE
improvement for a spirits company; sole CV/DS developer, edge CPU-only 150+ FPS at 1080p),
and headline stats reflect two patents and 9 years of experience.

## Why

The website is the public face for contract work; stale facts (patent "pending" when granted,
missing the strongest McLaren results) undersell the offering and contradict the CV sent to
clients.

## How

**Reuse evidence** — content lives in typed data files consumed by section components; no new
code needed.

| Claim | Existing owner | Callers/consumers | Evidence |
|---|---|---|---|
| Experience entries live in one data file | src/lib/data/experience.ts | Timeline.svelte | experience.ts:15 |
| Patent shown as certification | src/lib/data/skills.ts | Skills.svelte | skills.ts:66 |
| Project cards data | src/lib/data/projects.ts | Projects.svelte | projects.ts:13 |
| Hero stats/copy hardcoded in component | Hero.svelte | routes/+page.svelte | Hero.svelte:130-160 |
| About-page stats hardcoded | routes/about/+page.svelte | — | about/+page.svelte:79-96 |

Plan: edit the files in `files:` above — pure copy/data changes, no logic or markup structure
changes. Verify with `npm run build`.

## Invariants and recovery

invariants n/a: static-site copy change, no state, single process, no deployment logic touched.

## Verification

tests n/a: content-only copy change in data files and component text; no logic changed. The
check is `npm run build` succeeding and a grep confirming no remaining "patent pending" claim
for GB2631290 and no "Patent Holder" singular claims left inconsistent.

- **Before:** site says patent "pending" (experience.ts:62), 1 patent (Hero.svelte:141-143,
  about/+page.svelte:85-86), no mention of second pending patent or new McLaren results.
- **Target:** all copy matches Aug 2026 CV; build passes.

## Receipts

_(filled in when the task is closed — leave the (fill in) markers until then; a blank value
cell also counts as unfilled, so deleting a marker is not filling it in)_

| field | value |
|---|---|
| closing commit | not committed yet - user to review and commit |
| files changed | experience.ts, skills.ts, projects.ts, Hero.svelte, Skills.svelte, about/+page.svelte, expertise/+page.svelte |
| test | tests n/a: content-only copy change; verified via `npm run build` (passed) and grep - no stale "patent pending" claim about GB2631290 remains |
| before / after | before: 1 patent shown, Ensign "patent pending", old McLaren bullets; after: GB2631290 granted, 2nd patent pending shown, McLaren CV results ($10m+/yr, 5x downtime, ~20% eOEE, 150+ FPS edge) on all pages |
| result | build green; all copy matches Aug 2026 CV |

Notes / caveats / follow-ups:

- Pending review: user to review the copy and commit. No GitHub push done this session.
