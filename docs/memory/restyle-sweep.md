---
type: memory
id: restyle-sweep
updated: 2026-07-14 · ship · work PC
---

# restyle-sweep — leg-end restyle sweep: D-029 finishes its migration

## Status

complete, awaiting merge — the sweep is applied and content-immutable
against main (visible-text diff clean apart from the one sanctioned
HOME nit), the full local CI mirror is green, and the PR is at THE
GATE. No merge here; founder approval follows external word-diff
review.

## What this task is

The leg-end sweep of
[D-029](../DECISIONS.md#d-029--2026-07--corpus-writing-laws--readability-first-links-below-prose)'s
ratchet: every living doc the ops leg had not already restyled now
carries its links below the prose in a Sources block. Content was
immutable throughout — only link relocation, rewrapping, and the one
HOME rendering nit.

## Reading calls (task-local — recorded per the kickoff)

(a) LAWS is command-class — its functional pointer links are
"necessary" under D-029 and stay inline; this sweep only rewrapped
its two over-length lane-law lines (introduced by
[D-032](../DECISIONS.md#d-032--2026-07--fleet-continuity--handoff-parks-every-local-lane-liftoff-respawns-parked-benches-wake-lock-parks-every-outcome-extends-the-d-020d-023-lane-law-upholds-d-009)'s
surgical edit) to house width — the LAWS word-diff is empty.

(b) HOME's Terms entries are glossary-class — definition lines kept
their inline links; everything else in HOME converted.

## Deviations & interpretations

- **FOUNDATION was already conformant** — it has zero inline markdown
  links (pure identity prose), so there was nothing to relocate.
  Inventing a Sources block would violate content-immutability, so it
  is left untouched. The kickoff expected eight files; the diff shows
  **seven** (the six sweep targets minus FOUNDATION, plus this spec
  and memory). This is the one scope deviation.
- **Bulleted reference lists kept inline.** Beyond Terms, two bulleted
  reference blocks carry single trailing refs — HOME's relay-map
  bullets and the Roadmap-manual bullets. These read as glossary /
  reference material, and D-029 sanctions "trailing same-sentence
  refs where a Sources block would be heavier than the single link,"
  so they stay inline. All flowing prose paragraphs and portraits
  converted.
- **The HOME nit** — the routing-table cell token `SOURCES-<family>`
  was backticked so its angle brackets survive GitHub's HTML
  rendering; this is the only content-level change in the whole
  sweep, and it is the nit the kickoff named.

## Left / idle

Only the merge word. Tail after merge: the Obsidian pass (recommended
as Now). Nothing parked.

## The story

The sweep touched five narrative docs and skipped FOUNDATION.
Verification was per-file and automated: each converted file's
visible text (every link reduced to its bare label, Sources blocks
removed symmetrically from both sides) was diffed against main and
came back identical — LAWS empty at the word level, ROADMAP and
parallel-lanes and DESIGN-KICKOFF pure link-relocation, HOME clean
apart from the backticked nit. DESIGN-KICKOFF's fenced preamble (a
paste artifact) was confirmed byte-identical to main. ROADMAP's
checkbox count is unchanged (5 done / 29 open), and the task-line
`->` refs and stage-line links were left inline as sanctioned. HOME
was the bulk — intro, daily loop, thirteen portraits, the mechanisms
subsections, reading-the-board, the data-files manual, and
equipment & environment all moved their links below the prose; the
Terms section and every table stayed put.

## Where to look

Spec: [restyle-sweep](../specs/restyle-sweep.md) · the ratchet:
[D-029](../DECISIONS.md#d-029--2026-07--corpus-writing-laws--readability-first-links-below-prose)
· PR [#121](https://github.com/wsher0901/roam/pull/121) · targets:
[HOME](../HOME.md) · [DESIGN-KICKOFF](../DESIGN-KICKOFF.md) ·
[parallel-lanes](../skills/parallel-lanes.md) ·
[ROADMAP](../ROADMAP.md) · [LAWS](../LAWS.md).
