---
type: spec
id: reviewer-subagent
title: Reviewer subagent — the ship-time diff critic
status: open
stage: workshop
branch: chore/reviewer-subagent
pr: —
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

## RESERVED FOR THE FOUNDER — do not decide

Raise BOTH questions in a SINGLE `BLOCKED:` PR comment (@mention
wsher0901) per the lane law, then idle-wait for the reply:

1. Verdict policy — advisory (findings ride to the founder at THE
   GATE) vs blocking (a 🔴 finding halts ship before THE GATE)?
2. The reviewer's own model + effort under the
   [Models & effort doctrine](../SETUP.md#once-and-done--cloud-accounts)
   — Sonnet 5 · high (speed) vs Opus 4.8 · xhigh (depth)?

Fold the answers into this spec (and narrate them in the memory)
before the ready-flip.

## Out of scope

- Editing `ship.md` — wiring the reviewer into the ritual is cockpit
  work, a follow-up task.
- Anything outside the two deliverables (this spec · the agent
  file).

## Done means

- [ ] This spec finalized: the frame concrete, both reserved answers
      folded in from the founder's reply.
- [ ] `.claude/agents/reviewer.md` exists — read-only toolset, the
      frame honored, verdict format defined.
- [ ] Both reserved questions asked in ONE `BLOCKED:` comment with
      @mention; answers recorded in spec + memory.
- [ ] Full CI mirror green; the pushed commit's Actions run green;
      ready-flip only on green; completion comment @mentions
      wsher0901.

## Deviations

<filled at ship>

## Open questions

The two RESERVED-FOR-THE-FOUNDER questions above, until the founder
answers on the PR.
