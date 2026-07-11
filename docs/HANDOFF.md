# Handoff — 2026-07-10 (Fri) · home PC

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
  - system re-establishment → Web lane (chat) — Phase 1+2 of its
    plan landed this sitting and is merged
    ([PR #69](https://github.com/wsher0901/roam/pull/69)); later
    phases still to come; P8 holds until the chat finishes
  - setup ladder (P1–P8) → Web lane (chat) — P1–P7 merged; P8 (the
    T3–T6 relaunch) is the final step, queued behind the
    re-establishment chat
  - [V1.S2.T5](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1) → Design lane (mock draft) — visual-language exploration

## Current focus — workshop meta: system re-establishment
The Web chat reworking how the workshop operates delivered its first
concrete output this sitting: the Phase 1+2 kickoff brief, executed
and merged as [PR #69](https://github.com/wsher0901/roam/pull/69) —
[FOUNDATION](FOUNDATION.md) is now timeless identity only,
[ROADMAP](ROADMAP.md) carries the V1/V2/V3 version ladder and
per-version scope, [DECISION-POLICY](DECISION-POLICY.md) is canonical
for plan-synthesis rules
([D-021](DECISIONS.md#d-021--2026-07--plan-synthesis-principles-re-home-to-decision-policy),
[D-022](DECISIONS.md#d-022--2026-07--version-ladder--lifespan-split-amends-d-004)).
The chat's later phases (and any P8 reshaping) are still to come.
  ✅ done in scope (this sitting): Phase 1+2 — FOUNDATION v3 +
     ROADMAP v2 + corpus ripple, all four verification gates green
     ([PR #69](https://github.com/wsher0901/roam/pull/69))
  ⬜ left in scope: the chat's remaining phases · P8 — kickoff
     briefs, then dispatch four source-vetting lanes

## Channels
- [Code] main · no open PRs · tree clean
  One merge this sitting: the Foundation/Roadmap re-cut
  ([PR #69](https://github.com/wsher0901/roam/pull/69)); its PR body
  carries a Deviations section (e.g. "never at V1's expense" became
  "never at the product's expense") the founder may want to skim.
  → next: execute the re-establishment chat's next phase brief when
  it lands; otherwise dispatch the T3–T6 lanes when P8 briefs arrive.
- [Web] chat — system re-establishment
  Delivered Phase 1+2 (executed + merged,
  [PR #69](https://github.com/wsher0901/roam/pull/69)); the founder
  said approval came after an external review, which returned clean.
  ✅ settled: Phase 1+2 (identity/plan split, version ladder) ·
  ⬜ open: the remaining phases — founder pulls them when ready
  → next: founder returns with the next phase's brief.
- [Web] chat "setup ladder (P1–P8)"
  The ladder's home; P5–P7 delivered and merged; no unpasted blocks.
  ✅ settled: P1–P7 · ⬜ open: P8 kickoff briefs for T3–T6 (may be
  reshaped by the re-establishment chat)
  → next: founder pulls the P8 briefs — after the re-establishment
  chat finishes.
- [Design] V1.S2.T5 mock draft
  Exploring Roam's visual language. Start the next Design session by
  pasting the [DESIGN-KICKOFF](DESIGN-KICKOFF.md) preamble, then
  state the lane.
  → next: converge on the two representative screens (option card
  with confidence badge; day timeline beside map), then token
  extraction via "Hand off to Claude Code" — values only, never markup.

## Blockers & gotchas
- GOTCHA · zero-tap merge permissions (PR #58) were pulled mid-session
  on the work PC — they load at its NEXT session start there; on this
  home PC merges ran without prompting this sitting.
- GOTCHA · [DECISION-POLICY](DECISION-POLICY.md) §10 holds five open
  engine questions for the founder — not blocking until
  [V1.S3](ROADMAP.md#v1s3--engine-core--two-families-deep) opens.
- GOTCHA · four already-merged branches still sit on origin
  (chore/handoff-2026-07-09 · chore/hygiene-retro-weave ·
  chore/ritual-engine-v2 · docs/knowledge-structure) — safe to
  delete at the founder's word.
- Reminder · run the
  [machine-setup skill](../.claude/skills/machine-setup/SKILL.md)'s
  Verify block on each PC at next convenience (Dataview install
  unconfirmed on both).
- BLOCKER · none.

## Next intent
1. System re-establishment chat: founder pulls the next phase's
   brief (→ Web, then paste here).
2. Parallel: continue the V1.S2.T5 Design draft (start with the
   [DESIGN-KICKOFF](DESIGN-KICKOFF.md) preamble).

Shipped since last note: 1 entry → [SHIPLOG.md](SHIPLOG.md)
