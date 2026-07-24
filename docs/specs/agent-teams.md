---
type: spec
id: agent-teams
title: Agent teams — where they fit this workshop and where they must not ([D-055](../DECISIONS.md#d-055--2026-07--agent-teams--the-boundary-teams-are-for-exploration-and-review-at-a-ground-seat-lanes-remain-the-authorship-mechanism-two-risks-become-law-single-sitting-only--an-explicit-carve-out-to-d-050s-interrupt-promise--and-a-teammate-authored-diff-is-self-authored-under-no-solo-approval-the-reviewers-model-settled-by-verification-not-guess-the-founder-side-config-recorded-upholds-the-lane-law-no-solo-approval-and-one-home-gives-the-experimental-flag-its-consumer))
status: open
stage: workshop
branch: docs/agent-teams
pr: 223
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

THREE stale copies of the old team rule had to be repaired beyond
that list — each disclosed rather than smuggled, all called out at
THE GATE, all required by the retroactivity law and by
[decide §2](../skills/decide.md)'s ripple checklist ("update or
mark superseded any spec the pivot invalidates"):

1. [parallel-lanes §Vehicles](../skills/parallel-lanes.md#vehicles)
   — "lead Fable/Opus, at most 4 Sonnet teammates", in the manual
   consulted before every dispatch. Reduced to a pointer.
2. [SETUP](../SETUP.md)'s D-045 Hands rule — "lead + 2–4 Sonnet 5
   teammates", eight lines below the text retiring that default,
   in a file already being edited. Superseded inline, provenance
   kept.
3. [reviewer-subagent](reviewer-subagent.md) — "Model + effort —
   Sonnet 5 · high", recorded as a resolved founder decision and
   pointed at from SETUP as the critic's frame, so it contradicted
   `.claude/agents/reviewer.md` directly. Superseded inline.

Copies 2 and 3 were found by the critic, not by me.

## Done means

- [x] The boundary is in HOME, with its reasons, and says plainly
      that teams never author a bench, never merge, never run a
      ritual. (Critic-confirmed on both passes.)
- [x] Both risks are present AND cross-referenced — (a) against
      D-050's interrupt promise as an explicit carve-out, (b)
      against the no-solo-approval law. (Carve-out written twice
      on purpose: the full statement in §Agent teams and a clause
      on the Command card's Esc line, where the promise is read.)
- [x] The `opus`-alias answer is recorded VERBATIM in the memory,
      and the recording commit precedes the `reviewer.md` edit.
      (Commit `cb5648c`, pushed before the edit.)
- [x] `reviewer.md` carries the chosen model with its reason;
      `effort: high` retained. (`model: opus` — the alias, since
      it resolves to Opus 5; no brittle pin.)
- [x] SETUP carries the founder-side config, including the
      Windows Terminal constraint and the flag's resolved
      no-consumer note.
- [x] `check:links` · `check:ledger` · `check:memory` green.
      (2026-07-24, work PC.)
- [x] Full CI mirror green locally AND the pushed head's Actions
      run green. (Green on `7aa7a4e`; re-verified on the
      post-critic head.)
- [x] [ship §6](../skills/ship.md#6--the-gate) critic runs ON ITS
      NEW MODEL; the report names which model ran it. (TWO passes:
      the first ran as `claude-sonnet-5` — the session's agent
      definition was cut at session start, before the edit — and
      the second, forced with an explicit override, ran as
      `claude-opus-5` · effort high. Both verdicts
      PASS-WITH-FINDINGS; every finding repaired pre-flip.)

## Pending

MANUAL ACT, founder-side, after the weld: `/config` → Default
teammate model → **Default (leader's model)** at each seat. The
repo cannot set it.

Deferred by design and filed to [IDEAS](../IDEAS.md): risk (a) is
documented but enforced by no ritual — handoff parks lanes and
says nothing about a live team. Ritual machinery is out of this
bench's scope.

## Deviations

The seven mandated items landed as specified. Beyond the mandate's
file list, three stale copies of the retired Sonnet-teammate rule
were repaired (listed under Files touched) — two of them found by
the critic, not by me; and `docs/specs/reviewer-subagent.md` was
added to D-055's ripple per
[decide §2](../skills/decide.md). No behaviour changes in any of
the three; each removes a live contradiction with this bench.

## Open questions

None at birth. This bench ships to the gate and does NOT merge.
