---
type: spec
id: home-knowledge
title: HOME closes the leg's knowledge layer — the routing table, one day in the workshop, the board paragraph recut, a stable Sessions anchor
status: open
stage: workshop
branch: docs/home-knowledge
opened: 2026-07-13
---
# home-knowledge — HOME closes the leg's knowledge layer: the routing table, one day in the workshop, the board paragraph recut, a stable Sessions anchor

**Links:**
[HOME](../HOME.md) ·
[handoff](../skills/handoff.md) ·
Decisions:
[D-036](../DECISIONS.md#d-036--2026-07--information-routing--one-home-per-class-append-vs-upsert-home-carries-the-table-sessions-anchor-stabilized)

## Goal
[HOME](../HOME.md) answers "where does information go" in one table
and "what does a day look like" in one story; its old board
paragraph collapses into pointers; the board's Sessions anchor
becomes repaint-stable.

## Out of scope
- HOME's full Law-2 restyle — explicitly deferred to the leg-end
  sweep: a 900-line surgical restyle cannot be byte-verified inside
  this PR; the ratchet is bent knowingly and the sweep owns it.
- [LAWS](../LAWS.md) (next block).
- Any portraits/Terms content beyond the named edits.

## Plan
1. Bench birth: branch docs/home-knowledge → this spec + memory
   stub → draft PR.
2. Run [decide](../skills/decide.md)
   ([D-036](../DECISIONS.md#d-036--2026-07--information-routing--one-home-per-class-append-vs-upsert-home-carries-the-table-sessions-anchor-stabilized)):
   entry + ripple in the same commit — [handoff](../skills/handoff.md)
   §4's Sessions bullet gains the plain-header rule; [HOME](../HOME.md)
   gains §Where information goes (after §Reading the board) and
   §One day in the workshop (after the start-here table); the old
   board paragraph becomes the two-pointer version; grep-derived
   renames of any leftover v1 section names.
3. Verify (below) · [ship](../skills/ship.md) to THE GATE — no
   merge; founder approval follows external review.

## Done means
- [x] Both new sections landed verbatim (routing table: 17 "| "
      lines — header + 16 classes, per the brief's derivation)
- [x] The board paragraph is the two-pointer version
- [x] handoff §4 carries the plain-header rule
- [x] check-links green (1360 links, 0 broken)
- [x] Lint + tests green

## Open questions
none
