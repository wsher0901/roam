---
type: memory
id: flight-seams
updated: 2026-07-31 15:57 · ship · work PC
---

# flight-seams — one case table, and the flight path repaired

## Status

complete, awaiting merge — 2026-07-31, work PC.
[D-070](../record/DECISIONS.md#d-070--baton-renderings-single-homed)
is minted, the seven BATON renderings live in one case table at
[handoff §4](../skills/handoff.md#4--repaint-dashboard-the-board-spec--single-source),
the three writers cite their cases, and both flight-path
contradictions are gone. Full CI mirror green.

## What this task is

[D-067](../record/DECISIONS.md#d-067--the-report-skeleton-and-the-board-diet)
said each writer paints its own BATON case and called the wording
law — then left the wordings in four files. Prose agreement has no
linter. Contract:
[the spec](../record/specs/flight-seams.md).

## Pending issues

- Tower-authored, so
  [no-solo-approval](../LAWS.md#workflow-non-negotiable) requires
  an external Web review before the founder's word at THE GATE. DO
  NOT MERGE.

## Left / idle

nothing parked.

## The story

Born 2026-07-31 at the work PC, from an audit the founder ran
across the flight path.

### Both bugs were invisible to every gate, and both bite only in the air

**LIFTOFF PAINTED A URL IT CANNOT HAVE.** Its BATON line read
`COCKPIT — live since [time] (liftoff) · [url]` — while its own IN
FLIGHT row, three paragraphs earlier in the same section, read
`self-seat pending`. The two were written at different times and
never read together:
[D-051](../record/DECISIONS.md#d-051--self-seat-birth) made the
fire BLIND, updated the row, and left the baton line quoting a
value that no longer exists at fire time. THE COST WOULD HAVE
LANDED ON THE NEXT COCKPIT BIRTH: the charter's rule 1 sends an
arriving cockpit to THE BATON to learn whether a live seat already
exists, and `self-seat pending` is the phrase that tells it to
seat itself. A liftoff writing `live since … · <url>` would have
told a fresh cockpit that someone else was already flying.

**MODE P PAINTED TWO DIFFERENT LINES FOR ONE LANDING.** land §(d)
wrote `no live cockpit — grounded for local pickup [date]`; §(e),
twenty lines later, wrote `No live seat — LANDED [time] via
MANUAL-LAND · awaiting next pickup`. Pickup's fleet-resume
trigger matched the FIRST string. So a board painted by §(e)
would have offered NO FLEET RESUME at the next sit-down — the
lanes still fenced, still findable on origin, and simply never
surfaced. Nothing lost, everything stalled, and no gate anywhere
would have gone red.

The workshop has not flown since either was written, which is the
only reason neither has cost anything yet.

### The fix is structural, not a correction

Correcting the two wordings in place would have left the
four-copy structure that produced them, and the next wording
change re-opens the same bug. THE CASE TABLE makes drift
impossible by construction: seven rows, exact wording, each
naming its writer, and every writer cites its row instead of
restating it. There is now one place to change a rendering.

PICKUP'S TRIGGER GOT THE SAME TREATMENT ONE LEVEL UP. It used to
string-match a sentence, which is what broke; it now keys on TWO
FACTS TOGETHER — a fleet-at-ground table standing under IN FLIGHT,
plus the short marker `grounded for local pickup` — so any future
rewording of the sentence around the marker leaves the trigger
working.

### One verification that came back "no edit needed"

The mandate asked me to verify that pickup's and ship's stubs
mirror their procedures after both gained a baton-holder-only
header. PICKUP'S DOES — its stub already names "the baton-holder's
session (control tower or cockpit)" and "delegated lanes skip
it". SHIP'S DOES NOT CARRY AN AUDIENCE, and that is correct rather
than drift: a stub's description says WHEN to fire, ship's says
"the moment a task's payload is complete… never declare done
without it", and audience is a different axis. Nothing in the two
contradicts. So `.claude/` was not touched — verify before
classify, and the classification here was "no drift".

### The smaller seams

- **The daily cap was hard-coded twice** — pickup §5 and liftoff
  §2 both wrote the number. It is a VALUE, and values live in
  [SETUP](../SETUP.md#once-and-done--cloud-accounts) (verified to
  carry it before the two copies died). The `count:runs`
  mechanics and the ask-on-script-failure rule are untouched.
- **The desk takeover's two board writes had no stated order** —
  SUPERSEDED at adopt, the takeover claim at the final repaint.
  The sentence now says so, and says why the desk need not wait
  for the old cockpit's retirement: the wake-rule keys on the
  seat-stamp not being the reader's own, so either line retires
  it correctly.
- **ship's tail did not say what it carries forward** — one
  clause now names THE BATON and WEB + DESIGN.
- **recall had no chronicle door** — the Why/provenance and
  Past-work rows now point at
  [chronicle/INDEX](../chronicle/INDEX.md) for the item's LIVING
  story, and Why/provenance names the short-heading grep plus the
  `In full:` line per
  [D-068](../record/DECISIONS.md#d-068--the-short-anchor-law).

### The sweep

One heading was renamed — pickup's "The baton line pickup paints
— wording is law" lost its tail — and the destination-grep
returned ZERO citations of it anywhere in the tree, so nothing
needed repointing. NO FROZEN FILE WAS TOUCHED. The two retired
wordings re-run to zero across living files; their only survivors
are the case table's own rows and one line in
[DECISIONS](../record/DECISIONS.md), which is the frozen record of
what [D-054](../record/DECISIONS.md#d-054--the-landing-skill)
decided at the time and is correct as written. NO HIT LANDED
INSIDE A MASTER FENCE — all three were checked directly.

## Where to look

- [the spec](../record/specs/flight-seams.md) — the contract.
- [handoff §4](../skills/handoff.md#4--repaint-dashboard-the-board-spec--single-source)
  — the case table, the single home.
- [D-070](../record/DECISIONS.md#d-070--baton-renderings-single-homed).
- the Web ops chat, 2026-07-31 — where the audit was approved.
