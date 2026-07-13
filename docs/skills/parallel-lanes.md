---
type: skill-procedure
title: Parallel lanes
status: living
---
# Parallel lanes — dispatching, flying, reviewing

Consult before dispatching, running, or reviewing ANY lane, local or
cloud. The law below is stated in
[LAWS §Parallel lanes & cloud](../LAWS.md#parallel-lanes--cloud);
this page adds the mechanics.

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
7. never writes main — no [DASHBOARD](../DASHBOARD.md), no
   [IDEAS](../IDEAS.md), no [ROADMAP](../ROADMAP.md) ticks, no
   history/, no merges.

Seat-invariance law: a task's artifacts must be indistinguishable by
seat; only ritual stamps name seats.

## Bench-first birth (cockpit procedure)
1. Pull main fresh.
2. Branch `<prefix>/<id>-<slug>`.
3. Spec `docs/specs/<id>-<slug>.md` — only if discussion opened the
   task; a fully-specified ROADMAP line skips it.
4. Memory stub `docs/memory/<id>.md` in the locked format
   ([TEMPLATE](../memory/TEMPLATE.md)) — Status: "bench ready, no
   worker yet — birthed <date> by <seat>"; the kickoff's essence in
   prose under What this task is.
5. Push, `gh pr create --draft`, then VERIFY branch + PR exist on
   origin.
6. Only then spawn the worker.

## Respawn on an existing bench (liftoff adopt)
A parked lane's bench already lives on origin — skip birth. The
cloud worker's first act is the canary ON that branch — memory
Status → "claimed for respawn by <vehicle> — <date>" — then WAIT;
the cockpit ack overwrites the parked Status with "airborne ·
<url> · <date>". Everything after — diary, PR speech, landing — is
the ordinary lane law.

## Canary handshake (both sides)
- Lane side: first act on waking is one trivial commit — memory
  Status → "claimed by <vehicle> — <date>" — pushed to its branch;
  then WAIT for the cockpit's acknowledgment in memory before real
  work. Seeing "failed/aborted", a Status this lane does not own
  (parked · respawned · superseded), or no acknowledgment after the
  timeout: self-terminate cleanly (push whatever exists, stop).
- Cockpit side: watch for the canary. On arrival, write "airborne ·
  <vehicle or url> · <date>" into the lane's memory Status and push.
  No canary within ~10 minutes (cloud) or ~2 (local): write "spawn
  failed <date> — <reason> → run locally" into the memory and record
  the abort in [DASHBOARD](../DASHBOARD.md)'s Cloud section (the
  abort ledger), then stand the lane down.

## The four memory moments (the lane's diary rule)
1. The handshake claim.
2. Each decision or dead end, as it happens.
3. The moment it blocks — with a matching `BLOCKED:` PR comment.
4. Completion — the final rewrite BEFORE flipping the PR ready.

## Wake-lock & parking
On ANY resume or wake, a lane re-reads its memory Status FIRST. A
Status it does not own — parked · respawned · superseded · failed —
means: push nothing new, terminate. After completion, a `BLOCKED:`,
or a failed spawn, a lane PARKS: every outcome is already in its
memory, and nothing continues without a founder-initiated action
(the merge word, a Needs-you answer, a fresh dispatch).

## Vehicles
- LOCAL — the mid-session default per the
  [dispatch law](../LAWS.md#workflow-non-negotiable): background
  agents, or `claude -w` worktree sessions. Worktrees share the
  clone's disk; lanes stay file-disjoint by law.
- CLOUD — liftoff only: claude.ai/code or the mobile app, never a
  CLI spawn. Push canary first; never end a cloud session before its
  work is on origin.
- Agent Teams (research/review tasks): lead Fable/Opus, at most 4
  Sonnet teammates (env flag already set in `.claude/settings.json`).

## Cloud spawn — route ladder
Try in order; record the winning route here per
[LAWS §Self-improvement](../LAWS.md#self-improvement) (P8 maiden
flight):

1. claude.ai/code → open the repo → new session ON the pre-birthed
   branch → paste the kickoff line (task ID + branch + "follow
   parallel-lanes").
2. The mobile app, same recipe.

Winning route: unrecorded — the P8 maiden flight writes it.

## When a lane finishes
Pre-review its ready PR against [FOUNDATION](../FOUNDATION.md), its
[ROADMAP](../ROADMAP.md) line, and the
[reliability law](../FOUNDATION.md#the-reliability-law) BEFORE
surfacing it to the founder; then [ship](ship.md) takes over.
Ideas-surfaced harvesting: any "Ideas surfaced" lines in a lane's
memory move to [IDEAS](../IDEAS.md) at the next cockpit ritual —
lanes never write main themselves.
