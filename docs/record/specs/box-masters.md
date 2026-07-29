---
type: spec
id: box-masters
title: The box-master class + the SETUP entry contract (D-064) — bench 1 of the SETUP recut
status: shipped
stage: workshop
branch: docs/box-masters
pr: 242
opened: 2026-07-29
shipped: 2026-07-29 10:31
---

# box-masters — every external box gets its own master file

**Links:**
[WEB-INSTRUCTIONS](../../WEB-INSTRUCTIONS.md) (the pattern being
generalized) · [SETUP](../../SETUP.md) (the file being relieved) ·
[D-063](../DECISIONS.md#d-063--2026-07--response-doctrine-v2--web-instructions-v6--two-channels-sentences-for-the-founder-fenced-blocks-for-machines-process-is-proof-not-prose-the-chat-start-ingest-contract-the-relay-rule--origin-is-the-only-courier-codes-output-is-never-pasted-to-web-reviews-speak-in-goal-and-outcome-the-core-file-alert-the-agenda-convention-brief-renders-the-full-picture-the-master-gains-a-version-history-amends-d-052)
(where the pattern was proven) · source: the founder's approved
SETUP-recut plan, Web ops chat 2026-07-29.

## Goal

[WEB-INSTRUCTIONS](../../WEB-INSTRUCTIONS.md) proved a shape at
[D-063](../DECISIONS.md#d-063--2026-07--response-doctrine-v2--web-instructions-v6--two-channels-sentences-for-the-founder-fenced-blocks-for-machines-process-is-proof-not-prose-the-chat-start-ingest-contract-the-relay-rule--origin-is-the-only-courier-codes-output-is-never-pasted-to-web-reviews-speak-in-goal-and-outcome-the-core-file-alert-the-agenda-convention-brief-renders-the-full-picture-the-master-gains-a-version-history-amends-d-052):
a master for an external box is its OWN top-level file, carrying
its own laws (box-is-a-copy · re-save after any edit · FULL COPY,
ALWAYS), one fenced master, and a version-history table. This
bench makes that a CLASS and moves the two masters still buried in
[SETUP](../../SETUP.md) into it — the cockpit charter and the
lane-worker saved prompt — each extracted VERBATIM.

It also writes the ENTRY CONTRACT that SETUP's own entries will
follow — WHAT · WHERE · VALUES · VERIFY · SOURCE — so SETUP
becomes a replication spec rather than a container. The
compression itself is the FOLLOW-UP bench; this one decides the
contract and clears the two masters out of the way.

## Out of scope

- **Compressing SETUP.** Bench 2 executes the entry contract, the
  clerk record's move to the record shelf, and the cockpit WHY's
  move to [HOME](../../HOME.md). Here, SETUP keeps every wiring
  fact and loses only the two embedded master blocks.
- **Retrofitting [DESIGN-KICKOFF](../../DESIGN-KICKOFF.md).** It
  joins the class ON PAPER; the file itself is retrofitted at its
  next natural edit.
- **Editing the frozen record.** `record/specs/**` and the
  existing `DECISIONS` entries cite the masters' old home as it
  was true when written; they stay untouched (append-only).
- **Rewriting any master's CONTENT.** Both moves are verbatim; the
  charter's internal pointer to SETUP's dependency map stays
  as-is this bench.

## Plan

1. Bench birth: branch, this spec, memory stub, draft PR.
2. Run [decide](../../skills/decide.md) — the next D-number,
   anchors born resolving.
3. Create [COCKPIT-CHARTER.md](../../COCKPIT-CHARTER.md) on the
   WEB-INSTRUCTIONS pattern: frontmatter · header prose carrying
   the file's own laws · the charter fence moved verbatim from
   SETUP §cloud accounts · a one-row version history · a Sources
   block.
4. Create [LANE-WORKER.md](../../LANE-WORKER.md), same pattern,
   same treatment of the lane-worker saved prompt.
5. [SETUP](../../SETUP.md): the cockpit and lane-worker entries
   KEEP every wiring fact and replace the embedded blocks with
   one pointer line each; SETUP-internal "the master below"
   references updated, the phone bootstrap now adopting the
   charter from its new file.
6. Pointer sweep, grep-driven, LIVING files only: every citation
   that names the masters' old location re-points. Pointer edits
   only; every touched file named in the memory.
7. Verification loop, full CI mirror, Actions green, ship §6
   critic; ship to THE GATE. Tower-authored — external Web review
   precedes the founder's word.

## Done means

- [x] The D-number exists with Decision · Why · Alternatives
      rejected · Affects, anchors resolving, and states the class
      (its four elements) plus the entry contract's five fields.
- [x] [COCKPIT-CHARTER.md](../../COCKPIT-CHARTER.md) and
      [LANE-WORKER.md](../../LANE-WORKER.md) exist, each with
      frontmatter · header laws · ONE fenced master · a one-row
      version history · Sources.
- [x] Both fences are BYTE-FAITHFUL to what SETUP carried — no
      reconstruction; any gap flagged, never filled.
- [x] [SETUP](../../SETUP.md) keeps every wiring fact (routine
      location, triggers, caps, token recipes, birth mechanics)
      and carries one pointer line per master; no SETUP-internal
      reference still says the master is "below" or in that
      section; the phone bootstrap adopts from the new file.
- [x] Every living-doc citation of the masters' old location
      re-points; the frozen record is untouched; each touched
      file is named in the memory.
- [x] Files touched: nothing outside the mandate's list.
- [x] `check:links` · `check:ledger` · `check:memory` · lint ·
      format · test · build green; Actions green on the pushed
      head; ship §6 critic run.

## Deviations

1. **[HOME](../../HOME.md)'s file catalog gained two rows** — one
   per new master. The mandate licensed HOME as a POINTER file,
   and a catalog row is new content rather than a repointed
   citation, so it is disclosed. The reason it was taken anyway:
   [WEB-INSTRUCTIONS](../../WEB-INSTRUCTIONS.md) carries a
   catalog row, and its two new siblings being invisible in the
   same table is the drift the catalog exists to prevent. The
   opposite call — the [#233](https://github.com/wsher0901/roam/pull/233)
   precedent, where a new surface got a routing row but no
   catalog entry and the gap was surfaced for a ruling — was the
   alternative; here the row already existed for the sibling, so
   consistency argued louder than restraint.
2. **`scripts/fire.mjs` was touched** — anticipated by the
   mandate's "scripts" clause but not by its named list. One
   comment line: the fallback named SETUP as where the manual
   charter paste comes from, which the extraction falsifies.

## Open questions

none. Bench 2 (SETUP's compression under the entry contract) is
the follow-up this bench's D-number already declares, not an open
question here.
