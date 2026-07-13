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
Decisions: the next D-number, computed from the
[DECISIONS](../DECISIONS.md) tail at execution

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
- [ ] Both hook patches landed verbatim
- [ ] node --check passes on both hooks
- [ ] docs/skills/pickup.md byte-matches the payload
- [ ] check-links green
- [ ] Lint + tests green

## Deviations
<filled by ship: anything done differently than planned — or "none">

## Open questions
none
