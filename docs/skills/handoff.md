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
pasted? (VERBATIM chat title · one line · next step)" — accept
"none". The title must match the real chat so the founder can
search it later.

## 3 · Rewrite the memories (FULL only)
For each active task NOT owned by a lane (a lane just parked in
step 1.5 keeps its diary exactly as stamped; live lanes keep their
own via the diary rule): check out its branch, rewrite
memory/<id>.md cognitively in the locked format
([TEMPLATE](../memory/TEMPLATE.md)). Fold in the founder's paste
from step 2. Sentences, written for a reader returning cold.
Commit, push, return to main. Harvest any "Ideas surfaced" lines
from lane memories → IDEAS.

Sources:
[IDEAS](../IDEAS.md)

## 4 · Repaint DASHBOARD (the board spec — single source)
Regenerate wholesale from sources — ROADMAP checkboxes, every
active branch's memory + PR state, history/** frontmatter, the
founder's step-2 paste. This section IS the board's definition;
pickup and liftoff render by pointing here.

Header: stamp (date · time · ritual · seat) · the glance line
("V1 a/b · S1 a/b · S2 a/b · sessions: N main · M parallel
(K needs you) · needs-you N") · one pointer line "How to read this
board → [HOME §Reading the board](../HOME.md#reading-the-board)".

Sections, in this order:
- Needs you — numbered. Each item: one plain sentence a tired
  founder parses at a glance, glyph-led, ending "(since <MM-DD>)";
  below it one indented "→" line carrying every link (the
  receipts). Invariants: any 🔴 anywhere on the board also appears
  here; whenever any session's Your-move is non-empty, one
  aggregated line mirrors here.
- Sessions — ONE table for every live session, under the plain
  header "## Sessions" (counts live in the glance line — the
  header must keep a stable anchor). Columns: Session (main · cockpit / local parallel /
  cloud — rows sorted in that order) · Task (linked to its roadmap
  line or memory) · State (glyph + Status-vocabulary word; for
  main, append "· a/b" micro count) · Last push (age) · Your move
  (the founder-action, or —). Below the table, one "↳ main micro:"
  line: the main task's sub-items as glyphs — derived from its
  spec's Done-means when a spec exists, else its memory's
  Left/idle.
- You are here — the version bar, then one bar per open stage,
  each ending → its current task + glyph.
- Stage map — the mermaid dependency graph, counts recomputed from
  ROADMAP checkboxes; no legend on the board (it lives in HOME).
- Claude Web + Design discussion — one line per open chat or
  errand: the VERBATIM chat title first, bold in quotes, then
  (Web|Design), the one-liner, "→ next: <step>".
- Shipped — table of the ~10 newest history/** entries by
  frontmatter; When renders "MM-DD HH:MM" when frontmatter carries
  time, bare date for legacy stories; the header links
  [the ledger](../history/README.md#the-ledger).

Counts are computed at render time, never carried.

Sources:
[DASHBOARD](../DASHBOARD.md)
[ROADMAP](../ROADMAP.md)
[TEMPLATE — the Status vocabulary](../memory/TEMPLATE.md)

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
