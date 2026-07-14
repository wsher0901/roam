---
type: memory
id: recall-skill
updated: 2026-07-14 · build complete · work PC
---
# recall-skill — Recall — the routing table's read mirror

## Status

complete, awaiting merge — the build landed on the work PC: the
recall procedure (byte-exact to the payload), its trigger stub, the
HOME skills line, and the governing
[D-039](../DECISIONS.md#d-039--2026-07--recall--questions-answered-from-files-never-from-memory-the-d-036-routing-tables-read-mirror-model-invoked-at-discretion)
entry + ripple, all in one commit. Ships to THE GATE; no merge —
founder approval follows external review.

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

Three judgment calls for the founder to eyeball at the gate — none
block, all recorded here so they are not invisible in the diff:

1. **Byte-exact payload vs the verification grep.** The kickoff's
   own verification greps recall.md for "git wins" and "own
   judgment", but the delimited payload (which the kickoff says to
   reproduce EXACTLY) uses "git outranks the board" and "own
   discretion". Byte-exactness of the payload is the primary
   Done-means, so the payload was kept verbatim; the two grep terms
   are present in concept, not as literal strings. "read mirror" and
   "not recorded" — the other two grep terms — are literal matches.
2. **HOME skills line — house-style adaptation.** The kickoff wrote
   the new HOME line as a bulleted `- **recall** — …` item, but
   HOME's actual skills enumeration (§Equipment & environment) is an
   inline `·`-separated sentence, not a bulleted list. The recall
   entry was written in that real house style (a fragment in the
   sentence + a Sources link), preserving the kickoff's content
   (past/ongoing/future · from the files with receipts · never from
   memory · own judgment).
3. **Stub allowed-tools vs the procedure.** RESOLVED at the gate.
   The stub's allowed-tools follow the kickoff's explicit list —
   Read · Grep · Glob · git log/show · gh pr view/list — and, on the
   founder's word, also `gh pr checks`, which the procedure's §1
   Ongoing row needs. All read-only; no write, no merge.

## Left / idle

Only the merge word. Nothing parked.

## The story

Born this session from the kickoff. Writes were routed by
[D-036](../DECISIONS.md#d-036--2026-07--information-routing--one-home-per-class-append-vs-upsert-home-carries-the-table-sessions-anchor-stabilized);
reads never were, so an already-answered question could be asked
three times in a day with the corpus holding the answer the whole
time. Recall closes that gap on the read side without touching the
write side: it classifies a question into the routing table's classes,
opens the routed homes, and answers sentence-first with a
[D-029](../DECISIONS.md#d-029--2026-07--corpus-writing-laws--readability-first-links-below-prose)
Sources block — and when the corpus is silent, it says "not recorded"
plus where the fact would live, never an invention.

Bench-first birth (branch → spec + memory stub → draft PR #123) went
first; then the decide entry and its whole ripple landed in one
commit, so the D-039 heading and every inbound link to it are born
resolving (D-038). The three judgment calls above are the only
deviations from the letter of the kickoff; each preserves the
kickoff's intent.

## Where to look

Spec: [recall-skill](../specs/recall-skill.md) · the procedure:
[recall](../skills/recall.md) · decision:
[D-039](../DECISIONS.md#d-039--2026-07--recall--questions-answered-from-files-never-from-memory-the-d-036-routing-tables-read-mirror-model-invoked-at-discretion)
· the mirror source:
[D-036](../DECISIONS.md#d-036--2026-07--information-routing--one-home-per-class-append-vs-upsert-home-carries-the-table-sessions-anchor-stabilized)
· PR [#123](https://github.com/wsher0901/roam/pull/123).
