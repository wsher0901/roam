---
type: glossary
title: Glossary
status: living
---
# Glossary

The newcomer test: a stranger reading only this file must be able to
decode any sentence in this repo. Each term gets 1–2 plain-English
lines and a link to its home document — follow the link for the full
story.

## Naming & structure

- **Vn.Sm.Tk (the ID system)** — Version → Stage → Task; the one
  official way to name work (V1.S3.T1 = Version 1, Stage 3, Task 1).
  Home: [HOME.md §Roadmap manual](HOME.md#roadmap-manual).
- **version / stage / task** — a version is an outcome milestone (the
  ladder lives in [ROADMAP §The versions](ROADMAP.md#the-versions));
  a stage is an ordered slice of it with a done-criterion; a task is
  the PR-sized unit (one task = one branch = one PR).
  Home: [HOME.md §Roadmap manual](HOME.md#roadmap-manual).
- **[P] / [seq]** — task tags: [P] = parallel-safe (touches files no
  sibling task touches); [seq] = must follow its dependency.
  Home: [HOME.md §Roadmap manual](HOME.md#roadmap-manual).
- **rolling wave** — planning depth law: the active version fully
  staged and tasked, the next a rough bucket, the one after name-only,
  sockets pooled unversioned
  ([D-004](DECISIONS.md#d-004--2026-06--planning-notation--rolling-wave-depth),
  amended by
  [D-022](DECISIONS.md#d-022--2026-07--version-ladder--lifespan-split-amends-d-004)).
  Home: [HOME.md §Roadmap manual](HOME.md#roadmap-manual).
- **spec** — a per-task detail sheet under a ROADMAP line, born only
  when a task needs discussion. Home: [specs/README.md](specs/README.md).
- **frontmatter** — the YAML block (type / title / status) at the top
  of every doc; renders as a table on GitHub and as Properties in
  Obsidian. Template: [specs/TEMPLATE.md](specs/TEMPLATE.md).
- **weave rule** — every mention of a roadmap ID, D-number, fact ID,
  or sibling doc in docs/ is written as a markdown link, never plain
  text. Home: [CLAUDE.md](../CLAUDE.md).
- **retroactivity law** — when a new documentation practice is
  adopted, it is applied to all pre-existing files in the same PR —
  old files are never second-class. Home: [CLAUDE.md](../CLAUDE.md).
- **fact families (F-WX, F-SS, F-FE, F-TT, F-CC)** — the five groups
  of world facts the engine checks: [Weather](data/FACTS.md#f-wx--weather-14--source-task-v1s1t2),
  [Sky & sea](data/FACTS.md#f-ss--sky--sea-10--source-task-v1s1t3),
  [Feasibility](data/FACTS.md#f-fe--feasibility-14--source-task-v1s1t4),
  [Time & transport](data/FACTS.md#f-tt--time--transport-8--source-task-v1s1t5),
  [Crowds & calendar](data/FACTS.md#f-cc--crowds--calendar-8--source-task-v1s1t6).
- **TP parameters (TP-01..47)** — everything a traveler may TELL the
  engine; all optional, all defaulting to Null.
  Home: [FACTS.md Appendix A](data/FACTS.md#appendix-a--traveler-parameters-tp-0147--per-d-011--d-012).
- **source slot** — the join key between a fact and its vetted
  source: every fact names one slot; one SOURCES.md entry exists per
  slot. Home: [FACTS.md](data/FACTS.md#how-to-read-this-file).
- **Dictionary (of a fact)** — the exact payload keys a vetted source
  must supply for that fact; doubles as the schema-drift contract.
  Home: [FACTS.md](data/FACTS.md#how-to-read-this-file).
- **grades A–D** — source reliability grades: A = authoritative or
  model-grade, renders verified · B = authoritative where covered ·
  C = estimated/derived, renders as labeled estimate · D =
  LLM-research grade, always renders unverified.
  Home: [SOURCES.md](data/SOURCES.md).
- **socket** — a named future capability deliberately excluded from
  V1 but designed to plug in later without a rewrite.
  Home: [ROADMAP.md §Pool](ROADMAP.md#pool--unversioned-sockets).
- **D-number** — one permanently recorded decision (D-001, D-002, …)
  with rationale and rejected alternatives.
  Home: [DECISIONS.md](DECISIONS.md).

## Workflow & rituals

- **the four rituals** — /pickup (sit-down briefing), /handoff
  (stand-up note shipped to main), /ship (task close: tests → PR →
  founder approval → merge → bookkeeping), /decide (record a decision
  and ripple its edits). They live in `.claude/commands/`; the laws
  behind them in [CLAUDE.md](../CLAUDE.md).
- **cockpit session** — the Claude Code session the founder is
  actively driving; the ONLY writer of [HANDOFF.md](HANDOFF.md).
  Home: [CLAUDE.md](../CLAUDE.md).
- **lane** — one parallel work stream: a background agent or worktree
  session on its own branch, draft PR from birth, every commit pushed
  ([D-020](DECISIONS.md#d-020--2026-07--parallel-lanes-v2-native-lanes-replace-hand-built-orchestration)).
  Home: [CLAUDE.md](../CLAUDE.md) § Parallel lanes.
- **paste block** — the single copy-paste artifact a Claude Web chat
  produces when its discussion changed something; it counts as
  delivered only when its branch/PR exists on GitHub.
  Home: [HOME.md](HOME.md).
- **micro-PR** — the one self-merging PR class: touches only
  HANDOFF.md and/or IDEAS.md
  ([D-002](DECISIONS.md#d-002--2026-06--handoff-note-merge-policy)).
- **SHIPLOG** — the append-only shipped-history log, newest first;
  every task PR adds its own line at /ship time.
  Home: [SHIPLOG.md](SHIPLOG.md).
- **handoff note** — the re-entry picture written at every stand-up,
  so any machine (or month-later founder) can resume.
  Home: [HANDOFF.md](HANDOFF.md).
- **blocker vs gotcha** — blocker = something that stops work and
  names who/what unblocks it; gotcha = a discovered trap that costs
  time but doesn't stop work. Both live in the handoff note; a
  permanent gotcha gets promoted to [CLAUDE.md](../CLAUDE.md).
- **claim question** — the mandatory "is this task already open
  elsewhere (a Web chat or the other machine)?" check before any task
  starts. Home: [CLAUDE.md](../CLAUDE.md).
- **pacing law** — finish before start: open lanes outrank new tasks;
  at most "Now + one parallel slot" needs the founder's attention;
  stopping is a valid next step
  ([D-009](DECISIONS.md#d-009--2026-06--pacing-law-finish-first-flexible-cap)).

## Product & engine

- **Suggest / Plan / Edit (the spine)** — the one loop V1 ships:
  suggest ranked trips → plan the full day-by-day → edit with
  whole-plan re-validation.
  Home: [FOUNDATION.md](FOUNDATION.md#the-spine).
- **validity engine** — the deterministic checks-and-scoring module
  (the isolated `engine/` directory; often just "the engine"): it
  fetches facts, runs the five families' checks, and scores plans —
  distinct from the brain. Built in
  [V1.S3](ROADMAP.md#v1s3--engine-core--two-families-deep).
- **planning brain** — Claude (server-side API) doing the
  conversational planning; consumes the engine's verdicts, never
  invents facts
  ([D-005](DECISIONS.md#d-005--2026-06--stack-re-trial-vs-foundation-v1-d-001-upheld--frontend-layer)).
- **check module** — one pluggable condition checker per fact family;
  a new idea is a new module, never a rewrite.
  Home: [FOUNDATION.md](FOUNDATION.md#what-roam-checks--the-five-families).
- **reliability law** — never fabricate: every fact is checked, every
  claim carries source + confidence, anything unverifiable renders
  labeled unverified.
  Home: [FOUNDATION.md](FOUNDATION.md#the-reliability-law).
- **reliability ladder** — the six fallback rungs for coverage-risky
  facts: global source → regional source → computed → estimated
  (labeled) → LLM-research grade (unverified) → refusal
  ([D-010](DECISIONS.md#d-010--2026-06--global-coverage-via-graded-fallback-ladders)).
- **preferences-as-defaults** — the engine honors a stated preference
  but surfaces a significantly better alternative when one exists;
  preferences steer, they don't blind.
  Home: [DECISION-POLICY.md §6](DECISION-POLICY.md#6-preferences-are-defaults-not-blinders).
- **provenance** — every stored traveler value is marked stated,
  inferred, or default; stated beats inferred beats default, newer
  beats older
  ([D-012](DECISIONS.md#d-012--2026-06--elicitation--inference-policy-ask-tiers-provenance-upsert)).
- **floor input** — the guaranteed minimum: origin + dates is always
  enough to get a plan
  ([D-011](DECISIONS.md#d-011--2026-06--traveler-input-vocabulary-rich-nullable-tiered-append-only)).
  Home: [FOUNDATION.md](FOUNDATION.md#what-roam-is).
- **fact cache** — the bitemporal, append-only store of every fetched
  fact: valid_for (when true in the world) + recorded_at (when we
  learned it); values are superseded, never overwritten
  ([D-015](DECISIONS.md#d-015--2026-06--data-asset-law-bitemporal-append-only-license-segmented)).
- **freshness window** — the maximum cache staleness a fact tolerates
  before refetch; tightens as the activity date nears.
  Home: [FACTS.md](data/FACTS.md#how-to-read-this-file).
- **the quiet asset** — the compounding dataset of place-and-condition
  knowledge that accrues as a side effect of caching.
  Home: [FOUNDATION.md](FOUNDATION.md#the-dataset--the-quiet-asset).
- **SI-canonical units** — all storage and engine math is SI/metric;
  conversion to US units happens only at display time
  ([D-013](DECISIONS.md#d-013--2026-06--canonical-units-si-storage-display-time-conversion)).
