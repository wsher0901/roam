---
type: spec
id: ship-synthesis
title: Ship gains the synthesis-at-weld step
status: shipped
stage: workshop
branch: feat/ship-synthesis
pr: 320
opened: 2026-08-05
shipped: 2026-08-05
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

**WHY THIS IS NOT A LOOSENING OF RULING 2 — and the one place the
record pushes back.** The ruling says a settled item's story IS
WRITTEN; the reading here is that this fixes when a story is OWED,
not that a weld must produce it on the spot. Ruling 2's "at that
weld" attaches grammatically to incorporation into an EXISTING
story, which is case 1.

**BUT [HOME §Where information goes](../../HOME.md#where-information-goes)
DRAWS A DISTINCTION THIS DESIGN MUST ANSWER, and it is the strongest
thing in the record against case 2.** Its writer cell says "the weld
that SETTLES the item writes its story"; its upsert cell says "the
weld that ADVANCES it — incorporated, the ending rewritten in
place". So HOME already separates settle from advance and assigns
*write the story* to the settling weld. The step therefore splits
case 2: an ADVANCING weld updates the ending cell, and a SETTLING
weld updates it AND RECORDS THE STORY AS OWED — because writing it
on the spot would pre-empt the founder's live ruling on the scope of
the 63 unwritten stories, and skipping the distinction would
contradict HOME.

THAT IS A RECONCILIATION, NOT A RESOLUTION. If the founder rules
that a settling weld must write the story then and there, cases 2
and 3 change and HOME needs no edit; if the founder rules the debt
may be recorded, HOME's two rows should gain the census-cell and
census-row write-forms this bench creates. **Either way one of them
moves, and this bench deliberately moves neither** — it is the one
thing here worth a founder's word.

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

### 2 · Widen §7's staging list

[ship §7](../../skills/ship.md)'s `git add` set gains
`docs/chronicle`, so a synthesis edit cannot be left unstaged. THE
LIST IS THE ONLY NET HERE — `check:ledger` catches a missing ledger
line, but nothing mechanical catches a story whose ending was
rewritten and never staged, so the list says so in as many words.

*(This step originally also named ship §2's spec gate. §2 has no
staging command; corrected here rather than left to read as though
it did.)*

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
- [x] THE STEP'S OWN FIRST EXERCISE IS COMMITTED TO BEFORE THE GATE,
      and the commitment is this: at this bench's weld, run the step
      against ship's own item and record in the history file which
      case fired and what it cost. **The box is worded as a
      commitment, not an outcome, deliberately** — a box that can
      only be ticked after §7 is a box [§2](../../skills/ship.md)'s
      spec gate must halt on, and a bench that writes a contract its
      own ritual cannot pass has mis-specced itself.
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
