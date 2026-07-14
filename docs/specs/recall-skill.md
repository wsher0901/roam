---
type: spec
id: recall-skill
title: Recall — the routing table's read mirror
status: open
stage: workshop
branch: docs/recall-skill
pr: 123
opened: 2026-07-14
shipped: —
---
# recall-skill — Recall — the routing table's read mirror

**Links:**
[HOME](../HOME.md) ·
[decide](../skills/decide.md) ·
Decisions:
[D-039 — this task's decision](../DECISIONS.md#d-039--2026-07--recall--questions-answered-from-files-never-from-memory-the-d-036-routing-tables-read-mirror-model-invoked-at-discretion)
·
[D-036 — the routing table this mirrors](../DECISIONS.md#d-036--2026-07--information-routing--one-home-per-class-append-vs-upsert-home-carries-the-table-sessions-anchor-stabilized)

## Goal

Any founder question about past, ongoing, or future work is answered
from the corpus itself — classified, looked up, and quoted with
receipts — never from a session's conversational memory. Claude fires
recall on its own judgment; no magic keywords are required. Recall is
read-only: it edits nothing, ever.

## Out of scope

- Any write path — recall never edits, commits, repaints, or merges.
- Any board or ritual change.
- New routing: recall MIRRORS the
  [D-036](../DECISIONS.md#d-036--2026-07--information-routing--one-home-per-class-append-vs-upsert-home-carries-the-table-sessions-anchor-stabilized)
  routing table for reads; it adds no homes.

## Plan

1. Bench birth: branch docs/recall-skill → this spec + memory stub →
   draft PR (this step).
2. Run [decide](../skills/decide.md): the next D-number entry + its
   ripple in the same commit —
   - the recall procedure page (docs/skills/recall.md), byte-exact to
     the payload;
   - its trigger stub (.claude/skills/recall/SKILL.md) — thin,
     situation-first description, read-only allowed-tools (no write,
     no merge);
   - [HOME](../HOME.md) §Equipment — the skills enumeration gains
     recall, with a Sources link.
3. Verify (below) · [ship](../skills/ship.md) to THE GATE — no merge;
   founder approval follows external review.

## Done means

- [x] docs/skills/recall.md byte-matches the payload.
- [x] The stub's description is situation-first, carries the do-NOT
      clause, and its allowed-tools are read-only (no write, no
      merge).
- [x] HOME's skills line gains recall.
- [x] check-links green (1462 links, 0 broken).
- [x] The full local CI mirror green (lint · format:check ·
      check:links · tests · build) and `gh pr checks` green (job
      `checks`, 38s) before the gate.

## Deviations

Three, each preserving the kickoff's intent — see the memory's
Pending issues for the full reasoning:

1. The kickoff's verification greps recall.md for "git wins" and
   "own judgment"; the delimited payload (reproduced EXACTLY) uses
   "git outranks the board" and "own discretion". Byte-exactness of
   the payload was the primary Done-means, so it was kept verbatim.
   "read mirror" and "not recorded" are literal matches.
2. The kickoff gave the HOME line as a bulleted item; HOME's real
   skills enumeration is an inline `·`-separated sentence, so recall
   was added in that house style (fragment + Sources link).
3. The stub's read-only allowed-tools follow the kickoff's explicit
   list (Read · Grep · Glob · git log/show · gh pr view/list). The
   procedure §1 also references `gh pr checks`, which was not added;
   the founder can add `Bash(gh pr checks:*)` if a prompt-free run
   is wanted.

## Open questions

none
