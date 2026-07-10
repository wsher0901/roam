---
description: Sit-down briefing — where the founder is, across every
  surface, machine, and lane. Cockpit sessions run this unprompted on
  the founder's first message; dispatched lanes and background agents
  skip it.
---
# /pickup — the sit-down briefing

The founder may have been away an hour or a month. Assume they
remember NOTHING. Every line must be self-sufficient and in plain
English.

## Step 1 — sync & self-heal
- On main with a clean tree: `git pull --ff-only` (the start hook
  usually already did; don't fail twice).
- Check `gh pr list --state open`. If a PR touching ONLY
  docs/HANDOFF.md and/or docs/IDEAS.md is open, it's a stranded
  handoff micro-PR: squash-merge it now, pull, and mention it in the
  briefing's first line.

## Step 2 — gather truth (git outranks notes)
Read: docs/HANDOFF.md (note its date + machine) · docs/ROADMAP.md ·
docs/SHIPLOG.md · docs/DECISIONS.md · docs/IDEAS.md · live git
(`git branch -r`, `gh pr list --state open` including drafts) · the
active task's spec in docs/specs/ if one exists.
Cross-check the note against git. Git wins. If they disagree or the
note is old, say so plainly: "HANDOFF dated <date> — git has moved;
trusting git."

## Step 3 — render the briefing
Fill this skeleton with live values. Icons: ✅ shipped · 🔨 working
now (always name the lane) · ⬜ ready, not started · 🔒 locked (say
by what). ASCII fallback if a terminal chokes: [x] [>] [ ] [#].
Every 🔨 gets a ≤2-line plain-English gloss of what the task IS.

════════ ROAM — PICKUP · <date> · <machine/branch> ════════
<only if it happened: "Merged stranded handoff micro-PR #N.">
MACRO — Version 1 · <n> of 33 pieces shipped <progress bar>
<one block per OPEN stage:>
S<k> · <name> — open
  <icon rows for its tasks; gloss under each 🔨; 🔒 lines name
   their key: "unlocks when/after …">
<closed + not-started stages collapse to one line each>
Running in parallel right now:
  - <ID + name> → <surface> lane (<vehicle: PR #/draft/chat>) — <gloss>
  <or: "one lane only — <ID>">
FOCUS — <ID>: <name>
<2–3 sentence human story: what we're doing and why it matters>
  ✅ done in scope: <from merged work, ticked spec steps>
  ⬜ left in scope: <remaining steps>
CHANNELS (where you were)
  [Code]   <branch · PR state · tree state> → next: <step>
  [Web]    <chat name · what it holds · state> → next: <step>
  [Design] <project · draft state> → next: <step>
  <only surfaces with open lanes; from HANDOFF + live git>
MICRO — <spec id>: next unchecked step — "<step text>"
  <or: "no spec — task is fully specified">
AMBIENT — shipped since your note: <n> (→ SHIPLOG.md) ·
  new decisions: <D-numbers> · IDEAS +<n>
  Blockers: <from the note, with who unblocks — or "none">
NEXT — Now: <one action + tool> · Parallel: <one or "—">
Claim question: "Picking up <ID>, or something else? Anything open
on Web/Design I should know about?"

Then wait for the founder's answer before doing work.
