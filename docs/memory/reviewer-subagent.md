---
type: memory
id: reviewer-subagent
updated: 2026-07-16 · birth · work PC
---
# reviewer-subagent — the ship-time diff critic

## Status
cloud spawn failed — 2026-07-16 17:16 · route 1 (label-spawn): label
applied 17:02:36, no canary, no comment, no check-run from any
Claude app within ~13 min (window ~10). Lane stood down; the bench
is intact on origin. Next: the founder checks the routine's run
record at claude.ai/code/routines, then route 1 again (remove +
re-add the label after fixing) · route 2 (manual claude.ai/code
session on THIS branch) · or run locally. A late-firing session
self-terminates on this Status per the wake-lock — it is not yours.

## What this task is
The ship-time diff critic
([SETUP §Staged](../SETUP.md#staged--turns-on-when-its-stage-opens)):
finalize [the spec](../specs/reviewer-subagent.md) and write the
agent file `.claude/agents/reviewer.md`. The frame is fixed
(read-only tools · invoked before THE GATE · declared checks ·
structured verdict · never edits, never merges, never blocks on
style). TWO QUESTIONS ARE RESERVED FOR THE FOUNDER — verdict policy
(advisory vs blocking) and the reviewer's own model + effort — to be
raised in one `BLOCKED:` PR comment, then idle-wait. Out of scope:
editing ship.md (cockpit follow-up), anything beyond the two
deliverables.

## Pending issues
none at birth.

## Left / idle
Everything — no worker has claimed the bench yet.

## The story
Born as the payload of the delegation maiden flight (D-041 route 1:
label-spawn). Founder attestations at preflight, recorded here as
the flight's memory until the block-2 flight bench exists: the
routine was re-saved from
[SETUP's seven-clause master](../SETUP.md#once-and-done--cloud-accounts),
and the Web Project box was pasted current — Needs-you clearing
waits for the flight report. Preflight receipts (cockpit, 17:01):
label `lane:cloud` exists · main requires the `checks` context ·
repo auto-merge enabled · count:runs baseline 0 today / 15
remaining · liveness sweep clean (zero benches, zero LIVE).

Route 1 outcome (the flight's first hard datum): label applied
17:02:36; the idempotency guard read 0 labels + "bench ready"
before it. Thirteen minutes of watching produced zero session
evidence — no canary commit, no PR comment, no check-run from any
Claude app; the only actors on the PR were vercel[bot] and the
label event itself. `count:runs` reads 1 — the label-event proxy
counts the trigger whether or not a session materialized; whether
the provider burned a run is visible only at
claude.ai/code/routines / settings/usage (founder-side check for
the flight report). Spawn declared failed at 17:16 per
[§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)'s
cockpit side; the label left in place as evidence (a route-1 retry
needs remove + re-add anyway; the wake-lock starves any
late-firing session on the failed Status).

## Where to look
Spec: [reviewer-subagent](../specs/reviewer-subagent.md). Lane law:
[parallel-lanes](../skills/parallel-lanes.md) (§Canary · §Wake-lock
· §Cloud spawn). The saved-prompt master + Models & effort doctrine:
[SETUP §cloud](../SETUP.md#once-and-done--cloud-accounts).
