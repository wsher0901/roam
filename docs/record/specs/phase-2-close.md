---
type: spec
id: phase-2-close
title: Close phase 2 — the vault, and what closing it actually requires
status: shipped
stage: workshop
branch: docs/phase-2-close
pr: #340
opened: 2026-08-06
shipped: 2026-08-07
---

# phase-2-close — the vault, and what closing it actually requires

**Links:**
[D-079](../DECISIONS.md#d-079--the-closing-campaigns-advance-word)
(the campaign's advance word) ·
[D-060](../DECISIONS.md#d-060--the-three-phase-standing-order) ·
[D-076](../DECISIONS.md#d-076--phase-2-opens-with-a-three-story-pilot)
· [the census](../../chronicle/INDEX.md) ·
[DASHBOARD](../../DASHBOARD.md)

## Goal

Step 5 of the closing campaign: the census reaches **66 of 66
WRITTEN**, a closing D-number is written, the board is repainted,
and **phase 3 is named NEXT**.

## THE BLOCKING QUESTION — surfaced, then RULED

**RULED 2026-08-06 (the founder, on this bench's `BLOCKED:`
comment): the third option.** The polish pass becomes its own named
bench, `vault-connections` — not run here, and not folded into a
coverage claim. Phase 2 closes on 66/66 plus the campaign's patches,
and the closing entry says so plainly rather than by omission.
Recorded as
[D-081](../DECISIONS.md#d-081--phase-2-closes-the-polish-pass-is-split-out-not-dropped).
The question, as it stood:

**Phase 2 as [D-060](../DECISIONS.md#d-060--the-three-phase-standing-order)
defines it has TWO halves, and only one of them is finishable by
this campaign:**

> **PHASE 2 — THE VAULT.** Chronicle story lanes **plus a
> connections-and-content polish pass.**

The stories close cleanly — the arithmetic is exact:

| source | stories |
|---|---|
| already on main (pilot 3 + slice D 8 + Shelf I 11 + 7 earlier) | 29 |
| Shelf II · [#331](https://github.com/wsher0901/roam/pull/331) | 11 |
| Shelf III A · [#332](https://github.com/wsher0901/roam/pull/332) | 6 |
| Shelf III C · [#334](https://github.com/wsher0901/roam/pull/334) | 7 |
| Shelf III E · [#335](https://github.com/wsher0901/roam/pull/335) | 4 |
| Shelf IV · [#336](https://github.com/wsher0901/roam/pull/336) | 9 |
| **total** | **66 of 66** |

**The polish pass has never started**, and the board says so in
those words. So "close phase 2" is not mechanical: it needs a
founder ruling on the second half — run it, fold it, or drop it.
Choosing on the founder's behalf would be a new decision, which
[D-079](../DECISIONS.md#d-079--the-closing-campaigns-advance-word)
names as a STOP. **It is therefore surfaced here and in this
bench's `BLOCKED:` comment, and nothing in this bench presumes an
answer.**

## Out of scope

- **Running the polish pass.** Ruled out of this bench and into
  `vault-connections` by
  [D-081](../DECISIONS.md#d-081--phase-2-closes-the-polish-pass-is-split-out-not-dropped).
  Specifying that bench is ITS work, not this one's: its shape is
  re-derived against the 66 stories that now exist.
- **Any ROADMAP recut.** [D-060](../DECISIONS.md#d-060--the-three-phase-standing-order)
  rejected expressing the pause structurally: the boxes stay
  unticked and therefore stay truthful. Naming phase 3 NEXT is a
  board and D-number act, not a ROADMAP edit.
- **Any box master's fenced text**, and any behavioral change.

## Plan

1. Wait out the six census welds; verify the census reads 66/66 by
   count, never by claim.
2. On the founder's ruling, write the closing D-number — which must
   record what happened to the polish pass, whatever the answer.
   **Done: [D-081](../DECISIONS.md#d-081--phase-2-closes-the-polish-pass-is-split-out-not-dropped).**
3. Repaint the board by ritual, naming phase 3 NEXT.

## Done means

- [x] `docs/chronicle/INDEX.md` carries 66 rows reading WRITTEN and
      0 PROPOSALS, the count derived at render time, not typed —
      **verified by count on the merged main, not by claim:**
      `grep -c '✍ WRITTEN' docs/chronicle/INDEX.md` returns 66,
      and the census prose retired its own "list of PROPOSED
      stories" sentence at the weld that filled the last row.
- [x] The closing D-number exists and states the polish pass's fate
      explicitly rather than by omission —
      [D-081](../DECISIONS.md#d-081--phase-2-closes-the-polish-pass-is-split-out-not-dropped)
      carves it out as `vault-connections` and says in its own words
      that it is neither run nor folded.
- [x] The board names phase 3 NEXT and carries no stale phase-2 line
      — and the repaint also REPAIRED THE BOARD ITSELF: `The baton`,
      `In flight` and `Working on` each appeared TWICE, because an
      earlier repaint appended where it should have replaced. The
      state surface was contradicting itself in three places.
- [ ] The verification loop is green and the PUSHED head's Actions
      run is green.

## Notes for whoever resumes this bench

The temptation here is to read "census 66/66" as "phase 2 closed"
and write the D-number on that basis. **The census is one half of
the phase's own definition.** A closing entry that never mentions
the polish pass would make the record say the phase finished as
specified, which would not be true.
