---
type: spec
id: charter-cockpit-assumption
title: The charter assumes its successor and predecessor are always cockpits
status: open
stage: workshop
branch: fix/charter-cockpit-assumption
pr: —
opened: 2026-08-05
shipped: —
---

# charter-cockpit-assumption — teaching the charter that a desk exists

**Links:** [the charter](../../COCKPIT-CHARTER.md) ·
[D-051](../DECISIONS.md#d-051--self-seat-birth) ·
[D-046](../DECISIONS.md#d-046--flight-cockpit-the-control-tower-online) ·
[D-064](../DECISIONS.md#d-064--the-box-master-class-and-setup-entry-contract) ·
[D-065](../DECISIONS.md#d-065--the-box-master-diet) ·
[D-075](../DECISIONS.md#d-075--the-self-seat-duty-gains-a-live-desk-case) ·
[the summon test's record](../probes/summon-test.md)

## Goal

The [cockpit charter](../../COCKPIT-CHARTER.md) takes its successor
and its predecessor to always be COCKPITS. Every seat that reads it
therefore has no case for the commonest state this workshop is
actually in: **a live control tower at a desk**. FOUR of the five
findings this bench repairs are that one assumption; the fifth (a
newborn cockpit is never routed to its git-identity step) is an
unrelated gap, fixed alongside them because every separate charter
merge opens another manual re-save window. One **v5** edit, plus one
workflow edit that is deliberately NOT part of the version bump.

THE 🔴 IS NOT HYPOTHETICAL. The summoned cockpit of 2026-08-05
reported that rule 1, read literally, told it to seat itself and
take a working desk's baton, and that it refused ONLY because that
board carried a warning hand-written before the fire. The warning
was a one-off; it lives in no ritual, so the next fire does not get
one.

## Out of scope

- **NO DOCTRINE BEYOND THE ONE AMENDMENT.**
  [D-075](../DECISIONS.md#d-075--the-self-seat-duty-gains-a-live-desk-case)
  amends [D-051](../DECISIONS.md#d-051--self-seat-birth)'s clause (2)
  and nothing else; every other edit here merely makes the charter
  AGREE with law that already exists, chiefly the baton law
  ([D-046](../DECISIONS.md#d-046--flight-cockpit-the-control-tower-online)).
  The bench opened believing NO decision was needed and was corrected
  by its own sweep — see § Why this IS a decision, which keeps that
  correction rather than hiding it.
- **The box re-save is NOT this bench's act.** It is the founder's,
  it happens at claude.ai/code/routines, and it rides
  [DASHBOARD](../../DASHBOARD.md) Needs-you from the moment this
  merges until it is done
  ([D-064](../DECISIONS.md#d-064--the-box-master-class-and-setup-entry-contract)).
- **No charter recut.** Rules not named below are left byte-identical.
  The [box-master diet](../DECISIONS.md#d-065--the-box-master-diet)
  forbids growing this file with procedure; every addition here is a
  RULE or a POINTER, never a how-to.
- **No fix for the session-start hook** (the cloud seat is never
  synced). Related, separately filed, and a different file.

## Plan

### 1 · Charter rule 1 — the third case, and a speakable stray-birth line

Rule 1's SELF-SEAT clause fires when the board "names no live
cockpit". A board reading `CONTROL TOWER — work PC` names none, and
the stray-birth clause beside it triggers only on a "FOREIGN live
cockpit" — so a live desk falls through the gap into SELF-SEAT.

Recut the clause to THREE cases, keyed on THE BATON section:

1. `self-seat pending`, or no live baton-holder of any kind →
   self-seat as today.
2. **A LIVE BATON-HOLDER THAT IS NOT A COCKPIT** (a control tower at
   a desk) → HOLD AND REPORT. Seat nothing, supersede nothing, write
   nothing. Say what you are and what you found.
3. A FOREIGN live cockpit → stray birth, as today.

And make the stray-birth sentence SPEAKABLE against a seat with no
url: it currently hardcodes `<its url>`, which a desk does not have.
Name the live seat AS THE BOARD NAMES IT, url only when the board
carries one.

### 2 · Charter rule 1 — route the newborn to its identity step

A cloud seat boots as `Claude <noreply@anthropic.com>` and must set
a repo-local identity before its first commit
([machine-setup](../../skills/machine-setup.md), which says ONCE PER
SEAT BIRTH). A cockpit reads the charter, not machine-setup, so
nothing routes it there. Add the pointer to the FIRST ACT — a
pointer, not the procedure.

### 3 · Charter rule 8 — a tombstone that does not lie

Rule 8's final message promises "a replacement cockpit has been
summoned and will greet you; the board carries its link". Under a
DESK TAKEOVER no such cockpit exists. Flight 3's retiring seat
refused to speak it, correctly. Make the successor sentence
conditional on what the board actually says, and give the SUCCESSOR
DUTY a reading when the successor is a desk (it has none today).

### 4 · `summon.yml` — stop asserting a supersession

`.github/workflows/summon.yml` hardcodes "You supersede the previous
cockpit" into every payload, so rule 8's successor duty orders a
newborn seat to repaint a predecessor that does not exist. Drop the
claim; the board already rules on supersession
([D-051](../DECISIONS.md#d-051--self-seat-birth)).

**THIS IS NOT A CHARTER EDIT.** It must not be bumped into v5 and
must not wait on the box re-save — a one-line YAML fix parked behind
a manual paste is exactly the silent-failure shape this workshop
keeps finding.

### 5 · Version history + the full copy

Add the v5 row. Then, per the charter's own FULL COPY law, THE GATE
REPORT PRINTS THE COMPLETE NEW CHARTER TEXT for the box paste —
never a diff, never "go find it".

### 6 · Rehome the summon measurement

The summon test's seven-moment ignition timeline is parked on the
board with no record home. This bench is already in that machinery,
so it takes it: a short `docs/record/probes/summon-test.md` carrying
the timeline, the not-blind finding, and the "workflow was not
unflown" correction. The board's parked block and its inbox line
then point there and shrink.

## Done means

- [x] Rule 1 has THREE cases and a live desk falls into the second;
      the case is keyed on the BATON section, not on the word
      "cockpit".
- [x] The stray-birth sentence is speakable against a seat with no
      session url.
- [x] Rule 1's first act routes the seat to its git-identity step as
      a POINTER, not a procedure.
- [x] Rule 8's tombstone no longer promises a successor cockpit that
      a desk takeover never summons, and the SUCCESSOR DUTY has a
      reading when the successor is a desk.
- [x] `.github/workflows/summon.yml` no longer asserts a
      supersession, and neither the version bump nor the re-save
      depends on that edit.
- [x] The charter carries a **v5** version-history row, and every
      rule not named above is BYTE-IDENTICAL — proved by reading the
      diff, not by assertion.
- [x] [D-075](../DECISIONS.md#d-075--the-self-seat-duty-gains-a-live-desk-case)
      exists, its Affects line matches the edits actually made, and
      every file it names is changed in this PR.
- [x] `docs/record/probes/summon-test.md` exists and holds the
      measurement, and its inbox line closes. THE BOARD'S PARKED
      BLOCK SHRINKS AT SHIP'S TAIL, not on this branch — the board
      is repainted by rituals and never hand-edited, so a task
      branch may not touch it.
- [ ] THE GATE REPORT PRINTS THE COMPLETE NEW CHARTER TEXT for the
      box paste (the FULL COPY law), and the board gains a Needs-you
      line for the re-save the moment this merges. **UNTICKED ON
      PURPOSE:** both happen OFF this branch — the print rides the
      gate report, the Needs-you line rides ship's tail — so ticking
      it here would be a claim the branch cannot support.
- [x] The verification loop is green and the PUSHED head's Actions
      run is green.

## Why this IS a decision — the note above was wrong, and the sweep is what corrected it

**This section replaces a "why this is not a decision" note written
at bench birth. It was wrong, and the correction is recorded rather
than quietly swapped.**

The birth reasoning was: every edit merely makes the charter agree
with doctrine that already exists in a higher home — the baton law
([D-046](../DECISIONS.md#d-046--flight-cockpit-the-control-tower-online))
names the desk a commanding seat, and
[D-051](../DECISIONS.md#d-051--self-seat-birth) makes the board the
arbiter of whether a live seat exists — so the charter was simply
behind, and a repair that removes a contradiction is not a new
convention. Charter v2 and v4 were cited as precedent, both having
followed a change made elsewhere.

**THE SWEEP KILLED IT.** Grepping the destination rather than the
phrasings turned up
[D-051](../DECISIONS.md#d-051--self-seat-birth)'s own clause (2),
which reads: *"a cockpit finding 'self-seat pending' — or no live
cockpit — on the board repaints it seating itself"*. The two-case
blind spot is not the charter drifting from the decision; IT IS THE
DECISION. Adding a third case amends a standing choice, which is
exactly what [decide](../../skills/decide.md) exists for, and it
runs UNASKED.

[D-075](../DECISIONS.md#d-075--the-self-seat-duty-gains-a-live-desk-case)
is that entry, landed with its ripple in one commit. The general
lesson is worth more than this bench: **a document repair that
contradicts nothing may still be a decision, if the thing it
contradicts turns out to live in a D-number.** Checking the prose
was not enough; only the sweep found it.

## Notes for whoever resumes this bench

The charter is a FENCED MASTER. Edit it here via PR; never edit the
routine box directly, and never let this file and the box drift
without the re-save riding Needs-you. If you find yourself adding a
procedure to it, stop — the diet says rules, invariants and pointers
only.
