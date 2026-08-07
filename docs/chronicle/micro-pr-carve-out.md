---
type: chronicle-story
shelf: III — the information system
status: living
updated: 2026-08-06 · written · cloud lane
---

# the micro-PR carve-out — the one merge that skips the founder

> **CURRENT ENDING (2026-08-06).** Main is PR-only and every merge
> waits for the founder, with exactly one carve-out: a PR touching
> ONLY [DASHBOARD](../DASHBOARD.md) and/or [IDEAS](../IDEAS.md),
> written by a ritual, squash-merges immediately without asking. It
> is safe for a structural reason rather than a trusting one —
> **both files are derived or inbox surfaces**, so the worst bad
> merge is a stale rendering or a noisy line, each healed
> mechanically. The physical gate survives underneath it: main still
> takes no direct pushes, and no session holds a standing merge
> allowance — the permission exists only inside the ritual skills'
> narrow `allowed-tools`, so even the self-merge can only happen
> where a ritual is running. **The enumerated writer list has fallen
> behind the code**: both of its homes name handoff, liftoff, ship's
> tail and pickup's stale-repaint, and [land](../skills/land.md)
> ships board micro-PRs in both its modes without appearing in
> either list.

## What it is

The single exception to the workshop's merge gate. Its living text
is one clause in [LAWS §Workflow](../LAWS.md#workflow-non-negotiable)
and its explanation in
[HOME §Micro-PRs](../HOME.md#micro-prs).

Three conditions must hold together:

1. **FILES** — only [DASHBOARD.md](../DASHBOARD.md) and/or
   [IDEAS.md](../IDEAS.md). Nothing else may ride one: no code, no
   laws, no contracts, no history.
2. **AUTHOR** — a ritual wrote it. Not a session deciding a change
   is small.
3. **ACT** — chore branch from freshly pulled main, single-surface
   commit, immediate squash-merge, no approval.

The reason approval was dropped is narrow and stated: **the founder
approving a note the system just wrote to itself adds nothing but
friction to the leaving habit.** The carve-out exists to protect a
ritual's reflex, not to speed up work.

## What raised it

A direct collision between two rules that were both correct. Main
was PR-only for everything; the leaving ritual had to write a
handoff note at the end of every session. Requiring approval for
that note meant either taxing the leaving habit at exactly the
moment the founder was leaving, or — worse — **stranding the note
unapproved, leaving the OTHER machine to sit down to a stale
briefing.** In a two-computers-and-a-cloud workshop, that is the
failure the note exists to prevent.

[D-002](../record/DECISIONS.md#d-002--handoff-note-merge-policy)
resolved it by carving out the smallest possible hole, and the
alternatives it rejected show what was being protected. A ruleset
BYPASS for the founder's account was rejected because it removes the
physical guarantee for the only identity that pushes — the gate
would become a convention rather than a mechanism. Approval
micro-PRs were rejected as the tax that caused the problem.

## What changed, in order

- **[D-002](../record/DECISIONS.md#d-002--handoff-note-merge-policy)
  ([#5](https://github.com/wsher0901/roam/pull/5)) — born around one
  file.** A PR containing only `docs/HANDOFF.md`, written by handoff
  or ship, opens and squash-merges immediately. It is guarded to
  STOP if anything else changed — the file list is the safety
  property from the first day.
- **[D-008](../record/DECISIONS.md#d-008--cockpit-derived-state-automatic-recording)
  — IDEAS joins, to protect a different reflex.** Ideas are captured
  the moment they are voiced, and the carve-out extends to
  [IDEAS.md](../IDEAS.md) additions. The reasoning is the same shape
  as the original and is recorded in the rejected alternatives: **PR
  approval for idea capture kills the habit.** The carve-out is now
  about two reflexes — leaving, and capturing — rather than one
  file.
- **[D-023](../record/DECISIONS.md#d-023--universal-draft-pr-at-birth-and-micro-pr-carve-out)
  — recut around the surfaces that replaced the note.** The class is
  redefined to touch ONLY [DASHBOARD](../DASHBOARD.md) and/or
  [IDEAS](../IDEAS.md); `HANDOFF.md` had retired when
  [D-024](../record/DECISIONS.md#d-024--architecture-v2-narrative-layer-and-skills)
  made the board the sole state surface. The same decision makes
  every task born with a draft PR and retires GitHub Issues and the
  project board, leaving [IDEAS](../IDEAS.md) as the single inbox.
  Its rejected alternative is the one that matters most here:
  **widening the class further was refused, because every added file
  weakens the only no-approval merge path there is.**
- **The safety argument is written down, and it is structural.**
  [HOME §Micro-PRs](../HOME.md#micro-prs) records why the hole
  cannot grow into a wound: the board is repainted WHOLESALE from
  its sources by the next ritual, and IDEAS gains lines and
  compresses settled ones into an outcome ledger rather than
  deleting them — so a bad merge decays into a stale rendering or a
  noisy line, and a mis-compressed line is recoverable from git plus
  the closing vehicle it names.
- **The physical gate is verified to survive.** Main takes no direct
  pushes, and `.claude/settings.json` grants no session a standing
  `gh pr merge` allowance — its bypass variants are explicitly
  denied. The allowance lives only inside the ritual skills'
  `allowed-tools`. **The carve-out is therefore enforced by the same
  kind of mechanism as the gate it excepts**, not by a session
  remembering the rule.
- **The writers multiply as the rituals do.** Handoff §5 ships the
  note; ship's tail repaints via a QUIET handoff; liftoff ships the
  board plus any IDEAS harvest before anything spawns; pickup gains
  two — §2 squash-merges a STRANDED micro-PR it finds on sitting
  down, and §4's stale-repaint rides the same carve-out. Then
  [D-054](../record/DECISIONS.md#d-054--the-landing-skill) adds
  [land](../skills/land.md), whose MODE R clears the In-flight row
  and whose MODE P ships the fleet-at-ground table, both as board
  micro-PRs — with one carve-out inside the carve-out: **a
  superseded cockpit writes no board at all.**
- **[decide](../skills/decide.md) states the boundary from the other
  side.** Its procedure carries the sentence flatly: **a decision is
  NEVER a micro-PR.**

## Where it stands

**The rule is settled and load-bearing, and its file list has not
moved since
[D-023](../record/DECISIONS.md#d-023--universal-draft-pr-at-birth-and-micro-pr-carve-out).**
It is invoked many times a day, by every ritual that repaints the
board, and there is no recorded instance of it merging something it
should not have.

**Its enumerated WRITER list, however, has fallen out of step with
the procedures — derived at this story's write time, not taken from
the census.** Both homes list the same four writers:
[LAWS](../LAWS.md#workflow-non-negotiable) says "written by a ritual
(handoff · liftoff · ship's tail · pickup's stale-repaint)", and
[HOME §Micro-PRs](../HOME.md#micro-prs) says "handoff, liftoff,
ship's tail — or pickup's stale-repaint". Neither names
[land](../skills/land.md), which ships a board micro-PR in BOTH of
its modes and says so three times in its own text.

**The gap is cosmetic in effect and worth naming in kind.** Nothing
is broken: land's micro-PRs are board-only, ritual-written, and ship
through handoff §5's mechanism, so every safety condition holds and
the merge is lawful on the substance. What is wrong is that two
enumerations claim to be exhaustive and are not — and the record is
emphatic that this is a recurring class here, with a named
countermeasure: **enumerate the real inputs from their SOURCE rather
than reasoning about the cases in the abstract.** A reader checking
whether a landing may self-merge its board finds four writers, none
of them land, and has to go read land to learn the answer. The
likeliest cause is ordinary: land was born by
[D-054](../record/DECISIONS.md#d-054--the-landing-skill), well after
[D-023](../record/DECISIONS.md#d-023--universal-draft-pr-at-birth-and-micro-pr-carve-out)
fixed the class, and the retroactivity law's backfill reached the
files the new ritual named rather than the lists that had described
the old set.

**A lane may not fix this**, since both homes are main-side files
outside this bench's scope. It is stated here so the next weld that
touches either list has it in hand.

**Contradiction with the census cell.** The cell reads "The one
merge that skips the founder: DASHBOARD/IDEAS-only, ritual-written,
safe because both surfaces are derived or inbox" — accurate and
current on all three conditions. It says nothing about who the
rituals are, which is where the drift actually is.

## Sources

Down-links only — this story cites the record beneath it and never
another story's prose.

- [LAWS §Workflow](../LAWS.md#workflow-non-negotiable) — the merge
  gate and its one exception.
- [HOME §Micro-PRs](../HOME.md#micro-prs) — the class, the safety
  argument, and the surviving physical gate.
- [D-002](../record/DECISIONS.md#d-002--handoff-note-merge-policy) ·
  born, and the rejected account bypass ·
  [D-008](../record/DECISIONS.md#d-008--cockpit-derived-state-automatic-recording)
  · IDEAS joins ·
  [D-023](../record/DECISIONS.md#d-023--universal-draft-pr-at-birth-and-micro-pr-carve-out)
  · the recut, and the refusal to widen ·
  [D-024](../record/DECISIONS.md#d-024--architecture-v2-narrative-layer-and-skills)
  · the board becomes the sole state surface ·
  [D-054](../record/DECISIONS.md#d-054--the-landing-skill) · land,
  the unlisted writer.
- [the carve-out's bench](../record/history/workshop/definition/handoff-merge-carveout.md)
  — [#5](https://github.com/wsher0901/roam/pull/5), and the two
  later recuts named from inside it.
- [handoff §5](../skills/handoff.md#5--ship-the-note) — the shipping
  mechanism every other writer points at ·
  [pickup §2](../skills/pickup.md#2--self-heal) — the stranded-PR
  rescue · [land](../skills/land.md) — the writer the lists omit ·
  [decide](../skills/decide.md) — the boundary from the other side.
