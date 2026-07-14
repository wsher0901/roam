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
- Ruled header: "── pickup · <date> · <seat> ──". Caption line:
  "Last handoff: <FULL | liftoff> · <date HH:MM> · <seat>". Then
  THE EXIT TABLE — one row per task parked or lifted at that
  handoff: | Task you left | At exit | Now | Your move |. "Now" is
  the current Status-vocabulary state + last-push age; if nothing
  was left, one row: "nothing parked · nothing lifted". Repaint,
  self-heal, or hook notes append as small lines under the table,
  only if any exist.
- RECENT SUMMARY — a short plain paragraph: what the founder
  actually did last sitting and where it stopped, rebuilt from the
  main task's memory Story plus the handoff note. Short sentences,
  everyday words, written for a tired reader.
- PENDING ISSUES — anything that went wrong or was left worrying
  (memories' Pending-issues + the handoff note), each with its
  current standing. If none, exactly: "No issues from last
  sitting."
- OPEN CHAT + DESIGN DISCUSSION — mirror the board's section:
  verbatim titles bold in quotes, surface tag, one topic line,
  next step each.
- NEEDS YOUR ATTENTION — the board's Needs-you verbatim; any 🔴 or
  ready rows from the exit table fold in at the top.
- NEXT — Now: one action · Parallel: one or "—" (the pacing law).
No ritual self-narration ("baton claimed" and kin stay silent
mechanics). Everything else lives on the board
([handoff §4](handoff.md)) — point, don't repeat. Then STOP — the
claim check happens in conversation before any task starts.

Sources:
[TEMPLATE — the Status vocabulary](../memory/TEMPLATE.md)
[pacing law — LAWS §Workflow](../LAWS.md#workflow-non-negotiable)
