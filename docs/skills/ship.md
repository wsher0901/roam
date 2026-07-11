---
type: skill-procedure
title: Ship
status: living
---
# Ship — closing a task

Run yourself the moment a task's work is complete — never declare
done in conversation without it. Cockpit only. For a finished lane:
pre-review its ready PR against FOUNDATION, the ROADMAP line, and the
reliability law BEFORE surfacing it — then this same procedure.

## 1 · Preflight
Be on the task's branch; know its ID (or workshop slug). Tests +
linter; fix failures first.

## 2 · Spec gate
If a spec exists: verify every Done-means box honestly against the
actual work. Any box untickable → STOP, tell the founder exactly
what's missing. No spec → note "fully specified" and continue.

## 3 · Weave-lint
Every docs/ file this branch touches: IDs, D-numbers, fact IDs,
sibling docs are links. Fix now — misses can't merge.

## 4 · Final memory rewrite
memory/<id>.md becomes publication-quality: Status = "complete,
awaiting merge", the full story, dead ends, where-to-look final.

## 5 · Flip the PR
Draft → ready (it has existed since birth). Refresh the summary in
plain language; add a Deviations section for anything done
differently than the spec; preview link once previews exist.

## 6 · THE GATE
Summarize in plain language and ask. NEVER merge without the
founder's explicit yes — the conversational yes is the only gate;
never infer it.

## 7 · On approval — the atomic weld
One bookkeeping commit on the SAME branch, so state and work merge
atomically:
- tick the task's [ROADMAP](../ROADMAP.md) checkbox
- git mv docs/memory/<id>.md → docs/history/<id>.md; frontmatter →
  type: history, shipped: <date>, pr: #N (workshop PRs: slug-keyed
  history file, no ROADMAP tick)
- spec frontmatter → status: shipped, pr, shipped date
Push. Squash-merge, delete the branch, pull main.

## 8 · Tail
Run handoff in QUIET mode (board repaint — the Shipped table now
shows this task, derived from history/). Then recommend exactly ONE
next action + at most one parallel slot per the pacing law.
