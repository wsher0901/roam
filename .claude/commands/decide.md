---
description: Record a decision — append the next D-number to
  docs/DECISIONS.md with rationale and an Affects line, and apply the
  ripple edits to every affected doc in the same commit. Never leave
  a decision only in conversation.
---
# /decide — the decision recorder

Input: the decision text (from the founder or a paste block).

## Step 1 — number & entry
Read the last D-number; next = +1. Append in exactly this format:

## D-0XX — YYYY-MM — <short title>
**Decision:** <what we chose, plain language>
**Why:** <the reasoning>
**Alternatives rejected:** <each, with why>
**Affects:** <markdown links to every file/section this changes —
or "record only">

## Step 2 — ripple, same commit
Apply what the decision demands: docs/FOUNDATION.md (scope,
principles) · docs/ROADMAP.md (structure — reorder/add/cut; progress
ticks never need a D-number) · docs/specs/* (update or mark
superseded any spec the pivot invalidates) · docs/IDEAS.md (spawned
ideas). The Affects line and the actual edits must match exactly.

## Step 3 — weave
Every D-number, roadmap ID, fact ID, and doc mention in the entry is
a markdown link; heading anchors derived from the file's actual
headings; link only targets that exist.

## Step 4 — delivery
Invoked inside an open task branch or paste block: the entry rides
that PR. Standalone: branch docs/decision-d0XX, push, PR,
plain-language summary, founder approval. Decisions are never
micro-PRs.
