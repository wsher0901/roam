---
type: chronicle-story
shelf: III — the information system
status: living
updated: 2026-08-06 · written · cloud lane
---

# The narrative layer — memory that becomes history

> **CURRENT ENDING (2026-08-06).** Living and in daily use, and the
> shape has not changed since it was designed: every task carries
> ONE living memory on its branch, and at ship's atomic weld that
> same file MOVES — never a copy — into one of four quadrants under
> [`docs/record/history/`](../record/history/README.md), gaining its
> shipped date and PR number and prepending one ledger line.
> **Derived at this story's write time:
> `npm run check:ledger` reports 125 history files ↔ 125 ledger
> lines, in sync.** The census cell reads "99 stories at this census
> (2026-07-27)"; that is not wrong, it is DATED — a census figure
> stating the day it was taken, which the derivation law requires be
> recomputed rather than recalled. The corpus has grown by 26
> stories since. The one structural fact worth carrying forward is
> what did NOT move: when the frozen record was gathered under one
> roof, `docs/memory/` deliberately stayed at `docs/` root, because
> the file a waking lane must trust cannot live on the shelf marked
> frozen.

## What it is

Two files per task and exactly one move between them.

**The memory** — `docs/memory/<id>.md`, living on the task's branch
in the locked format ([TEMPLATE](../memory/TEMPLATE.md), Status
first). It is rewritten COGNITIVELY at rituals and at the lane
trigger moments, not appended to: a memory that is only ever
appended becomes a log, and the point is that a cold reader can pick
the task up from the current state rather than by re-reading its
whole history.

**The history file** — `docs/record/history/<quadrant>/<id>.md`, the
permanent narrative of a shipped task, frozen after landing (link
repairs only). Four quadrants, chosen by IS vs DOES and by
Roam-facing vs builder-facing: `product/definition` ·
`product/build` · `workshop/definition` · `workshop/mechanism`.

**The move** — performed by [ship §7](../skills/ship.md#7--on-approval--the-atomic-weld)'s
atomic weld, in one bookkeeping commit: the
[ROADMAP](../ROADMAP.md) checkbox ticks, the memory file MOVES to
its quadrant with `shipped:` and `pr:` added to its frontmatter, the
spec is finalized, and one line is prepended to
[the ledger](../record/history/README.md#the-ledger).

The division of labour under it is the sentence the workshop repeats
about itself: git keeps the technical record; `record/history/`
keeps the meaning.

## What raised it

A bottleneck, and then a law built to manage the bottleneck.

The early workshop kept its narrative in TWO project-wide files — a
handoff note and a shiplog. One file, one writer, whole-project
scope. That shape needs a single-writer rule to stay coherent, and
the workshop had one. It worked exactly as long as there was one
session at a time.

Parallel work is what broke it. The moment two lanes run at once,
a project-wide note has two authors and no way to merge them, and
the single-writer law stops being a discipline and starts being a
serialization constraint on the work itself. **Per-task memory
dissolves the bottleneck rather than managing it:** every lane
writes its own story, on its own branch, sharing no file with any
sibling — which is the same property the lane law depends on for
merges that cannot collide by construction.

The second half — why a shipped task's narrative moves rather than
accumulating in a log — is the derivation law applied to prose. An
ever-growing log rots, and "what shipped lately" is a DERIVED view
that the board renders from the record.

## What changed, in order

- **[#1](https://github.com/wsher0901/roam/pull/1) (2026-06-10) —
  the workflow kit.** The first machinery: a handoff note and a
  shiplog, project-wide, single-writer. Everything below is the
  story of that shape being outgrown.
- **[#56](https://github.com/wsher0901/roam/pull/56) (2026-07-09) —
  ritual engine v2; the shiplog is born** as a first-class surface.
  The narrative is now something the rituals write on purpose rather
  than a note someone remembers to update.
- **[#71](https://github.com/wsher0901/roam/pull/71) (2026-07-11) —
  the engine swap: architecture v2
  ([D-024](../record/DECISIONS.md#d-024--architecture-v2-narrative-layer-and-skills)).**
  THE DECIDING CHANGE. Every task gains `docs/memory/<id>.md` in the
  locked format, moved to history by ship's atomic weld; the handoff
  note and the shiplog are RETIRED, the shiplog's 35 entries
  backfilled as history files so nothing is lost in the retirement;
  [DASHBOARD](../DASHBOARD.md) becomes the sole state surface,
  repainted only by rituals. The alternatives it rejected name the
  design precisely: keeping the handoff note beside the memories
  (two homes for one truth), a shiplog index over history (a derived
  value written as a literal), and memory as PR comments only (dies
  with the PR page, unreadable in the vault).
- **[#108](https://github.com/wsher0901/roam/pull/108) (2026-07-13)
  — history organizes by issue-door quadrants**, and
  [TEMPLATE](../memory/TEMPLATE.md) takes ownership of the memory
  format and the Status vocabulary. The narrative layer stops being
  one flat directory and gains the four doors it still uses.
- **[#110](https://github.com/wsher0901/roam/pull/110) (2026-07-13)
  — state surfaces v2
  ([D-035](../record/DECISIONS.md#d-035--state-surfaces-v2)).**
  Welds stamp time and WRITE THE LEDGER. Date-only frontmatter had
  hidden same-day chronology; from this entry on, ledger lines carry
  time. The ledger's own story is a sibling item on this shelf.
- **[D-057](../record/DECISIONS.md#d-057--the-record-shelf) — the
  record shelf, and the deliberate exception.** `docs/history` moves
  to `docs/record/history` under the frozen roof — and
  `docs/memory/` is explicitly LEFT at root. The rejected
  alternative is the load-bearing part: moving memory under
  `record/` too was considered and refused, because in-flight memory
  is a living handshake surface rewritten at every ritual, and
  shelving it under the frozen roof "would misdeclare exactly the
  file a waking lane must trust."

## Where it stands

Live, daily, and unchanged in shape since
[D-024](../record/DECISIONS.md#d-024--architecture-v2-narrative-layer-and-skills).

**Derived at write time, not copied:** `npm run check:ledger` on
this branch's tip reports **125 history files ↔ 125 ledger lines, in
sync**. The census cell's "99 stories at this census (2026-07-27)"
is a correctly-dated figure that has simply been overtaken; this
story states the current one and the date it was taken, which is
what the derivation law asks of any count.

Two properties are worth stating plainly because later readers rely
on them:

**The memory is the handshake surface.** It is not a diary kept for
sentiment — the lane law reads its Status on every wake, and the
wake-lock licenses work only on a lane's own live claim. That is why
its format is machine-checked (a sibling item on this shelf owns
that thread) and why it did not follow the rest of the record under
the frozen roof.

**One narrative unit per task, and the unit MOVES.** There is never a
moment when a task's story exists in two places. The weld is a
rename, so git carries the file's whole history across the boundary,
and the ledger line is what makes the move auditable — a moved file
with no line, or a line with no file, turns the build red.

The honest limit: this layer guarantees that every shipped task HAS
a narrative and that the pairing is complete. It guarantees nothing
about whether that narrative is GOOD. What a memory says is
defended by the rituals that rewrite it and by review, never by a
gate.

## Sources

Down-links only — the frozen record and the living machinery
beneath, never another story's prose.

- [D-024](../record/DECISIONS.md#d-024--architecture-v2-narrative-layer-and-skills)
  — the deciding entry: per-task memory, the weld, the two
  retirements, and the alternatives rejected.
- [D-035](../record/DECISIONS.md#d-035--state-surfaces-v2) — welds
  stamp time and write the ledger.
- [D-057](../record/DECISIONS.md#d-057--the-record-shelf) — the
  frozen roof, and the reasoning that kept `docs/memory/` out of it.
- [LAWS §Task anatomy](../LAWS.md#task-anatomy) — the living clause:
  spec, memory, draft PR, and where memory lands at ship.
- [TEMPLATE](../memory/TEMPLATE.md) · [memory/](../memory/README.md)
  — the locked format and its door.
- [the ledger and the four doors](../record/history/README.md) — the
  quadrant legend and the chronology, including the ledger lines for
  [#1](https://github.com/wsher0901/roam/pull/1),
  [#56](https://github.com/wsher0901/roam/pull/56),
  [#108](https://github.com/wsher0901/roam/pull/108) and
  [#110](https://github.com/wsher0901/roam/pull/110).
- [ship §7](../skills/ship.md#7--on-approval--the-atomic-weld) — the
  atomic weld that performs the move.
- [HOME §The files](../HOME.md#the-files--what-each-one-is-for) —
  the manual's account of memory and history.
