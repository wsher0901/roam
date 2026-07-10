# Handoff — 2026-07-10 (Fri) · work PC

## Macro (as of this note)
Version 1 — the demo app · 5 of 34 pieces shipped █████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
[S1 · Data Definition (the gate)](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code) — open
  ✅ T1 Fact inventory · ✅ T2 Weather sources
  ⬜ T3 Sky & sea · ⬜ T4 Feasibility · ⬜ T5 Time & transport · ⬜ T6 Crowds & calendar
  (T3–T6 relaunch at ladder step P8 — NOW NEXT; kickoff briefs arrive from the Web chat)
  🔒 T7 Storage schema + source registry — unlocks after T3–T6
[S2 · Skeleton & design foundations](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1) — open
  ✅ T1 App scaffold · ✅ T2 Deploy + CI · ✅ T3 Supabase wiring
  🔒 T4 Schema migration — unlocks after [V1.S1.T7](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
  🔨 T5 Design foundations — Design lane
  Exploring Roam's visual language in Claude Design; only extracted
  values (tokens) will enter the repo, never markup.
S3–S8 (Engine core · Suggest · Plan · Edit · three families · demo polish) — not started
Running in parallel right now:
  - setup ladder (P1–P8) → Web lane (chat) — the founder's meta-stream
    upgrading the workshop; P1–P7 merged, P8 (the T3–T6 relaunch) is
    the final step
  - [V1.S2.T5](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1) → Design lane (mock draft) — visual-language exploration

## Current focus — setup ladder · P8: relaunch T3–T6
The last ladder step returns us to build work: relaunch the four
source-vetting tasks (T3 Sky & sea · T4 Feasibility · T5 Time &
transport · T6 Crowds & calendar) as native lanes per
[CLAUDE.md](../CLAUDE.md) § Parallel lanes
([D-020](DECISIONS.md#d-020--2026-07--parallel-lanes-v2-native-lanes-replace-hand-built-orchestration)):
one lane per family, branch docs/v1.s1.tN-[family]-sources, draft PR
at birth, push every commit, each lane writing its own
docs/data/SOURCES-[family].md. Salvage notes (re-verify, not facts)
live in the 2026-07-09 work-PC note, recoverable via
`git log docs/HANDOFF.md`.
  ✅ done in scope: P1–P7 merged (#53, #56, #57, #58, #60, #64, #66)
     + ritual fix (#62)
  ⬜ left in scope: P8 — kickoff briefs from the Web chat, then
     dispatch the four lanes

## Channels
- [Code] main · no open PRs · tree clean
  Four merges this sitting: dashboard
  ([PR #60](https://github.com/wsher0901/roam/pull/60)), ritual fix
  ([PR #62](https://github.com/wsher0901/roam/pull/62)), Design
  kickoff + SHIPLOG repair
  ([PR #64](https://github.com/wsher0901/roam/pull/64)),
  machine-setup skill
  ([PR #66](https://github.com/wsher0901/roam/pull/66)).
  → next: dispatch the T3–T6 lanes when the P8 briefs arrive.
- [Web] chat "setup ladder (P1–P8)"
  The ladder's home; P5–P7 delivered and merged; no unpasted blocks.
  (P-counters refreshed from git; lane carried per QUIET mode.)
  ✅ settled: P1–P7 · ⬜ open: P8 kickoff briefs for T3–T6
  → next: founder pulls the P8 briefs from the chat.
- [Design] V1.S2.T5 mock draft
  Exploring Roam's visual language. Start the next Design session by
  pasting the [DESIGN-KICKOFF](DESIGN-KICKOFF.md) preamble, then
  state the lane.
  → next: converge on the two representative screens (option card
  with confidence badge; day timeline beside map), then token
  extraction via "Hand off to Claude Code" — values only, never markup.

## Blockers & gotchas
- GOTCHA · zero-tap merge permissions (PR #58) were pulled mid-session
  on the work PC — they load at its NEXT session start; this sitting
  still prompted per merge.
- GOTCHA · [DECISION-POLICY](DECISION-POLICY.md) §10 holds five open
  engine questions for the founder — not blocking until
  [V1.S3](ROADMAP.md#v1s3--engine-core--two-families-deep) opens.
- Standing items retired: the per-machine list (Vercel CLI, Python,
  roam.machine, em-dash trap, Dataview install) is promoted into the
  [machine-setup skill](../.claude/skills/machine-setup/SKILL.md)
  (PR #66) — run its Verify block on each PC at next convenience.
- BLOCKER · none.

## Next intent
1. P8: pull the T3–T6 kickoff briefs (→ Web chat), then dispatch
   four native lanes (→ Claude Code).
2. Parallel: continue the V1.S2.T5 Design draft (start with the
   [DESIGN-KICKOFF](DESIGN-KICKOFF.md) preamble).

Shipped since last note: 1 entry → [SHIPLOG.md](SHIPLOG.md)
