---
type: spec
id: atlas-figures
title: Atlas becomes designed figures (D-073)
status: draft
stage: workshop
branch: docs/atlas-figures
opened: 2026-08-03
---

# atlas-figures — ATLAS re-authored as designed SVG

**Links:** [ATLAS](../../ATLAS.md) (the page being re-authored) ·
[HOME](../../HOME.md) (one files-table row) ·
[IDEAS](../../IDEAS.md) (one line re-scoped) · source: the founder's
approved figure language, Web ops chat 2026-08-03, whose approved
sample is the task-loop swimlane.

## Goal

[D-072](../DECISIONS.md#d-072--the-atlas-no-scroll-law) stopped
ATLAS scrolling sideways by forbidding sentences inside mermaid
node labels. It worked, and it exposed the ceiling underneath it:
mermaid renders a GRAPH, and what these eight chains actually are
is a set of HANDOFFS BETWEEN ACTORS — you, the control tower, the
Web surface, the machine. Mermaid cannot say who owns an act. It
lays boxes out by dependency and leaves ownership to be inferred
from a label, which is why every one of these diagrams reads as a
flowchart of steps rather than a picture of a workshop.

This bench re-authors all eight chains as STATIC SVG FIGURES in a
single visual language — swimlanes, where the lane IS the owner.
An act sits in its owner's lane, a crossing between lanes is a
handoff, and the exact word that causes a crossing rides ON the
crossing as a quoted chip. A reader learns "who does what, and
what do I say" from the geometry, before reading a single label.

The figures are hand-authored, static, and self-painted: no
webfonts, no external stylesheet, no runtime. THE FIGURE LAW is
written into ATLAS's header and governs every future re-render.

ATLAS's posture is unchanged: IT RENDERS, IT ORIGINATES NOTHING.
The Boxes line under each figure keeps carrying the prose links —
links cannot live inside an embedded SVG, which makes that line
load-bearing rather than decorative.

## Out of scope

- **No doctrine changes.** Not one rule is altered, softened or
  invented. A figure that cannot show something the mermaid block
  showed loses it only as a NAMED, JUSTIFIED drop in the memory.
- **No section-heading changes.** Anchors are quoted across the
  repo; the eight headings stay exactly as they are, which is what
  makes this a zero-sweep bench.
- **No lint built.** The mechanical gate for the figure law is the
  right idea and the wrong bench — it re-scopes the existing
  [IDEAS](../../IDEAS.md) line instead.
- **No master fence, no LAWS, no skills, no DASHBOARD** beyond a
  citation the sweep proves stale.
- **No interactivity, no animation, no JS.** Static figures only.

## Plan

1. **[decide](../../skills/decide.md) runs first** — D-073, short
   heading per [D-068](../DECISIONS.md#d-068--the-short-anchor-law).
   It SUPERSEDES D-072's mermaid mechanics while keeping its
   principle: no horizontal scroll, names never sentences. Entry
   and ripple in ONE commit.
2. **THE FIGURE LAW into ATLAS's header**, replacing the mermaid
   rendering-law text: fixed 740-wide viewBox · self-painted panel
   · actor lanes · cards as acts · quoted trigger words as chips on
   the crossings they cause · files as badges in the origin lane ·
   double-checked coordinates · a drawn return track for loops ·
   the fixed palette · generic sans-serif and monospace only. Lanes
   encode the chain's dominant dimension — actors by default,
   surfaces or stores when the chain is about data.
3. **Eight figures under `docs/atlas/`**, each the composition its
   chain deserves: `task-loop.svg` · `file-flow.svg` (lanes =
   surfaces) · `flight.svg` (the richest — liftoff, the cockpit,
   four ending paths, resume) · `lane-life.svg` · `surfaces.svg` ·
   `state-surfaces.svg` (lanes = stores) · `enforcement-mesh.svg`
   (cascade, with denies and summon apart and the four-joint box a
   NAME) · `sitting.svg`.
4. **CONTENT FIDELITY**, per the verification law: each figure is
   re-derived from its CURRENT mermaid block and section prose —
   every node, edge, trigger word and honest gap carries over, or
   its absence is a named, justified drop in the memory. Nothing
   silently lost.
5. **[ATLAS](../../ATLAS.md) recut as a gallery**: header, then per
   chain — heading UNCHANGED, the image embed, the section prose
   kept and trimmed only where the figure now shows what a sentence
   said, the Boxes line kept. Every mermaid block dies.
6. **[HOME](../../HOME.md)** — the files-table ATLAS row only.
7. **[IDEAS](../../IDEAS.md)** — the width-gate line re-scoped to
   the new medium as the ATLAS FIGURE GATE; the 48-vs-45 conflict
   dies with the mermaid medium, and the memory says so.
8. **THE SWEEP** — destination-grep the ATLAS section anchors and
   the word "mermaid"; anchors are unchanged, so a zero sweep is
   expected. Any citation that still breaks is repaired
   pointer-only and named in the memory.
9. **Verification**, then ship to THE GATE. Tower-authored: the
   external Web review precedes the founder's word. DO NOT MERGE.

## Done means

- [x] D-073 exists in the
      [D-068](../DECISIONS.md#d-068--the-short-anchor-law) format,
      names what it supersedes in
      [D-072](../DECISIONS.md#d-072--the-atlas-no-scroll-law), and
      its Affects line matches the files actually edited, exactly.
- [x] ATLAS's header carries THE FIGURE LAW with its full fixed
      vocabulary; the mermaid rendering-law text is gone; the stamp
      is a clock read; the born line is unchanged.
- [x] EIGHT SVG figures exist under `docs/atlas/`, one per chain.
- [x] ZERO mermaid blocks remain in ATLAS.
- [x] EVERY SVG IS WELL-FORMED XML, proven mechanically by a
      parser, not by eye.
- [x] THE BOUNDS AUDIT, run MECHANICALLY per figure: nothing past
      x=740, no negative coordinates, height tight to content, no
      text escaping its box — zero violations, recorded in the
      memory.
- [x] PALETTE AND FONT CONFORMANCE proven mechanically: every fill
      and stroke is a law hex, every font-family is generic, and no
      figure references an external resource.
- [x] CONTENT-FIDELITY RECEIPTS: for each of the eight, every node,
      edge, trigger word and honest gap of the retired mermaid
      block is accounted for — carried over, or dropped with a
      named justification, in the memory.
- [x] All eight section headings are byte-identical to before, and
      all eight embeds resolve (`check:links` green).
- [x] HOME's files-table ATLAS row names the new medium.
- [x] The IDEAS line is re-scoped, not duplicated; the dead
      48-vs-45 conflict is explained in the memory.
- [x] Nothing outside the named files is touched.
- [x] `check:links` · `check:ledger` · `check:memory` · lint ·
      format · test · build green; Actions green on the PUSHED
      head; [ship §6](../../skills/ship.md#6--the-gate) critic run
      against every figure's SOURCE.
