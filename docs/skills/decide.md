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
Read the last D-number in [DECISIONS.md](../record/DECISIONS.md); next = +1.
Append in exactly this format:

## D-0XX — <short name, 8 words maximum>

In full: <the complete title or statement, however long>

**Decision:** <what we chose, plain language>
**Why:** <the reasoning>
**Alternatives rejected:** <each, with why>
**Affects:** <markdown links to every file/section this changes —
or "record only">

- THE HEADING IS THE ANCHOR, so it is short and it is FROZEN AT
  MINT — a short name is never edited afterwards
  ([D-068](../record/DECISIONS.md#d-068--the-short-anchor-law)).
  Anchors are quoted ambient-wide — laws, skills, stories, every
  frozen shelf — so their cost is paid on every read of every
  citing file, forever, and an edit breaks every citation at once.
- The `In full:` line is where the complete statement lives, and it
  may be as long as the decision needs; the date lives there too.
  Nothing is lost by the short heading — it moves one line down.
- Anchors are born resolving: run `npm run check:links` BEFORE the
  entry's first push — a D-number heading and every link to it must
  exist in the same commit.

## 2 · Ripple, same commit
Apply what the decision demands, in the SAME commit as the entry:
[FOUNDATION](../FOUNDATION.md) (identity) ·
[ROADMAP](../ROADMAP.md) (structure — reorder/add/cut; progress
ticks never need a D-number) · [LAWS](../LAWS.md) and
[HOME](../HOME.md) (when the decision changes a working rule or its
manual entry) · [docs/record/specs/](../record/specs/README.md)
(update or mark superseded any spec the pivot invalidates) ·
[ENGINE](../ENGINE.md) (when it consolidates the
changed rule) · [IDEAS](../IDEAS.md) (spawned ideas — each landing
per the entry contract at that file's head, one idea per line,
glyph first; an idea this decide CLOSES is compressed to one line
and moved to CLOSED, never deleted). NEW VOCABULARY MINTED → a
[HOME §Terms](../HOME.md#terms) row in the SAME PR: a word the
workshop starts using without a plain-language home is a word the
founder meets cold. The Affects line and the actual edits must
match exactly.

## 3 · Weave
Every D-number, roadmap ID, fact ID, and doc mention in the entry is
a markdown link; anchors derived from the target file's actual
headings; link only targets that exist.

ONE CARVE-OUT, and it is absolute: THE `In full:` LINE IS A
VERBATIM QUOTATION and the weave rule does not reach it. Plain
D-numbers inside it stay plain. A later reader who "repairs" one
is altering frozen text — the words in that line are the record
([D-068](../record/DECISIONS.md#d-068--the-short-anchor-law)).

## 4 · Delivery
Invoked inside an open task: the entry rides that task's PR, and the
task's memory notes that the decision landed. Standalone: branch
docs/decision-d0xx, push, PR, plain-language summary, founder
approval. A decision is NEVER a micro-PR.
