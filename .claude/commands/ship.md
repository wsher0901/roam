---
description: Task-done ritual — tests, spec gate, weave-lint, PR,
  founder approval, merge, bookkeeping. Run this yourself when a
  task's work is complete; never declare a task done in conversation
  without it.
---
# /ship — closing a task

## Step 1 — preflight
Be on the task's branch; identify its roadmap ID (Vn.Sm.Tk) or issue.
Run tests + linter; fix failures before proceeding.

## Step 2 — spec gate
If docs/specs/<id>-*.md exists: verify every "done means" checkbox
honestly against the actual work; if any can't be ticked, STOP and
tell the founder exactly what's missing. If no spec exists, note
"no spec — fully-specified task" and continue.

## Step 3 — weave-lint
In every docs/ file this branch touches: roadmap IDs, D-numbers,
F-*/TP-* fact IDs, and sibling doc mentions must be markdown links.
Fix violations now — misses can't merge.

## Step 4 — open the PR, then bookkeep on the branch
- `gh pr create` — title starts with the ID; body: plain-language
  summary, link to the spec (if any), a Deviations section for
  anything done differently than specified, Vercel preview link once
  previews exist.
- Knowing the PR number, add ONE bookkeeping commit on the same
  branch: tick the task's checkbox in docs/ROADMAP.md, and append to
  docs/SHIPLOG.md (top of the list, weave rule applies):
  **<YYYY-MM-DD> — <plain-English headline>** (<ID linked>) ·
  <one sentence: what Roam has now that it didn't> → PR #N
- Push; the PR updates itself.

## Step 5 — the gate
Summarize in plain language and ask the founder for approval.
NEVER merge without their explicit yes. (The founder's conversational
yes is the ONLY merge gate — the tool layer no longer asks. Never
infer approval; it must be explicit.)

## Step 6 — on approval
Squash-merge, delete the branch, pull main. For parallel-lane PRs,
pre-review per CLAUDE.md ## Parallel lanes before surfacing.

## Step 7 — close the loop
Run the /handoff tail (fresh note, micro-PR). Then recommend exactly
ONE next action (+ at most one parallel slot) per the pacing law.
