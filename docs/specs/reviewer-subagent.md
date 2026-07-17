---
type: spec
id: reviewer-subagent
title: Reviewer subagent — the ship-time diff critic
status: open
stage: workshop
branch: chore/reviewer-subagent
pr: 146
opened: 2026-07-16
shipped: —
---
# reviewer-subagent — the ship-time diff critic

**Links:**
[SETUP §Staged](../SETUP.md#staged--turns-on-when-its-stage-opens) ·
[ship](../skills/ship.md) ·
[Models & effort — SETUP §cloud](../SETUP.md#once-and-done--cloud-accounts)
· [TEMPLATE — the memory format](../memory/TEMPLATE.md) ·
[FOUNDATION §The reliability law](../FOUNDATION.md#the-reliability-law)
· [lane law — parallel-lanes](../skills/parallel-lanes.md)

## Goal

The ship-time diff critic, in two deliverables: this spec finalized,
and the agent file `.claude/agents/reviewer.md`.

## Frame (fixed — not the lane's to change)

- Read-only tools only.
- Invoked before THE GATE (ship-time).
- Checks: the diff matches the spec's declared files and Affects
  lines · scope drift · law violations (derivation, one-home, weave
  links) · memory diary completeness against the
  [TEMPLATE](../memory/TEMPLATE.md) · obvious defects.
- Output: a structured verdict — pass, or findings with severity.
- It never edits, never merges, never blocks on style.

## Founder decisions (resolved 2026-07-17, PR comment)

Both questions raised in one `BLOCKED:` comment on
[PR #146](https://github.com/wsher0901/roam/pull/146); the founder
answered both in one reply, both reversible by a later
[decide](../skills/decide.md):

1. **Verdict policy — advisory.** Findings ride to the founder at
   THE GATE alongside the summary; a finding never halts ship itself.
2. **Model + effort — Sonnet 5 · high**, per the
   [Models & effort doctrine](../SETUP.md#once-and-done--cloud-accounts).

## Out of scope

- Editing `ship.md` — wiring the reviewer into the ritual is cockpit
  work, a follow-up task.
- Anything outside the two deliverables (this spec · the agent
  file).

## Done means

- [x] This spec finalized: the frame concrete, both reserved answers
      folded in from the founder's reply.
- [x] `.claude/agents/reviewer.md` exists — read-only toolset, the
      frame honored, verdict format defined.
- [x] Both reserved questions asked in ONE `BLOCKED:` comment with
      @mention; answers recorded in spec + memory.
- [ ] Full CI mirror green; the pushed commit's Actions run green;
      ready-flip only on green; completion comment @mentions
      wsher0901.

## Deviations

None from the frame. The founder folded a standing caveat into the
verdict answer itself: both the verdict policy and the reviewer's
model/effort are reversible later via a normal
[decide](../skills/decide.md), not locked forever by this spec.

## Open questions

None — both resolved (see Founder decisions above).
