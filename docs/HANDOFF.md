# Handoff — 2026-07-09 (Thu) · home PC

## Macro (as of this note)
Version 1 — the demo app · 5 of 33 pieces shipped █████░░░░░░░░░░░░░░░░░░░░░░░░░░░░
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
    upgrading the workshop before the next build push; P5 is next
  - [V1.S2.T5](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1) → Design lane (mock draft) — visual-language exploration

## Current focus — setup ladder · P5: visual layer
An eight-step setup ladder (P1–P8) runs from a Claude Web chat,
upgrading the workshop before the next build push. P1–P4 all merged
today: session hooks v2 (#53), ritual engine v2 + SHIPLOG birth
(#56), hygiene + retro-weave (#57), knowledge layer + zero-tap merges
(#58). P5 (the visual layer) is next; its prompt comes from that chat.
  ✅ done in scope: P1–P4 merged (#53, #56, #57, #58)
  ⬜ left in scope: P5 visual layer · P6–P7 (defined in the chat) ·
     P8 = relaunch T3–T6 as native source-vetting lanes

## Channels
- [Code] main · no open PRs · tree clean
  Four ladder PRs merged this sitting; [SHIPLOG](SHIPLOG.md),
  [GLOSSARY](GLOSSARY.md), [DECISION-POLICY](DECISION-POLICY.md),
  [HOME](HOME.md) v2, and corpus frontmatter are all live.
  → next: execute the P5 prompt when it arrives as a paste block.
- [Web] chat "setup ladder (P1–P8)"
  The ladder's home; P1–P4 delivered and merged; no unpasted blocks.
  ✅ settled: P1–P4 · ⬜ open: P5 prompt; P6–P8 queued behind it
  → next: founder pulls the P5 visual-layer prompt from the chat.
- [Design] V1.S2.T5 mock draft
  Exploring Roam's visual language.
  → next: converge on the two representative screens (option card
  with confidence badge; day timeline beside map), then token
  extraction via "Hand off to Claude Code" — values only, never markup.

## Blockers & gotchas
- GOTCHA · zero-tap merge permissions (PR #58) load at NEXT session
  start — this session still prompts once per merge.
- GOTCHA · [DECISION-POLICY](DECISION-POLICY.md) §10 holds five open
  engine questions for the founder — not blocking until
  [V1.S3](ROADMAP.md#v1s3--engine-core--two-families-deep) opens.
- Standing (promotion candidates for a machine-setup skill): the
  other machine still needs Supabase MCP, vercel login, the
  roam.machine label, and real Python 3; PowerShell 5.1 mangles em
  dashes on command lines — pass long text via files.
- BLOCKER · none.

## Next intent
1. P5 visual layer (→ Web chat, then paste block).
2. Parallel: continue the V1.S2.T5 Design draft.

Shipped since last note: 3 entries → [SHIPLOG.md](SHIPLOG.md)
