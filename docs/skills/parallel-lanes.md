---
type: skill-procedure
title: Parallel lanes
status: living
---

# Parallel lanes — dispatching, flying, reviewing

Consult before dispatching, running, or reviewing ANY lane, local or
cloud. The law below is stated in LAWS §Parallel lanes & cloud; this
page adds the mechanics.

Sources:
[LAWS §Parallel lanes & cloud](../LAWS.md#parallel-lanes--cloud)

## The lane law (seat-blind — identical local or cloud)
Every lane

1. is born bench-first BY THE COCKPIT — branch, spec, memory stub,
   draft PR pushed to origin BEFORE any session exists;
2. runs the canary handshake before real work — its first act is a
   trivial push; the cockpit writes airborne-or-failed into the
   pre-birthed memory; a lane seeing failed/aborted, a Status it does not
   own (parked · respawned · superseded), or no acknowledgment,
   self-terminates;
3. pushes every commit;
4. never shares a file with any sibling;
5. writes ITS OWN memory at four moments — handshake claim, each
   decision or dead end, blocking, completion (before the
   ready-flip);
6. speaks through its PR — `BLOCKED:` comments, ready-flip + plain
   summary;
7. never writes main — no DASHBOARD, no IDEAS, no ROADMAP ticks, no
   history/, no merges.

Seat-invariance law: a task's artifacts must be indistinguishable by
seat; only ritual stamps name seats.

Sources:
[DASHBOARD](../DASHBOARD.md)
[IDEAS](../IDEAS.md)
[ROADMAP](../ROADMAP.md)

## Bench-first birth (cockpit procedure)
1. Pull main fresh.
2. Branch `<prefix>/<id>-<slug>`.
3. Spec `docs/specs/<id>-<slug>.md` — only if discussion opened the
   task; a fully-specified ROADMAP line skips it.
4. Memory stub `docs/memory/<id>.md` in the locked format (TEMPLATE)
   — Status: "bench ready, no worker yet — birthed <date> by
   <seat>"; the kickoff's essence in prose under What this task is.
5. Push, `gh pr create --draft`, then VERIFY branch + PR exist on
   origin.
6. Only then spawn the worker.

Sources:
[TEMPLATE](../memory/TEMPLATE.md)

## Respawn on an existing bench (liftoff adopt)
A parked lane's bench already lives on origin — skip birth. Adoption
presumes a RECLAIMABLE bench per [§Liveness](#liveness--live-vs-reclaimable)
— a live heartbeat is never adopted. The
cloud worker's first act is the canary ON that branch — memory
Status → "claimed for respawn by <vehicle> — <date>" — then WAIT;
the cockpit ack overwrites the parked Status with "airborne ·
<url> · <date>". Everything after — diary, PR speech, landing — is
the ordinary lane law.

## Liveness — live vs reclaimable
Commits are the heartbeat
([LAWS §Task anatomy](../LAWS.md#task-anatomy)): a bench's branch
tells you whether a worker is flying it — the board and even the
Status word can lag; the heartbeat cannot
([D-042](../DECISIONS.md#d-042--2026-07--lane-liveness--derive-live-vs-reclaimable-from-the-commit-heartbeat-read-it-at-claim-check-and-session-start-cleanup-so-a-live-lane-is-never-adopted-or-pruned-amends-the-claim-check-clause-and-pickup-3-upholds-the-wake-lock-and-seat-invariance)).
Read at the two blind sites: the claim check
([LAWS §Workflow](../LAWS.md#workflow-non-negotiable)) and
[pickup §3](pickup.md)'s worktree sweep, fed by the session-start
hook's printed per-worktree verdict.

- LIVE — the memory Status is non-terminal and the branch's last
  commit is within the staleness window
  ([§Canary](#canary-handshake-both-sides) holds the value): a
  worker is flying it. Hands off, whatever that Status says — never
  adopt, never secure, never prune.
- RECLAIMABLE — the Status is terminal (parked · failed · held ·
  shipped · superseded) OR the branch is silent past the window. A
  terminal Status outranks a fresh heartbeat: the stamp commit IS
  the parking act, and the wake-lock guarantees no worker survives
  a Status it does not own. Adopt via
  [§Respawn](#respawn-on-an-existing-bench-liftoff-adopt); a dirty
  reclaimable worktree is secured per [pickup §3](pickup.md).
- Genuine doubt → announce what you see and ask the founder.

The wake-lock is the backstop for a misjudged window: a lane wrongly
judged reclaimable meets a Status it does not own on its next wake
and self-terminates — the cost is a restart, never split-brain work.

## Canary handshake (both sides)
The timeout constants live HERE and nowhere else — LAWS and liftoff
point back to this section: the window is ~10 minutes (cloud) or ~2
(local), and both sides use the SAME window.
Sibling constant — liveness staleness window: ~30 minutes,
generously longer than the canary window so a live lane between
commits never reads dead; tunable, settled here
([§Liveness](#liveness--live-vs-reclaimable) consumes it; the
wake-lock backstops misjudgment).
- Lane side: first act on waking is one trivial commit — memory
  Status → "claimed by <vehicle> — <date>" — pushed to its branch;
  then WAIT for the cockpit's acknowledgment in memory before real
  work. Seeing "failed/aborted", a Status this lane does not own
  (parked · respawned · superseded), or no acknowledgment within that
  window (~10 min cloud / ~2 local): self-terminate cleanly (push
  whatever exists, stop).
- Cockpit side: watch for the canary. On arrival, write "airborne ·
  <vehicle or url> · <date>" into the lane's memory Status and push.
  No canary within ~10 minutes (cloud) or ~2 (local): write "spawn
  failed <date> — <reason> → run locally" into the memory and record
  the abort on the board — the lane's Sessions row + the Needs-you
  mirror ([handoff §4](handoff.md)), then stand the lane down.

Sources:
[DASHBOARD](../DASHBOARD.md)

## The four memory moments (the lane's diary rule)
1. The handshake claim.
2. Each decision or dead end, as it happens.
3. The moment it blocks — with a matching `BLOCKED:` PR comment.
4. Completion — the final rewrite BEFORE flipping the PR ready.

## Wake-lock & parking
On ANY resume or wake, a lane re-reads its memory Status FIRST. A
Status it does not own — parked · respawned · superseded · failed —
means: push nothing new, terminate. Completion and a failed spawn
still PARK: the outcome is already in memory, and nothing continues
without a founder-initiated action (the merge word, a fresh dispatch).
A `BLOCKED:` lane splits by vehicle: on a phone-reachable vehicle
(cloud session · RC-tethered local session) it IDLE-WAITS — alive,
silent, zero-cost — for the founder's reply (a PR comment on cloud, a
Claude-app message when RC-tethered), which resumes it in-thread; a
bare detached background agent, invisible from the phone, parks on
block as before. Blocked local lanes also park at handoff FULL — the
machine is halting.

## Vehicles
- LOCAL — the mid-session default per the chooser: background agents,
  or `claude -w` worktree sessions. Worktrees share the clone's disk;
  lanes stay file-disjoint by law. During go-remote every lane must
  be RC-visible — inside the RC'd cockpit or an interactive
  auto-connect session; a bare detached spawn is invisible from the
  phone and unlawful in tether posture.
- CLOUD — liftoff only, via the route ladder (§Cloud spawn); never a
  CLI spawn. Push canary first; never end a cloud session before its
  work is on origin.
- Agent Teams (research/review tasks): lead Fable/Opus, at most 4
  Sonnet teammates (env flag already set in `.claude/settings.json`).

Sources:
[dispatch law](../LAWS.md#workflow-non-negotiable)

## Cloud spawn — route ladder
Try in order; the maiden flight records the winner here per
[LAWS §Self-improvement](../LAWS.md#self-improvement):

1. **Label-spawn.** On the pre-birthed draft PR:
   `gh pr edit <N> --add-label lane:cloud`. The lane-worker routine
   (GitHub trigger `pull_request.labeled`, filtered to label
   `lane:cloud`) starts a cloud session on that PR. Its saved prompt:
   check out the PR's branch, read `docs/memory/<id>.md`, follow
   parallel-lanes, and @mention `wsher0901` in a PR comment on any
   `BLOCKED:` and on completion. The GitHub push IS the notification
   channel; the founder's PR-comment reply feeds the running session.
2. **Manual.** claude.ai/code or the mobile app → new session ON the
   pre-birthed branch → paste the kickoff line (task ID + branch +
   "follow parallel-lanes").

Winning route: unrecorded — the maiden flight writes it.

Sources:
[LAWS §Self-improvement](../LAWS.md#self-improvement)
[Cloud lane worker — SETUP](../SETUP.md#once-and-done--cloud-accounts)

## When a lane finishes
Pre-review its ready PR against FOUNDATION, its ROADMAP line, and the
reliability law BEFORE surfacing it to the founder; then ship takes
over. Flip draft→ready ONLY after `gh pr checks` reports the pushed
commit's Actions run green — local green never suffices.
Ideas-surfaced harvesting: any "Ideas surfaced" lines in a lane's
memory move to IDEAS at the next cockpit ritual — lanes never write
main themselves.

Sources:
[FOUNDATION](../FOUNDATION.md)
[ROADMAP](../ROADMAP.md)
[reliability law](../FOUNDATION.md#the-reliability-law)
[ship](ship.md)
[IDEAS](../IDEAS.md)
