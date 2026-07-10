---
description: Stand-up ritual — compile the founder's re-entry picture
  and ship it to main as a micro-PR. Triggers: leaving phrases
  ("bye", "done for today", "heading out", "wrapping up"), an
  explicit /handoff, or the tail of /ship.
---
# /handoff — the stand-up note

Laws: SINGLE WRITER — only the cockpit session the founder is driving
runs this. Lanes and background agents never touch HANDOFF; they
speak through their draft PRs. Write for someone who remembers
nothing. Weave rule applies (every ID and doc mention is a markdown
link).

## Step 1 — secure the work
On a lane branch with changes: commit + push before anything else.
Never write the note over unpushed work.

## Step 2 — the never-skipped question
Ask: "Any open Claude Web or Claude Design lanes, or paste blocks
produced but not yet pasted? (name + one line + next step)"
Accept "none". Carry forward still-open lanes from the previous
note; drop ones the founder closed.

## Step 3 — write docs/HANDOFF.md in exactly this shape
# Handoff — <YYYY-MM-DD (Day)> · <machine>

## Macro (as of this note)
Version 1 — the demo app · <n> of 33 pieces shipped <bar>
<icon rows per open stage, same icon grammar and glosses as /pickup;
 closed/future stages one line>
Running in parallel right now:
  <lane lines: ID → surface lane (vehicle) — gloss; note anything
   queued behind a 🔒 and what unlocks it>

## Current focus — <ID>: <name>
<2–3 sentence human story of the task and where it stands>
  ✅ done in scope: <compiled from THIS session: merged/pushed
     commits, spec steps ticked, discussion points settled>
  ⬜ left in scope: <what remains, including "to be discussed" items>

## Channels
- [Code] <branch · PR · tree state>
  <1–2 line narrative of what's happening there>
  → next: <step>
- [Web] chat "<name>"
  <1–2 line narrative: what was discussed; decisions + status
   (recorded D-0XX / block pending — NOT pasted)>
  ✅ settled: <points> · ⬜ open: <points>
  → next: <step>
- [Design] <project name>
  <1–2 line narrative of the draft's state>
  → next: <step>
<surfaces with nothing open: omit; if all quiet: "Channels: none open">

## Blockers & gotchas
- BLOCKER · <what it blocks> — <who/what unblocks it>
- GOTCHA · <the trap, one line>
<"none" is valid. A gotcha that proves permanent gets promoted to
CLAUDE.md or the machine-setup skill via a normal approved PR —
this section holds only fresh, unpromoted ones.>

## Next intent
1. <action> (→ tool)
2. Parallel: <action or "—">

Shipped since last note: <n> entries → SHIPLOG.md

## Step 4 — ship it
From origin/main, branch chore/handoff-<date>, commit ONLY
docs/HANDOFF.md (+ docs/IDEAS.md if entries queued), push, open PR
titled "chore: handoff note", squash-merge immediately (the D-002
micro carve-out; `gh pr merge` will ask once — if the founder has
already left and no confirmation comes, leave the PR open: the next
/pickup self-heals it). Return to the branch you came from. Report
one line: "Handoff shipped (#N)."
