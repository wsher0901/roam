---
type: skill-procedure
title: Recall
status: living
---
# Recall — the routing table's read mirror

Fires at Claude's own discretion: any founder question about what
this project has done, decided, discussed, shipped, paused, or
planned — regardless of phrasing — and any moment an answer is
about to come from conversational memory when a file could be
opened instead. When in doubt whether the corpus has it, check: a
ten-second grep beats a confident guess. Read-only, always: recall
opens files and answers; it never edits, commits, repaints, or
merges. NOT for new work requests (normal loop) or the mechanics of
files already open in the current task.

## 1 · Classify the question
One question may hit several classes; route each part.

| Class | Sounds like | Open, in order |
|---|---|---|
| Why / provenance | "why is X this way", "what did we decide about" | DECISIONS (title grep) → the consolidation carrying the rule (LAWS gloss · ENGINE · SETUP) → the quadrant story |
| Past work | "what happened with", "what was that task", "what issues did we hit" | the ledger (chronology) → the quadrant door per the legend → the story — its narrative, Pending issues, and dead ends — + its D + PR |
| Ongoing — status · pauses · issues | "status of", "where is X at", "why is it parked/blocked" | memory/<id>.md Status + Story + Pending issues → `gh pr view/checks` → the board's Sessions row · Needs-you |
| Future trajectory | "what's next", "when will", "where are we headed" | ROADMAP (ladder · stage/task lines) → ENGINE §12 Open register → SETUP §Staged → IDEAS |
| Term / mechanism | "what is a", "how does X work" | HOME (Terms · portraits · Reading the board · Where information goes) |
| World fact / vocab | "what's F-…/TP-…", "which source" | FACTS (incl. Appendix C) → SOURCES |

Sources:
[the routing table — HOME §Where information goes](../HOME.md#where-information-goes)
[the ledger](../history/README.md#the-ledger)
[the door legend](../history/README.md)

## 2 · Look it up — read, don't recall
Open the routed homes and take the answer FROM them. Quote
sparingly, always with the anchor. Counts, statuses, and lists are
computed from the files at answer time, never remembered
(derivation law). For anything live, git outranks the board: check
branches, PRs, and checks directly, and if the board disagrees, say
so plainly.

## 3 · Answer in the founder's shape
Plain sentences first — short, everyday words, the conclusion in
the first line. Then one Sources block (the writing laws' format):
every file, heading, D-number, story, and PR the answer stands on,
one deep link per line.

Example shape:
"We decided that in early July: handoff parks every local lane
automatically — no question asked — and liftoff is the only road to
the cloud. It shipped the same day you asked for it.
Sources:
[D-032](../DECISIONS.md#d-032--2026-07--fleet-continuity--handoff-parks-every-local-lane-liftoff-respawns-parked-benches-wake-lock-parks-every-outcome-extends-the-d-020d-023-lane-law-upholds-d-009)
[the story](../history/workshop/mechanism/fleet-continuity.md)"

## 4 · The honesty rails
- Not found → say exactly that: "not recorded", plus where it WOULD
  live per the routing table — never reconstruct from plausibility.
- Chats are disposable by law: recall retrieves what the rituals
  captured (memories, stories, D-entries, IDEAS). If something never
  left a conversation, the truthful answer is "not recorded" — and
  the fix belongs to handoff's harvest, not to recall.
- Frozen wording (DECISIONS entries, history/) is quoted as
  historical, even where later decisions superseded it — and the
  superseding D is cited alongside.
- Ambiguous question → answer the likeliest reading AND name the
  other doors checked.
- A question that turns into a work request leaves recall: route it
  to the normal loop (discussion → block → gate).
