---
type: spec
id: ship-synthesis
title: Ship gains the synthesis-at-weld step
status: open
stage: workshop
branch: feat/ship-synthesis
pr: —
opened: 2026-08-05
shipped: —
---

# ship-synthesis — making the ending rule something a ritual performs

**Links:** [D-059](../DECISIONS.md#d-059--the-chronicle-layer) ·
[D-076](../DECISIONS.md#d-076--phase-2-opens-with-a-three-story-pilot)
· [ship](../../skills/ship.md) ·
[the census](../../chronicle/INDEX.md) ·
[the pilot's report](../history/workshop/definition/chronicle-pilot.md)

## Goal

[D-059](../DECISIONS.md#d-059--the-chronicle-layer)'s ENDING RULE
says a later fix to an item is INCORPORATED into that item's story
and the ending rewritten **at that weld**. Nothing performs that.
[ship](../../skills/ship.md) has no such step, so the rule is a
convention a seat must remember unprompted — and the pilot has
already shown what that produces: land's census ending read "no
recorded run" while the ritual had run four times, and the row sat
stale for a week because no weld was ever obliged to touch it.

This bench gives ship the step. **The rule stops depending on
memory.**

## Out of scope

- **Writing the remaining 63 stories.** Their scope is a separate
  founder ruling, still open. This bench makes the weld MAINTAIN
  what exists and keep what does not exist accurate; it writes no
  story.
- **Changing the ending rule.**
  [D-059](../DECISIONS.md#d-059--the-chronicle-layer)'s six rulings
  stand unamended. This bench implements ruling 2; it does not
  reinterpret it.
- **Touching the three written stories' content.** They are correct
  as shipped.
- **The polish pass** — phase 2's second half, not this bench.

## The design question, and the answer

**A weld may find its item in one of three states, and only one of
them is the case the ending rule literally describes.** Getting this
wrong in either direction is the whole risk: too strict and every
weld becomes a story-writing bench, contradicting the pilot's cost
finding; too loose and endings rot exactly as land's did.

1. **THE ITEM HAS A WRITTEN STORY** → INCORPORATE. Add one bullet
   to that story's `## What changed, in order` spine and REWRITE its
   ending blockquote. Never a second story
   ([D-059](../DECISIONS.md#d-059--the-chronicle-layer) ruling 2,
   applied literally). This is small by construction — the pilot's
   format was built so a new event is one bullet plus an ending.
2. **THE ITEM HAS A CENSUS ROW BUT NO STORY YET** (63 of 66 today) →
   UPDATE THE ROW'S ENDING CELL in
   [the census](../../chronicle/INDEX.md). One cell, not a story.
   This is the case land's row failed, and it costs a line.
3. **THE ITEM HAS NEITHER** → ADD A CENSUS ROW as a proposal, on the
   right shelf, with the ending the weld just produced. The census
   was a snapshot of 2026-07-27; work since then has created items
   it never saw, and without this they are invisible to every future
   shelf bench.

**WHY THIS IS NOT A LOOSENING OF RULING 2.** The ruling says a
settled item's story IS WRITTEN — it fixes when a story is OWED, not
that a weld must produce it on the spot. Cases 2 and 3 keep the debt
recorded and accurate so the shelf bench that pays it inherits a
true ending instead of a week-old one. If the founder reads ruling 2
as requiring the story at the weld, this spec is where to say so and
the design changes.

## Plan

### 1 · Add the step to [ship §7](../../skills/ship.md)

Into the atomic weld, so the story's ending and the ledger line land
in ONE commit. That placement is the point: a story whose ending
lags its own ledger line is precisely the stale-ending failure this
bench exists to end.

The step states the three cases above, the lookup (find the census
row whose item this bench changed), and the honest escape: **if no
row plausibly matches and the work is not chronicle-shaped, say so
in the weld commit and move on** — a ritual that forces a false
match is worse than one that records a miss.

### 2 · Update the Done-means language ship already carries

[ship §2](../../skills/ship.md)'s spec gate and §7's staging list
gain the chronicle file to their `git add` set, so a synthesis edit
cannot be left unstaged — the same net `check:ledger` provides for
the ledger line.

### 3 · Prove it on this bench's own weld

This bench's item — the ship ritual — is a census item. Its weld
runs the new step against itself, which is the cheapest possible
first exercise and the honest one: if the step is unusable, its
author finds out before anyone else does.

## Done means

- [ ] [ship §7](../../skills/ship.md) carries the synthesis step,
      stating all three cases and the no-match escape.
- [ ] The step is placed in the ATOMIC weld commit, not the tail,
      and says why.
- [ ] The staging list includes the chronicle file, so a synthesis
      edit cannot be left behind.
- [ ] [D-059](../DECISIONS.md#d-059--the-chronicle-layer) is NOT
      amended, and the spec's reading of ruling 2 is stated where the
      founder can contradict it.
- [ ] The step was RUN on this bench's own weld, and the result —
      which of the three cases fired, and what it cost — is recorded
      in the memory.
- [ ] The verification loop is green and the PUSHED head's Actions
      run is green.

## Why this is not a decision

The bench is ordered ahead of the story fleet by the founder's word
of 2026-08-05, which is SEQUENCING INSIDE AN OPEN PHASE rather than
a stage reordered or a task added:
[D-059](../DECISIONS.md#d-059--the-chronicle-layer) already created
this bench and deferred it to the first story weld, which has now
happened. No standing convention changes — ship gains a step that
performs a rule already ruled.

THE SWEEP RAN BEFORE THIS NOTE WAS WRITTEN, because the last bench
to claim "not a decision" was corrected by its own sweep and the
claim is worthless unmeasured. What it found: **no D-number fixes
ship's step LIST.** The decisions that name ship's sections change
things inside them — [D-057](../DECISIONS.md#d-057--the-record-shelf)
renamed §7's weld destination and staging command,
[D-044](../DECISIONS.md#d-044--the-pre-gate-critic-goes-live) put
the critic in §6, others cite §1's verification loop as a home —
and none of them makes the step list itself a standing choice. And
[D-059](../DECISIONS.md#d-059--the-chronicle-layer) does not merely
permit this bench, it NAMES it: "the ship-ritual synthesis-at-weld
step (its own bench, touching ship)". Building what a decision
already commissioned is not a new decision.

IF THE FOUNDER READS IT OTHERWISE, this is where to say so and
`decide` runs before the weld.
