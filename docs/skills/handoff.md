---
type: skill-procedure
title: Handoff
status: living
---
# Handoff — the leaving ritual

Cockpit only — lanes never run this. FULL means operations halt on
this machine. Two modes.
FULL = leaving phrase, explicit call, or liftoff's step 1.
QUIET = ship's tail. QUIET skips steps 1.5–3 and never closes the
session.

## 1 · Secure the work
On the current task's branch: commit anything uncommitted, push.
Nothing may exist only on this machine past this point.

## 1.5 · Park the local lanes (FULL only)
Every live local lane gets parked — no question asked, none left
running:
1. Find the benches: `git worktree list` plus every memory whose
   Status says flying on a local vehicle.
2. Rescue-save, only if needed: if the lane's tree holds
   uncommitted work or unpushed commits — commit
   "wip: parked at handoff (rescue-save)" and push. A clean,
   pushed bench skips straight to the stamp.
3. Stamp its diary, on its branch: append
   "Status: parked — <date> · rescue-saved at handoff · <seat>",
   push. This is the ONE cockpit-written line a lane's memory may
   ever receive (the park protocol).
4. Count the parked for the close line.
QUIET never parks — mid-sitting lanes keep flying.

Sources:
[park protocol — LAWS §Parallel lanes & cloud](../LAWS.md#parallel-lanes--cloud)

## 2 · The never-skipped question (FULL only)
Ask: "Any open Web or Design threads, or blocks produced but not
pasted? (name · one line · next step)" — accept "none".

## 3 · Rewrite the memories (FULL only)
For each active task NOT owned by a lane (a lane just parked in
step 1.5 keeps its diary exactly as stamped; live lanes keep their
own via the diary rule): check out its branch, rewrite
memory/<id>.md cognitively in the locked format — Status first,
then What this task is · Pending issues · Left / idle · The story ·
Where to look. Fold in the founder's paste from step 2. Sentences,
written for a reader returning cold. Commit, push, return to main.
Harvest any "Ideas surfaced" lines from lane memories → IDEAS.

Sources:
[IDEAS](../IDEAS.md)

## 4 · Repaint DASHBOARD
Regenerate wholesale from sources — ROADMAP checkboxes, every
active branch's memory + PR state, history/ frontmatter. Sections:
Needs you · You are here (bars) · Stage map · Cloud (if anything
dispatched) · In flight · Threads (non-task, from the founder's
paste) · Shipped — a static table of the ~10 newest history/
entries, re-derived from frontmatter at every repaint. Counts
computed at render time, never carried. Header stamps date · ritual
· seat.

Sources:
[DASHBOARD](../DASHBOARD.md)
[ROADMAP](../ROADMAP.md)

## 5 · Ship the note
Branch chore/handoff-<date> from main, commit ONLY DASHBOARD.md
(+ IDEAS.md if harvested), push, PR "chore: handoff", squash-merge
immediately (the micro-PR carve-out). If the merge fails, leave the
PR open — the next pickup self-heals it.

Sources:
[DASHBOARD](../DASHBOARD.md)
[IDEAS](../IDEAS.md)

## 6 · Close (FULL only)
Report one line — "Handoff shipped (#N) · M lanes parked.
Operations halted — safe to power off." Then, as the ritual's LAST
act, write `.claude/session-closed` with content "Closed at handoff
#<N> · <date> · <seat>" — the close-lock: from that moment the
prompt hook rejects any further input to this session, and the
session ends. QUIET instead returns to the sitting and recommends
NEXT per the pacing law.

Sources:
[pacing law — LAWS §Workflow](../LAWS.md#workflow-non-negotiable)
