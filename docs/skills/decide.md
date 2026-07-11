---
type: skill-procedure
title: Decide
status: living
---
# Decide — the decision recorder

Scope: ROADMAP-LEVEL only — add, cut, reorder, pivot, pause, or any
standing product/workshop choice. Task-local calls (how to implement
within an open task's scope) are NOT decisions — they go in the
task's memory file. Runs UNASKED the moment the founder states or
confirms such a change; never leave a decision only in conversation.

## 1 · Number & entry
Read the last D-number in [DECISIONS.md](../DECISIONS.md); next = +1.
Append in exactly this format:

## D-0XX — YYYY-MM — <short title>
**Decision:** <what we chose, plain language>
**Why:** <the reasoning>
**Alternatives rejected:** <each, with why>
**Affects:** <markdown links to every file/section this changes —
or "record only">

## 2 · Ripple, same commit
Apply what the decision demands, in the SAME commit as the entry:
[FOUNDATION](../FOUNDATION.md) (identity) ·
[ROADMAP](../ROADMAP.md) (structure — reorder/add/cut; progress
ticks never need a D-number) · [docs/specs/](../specs/README.md)
(update or mark superseded any spec the pivot invalidates) ·
[PROJECT-POLICY](../PROJECT-POLICY.md) and
[DECISION-POLICY](../DECISION-POLICY.md) (whichever consolidates the
changed rule) · [IDEAS](../IDEAS.md) (spawned ideas). The Affects
line and the actual edits must match exactly.

## 3 · Weave
Every D-number, roadmap ID, fact ID, and doc mention in the entry is
a markdown link; anchors derived from the target file's actual
headings; link only targets that exist.

## 4 · Delivery
Invoked inside an open task: the entry rides that task's PR, and the
task's memory notes that the decision landed. Standalone: branch
docs/decision-d0xx, push, PR, plain-language summary, founder
approval. A decision is NEVER a micro-PR.
