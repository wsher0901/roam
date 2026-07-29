---
type: spec
id: charter-v3
title: The box-master diet — the cockpit charter slimmed to rules, invariants and pointers (D-065)
status: open
stage: workshop
branch: docs/charter-v3
pr: —
opened: 2026-07-29
shipped: —
---

# charter-v3 — a box carries rules, not procedures

**Links:**
[COCKPIT-CHARTER](../../COCKPIT-CHARTER.md) (the master being
recut) · [HOME](../../HOME.md) (where the ladder lands) ·
[D-064](../DECISIONS.md#d-064--2026-07--the-box-master-class--the-setup-entry-contract--every-external-box-master-is-its-own-top-level-file-on-the-web-instructions-pattern-cockpit-chartermd-and-lane-workermd-extracted-verbatim-setup-compresses-to-a-replication-spec-under-the-entry-contract-what--where--values--verify--source-design-kickoff-joins-the-class-on-paper)
(the class this refines) · source: the founder's approved v3 text,
Web ops chat 2026-07-29.

## Goal

[D-064](../DECISIONS.md#d-064--2026-07--the-box-master-class--the-setup-entry-contract--every-external-box-master-is-its-own-top-level-file-on-the-web-instructions-pattern-cockpit-chartermd-and-lane-workermd-extracted-verbatim-setup-compresses-to-a-replication-spec-under-the-entry-contract-what--where--values--verify--source-design-kickoff-joins-the-class-on-paper)
gave box masters their own files; it did not say what belongs
INSIDE one. This bench answers that with THE BOX-MASTER DIET: a
master carries STANDING RULES, INVARIANTS, and POINTERS.
Procedures live in their repo homes and are derived at need.
Values live in [SETUP](../../SETUP.md). Provenance labels do not
ride boxes — a session that needs a decision's text greps the
clone it already has.

The cockpit charter is the first file cut to the principle: v3
keeps the eight rules and drops the connector ladder's full
procedure, which moves whole into [HOME](../../HOME.md) beside the
dependency map that already explains it.

## Out of scope

- **Repealing anything.** The ladder, the tombstone scripts and
  the cap arithmetic all survive — they RELOCATE. This amends
  [D-061](../DECISIONS.md#d-061--2026-07--the-landing-doctrine-recut-to-three-scenarios--the-cockpits-standing-job-advise-on-fleet-status-and-on-each-gate-reaching-decision-execute-the-founders-rulings-from-the-phone-auto-land-when-the-fleet-empties-and-nothing-awaits-the-founder-desk-takeover-when-pickup-finds-a-live-cockpit-holding-decisions-and-the-founders-freeze-unchanged-the-tombstone-wake-rule-makes-a-superseded-cockpit-retire-by-the-full-ritual-amends-d-054s-two-mode-routing-upholds-no-solo-approval-and-the-derivation-law)
  and
  [D-048](../DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047)
  BY RELOCATION, never by repeal.
- **Cutting the other masters.** [LANE-WORKER](../../LANE-WORKER.md)
  and [WEB-INSTRUCTIONS](../../WEB-INSTRUCTIONS.md) are governed
  by the principle from now on; neither is recut here.
- **[DASHBOARD](../../DASHBOARD.md).** The routine-box re-save
  this implies rides the ship tail, not this bench.

## Plan

1. Bench birth: branch, this spec, memory stub, draft PR.
2. Run [decide](../../skills/decide.md) — the next D-number,
   anchors born resolving.
3. [HOME](../../HOME.md): the existing cockpit section ABSORBS
   the ladder's full procedure (R0 · R1 · R2 a–d · R3 · R4 ·
   R4b) and is retitled to name what it now holds; the "⚠️
   CONNECTOR DOWN" founder script is preserved VERBATIM; the
   split between charter and HOME is stated explicitly so
   neither claims the other's job. Every link to the old anchor
   re-points.
4. [COCKPIT-CHARTER](../../COCKPIT-CHARTER.md): the fenced master
   replaced by the approved v3 text BYTE-FAITHFUL, header laws
   unchanged, a v3 version row added.
5. THE STANDING DUTY ON THE SHRINK: diff old fence against new
   and account for EVERY removed sentence — it either already
   exists at a named home, or it relocates in this bench. The
   known orphan (the birth-failure shape) gets a home, and the
   choice is named in the memory.
6. Citation sweep, destination-grep: links INTO the charter and
   the old HOME anchor, not just phrases. Pointer edits only,
   each named in the memory.
7. Verification loop, full CI mirror, Actions green, ship §6
   critic; ship to THE GATE. Tower-authored — external Web review
   precedes the founder's word.

## Done means

- [x] D-065 exists with Decision · Why · Alternatives rejected ·
      Affects, anchors resolving, stating the diet's four clauses
      (rules/invariants/pointers · procedures in repo homes ·
      values in SETUP · no provenance labels).
- [x] [HOME](../../HOME.md) carries the whole ladder — R0, R1,
      R2 a–d, R3, R4, R4b — with the CONNECTOR DOWN script
      verbatim, under a title naming both the paths and the
      ladder.
- [x] The charter/HOME split is stated in BOTH files: the charter
      holds the standing duty and the exact tombstone line, HOME
      holds the procedure.
- [x] The charter's fence is the approved v3 text byte-faithful;
      header laws unchanged; the version table carries a v3 row.
- [x] EVERY sentence removed from the old fence is accounted for
      — at an existing home or relocated here — and the accounting
      is in the memory. The birth-failure shape has a named home.
- [x] Every citation into the charter's moved content or the old
      HOME anchor re-points; "charter rule 5" references stay
      valid by construction.
- [x] Files touched: nothing outside the mandate's list, PLUS
      [DASHBOARD](../../DASHBOARD.md) for one link — see
      Deviation 1; its Needs-you content still rides the tail.
- [x] `check:links` · `check:ledger` · `check:memory` · lint ·
      format · test · build green; Actions green on the pushed
      head; ship §6 critic run.

## Deviations

1. **[DASHBOARD](../../DASHBOARD.md) was touched — one link, and
   the mandate's own verification clause required it.** The
   mandate says the board stays untouched because the ship tail
   owes the re-save line, and that content DID stay for the tail.
   But the board also carried a link to the HOME anchor this
   bench retitles, so leaving it would have shipped a broken
   anchor and made "Actions green on the pushed head"
   unreachable. One anchor repaired, nothing else; the board's
   Needs-you content still rides the tail.
2. **The mandate's "known orphan" was not one.** The
   birth-failure shape already lives in
   [liftoff §6](../../skills/liftoff.md#6--ledger-handoff--fire-the-cockpit)
   and again as SETUP's VERIFY for that entry — exactly where the
   mandate proposed putting it. Nothing was relocated; the check
   is recorded in the memory so the next reader knows the
   question was asked and answered rather than skipped.

## Open questions

none. The other two masters
([LANE-WORKER](../../LANE-WORKER.md),
[WEB-INSTRUCTIONS](../../WEB-INSTRUCTIONS.md)) are governed by
the diet from now on but deliberately not recut here — each is
its own verifiable diff.
