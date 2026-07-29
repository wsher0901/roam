---
type: memory
id: box-masters
updated: 2026-07-29 10:41 · ship · work PC
---
# box-masters — every external box gets its own master file

## Status

complete, awaiting merge — 2026-07-29, work PC. D-064 is minted,
both masters are extracted, SETUP carries pointer lines in their
place, and the sweep is done. BOTH EXTRACTIONS ARE PROVEN
BYTE-IDENTICAL, not asserted: the charter's fence is 9,819 bytes
in and 9,819 bytes out with a zero-line diff, and the lane-worker
fence diffs clean the same way — the proof method is in the story
so a reviewer can re-run it. Full CI mirror green. Awaiting the
external Web review, then the founder's word.

## What this task is

[WEB-INSTRUCTIONS](../WEB-INSTRUCTIONS.md) proved a shape; this
bench makes it a CLASS. Every external-box master becomes its own
top-level file carrying its own laws, one fenced master, and a
version history — and the two masters still buried in
[SETUP](../SETUP.md) move out verbatim. The SETUP ENTRY CONTRACT
(WHAT · WHERE · VALUES · VERIFY · SOURCE) is decided here and
EXECUTED by the follow-up bench. Contract:
[the spec](../record/specs/box-masters.md).

## Pending issues

- Tower-authored, so
  [no-solo-approval](../LAWS.md#workflow-non-negotiable) requires
  an external Web review before the founder's word at THE GATE. DO
  NOT MERGE.

## Left / idle

nothing parked. Bench 2 — SETUP's compression under the entry
contract, the clerk record's move to the record shelf, the
cockpit WHY's move to [HOME](../HOME.md) — is the founder's next
call, not a park.

## The story

Born 2026-07-29 at the work PC, the sitting after
[the v6 rewrite](../record/history/workshop/definition/web-instructions-v6.md)
shipped. That bench is why this one exists: it gave a box-master
its own file, its own laws, and a version history, and the shape
worked well enough that the two masters still living inside
[SETUP](../SETUP.md) became the obvious next move.

### How the verbatim move was PROVEN, not asserted

The [#80](https://github.com/wsher0901/roam/pull/80) precedent
says flag any gap and never reconstruct — but on an extraction
the stronger obligation is to SHOW the text did not change.
Neither fence was retyped from reading: each was compared
mechanically against `HEAD`'s copy before the commit, extracting
both by FENCE BOUNDARY rather than by a text range, and diffing.

That distinction mattered. The first comparison used a line-range
match (`/^You are the Roam Flight Cockpit/,/session_}$/`) and
produced a 150-line phantom diff — because the phone-bootstrap
paste in SETUP ALSO begins "You are the Roam Flight Cockpit", so
the range ran past the charter's end and swallowed half the file.
The range was wrong, not the extraction. Re-done by fence
boundary: **9,819 bytes in, 9,819 bytes out, identical.** The
lane-worker fence diffs clean by the same method. A reviewer can
re-run both from `git show HEAD~n:docs/SETUP.md`.

### What moved, and what deliberately did not

Both new files carry the four class elements: header laws in
prose (box-is-a-copy · re-save after any edit · FULL COPY,
ALWAYS), one fenced master, a one-row version history, and a
Sources block. The version-history rows are honest about their
own provenance — v1 is an EXTRACTION, and the prior evolution
lives in SETUP's git history rather than being invented as
retroactive rows.

The charter's internal pointer to SETUP's dependency map (R3's
"the dependency map in SETUP §cloud accounts") STAYS AS-IS this
bench, per the mandate. It is still correct: the map is a WHY,
and the WHY is exactly what bench 2 moves.

### Every file touched

- **Born:** [COCKPIT-CHARTER.md](../COCKPIT-CHARTER.md) ·
  [LANE-WORKER.md](../LANE-WORKER.md).
- **[SETUP](../SETUP.md)** — both embedded master blocks removed
  (37 lines and 174 lines), one pointer line each in their place;
  every wiring fact kept; five internal references repointed
  (the lane-worker's saved-prompt line, the cockpit birth-prompt
  composition, the routine's saved-prompt line, the `--cloud`
  command shape, the dependency map's charter cross-reference);
  the PHONE BOOTSTRAP paste now tells a cockpit to read
  `docs/COCKPIT-CHARTER.md` rather than hunt SETUP for a master
  that is no longer there — that one is a live instruction, so a
  stale pointer inside it would have been a silent failure at the
  worst moment.
- **[DECISIONS](../record/DECISIONS.md)** — D-064 appended.
- **The sweep, pointer edits only:**
  [liftoff](../skills/liftoff.md) (the birth-prompt line, the
  self-rescue procedure pointer, the Sources block) ·
  [land](../skills/land.md) (Sources) ·
  [parallel-lanes](../skills/parallel-lanes.md) (the ack-token
  copy list, the lane-worker saved-prompt line) ·
  [HOME](../HOME.md) (the cockpit Term's charter pointer) ·
  [ATLAS](../ATLAS.md) (diagram 3's standing-job box link) ·
  `scripts/fire.mjs` (the fallback comment naming where the
  manual charter paste lives).
- **HOME's file catalog gained TWO ROWS** — see Deviations: not
  a pointer edit, and disclosed as such.

### What was left alone on purpose

THE FROZEN RECORD. `record/specs/**` and the existing DECISIONS
entries cite the masters' old home dozens of times, and every one
of those citations was TRUE WHEN WRITTEN. Append-only governs
meaning
([D-057](../record/DECISIONS.md#d-057--2026-07--the-record-shelf--the-frozen-record-moves-under-one-roof-docsrecord-is-born-history--specs--decisions-in-memory-stays-living-at-root-the-enabling-ruling--a-mechanical-link-path-segment-repair-inside-a-frozen-file-is-maintenance-not-a-content-edit-append-only-governs-meaning-not-bytes-intra-record-links-resolve-by-construction-upholds-append-only-one-home-and-the-weave-rule)),
and these are not broken links — `SETUP §cloud accounts` still
exists and still holds the wiring those entries were describing.
Repointing them would rewrite history to match the present.

THE RETIRED CLERK's two "charter master above/below" references
also stay: they point at the CLERK charter, which is still in
SETUP as retired record and does not move until bench 2.

## Where to look

- [the spec](../record/specs/box-masters.md) — the contract.
- [WEB-INSTRUCTIONS](../WEB-INSTRUCTIONS.md) — the pattern.
- [SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
  — where both masters live until this bench moves them.
- the Web ops chat, 2026-07-29 — where the SETUP recut was
  planned and approved.
