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
    upgrading the workshop; P1–P5 merged, P6 is next
  - [V1.S2.T5](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1) → Design lane (mock draft) — visual-language exploration

## Current focus — setup ladder · P6
The eight-step setup ladder runs from a Claude Web chat. P5 (the
visual layer) was executed and merged this sitting: a living
[DASHBOARD](DASHBOARD.md) with a Mermaid stage map (GitHub +
Obsidian) and Dataview live views, kept honest by /ship's bookkeeping
step. P6's prompt comes from the same chat.
  ✅ done in scope: P1–P5 merged (#53, #56, #57, #58, #60)
  ⬜ left in scope: P6–P7 (defined in the chat) ·
     P8 = relaunch T3–T6 as native source-vetting lanes

## Channels
- [Code] main · no open PRs · tree clean
  P5 executed from its paste block and merged
  ([PR #60](https://github.com/wsher0901/roam/pull/60)):
  [DASHBOARD](DASHBOARD.md) is live, /ship now repaints its stage map
  at every merge, [HOME](HOME.md) routes to it.
  → next: execute the P6 prompt when it arrives as a paste block.
- [Web] chat "setup ladder (P1–P8)"
  The ladder's home; P5 delivered and merged; no unpasted blocks.
  ✅ settled: P1–P5 · ⬜ open: P6 prompt; P7–P8 queued behind it
  → next: founder pulls the P6 prompt from the chat.
- [Design] V1.S2.T5 mock draft
  Exploring Roam's visual language.
  → next: converge on the two representative screens (option card
  with confidence badge; day timeline beside map), then token
  extraction via "Hand off to Claude Code" — values only, never markup.

## Blockers & gotchas
- GOTCHA · [DASHBOARD](DASHBOARD.md)'s Dataview views render only in
  Obsidian with the Dataview community plugin installed — once per
  machine (neither PC confirmed yet).
- GOTCHA · the /handoff template hardcodes "of 33" pieces but the live
  [ROADMAP](ROADMAP.md) counts 34 tasks — use the live count; fix the
  template via a normal approved PR.
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
1. P6 (→ Web chat, then paste block).
2. Parallel: continue the V1.S2.T5 Design draft.

Shipped since last note: 1 entry → [SHIPLOG.md](SHIPLOG.md)
