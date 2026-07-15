---
type: spec
id: retroactivity-sweep
title: Retroactivity sweep — repair three later-found gaps
status: shipped
stage: workshop
branch: docs/retroactivity-sweep
pr: 132
opened: 2026-07-15
shipped: 2026-07-15
---
# retroactivity-sweep — Retroactivity sweep

**Links:**
[HOME](../HOME.md) ·
[handoff](../skills/handoff.md) ·
[recall](../skills/recall.md) ·
[retroactivity law — LAWS §Knowledge & tracking](../LAWS.md#knowledge--tracking) ·
Decisions codified (this pass decides nothing):
[D-036](../DECISIONS.md#d-036--2026-07--information-routing--one-home-per-class-append-vs-upsert-home-carries-the-table-sessions-anchor-stabilized)
·
[D-039](../DECISIONS.md#d-039--2026-07--recall--questions-answered-from-files-never-from-memory-the-d-036-routing-tables-read-mirror-model-invoked-at-discretion)

## Goal

Repair three later-found gaps the moment they are found (the
retroactivity law): a surviving "Cloud ledger" ghost in HOME's
retention table, a non-vocabulary word ("waiting") in handoff's
Sessions lead-in, and two routing-table omissions in recall. No new
decision — this codifies #128's Sessions-single-home and the D-036 /
D-039 routing completeness.

## Out of scope

- Everything else — no LAWS edits, no restructuring, no other files.

## Plan

Three surgical edits, one commit (after this bench):

1. [HOME](../HOME.md) retention table, "A lane dies or a spawn fails"
   row — "the board's Cloud ledger" → "the lane's Sessions row
   (+ Needs-you mirror)".
2. [handoff §4](../skills/handoff.md) Sessions lead-in — in the
   parenthetical, "waiting" → "blocked" (the State column takes
   Status-vocabulary words; blocked is the vocabulary word for a lane
   waiting on the founder).
3. [recall](../skills/recall.md) routing table — Why/provenance row
   consolidation parenthetical gains "· FOUNDATION for identity";
   Term/mechanism row gains "→ DESIGN-KICKOFF for design-session
   governance".

Then verify (below) · [ship](../skills/ship.md) to THE GATE — no
merge; founder approval follows external review in the Web chat.

## Done means

- [x] HOME retention row repointed to the Sessions row (+ Needs-you
      mirror).
- [x] handoff Sessions parenthetical says "blocked", not "waiting".
- [x] recall Why/provenance row names FOUNDATION for identity.
- [x] recall Term/mechanism row names DESIGN-KICKOFF for
      design-session governance.
- [x] Greps: "Cloud ledger" clean on live surfaces (only this task's
      spec + memory and the skills-precision-pass spec — the
      retirement narratives); "waiting" gone from handoff entirely;
      "FOUNDATION for identity" and "DESIGN-KICKOFF" both present in
      recall.
- [x] check:links green (1559 links, 0 broken) + the local CI mirror
      (lint · format:check · check:links · tests · build) green.
      Pending: the pushed commit's Actions run green.

## Open questions

none
