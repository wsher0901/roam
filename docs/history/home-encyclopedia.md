---
type: history
slug: home-encyclopedia
shipped: 2026-07-11
pr: 76
---
# home-encyclopedia — HOME v3: the encyclopedia

## Status
Shipped — merged as
[PR #76](https://github.com/wsher0901/roam/pull/76) after the
founder's approval followed the external Web-chat review, exactly
as the brief ordered.

## What this task is
Phase 4 of the ops thread: rewrite [HOME.md](../HOME.md) as Roam's
manual and encyclopedia — a stranger gains a real grasp of the
project from this one file, and the founder finds any "why does it
behave this way" answer within one hop. Nine bound sections: header,
question router, daily loop, file guide, mechanisms (the core —
task anatomy, information relay & retention, rituals, baton, lanes,
micro-PRs, the board, skills), recut terms, data-file guide,
equipment, roadmap manual. Ripples in the same PR:
[FACTS](../data/FACTS.md) / [SOURCES](../data/SOURCES.md) /
[specs README](../specs/README.md) shrank their explainers to
pointers, and GLOSSARY was absorbed into
[HOME §Terms](../HOME.md#terms) and deleted, with every corpus link
repointed. No spec file — the founder's brief is the contract,
verbatim in the PR description.

## Pending issues
None blocking. One thought left for triage: the link-integrity
check was run with a throwaway script (a GitHub-slugger
reimplementation in the session scratchpad, validated with a
planted-breakage negative control); a permanent in-repo checker
wired into CI would make the retroactivity law's link gates
mechanical instead of per-task tooling.

## Left / idle
Nothing — the weld that landed this file was the last act
(slug-keyed, no [ROADMAP](../ROADMAP.md) tick, per the workshop-slug
rule).

## The story
Born from the founder's phase-4 brief, pasted into the cockpit
after the [engine swap](../history/engine-swap.md) shipped — the
same ops thread as the
[recut](../history/foundation-roadmap-recut.md). The whole corpus
was read first (every docs/ file, all stubs and hooks, the recent
history/ entries), then HOME v3 was written in one commit and the
absorption sweep in a second.

Decisions a future reader should know:
- **[FACTS](../data/FACTS.md) kept its "How to read this file"
  heading**, now holding only the one-line manual pointer. The
  brief said "replace the section with one line"; keeping the
  heading preserved every inbound `#how-to-read-this-file` anchor
  (SCHEMA, DECISION-POLICY) with zero archive edits.
- **GLOSSARY links in the archive were repointed, not annotated.**
  First attempt added "(since absorbed into HOME §Terms)"
  parentheticals inside [DECISIONS](../DECISIONS.md) entries — a
  dead end, reverted: the log is append-only and the words of an
  entry shouldn't grow after the fact. Final form keeps the
  original link text verbatim and moves only the target to
  [HOME §Terms](../HOME.md#terms), matching how the corpus already
  treats renamed anchors (the #57/#58 retro-weave precedent) and
  keeping 100% link integrity.
- **HOME's `#roadmap-manual` anchor survives verbatim** so
  [ROADMAP](../ROADMAP.md), [DECISIONS](../DECISIONS.md) D-022,
  [PROJECT-POLICY](../SETUP.md), and a history file link
  into it unchanged; the retired `#file-ownership` anchor's two
  inbound pointers ([memory/README](../memory/README.md),
  [history/README](README.md)) were rippled to
  `#the-files--what-each-one-is-for`.
- **The brief's "maiden-run prune story from history/"** does not
  exist as a history file — the episode happened in this morning's
  cockpit (the board listed already-merged branches that were
  phantom stale remote-tracking refs; a fetch-with-prune and a
  repaint healed it, logged in [IDEAS](../IDEAS.md)). §Information
  relay & retention tells it as prose without a link, since IDEAS
  lines are a volatile target.

Gotcha for the toolbox: the first link-checker run reported ~500
false breaks — the working tree is CRLF (autocrlf) and JavaScript's
`.` and `$` don't span `\r`, so every heading regex silently
failed. Normalizing line endings at read time fixed it; a planted
broken link then proved the checker really catches breakage.

Verification, all green: 904 internal links across 76 md files, 0
broken · GLOSSARY absent with references remaining only in the
[DECISIONS](../DECISIONS.md) archive and history bodies ·
FACTS/SOURCES/specs-README carry pointers with no orphaned
explainer prose · HOME frontmatter valid · newcomer self-check
passed on sampled sentences from ROADMAP, LAWS, DASHBOARD, FACTS,
and parallel-lanes · tests 3/3 · eslint · prettier.

## Where to look
[PR #76](https://github.com/wsher0901/roam/pull/76) (contract,
summary, Deviations) · [HOME.md](../HOME.md) v3 itself · GLOSSARY
and HOME v2 in git history · the ops Web chat (phases 1–3 context;
the external review that gated the merge) ·
[engine-swap](engine-swap.md) and
[knowledge-layer](knowledge-layer.md) for the backstories.
