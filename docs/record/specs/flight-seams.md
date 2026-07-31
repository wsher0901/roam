---
type: spec
id: flight-seams
title: Baton renderings single-homed (D-070)
status: shipped
stage: workshop
branch: docs/flight-seams
pr: 257
opened: 2026-07-31
shipped: 2026-07-31
---

# flight-seams — one case table, and the flight path repaired

**Links:** [handoff §4](../../skills/handoff.md) (the board spec,
which gains the table) · [liftoff](../../skills/liftoff.md) ·
[land](../../skills/land.md) · [pickup](../../skills/pickup.md)
(the three writers) · source: the founder's approved audit, Web
ops chat 2026-07-31.

## Goal

[D-067](../DECISIONS.md#d-067--the-report-skeleton-and-the-board-diet)
made each ritual paint its own BATON case and called the wording
law — but it left the wordings in four files. They drifted, and
two of them now contradict each other on the same board line:

- **LIFTOFF PAINTS A URL IT CANNOT KNOW.** Its BATON line reads
  "COCKPIT — live since &lt;t&gt; (liftoff) · &lt;url&gt;", while
  its own IN FLIGHT row three paragraphs earlier says "self-seat
  pending" — because
  [D-051](../DECISIONS.md#d-051--self-seat-birth) made the fire
  BLIND. One of the two is written from a value that does not
  exist yet.
- **MODE P PAINTS TWO DIFFERENT LINES.** land §(d) writes "no
  live cockpit — grounded for local pickup &lt;date&gt;" and
  §(e) writes "No live seat — LANDED &lt;t&gt; via MANUAL-LAND ·
  awaiting next pickup" — for the same landing. Pickup's
  fleet-resume trigger keys on the FIRST string, so a board
  painted by §(e) silently fails to offer the resume.

THE FIX IS ONE HOME: every rendering lives in a CASE TABLE at
[handoff §4](../../skills/handoff.md)'s BATON bullet — one row per
case, exact wording, naming its writer. The three writers cite
their cases and keep one line of local context each.

Five smaller seams ride along, all found in the same audit: the
daily cap is hard-coded in two rituals, pickup and ship never say
who may run them, the desk takeover's two board writes have no
stated order, ship's tail does not say which board sections it
carries forward, and recall's routing table has no chronicle door.

## Out of scope

- **Any master's fence.** A sweep hit inside one STOPS the bench
  and is reported, never edited.
- **[LAWS](../../LAWS.md), [HOME](../../HOME.md), the board.** No
  edits; a swept citation only if the grep proves one.
- **Changing any ritual's BEHAVIOUR** — only what it writes, and
  where that wording is defined.

## Plan

1. Bench birth: branch, this spec, memory stub, draft PR.
2. [decide](../../skills/decide.md) for D-070, short heading per
   [D-068](../DECISIONS.md#d-068--the-short-anchor-law).
3. [handoff §4](../../skills/handoff.md): the BATON bullet becomes
   THE CASE TABLE — one row per case, exact wording, writer
   named.
4. Repoint the three writers; delete every local "wording is law"
   duplicate. The fire-time case becomes "COCKPIT — fired
   &lt;t&gt; (liftoff) · self-seat pending"; MODE P's two
   renderings collapse into one.
5. Re-key pickup's fleet-resume trigger on the fleet-at-ground
   table's PRESENCE plus the grounded marker, never a competing
   string.
6. Cap de-hardcode in pickup §5 and liftoff §2; count:runs
   mechanics and the ask-on-failure rule stay verbatim.
7. Headers: pickup and ship declare baton-holder-only; verify the
   stub and the procedure mirror.
8. [ship §8](../../skills/ship.md): one clause naming the
   carried-forward sections. [recall §1](../../skills/recall.md):
   the chronicle door.
9. THE SWEEP by destination-grep for every renamed anchor; frozen
   shelves pointer-only, named in the memory.
10. Verification loop, full CI mirror, Actions green, ship §6
    critic; ship to THE GATE. Tower-authored — external Web review
    precedes the founder's word.

## Done means

- [x] D-070 exists in the D-068 format, with Decision · Why ·
      Alternatives rejected · Affects.
- [x] handoff §4's BATON bullet carries EVERY case with exact
      wording and a named writer each — the liftoff fire, the
      cockpit's self-seat, both land MODE R cases, MODE P, the
      plain claim, and the takeover's two ordered writes.
- [x] liftoff, land and pickup CITE their cases; no "wording is
      law" wording block survives outside the table.
- [x] THE URL CONTRADICTION IS GONE: liftoff's baton line no
      longer contains a url, and one line states that a blind fire
      cannot know one.
- [x] MODE P PAINTS ONE LINE, cited identically by land §(d) and
      §(e).
- [x] Pickup's fleet-resume trigger keys on the fleet-at-ground
      table's presence + the grounded marker — verified to match
      what land MODE P actually writes.
- [x] No hard-coded daily cap survives in pickup or liftoff; the
      count:runs mechanics and the ask-on-script-failure rule are
      unchanged.
- [x] pickup and ship both open with the baton-holder-only line,
      and each stub mirrors its procedure.
- [x] The desk takeover's two board writes carry their ordering
      sentence.
- [x] ship §8 names the carried-forward sections; recall §1 has
      the chronicle door.
- [x] THE SWEEP PROVEN: `check:links` green AND a destination-grep
      re-run returning zero over living files. No hit inside a
      master fence (or it is reported, not edited).
- [x] `check:links` · `check:ledger` · `check:memory` · lint ·
      format · test · build green; Actions green on the pushed
      head; ship §6 critic run.

## Deviations

1. **The desk-takeover branch needed a WRITER, not just a
   trigger.** The critic found that a fleet fenced by a superseded
   cockpit never gets a fleet-at-ground table or a grounded
   marker at all — [land Scenario 2](../../skills/land.md)'s
   carve-out has that cockpit write NO board — so the re-keyed
   trigger could not fire for it, and the lanes would sit
   findable but unoffered. [pickup §6](../../skills/pickup.md)
   step 3 now names THE DESK as the writer of that board material,
   at the first repaint that finds the fences pushed. This is
   slightly beyond "only what a ritual writes, and where the
   wording is defined" — it assigns a write that had no owner —
   but leaving it would have shipped the exact stall this bench
   set out to remove.
2. **The cockpit charter cannot cite the table back.** Its rule 1
   is the writer of the self-seat case, and it is a fenced master
   this bench may not edit. The table now states the deferral and
   why the two stay in step: rule 1 sends the cockpit to READ
   THE BATON, and a future change to that wording is a charter
   version bump, not a table edit alone. Reported rather than
   silently deferred.

## Open questions

None at birth. Where two existing wordings conflict, the mandate
names the survivor; anything it does not name stays as written.
