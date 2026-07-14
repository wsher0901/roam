---
type: spec
id: ci-trust
title: CI is the arbiter — Actions-green at every gate; the local gate mirrors all six CI steps; anchors born resolving
status: shipped
stage: workshop
branch: docs/ci-trust
pr: 117
opened: 2026-07-14
shipped: 2026-07-14
---
# ci-trust — CI is the arbiter: Actions-green at every gate; the local gate mirrors all six CI steps; anchors born resolving

**Links:**
[LAWS](../LAWS.md) ·
[ship](../skills/ship.md) ·
[decide](../skills/decide.md) ·
[parallel-lanes](../skills/parallel-lanes.md) ·
[SETUP](../SETUP.md) ·
Decisions:
[D-027](../DECISIONS.md#d-027--2026-07--laws-polish--glossed-lane-law-provenance-re-homed-to-consolidations-ship-syncs-with-main-before-the-weld)

## Goal

No gate, ready-flip, or "done" may ever again rest on local checks
alone: the pushed commit's GitHub Actions run is the arbiter, and the
local preflight gate runs everything CI runs — lint, format:check,
check:links, tests, build. The recurring first-push anchor stumble
dies at decide-time: a D-number heading and every link to it are born
in the same commit, verified by check:links before that commit's
first push.

## Out of scope

- `.github/workflows/ci.yml` — the diagnosis proved the pipeline
  healthy; the node-24 hypothesis is retracted. No pipeline edit.
- The leg-end restyle sweep — its own queued task.
- Any board or spec shape change.

## Plan

1. Bench birth: branch docs/ci-trust → this spec + memory stub →
   draft PR (this step).
2. Ask the founder ONE question — enable branch protection so main
   requires the CI check? — before the protection op.
3. Run [decide](../skills/decide.md): the next D-number entry + its
   ripple in the same commit, alongside the six named edits —
   - [ship](../skills/ship.md) §1 Preflight becomes the full CI
     mirror (lint · format:check · check:links · tests · build);
   - [ship](../skills/ship.md) §THE GATE: after the final push,
     `gh pr checks --watch`; the gate is announced only on green;
   - [parallel-lanes](../skills/parallel-lanes.md) §When a lane
     finishes: a lane flips draft→ready only after `gh pr checks` is
     green;
   - [decide](../skills/decide.md) §1: anchors born resolving — run
     `npm run check:links` before an entry's first push;
   - [LAWS §Workflow](../LAWS.md#workflow-non-negotiable): "done"
     also requires the pushed commit's Actions run green;
   - branch protection per the founder's answer; [SETUP](../SETUP.md)
     §Once and done gains the line only on yes.
4. Verify (below) · [ship](../skills/ship.md) to THE GATE — which
   now, by this PR's own law, waits for its Actions run green. No
   merge; founder approval follows external review.

## Done means

- [x] The six named edits landed (ship §1 · ship §THE GATE ·
      parallel-lanes · decide · LAWS · branch protection)
- [x] `gh pr checks` green on THIS PR before its own gate is
      announced — Actions run green on the head commit (job
      `checks`, 32s)
- [x] Branch-protection state matches the founder's answer (gh api
      GET): contexts [`checks`], enforce_admins on, reviews null,
      strict off
- [x] check-links green
- [x] The full local CI mirror green (lint · format:check ·
      check:links · tests · build)

## Open questions

- Enable branch protection (main requires the CI check)? — asked at
  step 2; the answer routes the protection op and the decide entry's
  Decision and Affects lines.
