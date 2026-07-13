---
type: spec
id: engine-recut
title: Consolidation recut — DECISION-POLICY becomes ENGINE (the brain skeleton); PROJECT-POLICY to house style
status: open
stage: workshop
branch: docs/engine-recut
pr: —
opened: 2026-07-13
shipped: —
---
# engine-recut — Consolidation recut: DECISION-POLICY becomes ENGINE (the brain skeleton); PROJECT-POLICY to house style
**Links:** [ENGINE](../ENGINE.md) ·
[PROJECT-POLICY](../PROJECT-POLICY.md) · [LAWS](../LAWS.md) ·
[HOME](../HOME.md) · [ROADMAP](../ROADMAP.md) · Decisions:
[D-021](../DECISIONS.md#d-021--2026-07--plan-synthesis-principles-re-home-to-decision-policy) ·
[D-028](../DECISIONS.md#d-028--2026-07--consolidation-recut--decision-policy--engine-brain-skeleton-form-project-policy-house-style-open-register-grows-69-upholds-d-021-extends-the-d-021-consolidation)

## Goal
The engine consolidation becomes an operational skeleton — pipeline
stages, IO, procedures, rules-in-slots, a loud OPEN register — under
its true name [ENGINE.md](../ENGINE.md);
[PROJECT-POLICY](../PROJECT-POLICY.md)
adopts the same house style (gloss + bold handles + per-section
Sources); full retroactive ripple across the corpus.

## Out of scope
- ANY rule-semantics change in either file.
- New rules beyond the four OPEN-register items.
- Resolving any OPEN item.
- DASHBOARD content beyond one mechanical link repair.
- ROADMAP checkbox state.

## Plan
1. Bench birth: branch docs/engine-recut → this spec + memory stub →
   draft PR.
2. git mv the old consolidation to ENGINE.md (history follows), then
   overwrite ENGINE.md and [PROJECT-POLICY](../PROJECT-POLICY.md)
   with the workshop payloads byte-exact; derive the three
   best-effort anchors (D-014 entry · V1.S6 stage · TELEMETRY §1/§2)
   from their real headings and correct them if they differ.
3. Run [decide](../skills/decide.md): append the next D-number
   (computed from [DECISIONS](../DECISIONS.md)' tail) — entry + full
   ripple in the SAME commit: living docs (LAWS · HOME · ROADMAP ·
   FACTS · SOURCES · decide skill) rename + retarget per the anchor
   map; frozen records (DECISIONS · history/ · finalized specs)
   repair link targets only; [DASHBOARD](../DASHBOARD.md) gets
   exactly one mechanical link repair, noted in memory as a
   sanctioned retroactivity repair.
4. Verify (below) · [ship](../skills/ship.md) to THE GATE — no
   merge; founder approval follows external review.

## Done means
- [x] Both files byte-match the workshop payloads (modulo the
      sanctioned anchor corrections of step 2)
- [x] "DECISION-POLICY" appears nowhere in the repo as a link target
      and nowhere in living-doc prose
- [x] Every old section anchor repaired per the map; old anchors
      absent repo-wide
- [x] `node scripts/check-links.mjs` passes (1124 links, 0 broken)
- [x] Lint + tests green
- [x] ROADMAP checkboxes unchanged

## Deviations
- One sanctioned anchor correction inside the ENGINE payload: the
  D-014 entry anchor (the payload's guess did not match the real
  heading "Telemetry posture: capture now, use later"); the V1.S6
  and TELEMETRY §1/§2 anchors were already correct.
- [HOME](../HOME.md)'s consolidations portrait was a JOINT block
  (PROJECT-POLICY + the old file). Replacing its body verbatim would
  have erased PROJECT-POLICY's only portrait, so it was split in
  two: PROJECT-POLICY keeps a portrait distilled from the old joint
  text; ENGINE carries the founder's verbatim paragraph.
- [DECISIONS](../DECISIONS.md) D-021's decision line spelled the old
  filename (with suffix) inside link TEXT; the text kept the
  historical name but dropped the suffix — the only reading that
  satisfies both the frozen-prose law and the zero-hit grep.
- [ROADMAP](../ROADMAP.md)'s binding-requirements lines first kept
  the literal "§6–§8" per the brief; the old rules now sit in
  [ENGINE](../ENGINE.md) §5/§6/§8, so the range read a hair loose.
  Flagged at the gate; the founder amended: the link text now names
  the stages ("ENGINE — Aggregate · Synthesize · Gate"), which
  outlives any renumbering.
- The payloads and the verbatim HOME paragraph carry bare
  roadmap-ID mentions (V1.S3, V1.S4…) by design — the byte-match
  Done-means outranks weave-lint inside founder-fixed text; their
  Sources lines carry the links.

## Open questions
none
