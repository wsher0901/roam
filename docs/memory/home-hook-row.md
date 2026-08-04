---
type: memory
id: home-hook-row
updated: 2026-08-04 15:37 UTC · canary claim · cloud
---
# home-hook-row — the hook that enforces the close-lock gets a row

## Status
claimed by cloud — 2026-08-04 15:37 UTC

Born bench-first at the desk, 2026-08-04, as LANE C of FLIGHT 2.
Its first spawn produced no session and it was parked; the founder
ruled `re-spawn C` at 15:34 UTC and the cockpit is cycling the
`lane:cloud` label now. The bench is intact and unstarted — nothing
was lost, and this re-spawn needs no second birth.

TO THE WORKER THAT CLAIMS THIS BENCH: you are the SECOND dispatch,
not a duplicate — the first never existed, so nothing here is yours
to displace. Claim by canary and WAIT for the ack, and read the ack
the way this flight's lane A is right now arguing you must: as a
COMMIT ON ORIGIN on this branch, fetched and read back, never as a
message arriving in your session. YOUR CARGO CARRIES THE FLIGHT.
Both siblings finished before the cockpit existed, so the freeze
test has no mid-work lane left but you; the founder will say
`ground the fleet` while you are working, and the fence that lands
on this branch is the thing under test. Obey it when it comes.

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
None blocking. THE FIRST SPAWN NEVER PRODUCED A SESSION and the
cause is still unknown from any seat with a git clone — the
routine's run history is a UI surface. If this second dispatch also
produces no session, that is the finding: route 1 is not reliable
for a bench that has already been labeled once, and the fault is in
the dispatch rather than the cargo.

## Left / idle
Everything of the mandate — the bench has not been claimed yet.
Parked and now un-parked, never abandoned: the branch, spec, memory
and ready PR all stood through the wait, which is why the re-spawn
costs one label cycle and no second birth.

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

2026-08-04 15:34 UTC · respawn · cloud — THE FOUNDER RULED
`re-spawn C`, and the cockpit executes. The idempotency guard
permits the label cycle: the guard blocks re-labeling a bench whose
memory Status is a CLAIM, and this one's never was — no lane ever
held it, so there is nothing to displace and no worker to kill.
Status flipped to `bench ready` first, because a waking worker
reads the Status before it reads anything else and `cloud spawn
failed` licenses nothing.

The ruling also changed what this lane is FOR. It was the smallest
of the three, chosen so that a stumble here would indict the
machinery rather than the cargo. It is now the only lane that can
still be mid-work when the founder says `ground the fleet` — lanes
A and B were complete and awaiting merge by 15:05, before the
cockpit was even fired at 15:11, so the mid-work fencing property
has exactly one subject left. The smallest bench inherited the
experiment.

Its second duty is worth more than the row. The miss exists because
NOTHING CAN SEE AN ABSENCE — the links gate proves a pointer
resolves, never that a mention became a pointer, and never that a
file that should have a row has one. So the spec has this lane audit
the whole table once while it is open, and report what it finds
rather than fix it. One row in, the rest to triage.

2026-08-04 15:37 UTC · canary claim · cloud — THE SECOND DISPATCH
WOKE, and it woke on a bench whose Status read `bench ready`: not
terminal, not a claim held by anyone else, so there was nothing here
to displace and the claim is clean. Route 1 works on a re-labeled
bench after all — the first spawn's silence was not a property of
having been labeled once, and the finding recorded above under
Pending issues is now answered in the negative.

Claiming, then waiting. The ack this lane waits for is a COMMIT ON
THIS BRANCH AT ORIGIN, fetched and read back with the anchored match
— the Status line's first characters, never a substring, never the
bare word, because this paragraph itself would satisfy a sloppier
test.

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
