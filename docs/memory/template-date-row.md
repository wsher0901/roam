---
type: memory
id: template-date-row
updated: 2026-08-04 19:45 UTC · completion · cloud lane
---

# template-date-row — the row the checker contradicts

## Status

complete, awaiting merge — 2026-08-04

The cargo is pushed and the full verification loop is green. THE
LANE EXPECTS NO MERGE and asks for none: the founder will not answer
the gate this flight opens, and that unanswered gate is flight 3's
experiment. Everything past this line belongs to the cockpit and
then to the desk that takes over.

This Status line is itself the first verbatim copy of the amended
row — written in the form the table now prints, with the date slot
filled, and green under `check:memory`. The bench's own last act is
the proof of its fix.

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

None blocking. Nothing was held, and no `BLOCKED:` comment was ever
needed — the bench was fully specified at birth and the lane asked
the founder nothing.

What remains is not this lane's to close: the merge itself, which is
withheld by design.

## Left / idle

Nothing left of the mandate. All four Done-means are met and each
was checked against the record rather than asserted:

- the row carries its `<date>` slot, in its neighbours' form;
- one line names the double discovery, linking both lanes' PRs;
- `check:memory` passes, AND the verbatim claim was proved in both
  directions by probe (below), not by reasoning;
- the diff is two files — `docs/memory/TEMPLATE.md` and this memory
  — and no others.

Deliberately NOT done, and not oversights: the other five bare rows
(out of scope on the founder's explicit scoping — the spec keeps the
measured count so nobody reads this merge as having closed the
class), `scripts/check-memory.mjs` (the checker is right), and every
main-side file — no [DASHBOARD](../DASHBOARD.md), no
[IDEAS](../IDEAS.md), no [ROADMAP](../ROADMAP.md), no
`record/history/`.

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

2026-08-04 19:41 UTC · canary · cloud lane — woke on the
`lane:cloud` label, checked out this branch, and made the claim its
one act before waiting. Then waited for a COMMIT, polling origin on
a 30-second cycle with an anchored match on the start of the Status
line.

2026-08-04 19:42 UTC · the redelivered webhook · cloud lane — A
SECOND `pull_request.labeled` FIRING ARRIVED MID-HANDSHAKE, citing
head SHA `5a45c10` — the birth commit, already stale, because the
canary had moved the branch to `36405bd`. It met the wake-lock
([§Wake-lock](../skills/parallel-lanes.md#wake-lock--parking)): the
lane re-read its Status FROM ORIGIN before anything else, found its
own live claim, and so pushed nothing, re-canaried nothing, and
started no second worker. This is the SECOND live sighting of the
redelivered-label case — the first was 2026-07-16, logged in
[§Cloud spawn](../skills/parallel-lanes.md#cloud-spawn--route-ladder)
— and it died harmless the same way.

2026-08-04 19:42 UTC · the ack · cloud lane — licensed by commit
`e428158`, whose Status line began exactly `airborne · cloud ·
2026-08-04`. The anchored match mattered in a way worth recording:
the poller's own pattern was checked BYTE-WISE before it was trusted
(`cat -A` → `M-BM-7`, U+00B7) after a `pgrep` rendering of the same
script printed the middots as `??`. A tool that garbles the token in
DISPLAY is not the same as a script that garbles it on disk, and the
only way to tell them apart is to read the bytes.

2026-08-04 19:43 UTC · the cargo · cloud lane — one row amended,
one line added. Then the claim in Done-means — "a Status body
written verbatim from the amended row would now satisfy it" — was
PROVED RATHER THAN ARGUED, by two throwaway probe memories run
through the real checker and deleted: the amended row's form passes
(`Status 2026-08-04`), and the OLD bare row fails with exactly
`Status carries no date`. The defect was real and the fix closes it;
neither half of that is inference.

2026-08-04 19:45 UTC · completion · cloud lane — the full
verification loop green, and this rewrite is the fourth diary
moment, written before the ready-flip as the lane law orders.

## Ideas surfaced

For the baton-holder to harvest into [IDEAS](../IDEAS.md) — a lane
may not write it itself.

- THE VERIFICATION LOOP'S FIRST THREE COMMANDS PASS ON A SANDBOX
  WITH NO `node_modules`, because `check:links`, `check:ledger` and
  `check:memory` are zero-dependency node scripts; the fourth
  (`npm run lint`) is where a fresh cloud seat discovers it, and the
  failure reads as `ERR_MODULE_NOT_FOUND: Cannot find package
  'eslint'` — a broken-config shape, not a missing-install one. A
  lane that stopped after three green checks would believe it had
  run the loop. [ship §1](../skills/ship.md#1--preflight) names no
  install step, and this seat needed `npm ci` before the last four
  commands could run at all.
- ROUTE 1 CONSUMES THE READY-FLIP, SEEN AGAIN. This bench was
  labelled per the recipe of record (ready-flip, THEN label), so the
  PR was already non-draft when the lane woke — the completion
  ready-flip is a no-op and cannot signal completion. Flight 1
  logged this; flight 3 reproduces it, which makes it a property of
  the route rather than an incident.
- `check-memory.mjs`'s PLACEHOLDER RULE CANNOT SEE A CODE SPAN THAT
  WRAPS. It strips backtick spans with a regex that forbids newlines
  inside the span, so a legitimately backticked placeholder broken
  across two source lines survives the strip and is reported as
  unresolved. Hit live while writing this very memory: quoting the
  amended row inside backticks went red until the quote was reworded
  to fit on one line. The gate is right to be strict about bare
  placeholders, but the workaround it currently forces is "reflow
  your prose", which is a formatting rule wearing a correctness
  rule's clothes.
- THE REDELIVERED-LABEL CASE NOW HAS TWO SIGHTINGS (2026-07-16 and
  this flight, above). The wake-lock held both times — but note what
  it did NOT test: both redeliveries landed on a lane that was
  waiting, not one mid-push. The rejected-push rule stays unobserved,
  which is the board's own standing open question.

## Where to look

- [the spec](../record/specs/template-date-row.md) — the contract.
- [TEMPLATE §Status vocabulary](TEMPLATE.md#status-vocabulary) — the
  table amended.
- `scripts/check-memory.mjs` — the checker the table contradicted.
- [the flight-3 line in IDEAS](../IDEAS.md) and
  [D-074](../record/DECISIONS.md#d-074--phase-1-closes-on-flights-3-and-4)
  — why this flight exists.
- [§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)
  — the handshake this bench flew, ack token and all.
