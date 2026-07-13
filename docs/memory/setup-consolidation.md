---
type: memory
id: setup-consolidation
updated: 2026-07-13 · ship (to the gate) · work PC
---
# setup-consolidation — Setup consolidation: SETUP.md born; equipment-plan and PROJECT-POLICY retired; the writing laws adopted

## Status
Complete, awaiting merge — held at THE GATE by the brief's explicit
"DO NOT MERGE; founder approval follows external review". All
verification green: 1155 links / 0 broken, zero link targets to
either retired file, both files + the stub folder gone,
settings.json untouched, lint + tests + format clean. Both
decisions landed with their full ripple in one commit: D-029 (the
corpus writing laws) and D-030 (the setup consolidation). Queued
for ship's tail, post-merge: the reviewer-subagent Needs-you line
on the board.

Sources:
[spec](../specs/setup-consolidation.md)
[D-029](../DECISIONS.md#d-029--2026-07--corpus-writing-laws--readability-first-links-below-prose)
[D-030](../DECISIONS.md#d-030--2026-07--setup-consolidation--setupmd-equipment-plan-and-project-policy-retired-extends-d-024s-retirement-pattern-amends-the-d-021-consolidation-split)

## What this task is
One listing-style inventory file — SETUP.md — is born, holding the
stack, once-and-done repo-side and cloud configuration, the
per-machine column, and stage-gated tooling. The two files it
obsoletes retire with full succession: the equipment-plan skill
(content re-homed to SETUP §Staged and DESIGN-KICKOFF) and
PROJECT-POLICY (Stack to SETUP; the stubs rule to LAWS; whys already
in LAWS' glosses and HOME). Two corpus writing laws land as the
first of the pair of decisions: readability-first, and
links-below-prose with a Sources-block format.

## Pending issues
none

## Left / idle
Only the weld (on approval), then ship's tail adds the queued
reviewer-subagent line to the board's Needs-you.

## The story
Born from a founder-delivered workshop brief (Web chat): SETUP.md
payload verbatim, named edits enumerated, succession ripple derived
by grep at execution. Two decisions ride this PR, computed from the
DECISIONS tail (D-028 was last): D-029, the writing laws; D-030,
the setup consolidation.

Execution notes and judgment calls, in order:
- git rm initially refused both retiring files — Obsidian's
  zero-content CRLF phantoms counted as "local modifications".
  Verified the diffs were empty (0 lines) before forcing with -f;
  nothing was lost.
- DASHBOARD needed ZERO repairs: its two grep hits were the D-028
  anchor slug (contains "project-policy" as part of the heading
  slug) and a Shipped-table row title — historical prose, not link
  targets. The sanctioned-mechanical-repair allowance went unused.
- The D-029 entry reproduces the Sources-block format as a literal
  example; it sits inside a code fence so the link checker does not
  try to resolve the label/target placeholders. (This memory's
  first draft quoted the placeholder inline and broke check-links —
  the fence is not optional.)
- LAWS' "Standing choices" bullet had named PROJECT-POLICY as the
  workshop-whys home; reworded to point at the laws' own glosses,
  HOME, and DECISIONS — per D-030's re-homing, not new semantics.
- HOME's intro counted "four documents governing the workshop";
  recounted to three (LAWS · ENGINE · DECISIONS) with
  PROJECT-POLICY gone.
- The SETUP portrait was added verbatim as given, including its
  "### SETUP" heading — the only heading-styled portrait; the
  other portraits are bold-name paragraphs. Followed the brief
  literally.
- HOME lacked the exploratory-subagents vs [P]-lanes distinction;
  added one term entry under **lane**, per the brief's
  "add one line if missing".
- Two history files mention the equipment plan in prose with no
  link (parallel-lanes-native, subagent-plan) — left untouched,
  frozen prose keeps historical names.

## Where to look
- spec: [../specs/setup-consolidation.md](../specs/setup-consolidation.md)
- the workshop brief (Web chat) — payload + operations + entry seeds
- PR: opens at birth (draft)
