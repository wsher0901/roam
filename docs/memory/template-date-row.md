---
type: memory
id: template-date-row
updated: 2026-08-04 19:38 UTC · bench birth · work PC
---

# template-date-row — the row the checker contradicts

## Status

bench ready — born 2026-08-04

Awaiting a lane. The bench exists on origin — branch, spec, this
memory, draft PR — before any worker does, per bench-first birth.

A NOTE THE BENCH EARNED BY EXISTING: this very Status line had to be
written `bench ready — born 2026-08-04` rather than the bare
`bench ready` the vocabulary table prints, because
`scripts/check-memory.mjs` demands a date in the Status body. That is
the same defect this bench repairs, met one row over, while writing
the bench that repairs it.

## What this task is

[TEMPLATE](TEMPLATE.md)'s Status vocabulary table writes
`complete, awaiting merge` as a bare state while its neighbours carry
a `<date>` slot, and `check:memory` requires a date in every Status
body. Copying the row verbatim — which is what a vocabulary table
invites — goes red.

This bench gives that one row its date slot and records, in one line,
that flight 2's lanes A and B found the problem independently.

Scope edges and the full mandate:
[the spec](../record/specs/template-date-row.md). TWO FILES ONLY —
`docs/memory/TEMPLATE.md` and this memory. The spec records a wider
finding deliberately left out of scope: the bare-row class is SIX
rows, not the two the inbox line estimated.

## Pending issues

None. The bench is fully specified and needs no founder input.

## Left / idle

Everything — no lane has claimed it yet.

## The story

2026-08-04 19:38 UTC · bench birth · work PC — born as the sole
cargo of FLIGHT 3, the desk-takeover test, from the founder's scope
of the same date. The bench was chosen to be small on purpose: flight
3 is testing
[pickup §6](../skills/pickup.md#6--fleet-resume-on-the-founders-answer)'s
desk takeover, and a fleet test wants cargo that cannot itself go
wrong, so that any failure observed is unambiguously the machinery's.

THE LANE SHOULD EXPECT NO MERGE. The founder will not answer the gate
this flight opens — that unanswered gate IS the experiment. The lane
finishes, reports through its PR, and stops.

## Where to look

- [the spec](../record/specs/template-date-row.md) — the contract.
- [TEMPLATE §Status vocabulary](TEMPLATE.md#status-vocabulary) — the
  table being amended.
- `scripts/check-memory.mjs` — the checker the table contradicts.
- [the flight-3 line in IDEAS](../IDEAS.md) and
  [D-074](../record/DECISIONS.md#d-074--phase-1-closes-on-flights-3-and-4)
  — why this flight exists.
