---
type: policy
title: Project policy
status: living
---
# Project policy — how WE work, and why

## What this is
The workshop's rulebook, with receipts. Every standing choice about
how this project is built and run lives here — what was chosen, why,
and where it was decided. This file invents NOTHING: it collects
decisions already made, so nobody reassembles them from the ledger.

How the policy files divide: [LAWS](LAWS.md) is the constitution —
pure commands, loaded into every session; this file is the annotated
version, read on demand when someone asks "why is it this way?";
[ENGINE](ENGINE.md) is the same idea for the product's brain. How to
read this file: each section opens with a one-line plain gloss in
italics; the rules are binding and worded precisely; each section
closes with a small Sources line — the paper trail, safe to ignore.
Gaps found while consolidating are NOT resolved here — they live in
[Open questions](#open-questions) for the founder.

## Stack
*What Roam is built with — and the doctrine that makes it fast.*

- **The core** — Next.js App Router (TypeScript, React 19) +
  Supabase (Postgres + Auth) + Vercel; the planning brain is the
  Claude API, server-side only; the scoring engine is isolated as
  its own tested module.
- **The frontend layer** — Tailwind v4 + shadcn/ui (design system),
  Motion (animation), MapLibre GL (maps), dnd-kit (timeline
  drag-and-drop), Vercel AI SDK in the "AI SDK UI" flavor (streaming
  incl. streamObject; NOT the paused RSC/streamUI variant), TanStack
  Query + Zustand (state).
- **The performance doctrine**, verbatim from D-005: "stream-first
  (UI never blocks on the brain; partial results render as they
  resolve), cache-heavy (every fetched fact stored in Postgres with
  a freshness window — the dataset asset and the speed mechanism are
  the same feature), parallel fan-out across the five check
  families, DB region co-located with pooled connections."
- **Two riders** — (1) the engine streams progressively and caches
  every fact from day one; (2) the engine module keeps a hard
  boundary so it can later be lifted into a Python worker for ML
  tuning of the dataset.
- **shadcn builds on Base UI** — the Base UI primitive library
  (shadcn's current default, "nova" preset), not legacy Radix.

Sources: [D-001](DECISIONS.md#d-001--2026-06--tech-stack) ·
[D-005](DECISIONS.md#d-005--2026-06--stack-re-trial-vs-foundation-v1-d-001-upheld--frontend-layer)
·
[D-007](DECISIONS.md#d-007--2026-06--shadcnui-builds-on-base-ui-not-radix)

## Conventions
*House habits every branch, PR, and number obeys.*

- **Branch names read at a glance** — feat/ · fix/ · docs/ · chore/
  prefix + <id>-<slug>, the roadmap ID lowercased when the task has
  one (e.g. feat/v1.s3.t1-check-contract) — the work's type is
  visible, and every branch ties to its roadmap line.
- **The micro-PR carve-out** — a PR touching ONLY
  [DASHBOARD.md](DASHBOARD.md) and/or [IDEAS.md](IDEAS.md) — written
  by a ritual (handoff · liftoff · ship's tail · pickup's
  stale-repaint) — squash-merges immediately without approval; every
  other merge waits for the founder's explicit yes.
- **Units** — SI/metric exclusively in storage and engine math;
  conversion to US units happens only at render time.

Sources: [LAWS §Workflow](LAWS.md#workflow-non-negotiable) ·
[HOME §Roadmap manual](HOME.md#roadmap-manual) ·
[D-002](DECISIONS.md#d-002--2026-06--handoff-note-merge-policy) as
amended by
[D-023](DECISIONS.md#d-023--2026-07--universal-draft-pr-at-birth--micro-pr-carve-out-recut-amends-d-002-d-008-d-020)
·
[D-013](DECISIONS.md#d-013--2026-06--canonical-units-si-storage-display-time-conversion)

## Workshop choices
*The bigger standing decisions about how work itself flows.*

- **Rituals live as skills, not commands** — a thin stub in
  `.claude/skills/<name>/` carries the trigger so the model fires
  the ritual itself (leaving phrases, unprompted pickup), while the
  procedure lives vault-readable at [docs/skills/](skills/) — the
  founder can read every ritual in Obsidian, and a stub cannot drift
  from its procedure because it only points.
- **Bench-first birth** — every task — cockpit included — starts as
  branch + spec + memory stub + draft PR pushed to origin BEFORE any
  session works it, so no work ever exists in only one place.
- **Seat-invariance** — a task's artifacts are indistinguishable by
  seat (work PC, home PC, cloud lane); only ritual stamps name
  seats — so any seat can pick any task up cold.
- **The pacing law — finish-first** — the ongoing task and pending
  blocks outrank new tasks; at most "Now" plus one parallel slot
  needs the founder's attention; fully-specified no-decision [P]
  work may run as extra lanes; "more" unlocks the full menu; and
  stopping is a valid next step.

Sources:
[D-024](DECISIONS.md#d-024--2026-07--architecture-v2-memoryhistory-narrative-layer-dashboard-as-sole-state-surface-rituals-as-skills-amends-d-008-retires-handoffmd--shiplogmd)
·
[D-023](DECISIONS.md#d-023--2026-07--universal-draft-pr-at-birth--micro-pr-carve-out-recut-amends-d-002-d-008-d-020)
·
[D-009](DECISIONS.md#d-009--2026-06--pacing-law-finish-first-flexible-cap)
· [LAWS §Workflow](LAWS.md#workflow-non-negotiable) ·
[LAWS §Parallel lanes & cloud](LAWS.md#parallel-lanes--cloud)

## Open questions
Found while consolidating; for the founder — not resolved here.

1. **The branch-prefix set has no decision record.** feat/fix/docs/
   chore predates the decision log (born with the workflow kit in
   [PR #1](https://github.com/wsher0901/roam/pull/1), pinned in
   [PR #13](https://github.com/wsher0901/roam/pull/13)); if the set
   ever grows (e.g. spike/), that is the moment to give it a
   D-number.
