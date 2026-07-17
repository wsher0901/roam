---
type: history
slug: ship-wiring
shipped: 2026-07-17 11:09
pr: 159
---
# ship-wiring — the pre-GATE critic wired into ship

## Status

Shipped — merged as
[#159](https://github.com/wsher0901/roam/pull/159). The D-044 entry
+ full ripple landed in one commit, the six-step CI mirror ran
green, the critic's maiden WIRED run flew on this very PR (verdict:
pass), and its message-relay finding graduated into ship §6's
invocation-mechanics clause before the weld.

## What this task is

Execute the standing offer ([IDEAS](../../../IDEAS.md) inbox line
of 2026-07-17; founder go the same morning): wire the shipped
[reviewer subagent](reviewer-subagent.md) into
[ship §6](../../../skills/ship.md#6--the-gate) as the pre-GATE
advisory critic. One procedure edit plus its D-number
([D-044](../../../DECISIONS.md#d-044--2026-07--the-pre-gate-critic-goes-live--ships-gate-opens-by-invoking-the-reviewer-subagent-verdicts-advisory-riding-with-the-summary-turns-on-the-staged-reviewer-upholds-d-038-and-the-reviewer-frame));
the reviewer itself untouched. Contract:
[the spec](../../../specs/ship-wiring.md).

## Pending issues

none

## Left / idle

Nothing. If the `reviewer` agent-type registration gap (story,
gotcha 1) recurs at the next ship, it graduates to a defect worth
its own fix.

## The story

Born 2026-07-17, morning sitting, work PC, on the founder's go:
"fly it per your standing offer — it reaches THE GATE; nothing
merges without my word after the Web review."

Placement call made at birth: the invocation lands INSIDE §6 as THE
GATE's first act, not as a new numbered section — the vault weaves
`ship §6`/`§7` anchors from the agent file, HOME's term entry, and
shipped histories; renumbering would break them all for zero
function.

[D-044](../../../DECISIONS.md#d-044--2026-07--the-pre-gate-critic-goes-live--ships-gate-opens-by-invoking-the-reviewer-subagent-verdicts-advisory-riding-with-the-summary-turns-on-the-staged-reviewer-upholds-d-038-and-the-reviewer-frame)
landed on this branch (entry + ripple in one commit, per
[decide](../../../skills/decide.md)): ship §6 gained the critic,
SETUP filed the reviewer under
[§Once and done — repo-side](../../../SETUP.md#once-and-done--repo-side-travels-with-git)
and retired its §Staged line, the IDEAS inbox line cleared. Anchors
born resolving: check:links green before that commit's push.

Closing the work: branch synced with origin/main (already current),
full CI mirror green in one pass (lint · format:check · check:links
· check:ledger · test · build — 1895 links, 72↔72 ledger, 3 tests).

The critic's maiden WIRED run (this PR's own gate) returned
**pass** — with two invocation gotchas, recorded because they are
invisible in the diff:

1. The cockpit harness had NOT registered the `reviewer` agent type
   from `.claude/agents/reviewer.md` this session — invoking it by
   name failed. Deviation flown: a general-purpose agent pinned to
   Sonnet was instructed to read and adopt the charter file
   verbatim, read-only conduct enforced by instruction. The charter
   frame, checks, and output shape were preserved; the vehicle
   differed.
2. The stand-in's verdict needed an explicit message-relay nudge —
   a background agent's plain-text output never reaches the
   cockpit; the verdict arrived only after being asked to send it
   as a message. Graduated into the procedure at the founder's
   merge word: §6 gained the invocation-mechanics clause (verdict
   as a message, or run synchronously) in the same sitting, riding
   this PR before the weld.

Datum observed at bench birth, not this task's to act on: a fresh
empty `claude/session-*` branch appeared on origin at main's tip
during the morning sitting — consistent with the clerk session's
platform-side branch creation, zero commits from the session
itself. Left for the founder's C-checklist notes.

## Where to look

- Spec: [ship-wiring](../../../specs/ship-wiring.md)
- The critic: `.claude/agents/reviewer.md` · its
  [spec](../../../specs/reviewer-subagent.md) ·
  [story](reviewer-subagent.md)
- The decision:
  [D-044](../../../DECISIONS.md#d-044--2026-07--the-pre-gate-critic-goes-live--ships-gate-opens-by-invoking-the-reviewer-subagent-verdicts-advisory-riding-with-the-summary-turns-on-the-staged-reviewer-upholds-d-038-and-the-reviewer-frame)
- PR: [#159](https://github.com/wsher0901/roam/pull/159)
