---
type: memory
id: flight-hardening
updated: 2026-07-22 · ship · work PC
---

# flight-hardening — correct every instruction the first end-to-end flight proved wrong

## Status

complete, awaiting merge — 2026-07-22, work PC. All nine mandate
items landed; the declared file list held with nothing outside it.
Tower-authored, so external Web review precedes the founder's word
at the gate (no-solo-approval,
[LAWS §Workflow](../LAWS.md#workflow-non-negotiable)).

## What this task is

The first end-to-end flight of the assembled chain flew on
2026-07-22 and welded as
[#191](https://github.com/wsher0901/roam/pull/191). Every step of
it that nearly failed failed against a WRITTEN instruction rather
than a missing one: the repo, as it stood, told a future seat to do
things that cannot work. This bench corrected those instructions in
place, from lived evidence — nine items, one theme, listed in
[the spec](../specs/flight-hardening.md).

Nothing here is new machinery. The permanent fix for the API-flap
class — a merge-on-signal GitHub Action that would turn merge into
a git act — was deliberately kept OFF this bench and stays staged
for its own.

## Pending issues

One item ships deliberately unproven: the `[COCKPIT] roam — <date>`
title line (item 8). Whether the birth platform adopts a
prompt-supplied title is untested — no cockpit was born on this
bench — so it is marked VERIFY-BEFORE-RELY in
[liftoff §6](../skills/liftoff.md#6--ledger-handoff--fire-the-cockpit):
confirm at the next birth, record the answer, drop the line if it
does nothing. The doctrine sentence beside it stands either way.

Two founder-side acts survive this weld and belong to the board,
not to code: re-saving the lane-worker routine box from the changed
charter master (it is a copy, and this PR edits the master a second
time after [#191](https://github.com/wsher0901/roam/pull/191)), and
pruning the cloud environment's setup script.

## Left / idle

nothing parked. The [IDEAS](../IDEAS.md) lines this bench does not
fix were left open ON PURPOSE and named in the triage: the
merge-on-signal Action, the notification taxonomy, self-authored
gates carrying the review verdict onto the record, the `count:runs`
npm wrapper, cap arithmetic blind to fires and redeliveries, clerk
retirement, and the reviewer DEFECT. The launcher-as-a-script half
of the rung-1 filing and the `[LANE]` half of the naming line also
stay open — both are machinery, which this bench excluded.

## The story

Born bench-first at the control tower on the founder's mandate,
2026-07-22, from a fresh main tip (`2c50cec`) with origin heads =
`main` only — the STEP 0 gate, passed and recorded before the
branch existed. The evidence base is the flight itself plus its two
closeout filings
([#190](https://github.com/wsher0901/roam/pull/190) recorded the
rung-1 mechanics that actually flew;
[#192](https://github.com/wsher0901/roam/pull/192) filed the
outing's findings).

The loudest finding shaped item 1. The airborne handshake token
disagreed across its two homes: TEMPLATE's state table wrote it
with an em-dash, §Canary's contract with a middot. In flight the
cockpit acked in the em-dash form, the lane's watcher — polling for
the middot — never saw it, read the window as timed out, and staged
a clean stand-down. What saved the flight was not the contract but
the wake-lock: the stand-down push was REJECTED because origin had
moved, the lane re-read its Status, found the real ack, dropped the
stand-down, and did the work. A backstop caught what a contract
should never have let through. And before the token even mattered,
the watcher had matched its OWN claim prose — "waiting for the
baton-holder's airborne ack" contains the word it was hunting — so
the fix is not just one spelling but an ANCHORED match on the start
of the Status line. §Canary wins the disagreement because §Canary
is what the watcher actually reads; TEMPLATE now copies it, and the
lane-worker charter master carries the same sentence, so a single
box re-save covers both PRs.

Two decisions worth recording because they are invisible in the
diff:

**The word `winpty` was removed from liftoff entirely, not just its
recipe.** The mandate's verification gate demanded the word be
absent, and that is the right call for a procedure file: naming the
dead scaffold invites a future seat to reach for it again. What
liftoff keeps is the PROHIBITION in behavioural terms — no wrapper,
no redirection anywhere, attach-read-kill — plus pointers to the
forensics in
[cloud-born-cockpit](../history/workshop/mechanism/cloud-born-cockpit.md)
and [IDEAS](../IDEAS.md), where the full diagnosis belongs. The
name still appears in the spec, which is a record of what was
replaced.

**SETUP's copy of the impossible recipe was fixed too, though the
mandate's item 2 named only liftoff.** SETUP carried the same
winpty shape word for word. Leaving it would have defeated the
bench's whole theme — the repo would still be telling a future seat
to do something that cannot work — and `docs/SETUP.md` was already
inside the declared file list. SETUP's bullet is now the inventory
entry and defers to liftoff §6 for the mechanics, which is the
routing law working as intended: one home for the procedure,
pointers everywhere else.

One correction found while verifying rather than while writing:
[liftoff §5](../skills/liftoff.md#5--handshake-verify-each) told
the baton-holder to write `"airborne · <url>"` — the middot form,
but missing the date, so it was a THIRD variant of the token that
the anchored match would technically accept while still drifting
from the contract. It now points at §Canary and carries the full
form.

## Where to look

- The contract: [the spec](../specs/flight-hardening.md) — goal,
  out of scope, the nine plan items, Done-means.
- The ack token, canonical home:
  [parallel-lanes §Canary](../skills/parallel-lanes.md#canary-handshake-both-sides);
  copies in [TEMPLATE](../memory/TEMPLATE.md)'s Status-vocabulary
  table and the lane-worker charter master in
  [SETUP](../SETUP.md#once-and-done--cloud-accounts).
- Rung 1's mechanics of record, and the board-authoritative
  flight-plan rule:
  [liftoff §6](../skills/liftoff.md#6--ledger-handoff--fire-the-cockpit).
- The API-dependency map and the recovery rung: the new subsection
  in [SETUP](../SETUP.md#once-and-done--cloud-accounts), under the
  cockpit charter.
- The flight all of this comes from:
  [lane-worker-baton](../history/workshop/mechanism/lane-worker-baton.md)
  ([#191](https://github.com/wsher0901/roam/pull/191)).
