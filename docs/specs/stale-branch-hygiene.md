---
type: spec
id: stale-branch-hygiene
title: Stale-branch hygiene — gone-guard on the safety net; auto-delete welded-elsewhere locals; pickup restyle
status: open
stage: workshop
branch: docs/stale-branch-hygiene
pr: —
opened: 2026-07-13
shipped: —
---
# stale-branch-hygiene — Stale-branch hygiene: gone-guard on the safety net; auto-delete welded-elsewhere locals; pickup restyle

**Links:**
[pickup](../skills/pickup.md) ·
[DASHBOARD](../DASHBOARD.md) ·
Decisions:
[D-031](../DECISIONS.md#d-031--2026-07--stale-branch-hygiene--gone-guard-on-the-session-end-net-welded-elsewhere-locals-auto-removed-at-session-start)

## Goal
The safety net can never resurrect a welded branch;
welded-elsewhere local branches remove themselves at session start;
pickup surfaces what the hooks report and meets the writing laws.

## Out of scope
- handoff / liftoff / parallel-lanes / LAWS — the Fleet Continuity
  PR owns them, next task; file-disjoint by design.
- Any briefing-shape change beyond the named additions.

## Plan
1. Bench birth: branch docs/stale-branch-hygiene → this spec +
   memory stub → draft PR.
2. Run decide (next D-number): gone-guard on session-end;
   welded-elsewhere locals auto-removed at session start; pickup
   reports what the hooks surface — entry + ripple (the two hook
   patches and the pickup payload) in the same commit.
3. Verify (below) · ship to THE GATE — no merge; founder approval
   follows external review.

## Done means
- [x] Both hook patches landed verbatim
- [x] node --check passes on both hooks
- [x] docs/skills/pickup.md byte-matches the payload
- [x] check-links green (1167 links, 0 broken)
- [x] Lint + tests green

## Deviations
One, load-bearing: the brief's session-start patch calls shFile(),
which session-start.mjs did not define — verbatim insertion alone
would have thrown a ReferenceError on every session launch. The
shFile helper and the execFileSync import were copied verbatim from
session-end.mjs alongside the patch; the patch block itself is
byte-exact as briefed. The patched hook was smoke-run end-to-end:
exit 0, no runtime error.

## Open questions
none
