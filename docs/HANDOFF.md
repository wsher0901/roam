# Handoff — 2026-07-10 (Fri) · work PC

## Macro (as of this note)
Version 1 — the demo app · 5 of 34 pieces shipped █████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
[S1 · Data Definition (the gate)](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code) — open
  ✅ T1 Fact inventory · ✅ T2 Weather sources
  ⬜ T3 Sky & sea · ⬜ T4 Feasibility · ⬜ T5 Time & transport · ⬜ T6 Crowds & calendar
  (T3–T6 relaunch at ladder step P8 — queued behind the system
  re-establishment chat below; kickoff briefs arrive from Web)
  🔒 T7 Storage schema + source registry — unlocks after T3–T6
[S2 · Skeleton & design foundations](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1) — open
  ✅ T1 App scaffold · ✅ T2 Deploy + CI · ✅ T3 Supabase wiring
  🔒 T4 Schema migration — unlocks after [V1.S1.T7](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
  🔨 T5 Design foundations — Design lane
  Exploring Roam's visual language in Claude Design; only extracted
  values (tokens) will enter the repo, never markup.
S3–S8 (Engine core · Suggest · Plan · Edit · three families · demo polish) — not started
Running in parallel right now:
  - system re-establishment → Web lane (chat, name TBD) — the
    founder is reworking how the workshop operates; details land
    later; P8 holds until it reports
  - setup ladder (P1–P8) → Web lane (chat) — P1–P7 merged; P8 (the
    T3–T6 relaunch) is the final step, queued behind the
    re-establishment chat
  - [V1.S2.T5](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1) → Design lane (mock draft) — visual-language exploration

## Current focus — workshop meta: system re-establishment
The founder is in a Claude Web chat re-establishing the operating
system of the project; its outcome (and any changes to the P8 plan)
arrives as a future update — nothing has been delivered from it yet.
Until it reports, the ladder stands at P1–P7 merged with P8 (relaunch
T3–T6 as native [D-020](DECISIONS.md#d-020--2026-07--parallel-lanes-v2-native-lanes-replace-hand-built-orchestration)
lanes) as the next concrete build step.
  ✅ done in scope (this sitting): P5 dashboard (#60) · ritual fix
     (#62) · P6 Design kickoff + SHIPLOG repair (#64) · P7
     machine-setup skill (#66)
  ⬜ left in scope: the re-establishment chat's outcome · P8 —
     kickoff briefs, then dispatch four source-vetting lanes

## Channels
- [Code] main · no open PRs · tree clean
  Four merges this sitting: dashboard
  ([PR #60](https://github.com/wsher0901/roam/pull/60)), ritual fix
  ([PR #62](https://github.com/wsher0901/roam/pull/62)), Design
  kickoff + SHIPLOG repair
  ([PR #64](https://github.com/wsher0901/roam/pull/64)),
  machine-setup skill
  ([PR #66](https://github.com/wsher0901/roam/pull/66)).
  → next: act on the re-establishment chat's update when it lands;
  otherwise dispatch the T3–T6 lanes when the P8 briefs arrive.
- [Web] chat — system re-establishment (name TBD)
  The founder is reworking how the workshop operates; no paste block
  or decision has landed yet.
  ✅ settled: nothing yet · ⬜ open: everything — founder will
  update later
  → next: founder returns with its outcome (paste block or brief).
- [Web] chat "setup ladder (P1–P8)"
  The ladder's home; P5–P7 delivered and merged; no unpasted blocks.
  ✅ settled: P1–P7 · ⬜ open: P8 kickoff briefs for T3–T6 (may be
  reshaped by the re-establishment chat)
  → next: founder pulls the P8 briefs — after the re-establishment
  chat reports.
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
- Reminder · run the
  [machine-setup skill](../.claude/skills/machine-setup/SKILL.md)'s
  Verify block on each PC at next convenience (Dataview install
  unconfirmed on both).
- BLOCKER · none.

## Next intent
1. System re-establishment chat: founder updates with its outcome
   (→ Web, then paste block here).
2. Parallel: continue the V1.S2.T5 Design draft (start with the
   [DESIGN-KICKOFF](DESIGN-KICKOFF.md) preamble).

Shipped since last note: 0 entries → [SHIPLOG.md](SHIPLOG.md) (the
four merges above shipped before note #67)
