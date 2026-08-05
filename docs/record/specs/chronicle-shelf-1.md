---
type: spec
id: chronicle-shelf-1
title: The first shelf bench — Shelf III slice D, and the cold-bench calibration
status: shipped
stage: workshop
branch: docs/chronicle-shelf-1
pr: 322
opened: 2026-08-05
shipped: 2026-08-05
---

# chronicle-shelf-1 — the calibration that re-rules the rest

**Links:** [D-077](../DECISIONS.md#d-077--shelf-benches-and-the-settling-weld-writes)
· [D-076](../DECISIONS.md#d-076--phase-2-opens-with-a-three-story-pilot)
· [D-059](../DECISIONS.md#d-059--the-chronicle-layer) ·
[the census](../../chronicle/INDEX.md) ·
[the pilot's report](../history/workshop/definition/chronicle-pilot.md)

## Goal

Write **Shelf III slice D — the machinery & gates** (8 stories), and
report what a shelf bench ACTUALLY COSTS from a seat that has not
been living in the material.

Per [D-077](../DECISIONS.md#d-077--shelf-benches-and-the-settling-weld-writes),
this bench is the CALIBRATION: **its measured cost re-rules the
remaining shelves before any of them fire.** The stories are real
output; the number is the deliverable that unblocks everything else.

It also carries the ship §7 adjustment
[D-077](../DECISIONS.md#d-077--shelf-benches-and-the-settling-weld-writes)
ruling 2 requires, because that ruling names this bench as its
vehicle.

## ⚠ THE CALIBRATION IS ONLY WORTH ANYTHING FROM A COLD SEAT

**The session that birthed this bench cannot be the one that flies
it.** It spent 2026-08-05 inside LAWS, HOME, ship, pickup, the
board, IDEAS, DECISIONS, the flight probes and the chronicle — which
is most of what Shelf III describes. A cost measured by that seat
would reproduce exactly the confound the pilot already flagged and
disowned, and the whole point of this bench is to escape it.

**SO: THIS BENCH IS BIRTHED BENCH-FIRST AND LEFT TO BE CLAIMED BY A
FRESH SEAT** — a new sitting, or a cloud lane. That is not a
scheduling preference; it is the measurement's only validity
condition, and a bench flown by its author's session returns a
number nobody should re-rule against.

## The slice, and why this one

Shelf III's 32 rows cluster into five slices. Derived from
[the census](../../chronicle/INDEX.md) at write time:

- **A · the knowledge ladder** (6) — narrative layer · memory
  TEMPLATE · the ledger + gate · the specs system · the record
  shelf · the chronicle layer
- **B · laws & doctrine** (7) — LAWS · DECISIONS and decide · the
  routing law · the retroactivity law · the corpus writing laws ·
  the derivation law · the response doctrine
- **C · surfaces & manuals** (7) — HOME · DASHBOARD · IDEAS ·
  ATLAS · recall · WEB-INSTRUCTIONS · SETUP
- **D · machinery & gates** (8) — link integrity · CI is the
  arbiter + auto-merge · the session hooks · session lifecycle ·
  the vault lens · the per-machine seat and machine-setup · the
  guardrail audit · the docs currency audit
- **E · the task-loop rituals** (4, lead-added) — ship · pickup ·
  the pacing law · the micro-PR carve-out

**SLICE D GOES FIRST** for two reasons that both serve the
calibration. It is the LEAST-TROD by recent work, so a fresh seat
meets it genuinely cold. And it is MIXED — two of its eight are
audits (events) rather than system pieces, so the bench exercises a
story type the pilot never wrote, which is one of the two gaps the
pilot named in its own coverage.

Slice E is deliberately LAST whenever it runs: its four items are
the rituals this workshop touches constantly, so they will be the
most re-written and are worth writing once the format has settled.

## Out of scope

- **The other four slices and the other three shelves.** They are
  re-ruled by this bench's number, per
  [D-077](../DECISIONS.md#d-077--shelf-benches-and-the-settling-weld-writes).
- **Touching `record/`.** Immutability beneath
  ([D-059](../DECISIONS.md#d-059--the-chronicle-layer) ruling 4).
- **The three written stories.** Correct as shipped.
- **The polish pass** — phase 2's second half.

## Plan

### 1 · Adjust [ship §7](../../skills/ship.md#7--on-approval--the-atomic-weld)'s cases 2 and 3

Per [D-077](../DECISIONS.md#d-077--shelf-benches-and-the-settling-weld-writes)
ruling 2. A weld that SETTLES an item with no story now WRITES the
story then and there — the settling seat has already paid the
gathering cost, so it is the cheapest seat that will ever exist for
it. The recorded-debt form survives ONLY for the backlog these shelf
benches clear, and the step must say so in as many words, or the
next reader will take the debt form as a general option.

**Do this FIRST**, so the rest of the bench runs under the rule it
is installing.

### 2 · Write the eight slice-D stories

To the pilot's format — ending first in a blockquote, `## What it
is` · `## What raised it` · `## What changed, in order` · a closing
section · `## Sources`, down-links only. One file per story in
`docs/chronicle/`.

TWO OF THE EIGHT ARE EVENTS, not system pieces. If the format needs
to bend for them, BEND IT AND SAY SO — that is a finding the pilot
could not produce.

### 3 · Measure, from a cold start

Per story: sources opened, wall-clock, and what made it hard. AND
THE NUMBER THIS BENCH EXISTS FOR: the total, and how much of it was
GATHERING versus WRITING — the split the pilot inferred but could
not measure.

### 4 · Update the INDEX and report

Eight rows stop being proposals. The memory carries the cost split,
the format's behaviour on event-type stories, and a re-ruling
recommendation for the remaining shelves.

## Done means

- [ ] [ship §7](../../skills/ship.md#7--on-approval--the-atomic-weld)'s
      cases 2 and 3 implement
      [D-077](../DECISIONS.md#d-077--shelf-benches-and-the-settling-weld-writes)
      ruling 2, and the debt form is explicitly scoped to the
      backlog.
- [ ] Eight story files exist for slice D, in the pilot's format,
      each ending DERIVED from the record at write time.
- [ ] No story cites another story's prose; `record/` untouched.
- [ ] The two EVENT-type stories are written, and any format bend
      they required is named.
- [ ] The measurement separates GATHERING from WRITING and states
      whether the pilot's inference held.
- [ ] The INDEX marks exactly these eight written.
- [ ] The memory carries a re-ruling recommendation for the
      remaining shelves.
- [ ] The verification loop is green and the PUSHED head's Actions
      run is green.

## Notes for whoever resumes this bench

**If you are the session that birthed this, stop and hand it on.**
The calibration's only validity condition is a cold seat, and this
bench is worth more flown late by a fresh one than promptly by an
exhausted one.
