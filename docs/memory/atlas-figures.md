---
type: memory
id: atlas-figures
updated: 2026-08-03 16:12 · critic round · work PC
---
# atlas-figures — ATLAS re-authored as designed SVG

## Status

complete, awaiting merge — 2026-08-03, work PC.
[D-073](../record/DECISIONS.md#d-073--atlas-becomes-designed-figures)
is minted, THE FIGURE LAW is in [ATLAS](../ATLAS.md)'s header, and
all eight chains are re-authored as hand-written swimlane SVG under
[docs/atlas/](../atlas). ZERO MERMAID BLOCKS REMAIN. The figure
audit returns 0 violations across 8 figures. Full CI mirror green.

## What this task is

ATLAS's eight chains are re-authored from mermaid into designed
static SVG figures in one visual language: swimlanes where THE LANE
IS THE OWNER, acts as cards, and the exact trigger word riding as a
chip on the crossing it causes. Contract:
[the spec](../record/specs/atlas-figures.md).

## Pending issues

- Tower-authored, so
  [no-solo-approval](../LAWS.md#workflow-non-negotiable) requires an
  external Web review before the founder's word at THE GATE. DO NOT
  MERGE.
- **One scope question for the founder, not a defect.**
  [HOME](../HOME.md) carries its OWN small mermaid block — the
  away-mode chooser at
  [§Delegation](../HOME.md#delegation--the-away-mode-chooser). The
  figure law is ATLAS's PRESENTATION law and this bench's file scope
  gave HOME exactly one row, so it was deliberately not touched.
  Whether D-073 should reach HOME's diagram is a decide-level
  ruling. Raised at the gate rather than assumed either way.

## Left / idle

nothing parked.

## The story

Opened 2026-08-03 at the work PC on the founder's approved figure
language from the same day's Web ops chat.

### Why the medium had to change, not just the labels

[D-072](../record/DECISIONS.md#d-072--the-atlas-no-scroll-law) was
one bench old and already at its ceiling. It had banned sentences
inside mermaid labels, which fixed the scrolling — but the reason
those sentences kept appearing was structural: mermaid draws a
GRAPH, laid out by dependency, with no way to say WHO OWNS AN ACT.
Ownership therefore got smuggled into node text, which is exactly
the pressure D-072 had to cut back. Swimlanes put ownership in the
GEOMETRY instead: an act sits in its owner's lane, a crossing IS a
handoff, and the word that causes the crossing rides on it. The
label pressure disappears because the labels no longer have to
carry ownership at all.

### The approved sample is a paste block, not a file

Recorded because a later reader will wonder where it went.
[LAWS §Knowledge & tracking](../LAWS.md#knowledge--tracking) makes
Claude Design a NO-WRITE surface: only extracted VALUES enter the
repo, never markup or bundles. The mandate's vocabulary section IS
that paste block — palette, type sizes, radii, stroke weights,
device rules — so `task-loop.svg` was authored FROM the vocabulary
rather than copied from a bundle. That is the law working as
designed, not a missing input.

### Measured, not eyeballed — the figure audit

A conformance auditor was written BEFORE the first figure, and
every pass ran against it. It checks seven things per figure:
well-formed XML through a real parser · `viewBox` exactly `0 0 740
H` · every coordinate inside the canvas and non-negative · EVERY
TEXT ELEMENT CONTAINED INSIDE ITS OWN CARD, CHIP OR BADGE RECT, by
estimating advance width from font size, weight, family and
letter-spacing · every `fill` and `stroke` drawn from the law's
fixed palette · every `font-family` generic · and no external
reference or scripting construct anywhere. AFTER THE CRITIC ROUND
it also checks the law's GEOMETRY AND TYPE SCALE — panel, card,
chip and badge radii; lane-wash fill and opacity; and every
font-size against the scale, with cards held to the fixed 12.5/10
pair. Each new check was probe-tested by deliberately breaking a
figure and confirming it fired.

FINAL: **8 figures · 0 violations.** It earned its keep immediately
— the first pass of `task-loop.svg` failed with ELEVEN text
overflows and one footer running past x=740, none of which were
visible to me while writing the markup. Six more overflows were
caught across figures 3, 4 and 5 in later passes. Every one was a
label that would have rendered outside its box in a browser.

The auditor's containment check is an ESTIMATE, not a rasteriser —
it derives width from character count and font metrics with a
conservative factor. Stated plainly so nobody mistakes it for a
pixel-exact guarantee; it is a tight upper bound, and the figures
are laid out with padding on top of it. Making this mechanical for
real is the re-scoped [IDEAS](../IDEAS.md) line.

### Content fidelity, figure by figure

Each figure was re-derived from its retired mermaid block AND its
section prose. Every node, edge, trigger and honest gap is
accounted for below.

- **§1 task loop** — all 13 nodes carried, plus the WELD
  subgraph's four writes as origin badges (tick · memory → history
  · spec → shipped · ledger line), the `no word → wait, never
  merge` branch as a lane caption, and the memory return loop as a
  drawn ↻ track. GAINED, from prose that had no box: the external
  Web review as its own card, tinted web-teal inside the CHECKS &
  REVIEW lane — the one COMPOSITE lane on the page, holding two
  machine acts beside one Web act, which its title says plainly.
  DROPPED: the words
  "reviewer subagent" from the critic card — the mechanism lives at
  [ship §6](../skills/ship.md#6--the-gate), which the Boxes line
  cites.
- **§2 file flow** — the 4-step read chain and all 8 writes
  carried. The mermaid's `READS --> WRITES` edge became the dashed
  connector between the two bands. Ship appears three times, which
  the caption explains rather than leaving as a puzzle.
- **§3 flight** — all 21 nodes and every edge label carried,
  including the four flight endings, both land modes, the fence,
  the go-remote → handoff path and the fleet-resume. GAINED: "old
  sessions are never revived", which §3's prose carried but no box
  did. Two founder words are drawn as chips — `"ground the fleet"`
  and `"land"` — while AUTO-LAND and DESK TAKEOVER carry their
  trigger as a subline, because those two are DERIVED conditions
  and not words anyone speaks. That distinction is now visible at a
  glance and is called out in the section prose.
- **§4 lane's life** — all 12 nodes carried; the wake-lock's two
  dashed paths into self-terminate are drawn as a set-apart band so
  the two ways a lane dies read as one idea. The "never a file a
  sibling touches" clause, which the last bench had cut from a
  node, is restored as an origin caption.
- **§5 surfaces** — all 9 nodes carried. Re-shaped from a graph
  into four writer lanes reaching UP into one bookkeeping band,
  which lets `never` and `no-write` read as what they are: arrows
  that do not connect. The micro-PR carve-out and the weld are
  stated in the footer, as in the prose.
- **§6 state surfaces** — all 5 nodes and the `on any disagreement`
  return carried. Lanes are the STORES here, per the law's
  dominant-dimension clause.
- **§7 enforcement mesh** — all 15 nodes carried, with the denies
  and summon in a lane literally named DRAWN APART, and the
  four-joint box kept as a NAME pointing at the prose, exactly as
  the mandate required. The deny VALUES and the `ops/summon`
  mechanism ride as captions, both verified against
  [SETUP](../SETUP.md).
- **§8 a sitting** — all 9 nodes carried, including the QUIET side
  path and its return, the prompt hook's stamping, and the
  born-live return track.

NOTHING WAS DROPPED SILENTLY. The single drop is named above
(§1's "reviewer subagent"), and it has a cited home.

### The sweep

Section headings were left byte-identical, which was the point:
the destination-grep for ATLAS anchors finds only
[D-072](../record/DECISIONS.md#d-072--the-atlas-no-scroll-law)'s
own citations of `#1--the-task-loop` and `#8--a-sitting`, and both
still resolve. ZERO POINTER REPAIRS NEEDED. A grep for `mermaid`
across living files returns only this bench's own prose, the
re-scoped IDEAS line, and HOME's separate chooser diagram — the
scope question raised under Pending issues.

### The links gate was proven, not assumed

`check:links` reports 4,440 links green, but that number alone does
not prove it validates IMAGE embeds. So one embed was deliberately
broken and the gate re-run: it reported
`BROKEN docs/ATLAS.md: (atlas/task-loop-MISSING.svg) — file not
found`. The probe was reverted and the gate re-run clean. The eight
figures are therefore genuinely covered by CI, not merely present.

### The dead 48-vs-45 conflict

The previous bench left the width-gate inbox line carrying a
conflict — the founder's 48 against the law's 45 — with a note to
settle it at triage. THAT QUESTION NO LONGER EXISTS: the
character-cap mechanic was mermaid's, and D-073 supersedes it. The
line is RE-SCOPED in place, per verify-before-classify, to the
ATLAS FIGURE GATE — viewBox, palette hexes, generic fonts,
coordinate bounds — and the conflict note is gone with the medium
that created it. The line was not duplicated and not deleted.

### The critic's round

EIGHT FINDINGS, and one of them was a REGRESSION I had re-introduced
— the most useful thing the critic did all bench. All eight
repaired:

1. **🔴 A false claim of exactness, re-introduced.**
   `lane-life.svg` card 5 read `airborne · url` with the subline
   "the exact ack token", while the canonical token is
   `airborne · <url> · <date>`
   ([§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)).
   This is the SAME defect
   [#263](https://github.com/wsher0901/roam/pull/263)'s critic
   removed one bench ago, and the medium change carried it back in.
   It matters because the token is matched by prefix and a
   near-miss is invisible to a waiting lane. The word "exact" is
   gone; the exact form stays where it is owned.
2. **The surfaces figure contradicted lane rule 7.** The LANES lane
   carried a dashed `never` arrow AND a solid `only at THE GATE`
   arrow into main, under a legend reading "solid = it may write" —
   which says a lane may write main. Worse, the solid arrow
   originated from nothing: the branch badge's connector dead-ended
   at the lane edge. Repaired by making the two arrows about two
   different subjects, which is the actual doctrine: the LANE never
   writes main (dashed, from the lane card), while ITS BRANCH
   reaches main at THE GATE (solid, now genuinely starting at the
   branch badge). The legend says "this reaches main" rather than
   "it may write".
3. **The spec's Done-means was entirely unticked** at the gate —
   the same miss as the previous bench. Ticked.
4. **The figures deviated from the law their own page states**, and
   the auditor's checks were narrower than the Done-means claimed:
   chips at `rx` 8 not 9 · lane washes at 0.7 and 0.45 outside the
   0.5–0.6 band · card type at 11.5px and a 9px subline against the
   fixed 12.5/10 pair. All corrected in the figures, AND the
   auditor extended to cover radii, washes and the type scale so
   the claim and the check now match.
5. **Two lane washes the law did not name** — machine `#F3F1E9` and
   the store lanes' `#F1EFE6`. The law's four-wash list predated
   its own dominant-dimension clause, which requires store and
   machine lanes. THE LAW WAS WIDENED rather than the figures bent:
   both washes are now named in ATLAS's header.
6. **Cards without numbered circles.** `surfaces.svg` enumerates
   rather than sequences, and the hook sub-cards and the terminal
   `self-terminate` card are children of numbered ones. The law now
   says a numbered circle is carried WHEN THE FIGURE READS AS A
   SEQUENCE, and names the two exceptions — a description of what
   the figures are, not a loosening to fit them.
7. **The chip device was under-specified.** The law said a chip
   carries "the EXACT word quoted", but most chips carry a rule or
   an answer, and three figure footers had quietly redefined the
   device locally. The law now names BOTH uses and makes the
   quotation marks the tell — quoted means it is something you say
   — and the three footers are unified to one wording.
8. **Two geometry slips**: the `leaving phrase` chip floated 78px
   away from the crossing it labels, and the `no ack` path stopped
   10px short of the wake-lock track it joins, leaving a visible
   break in the only line carrying "no ack → self-terminate". Both
   closed.

The critic also verified, and I re-checked: D-073's Affects matches
the changed files exactly, zero mermaid blocks remain, all eight
viewBoxes are 740, every hex is a law colour, every font is
generic, no figure carries an external reference, and the section
headings are byte-identical.

## Where to look

- [the spec](../record/specs/atlas-figures.md) — the contract.
- [D-073](../record/DECISIONS.md#d-073--atlas-becomes-designed-figures)
  — the figure law and its rejected alternatives.
- [ATLAS](../ATLAS.md) — the gallery; [docs/atlas/](../atlas) — the
  eight figures.
- [the atlas-clean bench](../record/history/workshop/definition/atlas-clean.md)
  — the predecessor whose mechanics this supersedes.
