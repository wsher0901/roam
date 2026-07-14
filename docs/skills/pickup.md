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
branch/PR reality, memory Status lines), REPAINT it now per the
board spec in [handoff §4](handoff.md) — pickup is a ritual and may
write the DASHBOARD. Ship the repaint exactly as handoff §5 ships
its note: chore branch from freshly pulled main, DASHBOARD-only
commit, micro-PR, immediate squash-merge.

Sources:
[handoff §4–§5](handoff.md)

## 5 · Render the sit-down summary (exactly this shape)
- Header: date · seat · baton claimed · last ritual ·
  repaint/self-heal/hook notes (only if any).
- SINCE YOU LEFT — deltas since the last FULL handoff stamp:
  "Shipped N — <titles + PRs>" · session changes (newly 🟢 ready ·
  🔴 blocked · spawn-fails, each with its age) · anything the hooks
  reported. Omit whatever didn't change.
- NEEDS YOU — verbatim from the board.
- MAIN SESSION — only if one exists: Status / What it is / one-line
  story, from its memory.
- NEXT — Now: one action · Parallel: one or "—" (the pacing law).
Everything else lives on the board ([handoff §4](handoff.md)) —
point, don't repeat. Then STOP and wait for the founder — the claim
check happens in conversation before any task starts.

Sources:
[pacing law — LAWS §Workflow](../LAWS.md#workflow-non-negotiable)
