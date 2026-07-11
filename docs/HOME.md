---
type: home
title: Home
status: living
---
# Home — the vault front page

Roam is one engine for travel planning: it suggests trips, plans
them day by day, and re-validates the whole plan on every edit —
catching the small checkable details other apps miss. Full product
definition: [FOUNDATION.md](FOUNDATION.md).

This page holds ZERO live state. Any "where are we" question is
answered by [DASHBOARD.md](DASHBOARD.md) (repainted by rituals) or
by sitting down and talking — never by this file.

## The questions

| Question | Go to |
|---|---|
| What are we building? | [FOUNDATION.md](FOUNDATION.md) |
| What are the working laws? | [LAWS.md](LAWS.md) |
| Why did we choose X? | [DECISIONS.md](DECISIONS.md) |
| How do WE work (standing choices)? | [PROJECT-POLICY.md](PROJECT-POLICY.md) |
| How does the engine decide? | [DECISION-POLICY.md](DECISION-POLICY.md) |
| In what order? | [ROADMAP.md](ROADMAP.md) |
| Where am I right now? | [DASHBOARD.md](DASHBOARD.md) — or just talk: cockpit sessions brief unprompted (pickup) |
| What has shipped? | [DASHBOARD §Shipped](DASHBOARD.md#shipped), derived from [history/](history/README.md) |
| What's the contract of a task? | its spec in [docs/specs/](specs/README.md) |
| What's the story of a task in flight? | its memory file in [docs/memory/](memory/README.md), on the task's branch |
| What's the story of a shipped task? | its file in [docs/history/](history/README.md) |
| What does a term mean? | [GLOSSARY.md](GLOSSARY.md) |
| How do I start a Design session? | [DESIGN-KICKOFF.md](DESIGN-KICKOFF.md) |
| I'm sitting at a new or second machine | [machine-setup](skills/machine-setup.md) |

## Tool routing

| Tool | Role |
|---|---|
| Claude Web | THINKS — discussion, trade-offs, design; everything leaves as ONE paste block, pasted immediately or tracked as an open lane |
| Claude Design | DRAWS — a no-write surface; only extracted values (design tokens, constants) enter the repo via a paste block, never markup or export bundles |
| Claude Code | WRITES — the only writer; every repo change flows through it as a PR |
| Obsidian | READS — the vault is docs/; quick capture goes only into [IDEAS.md](IDEAS.md); never hand-edit [FOUNDATION](FOUNDATION.md) / [ROADMAP](ROADMAP.md) / [DECISIONS](DECISIONS.md) / [DASHBOARD](DASHBOARD.md) (rituals repaint it) |

## The rituals

| Ritual | Fires when | Procedure |
|---|---|---|
| pickup | unprompted on the founder's first message (cockpit sessions only) | [skills/pickup.md](skills/pickup.md) |
| handoff | leaving phrases ("done for today", "bye", "wrapping up"), explicit call, or ship's QUIET tail | [skills/handoff.md](skills/handoff.md) |
| liftoff | "take it to the cloud" and equivalents — closes the session | [skills/liftoff.md](skills/liftoff.md) |
| ship | the moment a task's work is complete, unasked | [skills/ship.md](skills/ship.md) |
| decide | unasked, when the founder states or confirms a roadmap-level change | [skills/decide.md](skills/decide.md) |

[parallel-lanes](skills/parallel-lanes.md) is the companion manual —
not a ritual — consulted for any lane work, local or cloud.

## The daily loop

1. Sit down → just talk: the briefing renders itself (cockpit
   sessions run pickup unprompted; the baton is claimed).
2. Work → the claim check reads open branches + draft PRs; every
   task is born bench-first with a draft PR
   ([LAWS §Workflow](LAWS.md#workflow-non-negotiable)); lanes follow
   [parallel-lanes](skills/parallel-lanes.md).
3. Task done → ship runs itself; your conversational yes is the only
   merge gate.
4. Leaving → "done for today" runs handoff · "take it to the cloud"
   runs liftoff — both close the session.

## Roadmap manual

How to read [ROADMAP.md](ROADMAP.md)
([D-004](DECISIONS.md#d-004--2026-06--planning-notation--rolling-wave-depth),
amended by
[D-022](DECISIONS.md#d-022--2026-07--version-ladder--lifespan-split-amends-d-004)):

- **Notation** — Vn = Version · Vn.Sm = Stage (ordered, each with a
  done-criterion) · Vn.Sm.Tk = Task, the PR-sized unit (one task = one
  branch = one PR). The only vocabulary — no synonyms: not "MVP", not
  "demo build", not "milestone".
- **Tags** — [P] = parallel-safe (touches files no sibling task
  touches) · [seq] = must follow; "after X" names the dependency when
  it is not simply the previous task.
- **Branch names** — the lowercase ID plus a slug
  (e.g. feat/v1.s3.t3-weather); branches, PRs, and ritual stamps
  reference these IDs.
- **Work IDs** — Vn.Sm.Tk from [ROADMAP](ROADMAP.md); never
  hand-assigned labels ([IDEAS](IDEAS.md) is the inbox for
  everything unnumbered — [D-023](DECISIONS.md#d-023--2026-07--universal-draft-pr-at-birth--micro-pr-carve-out-recut-amends-d-002-d-008-d-020)).
- **Small steps** — checkboxes in the task's PR description, never in
  [ROADMAP](ROADMAP.md).
- **Depth (rolling wave)** — active version fully staged and tasked ·
  next version a rough bucket · the one after name-only · sockets
  pooled unversioned.
- **Progress** — checkbox ticks land only via ship's atomic weld at
  merge time.

## File ownership

| File | Holds | Written by |
|---|---|---|
| [LAWS.md](LAWS.md) | the working laws every session loads (root [CLAUDE.md](../CLAUDE.md) imports it) | founder-approved PRs |
| [FOUNDATION.md](FOUNDATION.md) | timeless product identity & principles | founder-approved PRs (paste block + D-number) |
| [ROADMAP.md](ROADMAP.md) | the version ladder + build order: versions → stages → tasks | structure via decide; progress ticks via ship |
| [DECISIONS.md](DECISIONS.md) | append-only decision log | decide |
| [PROJECT-POLICY.md](PROJECT-POLICY.md) | how WE work — standing choices with sources | decide ripples; never invents |
| [DECISION-POLICY.md](DECISION-POLICY.md) | how the engine reasons & renders (consolidated, sourced) | decide ripples; never invents |
| [DASHBOARD.md](DASHBOARD.md) | the sole state surface — every section derived | rituals only (pickup repaint · handoff · liftoff · ship's tail); never hand-edited |
| [memory/](memory/README.md) | in-flight task stories (locked format), living on task branches | the task's own seat: cockpit at rituals, lanes at their four moments |
| [history/](history/README.md) | permanent shipped narratives | ship's atomic weld (the memory file moves at merge) |
| [DESIGN-KICKOFF.md](DESIGN-KICKOFF.md) | Design session preamble + extraction rules | ops PRs |
| [docs/skills/](skills/) | ritual procedures + manuals, vault-readable ([machine-setup](skills/machine-setup.md), [equipment-plan](skills/equipment-plan.md), …) | founder-approved PRs + gotcha promotions |
| [IDEAS.md](IDEAS.md) | the single untriaged inbox — no GitHub Issues, no boards ([D-023](DECISIONS.md#d-023--2026-07--universal-draft-pr-at-birth--micro-pr-carve-out-recut-amends-d-002-d-008-d-020)) | Claude Code, the moment an idea is voiced |
| [specs/](specs/README.md) | per-task contracts | born when a task opens with discussion; ship finalizes at the weld |
| [GLOSSARY.md](GLOSSARY.md) | project vocabulary, newcomer-proof | Claude Code, as new terms enter the corpus |
| [data/FACTS.md](data/FACTS.md) | every fact the engine must know + traveler parameters | [V1.S1](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code) tasks via PRs |
| [data/SOURCES.md](data/SOURCES.md) | the vetted source registry | source-vetting lanes (T2–T6), consolidated at T7 |
| [data/SCHEMA.md](data/SCHEMA.md) | human-readable schema mirror (placeholder) | [V1.S1.T7](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code) |
| [data/TELEMETRY.md](data/TELEMETRY.md) | what the system records about itself | approved PRs |
| this page | orientation, manuals, zero state | approved PRs |

**Git outranks notes; nothing important lives only in a
conversation.**
