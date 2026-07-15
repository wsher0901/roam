---
type: memory
id: handoff-inline-context
updated: 2026-07-15 · birth · work PC
---
# handoff-inline-context — Handoff input inversion

## Status
bench ready — branch, spec, and this stub laid on origin; draft PR
opening. Next: the D-040 decide commit (entry + ripple).

## What this task is
Retire handoff's never-skipped Web/Design question and invert the
input. A FULL handoff must never prompt after it fires: the founder's
leaving message carries the paste inline — text before the trigger is
the paste, taken verbatim; a bare trigger means "none". One decide
entry (D-040) plus its ripple across handoff.md, LAWS, HOME, and
WEB-INSTRUCTIONS, all in one commit. Out of scope: liftoff, ship,
pickup, the stubs, and immutable history/.

## Pending issues
- The claude.ai settings-box copy of WEB-INSTRUCTIONS goes stale once
  its footer changes. The existing Needs-you item (re-paste the box)
  already covers this; the ship-tail repaint should refresh that
  line's wording. Flag it in the PR summary.

## Left / idle
Everything after the bench: the decide commit, verification greps,
CI mirror, ship to the gate.

## The story
Born this session from the kickoff. The never-skipped question was
the last manual prompt in the leaving loop — handoff asking "any open
Web or Design threads?" and waiting for an answer. The founder chose
to invert it: since the founder is already typing a leaving message,
that message can carry the paste, and the ritual reads it instead of
asking back. A bare trigger (just a leaving phrase or `/handoff` with
nothing before it) records "none". This upholds
[D-032](../DECISIONS.md#d-032--2026-07--fleet-continuity--handoff-parks-every-local-lane-liftoff-respawns-parked-benches-wake-lock-parks-every-outcome-extends-the-d-020d-023-lane-law-upholds-d-009)
(handoff stays the single leaving ritual) and amends the
two-touchpoints law's wording only.

## Where to look
Spec: [handoff-inline-context](../specs/handoff-inline-context.md) ·
the ripple targets: [handoff §2](../skills/handoff.md),
[LAWS §The two touchpoints](../LAWS.md#the-two-touchpoints),
[HOME](../HOME.md), [WEB-INSTRUCTIONS](../WEB-INSTRUCTIONS.md) ·
decision: D-040 (this task's entry).
