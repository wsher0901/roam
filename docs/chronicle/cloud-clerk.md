---
type: chronicle-story
shelf: I — the away surface
status: living
updated: 2026-08-06 · written · cloud lane
---

# The cloud clerk — born and retired

> **CURRENT ENDING (2026-08-06).** Retired. The founder deleted the
> clerk routine on 2026-07-22, ahead of the staged trigger that was
> supposed to retire it; the repo caught up a day later at
> [#197](https://github.com/wsher0901/roam/pull/197), and the last
> `CLERK_` prose left `.env.example` at
> [#200](https://github.com/wsher0901/roam/pull/200). What survives
> is a TOMBSTONED RECORD and nothing live: every instruction that
> reached for the clerk is gone, every verified finding it produced
> is kept. **Three attestations were owed at its closeout and were
> never obtained** — they are recorded as honest gaps rather than
> filled in, and the derivation confirms the census cell on every
> point. The clerk's real legacy is not a mechanism but two rules it
> taught by dying: *a rung that cannot fire is worse than no rung*,
> and *instructions are traps, records are evidence.*

## What it is

A manually-born, cap-free cloud session with a deliberately narrow
charter: it read origin, answered the founder's questions from a
phone, and posted PR comments ONLY on instruction. It never wrote
files, never merged, and never held the baton.

It was the machine-off leaf of the away architecture for five days —
the thing the founder could talk to when the desk was dark.

## What raised it

The founder's stated requirement of 2026-07-16/17: **one command
surface across all postures.** Desk meant Agent View; away with the
machine on meant Remote Control; away with the machine OFF had
nothing at all. The clerk was built to fill that hole, with the
GitHub app demoted to a doorbell.

## What changed, in order

- **[D-043](../record/DECISIONS.md#d-043--cloud-ignition-and-away-command-redesign)
  — the clerk is staged**, as the machine-off surface, with a narrow
  read-and-relay charter and an explicit condition on it: the first
  post-adoption liftoff tests **clerk longevity on a trivial charter
  before anything depends on it.**
- **[#156](https://github.com/wsher0901/roam/pull/156) — born, and
  flown the same day.** Its maiden was founder-run on 2026-07-17 and
  came back all green. The results are worth keeping because they
  are what the retirement later had to preserve: C1 fresh derivation
  verified externally · C2 a comment posted live, verbatim · **C3
  refused an out-of-charter request, cited the charter, and pointed
  at the cockpit** · C4 "fine on the phone" · **C5 about 4.5 hours
  idle, environment reclaimed, auto-revived on open, answer fresh
  and correct — the known resume-hang did not occur** · C6 zero app
  pushes observed, which seeded the next bench.
- **[#163](https://github.com/wsher0901/roam/pull/163) — charter v2,
  the standing watch.** Duty 6: lane events — `BLOCKED:` comments,
  completions, CI red on main — reach the founder's phone as
  turn-end announcements. The watch MECHANIC was left explicitly
  unsolved, recorded in the spec as an open question for the
  flight's live prototyping rather than guessed at.
- **[#164](https://github.com/wsher0901/roam/pull/164) — the
  ignition.** A second routine, API-triggered, with `fire-clerk.mjs`
  behind `npm run fire:clerk`. It branched deliberately from its
  sibling's charter commit rather than from main, **so the routine's
  saved-prompt box would copy a single-homed master** — the
  box-master discipline, practised before it had a name. The API-cap
  trade was accepted openly: one run per fire, invisible to
  `count:runs`.
- **[D-046](../record/DECISIONS.md#d-046--flight-cockpit-the-control-tower-online)
  clause 5 — retirement staged.** The cockpit supersedes it. The
  reasoning is the one the clerk itself had made visible: **two
  overlapping cloud surfaces re-create the haze** the cockpit exists
  to remove. Keeping the clerk beside it was considered and
  rejected; its verified record was to be preserved and its duties
  folded into the cockpit charter.
- **2026-07-22 — the founder deletes the routine, ahead of the
  stage.** The staged clause said retirement executes at the cockpit
  maiden drill's closeout. The founder got there first. **The repo
  did not notice**, and for a day it kept pointing at a vehicle that
  could no longer fire.
- **[#197](https://github.com/wsher0901/roam/pull/197) — the repo
  catches up, on one governing distinction.** *An instruction tells
  a future seat to DO something, and a false one is a trap; a record
  says what WAS proved, and deleting it destroys evidence.*
  Instructions went. Records got a tombstone and stayed. No new
  machinery was added.
- **[#200](https://github.com/wsher0901/roam/pull/200) — the last
  crumbs.** `.env.example` still carried COMMENT PROSE naming the
  clerk's variables — the assignment lines had already gone at #197,
  and the founder's mandate described them as still present. The
  lane took the founder's INTENT rather than the literal wording,
  and said so.

## Where it stands

**Dead, and correctly dead.** No rung reaches for it; no
`fire:clerk` exists; the ladder now bottoms out at the phone
bootstrap, with nothing beneath.

**What the clerk left behind is bigger than what it did.** Two rules
in the workshop trace directly to its death:

*A rung that cannot fire is worse than no rung*, because a fallback
is reached only when everything above it has already failed — the
moment you can least afford a dead end.
[Liftoff §4](../skills/liftoff.md#4--spawn) states it in exactly
those terms, and it later generalized to components at
[D-051](../record/DECISIONS.md#d-051--self-seat-birth): *a fallback
that breaks silently is worse than none.*

*Instructions are traps, records are evidence* — the distinction
that decided every single edit of the retirement bench, and one the
workshop reached for again on the docs currency audit, where the
same principle was found to have **no home in
[LAWS](../LAWS.md) or any skill.**

**THREE ATTESTS WERE OWED AND NEVER OBTAINED**, and they stay
written as gaps: A4's routines-page glance, A5 (asked — the founder
did not recall), and the clerk's own self-report covering N1, N4,
N5, N6. The clerk's standing-watch duty was therefore never GRADED —
it shipped, the routine died five days later, and the checklist that
would have scored it has no way left to run. Recording that honestly
is the point;
[the shakedown audit](shakedown-flight.md) is where the same
discipline is applied at scale.

**Two founder-side leftovers were recorded rather than performed:**
removing the dead `CLERK_` pair from each seat's `.env.local` — a
dead token is inert, cannot fire anything, and is not a leak, since
those files are gitignored and never left the machines.

## Sources

Down-links only.

- [cloud-clerk](../record/history/workshop/mechanism/cloud-clerk.md)
  — the birth bench and the maiden results C1–C7 verbatim.
- [clerk-notify](../record/history/workshop/mechanism/clerk-notify.md)
  · charter v2 and the standing watch ·
  [clerk-autospawn](../record/history/workshop/mechanism/clerk-autospawn.md)
  · the API fire and its accepted cap trade.
- [clerk-retirement](../record/history/workshop/mechanism/clerk-retirement.md)
  — the bench that removed every live instruction and kept every
  record.
- [env-clerk-scrub](../record/history/workshop/mechanism/env-clerk-scrub.md)
  — the last `CLERK_` prose, and the mandate-versus-intent call.
- [D-043](../record/DECISIONS.md#d-043--cloud-ignition-and-away-command-redesign)
  · staged ·
  [D-046](../record/DECISIONS.md#d-046--flight-cockpit-the-control-tower-online)
  clause 5 · superseded ·
  [D-048](../record/DECISIONS.md#d-048--cockpit-resilience) · the
  last function taken over.
- [liftoff §4](../skills/liftoff.md#4--spawn) — where the
  ladder-bottom rule is written, with the clerk named as the rung
  that is gone.
