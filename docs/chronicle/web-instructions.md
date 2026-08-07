---
type: chronicle-story
shelf: III — the information system
status: living
updated: 2026-08-06 · written · cloud lane
---

# WEB-INSTRUCTIONS — the Web surface's rule-carrier

> **CURRENT ENDING (2026-08-06).** The master is **v6**, shipped
> 2026-07-28 by [#240](https://github.com/wsher0901/roam/pull/240)
> under
> [D-063](../record/DECISIONS.md#d-063--response-doctrine-v2-and-web-instructions-v6)
> — **the census cell says v5 and is one version stale**, having
> been written the day before. Its larger promotion is not in the
> cell at all: this file stopped being one file and became the
> ARCHETYPE OF A CLASS, the shape every box master is now built on
> ([D-064](../record/DECISIONS.md#d-064--the-box-master-class-and-setup-entry-contract)).
> One thing this story CANNOT derive: whether the live box in
> claude.ai currently holds v6. The box is not in git, nothing on
> the board records that re-save as owed, and that silence is the
> known failure mode rather than proof.

## What it is

The repo-side master of the text stored in the Claude Web
Project-instructions box — the rules the Web surface obeys when it
speaks to the founder. The box lives in another product; this file
is where it is authored.

FOUR LAWS ride at the top of it, and they exist because the copy
is the thing that actually runs:

- **The box is a COPY, never the source.** Edits are made here,
  via PR.
- **RE-SAVE after any merge** — the box is re-pasted, or the merge
  changed nothing that matters.
- **FULL COPY, ALWAYS** — whenever a new version is compiled, the
  surface in hand prints the COMPLETE text for the paste, never a
  diff and never "go find it".
- **A version line and a changelog** — version · date · vehicle ·
  one-line change, so a reader can tell what the box should
  contain.

## What raised it

The Web surface is where the founder does a great deal of the
talking, and it had no governed rule-carrier: its instructions
lived only in a settings box nobody could review, diff, or roll
back. Put a rule there and it is invisible to every session in the
repo; put it only in the repo and the Web surface never sees it.

The answer was to make the repo authoritative and the box a
render of it — which creates the one hazard the laws above are
built around. **A master edit that never reaches its box fails
SILENTLY.** Nothing turns red. The repo says the rule exists, the
surface behaves as though it does not, and the disagreement is
invisible until it produces a wrong answer.

## What changed, in order

- **2026-07-11 — v4, the master is canonized**
  ([#80](https://github.com/wsher0901/roam/pull/80)). The box's
  text gets a home in git for the first time.
- **2026-07-24 — v5**
  ([#216](https://github.com/wsher0901/roam/pull/216),
  [D-052](../record/DECISIONS.md#d-052--response-doctrine)). The
  response doctrine ships and the master carries it; the old
  paste-block loop is retired and the surface takes a review-first
  role.
- **2026-07-28 — v6**
  ([#240](https://github.com/wsher0901/roam/pull/240),
  [D-063](../record/DECISIONS.md#d-063--response-doctrine-v2-and-web-instructions-v6)),
  the current version. It carries doctrine v2 — TWO CHANNELS,
  sentences for the founder and fenced blocks for machines, with
  no technical content outside a fence — and adds what v5 had no
  home for: **the chat-start ingest contract** (what a fresh chat
  reads before answering: the master's own version line, LAWS, the
  board, the roadmap, live git, and every open bench's memory
  Status), **the relay rule** — ORIGIN IS THE ONLY COURIER, so the
  Web surface never asks the founder to paste Code's output, since
  everything Code produces is on origin by law — plus the agenda
  convention, "brief" rendering the full picture, and the
  full-copy and changelog laws themselves.
- **2026-07 — the file becomes a CLASS**
  ([D-064](../record/DECISIONS.md#d-064--the-box-master-class-and-setup-entry-contract),
  [#242](https://github.com/wsher0901/roam/pull/242)). Every
  master for an external box is now its own top-level file BUILT
  ON THE SHAPE THIS ONE PROVED — header laws, one fenced master, a
  version-history table, a sources block. `COCKPIT-CHARTER.md` and
  `LANE-WORKER.md` are extracted verbatim into the class and
  [DESIGN-KICKOFF](../DESIGN-KICKOFF.md) joins it on paper.
- **2026-07 — the diet**
  ([D-065](../record/DECISIONS.md#d-065--the-box-master-diet),
  [#246](https://github.com/wsher0901/roam/pull/246)) rules what
  may go INSIDE a box master: standing rules, invariants and
  pointers only. Procedures stay in their repo homes and are
  derived at need; VALUES live in [SETUP](../SETUP.md); and
  provenance labels do NOT ride boxes — a rule in a box is stated,
  not attributed, because the session that wants the reasoning has
  the clone.

## Where it stands

**Master: v6.** The version line in the file and the bottom
changelog row agree, and the story derived both at write time
rather than reading them off the census.

**THE CENSUS CELL IS STALE AND THIS STORY OVERRIDES IT.** The cell
reads "v5 lives as the repo master; the Web box is a copy,
re-pasted 2026-07-28 after the #229 edit." The census was stamped
2026-07-27 and v6 merged 2026-07-28 — the cell was accurate for
about a day. This is the ordinary way these cells go wrong: not by
error, but by being a dated attestation read later as a current
one.

**What the box itself holds is NOT DERIVABLE FROM GIT**, and the
honest ending says so. The box is stored in claude.ai; no commit
can witness its contents. What can be checked is whether the
workshop is CARRYING a debt for it, and it is not — the board
shows needs-you 0 at this writing, and its one ✓ re-save line
concerns the COCKPIT CHARTER at v5 on 2026-08-05, a different
master. So: nothing is recorded as owed. Under the class's own
law that a missed re-save fails silently, absence of a recorded
debt is weaker evidence than a positive attestation, and this
ending does not upgrade one into the other.

## Sources

Down-links only.

- [WEB-INSTRUCTIONS](../WEB-INSTRUCTIONS.md) — the master, its
  four header laws, and the version history.
- [D-063](../record/DECISIONS.md#d-063--response-doctrine-v2-and-web-instructions-v6)
  — doctrine v2, the ingest contract, and the relay rule.
- [D-064](../record/DECISIONS.md#d-064--the-box-master-class-and-setup-entry-contract)
  — the class this file's shape founded.
- [D-065](../record/DECISIONS.md#d-065--the-box-master-diet) —
  what may live inside a box.
- [D-052](../record/DECISIONS.md#d-052--response-doctrine) — the
  v5 doctrine.
- [the box-master bench](../record/history/workshop/definition/box-masters.md)
  · [#242](https://github.com/wsher0901/roam/pull/242) ·
  [the charter-v3 bench](../record/history/workshop/definition/charter-v3.md)
  · [#246](https://github.com/wsher0901/roam/pull/246).
- [LAWS §Knowledge & tracking](../LAWS.md#knowledge--tracking) —
  the box-master line as it loads into every session.
- [HOME §Response doctrine](../HOME.md#response-doctrine) — the
  doctrine's one home, which the box carries rather than owns.
