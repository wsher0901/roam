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
Be on the task's branch; know its ID (or workshop slug). Sync with
main FIRST: merge current origin/main into the branch (merge, never
rebase — the history is pushed); resolve anything. Then the
full CI mirror — lint · format:check · check:links · check:ledger ·
tests · build; fix failures first — what you test is exactly what
main will contain after the weld.

## 2 · Spec gate
If a spec exists: verify every Done-means box honestly against the
actual work. Any box untickable → STOP, tell the founder exactly
what's missing. No spec → note "fully specified" and continue.

## 3 · Weave-lint
Every docs/ file this branch touches: IDs, D-numbers, fact IDs,
sibling docs are links. Fix now — misses can't merge.

## 4 · Final memory rewrite
memory/<id>.md becomes publication-quality per the locked format
([TEMPLATE](../memory/TEMPLATE.md)): Status = "complete, awaiting
merge", the full story, dead ends, where-to-look final.

## 5 · Flip the PR
Draft → ready (it has existed since birth). Refresh the summary in
plain language; add a Deviations section for anything done
differently than the spec; preview link.

## 6 · THE GATE
Summarize in plain language and ask. NEVER merge without the
founder's explicit yes — the conversational yes is the only gate;
never infer it.

- Actions is the arbiter: after the final push, run
  `gh pr checks <pr> --watch`. THE GATE may be announced ONLY when
  the run reports green. Local-green + CI-red = STOP: investigate,
  report the finding to the founder — never merge over red.

## 7 · On approval — the atomic weld
One bookkeeping commit on the SAME branch, so state and work merge
atomically:
- tick the task's [ROADMAP](../ROADMAP.md) checkbox
- git mv docs/memory/<id>.md →
  docs/history/<quadrant>/<id>.md — quadrant per the
  [legend](../history/README.md); ties → workshop/definition;
  frontmatter →
  type: history, shipped: <date HH:MM>, pr: #N (workshop PRs:
  slug-keyed history file, no ROADMAP tick)
- spec frontmatter → status: shipped, pr, shipped date
- append one line atop
  [the ledger](../history/README.md#the-ledger):
  <date HH:MM> · <story title> → <quadrant> · #N
- Stage the whole move together — `git add -A docs/history
  docs/ROADMAP.md docs/specs` before the commit — so no piece (history
  file, ledger line, tick) is left unstaged; `check:ledger` is the net
  if it is.
Push. The arbiter applies to welds too: arm
`gh pr merge --auto --squash --delete-branch` and let it fire on
the weld commit's green (~35s), or `gh pr checks --watch` then
squash-merge. Confirm merged, then pull main.

## 8 · Tail
Run handoff in QUIET mode (board repaint per
[handoff §4](handoff.md) — the Shipped table now shows this task).
Then recommend exactly ONE
next action + at most one parallel slot per the pacing law.
