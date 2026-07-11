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
answered by naming the command that renders the answer, never by
this file.

## The questions

| Question | Go to |
|---|---|
| What are we building? | [FOUNDATION.md](FOUNDATION.md) |
| Why did we choose X? | [DECISIONS.md](DECISIONS.md) |
| In what order? | [ROADMAP.md](ROADMAP.md) |
| What has shipped? | [SHIPLOG.md](SHIPLOG.md) |
| Where am I right now? | run /pickup (or say "brief" in Claude Web) |
| What's the detail on a task? | [docs/specs/](specs/README.md) |
| What does a term mean? | [GLOSSARY.md](GLOSSARY.md) |
| How does the engine decide? | [DECISION-POLICY.md](DECISION-POLICY.md) |
| How does progress look at a glance? | [DASHBOARD.md](DASHBOARD.md) |
| How do I start a Design session? | [DESIGN-KICKOFF.md](DESIGN-KICKOFF.md) |
| I'm sitting at a new or second machine | [machine-setup skill](../.claude/skills/machine-setup/SKILL.md) |

## Tool routing

| Tool | Role |
|---|---|
| Claude Web | THINKS — discussion, trade-offs, design; everything leaves as ONE paste block, pasted immediately or tracked as an open lane |
| Claude Design | DRAWS — a no-write surface; only extracted values (design tokens, constants) enter the repo via a paste block, never markup or export bundles |
| Claude Code | WRITES — the only writer; every repo change flows through it as a PR |
| Obsidian | READS — the vault is docs/; quick capture goes only into [IDEAS.md](IDEAS.md); never hand-edit [FOUNDATION](FOUNDATION.md) / [ROADMAP](ROADMAP.md) / [DECISIONS](DECISIONS.md) |

## The daily loop
1. Sit down → just talk: the briefing renders itself (cockpit
   sessions run /pickup unprompted).
2. Work → Claude Code asks the claim question before any task
   starts; lanes follow [CLAUDE.md](../CLAUDE.md) § Parallel lanes
   ([D-020](DECISIONS.md#d-020--2026-07--parallel-lanes-v2-native-lanes-replace-hand-built-orchestration)).
3. Task done → /ship runs itself; your conversational yes is the
   only merge gate.
4. Say a leaving phrase ("done for today", "bye") → /handoff ships
   itself and confirms it is safe to walk away.

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
  (e.g. feat/v1.s3.t3-weather); branches, PRs, and handoff notes
  reference these IDs.
- **Work IDs** — Vn.Sm.Tk from [ROADMAP](ROADMAP.md) or real GitHub
  issue numbers — never hand-assigned labels.
- **Small steps** — checkboxes in the task's PR description, never in
  [ROADMAP](ROADMAP.md).
- **Depth (rolling wave)** — active version fully staged and tasked ·
  next version a rough bucket · the one after name-only · sockets
  pooled unversioned.
- **Progress** — checkbox ticks land only via /ship at merge time.

## File ownership

| File | Holds | Written by |
|---|---|---|
| [FOUNDATION.md](FOUNDATION.md) | product definition & principles | founder-approved PRs (paste block + D-number) |
| [ROADMAP.md](ROADMAP.md) | the version ladder + build order: versions → stages → tasks | structure via /decide; progress ticks via /ship |
| [DECISIONS.md](DECISIONS.md) | append-only decision log | /decide |
| [SHIPLOG.md](SHIPLOG.md) | what shipped, newest first | /ship's bookkeeping commit |
| [DASHBOARD.md](DASHBOARD.md) | generated progress views | /ship (stage-map refresh at every merge) |
| [DESIGN-KICKOFF.md](DESIGN-KICKOFF.md) | Design session preamble + extraction rules | ops PRs |
| [machine-setup skill](../.claude/skills/machine-setup/SKILL.md) | per-machine setup + verification | ops PRs + gotcha promotions |
| [HANDOFF.md](HANDOFF.md) | session re-entry note (transient) | /handoff — the cockpit session only, never lanes |
| [IDEAS.md](IDEAS.md) | untriaged idea inbox | Claude Code, the moment an idea is voiced |
| [specs/](specs/README.md) | per-task detail sheets | born when a task opens with discussion; /ship fills Deviations |
| [GLOSSARY.md](GLOSSARY.md) | project vocabulary, newcomer-proof | Claude Code, as new terms enter the corpus |
| [DECISION-POLICY.md](DECISION-POLICY.md) | how the engine reasons & renders (consolidated, sourced) | /decide ripples; never invents |
| [data/FACTS.md](data/FACTS.md) | every fact the engine must know + traveler parameters | [V1.S1](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code) tasks via PRs |
| [data/SOURCES.md](data/SOURCES.md) | the vetted source registry | source-vetting lanes (T2–T6), consolidated at T7 |
| [data/SCHEMA.md](data/SCHEMA.md) | human-readable schema mirror (placeholder) | [V1.S1.T7](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code) |
| [data/TELEMETRY.md](data/TELEMETRY.md) | what the system records about itself | approved PRs |
| [CLAUDE.md](../CLAUDE.md) | the working laws every session obeys | founder-approved PRs |
| [GLOSSARY](GLOSSARY.md) / this page | orientation, zero state | approved PRs |

**Git outranks notes; nothing important lives only in a
conversation.**
