---
type: memory
id: flight-1-probe
updated: 2026-08-03 21:42 UTC · probe authored · cloud
---
# flight-1-probe — the shakedown's simulated cargo

## Status

airborne · https://claude.ai/code/session_01NcE9UvzhybxinCqre5LvE2 · 2026-08-03

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

none yet. The lane speaks through its PR; questions go there as
`BLOCKED:` comments, and the founder's reply resumes it in-thread.

## Left / idle

nothing parked.

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

The lane's own duties are the ordinary ones and are not relaxed for
a test flight — the canary claim first, then WAIT for the ack
tested by the ANCHORED match, the diary at
[the four moments](../skills/parallel-lanes.md#the-four-memory-moments-the-lanes-diary-rule),
every commit pushed, and no merge ever.

## Where to look

- [the spec](../record/specs/flight-1-probe.md) — the contract and
  the simulation law.
- [liftoff](../skills/liftoff.md) · [land](../skills/land.md) ·
  [parallel-lanes](../skills/parallel-lanes.md) — the machinery
  under test.
