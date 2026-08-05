---
type: spec
id: chronicle-pilot
title: The chronicle pilot — three stories, to size the other sixty-three
status: open
stage: workshop
branch: docs/chronicle-pilot
pr: 318
opened: 2026-08-05
shipped: —
---

# chronicle-pilot — three stories chosen to break the format

**Links:** [D-076](../DECISIONS.md#d-076--phase-2-opens-with-a-three-story-pilot)
· [D-059](../DECISIONS.md#d-059--the-chronicle-layer) ·
[D-060](../DECISIONS.md#d-060--the-three-phase-standing-order) ·
[the census](../../chronicle/INDEX.md)

## Goal

Open phase 2 by writing **three chronicle stories** and reporting
what they cost, so the remaining 63 are ruled against a number
rather than an estimate.

THE PRODUCT IS THE FORMAT AND THE COST, NOT THE COVERAGE.
`docs/chronicle/` holds one file today — its INDEX — and not one
story. Every question about scale is currently answered by guessing.

## The three, and why these three

Chosen to be UNLIKE each other, so the format meets its three hard
cases before scale is chosen. Each names the case it exists to test:

1. **the wake-lock** — *absorbing brand-new evidence.* Its census
   ending predates flight 4, which observed the rejected-push rule
   firing for the first time in four flights, twice, in both
   directions. Tests: can a story take in evidence that landed after
   the census without being rewritten from scratch?
2. **land — how a flight ends** — *an ending the census got wrong.*
   Its census row reads "with no recorded run, and the founder does
   not believe it ever ran (2026-07-28)". It has since run FOUR
   times, all on 2026-08-04 — corrected from THREE at write time,
   when the board's own paint stamps were read rather than recalled:
   AUTO-LAND 13:53 UTC · MODE P 16:02 UTC · flight 3's superseded
   cockpit retiring by Scenario 2 and writing no board · MODE P
   21:16 UTC. Tests: the ENDING RULE
   ([D-059](../DECISIONS.md#d-059--the-chronicle-layer) ruling 2)
   against a census ending that is now false.
3. **the canary handshake and the ack token** — *a story that must
   carry an open defect honestly.* Its own section defines the ack
   token's middle field two different ways, and the word-vs-token
   match question is DEFERRED by the founder with no ruling. Tests:
   can a story state what is still broken and still unruled without
   either hiding it or pretending to settle it?

## Out of scope

- **The other 63.** They are re-ruled when this reports, per
  [D-076](../DECISIONS.md#d-076--phase-2-opens-with-a-three-story-pilot).
- **Touching `record/`.** Immutability beneath
  ([D-059](../DECISIONS.md#d-059--the-chronicle-layer) ruling 4):
  stories link DOWN into the frozen record as footnotes and change
  nothing there.
- **The ship synthesis-at-weld step.**
  [D-059](../DECISIONS.md#d-059--the-chronicle-layer) defers it to
  the first story weld and gives it its OWN bench, touching
  [ship](../../skills/ship.md). This pilot makes it due; it does not
  do it. → surface it at the gate.
- **The polish pass.** Phase 2's second half
  ([D-060](../DECISIONS.md#d-060--the-three-phase-standing-order));
  not this bench.
- **Re-running the census.** The 66 rows stand as the
  [INDEX](../../chronicle/INDEX.md) has them; this bench turns three
  of them from proposals into stories.

## Plan

### 1 · Write the three stories

One file per story in `docs/chronicle/`, per
[D-059](../DECISIONS.md#d-059--the-chronicle-layer) ruling 3. Each
tells what its ruling 1 fixes: **the item · the events that raised
it · the changes and actions in order · what it ended up as.**
Sources are the frozen record — the ledger, the quadrant stories,
DECISIONS, the probes — read at write time, never recalled.

DOWN-LINKS ONLY (ruling 5): a story never cites another story's
prose. Cross-references ride decide anchors or ledger lines.

### 2 · Measure, honestly, per story

Record for each: sources read, wall-clock, and what made it hard.
THE MEASUREMENT IS A DELIVERABLE, not a note — it is the input to
the re-ruling, so a story that took three times another's says so
and says why.

### 3 · Update the INDEX

The three rows stop being proposals: each points at its written
story. The remaining 63 stay proposals, untouched.

### 4 · Report the format and the number

The bench's memory carries: the format as it actually settled (a
template a later bench can follow), the cost per story, which of the
three hard cases the format handled badly, and a RECOMMENDATION for
the remaining 63 — all-at-once, in shelf-sized benches, or
abandoned.

## Done means

- [x] Three story files exist in `docs/chronicle/`, one per item,
      each carrying item · events that raised it · changes in order ·
      current ending.
- [x] Each story's ending is DERIVED from the record at write time
      and cites its sources as down-links; `record/` is untouched by
      this branch.
- [x] No story cites another story's prose (ruling 5), checked by
      reading the three, not asserted.
- [x] The wake-lock story absorbs flight 4's observation; the land
      story's ending contradicts and replaces its census row, saying
      so plainly; the canary story names its unresolved defect and
      the deferred ruling without settling either.
- [x] [The INDEX](../../chronicle/INDEX.md) marks exactly these three
      as written and leaves 63 as proposals.
- [x] The memory carries the FORMAT (a followable template), the
      MEASURED cost per story, and a recommendation for the rest.
- [x] The ship synthesis-at-weld step is SURFACED at the gate as due
      — [D-059](../DECISIONS.md#d-059--the-chronicle-layer) defers it
      to this weld and gives it its own bench.
- [x] The verification loop is green and the PUSHED head's Actions
      run is green — confirmed on `9c2f929` (run 31034651097),
      checked against that SHA rather than inheriting the previous
      head's run.

## Notes for whoever resumes this bench

The pilot's value is the honest measurement. A story rushed to make
the number look good defeats the entire purpose — if three stories
take longer than expected, THAT is the finding, and the
recommendation for the remaining 63 should say so.
