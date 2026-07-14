---
type: memory
id: telemetry-fold
updated: 2026-07-13 · ship (completion rewrite) · home PC
---
# telemetry-fold — TELEMETRY folds into FACTS: Appendix C; file retired

## Status
Complete, awaiting merge — every Done-means box verified green on
2026-07-13; PR
[#106](https://github.com/wsher0901/roam/pull/106) flipped ready.
By brief, the merge waits for founder approval AFTER external
review.

## What this task is
A move-only consolidation: [FACTS](../data/FACTS.md) gained
Appendix C — Telemetry vocabulary (what the app records) — holding
TELEMETRY's three families and storage note verbatim (headings
demoted to C1–C4, body byte-faithful); data/TELEMETRY.md retired;
data/ tightened to FACTS · SOURCES · SCHEMA. Recorded as
[D-033](../DECISIONS.md#d-033--2026-07--telemetry-folds-into-facts-appendix-c-file-retired-upholds-d-014-extends-the-d-030-retirement-pattern).

## Pending issues
none

## Left / idle
Only the weld: founder approval (after external review) → atomic
bookkeeping commit → squash-merge. The brief also names history/
link style as the NEXT task's territory — nothing of it was touched
here beyond the two sanctioned frozen-link retargets.

## The story
Born from the Web-chat ops leg. The standalone file confused its
own author ("not sure what this is for"); the founder's FACTS
charter describes the telemetry vocabulary exactly, and FACTS
already hosts non-world vocabularies (Appendices A and B). The move
was done mechanically, not by retyping: a script extracted
TELEMETRY's content below the H1 and appended it under the new
Appendix C heading, so byte-fidelity is by construction — a diff
against the original shows exactly four changed lines, the renamed
headings, and nothing else. The H1's parenthetical provenance line
(V1.S1.T1 review; D-014, D-015) moved with the content and sits
directly under the Appendix C heading, so the added "see the
D-number above" pointer resolves. The ripple split by temperature:
living docs ([ENGINE](../ENGINE.md) §10 rule + two Sources blocks,
[ROADMAP](../ROADMAP.md) T7/S3.T7/V2 lines, [HOME](../HOME.md) file
table + data/ paragraph + three manual links — including the
"four documents" count, re-derived to three — and
[SCHEMA](../data/SCHEMA.md)'s single link) were reworded to name
FACTS Appendix C; frozen records (the
[D-014](../DECISIONS.md#d-014--2026-06--telemetry-posture-capture-now-use-later)
entry's two links,
[telemetry-inventory](../history/telemetry-inventory.md)'s one)
kept their historical prose and only retargeted destinations.
Plain-text historical mentions (history/engine-recut, the shipped
engine-recut spec) were left untouched — no link, no repair needed.
No deviations from the brief.

## Where to look
Spec: [telemetry-fold](../specs/telemetry-fold.md) · decision:
[D-033](../DECISIONS.md#d-033--2026-07--telemetry-folds-into-facts-appendix-c-file-retired-upholds-d-014-extends-the-d-030-retirement-pattern)
· PR [#106](https://github.com/wsher0901/roam/pull/106) · the new
home:
[FACTS Appendix C](../data/FACTS.md#appendix-c--telemetry-vocabulary-what-the-app-records).
