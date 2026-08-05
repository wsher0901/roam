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
[the MASTER ITEM](../../IDEAS.md)

## Goal

The [cockpit charter](../../COCKPIT-CHARTER.md) takes its successor
and its predecessor to always be COCKPITS. Every seat that reads it
therefore has no case for the commonest state this workshop is
actually in: **a live control tower at a desk**. Five findings from
two seats are all that one assumption. This bench repairs it in one
**v5** edit, plus one workflow edit that is deliberately NOT part of
the version bump.

THE 🔴 IS NOT HYPOTHETICAL. The summoned cockpit of 2026-08-05
reported that rule 1, read literally, told it to seat itself and
take a working desk's baton, and that it refused ONLY because that
board carried a warning hand-written before the fire. The warning
was a one-off; it lives in no ritual, so the next fire does not get
one.

## Out of scope

- **No new doctrine.** Every edit here makes the charter AGREE with
  law that already exists — the baton law
  ([D-046](../DECISIONS.md#d-046--flight-cockpit-the-control-tower-online)),
  and the board as arbiter of whether a live seat exists
  ([D-051](../DECISIONS.md#d-051--self-seat-birth)). Nothing is
  invented. See § Why this is not a decision.
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

- [ ] Rule 1 has THREE cases and a live desk falls into the second;
      the case is keyed on the BATON section, not on the word
      "cockpit".
- [ ] The stray-birth sentence is speakable against a seat with no
      session url.
- [ ] Rule 1's first act routes the seat to its git-identity step as
      a POINTER, not a procedure.
- [ ] Rule 8's tombstone no longer promises a successor cockpit that
      a desk takeover never summons, and the SUCCESSOR DUTY has a
      reading when the successor is a desk.
- [ ] `.github/workflows/summon.yml` no longer asserts a
      supersession, and neither the version bump nor the re-save
      depends on that edit.
- [ ] The charter carries a **v5** version-history row, and every
      rule not named above is BYTE-IDENTICAL — proved by reading the
      diff, not by assertion.
- [ ] `docs/record/probes/summon-test.md` exists and holds the
      measurement; the board's parked block shrinks to a pointer and
      its inbox line closes.
- [ ] THE GATE REPORT PRINTS THE COMPLETE NEW CHARTER TEXT for the
      box paste (the FULL COPY law), and the board gains a Needs-you
      line for the re-save the moment this merges.
- [ ] The verification loop is green and the PUSHED head's Actions
      run is green.

## Why this is not a decision

[decide](../../skills/decide.md) runs on roadmap-level changes and
standing convention changes. Every edit here makes the charter agree
with doctrine that ALREADY EXISTS in a higher home — the baton law
([D-046](../DECISIONS.md#d-046--flight-cockpit-the-control-tower-online))
says exactly one control tower and names the desk as one; D-051 makes
the board the arbiter of whether a live seat exists. The charter
simply never learned it. A repair that removes a contradiction is not
a new convention, and charter versions v2 and v4 set the precedent:
both followed a change made elsewhere rather than making one.

IF THE FOUNDER READS IT THE OTHER WAY, this note is where to say so
and `decide` runs before the weld.

## Notes for whoever resumes this bench

The charter is a FENCED MASTER. Edit it here via PR; never edit the
routine box directly, and never let this file and the box drift
without the re-save riding Needs-you. If you find yourself adding a
procedure to it, stop — the diet says rules, invariants and pointers
only.
