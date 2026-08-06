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

THEN REPAINT THE BOARD BEFORE REPORTING — a DASHBOARD-only
micro-PR, the same carve-out
[§8](#8--tail)'s tail already uses. Needs-you gains ONE line: the
founder's word on this bench, with its surface and its when. THIS
STEP EXISTS BECAUSE THE GAP IS STRUCTURAL: the gate report goes to
the CONVERSATION, and the board is otherwise next touched by the
tail — which runs only AFTER the merge. So without this, every
bench that reaches the gate leaves the board saying the founder
owes nothing at exactly the moment they owe the one act that
unblocks it. Observed three times on 2026-08-05/06 before it was
written down.

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
- **SYNTHESIS — carry the weld into the chronicle**
  ([D-059](../record/DECISIONS.md#d-059--the-chronicle-layer)'s
  ending rule, which nothing performed until it lived here).
  FIRST NAME THE ITEMS. An ITEM is what
  [D-059](../record/DECISIONS.md#d-059--the-chronicle-layer) ruling
  1 defines — an event, a system piece (skill, command,
  instruction, architecture, workflow), or a Roam piece — and A
  WELD MAY TOUCH SEVERAL. List them, then run the match BELOW ONCE
  PER ITEM; a weld that changed three items owes three synthesis
  acts, not one.
  Look each item up in [the census](../chronicle/INDEX.md):
  - **it has a WRITTEN STORY** → INCORPORATE: one bullet on that
    story's `## What changed, in order` spine, REWRITE its ending
    blockquote (including the date in its heading), refresh the
    frontmatter `updated:` line, and re-read its closing section —
    `## Where it stands` or its variant — so it cannot contradict
    the new ending. Never a second story.
  - **it has a CENSUS ROW but no story yet** → SPLIT ON WHETHER
    THIS WELD SETTLED THE ITEM OR MERELY ADVANCED IT.
    THE TEST, ONE READ: after this weld, is any work on this item
    still owed — an OPEN BENCH, a NEEDS-YOU line, an INBOX line, or
    a "still owed" the record states in words?
    **Yes, OR you cannot tell → ADVANCED. Only a checked NO →
    SETTLED.** Retirement is a settlement.
    THE DEFAULT IS PART OF THE TEST, because the costs are not
    symmetric: a wrong ADVANCE leaves a cell someone rewrites
    later, and a wrong SETTLE writes a story onto a moving target
    and has to incorporate it anyway.
    NOT AN INPUT: an unticked Done-means box. Shipped specs in this
    record routinely carry them — some carry all of them, and the
    CI box is unticked BY CONVENTION — so reading them as owed work
    would answer ADVANCED for almost every item and make the
    SETTLED branch unreachable.
    - **ADVANCED** → update that row's ENDING CELL. One cell, not
      a story.
    - **SETTLED** → **WRITE THE STORY, NOW, IN THIS COMMIT** — the
      full format per
      [the pilot](../record/history/workshop/definition/chronicle-pilot.md)
      — and repoint the row at it.
      [HOME §Where information goes](../HOME.md#where-information-goes)
      assigns the story to the settling weld, and
      [D-077](../record/DECISIONS.md#d-077--shelf-benches-and-the-settling-weld-writes)
      ruling 2 is why this is the cheap place: story cost is
      dominated by SOURCE-GATHERING, and the seat that just
      settled the item HAS ALREADY GATHERED what its story needs.
      Deferring does not save that cost — it pays it twice.
  - **it has NEITHER, and you can name it** → ADD a census row on
    the right shelf, filling all five columns (proposed story ·
    type · span · current ending · confidence), and update the
    file's own counts and stamp line, which a new row falsifies.
    The census is a 2026-07-27 snapshot; without this, later items
    are invisible to every future shelf bench. THEN RUN CASE 2's
    SPLIT ON THE ROW YOU JUST ADDED — a weld that both NAMES and
    SETTLES an item writes its story in this same commit. Newness
    is not a reason to defer: it is the same cheapest-seat
    argument, and you have already done the gathering.

  THE STORY-OWED DEBT FORM IS NOT AN OPTION FOR A WELD YOU ARE
  PERFORMING. It survives for exactly ONE thing: the pre-ruling
  BACKLOG of already-settled items that the shelf benches clear
  ([D-077](../record/DECISIONS.md#d-077--shelf-benches-and-the-settling-weld-writes)
  ruling 1). Said plainly because an unqualified debt form reads to
  the next seat as a general option, which is the error the ruling
  exists to end. If writing the story here is genuinely impossible,
  that is a `BLOCKED:` question for the founder — never a debt
  recorded and walked past.
  THE ESCAPE IS NARROW AND IT IS NOT "NO ROW FOUND": it is for a
  weld whose payload names NO item at all in ruling 1's sense — a
  typo sweep, a dependency bump, a formatting pass. THAT is when
  you write "no chronicle item" in the weld commit AND in the
  history file, so a later shelf bench reads it where it looks. If
  you can NAME an item, you are in case 3, never here. A ritual
  that forces a false match is bad; one that lets any weld opt out
  is worse.
  THE STEP LIVES IN THIS ATOMIC COMMIT, not the tail, because a
  story whose ending lags its own ledger line is exactly the
  staleness this step exists to end.
- Stage the whole move together — `git add -A docs/record/history
  docs/ROADMAP.md docs/record/specs docs/chronicle` before the commit
  — so no piece (history file, ledger line, tick, synthesis edit) is
  left unstaged; `check:ledger` is the net for the ledger, and
  nothing but this list is the net for the rest.
Push. The arbiter applies to welds too: arm
`gh pr merge --auto --squash --delete-branch` and let it fire on
the weld commit's green (~35s), or `gh pr checks --watch` then
squash-merge. Confirm merged, then pull main.

**WHOSE WORD CLOSES A FLEET.** When several benches stand at the
gate together, THE MERGE WORDS BELONG TO THE SEAT THE LANDING PLAN
NAMES — the baton-holder that fenced or dispatched them — not to
whichever seat happens to be awake. A fleet's benches are welded
SERIALLY by that seat, because each weld writes the census and the
ledger, and two welds in flight collide on both.

## 8 · Tail
Run handoff in QUIET mode (board repaint per
[handoff §4](handoff.md#4--repaint-dashboard-the-board-spec--single-source),
which owns the section list — RECENT now shows this task). The
tail repaints every section EXCEPT two: THE BATON and WEB +
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
