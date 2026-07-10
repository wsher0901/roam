# Handoff — 2026-07-10 (Fri) · work PC

## Macro (as of this note)
Version 1 — the demo app · 5 of 34 pieces shipped █████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
[S1 · Data Definition (the gate)](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code) — open
  ✅ T1 Fact inventory · ✅ T2 Weather sources
  ⬜ T3 Sky & sea · ⬜ T4 Feasibility · ⬜ T5 Time & transport · ⬜ T6 Crowds & calendar
  (T3–T6 are queued at ladder step P8 — do NOT dispatch earlier; kickoff briefs arrive from the Web chat)
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
    upgrading the workshop; P1–P6 merged, P7 is next
  - [V1.S2.T5](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1) → Design lane (mock draft) — visual-language exploration

## Current focus — setup ladder · P7
The eight-step setup ladder runs from a Claude Web chat. This sitting
merged P5, the ritual fix, and P6: the living
[DASHBOARD](DASHBOARD.md), live ritual totals + QUIET ship-tail +
derivation law, and the [DESIGN-KICKOFF](DESIGN-KICKOFF.md)
rule-carrier with the [SHIPLOG](SHIPLOG.md) #62 backfill. P7's prompt
comes from the same chat.
  ✅ done in scope: P1–P6 merged (#53, #56, #57, #58, #60, #64) +
     ritual fix (#62)
  ⬜ left in scope: P7 (defined in the chat) ·
     P8 = relaunch T3–T6 as native source-vetting lanes

## Channels
- [Code] main · no open PRs · tree clean
  Three merges this sitting: the visual dashboard
  ([PR #60](https://github.com/wsher0901/roam/pull/60)), the ritual
  fix ([PR #62](https://github.com/wsher0901/roam/pull/62)), and the
  Design kickoff + SHIPLOG repair
  ([PR #64](https://github.com/wsher0901/roam/pull/64)).
  → next: execute the P7 prompt when it arrives as a paste block.
- [Web] chat "setup ladder (P1–P8)"
  The ladder's home; P5 and P6 delivered and merged; no unpasted
  blocks. (P-counters refreshed from git; lane carried per QUIET
  mode.)
  ✅ settled: P1–P6 · ⬜ open: P7 prompt; P8 queued behind it
  → next: founder pulls the P7 prompt from the chat.
- [Design] V1.S2.T5 mock draft
  Exploring Roam's visual language. New this sitting: start the next
  Design session by pasting the [DESIGN-KICKOFF](DESIGN-KICKOFF.md)
  preamble, then state the lane.
  → next: converge on the two representative screens (option card
  with confidence badge; day timeline beside map), then token
  extraction via "Hand off to Claude Code" — values only, never markup.

## Blockers & gotchas
- GOTCHA · [DASHBOARD](DASHBOARD.md)'s Dataview views render only in
  Obsidian with the Dataview community plugin installed — once per
  machine (neither PC confirmed yet).
- GOTCHA · zero-tap merge permissions (PR #58) were pulled mid-session
  on the work PC — they load at its NEXT session start; this sitting
  still prompted per merge.
- GOTCHA · [DECISION-POLICY](DECISION-POLICY.md) §10 holds five open
  engine questions for the founder — not blocking until
  [V1.S3](ROADMAP.md#v1s3--engine-core--two-families-deep) opens.
- Standing (promotion candidates for a machine-setup skill): work PC
  lacks the Vercel CLI (`npm i -g vercel`; hook-confirmed) and its
  Python 3 / roam.machine label remain unverified; PowerShell 5.1
  mangles em dashes on command lines — pass long text via files.
- BLOCKER · none.

## Next intent
1. P7 (→ Web chat, then paste block).
2. Parallel: continue the V1.S2.T5 Design draft (start with the
   [DESIGN-KICKOFF](DESIGN-KICKOFF.md) preamble).

Shipped since last note: 2 entries → [SHIPLOG.md](SHIPLOG.md)
