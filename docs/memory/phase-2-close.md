---
type: memory
id: phase-2-close
updated: 2026-08-06 19:35 UTC · ruled; waiting on the welds · work PC
---

# phase-2-close — the vault, and what closing it actually requires

## Status

in progress — 2026-08-06

Step 5 of the closing campaign, under
[D-079](../record/DECISIONS.md#d-079--the-closing-campaigns-advance-word)'s
advance word.

## What this task is

The census reaches 66 of 66 WRITTEN, a closing D-number is written,
the board is repainted and phase 3 is named NEXT. Contract:
[the spec](../record/specs/phase-2-close.md).

## Pending issues

None. The polish-pass question is RULED (below); what remains is the
six census welds, which are the campaign's step 2 and not this
bench's to perform.

## Left / idle

`vault-connections` — the connections-and-content pass, carved out
of phase 2 by
[D-081](../record/DECISIONS.md#d-081--phase-2-closes-the-polish-pass-is-split-out-not-dropped)
and deliberately NOT run here. It is scope, it has a name, and its
shape gets re-derived against the 66 stories that now exist.

## The story

2026-08-06 18:45 UTC · BORN BLOCKED, AND THAT IS THE POINT · work PC

**THIS BENCH'S FIRST ACT WAS TO REFUSE ITS OWN INSTRUCTION.** The
campaign's step 5 reads "census 66/66 WRITTEN, closing D-number,
board repainted, phase 3 named NEXT" — four mechanical acts. Three
of them are mechanical. The closing D-number is not, because
**phase 2 has two halves and the campaign can only finish one.**

The check that caught it was the verification law's plainest
clause: before calling anything done, open the record rather than
the note that claims it. The record is
[D-060](../record/DECISIONS.md#d-060--the-three-phase-standing-order),
one sentence long on this point — *"Chronicle story lanes plus a
connections-and-content polish pass"* — and the board, repainted by
ritual, saying the polish pass **has not started**.

**Writing the closing entry on the stories alone would have made
the record say phase 2 finished as specified.** It would have been
green, gate-clean, and false in the one place a future reader
trusts most.

2026-08-06 19:35 UTC · RULED — SPLIT OUT, NOT DROPPED · work PC

**The founder took the third option**, and the wording of the ruling
is the part worth keeping: *"split out by decision as a successor
bench, never silently dropped."* Not run, not folded.
[D-081](../record/DECISIONS.md#d-081--phase-2-closes-the-polish-pass-is-split-out-not-dropped)
records it: phase 2 closes on 66/66 plus the campaign's patches, the
pass becomes `vault-connections`, and D-060's pause on
[V1.S1](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
T3–T6 and
[V1.S2.T5](../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
lifts, which is what makes **phase 3 NEXT** rather than merely
unblocked.

**THE THREE OPTIONS WERE NOT EQUALLY HONEST, AND THAT IS WHY THE
QUESTION WAS WORTH ASKING.** Folding would have been the cheapest
and the only one that lies: it asserts the fleet's 63 stories
already did the pass, which nobody measured. Running it would have
been faithful to D-060's text and unfaithful to its purpose — the
pass was scoped when `docs/chronicle/` held one file and no stories,
so "polish" then and "polish" now are different questions wearing
one name. Splitting it out is the only answer that leaves the record
saying exactly what happened.

**What this bench actually produced is a name.** Before the ruling
the polish pass existed only as a clause inside another decision's
sentence — the easiest kind of thing to lose, because nothing points
at it and no surface goes red when it vanishes. It now has a
D-number, a slug, and a stated non-dependency on phase 3.

## Where to look

- [the spec](../record/specs/phase-2-close.md) — the blocking
  question, the exact census arithmetic, and what stays out.
- [D-060](../record/DECISIONS.md#d-060--the-three-phase-standing-order)
  — the phase's own two-half definition.
- [the census](../chronicle/INDEX.md) — 66 rows; the count is read,
  never typed.
