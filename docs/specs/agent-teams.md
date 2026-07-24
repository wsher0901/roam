---
type: spec
id: agent-teams
title: Agent teams — where they fit this workshop and where they must not ([D-055](../DECISIONS.md#d-055--2026-07--agent-teams--the-boundary-teams-are-for-exploration-and-review-at-a-ground-seat-lanes-remain-the-authorship-mechanism-two-risks-become-law-single-sitting-only--an-explicit-carve-out-to-d-050s-interrupt-promise--and-a-teammate-authored-diff-is-self-authored-under-no-solo-approval-the-reviewers-model-settled-by-verification-not-guess-the-founder-side-config-recorded-upholds-the-lane-law-no-solo-approval-and-one-home-gives-the-experimental-flag-its-consumer))
status: open
stage: workshop
branch: docs/agent-teams
pr: —
opened: 2026-07-24
shipped: —
---

# agent-teams — the boundary, two risks, and the reviewer's model

**Links:**
[HOME](../HOME.md) · [LAWS](../LAWS.md) ·
[SETUP §Models & effort](../SETUP.md#once-and-done--cloud-accounts) ·
[parallel-lanes](../skills/parallel-lanes.md) ·
[DECISIONS](../DECISIONS.md) · [IDEAS](../IDEAS.md)

## Goal

One theme: WHERE AGENT TEAMS FIT THIS WORKSHOP AND WHERE THEY MUST
NOT. The workshop already has a hardened parallelism mechanism —
lanes — and a newly-enabled second one whose experimental flag has
sat in `.claude/settings.json` with no consumer. This bench draws
the boundary between them, turns the two real risks into law, and
settles the reviewer subagent's model by verification rather than
guess. It builds no team: the first intended use is queued, not
flown here.

## Out of scope

- BUILDING a team. The chronicle layer is the first intended use
  and rides its own bench; this one writes the rules.
- Any change to lanes, the canary, or the wake-lock — teams do not
  touch that machinery.
- `settings.json` permission changes for teammates: they inherit
  the lead's, and the deny list is what makes catastrophes
  impossible.

## Plan

1. **[HOME](../HOME.md) — one short §Agent teams beside the
   Command card.** THE BOUNDARY: teams are for EXPLORATION AND
   REVIEW at a ground seat; LANES REMAIN THE AUTHORSHIP MECHANISM.
   Reasons stated, not asserted. Teams never author a bench, never
   merge, never run a ritual.
2. **Risk (a) — SINGLE-SITTING ONLY**, written as a carve-out
   where [D-050](../DECISIONS.md#d-050--2026-07--session-lifecycle--closed--dead-the-close-locks-wall-softens-to-injected-read-only-doctrine-interrupt-capture-is-standing-format-the-claude-residue-sweep-is-pickup-hygiene-ideas-is-an-inbox-not-an-archive-amends-the-d-046-era-close-wall-design-upholds-the-park-protocol-and-no-solo-approval)'s
   interrupt promise lives, so the two cannot be read as
   contradicting: the ⏸ block preserves the LEAD's work, never the
   team.
3. **Risk (b) — a teammate-authored diff is SELF-AUTHORED**: one
   clause in [LAWS](../LAWS.md) beside the existing
   no-solo-approval rule.
4. **The reviewer's model — verification first.** Run
   `claude update`, then determine what the `opus` alias resolves
   to and RECORD THE ANSWER VERBATIM IN THE MEMORY BEFORE editing
   `.claude/agents/reviewer.md`. Prefer the alias if it resolves to
   Opus 5; pin `claude-opus-5` only if it still resolves to 4.8,
   and record the pin as revisitable. Keep `effort: high`.
5. **[SETUP](../SETUP.md) — the founder-side config**, so any seat
   knows it: `/config` → Default teammate model → Default (leader's
   model) · effort inherits automatically · `teammateMode` stays
   in-process (split panes need tmux or iTerm2 and are NOT
   supported in Windows Terminal, both seats' terminal) · the
   experimental flag now has a consumer.
6. **[IDEAS](../IDEAS.md), two lines**: the chronicle layer as the
   first intended use, and box provenance stamps (off-theme here).
7. **[D-055](../DECISIONS.md#d-055--2026-07--agent-teams--the-boundary-teams-are-for-exploration-and-review-at-a-ground-seat-lanes-remain-the-authorship-mechanism-two-risks-become-law-single-sitting-only--an-explicit-carve-out-to-d-050s-interrupt-promise--and-a-teammate-authored-diff-is-self-authored-under-no-solo-approval-the-reviewers-model-settled-by-verification-not-guess-the-founder-side-config-recorded-upholds-the-lane-law-no-solo-approval-and-one-home-gives-the-experimental-flag-its-consumer)**,
   house style, with the three rejections and their reasons.

## Files touched — nothing outside

[HOME](../HOME.md) · [LAWS](../LAWS.md) (one clause) ·
[SETUP](../SETUP.md) (the founder config note) ·
`.claude/agents/reviewer.md` · [DECISIONS](../DECISIONS.md) ·
[IDEAS](../IDEAS.md) · this spec +
[the memory](../memory/agent-teams.md) ·
[DASHBOARD](../DASHBOARD.md) via the ship tail.

## Done means

- [ ] The boundary is in HOME, with its reasons, and says plainly
      that teams never author a bench, never merge, never run a
      ritual.
- [ ] Both risks are present AND cross-referenced — (a) against
      D-050's interrupt promise as an explicit carve-out, (b)
      against the no-solo-approval law.
- [ ] The `opus`-alias answer is recorded VERBATIM in the memory,
      and the recording commit precedes the `reviewer.md` edit.
- [ ] `reviewer.md` carries the chosen model with its reason;
      `effort: high` retained.
- [ ] SETUP carries the founder-side config, including the
      Windows Terminal constraint and the flag's resolved
      no-consumer note.
- [ ] `check:links` · `check:ledger` · `check:memory` green.
- [ ] Full CI mirror green locally AND the pushed head's Actions
      run green.
- [ ] [ship §6](../skills/ship.md) critic runs ON ITS NEW MODEL;
      the report names which model ran it.

## Pending

None at birth.

## Deviations

<!-- filled by ship -->

## Open questions

None at birth. This bench ships to the gate and does NOT merge.
