---
type: memory
id: home-hook-row
updated: 2026-08-04 15:08 UTC · cloud spawn failed · work PC
---
# home-hook-row — the hook that enforces the close-lock gets a row

## Status
cloud spawn failed — 2026-08-04 · the label event registered but no
session was ever born → parked

Born bench-first at the desk, 2026-08-04, as LANE C of FLIGHT 2.
Spawned by route 1 alongside its two siblings and never claimed. The
bench itself is intact and unstarted — nothing was lost, and a
re-spawn needs no second birth.

## What this task is
[HOME](../HOME.md)'s files table documents two of the three hooks.
`.claude/hooks/user-prompt-submit.mjs` — the one that enforces the
close-lock, making a closed session read-only conversational rather
than dead — has no row. This bench writes it.

Scope edges and the full mandate:
[the spec](../record/specs/home-hook-row.md). The two files this
lane may touch are named there and are not negotiable — flight 2
flies three lanes at once, and disjointness is what keeps them from
colliding.

## Pending issues
THE SPAWN NEVER PRODUCED A SESSION, and this bench is parked until
the founder rules. The re-spawn is one label cycle on
[#280](https://github.com/wsher0901/roam/pull/280) — the
idempotency guard permits it, because this memory's Status is not a
claim: no lane ever held this bench, so nothing can be displaced.
The cockpit advises; the founder's word decides.

## Left / idle
Everything — the bench has not been claimed. Parked, not abandoned:
the branch, spec, memory and ready PR all stand, so a re-spawn
resumes from here with no second birth.

## The story
2026-08-04 14:30 UTC · bench birth · work PC — the founder set
flight 2's scope: three cloud lanes carrying flight 1's own repairs
back into the machinery, so that the fleet path gets flown while
real cargo moves. This bench is lane C.

It is the smallest of the three on purpose. A fleet test wants one
lane whose cargo cannot itself go wrong, so that if THAT lane
stumbles the fault is unambiguously the machinery. Lane C is that
lane: one table row, read from the file it describes.

2026-08-04 15:08 UTC · cloud spawn failed · work PC — THE SPAWN
PRODUCED NO SESSION. All three lanes were flipped ready and labeled
within four seconds of each other (GitHub's timeline records
`lane:cloud` on this PR at 14:54:43Z, its siblings at 14:54:39Z and
between). Lanes A and B both canaried inside three minutes. This
bench was never touched: no commit, no comment, no session.

What is known and what is not, kept apart. KNOWN: the label event
registered on GitHub's side, and `npm run count:runs` counted it —
which is exactly the phantom-event case the cap script's own record
warns about, a label counted as a run that spawned nothing. NOT
KNOWN from this seat: whether the routine received the webhook,
whether it started a session that died before its first push, or
whether the run was rejected. None of that is observable from the
ground; the routine's run history would show it, and that is a UI
surface.

The bench is parked rather than failed-and-closed because nothing
about the CARGO went wrong — the failure is entirely in the
dispatch.

Its second duty is worth more than the row. The miss exists because
NOTHING CAN SEE AN ABSENCE — the links gate proves a pointer
resolves, never that a mention became a pointer, and never that a
file that should have a row has one. So the spec has this lane audit
the whole table once while it is open, and report what it finds
rather than fix it. One row in, the rest to triage.

## Where to look
- [the spec](../record/specs/home-hook-row.md) — the mandate, the
  fleet law, and Done-means.
- [§The files](../HOME.md#the-files--what-each-one-is-for) — the
  table under edit; the two sibling hook rows show the shape.
- `.claude/hooks/user-prompt-submit.mjs` — read it before describing
  it; the lane may read what it may not write.
- [IDEAS](../IDEAS.md) — the line this repair closes, closed at the
  ground after the weld and never by this lane; the
  destination-blind-links-gate line is its neighbour and stays open.

## Status vocabulary
See [TEMPLATE](TEMPLATE.md).
