---
type: spec
id: flight-reflection-audit
title: The flight reflection audit — did the workshop learn, or only fly?
status: shipped
stage: workshop
branch: docs/flight-reflection-audit
pr: #339
opened: 2026-08-06
shipped: 2026-08-07
---

# flight-reflection-audit — did the workshop learn, or only fly?

**Links:**
[D-079](../DECISIONS.md#d-079--the-closing-campaigns-advance-word)
(the campaign's advance word) ·
[findings-closeout](findings-closeout.md) ·
[LAWS](../../LAWS.md) · [IDEAS](../../IDEAS.md) ·
[chronicle INDEX](../../chronicle/INDEX.md)

## Goal

Step 4 of the closing campaign. Four cloud flights were flown on
2026-08-03 → 05. Each cost real cap runs and produced real findings.
This bench answers, **machine-checkably**, whether the workshop kept
what they bought — for each flight:

- **A** a RECORD exists — the probe, the history entries, or both.
- **B** every chronicle story that carries the flight reads
  **WRITTEN** in the census, and the story itself names the flight.
- **C** every finding traces to a CLOSED line or an open line
  carrying a `STANDING:` clause. Anything else is an **ORPHAN** — a
  lesson the flight paid for and nobody kept.

**The deliverable is the zero-orphan count, and it is a command, not
a claim.**

## Out of scope

- **Any new CI gate.** The audit ships as `npm run audit:flights`
  and is deliberately NOT wired into `ci.yml` — see the reasoning in
  the script's own header.
- **Re-opening any standing reason.** A line's reason is read as
  given; this bench checks that one EXISTS, never whether it is a
  good one.
- **Any box master's fenced text**, and any behavioral change — the
  campaign's own STOPs.

## Plan

1. Derive each flight's record anchors from the ledger and the probe
   shelf — never from recall.
2. Write the checker; prove it against DELIBERATE BREAKAGE in both
   directions before trusting a green.
3. Run it; record the result and the breakage proof in the memory.

## Done means

- [ ] `npm run audit:flights` exits 0, with all four flights PASS on
      A, B and C.
- [ ] The checker has been shown to go RED on a broken census row
      and on a stripped `STANDING:` clause, and green again on
      restore — recorded in the memory.
- [ ] The zero-orphan grep is written into the memory with its count.
- [ ] The verification loop is green and the PUSHED head's Actions
      run is green.

## Notes for whoever resumes this bench

**This bench depends on [findings-closeout](findings-closeout.md)**
— the `STANDING:` clauses check C reads are written there. The
branch carries that merge; once #338 lands, this diff reduces to its
own content.
