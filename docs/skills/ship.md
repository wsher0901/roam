---
type: skill-procedure
title: Ship
status: living
---
# Ship — closing a task

Baton-holder only (control tower, or the cockpit in flight);
lanes never run this — a lane speaks through its PR and the
baton-holder ships it. Run yourself the moment a task's work is
complete; never declare done in conversation without it. For a
FINISHED LANE: pre-review its ready PR against FOUNDATION, the
ROADMAP line, and the reliability law BEFORE surfacing it — then
this same procedure.

## 1 · Preflight
Be on the task's branch; know its ID (or workshop slug). Sync with
main FIRST: merge current origin/main into the branch (merge, never
rebase — the history is pushed); resolve anything. Then THE
VERIFICATION LOOP — the full CI mirror, and THIS IS ITS ONE HOME,
the literal commands in their exact order
([LAWS §Workflow](../LAWS.md#workflow-non-negotiable) points
here rather than repeating them):

```sh
npm run check:links
npm run check:ledger
npm run check:memory
npm run lint && npm run format:check
npm test && npm run build
```

Fix failures first — what you test is exactly what main will
contain after the weld. Local green never suffices: "done" also
requires the PUSHED head's Actions run green.

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
First, the critic
([D-044](../record/DECISIONS.md#d-044--the-pre-gate-critic-goes-live)):
invoke the reviewer subagent (`.claude/agents/reviewer.md` — frame:
[its spec](../record/specs/reviewer-subagent.md)) on the branch's diff.
Its structured verdict is ADVISORY — a finding never halts ship by
itself; the founder weighs it at the gate. The verdict reaches the
founder as a FINDING COUNT in the gate report plus the written
round on origin (next paragraph), not as a verbatim dump in the
message. Invocation mechanics:
run the reviewer synchronously, or instruct it in the spawn prompt
to deliver the verdict AS A MESSAGE — a background agent's
plain-text output never reaches the control tower; the verdict must be
sent, not printed (maiden-run finding, 2026-07-17).
THEN WRITE THE CRITIC ROUND INTO THE MEMORY AND PUSH — the
findings, what was repaired, and what was dismissed with its
reason. This step exists because of PUSH FIRST, REPORT SECOND
([HOME §Response doctrine](../HOME.md#response-doctrine), rule 8):
the gate report states a FINDING COUNT and points, so the findings
themselves must already be on origin. A verdict that lives only in
the session is a verdict the founder cannot re-read and the
external review cannot check.

Then render THE GATE REPORT and stop. NEVER merge without the
founder's explicit yes — the conversational yes is the only gate;
never infer it.

THE GATE REPORT — render EXACTLY this shape
([HOME §Response doctrine](../HOME.md#response-doctrine), rule 8).
Its ONE JOB is: ready, and the word.

```text
<🟢 | 🟡> THE GATE — <id> is ready. <clean | N rulings ride the review>.

Your act, now: in the Web chat, say "review."
<one line: what the review brings back.>

[OFF-ORIGIN — copy this to the Web chat with your "review":
<the content that exists only in this session>]

This bench: <1–3 plain sentences, goal → outcome>.
DO NOT MERGE — tower-authored. (Story: the bench memory.)
```

The OFF-ORIGIN block is OMITTED ENTIRELY when nothing qualifies —
its presence is the signal. Self-check before sending: verdict
first? the founder's word named with its surface and its when?
off-origin called out or omitted? Push first, report second —
nothing here that is not on origin, except the founder's acts and
off-origin content.

- Actions is the arbiter: after the final push, run
  `gh pr checks <pr> --watch`. THE GATE may be announced ONLY when
  the run reports green. Local-green + CI-red = STOP: investigate,
  report the finding to the founder — never merge over red.

## 7 · On approval — the atomic weld
One bookkeeping commit on the SAME branch, so state and work merge
atomically:
- tick the task's [ROADMAP](../ROADMAP.md) checkbox
- git mv docs/memory/<id>.md →
  docs/record/history/<quadrant>/<id>.md — quadrant per the
  [legend](../record/history/README.md); ties → workshop/definition;
  frontmatter →
  type: history, shipped: <date HH:MM>, pr: #N (workshop PRs:
  slug-keyed history file, no ROADMAP tick) (stamp values are read
  from the shell clock, never typed)
- spec frontmatter → status: shipped, pr, shipped date
- append one line atop
  [the ledger](../record/history/README.md#the-ledger):
  <date HH:MM> · <story title> → <quadrant> · #N (stamp values are
  read from the shell clock, never typed)
- Stage the whole move together — `git add -A docs/record/history
  docs/ROADMAP.md docs/record/specs` before the commit — so no piece (history
  file, ledger line, tick) is left unstaged; `check:ledger` is the net
  if it is.
Push. The arbiter applies to welds too: arm
`gh pr merge --auto --squash --delete-branch` and let it fire on
the weld commit's green (~35s), or `gh pr checks --watch` then
squash-merge. Confirm merged, then pull main.

## 8 · Tail
Run handoff in QUIET mode (board repaint per
[handoff §4](handoff.md) — RECENT now shows this task). The tail
paints: the painted line, the glance, Needs you, In flight,
Working on, Recent, the bars, and Next. THE BATON and WEB +
DESIGN are carried forward unchanged unless this weld changed
them.

THE SHIPPED REPORT — render EXACTLY this shape
([HOME §Response doctrine](../HOME.md#response-doctrine), rule 8).
Its ONE JOB is: confirmation, what you owe, what is next.

```text
<glyph> SHIPPED — <id> merged; origin clean.

Needs you — <N | nothing>:
<each: the act · where it happens · when — one line>

Next: <a single act; if it is a Web word, name it exactly>.

(Nothing new since the review; lessons live in the memory.)
```

If the weld FAILED, render this instead — the verdict is still
first:

```text
🔴 BLOCKED — <one line: what stopped it>.

Your act: <the exact word · where you type it · when | nothing —
the fix is mine>.
Then: <what follows>. A new head voids the review verdict —
after my push, say "review" again.
```

Self-check before sending: verdict first? the founder's word named
with its surface and its when? off-origin called out or omitted?
Push first, report second — nothing here that is not on origin,
except the founder's acts and off-origin content. Then recommend
exactly ONE next action + at most one parallel slot per the pacing
law.
