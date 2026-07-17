---
type: memory
id: reviewer-subagent
updated: 2026-07-17 · 02:05 UTC · cloud
---
# reviewer-subagent — the ship-time diff critic

## Status
airborne — cloud · 2026-07-17 02:05 UTC. Founder resolved both
reserved questions in-thread on
[PR #146](https://github.com/wsher0901/roam/pull/146): advisory
verdict policy, Sonnet 5 · high effort, both reversible by a later
[decide](../skills/decide.md). Both deliverables now exist (spec
finalized, `.claude/agents/reviewer.md` written); running the CI
mirror next, then the ready-flip and completion @mention.

## What this task is
The ship-time diff critic
([SETUP §Staged](../SETUP.md#staged--turns-on-when-its-stage-opens)):
finalize [the spec](../specs/reviewer-subagent.md) and write the
agent file `.claude/agents/reviewer.md`. The frame is fixed
(read-only tools · invoked before THE GATE · declared checks ·
structured verdict · never edits, never merges, never blocks on
style). Two questions were reserved for the founder — verdict policy
and the reviewer's own model + effort — raised in one `BLOCKED:` PR
comment and resolved (see The story · spec §Founder decisions). Out
of scope:
editing ship.md (cockpit follow-up), anything beyond the two
deliverables. It is also the PAYLOAD of the delegation maiden
flight's cloud leg (leg A) — the task and the flight test ride
together.

## Pending issues
None on the task itself — both reserved questions resolved. Block 2
of the flight (the flight-report bench, DASHBOARD Needs-you 5) is
still the cockpit's follow-up once this task ships; the flight data
below is this bench's contribution to that report.

## Left / idle
Nothing on the two deliverables. Remaining before ready: the full CI
mirror (this session), then the ready-flip refresh and completion
@mention (the PR is already technically "ready" as a trigger artifact
of ladder step 2, but the completion rewrite + summary still gate
per the lane law).

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
cap counter never moved for it. So the flight's local half was
already proven before step 2 landed.

Step 2 result — SUCCEEDED. A cloud session woke on this bench at
2026-07-17 01:54 UTC, confirming the draft-filtering hypothesis: the
PR's ready-flip (part of step 2), not the label alone, was the
missing variable. Canary pushed 01:54 (Status → "claimed by cloud");
cockpit ack landed 01:55 ("airborne"); real work began. A stray
redelivered `pull_request.labeled` webhook arrived afterward citing
the pre-canary head SHA — the wake-lock's re-read-Status-first rule
handled it cleanly: Status was this lane's own non-terminal claim, so
no action was taken, matching the maiden-flight verify list's
redelivery-safety expectation. Both reserved questions were then
raised in one `BLOCKED:` comment (01:58) and the founder answered
both together at ~02:04: advisory verdict policy, Sonnet 5 · high
effort, both reversible by a later
[decide](../skills/decide.md). The spec was folded and
`.claude/agents/reviewer.md` written (read-only tools: Read, Grep,
Glob · model sonnet · effort high · advisory structured-verdict
output) immediately after.

Flight verdict (for the block-2 report): route 1 (label-spawn) DOES
work, but only against a ready (non-draft) PR — draft PRs appear to
be filtered from the trigger. The winning recipe: flip the PR ready,
then apply (or re-apply) the `lane:cloud` label. This resolves
[parallel-lanes §Cloud spawn](../skills/parallel-lanes.md#cloud-spawn--route-ladder)'s
"winning route: unrecorded" note — a cockpit follow-up should record
it there directly.

## Where to look
Spec: [reviewer-subagent](../specs/reviewer-subagent.md). PR:
[#146](https://github.com/wsher0901/roam/pull/146). Lane law:
[parallel-lanes](../skills/parallel-lanes.md) (§Canary · §Wake-lock
· §Cloud spawn — the maiden-flight verify checklist lives there).
The saved-prompt master + Models & effort doctrine:
[SETUP §cloud](../SETUP.md#once-and-done--cloud-accounts). Board
row: DASHBOARD §Sessions + Needs-you 5.
