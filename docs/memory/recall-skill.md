---
type: memory
id: recall-skill
updated: 2026-07-14 · birth · work PC
---
# recall-skill — Recall — the routing table's read mirror

## Status

bench ready — born on the work PC: branch, spec, and this stub on
origin, draft PR next. About to run [decide](../skills/decide.md) for
the D-number and lay the skill in the same commit.

## What this task is

A seventh, read-only skill: recall. It answers any founder question
about past, ongoing, or future work FROM the corpus — classified,
looked up, and quoted with receipts — instead of from a session's
conversational memory, and it fires on Claude's own judgment with no
keyword gate. It is the read mirror of
[D-036](../DECISIONS.md#d-036--2026-07--information-routing--one-home-per-class-append-vs-upsert-home-carries-the-table-sessions-anchor-stabilized)'s
routing table (which governed writes only): recall adds no homes, it
just reads the ones already routed. It never edits anything.

## Pending issues

none.

## Left / idle

The whole build: the decide entry + its ripple (the recall procedure
page byte-exact to the payload, its trigger stub, the HOME skills
line), verification, and ship to the gate. Nothing parked.

## The story

Born this session from the kickoff. Writes were routed by
[D-036](../DECISIONS.md#d-036--2026-07--information-routing--one-home-per-class-append-vs-upsert-home-carries-the-table-sessions-anchor-stabilized);
reads never were, so an already-answered question could be asked
three times in a day with the corpus holding the answer the whole
time. Recall closes that gap on the read side without touching the
write side.

## Where to look

Spec: [recall-skill](../specs/recall-skill.md) · the mirror source:
[D-036](../DECISIONS.md#d-036--2026-07--information-routing--one-home-per-class-append-vs-upsert-home-carries-the-table-sessions-anchor-stabilized)
· the writing-laws Sources format recall answers in:
[D-029](../DECISIONS.md#d-029--2026-07--corpus-writing-laws--readability-first-links-below-prose).
