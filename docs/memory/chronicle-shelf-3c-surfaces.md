---
type: memory
id: chronicle-shelf-3c-surfaces
updated: 2026-08-06 14:57 UTC · licensed after a late ack · cloud lane
---

# chronicle-shelf-3c-surfaces — Shelf III slice C — surfaces & manuals

## Status

airborne · cloud · 2026-08-06

**YOU ARE LICENSED. WORK.** Acked by the work PC control tower at
14:55 UTC. Your canary landed inside a minute of the label, and six
siblings are flying beside you.

⚠ **THE ONE RULE THAT KEEPS THIS FLEET LAWFUL, repeated here
because it is the only thing seven concurrent lanes can get wrong:
DO NOT WRITE `docs/chronicle/INDEX.md`. Not one cell.** The lane law
forbids siblings sharing a file so that merges cannot collide by
construction, and the INDEX is the only file every slice would
otherwise touch. The baton-holder marks your rows written at the
weld. You write story files and this memory, nothing else.

**DERIVE YOUR ENDINGS; DO NOT TRUST THE CENSUS CELLS.** Several have
been wrong. One stood stale for a week and misled two later readers,
each of whom stopped at a dated line without asking whether anything
since had closed it — a dated attestation is evidence of its date
and of nothing later. If your derivation contradicts the cell, the
derivation wins and your story says so.

## What this task is

The 7 unwritten stories of **Shelf III slice C — surfaces & manuals** — the files a reader actually opens. One of seven
benches flying as a single fleet under
[D-078](../record/DECISIONS.md#d-078--the-55-re-ruled-on-the-cold-number).

The contract, the roster, and the one rule that makes the fleet
lawful — **do not write the INDEX** —
[the spec](../record/specs/chronicle-shelf-3c-surfaces.md).

## Pending issues

**THE ACK ARRIVED PAST ITS OWN WINDOW, AND A COMPLIANT LANE WOULD
HAVE BEEN DEAD.** Canary 14:42, ack commit 14:55 — about 13
minutes, where
[§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)
fixes the cloud window at ~10 and instructs the lane to
self-terminate when it closes. This lane did exactly that: at
14:53 it wrote a stand-down memory and tried to push. THE PUSH WAS
REJECTED, which is the wake-lock's trigger — pull, re-read Status,
obey it — and the re-read found the ack. **The wake-lock saved
this flight, for the second recorded time**; the first was
2026-07-22, [#191](https://github.com/wsher0901/roam/pull/191).

Worth a ruling the lane cannot make: the window is stated per-lane
but spent per-FLEET. One baton-holder acking seven benches serially
has to do it inside a budget sized for one, so the seven-lane fleet
is the first configuration where the constant is plausibly too
tight — and this is a MEASUREMENT of that, not a complaint about
this seat. Filed here rather than in
[IDEAS](../IDEAS.md), which a lane never writes.

## Left / idle

Nothing idle — plan steps 1–3 are in progress under a licence
granted 13 minutes late.

## The story

2026-08-06 14:40 UTC · bench birth · work PC — born bench-first as
one lane of a seven-lane fleet, on the founder's "one fleet — fire
all seven".

**THE FLEET IS LAWFUL ONLY BECAUSE OF ONE CLAUSE.** Every slice
bench before this one wrote `docs/chronicle/INDEX.md`, and the lane
law forbids siblings sharing a file so that merges cannot collide by
construction. Seven concurrent lanes would have been UNLAWFUL — and
that was found by checking the planned benches for shared files
rather than by discovering it at the first collision.
[D-078](../record/DECISIONS.md#d-078--the-55-re-ruled-on-the-cold-number)
clause 3 moved that write to the weld, where
[ship §7](../skills/ship.md#7--on-approval--the-atomic-weld)'s
synthesis step already performs it.

**WHAT THIS BENCH INHERITS that the pilot did not have:** a settled
format, an event variant proven by slice D, and a measured figure of
roughly two minutes a story. What it inherits as a WARNING is the
census itself — several cells have been wrong, and one stood stale
for a week and misled two later readers who each stopped at it
without asking whether anything since had closed it. So this bench
derives its endings and lets the derivation win.

2026-08-06 14:42–14:55 UTC · claim, near-death, licence · cloud
lane — canary up at 14:42; no ack; stand-down written and pushed at
14:53; the push bounced; the wake-lock's re-read found the ack and
the flight resumed. The wait was spent on read-only gathering, so
nothing was lost to the delay.

**THE REDELIVERED WEBHOOK WAS NOT MISTAKEN FOR THE ACK.** The
trigger re-fired mid-wait, correctly naming this PR and head SHA.
§Canary's licence rule — lived on
[#268](https://github.com/wsher0901/roam/pull/268), where a message
carrying a perfect token nearly started an unlicensed lane — says
the licence is a COMMIT ON ORIGIN and nothing else, so the
redelivery was read as a trigger echo and origin was re-read
instead. The anchored test earned its keep too: this file's own
prose contained the word "airborne" throughout the wait, so a
substring search would have self-licensed the lane at 14:42.

**SIX OF SEVEN CENSUS CELLS WERE STALE**, found by deriving before
writing rather than at the first contradiction — WEB-INSTRUCTIONS
(v5→v6), IDEAS (a rule since amended), ATLAS (six diagrams→eight
figures), DASHBOARD, HOME and SETUP all moved after the
2026-07-27/28 census. Only recall's cell still reads true. Each
story states its own contradiction in words.

## Ideas surfaced

- **The board carries a duplicated block.**
  [DASHBOARD](../DASHBOARD.md) on `origin/main` renders
  `## The baton`, `## In flight` and `## Working on` TWICE each —
  the second baton copy carrying the ⚠️ paid-late paragraph. This
  branch is byte-identical to main there, so it is pre-existing
  and not this fleet's doing. Left untouched: a lane never writes
  the board.

## Where to look

- [the spec](../record/specs/chronicle-shelf-3c-surfaces.md) — roster, format,
  and the INDEX prohibition.
- [the format](../record/history/workshop/definition/chronicle-pilot.md)
  — the pilot that settled it, and its honest caveats.
- [the event bend](../record/history/workshop/definition/chronicle-shelf-1.md)
  — slice D's variant for `event` items, and the cold calibration.
- [D-059](../record/DECISIONS.md#d-059--the-chronicle-layer) — the
  layer's six rulings.
- [the census](../chronicle/INDEX.md) — READ-ONLY for this bench.
