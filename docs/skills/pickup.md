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
Read [DASHBOARD](../DASHBOARD.md)'s header stamp and announce "last
ritual: <when> · <seat>". Claiming happens on fresh origin (the
session-start hook pulls main; if it could not, pull now). From this
moment this session is the cockpit
([baton law](../LAWS.md#parallel-lanes--cloud)).

## 2 · Self-heal
If an open PR touches ONLY [DASHBOARD.md](../DASHBOARD.md) and/or
[IDEAS.md](../IDEAS.md), it is a stranded micro-PR: squash-merge it
now, pull, and report it in the briefing header.

## 3 · Gather (git outranks the board)
Read [ROADMAP](../ROADMAP.md) · [DASHBOARD](../DASHBOARD.md) · every
active branch's memory/<id>.md · live git (`git branch -r`,
`gh pr list --state open` including drafts). Where the board and git
disagree, git wins — say so plainly.

## 4 · Repaint if stale
If the board disagrees with its sources (ROADMAP checkboxes,
branch/PR reality, memory Status lines), REPAINT it now — pickup is
a ritual and may write [DASHBOARD](../DASHBOARD.md). Counts are
computed at render time, never carried.

## 5 · Render the briefing (exactly this shape)
- Header: date · seat · baton claimed · last ritual · self-heal note
  (only if one happened).
- YOU ARE HERE — the version bar, then one bar per open stage, each
  ending → its current task + glyph.
- CLOUD — one line per dispatched task: 🟢 done/ready · 🟡 flying +
  last-push age · 🔴 needs you / failed + reason · ⚪ held + reason.
  Omit the section when nothing is dispatched.
- FOCUS — one block per active founder task: Status / What it is /
  Story, pulled from its memory file.
- NEEDS YOU — numbered list.
- NEXT — Now: one action · Parallel: one or "—"
  ([pacing law](../LAWS.md#workflow-non-negotiable)).

Then STOP and wait for the founder — the claim check happens in
conversation before any task starts.
