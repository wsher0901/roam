---
type: skill-procedure
title: Handoff
status: living
---
# Handoff — the leaving ritual

Cockpit only — lanes never run this. Two modes.
FULL = leaving phrase, explicit call, or liftoff's step 1.
QUIET = ship's tail. QUIET skips steps 2–3 and never closes the
session.

## 1 · Secure the work
On the current task's branch: commit anything uncommitted, push.
Nothing may exist only on this machine past this point.

## 2 · The never-skipped question (FULL only)
Ask: "Any open Web or Design threads, or blocks produced but not
pasted? (name · one line · next step)" — accept "none".

## 3 · Rewrite the memories (FULL only)
For each active task NOT owned by a live lane (live lanes keep their
own via the diary rule): check out its branch, rewrite memory/<id>.md
cognitively in the locked format — Status first, then What this task
is · Pending issues · Left / idle · The story · Where to look. Fold
in the founder's paste from step 2. Sentences, written for a reader
returning cold. Commit, push, return to main.
Harvest any "Ideas surfaced" lines from lane memories → IDEAS.md.

## 4 · Repaint DASHBOARD
Regenerate wholesale from sources — ROADMAP checkboxes, every active
branch's memory + PR state, history/ frontmatter. Sections: Needs
you · You are here (bars) · Stage map · Cloud (if anything
dispatched) · In flight · Threads (non-task, from the founder's
paste) · Shipped (derived). Counts computed at render time, never
carried. Header stamps date · ritual · seat.

## 5 · Ship the note
Branch chore/handoff-<date> from main, commit ONLY DASHBOARD.md
(+ IDEAS.md if harvested), push, PR "chore: handoff", squash-merge
immediately (the micro-PR carve-out). If the merge fails, leave the
PR open — the next pickup self-heals it.

## 6 · Close (FULL only)
Report one line — "Handoff shipped (#N). Safe to walk away." — and
end the session. QUIET instead returns to the sitting and recommends
NEXT per the pacing law.
