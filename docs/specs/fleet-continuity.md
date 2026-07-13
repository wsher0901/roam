---
type: spec
id: fleet-continuity
title: Fleet continuity — handoff parks every local lane; liftoff respawns parked benches; wake-lock parks every outcome
status: open
stage: workshop
branch: docs/fleet-continuity
opened: 2026-07-13
---
# fleet-continuity — Fleet continuity: handoff parks every local lane; liftoff respawns parked benches; wake-lock parks every outcome

**Links:**
[handoff](../skills/handoff.md) ·
[liftoff](../skills/liftoff.md) ·
[parallel-lanes](../skills/parallel-lanes.md) ·
[LAWS §Parallel lanes & cloud](../LAWS.md#parallel-lanes--cloud) ·
Decisions:
[D-032](../DECISIONS.md#d-032--2026-07--fleet-continuity--handoff-parks-every-local-lane-liftoff-respawns-parked-benches-wake-lock-parks-every-outcome-extends-the-d-020d-023-lane-law-upholds-d-009)

## Goal
"Handoff" means operations halt — every live local lane is parked
with its work secured; the word "liftoff" is the only road to the
cloud, and it can respawn parked benches; any lane outcome parks
until the founder acts; a woken lane that no longer owns its bench
bows out.

## Out of scope
- [pickup](../skills/pickup.md) and both hooks — PR
  [#101](https://github.com/wsher0901/roam/pull/101) owns them;
  file-disjoint by design.
- The memory [TEMPLATE](../memory/TEMPLATE.md) (leg item 9).
- Full [parallel-lanes](../skills/parallel-lanes.md) restyle
  (leg-end sweep; only its edited lines change).
- [decide](../skills/decide.md) / [ship](../skills/ship.md) files.

## Plan
1. Bench birth: branch docs/fleet-continuity → this spec + memory
   stub → draft PR.
2. Run [decide](../skills/decide.md)
   ([D-032](../DECISIONS.md#d-032--2026-07--fleet-continuity--handoff-parks-every-local-lane-liftoff-respawns-parked-benches-wake-lock-parks-every-outcome-extends-the-d-020d-023-lane-law-upholds-d-009)):
   entry + ripple in the same commit — payload A overwrites
   [handoff](../skills/handoff.md), payload B overwrites
   [liftoff](../skills/liftoff.md), two surgical edits + two
   insertions in [parallel-lanes](../skills/parallel-lanes.md), two
   surgical edits in [LAWS](../LAWS.md).
3. Verify (below) · [ship](../skills/ship.md) to THE GATE — no
   merge; founder approval follows external review.

## Done means
- [ ] handoff.md and liftoff.md byte-match their payloads
- [ ] The four surgical edits (parallel-lanes ×2 · LAWS ×2) and the
      two parallel-lanes insertions landed verbatim
- [ ] check-links green
- [ ] Lint + tests green
- [ ] git diff --name-only vs main contains neither
      docs/skills/pickup.md nor .claude/hooks/

## Open questions
none
