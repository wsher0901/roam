---
type: skill-procedure
title: Pickup
status: living
---
# Pickup — the sit-down briefing

Cockpit only — dispatched lanes and background agents skip it and
proceed with their kickoff. Runs unprompted on the founder's first
message of a session. Assume the founder remembers NOTHING; plain
English everywhere. Glyphs, here and on the board: 🟢 done ·
🟡 ongoing · 🔴 issue · ⚪ idle.

## 1 · Claim the baton
Read the DASHBOARD header stamp and announce "last ritual: <when> ·
<seat>". Claiming happens on fresh origin (the session-start hook
pulls main and removes welded-elsewhere local branches; if it could
not, pull now). From this moment this session is the cockpit.

Sources:
[DASHBOARD](../DASHBOARD.md)
[baton law — LAWS §Parallel lanes & cloud](../LAWS.md#parallel-lanes--cloud)

## 2 · Self-heal
If an open PR touches ONLY DASHBOARD.md and/or IDEAS.md, it is a
stranded micro-PR: squash-merge it now, pull, and report it in the
briefing header.

Sources:
[DASHBOARD](../DASHBOARD.md)
[IDEAS](../IDEAS.md)

## 3 · Gather (git outranks the board)
Read ROADMAP · DASHBOARD · every active branch's memory/<id>.md ·
live git (`git fetch --prune` first — stale remote-tracking refs
lie — then `git branch -r`, `gh pr list --state open` including
drafts). Check `git worktree list`: a dirty sibling worktree is a
lane that died un-parked — secure it (commit + push on its branch)
and surface it under NEEDS YOU. Relay any hook lines from session
start (branches removed as welded elsewhere, or one it could not
remove). Where the board and git disagree, git wins — say so
plainly.

Sources:
[ROADMAP](../ROADMAP.md)
[DASHBOARD](../DASHBOARD.md)

## 4 · Repaint if stale
If the board disagrees with its sources (ROADMAP checkboxes,
branch/PR reality, memory Status lines), REPAINT it now — pickup is
a ritual and may write the DASHBOARD. Counts are computed at render
time, never carried. Ship the repaint exactly as handoff §5 ships
its note: chore branch from freshly pulled main, DASHBOARD-only
commit, micro-PR, immediate squash-merge.

Sources:
[DASHBOARD](../DASHBOARD.md)
[handoff §5](handoff.md)

## 5 · Render the briefing (exactly this shape)
- Header: date · seat · baton claimed · last ritual · self-heal and
  hook notes (only if any).
- YOU ARE HERE — the version bar, then one bar per open stage, each
  ending → its current task + glyph.
- CLOUD — one line per dispatched task: 🟢 done/ready · 🟡 flying +
  last-push age · 🔴 needs you / failed + reason · ⚪ held + reason.
  Omit the section when nothing is dispatched.
- FOCUS — one block per active founder task: Status / What it is /
  Story, pulled from its memory file.
- NEEDS YOU — numbered list.
- NEXT — Now: one action · Parallel: one or "—" (the pacing law).

Then STOP and wait for the founder — the claim check happens in
conversation before any task starts.

Sources:
[pacing law — LAWS §Workflow](../LAWS.md#workflow-non-negotiable)
