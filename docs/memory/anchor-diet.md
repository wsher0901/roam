---
type: memory
id: anchor-diet
updated: 2026-07-31 14:05 · ship · work PC
---

# anchor-diet — short stable anchors for the decision ledger

## Status

complete, awaiting merge — 2026-07-31, work PC.
[D-068](../record/DECISIONS.md#d-068--the-short-anchor-law) is
minted in the new format as its own first instance, all 67 prior
entries are retrofitted with word preservation proven per entry,
848 citations are repointed across 152 files, and
[decide](../skills/decide.md) writes the new format from here on.
Full CI mirror green; Actions green on the pushed head. The
critic returned eight findings, three notable; all eight are
repaired (below).

## What this task is

Decision headings became full statements, so their anchors became
full statements too. THE SHORT-ANCHOR LAW cuts the heading to a
short name (8 words maximum) and moves the complete statement
verbatim into the entry body as `In full: …`. Anchors freeze at
mint. D-001 through D-067 are retrofitted here — a
content-preserving format change sanctioned by the retroactivity
law: append-only protects the words, and every word survives one
line lower. Contract:
[the spec](../record/specs/anchor-diet.md).

## Pending issues

- Tower-authored, so
  [no-solo-approval](../LAWS.md#workflow-non-negotiable) requires
  an external Web review before the founder's word at THE GATE. DO
  NOT MERGE.

## Left / idle

nothing parked.

## The story

Born 2026-07-31 at the work PC.

The bill came due at
[#250](https://github.com/wsher0901/roam/pull/250): that bench
wrote a 1,038-character anchor into the record five times over
while dieting every other surface in the workshop, and said so in
its own story. The founder ruled the next day, promoting an idea
that had been open since 07-24.

**The numbers.** Longest anchor before: 1,038 characters. After:
57. Mean: 32. The ledger's own internal citations — 92 of them —
were the largest single beneficiary, because a decision that
amends four others quotes four statement-length anchors inside one
entry.

### Two things this bench had to prove rather than assert

**WORD PRESERVATION, per entry, against the pre-retrofit file.**
The retrofit is only lawful because nothing is lost, so "nothing
is lost" could not be a claim in a commit message. The date rode
along inside the heading text, which is why it is still in the
record even though it left the heading.

THE PROOF IS REPRODUCIBLE FROM GIT ALONE — the critic asked for
this, and it was right to: a legality argument that only its
author can run is not a proof. Anyone, at any seat, can re-derive
it from the two committed versions of the file:

```sh
git show main:docs/record/DECISIONS.md   > /tmp/before.md
git show HEAD:docs/record/DECISIONS.md   > /tmp/after.md
```

Then, for each `## D-0XX — …` heading in `before.md`, the text
after the D-number must appear byte-identical as that entry's
`In full:` line in `after.md`. Run at 2026-07-31: 67 entries
checked, 0 mismatches. No throwaway script is committed, because
the two file versions ARE the evidence and they live in git
forever.

**POINTER-ONLY, per frozen file.** 128 of the 152 changed files
sit on the frozen shelves — history, specs, chronicle, retired,
probes — where
[D-057](../record/DECISIONS.md#d-057--the-record-shelf)'s enabling
ruling licenses a mechanical link repair as MAINTENANCE, not a
content edit. The proof is a diff walk: every added or removed
line in every one of those 128 files must contain a DECISIONS
anchor. Zero exceptions found. That check is what separates a
sanctioned repair from an edit to the frozen record, and it is
mechanical rather than eyeballed.

### The sweep's two misses, both caught by the destination-grep

The lesson this workshop keeps re-learning is to grep the
DESTINATION. It held — but the destination pattern itself was
wrong twice, and only re-running the grep to ZERO found it:

- **The slug character class was too narrow.** My first pattern
  allowed `[a-z0-9-]`, and
  [D-048](../record/DECISIONS.md#d-048--cockpit-resilience)'s
  anchor contains `workflow_dispatch` — an UNDERSCORE. The match
  truncated mid-anchor, so 40 citations across 19 files were
  silently skipped while the sweep reported success. Fixed to
  `[\w-]`.
- **Bare self-anchors are not `DECISIONS.md#…`.** Inside
  DECISIONS itself a citation reads `](#d-046--…)` with no
  filename, so the mandate's destination pattern could not see
  them. 92 citations, every one of them broken by the retrofit,
  and `check:links` is the only reason it was not shipped that
  way.

Both are the same shape: a destination-grep is only as good as its
pattern, and the proof of a sweep is not that it ran, it is that
re-running it returns ZERO. `check:links` at 4,035 links green is
the receipt.

### The masters, and why no box re-save results

[WEB-INSTRUCTIONS](../WEB-INSTRUCTIONS.md),
[COCKPIT-CHARTER](../COCKPIT-CHARTER.md) and
[LANE-WORKER](../LANE-WORKER.md) all cite D-numbers — but only in
their VERSION-HISTORY TABLES, which sit BELOW their fences and are
ordinary prose. All three fences were verified byte-identical
against `HEAD` after the sweep. NO BOX RE-SAVE OR RE-PASTE IS
OWED.

### Every file touched

- **[DECISIONS](../record/DECISIONS.md)** — 68 entries reheaded,
  68 `In full:` lines inserted, 92 internal citations repointed,
  the file's format header rewritten to the new law.
- **[decide](../skills/decide.md)** — §1's entry format, the
  freeze-at-mint rule, and the one line on why anchors are
  expensive.
- **23 living files** — [LAWS](../LAWS.md) · [HOME](../HOME.md) ·
  [ATLAS](../ATLAS.md) · [ENGINE](../ENGINE.md) ·
  [ROADMAP](../ROADMAP.md) · [SETUP](../SETUP.md) ·
  [IDEAS](../IDEAS.md) · [DASHBOARD](../DASHBOARD.md) · the three
  box masters' version tables ·
  [FACTS](../data/FACTS.md) · [SCHEMA](../data/SCHEMA.md) ·
  [SOURCES](../data/SOURCES.md) · and eight skills
  ([go-remote](../skills/go-remote.md) ·
  [handoff](../skills/handoff.md) · [land](../skills/land.md) ·
  [liftoff](../skills/liftoff.md) ·
  [parallel-lanes](../skills/parallel-lanes.md) ·
  [pickup](../skills/pickup.md) · [recall](../skills/recall.md) ·
  [ship](../skills/ship.md)).
- **128 frozen files** — pointer-only, per the proof above: 69 on
  [history/](../record/history/README.md), 56 in
  [specs/](../record/specs/README.md),
  [chronicle/INDEX](../chronicle/INDEX.md),
  [the retired clerk charter](../record/retired/clerk-charter.md),
  and
  [the cloud-birth-in-CI probe](../record/probes/cloud-birth-in-ci.md).
- **[IDEAS](../IDEAS.md)** — the LAWS-ANCHOR line closes 🟢 and
  moves to CLOSED as one line, per the entry contract.

## The critic round

Eight findings, three notable. All repaired:

- **HOME's manual said the ledger's entries "are never
  rewritten"** — flatly contradicted by 68 re-headed entries. The
  row now states the real rule, which is
  [D-057](../record/DECISIONS.md#d-057--the-record-shelf)'s:
  append-only governs MEANING, not bytes. No entry's words are
  ever changed or removed; a mechanical format or link repair is
  maintenance.
- **The weave rule now reached into frozen text.**
  [decide](../skills/decide.md) §3 says every D-number in an entry
  is a link — but the `In full:` line is a VERBATIM QUOTATION, and
  roughly forty of them carry plain "(amends D-009)" clauses. A
  later reader "repairing" one would be altering the record. §3
  gains the carve-out, absolute and stated as such.
- **The word-preservation proof was mine alone.** It ran, and it
  passed, and the critic could not re-run it — which makes it an
  assertion, not a proof, on the one claim that licenses touching
  an append-only file. The story now carries the two `git show`
  commands that re-derive it from committed state; no script is
  needed, because the before-and-after files ARE the evidence.
- **D-068's own entry was the one entry not written the way its
  format was applied** — a lowercase heading against every other
  entry's capital, and a hard-wrapped `In full:` line against 67
  single-line ones. Both normalized while the anchor was still
  cheap to change; capitalization does not move the slug.
- **decide's template put the heading and `In full:` on
  consecutive lines** while every real entry separates them with a
  blank line. Template corrected to what the file actually does.
- **The board took a hand edit.** One pointer line — a dead anchor
  had to be repaired or `check:links` goes red. Named in D-068's
  Affects and here rather than passed over: the board's
  rituals-only rule governs its STATE, and a link repair is the
  same maintenance D-057 licenses on the shelves. Nothing was
  repainted.
- **The spec's Done-means were unticked** at a gate presenting
  itself as complete. Ticked honestly.

## Where to look

- [the spec](../record/specs/anchor-diet.md) — the contract.
- [D-068](../record/DECISIONS.md#d-068--the-short-anchor-law) —
  the law, and the first entry written in the format it defines.
- [decide](../skills/decide.md) — the writer, from here on.
- the Web ops chat, 2026-07-30 — where the founder approved it.
