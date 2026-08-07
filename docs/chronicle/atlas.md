---
type: chronicle-story
shelf: III — the information system
status: living
updated: 2026-08-06 · written · cloud lane
---

# ATLAS — the system spine

> **CURRENT ENDING (2026-08-06).** Live, and twice transformed
> since its census cell was written. It is no longer "six
> diagrams": it carries **EIGHT figures**, and they are no longer
> mermaid — since
> [D-073](../record/DECISIONS.md#d-073--atlas-becomes-designed-figures)
> they are hand-written static SVGs under
> [docs/atlas/](../atlas), embedded by image link and governed by
> THE FIGURE LAW. The posture the cell records is the one thing
> that never moved: **ATLAS RENDERS AND ORIGINATES NOTHING** — it
> is deliberately among the least authoritative files in the repo,
> every figure carrying a Boxes line that links the prose actually
> owning its doctrine.

## What it is

The workshop drawn as one page: eight chains a cold reader can see
whole before reading a word of law. The task loop · the file flow
· away & return · a lane's life · the surfaces · state surfaces ·
the enforcement & update mesh · a sitting.

Its header carries two standing laws:

- **IT RENDERS, IT ORIGINATES NOTHING.** Like
  [the board](../DASHBOARD.md), ATLAS is deliberately low
  authority. The prose governs; a figure that disagrees with its
  prose home is wrong by construction. Every figure is dated, and
  every one links out.
- **THE FIGURE LAW** — a fixed visual vocabulary: a 740-wide
  viewBox so nothing scrolls sideways, a self-painted panel, ACTOR
  LANES, cards as acts, quoted trigger words riding as CHIPS on
  the crossings they cause, files as badges in the origin lane, a
  return track for loops, a fixed palette, and generic
  sans-serif/monospace only — no webfonts. Lanes encode the
  chain's dominant dimension: actors by default, surfaces or
  stores when the chain is about data.

Its maintenance rule is the reason it stays true: **the bench that
changes what a figure depicts re-draws that figure in the same
PR.**

## What raised it

Every mechanism in this workshop was recorded somewhere, and
nowhere was the SHAPE of the whole thing visible. A reader could
follow any single law to its home and still not see how the parts
interlocked — which is a specific kind of blindness, because
interlocks are where the gaps live.

The enforcement layer proved it. That layer lives almost entirely
OUTSIDE the doc tree — in `.claude/`, `.github/`, and a settings
file — and is the part a session is least able to discover by
reading. Drawing it as one chain surfaced a hole immediately: CI
fires on pull requests and on main, NOT on every push, which would
leave a branch uncovered until its PR existed. What closes that
hole is the BENCH-FIRST LAW, which gives every task a draft PR in
its first minute. Neither law covers the floor alone, and nothing
in the repo had ever said so.

## What changed, in order

- **2026-07-27 — born**
  ([D-058](../record/DECISIONS.md#d-058--atlas-the-system-spine),
  [#231](https://github.com/wsher0901/roam/pull/231)): six
  diagrams on one page, with the posture fixed from the first day
  — dated stamp, least-authoritative, prose governs, every box
  linked to its owning doctrine so a currency audit can verify the
  page MECHANICALLY rather than by reading it.
- **2026-07 — §7, THE ENFORCEMENT & UPDATE MESH**
  ([D-071](../record/DECISIONS.md#d-071--atlas-gains-the-enforcement-mesh),
  [#259](https://github.com/wsher0901/roam/pull/259)). One
  flowchart of the delivery chain from the ambient `CLAUDE.md`
  import through the register, act-time skills, the point-only
  stubs, the three session hooks, CI, the summon workflow, the
  settings denies, the critic and the external review — ending at
  THE FOUNDER'S WORD as sole merge authority, with a dashed
  side-note naming the three joints that are judgment only. Six
  becomes seven.
- **2026-08 — THE NO-SCROLL LAW, and §8**
  ([D-072](../record/DECISIONS.md#d-072--the-atlas-no-scroll-law),
  [#263](https://github.com/wsher0901/roam/pull/263)). ATLAS had
  become unreadable in the one way it could not afford: labels
  were being used to EXPLAIN — one box in §7 ran to 340
  characters, written by this workshop a single bench earlier — so
  mermaid rendered boxes wider than any screen, and two diagrams
  flowed sideways on top of it. The reader scrolled horizontally
  to finish one box, and THE SHAPE, which is the only thing a
  diagram offers that prose does not, was lost behind the
  scrollbar. The law: top-down only, and A NODE LABEL IS A NAME,
  NEVER A SENTENCE. All seven existing diagrams were brought under
  it in the same PR, and two missing chains drawn — the intake
  band upstream of the bench, and a new §8 A SITTING. Seven
  becomes eight.
- **2026-08-03 — THE FIGURE LAW: mermaid is retired**
  ([D-073](../record/DECISIONS.md#d-073--atlas-becomes-designed-figures),
  [#265](https://github.com/wsher0901/roam/pull/265)). D-072 fixed
  the symptom and revealed the ceiling. Mermaid renders a GRAPH —
  nodes laid out by dependency — and what these eight chains
  actually are is a set of HANDOFFS BETWEEN ACTORS: the founder,
  the control tower, the Web surface, the machine. Mermaid has no
  way to say WHO OWNS AN ACT, so ownership had to be smuggled into
  node text — which is precisely the pressure that had inflated
  the labels D-072 was cutting back. SWIMLANES PUT OWNERSHIP IN
  THE GEOMETRY: an act sits in its owner's lane, a crossing
  between lanes IS a handoff, and the exact word causing a
  crossing rides on it as a quoted chip. The eight chains are
  re-authored as static SVGs; D-072's mermaid mechanics are
  SUPERSEDED while its principle is kept intact.

## Where it stands

Eight figures, eight files under [docs/atlas/](../atlas), section
headings unchanged across the re-authoring so every anchor quoted
elsewhere still resolves. Counted from the page and the directory
at this story's write time, not from any summary.

**THE CENSUS CELL IS BADLY STALE, and this story overrides it.**
It reads "Born and settled with its own maintenance law: the bench
that changes what a diagram depicts re-renders it in the same PR."
The maintenance law is still exactly right — it is the sentence
that survived all three later changes. Everything around it moved:
the count went six → seven → eight, and the rendering technology
was replaced outright. The cell's word "settled" is the
instructive part. ATLAS was genuinely settled when the census read
it, and settled proved to mean *settled for eight days*.

One consequence of the SVG re-authoring is worth flagging because
it is a live constraint rather than a finished change: **links
cannot live inside an embedded SVG.** The Boxes line under each
figure carries the prose links instead — which means the
weave-rule check can verify those links, but nothing mechanically
verifies that a figure's PICTURE still matches the prose it points
at. That check is the maintenance law, and the maintenance law is
a discipline, not a gate.

## Sources

Down-links only.

- [ATLAS](../ATLAS.md) — the page, its header laws, and the eight
  figures.
- [docs/atlas/](../atlas) — the SVG figures themselves.
- [D-058](../record/DECISIONS.md#d-058--atlas-the-system-spine) —
  birth and the renders-nothing posture.
- [D-071](../record/DECISIONS.md#d-071--atlas-gains-the-enforcement-mesh)
  — the enforcement mesh, and the CI/bench-first interlock it
  surfaced.
- [D-072](../record/DECISIONS.md#d-072--the-atlas-no-scroll-law)
  — the no-scroll law and §8.
- [D-073](../record/DECISIONS.md#d-073--atlas-becomes-designed-figures)
  — the figure law that superseded the mermaid mechanics.
- [the census bench](../record/history/workshop/definition/atlas-census.md)
  · [the clean-up bench](../record/history/workshop/definition/atlas-clean.md)
  · [the figures bench](../record/history/workshop/definition/atlas-figures.md)
  · [the birth bench](../record/history/workshop/definition/atlas.md).
