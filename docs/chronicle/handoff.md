---
type: chronicle-story
shelf: I — the away surface
status: living
updated: 2026-08-06 · written · cloud lane
---

# Handoff — the ground-seat leaving ritual

> **CURRENT ENDING (2026-08-06).** The ritual that ends a sitting at
> a desk, in two modes: FULL when the founder is leaving, QUIET as
> [ship](../skills/ship.md)'s tail. Its live order is **secure →
> shut the team down → park the local lanes → take the inline paste
> → rewrite the memories → repaint the board → ship the note →
> close**, and the close-lock at the end no longer kills the
> session — it leaves it READ-ONLY CONVERSATIONAL, answering from
> origin and refusing every write. **The census cell for this item
> states that order wrongly** — it reads "team shutdown → secure →
> park", while
> [the skill](../skills/handoff.md) puts securing the work at §1,
> ahead of the team step at §1.2. The derivation wins: §1.2's own
> text says it runs "BEFORE anything is parked", which fixes it
> against PARKING, not against securing. Everything else in the cell
> holds. The ritual's deepest property is that it takes ZERO founder
> input after invocation: the leaving message itself is the input.

## What it is

The road out of a sitting at a physical desk. Its premise is that
leaving should cost the founder exactly one sentence, and that
everything which must happen after that sentence is the ritual's
job, not the founder's memory.

Two modes, and the mode is routed by the caller rather than chosen:

- **FULL** — a leaving phrase, an explicit `/handoff`, or
  [liftoff §1](../skills/liftoff.md#1--full-handoff-first). FULL
  means OPERATIONS HALT ON THIS MACHINE. It runs every step and it
  closes the session.
- **QUIET** — [ship](../skills/ship.md)'s tail. It skips steps
  1.2–3, never closes the session, and returns to the sitting
  recommending what is next.

The distinction matters because the two answer different questions.
FULL answers "is everything recorded and can I power off?" QUIET
answers "what now?" — mid-sitting, with lanes still flying.

## What raised it

Not a defect — a founder who works across TWO COMPUTERS AND A
CLOUD, where the machine in front of them is never the only place
the work lives. Leaving a desk with work only on that desk is the
failure the whole workshop is arranged against, and handoff is the
step that makes it structurally impossible: nothing may exist only
on this machine past §1.

## What changed, in order

- **[D-002](../record/DECISIONS.md#d-002--handoff-note-merge-policy)
  — the note gets a merge policy.** The earliest ancestor of what
  is now the micro-PR: the handoff note is bookkeeping, not work,
  so it merges immediately rather than waiting at the gate. Recut
  later by
  [D-023](../record/DECISIONS.md#d-023--universal-draft-pr-at-birth-and-micro-pr-carve-out)
  into the general carve-out — DASHBOARD and/or IDEAS, written by a
  ritual, squash-merged without asking. It remains the ONLY standing
  exception to the merge gate.
- **[D-032](../record/DECISIONS.md#d-032--fleet-continuity) — the
  park step, and the one lawful trespass.** The founder's leaving
  scenario is that the machine powers off and local agents die with
  it; without a park, a lane's since-last-push work depended on
  luck. So FULL parks every live LOCAL lane — rescue-save only if
  the tree holds unsaved work, then ONE stamped Status line. That
  line is the single lawful exception to a control tower never
  touching a lane's tree or diary. The decision also settled that
  handoff NEVER ASKS: the founder said handoff means halt. **Cloud
  lanes are machine-independent and are never parked** — they keep
  flying, which is exactly why the cloud branch of the chooser
  exists.
- **[D-035](../record/DECISIONS.md#d-035--state-surfaces-v2) —
  §4 becomes the single board spec.** Every other writer of
  [the board](../DASHBOARD.md) stops carrying its own layout and
  cites this one. A board painted by three rituals in three shapes
  is a board no one can read at a glance.
- **[D-040](../record/DECISIONS.md#d-040--handoff-input-inversion)
  — the question dies.** The ritual used to ask a never-skipped
  question for the founder's Web/Design paste. It was a redundant
  round-trip: the founder is ALREADY typing a leaving message, so
  that message carries the paste and the ritual reads it. Any text
  before the trigger is the paste, verbatim; a bare trigger records
  "none". **Zero founder input after invocation** — the property
  that makes a leaving phrase a complete command.
- **[D-050](../record/DECISIONS.md#d-050--session-lifecycle-closed-is-not-dead)
  — closed stops meaning dead.** The close-lock's wall softens to
  injected read-only doctrine. A session addressed after its close
  still answers — by fresh derivation from origin, always naming the
  current baton-holder — and refuses every write, command act and
  ritual. The RECORD of the close is unchanged; only the wall is
  soft.
- **[D-056](../record/DECISIONS.md#d-056--team-aware-leaving-rituals)
  — §1.2, and an inversion inside it.** A live agent team does not
  survive the sitting, because `/resume` and `/rewind` do not
  restore in-process teammates. The obvious rule would be "shut the
  team down". The decision is the ORDER: **capture first, then
  kill** — the findings go into the record before a single shutdown
  request, because teammates are cheap and respawn cheaply while
  what they FOUND lives in transcripts that vanish with the session.
  Two honesty clauses ride with it: shutdown is not instant, so the
  step waits rather than assumes; and a teammate that refuses or
  hangs is NAMED in the close report rather than smoothed into a
  clean exit.
- **[D-062](../record/DECISIONS.md#d-062--the-wake-rule-generalized)
  — handoff becomes the exit for a superseded desk.** A ground
  control tower that finds the board's seat-stamp no longer its own
  leaves by this ritual's capture-then-close, team findings first —
  and writes NO board, because the baton has already moved.
- **[D-067](../record/DECISIONS.md#d-067--the-report-skeleton-and-the-board-diet)
  — the close report gets a fixed shape.** Five slots in order:
  VERDICT · YOUR ACT · OFF-ORIGIN (omitted when empty, so its
  presence is a signal) · one-breath context · a pointer to the
  record. And **PUSH FIRST, REPORT SECOND** — beyond the founder's
  own acts and off-origin content, a report may contain nothing not
  already on origin.
- **[D-070](../record/DECISIONS.md#d-070--baton-renderings-single-homed)
  — §4 absorbs the baton case table.** Every board BATON rendering
  now lives in one table here, each case naming its writer;
  [liftoff](../skills/liftoff.md), [land](../skills/land.md) and
  [pickup](../skills/pickup.md) cite their case instead of
  re-mandating wording. Prose agreement has no linter, which is
  precisely why four copies had already drifted.

## Where it stands

**Live, and the most-exercised ritual in the workshop.** It is the
default road out of every desk sitting, and it is also a SUBROUTINE:
[liftoff §1](../skills/liftoff.md#1--full-handoff-first) runs it
whole before anything spawns, skipping only its §6 so that liftoff's
own close is the single close on that road.

**Its step numbers are a fossil record of its own growth.** §1,
§1.2, §1.5, §2 — the fractions are where later decisions inserted
duties into a sequence whose order was already load-bearing.
[D-032](../record/DECISIONS.md#d-032--fleet-continuity) wedged
parking in at 1.5;
[D-056](../record/DECISIONS.md#d-056--team-aware-leaving-rituals)
wedged the team shutdown in at 1.2, ahead of it. Renumbering would
have been tidier and would have broken every anchor that cites
them — the untidiness is the cost of keeping links stable, paid
deliberately.

**What is worth watching:** the ritual's honesty clauses are kept by
careful writing rather than by any mechanism. Nothing enforces that
a hung teammate is actually named, or that the team wait actually
waits. They are prose promises in a workshop that has learned to
distrust prose promises — and unlike the board spec or the baton
table, they have no single home a linter could ever check.

## Sources

Down-links only.

- [handoff](../skills/handoff.md) — the living procedure: both
  modes, all eight steps, the close report's exact shape, and §4's
  board spec with the baton case table.
- [D-002](../record/DECISIONS.md#d-002--handoff-note-merge-policy) ·
  the note's merge policy ·
  [D-032](../record/DECISIONS.md#d-032--fleet-continuity) · the park
  step ·
  [D-035](../record/DECISIONS.md#d-035--state-surfaces-v2) · §4 as
  the board spec ·
  [D-040](../record/DECISIONS.md#d-040--handoff-input-inversion) ·
  the inline paste ·
  [D-050](../record/DECISIONS.md#d-050--session-lifecycle-closed-is-not-dead)
  · closed ≠ dead ·
  [D-056](../record/DECISIONS.md#d-056--team-aware-leaving-rituals) ·
  capture-then-kill ·
  [D-062](../record/DECISIONS.md#d-062--the-wake-rule-generalized) ·
  the superseded desk ·
  [D-067](../record/DECISIONS.md#d-067--the-report-skeleton-and-the-board-diet)
  · the report skeleton ·
  [D-070](../record/DECISIONS.md#d-070--baton-renderings-single-homed)
  · the baton table.
- [LAWS §Workflow](../LAWS.md#workflow-non-negotiable) — leaving
  phrases are commands, and the park protocol.
- [liftoff §1](../skills/liftoff.md#1--full-handoff-first) — the
  caller that runs this ritual as a subroutine.
