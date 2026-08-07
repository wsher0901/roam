---
type: spec
id: chooser-and-blocker
title: Two rulings into law — the vehicle chooser and the external-blocker rule
status: open
stage: workshop
branch: docs/chooser-and-blocker
pr: —
opened: 2026-08-07
shipped: —
---

# chooser-and-blocker — two rulings into law

**Links:** [LAWS](../../LAWS.md) ·
[parallel-lanes](../../skills/parallel-lanes.md) ·
[liftoff](../../skills/liftoff.md) ·
[HOME §Response doctrine](../../HOME.md#response-doctrine) ·
[handoff §4](../../skills/handoff.md#4--repaint-dashboard-the-board-spec--single-source)
· [D-045](../DECISIONS.md#d-045--hands-doctrine) ·
[D-055](../DECISIONS.md#d-055--agent-teams-the-boundary)

## Goal

Two founder rulings from the Web ops chat (2026-08-06/07) become
law, with their homes updated in the same PR.

**THE VEHICLE CHOOSER.** For parallel work the seat triages by
rule rather than by mood: **the founder at a desk → an AGENT TEAM
is the default** (≤4 teammates, each on its own bench, lane laws
unrelaxed). Cloud lanes only when a NAMED CONDITION holds — more
than four disjoint benches · a cold seat is required · the work is
unattended or the founder is leaving (liftoff) · or the founder
names cloud. **Every triage states which condition fired.** Any
standing no-agents instruction is retired.

**THE EXTERNAL-BLOCKER RULE.** When a seat determines progress is
blocked by something outside the workshop's control, every
turn-end report LEADS with one unmissable line, repeated every
turn until cleared, and the board's glance line carries the same
banner at the next repaint. **Burying an external blocker in prose
is a report defect.**

## Out of scope

- **Any box master's fenced text** —
  [COCKPIT-CHARTER](../../COCKPIT-CHARTER.md),
  [LANE-WORKER](../../LANE-WORKER.md),
  [WEB-INSTRUCTIONS](../../WEB-INSTRUCTIONS.md). None is touched;
  where a master would need to learn the chooser, that is a
  follow-on with a re-save, not this bench.
- **[DASHBOARD](../../DASHBOARD.md) beyond ship's tail.** The
  banner slot is SPECIFIED here and painted by whichever ritual
  next repaints.
- **Re-litigating the rulings.** They are the founder's; this
  bench writes them down and makes the corpus agree with them.

## The ripple this carries, stated rather than buried

The chooser **AMENDS TWO STANDING DECISIONS**, and both amendments
are consequences of the ruling rather than choices made here:

| Decision | What it said | What the chooser makes it say |
|---|---|---|
| [D-055](../DECISIONS.md#d-055--agent-teams-the-boundary) | agent teams are for exploration and review; **a team never authors a bench** | a teammate MAY author a bench, on its own branch, under unrelaxed lane law |
| [D-045](../DECISIONS.md#d-045--hands-doctrine) | the litmus: many hands on ONE bench = team · **many benches = lanes** | many benches at a desk = a team of ≤4; lanes when a named condition fires |

Everything else in both entries stands — most importantly D-055's
two risks, which the chooser does not soften:
**single-sitting-only**, and **a teammate-authored diff is
self-authored** and takes external Web review before the word.

## Plan

1. `decide` — two entries, with the amendments above written into
   their **Affects** lines.
2. The homes:
   [parallel-lanes](../../skills/parallel-lanes.md) gains
   **§The vehicle chooser** (the table), and the "NOT a lane
   vehicle" line is replaced by the chooser's terms ·
   [liftoff](../../skills/liftoff.md) §2 and §3 gain one pointer
   line each · [HOME](../../HOME.md) §Response doctrine gains
   **rule 9** with its Sources line, and §Agent teams is
   reconciled with the chooser · handoff §4's glance-line spec
   gains the **banner slot**.
3. The memory closes the two rulings' chat-only status.

## Done means

- [ ] Two D-entries exist, each naming which decisions it amends.
- [ ] The four homes carry the rules; no box master is touched.
- [ ] No LIVE RULE SURFACE still says a team never authors a
      bench. **Walked, not assumed** — the four chronicle stories
      that name D-055's boundary split two ways, and only one half
      is a defect:
      - `agent-teams.md` and `lane-vehicles.md` carry it in their
        **CURRENT ENDING**, which is now FALSE → rewritten at this
        bench's weld, per the ending rule.
      - `lane-law.md` and `team-aware-leaving.md` carry it in a
        **spine bullet narrating D-055**, which stays true as of
        its date → they gain a D-082 bullet, they do not lose the
        D-055 one.
      - `record/specs/agent-teams.md` is a SHIPPED spec — frozen
        contract, never edited.
      - [D-055](../DECISIONS.md#d-055--agent-teams-the-boundary)
        itself is NOT edited: amendments accrete forward here
        ([D-051](../DECISIONS.md#d-051--self-seat-birth) carries no
        pointer to D-075, nor
        [D-060](../DECISIONS.md#d-060--the-three-phase-standing-order)
        to D-081).
- [ ] The verification loop is green and the PUSHED head's Actions
      run is green.
- [ ] Shipped to THE GATE — **not merged.** Tower-authored, so the
      external Web review precedes the founder's word.

## Notes for whoever resumes this bench

The temptation is to file the chooser as an additive rule and
leave [D-055](../DECISIONS.md#d-055--agent-teams-the-boundary)
standing. It cannot stand as written: "a team never authors a
bench" and "≤4 teammates, each on its own bench" are the same
sentence with opposite verdicts. **A corpus that contradicts
itself is worse than one that is out of date**, because both
halves read as current.
