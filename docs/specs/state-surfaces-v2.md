---
type: spec
id: state-surfaces-v2
title: State surfaces v2 — the board learns the founder's names; pickup becomes the sit-down summary; welds stamp time and write the ledger
status: shipped
stage: workshop
branch: docs/state-surfaces-v2
pr: 110
opened: 2026-07-13
shipped: 2026-07-13
---
# state-surfaces-v2 — State surfaces v2: the board learns the founder's names; pickup becomes the sit-down summary; welds stamp time and write the ledger

**Links:**
[handoff](../skills/handoff.md) ·
[pickup](../skills/pickup.md) ·
[liftoff](../skills/liftoff.md) ·
[ship](../skills/ship.md) ·
[history/README](../history/README.md) ·
[HOME](../HOME.md) ·
Decisions:
[D-035](../DECISIONS.md#d-035--2026-07--state-surfaces-v2--sessions-table-with-a-type-column-sentence-first-needs-you-verbatim-chat-titles-welds-stamp-time-and-write-the-ledger-handoff-4-is-the-single-board-spec-amends-d-024s-surface-extends-d-029)

## Goal
[handoff](../skills/handoff.md) §4 becomes the single board spec
encoding the approved v2c shape (Sessions table with a type column
· sentence-first Needs-you · verbatim chat titles · datetime
Shipped · legends re-homed); [pickup](../skills/pickup.md) §5
becomes the since-you-left summary; welds stamp time and append the
chronological ledger; [HOME](../HOME.md) teaches how to read the
board. The PR edits SPECS only — DASHBOARD.md itself is repainted
by this PR's own ship-tail, first act under the new law.

## Out of scope
- DASHBOARD.md direct edits (the tail repaints it post-merge).
- LAWS (next leg item).
- [HOME](../HOME.md) beyond the one new section.
- The memory [TEMPLATE](../memory/TEMPLATE.md).
- Any backfill of time into frozen story frontmatter.

## Plan
1. Bench birth: branch docs/state-surfaces-v2 → this spec + memory
   stub → draft PR.
2. Run [decide](../skills/decide.md)
   ([D-035](../DECISIONS.md#d-035--2026-07--state-surfaces-v2--sessions-table-with-a-type-column-sentence-first-needs-you-verbatim-chat-titles-welds-stamp-time-and-write-the-ledger-handoff-4-is-the-single-board-spec-amends-d-024s-surface-extends-d-029)):
   entry + ripple in the same commit — payload A overwrites
   [handoff](../skills/handoff.md), payload B overwrites
   [pickup](../skills/pickup.md), five surgical edits
   ([liftoff](../skills/liftoff.md) §6 · [ship](../skills/ship.md)
   §7 ×2 + §8 · [HOME](../HOME.md) §Reading the board insert), the
   [ledger](../history/README.md#the-ledger) appended and seeded by
   derivation from history/** frontmatter.
3. Verify (below) · [ship](../skills/ship.md) to THE GATE — no
   merge; founder approval follows external review. Tail rider on
   approval: the repaint runs per the NEW handoff §4.

## Done means
- [x] Both payloads byte-match
- [x] The five surgical edits landed
- [x] The ledger exists and its seeded line count equals the story
      count under history/** (51 = 51)
- [x] check-links green (1320 links, 0 broken)
- [x] Lint + tests green

## Open questions
none
