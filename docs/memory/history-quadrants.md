---
type: memory
id: history-quadrants
updated: 2026-07-13 · ship (completion rewrite) · home PC
---
# history-quadrants — History organizes by issue-door quadrants; TEMPLATE owns the memory format and Status vocabulary

## Status
Complete, awaiting merge — every Done-means box verified green on
2026-07-13; PR
[#108](https://github.com/wsher0901/roam/pull/108) flipped ready.
By brief, the merge waits for founder approval AFTER external
review.

## What this task is
Give every future issue exactly one door: the 50 flat history
stories moved into the founder's 2×2 —
history/product/definition (11) · history/product/build (3) ·
history/workshop/definition (17) · history/workshop/mechanism
(19) — with a [README legend](../history/README.md) the weld reads
at move time (IS vs DOES picks the column, Roam-facing vs
builder-facing picks the row; ties → workshop/definition). The
memory [TEMPLATE](TEMPLATE.md) became the single owner of the
locked format and the post-D-032 Status vocabulary the wake-lock
reads; [ship](../skills/ship.md) §4/§7 and
[handoff](../skills/handoff.md) §3/§4 now point at TEMPLATE instead
of re-enumerating. Recorded as
[D-034](../DECISIONS.md#d-034--2026-07--history-quadrants--productworkshop--definitionimplementation-memory-template-owns-format--status-vocabulary-extends-d-024s-narrative-layer-and-d-032s-states).

## Pending issues
none

## Left / idle
Only the weld: founder approval (after external review) → atomic
bookkeeping commit → squash-merge.

## The story
Born from the Web-chat ops leg — the history/ brief telemetry-fold
named "next". The moves were not hand-edited: a resolver script
walked every markdown file in the repo, resolved each relative link
against its file's OLD location, then re-derived it from the NEW
location (using each target's new home when the target itself
moved) — 238 links across 49 files, so misses are structurally
impossible rather than hand-checked; check-links (1268/0) confirms.
Three notes the brief asked for or a reader needs:
- **DASHBOARD Shipped rows** were mechanically repaired to quadrant
  paths — the brief's sanctioned exception to "only rituals write
  the board"; ten row links changed, nothing else on the board.
- **The verification grep's sole survivors** are links to
  history/README.md itself: the legend stays at the history root by
  design, and its name matches the flat pattern. Zero story links
  remain — the Done-means' intent.
- **HOME needed no ripple**: all eight of its history links already
  pointed at the README, so the brief's "HOME hits: living-class"
  clause had nothing to bite on.
Seven of the fifty stories (blueprint-audit-fixes,
cloud-lane-dashboard-erratum, context-engine-v2, machine-labels,
ritual-engine-v2, subagent-plan, tooling-scope) contained no
relative links at all and moved unchanged — verified, not assumed.
No deviations from the brief.

## Where to look
Spec: [history-quadrants](../specs/history-quadrants.md) ·
decision:
[D-034](../DECISIONS.md#d-034--2026-07--history-quadrants--productworkshop--definitionimplementation-memory-template-owns-format--status-vocabulary-extends-d-024s-narrative-layer-and-d-032s-states)
· PR [#108](https://github.com/wsher0901/roam/pull/108) · legend:
[history/README](../history/README.md) · vocabulary:
[TEMPLATE §Status vocabulary](TEMPLATE.md#status-vocabulary).
