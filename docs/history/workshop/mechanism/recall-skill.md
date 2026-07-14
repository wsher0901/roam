---
type: history
slug: recall-skill
shipped: 2026-07-14 14:50
pr: 123
---
# recall-skill — Recall — the routing table's read mirror

## Status

Shipped — merged as
[PR #123](https://github.com/wsher0901/roam/pull/123) on the founder's
word after external review, with one amendment made at the gate:
`gh pr checks` added to the stub's read-only allowed-tools (the
procedure's §1 needs it). Every gate on the way out waited on the
pushed commit's Actions run going green
([D-038](../../../DECISIONS.md#d-038--2026-07--ci-is-the-arbiter--actions-green-required-at-every-gate-local-gate-mirrors-all-six-ci-steps-d-anchors-born-resolving-upholds-d-027)).

## What this task is

A seventh, read-only skill: recall. It answers any founder question
about past, ongoing, or future work FROM the corpus — classified,
looked up, and quoted with receipts — instead of from a session's
conversational memory, and it fires on Claude's own judgment with no
keyword gate. It is the read mirror of
[D-036](../../../DECISIONS.md#d-036--2026-07--information-routing--one-home-per-class-append-vs-upsert-home-carries-the-table-sessions-anchor-stabilized)'s
routing table (which governed writes only): recall adds no homes, it
just reads the ones already routed. It never edits anything. Recorded
as
[D-039](../../../DECISIONS.md#d-039--2026-07--recall--questions-answered-from-files-never-from-memory-the-d-036-routing-tables-read-mirror-model-invoked-at-discretion).

## Pending issues

none.

## Left / idle

Nothing parked.

## The story

Born this session from the kickoff. Writes were routed by
[D-036](../../../DECISIONS.md#d-036--2026-07--information-routing--one-home-per-class-append-vs-upsert-home-carries-the-table-sessions-anchor-stabilized);
reads never were, so an already-answered question could be asked
three times in a day with the corpus holding the answer the whole
time. Recall closes that gap on the read side without touching the
write side: it classifies a question into the routing table's
classes, opens the routed homes, and answers sentence-first with a
[D-029](../../../DECISIONS.md#d-029--2026-07--corpus-writing-laws--readability-first-links-below-prose)
Sources block — and when the corpus is silent, it says "not recorded"
plus where the fact would live, never an invention.

The build shipped as one decide commit (entry + full ripple), so the
D-039 heading and every inbound link to it were born resolving
([D-038](../../../DECISIONS.md#d-038--2026-07--ci-is-the-arbiter--actions-green-required-at-every-gate-local-gate-mirrors-all-six-ci-steps-d-anchors-born-resolving-upholds-d-027));
the bench (branch, spec, memory stub, draft PR #123) came first.

Three judgment calls surfaced at the gate, each preserving the
kickoff's intent rather than its letter:

1. The kickoff's own verification greps recall.md for "git wins" and
   "own judgment", but the delimited payload — which the kickoff says
   to reproduce EXACTLY, the primary Done-means — uses "git outranks
   the board" and "own discretion". The payload was kept verbatim, so
   those two terms are present in concept, not as literal strings
   ("read mirror" and "not recorded" are literal matches). Byte-
   exactness won over the grep's wording.
2. The kickoff wrote the HOME skills line as a bulleted item, but
   HOME's real skills enumeration (§Equipment & environment) is one
   inline ·-separated sentence. Recall was added in that house style —
   a fragment plus a Sources link — keeping the kickoff's content
   (past/ongoing/future · from the files with receipts · never from
   memory · own judgment).
3. The stub's read-only allowed-tools followed the kickoff's explicit
   list (Read · Grep · Glob · git log/show · gh pr view/list). At the
   gate the founder added `gh pr checks`, which §1's Ongoing row
   needs — still read-only, still no write, no merge.

## Where to look

Spec: [recall-skill](../../../specs/recall-skill.md) · the procedure:
[recall](../../../skills/recall.md) · the trigger stub:
.claude/skills/recall/SKILL.md · decision:
[D-039](../../../DECISIONS.md#d-039--2026-07--recall--questions-answered-from-files-never-from-memory-the-d-036-routing-tables-read-mirror-model-invoked-at-discretion)
· the mirror source:
[D-036](../../../DECISIONS.md#d-036--2026-07--information-routing--one-home-per-class-append-vs-upsert-home-carries-the-table-sessions-anchor-stabilized)
· PR [#123](https://github.com/wsher0901/roam/pull/123).
