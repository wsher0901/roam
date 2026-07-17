---
type: spec
id: ship-wiring
title: Ship wiring — the pre-GATE critic wired in
status: open
stage: workshop
branch: docs/ship-wiring
pr: —
opened: 2026-07-17
shipped: —
---
# ship-wiring — the pre-GATE critic wired into ship

**Links:**
[reviewer-subagent spec](reviewer-subagent.md) ·
[the critic's story](../history/workshop/mechanism/reviewer-subagent.md)
· [ship](../skills/ship.md) · Decisions:
[D-044](../DECISIONS.md#d-044--2026-07--the-pre-gate-critic-goes-live--ships-gate-opens-by-invoking-the-reviewer-subagent-verdicts-advisory-riding-with-the-summary-turns-on-the-staged-reviewer-upholds-d-038-and-the-reviewer-frame)
(born on this branch) ·
[SETUP §Staged](../SETUP.md#staged--turns-on-when-its-stage-opens)

## Goal

Wire the shipped reviewer subagent into the ship ritual as the
pre-GATE advisory critic: [ship §6](../skills/ship.md#6--the-gate)
opens by invoking the reviewer on the branch's diff, and its
structured verdict rides to the founder verbatim alongside the
plain-language summary. Executes the standing offer inboxed at the
2026-07-17 handoff ([IDEAS](../IDEAS.md)); founder go given
2026-07-17, morning sitting.

## Out of scope

- The reviewer's own frame, tools, model, effort, or verdict
  policy — owned by the
  [reviewer-subagent spec](reviewer-subagent.md) and its
  D-numbers; advisory stands per the founder's 07-17 answer on
  [#146](https://github.com/wsher0901/roam/pull/146).
- Renumbering ship's sections — every existing ship anchor stays
  stable.
- api-ignition or any other
  [staged tooling](../SETUP.md#staged--turns-on-when-its-stage-opens).
- Any ship step other than §6.

## Plan

1. Bench: branch `docs/ship-wiring`, this spec + memory stub, draft
   PR at birth.
2. D-044 entry + ripple in ONE commit: ship §6 gains the critic
   invocation · SETUP files the reviewer under
   [§Once and done — repo-side](../SETUP.md#once-and-done--repo-side-travels-with-git)
   and retires its §Staged line · the IDEAS inbox line cleared.
3. Ship to THE GATE — the reviewer's first wired run happens at
   this PR's own gate.

## Done means

- [x] D-044 recorded — entry + ripple in the same commit, anchors
      born resolving (check:links green before the push).
- [x] Ship §6 opens with the reviewer invocation, advisory framing
      explicit, section numbering untouched.
- [x] SETUP: the reviewer filed under repo-side; the §Staged line
      retired.
- [x] IDEAS: the 2026-07-17 ship.md-wiring line cleared.
- [x] Full CI mirror green · the pushed head's Actions run green ·
      the reviewer flown on this PR before its own GATE. (Ticked at
      the flip — the box describes the very Actions run and reviewer
      pass that follow this spec's final commit; both verified by
      the cockpit before THE GATE is announced.)

## Deviations

none

## Open questions

none — verdict policy and the reviewer's model/effort were settled
by the founder on
[#146](https://github.com/wsher0901/roam/pull/146); nothing is
reserved here.
