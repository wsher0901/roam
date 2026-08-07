---
type: chronicle-story
shelf: IV — Roam
status: living
updated: 2026-08-06 · written · cloud lane
---

# ROADMAP — the plan, and the only place task state is allowed to live

> **CURRENT ENDING (2026-08-06).** A living version ladder — V1 the
> demo, V2 real users, V3 the product, plus an unversioned Pool —
> with a plain-language V1 goal, completion criteria per stage, and
> per-family vetting outputs. It is changed only by decision and
> ticked only by [ship](../skills/ship.md), which is what makes it
> the single stored task state in the workshop. **Derived at this
> story's write time: 8 stages and 34 tasks, of which 5 are
> ticked** — V1.S1.T1–T2 and V1.S2.T1–T3. That count is one HIGHER
> than the 33 tasks
> [D-006](../record/DECISIONS.md#d-006--v1-roadmap-cut) cut, and
> nobody has re-derived it since; the plan grew a task and kept
> quoting its birth number.

## What it is

[ROADMAP](../ROADMAP.md) is the plan, and — more consequentially —
the ONLY place a task's state is stored. Nothing else in the workshop
records whether work is done: not the board, not a memory file, not a
note. That single property is what forces the rest of the discipline
around it.

It carries four things:

- **The version ladder** — V1 "The demo", V2 "Real users", V3 "The
  product", and an unversioned
  [Pool](../ROADMAP.md#pool--unversioned-sockets) of sockets, each
  version defined by a testable completion criterion rather than a
  feature list. V3's is one sentence: charging money for it is
  defensible.
- **Rolling-wave depth** — the active version fully staged and tasked,
  the next a rough bucket, the one after only a name. Detail fades on
  purpose, so a new idea costs one pool line rather than a re-plan.
- **Per-version scope blocks** — what V1 is For, what it Refuses, what
  it Ships. Each refusal lifts in a later version by roadmap edit
  only.
- **The stage/task checkboxes** — `Vn.Sm.Tk`, each one branch and one
  PR, tagged `[P]` (parallelizable) or `[seq]`.

Two laws meet in this file and both are visible in its text. The
**derivation law** killed its stored-status lines. The **weave rule**
is why every task line that has shipped links its
[history/](../record/history/README.md) story.

## What raised it

A definition without a plan is not buildable, and
[FOUNDATION](../FOUNDATION.md) had deliberately refused to hold
anything a shipped version could falsify. Something had to hold the
falsifiable half.

The later rewrites were raised by three distinct failures, none of
them a change of plan:

1. **The file could not be read by a stranger.** The V1 block buried
   its goal under anchors and notation; the rolling-wave paragraph was
   shorthand for a discipline it never stated.
2. **It stored status against its own law.** "Active stages" lines
   recorded state that should have been computed from the checkboxes.
3. **It described work that would have broken the lane law.** T3–T6
   were four `[P]` tasks whose written output was "same outputs" — one
   shared file, which four parallel lanes may never write.

## What changed, in order

- **[#11](https://github.com/wsher0901/roam/pull/11) — the full V1
  build plan** ([D-006](../record/DECISIONS.md#d-006--v1-roadmap-cut)).
  V1 is cut into 8 ordered stages and **33 PR-sized tasks**: the data
  gate (S1) running as a parallel lane with the skeleton (S2), engine
  core with two families deep (S3), Suggest (S4), Plan (S5),
  Edit-with-revalidation (S6), the three plug-in-proof families (S7),
  demo polish (S8). The ordering is depth-before-breadth made
  literal — Weather and Sky & sea ride the ENTIRE spine before the
  other three families exist, so S7 becomes a live test of the
  plug-in promise (addition, not rewrite) rather than an assertion of
  it.
- **[#13](https://github.com/wsher0901/roam/pull/13) — four
  pre-build tightenings.** Closed before the first task branch
  existed: branch naming pinned to the lowercase-ID-plus-slug
  convention, the Edit-UX scope fixed to one brain with no modes (a
  typed request rides the same revalidation path as a drag), and ship
  taught to advance the Active pointer whenever a tick closes a stage.
- **[#69](https://github.com/wsher0901/roam/pull/69) — the version
  ladder arrives**
  ([D-022](../record/DECISIONS.md#d-022--version-ladder-and-lifespan-split)).
  Versions become outcome milestones with testable done-whens, each
  gaining a For/Refuses/Ships scope block, and the unversioned Pool
  is born. This is the same bench that emptied FOUNDATION of
  falsifiable sentences — the two files were split by LIFESPAN in one
  move, which is why neither can be understood without the other.
- **[#87](https://github.com/wsher0901/roam/pull/87) — the recut into
  plain language** ([D-026](../record/DECISIONS.md#d-026--roadmap-recut)).
  Three moves, and the third is the one with teeth. The file opens by
  saying plainly that the plan is LIVING — it changes whenever reality
  disagrees, and every change lands as a D-number. "Done when" becomes
  "Completion criteria" across the versions table and all eight stage
  lines (the spec-level term "Done-means" is a different artifact and
  deliberately kept its name). The V1 block becomes a prose goal a
  stranger can read, and **the "Active stages" lines die outright** —
  they stored status, against the derivation law. Then the
  [D-020](../record/DECISIONS.md#d-020--parallel-lanes-v2)
  alignment: T3–T6 each write their OWN `SOURCES-<family>.md` file so
  four `[P]` lanes never share a file, with T7 consolidating the four
  into [SOURCES](../data/SOURCES.md) and deleting them. A workshop law
  about parallel work reached in and rewrote the product plan's
  deliverables — the clearest case on record of the two halves of this
  repo constraining each other.

## Where it stands

Living, and the numbers are derived here rather than quoted.

| Stage | Tasks | Ticked |
| --- | --- | --- |
| [V1.S1 — Data definition](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code) | 7 | 2 |
| [V1.S2 — Skeleton & design](../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1) | 5 | 3 |
| [V1.S3 — Engine core](../ROADMAP.md#v1s3--engine-core--two-families-deep) | 7 | 0 |
| [V1.S4 — Suggest](../ROADMAP.md#v1s4--suggest) | 3 | 0 |
| [V1.S5 — Plan](../ROADMAP.md#v1s5--plan) | 3 | 0 |
| [V1.S6 — Edit + revalidate](../ROADMAP.md#v1s6--edit--revalidate-the-money-moment) | 3 | 0 |
| [V1.S7 — The other three families](../ROADMAP.md#v1s7--the-other-three-families-plug-in-proof) | 3 | 0 |
| [V1.S8 — Demo polish](../ROADMAP.md#v1s8--demo-polish) | 3 | 0 |
| **Total** | **34** | **5** |

**THE COUNT DISAGREES WITH ITS OWN BIRTH RECORD, and the derivation
wins.** D-006 and its history story both say 33 tasks; the file today
holds 34. The visible candidate for the extra one is
[V1.S3.T7](../ROADMAP.md#v1s3--engine-core--two-families-deep), the
actuals harvester — it is the only V1 task line that cites a decision
([D-015](../record/DECISIONS.md#d-015--data-asset-law)) and a
[FACTS appendix](../data/FACTS.md#c2--quality--ground-truth-p5) that
both postdate the cut, which is what a task added by later work looks
like. This story does not assert that identification as fact: the
lane writing it works from a shallow clone whose history floor is
2026-08-04, so the commit that added the line is not readable from
here. What IS certain is the arithmetic — 34 today, 33 at the cut —
and that the difference went unnoticed because a count written as a
literal is never re-checked.

That is the derivation law's whole argument, caught in the file the
law was partly written for.

Two further properties are worth naming.

**Ticking is a ritual monopoly.** Only [ship](../skills/ship.md) ticks
a box, at the weld, after the founder's word. This is what makes the
checkbox trustworthy as the single stored task state — a box cannot
be ticked by a session that merely believes it finished, and no lane
may write this file at all.

**The plan is honest about abandoned work.** The four unticked
[V1.S1](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
source-vetting boxes (T3–T6) are unticked because that work was
attempted, lost with its vehicle, and never re-flown — and the ruling
of record is to relaunch from scratch. The plan shows the honest
state rather than crediting effort that produced nothing durable.

The open edge: the completion criteria are testable but untested. Six
of eight stages have zero ticked tasks, and every criterion from
[V1.S3](../ROADMAP.md#v1s3--engine-core--two-families-deep) onward
describes software that does not exist yet.

## Sources

Down-links only.

- [ROADMAP](../ROADMAP.md) — the file itself; every count above is
  derived from it at write time.
- [D-006](../record/DECISIONS.md#d-006--v1-roadmap-cut) — the V1 cut:
  8 stages, 33 tasks, depth-before-breadth.
- [D-004](../record/DECISIONS.md#d-004--planning-notation-and-rolling-wave-depth)
  — the `Vn.Sm.Tk` notation and rolling-wave depth.
- [D-022](../record/DECISIONS.md#d-022--version-ladder-and-lifespan-split)
  — outcome-milestone versions, the Pool, and the lifespan divide.
- [D-026](../record/DECISIONS.md#d-026--roadmap-recut) — the recut:
  living-plan opening, completion criteria, the death of "Active
  stages", per-family vetting outputs.
- [D-020](../record/DECISIONS.md#d-020--parallel-lanes-v2) — the lane
  law clause that forced T3–T6 to write disjoint files.
- [D-015](../record/DECISIONS.md#d-015--data-asset-law) — the
  data-asset law the actuals-harvester task descends from.
- [the v1-roadmap-cut story](../record/history/product/definition/v1-roadmap-cut.md)
  — [#11](https://github.com/wsher0901/roam/pull/11).
- [the blueprint-audit-fixes story](../record/history/product/definition/blueprint-audit-fixes.md)
  — [#13](https://github.com/wsher0901/roam/pull/13).
- [the foundation-roadmap-recut story](../record/history/product/definition/foundation-roadmap-recut.md)
  — [#69](https://github.com/wsher0901/roam/pull/69).
- [the roadmap-recut story](../record/history/product/definition/roadmap-recut.md)
  — [#87](https://github.com/wsher0901/roam/pull/87).
- [HOME §Roadmap manual](../HOME.md#roadmap-manual) — the notation and
  how to read the file.
