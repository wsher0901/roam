---
type: spec
id: ideas-contract
title: The IDEAS entry contract — one idea per line, closed entries compress and stay (D-066)
status: open
stage: workshop
branch: docs/ideas-contract
pr: —
opened: 2026-07-29
shipped: —
---

# ideas-contract — the inbox becomes readable, and keeps its outcomes

**Links:**
[IDEAS](../../IDEAS.md) (the file being rewritten) ·
[D-050](../DECISIONS.md#d-050--2026-07--session-lifecycle--closed--dead-the-close-locks-wall-softens-to-injected-read-only-doctrine-interrupt-capture-is-standing-format-the-claude-residue-sweep-is-pickup-hygiene-ideas-is-an-inbox-not-an-archive-amends-the-d-046-era-close-wall-design-upholds-the-park-protocol-and-no-solo-approval)
(the delete-at-harvest law this amends) · source: the founder's
approved contract, Web ops chat 2026-07-29.

## Goal

[IDEAS](../../IDEAS.md) is the single inbox, and it had stopped
being scannable: entries ran to twenty lines, carried probe
narratives and findings that belong in the record, bundled several
ideas into one bullet so nothing could close cleanly, and — under
[D-050](../DECISIONS.md#d-050--2026-07--session-lifecycle--closed--dead-the-close-locks-wall-softens-to-injected-read-only-doctrine-interrupt-capture-is-standing-format-the-claude-residue-sweep-is-pickup-hygiene-ideas-is-an-inbox-not-an-archive-amends-the-d-046-era-close-wall-design-upholds-the-park-protocol-and-no-solo-approval)'s
compaction law — DELETED what closed, so the file could never
answer "what did we decide about X?".

THE ENTRY CONTRACT fixes both: one idea per line in plain
language, glyph-led, split so closure is per-idea; two sections,
OPEN and CLOSED; and CLOSED ENTRIES COMPRESS AND STAY as the
outcome ledger. Enforcement is wired into every file that writes
here, so the shape survives the next sitting.

## Out of scope

- **Triaging anything into [ROADMAP](../../ROADMAP.md).** Nothing
  here becomes scope on this bench; statuses are VERIFIED, not
  decided.
- **Inventing a status.** Where the record cannot settle whether
  an entry closed, it stays OPEN and becomes a counted founder
  ruling at the gate.
- **Any master, and [DASHBOARD](../../DASHBOARD.md).**

## Plan

1. Bench birth: branch, this spec, memory stub, draft PR.
2. Run [decide](../../skills/decide.md) — the next D-number,
   anchors born resolving; it amends D-050's compaction law.
3. Rewrite [IDEAS](../../IDEAS.md): the contract as its header
   verbatim, then every entry re-derived under it —
   VERIFY-BEFORE-CLASSIFY (never trust an entry's own closure
   note without its artifact resolving), multi-part entries split
   one line per idea, closed entries compressed with their
   closing vehicle linked, open entries rewritten as one plain
   sentence with (born date, source) at the tail.
4. THE STANDING DUTY: before dropping narrative, verify the facts
   it carries exist at a record home; anything homeless relocates
   to the fitting record file and is named in the memory.
5. Enforcement: [handoff](../../skills/handoff.md)'s harvest step
   rewritten to compress-not-delete and cite the contract; §1.2's
   IDEAS instruction gains "per the entry contract";
   [liftoff](../../skills/liftoff.md) aligned;
   [decide](../../skills/decide.md) and
   [parallel-lanes](../../skills/parallel-lanes.md) each gain one
   line at their write step;
   [HOME](../../HOME.md)'s IDEAS row updated ONLY if it states the
   old delete behaviour.
6. Verification loop, full CI mirror, Actions green, ship §6
   critic; ship to THE GATE. Tower-authored — external Web review
   precedes the founder's word.

## Done means

- [ ] D-066 exists with Decision · Why · Alternatives rejected ·
      Affects, anchors resolving, and states the contract plus the
      amendment to D-050's compaction law.
- [ ] [IDEAS](../../IDEAS.md)'s header is the contract verbatim
      with the D-number woven as a short-text link.
- [ ] Two sections exist: OPEN (newest first) and CLOSED (one line
      each). Every line carries a leading glyph — ⏳ / 🟢 / ⚪.
- [ ] Every entry's status was VERIFIED against the ledger,
      DECISIONS, PRs and history — not taken from the entry's own
      note. Entries the record cannot settle stay OPEN and are
      listed as counted founder rulings in the memory.
- [ ] Multi-part entries are split so each idea closes on its own.
- [ ] No narrative was dropped without a confirmed record home;
      anything relocated is named in the memory with its
      destination.
- [ ] [handoff](../../skills/handoff.md) harvests by COMPRESSING
      to CLOSED, deletes nothing, and cites the contract; §1.2
      cites it too; [liftoff](../../skills/liftoff.md),
      [decide](../../skills/decide.md) and
      [parallel-lanes](../../skills/parallel-lanes.md) each cite
      it at their write step.
- [ ] Files touched: nothing outside the mandate's list.
- [ ] `check:links` · `check:ledger` · `check:memory` · lint ·
      format · test · build green; Actions green on the pushed
      head; ship §6 critic run.

## Deviations

<filled by ship>

## Open questions

none at birth.
