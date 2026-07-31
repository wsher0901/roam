---
type: spec
id: laws-home-groom
title: The law register and the manual groom (D-069)
status: open
stage: workshop
branch: docs/laws-home-groom
pr: 255
opened: 2026-07-31
shipped: —
---

# laws-home-groom — the register recut and the manual groom

**Links:** [LAWS](../../LAWS.md) (the file being recut) ·
[HOME](../../HOME.md) (the manual being groomed) ·
[decide](../../skills/decide.md) (gains a ripple line) · source:
the founder's approval, Web ops chat 2026-07-31.

## Goal

LAWS is loaded into every session, so its length is a per-session
tax. It had drifted from a REGISTER into prose: several laws run
as paragraphs that re-explain mechanics living in a skill, and the
verification command list is quoted in full where its one home is
[ship](../../skills/ship.md).

THE REGISTER SHAPE: every law renders as **NAME** → the rule in
one to three plain sentences → one pointer to its mechanics and
its D-number. Meaning preserved exactly; length compressed.

Three laws are minted, each already practised but never written:

- **THE VERIFICATION LAW** — nothing unrecorded may be dropped,
  and no status may be asserted without the record confirming it.
  Verify before drop, verify before classify.
- **THE SWEEP LAW** — any pointer or citation sweep greps the
  DESTINATION, never predicted phrasings; the proof of a sweep is
  a re-run returning zero.
- **THE BOX-MASTER LINE** — the class exists in law: a box master
  is its own top-level file carrying rules, invariants and
  pointers; the box is a copy; edits ride PRs; the re-save rides
  Needs-you.

The founder's touchpoints go from two to three — the review word
was already law under no-solo-approval but was never counted as a
touchpoint. And "dispatch" gives way to "delegation" throughout,
because the phone feature owns the other word.

HOME grooms in the same PR: its two overlapping day sections
merge, §Terms gains six rows for vocabulary the workshop already
uses, and §Reading the board stops duplicating the board spec.

## Out of scope

- **Any master's fence.** If a sweep hit lands inside one, STOP
  and report it — nothing there is edited.
- **The other LAWS sections.** §What we're building · §Who you're
  working with · §Task anatomy · §Safety · §Self-improvement ·
  §Tech stack · §Equipment are untouched except where the
  vocabulary sweep reaches them.
- **The board.** No repaint; a swept citation only if the grep
  proves one.

## Plan

1. Bench birth: branch, this spec, memory stub, draft PR.
2. [decide](../../skills/decide.md) for D-069, short heading per
   [D-068](../DECISIONS.md#d-068--the-short-anchor-law).
3. [LAWS](../../LAWS.md): the register recut — §Workflow and
   §Parallel lanes & cloud re-formed; the three new laws land in
   §Knowledge & tracking; §The two touchpoints becomes §The three
   touchpoints; the dispatch→delegation sweep; the verification
   fence becomes a pointer.
4. [ship](../../skills/ship.md), CONDITIONALLY: if §1's preflight
   does not already carry the literal command list, it is added
   there FIRST — the content must have a home before the fence
   dies.
5. [HOME](../../HOME.md): the two day sections merge into one;
   §Terms gains six rows; §Reading the board compresses to
   reading keys plus the [handoff §4](../../skills/handoff.md)
   pointer; the touchpoints restatements go to three; the
   vocabulary sweep.
6. [decide](../../skills/decide.md): the ripple checklist gains
   "new vocabulary minted → a HOME §Terms row in the same PR".
7. THE SWEEP by destination-grep for every renamed or deleted
   anchor. Frozen shelves take pointer-only repairs, named in the
   memory.
8. Verification loop, full CI mirror, Actions green, ship §6
   critic; ship to THE GATE. Tower-authored — external Web review
   precedes the founder's word.

## Done means

- [x] D-069 exists in the D-068 format, with Decision · Why ·
      Alternatives rejected · Affects.
- [x] Every law in §Workflow and §Parallel lanes & cloud renders
      as NAME → 1–3 sentences → pointer.
- [x] THE VERIFICATION LAW APPLIED TO ITS OWN BIRTH: every
      sentence the recut drops is verified present at the
      pointer's target, and each load-bearing nuance (the
      payload-diff rule, the teammate rule, supersession, the
      canary constants) either survives as a sentence or points
      at a verified home. Named in the memory, one by one.
- [x] The three new laws are in §Knowledge & tracking, each with
      its D-number where one exists.
- [x] §The three touchpoints exists, carrying the review word;
      every citation of the old anchor re-points.
- [x] No lane-spawning "dispatch" survives in LAWS or HOME.
- [x] The verification fence is gone from LAWS and its literal
      commands are verified present in
      [ship](../../skills/ship.md).
- [x] HOME carries ONE day section; both old anchors' citations
      re-point.
- [x] §Terms carries the six new rows, each passing the newcomer
      test, each in a fitting subsection.
- [x] §Reading the board keeps the reading keys and points at
      handoff §4 for the map — verified to carry it.
- [x] [decide](../../skills/decide.md) carries the new-vocabulary
      ripple line.
- [x] THE SWEEP PROVEN: `check:links` green AND a re-run of the
      destination grep returns zero. No hit inside a master fence
      (or it is reported, not edited).
- [x] `check:links` · `check:ledger` · `check:memory` · lint ·
      format · test · build green; Actions green on the pushed
      head; ship §6 critic run.

## Deviations

1. **Four files outside the mandate's list were swept** — the
   `.claude/skills/parallel-lanes/SKILL.md` and
   `.claude/skills/pickup/SKILL.md` stubs, and the
   `session-start` and `user-prompt-submit` hooks. Each carried
   the retired "dispatch" vocabulary, and the two stubs MIRROR
   the first line of skills this PR reworded — a stub may not
   drift from its procedure
   ([LAWS §Knowledge & tracking](../../LAWS.md#knowledge--tracking)).
   The hooks inject that vocabulary into every sitting. Leaving
   them would have made the sweep a half-sweep in the same PR
   that mints the sweep law.
2. **LAWS grew rather than shrank.** The recut compressed what it
   touched — §Workflow 731 → 711 words, §Parallel lanes 495 →
   462 — but three new laws landed, so the file went 2,136 →
   2,318 words. Compression was never the goal the verification
   law would trade meaning for.
3. **The sweep's re-run returns zero over LIVING files only.**
   Seven frozen stories still narrate "the daily loop" and "the
   two touchpoints" as what they were at the time; their LINKS
   are repaired and their prose is not. Stated because the memory
   first claimed a flat zero.

## Open questions

None at birth. Anything the recut cannot verify a home for stays
as a sentence rather than being dropped — the verification law
decides its own edge cases.
