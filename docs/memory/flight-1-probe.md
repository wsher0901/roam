---
type: memory
id: flight-1-probe
updated: 2026-08-03 21:46 UTC · completion · cloud
---
# flight-1-probe — the shakedown's simulated cargo

## Status

complete, awaiting merge — 2026-08-03. The probe file is written,
the verification loop is green, and the PR carries the completion
comment. THE LANE HAS NOT MERGED AND WILL NOT: "done" means
founder-approved and merged, and neither half is the lane's.

## What this task is

FLIGHT 1 OF THE TEST PROGRAM flies the whole flight machinery on a
payload chosen to be small, single-file and harmless, so that any
failure observed is a failure of the MACHINERY and not of the work.

This lane's entire task is to author
`docs/record/probes/flight-1-shakedown.md` — the flight's own log,
written from inside it — with four sections: BORN · THE CANARY ·
THE DIARY · WHAT A GREEN FLIGHT PROVES. Anything the lane cannot
observe is written "not observable from this seat", never guessed:
the reliability instinct applies to us too, and several checklist
lines will legitimately be unobservable from this seat.

THE SIMULATION LAW: this lane touches ONLY the probe file and this
memory. Nothing else, on any branch, for any reason. Contract:
[the spec](../record/specs/flight-1-probe.md).

## Pending issues

None blocking, and none were raised in flight — no `BLOCKED:`
comment was posted, because nothing on this flight was ambiguous
enough to need the founder. Three findings are queued as "Ideas
surfaced" below for the baton-holder to harvest; none of them is
this bench's to fix, per the spec's out-of-scope (flight 1 OBSERVES;
repairs are separate benches triaged through
[IDEAS](../IDEAS.md)).

## Left / idle

Nothing parked. Four of the nine chain links are unclosed BY
CONSTRUCTION — the non-author review, the founder's word, the weld,
and the auto-land all happen after this lane's last push. They are
recorded as "not observable from this seat", which is the correct
result rather than an open item, and they belong to this bench's
entry in [record/history/](../record/history) after the weld.

## The story

Birthed 2026-08-03 17:35 at the work PC by
[liftoff](../skills/liftoff.md) §3, bench-first: branch, spec, this
stub and a draft PR laid on origin BEFORE any worker exists.

2026-08-03 21:38 UTC — MOMENT 1, THE HANDSHAKE CLAIM. A cloud lane
woke on this bench and posted this canary: Status → claimed by
cloud. Now waiting for the baton-holder's ack, tested by the
ANCHORED match (does the Status line START WITH the token), never a
substring search.

2026-08-03 21:42 UTC — MOMENT 2, THE FIRST DECISION. The ack landed
52 seconds after the canary, in canonical form, and the anchored
match caught it. The decision, made while arming the watcher and
before any ack existed to test it: anchor the match at the START of
the Status line but on the WORD `airborne` rather than on the full
`airborne ·` token. Rationale — the anchor is what does the safety
work (it is what stops the lane matching its own claim prose, which
contains the word); the middot only adds brittleness against the
exact 2026-07-22 failure, where an em-dash ack was missed entirely
and read as a timed-out window. Anchored-on-the-word catches both
failure modes; anchored-on-the-token catches one.

The probe file was then authored from observation only, with the
unobservable links written as such. The result worth carrying off
this flight: FIVE of the nine chain links are visible from the
lane's seat and FOUR are not, and the four are not gaps — they are
where the seat's sight ends.

Ideas surfaced (for the baton-holder to harvest at its next ritual,
per the entry contract):

- ⚪ A memory's `updated:` stamp carries no timezone, so two seats
  writing the same minute read four hours apart on the page (this
  bench: `17:38` from the work PC, `21:38 UTC` from the cloud) — a
  cold reader cannot order a memory's own stamps.
- ⚪ The claim Status form differs between its two homes — §Canary's
  lane side versus TEMPLATE's state table — and only the airborne
  row is machine-checked, so the claim row can drift silently.
- ⚪ On a route-1 cloud lane the ready-flip is already consumed by
  the spawn, so the lane's completion contract has a step that is a
  no-op and a signal that carries no information; the staged
  `api-ignition` target is what would give it back.

2026-08-03 21:46 UTC — MOMENT 4, COMPLETION. `main` had moved under
the branch mid-flight (#269, liftoff's own flight plan), so the sync
came first: merged, never rebased. Then the full verification loop,
green end to end — 4481 links / 0 broken, ledger 114 ↔ 114, memory
format valid, lint, format, 3 tests, build. The simulation law was
CHECKED rather than asserted: every commit this lane authored
touches `docs/memory/flight-1-probe.md` and the probe file and
nothing else, listed rather than claimed. The branch's other changed
files — [DASHBOARD](../DASHBOARD.md), [IDEAS](../IDEAS.md) — came in
with the sync merge, authored on `main` by the founder in #269. A
bare branch diff cannot tell those apart from the lane's own work;
`git log --author` can, which is why the check was run that way.

MOMENT 3, BLOCKING, DID NOT OCCUR — recorded as absent rather than
omitted, since a diary that silently drops a moment reads the same
as one that never reached it.

THE ONE CONTRACT STEP THIS LANE COULD NOT PERFORM is the ready-flip:
route 1 spawns by flipping the PR ready and THEN labelling, so the
PR was already ready when this lane woke. There was no flip left to
make, and the ready state therefore carries no information about
completion. What this lane can actually signal is the memory Status,
the pushed commits, and the @mention comment — which is exactly the
guard
[§Cloud spawn](../skills/parallel-lanes.md#cloud-spawn--route-ladder)
already writes down, now met in the wild rather than in theory.

The lane's own duties are the ordinary ones and were not relaxed for
a test flight — the canary claim first, then WAIT for the ack
tested by the ANCHORED match, the diary at
[the four moments](../skills/parallel-lanes.md#the-four-memory-moments-the-lanes-diary-rule),
every commit pushed, and no merge ever. All held.

## Where to look

- [the probe](../record/probes/flight-1-shakedown.md) — THE PAYLOAD:
  the flight's own log, frozen as the view from one seat.
- [the spec](../record/specs/flight-1-probe.md) — the contract and
  the simulation law.
- [PR #268](https://github.com/wsher0901/roam/pull/268) — the
  flight's public window; the canary, the ack, and the completion
  comment are all on it.
- [liftoff](../skills/liftoff.md) · [land](../skills/land.md) ·
  [parallel-lanes](../skills/parallel-lanes.md) — the machinery
  under test.
