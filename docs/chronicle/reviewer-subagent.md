---
type: chronicle-story
shelf: II — the lane system
status: living
updated: 2026-08-06 · coverage re-derived from the ledger · cloud lane
---

# The reviewer subagent — the ship-time critic

> **CURRENT ENDING (2026-08-06).** A read-only critic — `Read`,
> `Grep`, `Glob`, nothing else — running on the `opus` ALIAS at
> `effort: high`, invoked as the first act of
> [ship §6](../skills/ship.md#6--the-gate) on every task's diff. Its
> verdict is ADVISORY: a finding never halts a ship by itself, the
> founder weighs it at the gate. Since 2026-07-30 the verdict must
> be WRITTEN INTO THE MEMORY AND PUSHED before the gate report is
> rendered, because a verdict living only in a message is one the
> founder cannot re-read and the external review cannot check. The
> 2026-07-17 registration defect is CLOSED on the founder's
> 2026-07-28 word after five clean native runs, with the
> general-purpose fallback in §6 as the documented re-open path.
> **Coverage, re-derived at write time rather than taken from the
> cell: 15 of the 20 most recent ledger entries narrate a critic
> round — which is evidence the critic RAN and FOUND something,
> and not evidence about the other five.**

## What it is

A second pair of eyes at the exact moment the founder is asked for
the merge word. It reads the branch's diff against five declared
checks: the diff versus its spec, scope drift, law violations
(derivation, one-home, the weave rule), memory-diary completeness
against the locked template, and obvious defects a careful reader
would catch on sight. It never edits, never merges, and never
blocks on style.

Its frame is deliberately narrow. Read-only tools mean it cannot
repair what it finds, which is what keeps it a critic rather than a
second author — and keeps its findings something a human weighs
rather than something that quietly happens.

## What raised it

Two separate problems, a day apart.

The first: the critic existed as a staged idea and nothing summoned
it. **A step that must be remembered is not a ritual** — so it was
wired into the ship sequence rather than left to discipline.

The second, older than this workshop: a self-authored diff cannot
review itself. The critic is
not that review — no-solo-approval handles the external one — but
it is what catches the class of error an author is structurally
blind to in their own work.

## What changed, in order

- **[#146](https://github.com/wsher0901/roam/pull/146), 2026-07-16
  — the critic is built, as the payload of the delegation maiden
  flight.** Its two reserved questions went to the founder in one
  `BLOCKED:` comment and came back together: advisory verdicts,
  Sonnet 5 at high effort, both reversible by a later decision. So
  the critic's own birth also served as the first proof that a
  cloud lane could ask a question and get an answer.
- **[D-044](../record/DECISIONS.md#d-044--the-pre-gate-critic-goes-live),
  2026-07-17 — it goes live, wired into THE GATE.** Deliberately
  not a new numbered section, because renumbering would have broken
  every anchor citing §6 — including the agent file's own link.
  Blocking verdicts were rejected in favour of the founder's
  advisory call, and discretionary invocation was rejected outright
  as guaranteed drift.
- **The registration defect, 2026-07-17.** The `reviewer`
  agent-type failed to register inside a running session — the
  Agent tool reported it not found — and after a second recurrence
  the same day it was graduated from gotcha to defect, with the
  critic step falling back to a general-purpose agent.
- **A live invocation lesson from the maiden run, which is now part
  of the ritual text.** A background agent's plain-text output
  never reaches the control tower: the verdict must be SENT, not
  printed. So §6 says run it synchronously, or instruct it in the
  spawn prompt to deliver the verdict as a message.
- **[D-055](../record/DECISIONS.md#d-055--agent-teams-the-boundary),
  2026-07-24 — the model is settled by verification, and the file
  gains a second life.** `/model` could not be run from the
  harness, so the alias was resolved from a headless run's own
  billing telemetry, which reported `canonicalModel:
  claude-opus-5`. The ALIAS was taken rather than a pin, because
  aliases track the recommended version and survive deprecations.
  The same file governs any teammate spawned from that definition —
  which is why its `model` and `tools` are a two-surface decision.
  A wrinkle worth keeping: the first critic run after that change
  still reported itself as the old model, because the new pick
  takes effect for sessions started AFTER the merge.
- **2026-07-28 — the defect is CLOSED on the founder's word.** Five
  clean native registrations were on record by then — the first at
  [#175](https://github.com/wsher0901/roam/pull/175), one on
  2026-07-24, and one at each of three benches in the 07-27 queue.
  Closing lost nothing, because the fallback path stays written in
  §6 and is the re-open route if it ever recurs.
- **[D-067](../record/DECISIONS.md#d-067--the-report-skeleton-and-the-board-diet),
  2026-07-30 — push first, report second, and it caught a hole in
  the critic's own wiring on day one.** §6 had been sending the
  verdict "verbatim alongside the summary", which meant every gate
  since the critic went live had handed the founder findings that
  lived in the message and nowhere else — unre-readable, and
  invisible to the external review. §6 now writes the critic round
  into the memory and pushes BEFORE the gate report; the report
  carries a finding COUNT and a pointer.

## Where it stands

The critic is load-bearing, and the record says so in the most
useful way available: by what it caught.

It has repeatedly found benches breaking their own stated rules in
text a founder had already approved — four findings on one bench
were all the same failure, a no-rounding rule violated by its own
author's prose, each narrowed back to the evidence before the flip.
It found a re-sweep reporting CLEAN that had used the wrong grep,
with three prose sites still stale. It found a section rename
breaking a charter's first rule. On one bench it caught the
derivation law being broken by the very pass that was enforcing it.
**Its most characteristic catch is an author violating a rule
inside the file they are editing to enforce that rule** — which is
exactly the blindness a second reader exists for.

**The census cell says "run on essentially every recent bench",
and the derivation both supports and bounds that.** Counting from
the ledger at write time: 15 of the 20 newest entries narrate a
critic round; 37 of all 125 do. But a ledger line is written when a
round produced something worth narrating, so the five recent
silences are not evidence of absence — they are simply unrecorded.
**The honest statement is that the critic's runs are visible when
they FIND, and invisible when they do not**, and no surface counts
invocations. That is a gap between "wired into the ritual" and
"provably ran", and nothing currently closes it.

The advisory policy remains the founder's, and reversible. Nothing
has argued for changing it: the record shows findings being
weighed, narrowed, dismissed with reasons, and occasionally
overturned by the external review — which is what advisory is
supposed to look like.

## Sources

Down-links only.

- [ship §6](../skills/ship.md#6--the-gate) — the invocation, the
  advisory policy, the write-then-report rule, and the fallback ·
  `.claude/agents/reviewer.md` — the frame in force (tools, model
  alias, effort) ·
  [the reviewer spec](../record/specs/reviewer-subagent.md) — the
  declared checks.
- [D-044](../record/DECISIONS.md#d-044--the-pre-gate-critic-goes-live)
  ·
  [D-054](../record/DECISIONS.md#d-054--the-landing-skill) ·
  [D-055](../record/DECISIONS.md#d-055--agent-teams-the-boundary) ·
  [D-067](../record/DECISIONS.md#d-067--the-report-skeleton-and-the-board-diet).
- [the reviewer weld](../record/history/workshop/mechanism/reviewer-subagent.md)
  — its birth as a cloud lane's payload, and the two reserved
  questions ·
  [the answering bench](../record/history/workshop/definition/chronicle-answers.md)
  — the defect's five clean runs and the founder's close ·
  [the shakedown audit](../record/history/workshop/mechanism/shakedown-audit.md)
  — the first native registration.
- [the ledger](../record/history/README.md) — the source the
  coverage figures above were counted from.
- Spans cited by the census:
  [#146](https://github.com/wsher0901/roam/pull/146) ·
  [#175](https://github.com/wsher0901/roam/pull/175) ·
  [#180](https://github.com/wsher0901/roam/pull/180).
