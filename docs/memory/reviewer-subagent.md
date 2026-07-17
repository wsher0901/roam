---
type: memory
id: reviewer-subagent
updated: 2026-07-17 · 01:54 UTC · cloud
---
# reviewer-subagent — the ship-time diff critic

## Status
claimed by cloud — 2026-07-17 · 01:54 UTC. Ladder step 2 (ready-flip
+ re-label) produced this session — the first live cloud spawn of
the maiden flight. Waiting for the cockpit's airborne ack per
[§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)
before real work begins.

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
deliverables. It is also the PAYLOAD of the delegation maiden
flight's cloud leg (leg A) — the task and the flight test ride
together.

## Pending issues
The founder's route call, in Your-move terms (board Needs-you 5):
1. Check claude.ai/code/routines — did route 1's label trigger
   register a run at all? (Our `count:runs` proxy reads 1; whether
   the provider burned a run only its own counter can say.)
2. Then: retry route 1 (remove + re-add the `lane:cloud` label after
   fixing whatever the run record shows) · route 2 (manual
   claude.ai/code session ON branch `chore/reviewer-subagent`) · or
   fly this task on a local lane instead.
Block 2 of the flight (the flight-report bench) is pending the
founder's paste — the flight data below rides here until it exists.

## Left / idle
All task work — no worker ever claimed the bench. The bench itself
is complete and rescuable: branch + spec + memory + draft PR on
origin.

## The story
Born 2026-07-16 17:01 as the payload of the delegation maiden
flight (D-041, route 1 label-spawn). Founder attestations at
preflight, recorded here until the block-2 flight bench exists: the
routine was re-saved from
[SETUP's seven-clause master](../SETUP.md#once-and-done--cloud-accounts),
and the Web Project box was pasted current — Needs-you clearing
waits for the flight report. Preflight receipts (cockpit, 17:01):
label `lane:cloud` exists · main requires the `checks` context ·
repo auto-merge enabled (deviation: not squash-only — merge-commit
and rebase are also enabled, branch auto-delete off) · count:runs
baseline 0 today / 15 remaining · liveness sweep clean.

Route 1 outcome (the flight's first hard datum): label applied
17:02:36; the idempotency guard read 0 labels + "bench ready"
before it. Thirteen minutes of watching produced zero session
evidence — no canary commit, no PR comment, no check-run from any
Claude app; the only actors on the PR were vercel[bot] and the
label event itself. `count:runs` reads 1 — the label-event proxy
counts the trigger whether or not a session materialized. Spawn
declared failed at 17:16 per
[§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)'s
cockpit side; the label left in place as evidence (a route-1 retry
needs remove + re-add anyway; the wake-lock starves any late-firing
session).

Retry ladder (route 1 diagnosis) — opened 2026-07-16 21:29 by the
cockpit on the founder's route call. Founder's diagnosis first: the
routine is verified Active, bound to wsher0901/roam, prompt current,
model Opus 4.8, and shows ZERO runs ever — so the 07-15 labeled
event never matched the routine at all; the `count:runs` proxy's 1
was the raw label event, not a burned run. The GitHub App
installation is verified healthy (roam selected, permissions
current). Remaining suspects are discriminated one variable per
step: Step 1 re-label on the draft as-is · Step 2 re-label with the
PR flipped ready (tests the draft-filtering hypothesis; that flip is
a trigger EXPERIMENT, not the completion signal — completion remains
@mention + Actions green) · Step 3 stand route 1 down, route 2 next.
`count:runs` before the ladder: 1 today · 14 remaining (the 17:02
event). Observations land here as flight evidence.

Step 1 result — FAILED. The re-label fired from the work-PC side at
21:31:49 (unlabeled 21:31:17 → labeled 21:31:49, actor wsher0901),
before this cockpit sat down; the home-PC cockpit discovered it via
the counter (2 today · 13 remaining) and the PR timeline. Sixteen-plus
minutes of evidence checks at 21:47–21:52 found nothing: branch tip
unmoved at e46cce7, zero PR comments, zero check-runs, zero timeline
actors besides the label event itself. A fresh labeled event on a
verified-Active routine still spawned nothing — the draft-filtering
hypothesis is now the lead suspect. Step 2 (flip
[#146](https://github.com/wsher0901/roam/pull/146) ready + re-label)
fires at ~21:53; the ready-flip is a trigger EXPERIMENT only —
completion remains @mention + Actions green. Cap cost so far: each
labeled event burns one proxy count; step 2 makes it 3 today · 12
remaining.

Sibling context: leg B (the local control lane, time-doctrine) flew
the entire lane law unassisted the same afternoon and was welded as
[#147](https://github.com/wsher0901/roam/pull/147) —
[the story](../history/workshop/definition/time-doctrine.md). The
cap counter never moved for it. So the flight's local half is
proven; only the cloud spawn path remains unproven, and this bench
is the test article when the founder calls the route.

## Where to look
Spec: [reviewer-subagent](../specs/reviewer-subagent.md). PR:
[#146](https://github.com/wsher0901/roam/pull/146). Lane law:
[parallel-lanes](../skills/parallel-lanes.md) (§Canary · §Wake-lock
· §Cloud spawn — the maiden-flight verify checklist lives there).
The saved-prompt master + Models & effort doctrine:
[SETUP §cloud](../SETUP.md#once-and-done--cloud-accounts). Board
row: DASHBOARD §Sessions + Needs-you 5.
