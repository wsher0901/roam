---
type: memory
id: fleet-continuity
updated: 2026-07-13 · bench birth · home PC
---
# fleet-continuity — Fleet continuity: handoff parks every local lane; liftoff respawns parked benches; wake-lock parks every outcome

## Status
Bench ready — birthed 2026-07-13 by the home PC. The cockpit is
working this task directly this sitting; no separate worker will be
spawned.

## What this task is
Make leaving safe for a fleet: [handoff](../skills/handoff.md) FULL
gains a Park step that rescue-saves and stamps every live local
lane (handoff means operations halt — the machine may power off);
[liftoff](../skills/liftoff.md) step 2 learns to respawn parked
benches on their same branch (adopt — no second birth); the lane
law gains the wake-lock — a lane waking on a Status it does not own
(parked · respawned · superseded) bows out, and every lane outcome
parks until the founder acts. Mechanism: one
[decide](../skills/decide.md) entry
([D-032](../DECISIONS.md#d-032--2026-07--fleet-continuity--handoff-parks-every-local-lane-liftoff-respawns-parked-benches-wake-lock-parks-every-outcome-extends-the-d-020d-023-lane-law-upholds-d-009))
whose ripple overwrites handoff + liftoff with fixed payloads and
lands four surgical edits + two insertions across
[parallel-lanes](../skills/parallel-lanes.md) and
[LAWS](../LAWS.md).

## Pending issues
none

## Left / idle
Everything after birth: the decide commit (payloads + edits), the
verification suite, ship to THE GATE. The merge itself waits for
founder approval after external review — by brief.

## The story
Born from the Web-chat ops leg (the Fleet Continuity brief), queued
on the board since the 2026-07-13 work-PC handoff. File-disjoint
from the shipped stale-branch-hygiene PR
([#101](https://github.com/wsher0901/roam/pull/101)) by design:
this task must not touch pickup.md or the hooks.

## Where to look
Spec: [fleet-continuity](../specs/fleet-continuity.md) · payloads
live verbatim in the founder's brief (mirrored by the spec's plan
and the PR description) · decision:
[D-032](../DECISIONS.md#d-032--2026-07--fleet-continuity--handoff-parks-every-local-lane-liftoff-respawns-parked-benches-wake-lock-parks-every-outcome-extends-the-d-020d-023-lane-law-upholds-d-009).
