---
type: spec
id: template-date-row
title: The complete-awaiting-merge row gains its date slot
status: shipped
stage: workshop
branch: docs/template-date-row
opened: 2026-08-04
shipped: 2026-08-04
pr: 295
---

# template-date-row — the row the checker contradicts

**Links:** [TEMPLATE](../../memory/TEMPLATE.md) (the file this bench
edits) · [§Status vocabulary](../../memory/TEMPLATE.md#status-vocabulary)
(the table) · `scripts/check-memory.mjs` (the checker that disagrees
with it) · source: the [IDEAS line](../../IDEAS.md) flight 2 lanes A
and B both produced.

THE SOLE LANE OF FLIGHT 3 — see [§The flight law](#the-flight-law-for-flight-3)
below. This bench is real cargo; the flight around it is the test.

## Goal

[TEMPLATE](../../memory/TEMPLATE.md)'s Status vocabulary table
writes one row as a bare state:

> `| complete, awaiting merge | the finishing session | THE GATE |`

Its dated neighbours — `parked — <date · reason>`,
`interrupted — <date> · <why>`, `claimed — <vehicle · date>`,
`failed — <reason · date>` — all carry a `<date>` slot. This one does
not, and `scripts/check-memory.mjs` requires a `YYYY-MM-DD` stamp in
every Status body. So a session that copies this row VERBATIM, which
is what a vocabulary table invites, goes red on a gate that is right
to be strict.

The whole of this bench: give that row its `<date>` slot, matching
the form its neighbours already use, so the table and the checker
agree.

TWO LANES FOUND THIS INDEPENDENTLY on 2026-08-04 — lane A hit it
writing its own completion Status, and lane B met the same class of
friction on the same file. The bench carries ONE LINE recording that
double discovery, because a defect two seats find separately on the
same day is evidence about the table, not about either seat.

## Done means

- [x] The `complete, awaiting merge` row in
      [§Status vocabulary](../../memory/TEMPLATE.md#status-vocabulary)
      carries a `<date>` slot in the form its dated neighbours use.
- [x] One line in [TEMPLATE](../../memory/TEMPLATE.md) records the
      two independent discoveries (flight 2, lanes A and B).
- [x] `npm run check:memory` passes, and a Status body written
      verbatim from the amended row would now satisfy it.
- [x] The diff touches TWO files and no others:
      `docs/memory/TEMPLATE.md` and this bench's memory.

## Out of scope

- **THE OTHER BARE ROWS, AND THERE ARE MORE THAN THE INBOX LINE
  SAYS.** The checker demands a date anywhere in the Status BODY, so
  every row written as a bare state is copy-verbatim-red, not just
  two: `bench ready`, `blocked — <reason>`,
  `cloud spawn failed — <reason>`, `superseded — <by>`,
  `shipped — merged #N`, and this bench's row. Only THIS ROW is in
  scope, on the founder's explicit scoping. The wider finding is
  recorded here so the next bench inherits a measured count rather
  than the inbox line's estimate of two — and so that nobody reads
  this bench's merge as having closed the class.
- Changing `scripts/check-memory.mjs`. The checker is right; the
  table is what disagrees with it.
- Any other section of [TEMPLATE](../../memory/TEMPLATE.md) — the ⏸
  capture block, the section list, the airborne row's
  character-for-character contract. Untouched.
- Every other file in the repo. → [§The flight law](#the-flight-law-for-flight-3)

## Plan

1. Amend the one row in the table.
2. Add the one line naming the double discovery.
3. Run the full verification loop; `check:memory` is the gate that
   matters here.
4. Push, and speak through the PR.

## The flight law for flight 3

Flight 3 flies ONE cloud lane. Its purpose is to exercise
[pickup §6](../../skills/pickup.md#6--fleet-resume-on-the-founders-answer)'s
OTHER entry door — THE DESK TAKEOVER of a cockpit that is LIVE and
holding a gate, designed at
[D-061](../DECISIONS.md#d-061--the-landing-doctrine-recut-to-three-scenarios)
scenario 2 and never once flown. Flight 2 could not reach it: its
fleet was already at ground when the founder sat down.

WHAT THAT MEANS FOR THIS LANE, and it is the whole of the lane's
duty: **finish, report, and expect no merge.** The founder will not
answer the gate this flight opens. That is not a failure and not a
lane's problem to solve — it is the experiment. The lane pushes its
work, flips ready, and stops. Everything after that belongs to the
cockpit and then to the desk that takes over.

THE LANE NEVER MERGES AND NEVER WRITES MAIN — no
[DASHBOARD](../../DASHBOARD.md), no [IDEAS](../../IDEAS.md), no
[ROADMAP](../../ROADMAP.md), no `record/history/`. Those are the
absolute prohibitions of
[the lane law](../../skills/parallel-lanes.md#the-lane-law-seat-blind--identical-local-or-cloud),
and "done" keeps meaning founder-approved and merged.

The cargo is deliberately small so that any failure observed is a
failure of the MACHINERY and not of the work.
