---
type: chronicle-story
shelf: III — the information system
status: living
updated: 2026-08-06 · written · cloud lane
---

# The specs system — one contract per task

> **CURRENT ENDING (2026-08-06).** One stable contract per task —
> goal, out of scope, plan, Done-means — born just-in-time from the
> discussion that opened the task, frozen at ship, superseded only
> by a DATED NOTE and never by deletion. **Derived at write time:
> 85 spec files live under
> [`docs/record/specs/`](../record/specs/README.md).** The system's
> purpose is one sentence in the manual and has not moved since:
> without specs, ship would have nothing objective to gate on, and
> "done" would mean "tired". Two things a later reader needs that
> are easy to get wrong: a fully-specified [ROADMAP](../ROADMAP.md)
> line SKIPS the spec by design, so a missing spec is not
> automatically a gap — and **an unticked Done-means box in a
> shipped spec is the NORM, not evidence of owed work**, a
> distinction that cost a bench a red finding on 2026-08-06 when a
> test read those boxes as debt.

## What it is

`docs/record/specs/<id>-<short-name>.md` — a task's stable contract,
carrying its goal, its scope edges, its plan, and a verifiable
Done-means checklist. It is born from the discussion that opened the
task, at task birth, on the branch, as one of the first commits.

Three rules govern its life:

**Born just-in-time, and skippable.** A spec exists because a
discussion produced conclusions that would otherwise evaporate with
the chat. When the [ROADMAP](../ROADMAP.md) line already fully
specifies the task, there is no such discussion to preserve and the
spec is skipped — the steps then live in the PR description.

**Changed by dual-write.** A contract can change in flight. When it
does, the SPEC receives the edit and the MEMORY narrates what
changed and why. Neither file carries both jobs: the spec is what
the task is FOR, the memory is what happened.

**Frozen at ship, annotated after.** [ship](../skills/ship.md)
finalizes the spec at the weld; from then it lives on the frozen
shelf. A later development that disproves part of it is recorded as
a DATED SUPERSESSION NOTE — a blockquote under the title — not as a
rewrite and not as a deletion.

## What raised it

Two failures, one of memory and one of judgment.

The first is that a task's reasoning lives in a conversation, and
conversations end. The decisions that shaped a task — what it is
for, what it deliberately will NOT do, what "finished" means — are
made in discussion and would be reconstructible afterwards only by
whoever was present, if anyone still is. A spec is that discussion's
durable residue.

The second is what ship would otherwise gate on. Without a written
Done-means, "is this task complete?" is answered by the seat that
did the work, from the same head that decided it was hard enough
already. **The spec exists so that the closing gate has something
objective to check against**, written at a moment when nobody was
tired yet.

## What changed, in order

- **[#58](https://github.com/wsher0901/roam/pull/58) (2026-07-09) —
  the knowledge layer: the vault learns to explain itself.** Specs
  appear as part of the workshop learning to document its own
  structure, before the surrounding lifecycle exists to hold them.
- **[#71](https://github.com/wsher0901/roam/pull/71) —
  [D-024](../record/DECISIONS.md#d-024--architecture-v2-narrative-layer-and-skills)
  makes the spec a TASK ARTIFACT.** Architecture v2 fixes the shape
  the task loop still uses: every task carries a spec, a memory and
  a draft PR, with `specs/README` born alongside. From here the spec
  is not an optional document but one third of a task's anatomy.
- **[#204](https://github.com/wsher0901/roam/pull/204) (2026-07-23)
  — the currency audit, and ANNOTATION BEATS DELETION.** The audit
  hunted every live instruction pointing at machinery that could no
  longer fire, and found among them a shipped spec that read as a
  recipe while carrying two shapes the record had since disproven.
  The repair was four dated supersession notes as blockquotes under
  the affected spec titles — **zero deletions, zero record-body
  rewrites**. The principle it demonstrated is the one this system
  runs on: an instruction is a trap, while a record is evidence, and
  the fix for a stale record is to date it rather than to erase it.
- **[D-057](../record/DECISIONS.md#d-057--the-record-shelf) — the
  shelf move.** `docs/specs` becomes `docs/record/specs` under the
  frozen roof, alongside history and DECISIONS. The path now
  declares the discipline: a spec is append-only in MEANING, though
  a mechanical link-path repair inside one remains maintenance
  rather than a content edit.

## Where it stands

Live, and used at every task birth. **85 spec files at write time**,
derived from the tree rather than counted from a note.

Two properties are load-bearing and are regularly misread, so they
are worth stating flatly:

**A missing spec is not automatically a gap.** The skip rule is
deliberate — a fully-specified [ROADMAP](../ROADMAP.md) line means
there was no discussion to preserve, and manufacturing a spec to
restate a line that already says everything is duplication, which
the routing law forbids. The question to ask of a task with no spec
is whether its ROADMAP line specified it, not whether someone forgot.

**An unticked Done-means box is not owed work.** Shipped specs
routinely carry them, and one — the CI box — is unticked by
convention. This is not a cosmetic point: on
[#324](https://github.com/wsher0901/roam/pull/324) a newly-written
settled-vs-advanced test counted unticked boxes as evidence of work
still owed, which would have answered "advanced" for every item in
the corpus and made the opposite branch unreachable. The critic
caught it, and the fix was to stop reading the boxes that way. A
later reader auditing this shelf should read a shipped spec's
checklist as a record of what the bench MEANT to verify, not as a
live to-do list.

**The one trap the README carries**, because it is invisible until
the build goes red: verbatim quoted doc text inside a spec must sit
in a top-level code fence. `check:links` resolves a spec's links
from the SPEC's own path, so an unfenced quoted relative link — one
that was correct in the file it was quoted FROM — breaks the build
in the file it was quoted INTO.

The honest limit: the spec system guarantees that a task has a
written contract and that ship has something to gate against. It
guarantees nothing about the contract's QUALITY — a vague
Done-means gates vaguely, and nothing mechanical can tell the
difference.

## Sources

Down-links only.

- [specs/README](../record/specs/README.md) — the system's own door,
  including the code-fence trap.
- [the spec TEMPLATE](../record/specs/TEMPLATE.md) — the contract's
  shape.
- [D-024](../record/DECISIONS.md#d-024--architecture-v2-narrative-layer-and-skills)
  — the spec as one third of a task's anatomy.
- [D-057](../record/DECISIONS.md#d-057--the-record-shelf) — the move
  to the frozen shelf, and the maintenance ruling that governs
  link repairs inside frozen specs.
- [LAWS §Task anatomy](../LAWS.md#task-anatomy) — the living clause:
  born from discussion, skipped when the ROADMAP line suffices,
  dual-written when the contract changes.
- [HOME §Task anatomy & lifecycle](../HOME.md#task-anatomy--lifecycle)
  — the manual's account of the lifecycle and the gates.
- [the currency-audit bench](../record/history/workshop/mechanism/currency-audit.md)
  — [#204](https://github.com/wsher0901/roam/pull/204): the dated
  supersession notes, and annotation over deletion.
- [the findings bench](../record/history/workshop/mechanism/lane-findings.md)
  — [#324](https://github.com/wsher0901/roam/pull/324): unticked
  Done-means boxes are the norm, not owed work.
- [ship §1](../skills/ship.md#1--preflight) ·
  [ship §7](../skills/ship.md#7--on-approval--the-atomic-weld) — the
  spec gate and the finalize step.
