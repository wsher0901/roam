---
type: spec
id: restyle-sweep
title: Leg-end restyle sweep — D-029 finishes its migration
status: open
stage: workshop
branch: docs/restyle-sweep
opened: 2026-07-14
---

# restyle-sweep — leg-end restyle sweep: D-029 finishes its migration

**Links:**
[LAWS](../LAWS.md) ·
[HOME](../HOME.md) ·
[FOUNDATION](../FOUNDATION.md) ·
[ROADMAP](../ROADMAP.md) ·
[DESIGN-KICKOFF](../DESIGN-KICKOFF.md) ·
[parallel-lanes](../skills/parallel-lanes.md) ·
Decisions:
[D-029](../DECISIONS.md#d-029--2026-07--corpus-writing-laws--readability-first-links-below-prose)

## Goal

Every living doc the ops leg did not already restyle conforms to the
writing laws — readability-first, links below prose in a Sources
block. Zero meaning changes anywhere. This finishes D-029's ratchet:
the leg-end sweep restyles every file the leg didn't touch.

## Content-immutable

The diff may only relocate links into Sources blocks, rewrap lines,
and fix the one HOME rendering nit. No wording changes. External
review word-diffs sampled sections against main; any semantic drift
fails the gate.

## Out of scope

- Frozen classes — history/**, DECISIONS entries, finalized specs.
- Ritual-written surfaces — DASHBOARD, IDEAS.
- The five ritual skill files (ship · handoff · pickup · decide ·
  liftoff) — already conformant from their own PRs.
- SETUP and ENGINE — born native.
- CLAUDE.md · WEB-INSTRUCTIONS (a paste artifact) · memory/TEMPLATE.
- DECISIONS is not touched — this task decides nothing new.

## Plan — the sweep list, file by file

1. HOME — convert every narrative paragraph and portrait to
   links-below. Keep inline: all tables (file · routing · start-here)
   · Terms definition lines · the "->" receipt-style lines. Fix the
   routing-table nit: the raw SOURCES-family cell token becomes
   backticked code so the angle brackets survive GitHub.
2. DESIGN-KICKOFF — full conversion of the working rules; the fenced
   preamble block is a paste artifact and stays byte-untouched.
3. parallel-lanes — full conversion (its content shipped in D-032;
   its form never migrated).
4. FOUNDATION — convert its few inline references (principles, spine)
   to Sources blocks per section.
5. ROADMAP — convert the V1 intro paragraphs' inline links (check
   families · reliability law) to one Sources block under the block.
   Task-line trailing "->" refs and all stage-line links are
   sanctioned inline and untouched. Checkbox state untouched.
6. LAWS — rewrap the two over-length lane-law lines (introduced by
   D-032's surgical edit) to house width; no other change.

## Done means

- [ ] The sweep list fully applied
- [ ] Zero inline links remain in the converted files' narrative
      prose outside the sanctioned classes
- [ ] git diff --stat shows exactly the eight files (the six above +
      this spec + the memory)
- [ ] Per-file `git diff --word-diff origin/main` shows only link
      relocation and rewrapping — spot-stated in the PR summary
- [ ] ROADMAP checkbox count identical to main
- [ ] Full CI mirror green (lint · format:check · check:links ·
      tests · build)
- [ ] `gh pr checks` green before the gate

## Open questions

None new — this is task-local, executing D-029's ratchet. Two
reading calls (LAWS command-class · HOME Terms glossary-class) are
recorded in the task memory.
