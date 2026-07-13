---
type: policy
title: Project policy
status: living
---
# Project policy — how WE work, and why

## What this is
The workshop's standing choices on paper: every already-decided rule
about how this project is built and run, each with its rationale and
a link to its source. This file invents NOTHING. Counterparts:
[DECISION-POLICY.md](DECISION-POLICY.md) holds how ROAM'S BRAIN
decides; universal laws live in [LAWS.md](LAWS.md). Gaps found while
consolidating are NOT resolved here — they live in
[Open questions](#open-questions) for the founder.

## Stack
- Next.js App Router (TypeScript, React 19) + Supabase (Postgres +
  Auth) + Vercel; planning brain = Claude API, server-side only;
  scoring engine isolated as its own tested module.
  ([D-001](DECISIONS.md#d-001--2026-06--tech-stack);
  [D-005](DECISIONS.md#d-005--2026-06--stack-re-trial-vs-foundation-v1-d-001-upheld--frontend-layer))
- Frontend layer: Tailwind v4 + shadcn/ui (design system), Motion
  (animation), MapLibre GL (maps), dnd-kit (timeline drag-and-drop),
  Vercel AI SDK in the "AI SDK UI" flavor (streaming incl.
  streamObject; NOT the paused RSC/streamUI variant), TanStack
  Query + Zustand (state).
  ([D-005](DECISIONS.md#d-005--2026-06--stack-re-trial-vs-foundation-v1-d-001-upheld--frontend-layer))
- Performance doctrine, verbatim from
  [D-005](DECISIONS.md#d-005--2026-06--stack-re-trial-vs-foundation-v1-d-001-upheld--frontend-layer):
  "stream-first (UI never blocks on the brain; partial results render
  as they resolve), cache-heavy (every fetched fact stored in
  Postgres with a freshness window — the dataset asset and the speed
  mechanism are the same feature), parallel fan-out across the five
  check families, DB region co-located with pooled connections."
- Riders
  ([D-005](DECISIONS.md#d-005--2026-06--stack-re-trial-vs-foundation-v1-d-001-upheld--frontend-layer)):
  (1) the engine streams progressively and caches every fact from day
  one; (2) the engine module keeps a hard boundary so it can later be
  lifted into a Python worker for ML tuning of the dataset.
- shadcn/ui components use the Base UI primitive library (shadcn's
  current default, "nova" preset), not legacy Radix.
  ([D-007](DECISIONS.md#d-007--2026-06--shadcnui-builds-on-base-ui-not-radix))

## Conventions
- Branch names: feat/ · fix/ · docs/ · chore/ prefix + <id>-<slug>,
  the roadmap ID lowercased when the task has one (e.g.
  feat/v1.s3.t1-check-contract) — the work's type reads at a glance
  and every branch ties to its roadmap line.
  ([LAWS §Workflow](LAWS.md#workflow-non-negotiable);
  [HOME §Roadmap manual](HOME.md#roadmap-manual))
- Micro-PR carve-out: a PR touching ONLY
  [DASHBOARD.md](DASHBOARD.md) and/or [IDEAS.md](IDEAS.md) — written
  by a ritual (handoff · liftoff · ship's tail · pickup's
  stale-repaint) — squash-merges immediately without approval; every
  other merge waits for the founder's explicit yes.
  ([D-002](DECISIONS.md#d-002--2026-06--handoff-note-merge-policy) as
  amended by
  [D-023](DECISIONS.md#d-023--2026-07--universal-draft-pr-at-birth--micro-pr-carve-out-recut-amends-d-002-d-008-d-020))
- Units: SI/metric exclusively in storage and engine math; conversion
  to US units happens only at render time.
  ([D-013](DECISIONS.md#d-013--2026-06--canonical-units-si-storage-display-time-conversion))

## Workshop choices
- Rituals live as skills, not commands: a thin stub in
  `.claude/skills/<name>/` carries the trigger so the model fires the
  ritual itself (leaving phrases, unprompted pickup), while the
  procedure lives vault-readable at [docs/skills/](skills/) — the
  founder can read every ritual in Obsidian, and a stub cannot drift
  from its procedure because it only points.
  ([D-024](DECISIONS.md#d-024--2026-07--architecture-v2-memoryhistory-narrative-layer-dashboard-as-sole-state-surface-rituals-as-skills-amends-d-008-retires-handoffmd--shiplogmd))
- Bench-first birth: every task — cockpit included — starts as
  branch + spec + memory stub + draft PR pushed to origin BEFORE any
  session works it, so no work ever exists in only one place.
  ([D-023](DECISIONS.md#d-023--2026-07--universal-draft-pr-at-birth--micro-pr-carve-out-recut-amends-d-002-d-008-d-020);
  [LAWS §Workflow](LAWS.md#workflow-non-negotiable))
- Seat-invariance: a task's artifacts are indistinguishable by seat
  (work PC, home PC, cloud lane); only ritual stamps name seats — so
  any seat can pick any task up cold.
  ([D-024](DECISIONS.md#d-024--2026-07--architecture-v2-memoryhistory-narrative-layer-dashboard-as-sole-state-surface-rituals-as-skills-amends-d-008-retires-handoffmd--shiplogmd);
  [LAWS §Parallel lanes & cloud](LAWS.md#parallel-lanes--cloud))
- Pacing law — finish-first: the ongoing task and pending blocks
  outrank new tasks; at most "Now" plus one parallel slot needs the
  founder's attention; fully-specified no-decision [P] work may run
  as extra lanes; "more" unlocks the full menu; stopping is a valid
  next step.
  ([D-009](DECISIONS.md#d-009--2026-06--pacing-law-finish-first-flexible-cap);
  [LAWS §Workflow](LAWS.md#workflow-non-negotiable))

## Open questions
Found while consolidating; for the founder — not resolved here.
1. **The branch-prefix set has no decision record.** feat/fix/docs/
   chore predates the decision log (born with the workflow kit in
   [PR #1](https://github.com/wsher0901/roam/pull/1), pinned in
   [PR #13](https://github.com/wsher0901/roam/pull/13)); if the set
   ever grows (e.g. spike/), that is the moment to give it a
   D-number.
