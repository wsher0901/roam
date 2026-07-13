---
type: spec
id: design-kickoff-refresh
title: DESIGN-KICKOFF refresh — June-2026 Claude Design capabilities
status: open
stage: workshop
branch: docs/design-kickoff-refresh
pr: —
opened: 2026-07-13
shipped: —
---
# design-kickoff-refresh — DESIGN-KICKOFF refresh: June-2026 Claude Design capabilities
**Links:** [DESIGN-KICKOFF](../DESIGN-KICKOFF.md) ·
[LAWS](../LAWS.md) · [HOME](../HOME.md) ·
[equipment plan](../skills/equipment-plan.md) · Decisions: none —
task-local ([memory](../memory/design-kickoff-refresh.md) records
the mechanism)

## Goal
The kickoff reflects Claude Design as it exists after the 2026-06-17
overhaul — export guard in governance, canvas-first and feed-context
rules, real /design-sync mechanics with the snapshot law, corrected
usage-pool wording.

## Out of scope
- [LAWS](../LAWS.md) — the no-write law itself is unchanged.
- skills/ — the ship /design-sync tail hook and the Design MCP
  server are queued for the skills leg with their own decisions.
- ROADMAP.
- Any preamble semantics beyond the payload.

## Plan
1. Bench birth: branch docs/design-kickoff-refresh → this spec +
   memory stub → draft PR.
2. Overwrite [DESIGN-KICKOFF](../DESIGN-KICKOFF.md) with the
   workshop payload byte-exact. Mechanism is task-local — no
   D-number: it is an ops file per [HOME](../HOME.md)'s writer
   column, and the export guard only makes explicit what the
   no-write law already implies.
3. Verify (below) · [ship](../skills/ship.md) to THE GATE — no
   merge; founder approval follows external review.

## Done means
- [ ] docs/DESIGN-KICKOFF.md byte-matches the payload
- [ ] `node scripts/check-links.mjs` passes
- [ ] Lint + tests green
- [ ] Only the three named files in the diff vs main

## Deviations
<filled by ship: anything done differently than planned — or "none">

## Open questions
none
