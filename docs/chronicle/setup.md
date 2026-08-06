---
type: chronicle-story
shelf: III — the information system
status: living
updated: 2026-08-06 · written · cloud lane
---

# SETUP — the equipment inventory

> **CURRENT ENDING (2026-08-06).** Still the single inventory of
> everything the workshop runs on — and no longer just an
> inventory. Since
> [D-064](../record/DECISIONS.md#d-064--the-box-master-class-and-setup-entry-contract)
> every entry is a REPLICATION SPEC under a stated contract — WHAT
> · WHERE · VALUES · VERIFY · SOURCE — and since
> [D-065](../record/DECISIONS.md#d-065--the-box-master-diet) this
> file is the NAMED HOME FOR VALUES for the whole box-master
> class: a box names a thing and points here, and the number, path
> or exact setting lives here. The census cell — "The single
> inventory — stack, configs, staged tooling — with retired
> predecessors succeeded and dead sections tombstoned" — is true
> but predates both promotions.

## What it is

One file answering one question: what does this workshop run on,
and how would you rebuild it? Five sections — the stack; what is
configured once repo-side and travels with git; what is configured
once in cloud accounts; what every machine needs (procedure
delegated to the
[machine-setup](../skills/machine-setup.md) skill); and what is
STAGED, waiting for its stage to open.

THE ENTRY CONTRACT, stated at the file's own head, is what makes
it a replication spec rather than a list:

- **WHAT** — the thing.
- **WHERE** it is configured — the exact screen, file, or command.
- **VALUES** — every non-default choice, exactly.
- **VERIFY** — one probe that proves it still holds.
- **SOURCE** — the D-number or PR carrying the why.

An entry DROPS discovery stories, prior readings, and retired
alternatives. Those belong to the record; this file exists to be
executed.

## What raised it

Equipment knowledge was scattered across several files that each
told part of the story, and the parts disagreed as they aged. The
question a setup file has to answer is not "what did we choose"
but "what do I type" — and a file that mixes the two answers
neither, because the reasoning buries the value and the value
inherits the reasoning's shelf life.

A second pressure arrived with the box-master class: once masters
for external boxes existed, every one of them needed somewhere to
put its numbers. Left in the boxes, values would live in text this
repo authors but another product stores — a second home,
un-diffable, guaranteed to drift.

## What changed, in order

- **Consolidation —
  [D-030](../record/DECISIONS.md#d-030--setup-consolidation)**
  builds `SETUP.md` as the one inventory and RETIRES its
  predecessors, the equipment plan and PROJECT-POLICY, under the
  retirement pattern: a retired file is succeeded and tombstoned,
  not silently deleted, so a later reader following an old pointer
  lands somewhere that explains itself.
- **The currency sweeps keep it honest.** SETUP is one of the
  files the retroactivity law repeatedly backfills —
  [#147](https://github.com/wsher0901/roam/pull/147) and
  [#197](https://github.com/wsher0901/roam/pull/197) both pass
  through it — because an inventory is exactly the kind of file
  that rots quietly while reading as though it were current.
- **NEVER STOCKPILE.** The §Staged section is a standing
  discipline rather than a wish-list: a tool turns on when its
  stage opens, and not before. The workshop's law file points here
  rather than restating it.
- **2026-07 — THE ENTRY CONTRACT**
  ([D-064](../record/DECISIONS.md#d-064--the-box-master-class-and-setup-entry-contract),
  [#244](https://github.com/wsher0901/roam/pull/244)). SETUP
  COMPRESSES to a replication spec under the five-field shape
  above. This lands in the same decision that founds the box-master
  class, and the pairing is the point — the class needed a values
  home, and giving it one required SETUP to become mechanically
  uniform first.
- **2026-07 — SETUP is named the VALUES HOME**
  ([D-065](../record/DECISIONS.md#d-065--the-box-master-diet)
  clause 3,
  [#246](https://github.com/wsher0901/roam/pull/246)). A box
  master carries standing rules, invariants and pointers;
  procedures stay in their repo homes; and values live HERE. The
  same decision moves the connector ladder OUT of the cockpit
  charter and into [HOME](../HOME.md), which is the same principle
  applied to prose.

## Where it stands

Live, contracted, and load-bearing for a class of files that did
not exist when it was built.

**On the census cell.** It is not contradicted — it is
INCOMPLETE, and in a way worth naming: it describes SETUP as a
container ("stack, configs, staged tooling") at a moment when
SETUP had just been given a SHAPE and a DUTY. The cell's own
confidence column says *medium — a shared file; only the inventory
thread is claimed here*, and that caveat is the honest part. This
story keeps to the inventory thread as the census flags require;
the Models-and-effort thread running through the same file belongs
to the hands doctrine on Shelf II, and is deliberately not told
here.

What is NOT verifiable from the repo: whether the VERIFY probes
actually get run. The contract requires each entry to carry one,
and nothing in CI executes them — they are a discipline offered to
a human at a keyboard, not a gate. An entry whose probe silently
stopped working would read exactly like one whose probe passes.

## Sources

Down-links only.

- [SETUP](../SETUP.md) — the file, its entry contract, and its
  five sections.
- [D-064](../record/DECISIONS.md#d-064--the-box-master-class-and-setup-entry-contract)
  — the entry contract, and the class it arrives with.
- [D-065](../record/DECISIONS.md#d-065--the-box-master-diet) —
  clause 3, naming SETUP the values home.
- [D-030](../record/DECISIONS.md#d-030--setup-consolidation) —
  the consolidation and the retirements.
- [the setup-recut bench](../record/history/workshop/definition/setup-recut.md)
  · [#244](https://github.com/wsher0901/roam/pull/244) ·
  [the box-master bench](../record/history/workshop/definition/box-masters.md)
  · [#242](https://github.com/wsher0901/roam/pull/242).
- [machine-setup](../skills/machine-setup.md) — the per-machine
  procedure SETUP points at rather than carries.
- [LAWS §Equipment & stage-gated tooling](../LAWS.md#equipment--stage-gated-tooling)
  — the never-stockpile rule as it loads into every session.
