---
type: spec
id: flight-1-probe
title: Flight 1 — the shakedown probe
status: draft
stage: workshop
branch: docs/flight-1-probe
opened: 2026-08-03
---

# flight-1-probe — the shakedown's simulated cargo

**Links:** [liftoff](../../skills/liftoff.md) (the ritual under
test) · [land](../../skills/land.md) (the ending under test) ·
[parallel-lanes](../../skills/parallel-lanes.md) (the lane law
under test) · source: the founder's approved test program, Web ops
chat 2026-08-03.

## Goal

This bench is CARGO, not an end in itself. Flight 1 of the test
program flies the whole flight machinery — liftoff, bench-first
birth, route-1 spawn, the canary handshake, the blind cockpit fire,
the cockpit's self-seat, a non-author review, the founder's word,
the weld, and an unprompted AUTO-LAND — on a payload chosen to be
small, single-file and harmless, so that ANY FAILURE OBSERVED IS A
FAILURE OF THE MACHINERY AND NOT OF THE WORK.

The payload is the flight's own log, written from inside it. A
flight that reports on itself is the only way to learn what the
machinery looks like from the lane's seat: what a cloud worker can
actually observe about its own birth, whether the ack token arrives
in the form the contract fixes, and which links of the chain are
visible from inside versus only from the ground.

## The lane's entire task

Author `docs/record/probes/flight-1-shakedown.md` with these
sections:

- **BORN** — UTC time, branch, and every fact of its own birth the
  session can observe from its environment.
- **THE CANARY** — its ack token, quoted verbatim as posted.
- **THE DIARY** — one dated line at each of the memory contract's
  [four moments](../../skills/parallel-lanes.md#the-four-memory-moments-the-lanes-diary-rule),
  as they actually happen.
- **WHAT A GREEN FLIGHT PROVES** — the checklist filled from
  observation, one line each: bench pre-birthed · spawn route 1 ·
  canary inside the window · work pushed · ready flip · non-author
  review · the founder's word · the weld · auto-land unprompted.

THE RELIABILITY INSTINCT APPLIES TO US TOO. Anything the lane
cannot observe is written **"not observable from this seat"** —
never guessed, never inferred from what the docs say ought to have
happened. A probe that reports what it assumes is worse than no
probe, because it launders assumption into record. Several
checklist lines WILL be unobservable from the lane's seat (the
founder's word and the weld happen after the lane's last push);
writing them as unobservable is the CORRECT result, not a failure.

## THE SIMULATION LAW for this flight

Stated here because the flight is real and only the cargo is
simulated:

- **The lane touches ONLY** `docs/record/probes/flight-1-shakedown.md`
  and its own bench memory `docs/memory/flight-1-probe.md`. Nothing
  else, on any branch, for any reason.
- **The cockpit and every ritual touch exactly what the skills
  already give them** — the board, this memory, and the ledger at
  the weld. The flight's bookkeeping is REAL because the flight is
  real work.
- **NO living doc, NO skill, NO law, NO master fence, NO product
  file** is touched by anything in this flight.
- The rituals are NOT special-cased for the test. Any friction the
  ritual produces when run exactly as written is a FINDING, and
  findings are recorded rather than smoothed over.

## Out of scope

- Any change to the machinery being tested. Flight 1 OBSERVES; the
  repairs it justifies are separate benches, triaged normally
  through [IDEAS](../../IDEAS.md).
- Any second lane, any sibling work, any use of the flight to carry
  unrelated cargo.

## Plan

1. The lane wakes on the pre-birthed bench and posts its canary —
   one trivial commit, memory Status → `claimed by <vehicle> —
   <date>`, pushed.
2. It waits for the baton-holder's ack, testing with the ANCHORED
   match ([§Canary](../../skills/parallel-lanes.md#canary-handshake-both-sides)),
   and self-terminates cleanly if the window passes.
3. On the ack it authors the probe file, recording BORN and THE
   CANARY from what it can actually observe.
4. It keeps THE DIARY at the four moments as they happen, pushing
   every commit.
5. It fills WHAT A GREEN FLIGHT PROVES from observation, marking
   the unobservable lines as such.
6. Completion: final memory rewrite, ready-flip, plain summary. The
   lane never merges.

## Done means

- [ ] `docs/record/probes/flight-1-shakedown.md` exists with all
      four sections present.
- [ ] BORN records UTC time and branch, and every birth fact is one
      the session actually observed — not one the docs predict.
- [ ] THE CANARY quotes the ack token VERBATIM as posted, middots
      and all, so the form can be compared against
      [§Canary](../../skills/parallel-lanes.md#canary-handshake-both-sides)'s
      contract.
- [ ] THE DIARY carries one dated line per memory moment, written
      AT that moment rather than reconstructed at the end.
- [ ] WHAT A GREEN FLIGHT PROVES has all nine lines, each either
      an observation or the exact words "not observable from this
      seat". No line is guessed.
- [ ] THE SIMULATION LAW held: `git diff` for this branch touches
      the probe file and this bench's memory, and nothing else.
- [ ] The lane's normal verification loop ran and Actions is green
      on the pushed head.
- [ ] The PR is flipped ready with a plain summary; the lane has
      NOT merged it.
