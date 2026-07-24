---
type: skill-procedure
title: Pickup
status: living
---
# Pickup — the sit-down briefing

Control tower only — dispatched lanes and background agents skip it
and
proceed with their kickoff. Runs unprompted on the founder's first
message of a session. Assume the founder remembers NOTHING; plain
English everywhere. Glyphs, here and on the board: 🟢 done ·
🟡 ongoing · 🔴 issue · ⚪ idle.

## 1 · Claim the baton
Read the DASHBOARD header stamp and announce "last ritual: <when> ·
<seat>". Claiming happens on fresh origin (the session-start hook
pulls main and removes welded-elsewhere local branches; if it could
not, pull now). From this moment this session is the control tower.

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
drafts). Check `git worktree list` against the liveness rule
([parallel-lanes §Liveness](parallel-lanes.md#liveness--live-vs-reclaimable)),
using the verdict the session-start hook printed: a LIVE worktree
(heartbeat within the window) is a running lane — LEAVE IT, surface
it under Sessions/NEEDS YOU as flying, never secure-or-prune. A
RECLAIMABLE one (terminal Status or silent past the window) that is
dirty is a lane that died un-parked — secure it (commit + push on
its branch) and surface it. Relay any hook lines from session
start (branches removed as welded elsewhere, or one it could not
remove). Where the board and git disagree, git wins — say so
plainly.
Re-arm every named watch: any "watching #N for X" line found in a
parked lane's memory or the board's flight-context line
([handoff §1.5](handoff.md#15--park-the-local-lanes-full-only)
writes them — watches die with sessions, the record must not) is
re-armed now, so the duty resumes with the new sitting.
THE `claude/*` RESIDUE SWEEP (standing hygiene — every cloud
session lazily leaves a workspace head on origin, and cloud
sessions cannot delete branches): list `claude/*` heads from the
fetch; for each, verify ZERO unique commits vs main
(`git log origin/main..origin/<head>`); if its session may still
be LIVE, HOLD and ask the founder — archive-before-delete, the
resurrection rule; else delete it, then the 60s `fetch --prune`
tripwire re-lists heads (the platform creates them lazily — a
clean mid-flight check proves nothing). A head carrying unique
commits is NEVER swept — surface it under Needs-you.

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
The briefing follows the response doctrine
([HOME §Response doctrine](../HOME.md#response-doctrine)); the
shape below is the founder's status template.
- ⏸ FIRST, above everything
  ([D-050](../DECISIONS.md#d-050--2026-07--session-lifecycle--closed--dead-the-close-locks-wall-softens-to-injected-read-only-doctrine-interrupt-capture-is-standing-format-the-claude-residue-sweep-is-pickup-hygiene-ideas-is-an-inbox-not-an-archive-amends-the-d-046-era-close-wall-design-upholds-the-park-protocol-and-no-solo-approval)):
  whenever any memory's Status reads
  interrupted, LEAD the briefing with one line per interrupted
  task, drawn from its ⏸ capture block
  ([TEMPLATE](../memory/TEMPLATE.md)) —
  "⏸ INTERRUPTED: <one line> — continue?" — before anything else
  renders.
- Ruled header: "── pickup · <date> · <seat> ──". Caption line:
  "Last handoff: <FULL | liftoff> · <date HH:MM> · <seat>".
- WORKING ON — the bench this sitting resumes (or "nothing
  open"); its first line is the exact next act.
- WHAT HAPPENED — the last sitting rebuilt from the main task's
  memory Story plus the handoff note: context → narrative →
  issue → resolution. Short sentences, everyday words, written
  for a tired reader. Anything that went wrong or was left
  worrying rides here with its current standing — or exactly:
  "No issues from last sitting." Repaint, self-heal, or hook
  notes append as small lines here, only if any exist.
- SUPPLEMENTAL — parallel Web or Design work, if any: verbatim
  chat titles bold in quotes, surface tag, one topic line, next
  step each.
- PARALLEL/RECENT FLIGHTS — one line per parked lane, live cloud
  flight, or task left at the last handoff: 🟢 all good · ⏸
  resume needed (current Status-vocabulary state + last-push
  age); every ⏸ carries the exact resume word and where it goes.
  The board's Needs-you folds in here glyph-led, every 🔴 naming
  the fix AND where it happens.
- NEXT — Now: one action · Parallel: one or "—" (the pacing law).
No ritual self-narration ("baton claimed" and kin stay silent
mechanics). Everything else lives on the board
([handoff §4](handoff.md)) — point, don't repeat. Then STOP — the
claim check happens in conversation before any task starts.

Sources:
[HOME §Response doctrine](../HOME.md#response-doctrine)
[TEMPLATE — the Status vocabulary](../memory/TEMPLATE.md)
[pacing law — LAWS §Workflow](../LAWS.md#workflow-non-negotiable)
