---
type: spec
id: lane-liveness
title: Lane liveness — live-vs-reclaimable from the commit heartbeat, read at the two blind sites
status: open
stage: workshop
branch: docs/lane-liveness
pr: —
opened: 2026-07-16
shipped: —
---
# lane-liveness — live-vs-reclaimable from the commit heartbeat

**Links:**
[LAWS §Workflow — the claim check](../LAWS.md#workflow-non-negotiable) ·
[parallel-lanes](../skills/parallel-lanes.md) ·
[pickup §3](../skills/pickup.md) ·
[TEMPLATE — the Status vocabulary](../memory/TEMPLATE.md) ·
[the incident](../history/workshop/mechanism/ledger-integrity.md)

## Goal

Derive live-vs-dead for every bench and worktree from the commit
heartbeat, and read that verdict at the two sites that are currently
blind to it — the claim check and session-start worktree handling — so
a live lane is never adopted or pruned again. Closes the two gaps from
the ledger-integrity parallel-lane incident (a cockpit session adopted
a bench and removed a worktree a live lane was flying). Amends the
lane law → a decide (D-042).

## Out of scope

- The double-dispatch diagnostic — HOW two workers got dispatched to
  one id is logged to [IDEAS](../IDEAS.md), not fixed here.
- Any cloud/routine change.
- Product code.

## Plan

1. Decide entry D-042 (entry + ripple in the same commit).
2. [LAWS §Workflow](../LAWS.md#workflow-non-negotiable) claim-check
   clause — extended to read through the liveness rule; "commits are
   the heartbeat" in §Task anatomy stays as-is (now load-bearing).
3. [parallel-lanes](../skills/parallel-lanes.md) — new §Liveness
   (the rule verbatim); the staleness window constant (~30 min,
   tunable) added to §Canary, its single home; §Respawn points to
   §Liveness.
4. [pickup §3](../skills/pickup.md) — the blanket "a dirty sibling
   worktree is a lane that died un-parked" rule replaced by the
   liveness rule: LIVE → leave it and surface as flying; RECLAIMABLE +
   dirty → secure and surface.
5. `.claude/hooks/session-start.mjs` — prints, per sibling worktree:
   branch · age of last commit · memory Status word · verdict
   LIVE|RECLAIMABLE. Zero new deps; the window hardcoded to match
   §Canary with a comment naming that home.
6. [TEMPLATE](../memory/TEMPLATE.md) Status vocabulary — every word
   the rule keys on is defined (adds respawned · failed · shipped).
7. [HOME](../HOME.md) — §Terms entry "heartbeat / liveness"; one
   clause in the lanes portrait (the cockpit never adopts or prunes a
   live lane).
8. [IDEAS](../IDEAS.md) — one dated line: diagnose the
   double-dispatch (liveness makes the collision harmless, not
   explained).

### The rule (what D-042 fixes in place)

LIVE — never adopt, never secure or prune — when the memory Status is
non-terminal AND the branch's last commit is within the staleness
window. RECLAIMABLE when the Status is terminal (parked · failed ·
held · shipped · superseded) OR the branch is silent past the window.
Genuine doubt → announce and ask. A terminal Status outranks a fresh
heartbeat — the stamp commit IS the parking act, and the wake-lock
guarantees no worker survives a Status it does not own — otherwise a
just-parked bench could not be lawfully resumed or respawned until
the window lapsed.

## Done means

- [x] D-042 in [DECISIONS](../DECISIONS.md), anchors born resolving,
      entry + ripple one commit.
- [x] LAWS claim-check clause reads through
      [parallel-lanes §Liveness](../skills/parallel-lanes.md#liveness--live-vs-reclaimable);
      grep confirms both read-sites reference the rule.
- [x] parallel-lanes: §Liveness present; "staleness window" present in
      §Canary; §Respawn points to §Liveness.
- [x] pickup §3: "died un-parked" appears ONLY inside the RECLAIMABLE
      branch.
- [x] The hook prints branch · heartbeat age · Status word · verdict
      per worktree — verified against a scratch worktree (LIVE,
      silent-RECLAIMABLE, and terminal-RECLAIMABLE all exercised),
      scratch removed after.
- [x] TEMPLATE vocabulary covers {airborne · claimed · parked ·
      respawned · superseded · failed · held · shipped}.
- [x] HOME §Terms + portrait clause in place.
- [x] IDEAS carries the double-dispatch diagnostic line.
- [x] check:links green · check:ledger green · full CI mirror green ·
      the pushed commit's Actions run green.

## Deviations

- Precedence disambiguation: the kickoff's LIVE clause ("within the
  window, whatever the Status") and RECLAIMABLE clause ("terminal
  Status OR silent") overlap on a just-parked bench — the park stamp
  IS a fresh commit. Terminal Status wins (see §The rule above);
  otherwise a parked bench could not be resumed or respawned until
  the window lapsed. Safe by the kickoff's own wake-lock argument.
- pickup §3: the kickoff's replacement text ended "Git wins where it
  disagrees with the board" — §3 already closes with exactly that
  rule, so the sentence was not duplicated.
- The hook had no "existing worktree listing" to extend (only
  gone-local branch removal) — the per-worktree verdict block is new,
  placed immediately after it.

## Open questions

none.
