---
type: laws
title: Working laws
status: living
---
# Roam — working laws

Loaded into every session via the root CLAUDE.md import (`@docs/LAWS.md`).
Universal laws only. Manuals and explanations: [HOME.md](HOME.md).
Procedures: [docs/skills/](skills/). Route new lessons per
§ Self-improvement.

## What we're building
Roam — a travel-planning engine that catches the checkable details
other apps miss. Identity: [FOUNDATION.md](FOUNDATION.md). Plan +
current version: [ROADMAP.md](ROADMAP.md). Progress:
[DASHBOARD.md](DASHBOARD.md).

## Who you're working with
- Solo builder WITHOUT a CS background.
- Explain important decisions in plain language before implementing.
- Trade-offs: 2–3 options with pros/cons and a recommendation.
- Pick the best tool for the job that is stable and has a large
  community — never niche or bleeding-edge for its own sake.

## The two touchpoints
The founder's only ritual touchpoints:
1. Final merge approval — the only merge gate.
2. The leaving ritual — "done for today" (handoff) or "take it to
   the cloud" (liftoff), plus pasting Web/Design context when asked.
   Both END the session.
Everything else — recording, bookkeeping, claims, dispatch — runs
itself. Genuine uncertainty and judgment calls still come to the
founder.

## Workflow (non-negotiable)
- Two computers + cloud. ALWAYS `git pull` at session start; commit +
  push before finishing. (pickup and handoff do this.)
- Never work on main. Every task is born bench-first: freshly pulled
  main → branch feat/ | fix/ | docs/ | chore/<id>-<slug> → spec (if
  the task needed discussion) + memory stub as first commits →
  **draft PR at birth**, every task, cockpit included
  ([D-023](DECISIONS.md#d-023--2026-07--universal-draft-pr-at-birth--micro-pr-carve-out-recut-amends-d-002-d-008-d-020))
  → push every commit.
- One task = one branch = one PR.
- NEVER merge without the founder's explicit approval. Ready = tests +
  linter green, PR flipped ready, plain-language summary (+ preview
  link once previews exist) → ask. On approval: the atomic weld, then
  squash-merge, delete branch, pull main. (ship does this.) Sole
  exception: the micro-PR — touches ONLY [DASHBOARD.md](DASHBOARD.md)
  and/or [IDEAS.md](IDEAS.md), written by handoff/liftoff/ship —
  merges immediately without asking
  ([D-002](DECISIONS.md#d-002--2026-06--handoff-note-merge-policy) as
  amended by
  [D-023](DECISIONS.md#d-023--2026-07--universal-draft-pr-at-birth--micro-pr-carve-out-recut-amends-d-002-d-008-d-020)).
- Leaving phrases ("done for today", "bye", "wrapping up") → run the
  full handoff immediately, unasked. "Take it to the cloud" (or any
  equivalent) → run liftoff. Both close the session.
- When a task's work is complete, run ship yourself — never declare a
  task done in conversation without it.
- Claim check before starting any task: open branches + draft PRs
  answer it; ask the founder only on genuine ambiguity.
- Dispatch law: mid-session lanes default LOCAL (background agents /
  worktrees); liftoff dispatches CLOUD-ONLY through the eligibility
  gate — nothing is ever silently parked: ineligible or failed tasks
  are recorded in their own memory + [DASHBOARD](DASHBOARD.md).
- When the founder states or confirms a roadmap-level change (add,
  cut, reorder, pivot, pause), run decide unasked — entry + ripple in
  the same commit. Task-local calls are not decisions; they go in the
  task's memory file.
- Before saying "done": run tests + linter and fix failures.
- If the founder forgets any of this, do it anyway without being asked.
- Pacing law
  ([D-009](DECISIONS.md#d-009--2026-06--pacing-law-finish-first-flexible-cap)):
  the ongoing task and pending blocks outrank new tasks. At most
  "Now:" + one parallel slot needs the founder's attention.
  Fully-specified no-decision [P] work may run as extra lanes at your
  discretion; "more" unlocks the full menu. Stopping is a valid next
  step.
- The moment the founder voices an idea or a defect outside the
  current task's scope, append one dated line to [IDEAS.md](IDEAS.md)
  unasked — the single inbox; nothing is scope until triaged into
  [ROADMAP](ROADMAP.md) via decide. (No GitHub Issues, no boards.)

## Task anatomy
Every task carries three artifacts on its branch:
- **spec** `docs/specs/<id>-<slug>.md` — the stable contract: goal,
  out of scope, plan, Done-means. Born from the discussion that
  opened the task; skipped only when the ROADMAP line already fully
  specifies it (steps then live in the PR description).
- **memory** `docs/memory/<id>.md` — the living story, in the locked
  format (Status first). Rewritten cognitively at every handoff and
  at the lane trigger moments.
- **draft PR** — the public window: commits are the heartbeat;
  questions for the founder are `BLOCKED:` comments; completion flips
  it ready with a plain summary.
Contract changes dual-write: the spec gets the edit; memory narrates
it and why. Memory is never its own PR — rewrites are commits on the
task branch; it reaches main once, at ship, as history/.
At ship, memory MOVES to `docs/history/<id>.md` (final form,
frontmatter shipped: + pr:). Git keeps the technical record;
history/ keeps the meaning.

## Parallel lanes & cloud
The LANE LAW (seat-blind — identical local or cloud): every lane
1. is born bench-first BY THE COCKPIT — branch, spec, memory stub,
   draft PR pushed to origin BEFORE any session exists;
2. runs the canary handshake before real work — its first act is a
   trivial push; the cockpit writes airborne-or-failed into the
   pre-birthed memory; a lane seeing failed/aborted, or no
   acknowledgment, self-terminates;
3. pushes every commit;
4. never shares a file with any sibling;
5. writes ITS OWN memory at four moments — handshake claim, each
   decision or dead end, blocking, completion (before the ready-flip);
6. speaks through its PR — `BLOCKED:` comments, ready-flip + plain
   summary;
7. never writes main — no [DASHBOARD](DASHBOARD.md), no
   [IDEAS](IDEAS.md), no [ROADMAP](ROADMAP.md) ticks, no history/,
   no merges.
Seat-invariance law: a task's artifacts must be indistinguishable by
seat; only ritual stamps name seats.
Baton law: exactly one cockpit — the session the founder is driving.
Claimed by pickup on fresh origin; released by FULL handoff or
liftoff (which close the session). A session whose
[DASHBOARD](DASHBOARD.md) seat-stamp is superseded self-closes:
push, write nothing. Between cockpits the baton is dormant; lanes
fly on.
Cloud lanes launch only via claude.ai/code or the mobile app; never
end a session before its work is on origin.
Mechanics: [parallel-lanes](skills/parallel-lanes.md) ·
[liftoff](skills/liftoff.md).

## Knowledge & tracking
- One ladder, one home per level: [FOUNDATION](FOUNDATION.md)
  (identity) → [ROADMAP](ROADMAP.md) (versions → stages → task
  checkboxes — the ONLY stored task state; ticked only by ship) →
  spec (contract) → memory (story) → draft PR (in-flight) →
  [history/](history/) (shipped narrative). [DASHBOARD](DASHBOARD.md)
  renders it all — repainted only by rituals, never hand-edited,
  never stale-trusted: git outranks every note.
- Weave rule: in any docs/ file, every mention of a roadmap ID,
  D-number, fact/param ID (F-*, TP-*), or sibling doc is a markdown
  link (GitHub-compatible anchors), never plain text.
- Derivation law: derived values (counts, totals, statuses) are never
  written as literals — compute from source at render time.
- Retroactivity law: when a convention is adopted OR changed, backfill
  every pre-existing file in the same PR; any later-found gap is
  repaired the moment it is found (current PR, or a chore PR).
- Record everything: deviations → the PR summary + the memory file;
  fresh gotchas → the task's memory (task-local) or
  [DASHBOARD](DASHBOARD.md) Needs-you (founder-facing) — permanent
  ones promote to these laws or a skill via a normal PR;
  roadmap-level changes → a D-number. Nothing important lives only
  in conversation.
- Standing choices with rationale: how WE work →
  [PROJECT-POLICY.md](PROJECT-POLICY.md) · how ROAM'S BRAIN decides →
  [DECISION-POLICY.md](DECISION-POLICY.md). Every rule lives in
  exactly one; the other links it.
- Claude Design is a no-write surface: only extracted values (tokens,
  constants) enter the repo via a paste block — never markup or
  bundles.
- docs/ is the Obsidian vault; docs/.obsidian/ stays gitignored.
- Manuals live in [HOME.md](HOME.md): file purposes, mechanisms,
  notation, terms. Files carry content, not explanations.

## Safety (non-negotiable)
- This repo is PUBLIC. NEVER include secrets, API keys, tokens,
  passwords, or personal data anywhere: not in code, docs, examples,
  or commit messages. Keys live in `.env` (gitignored); keep
  `.env.example` updated with placeholders only.
- No destructive commands (rm -rf, force-push, db drops) without
  asking.
- Unsure? Stop and ask.

## Self-improvement
- When the founder corrects you, update the right home so the mistake
  never repeats. Route first: universal law → here · conditional
  knowledge (when doing X) → the relevant skill · procedure → its
  [docs/skills/](skills/) page · explanation/manual → [HOME](HOME.md)
  · standing choice + rationale →
  [PROJECT-POLICY](PROJECT-POLICY.md). This file holds universals
  only.

## Tech stack (decided)
Next.js App Router (TS, React 19) + Supabase + Vercel; brain = Claude
API server-side; engine isolated in engine/. Consolidated rationale:
[PROJECT-POLICY §Stack](PROJECT-POLICY.md#stack)
([D-001](DECISIONS.md#d-001--2026-06--tech-stack) ·
[D-005](DECISIONS.md#d-005--2026-06--stack-re-trial-vs-foundation-v1-d-001-upheld--frontend-layer) ·
[D-007](DECISIONS.md#d-007--2026-06--shadcnui-builds-on-base-ui-not-radix)).

## Equipment & stage-gated tooling
Reference: [equipment-plan](skills/equipment-plan.md). Never
stockpile — add tools only when their stage opens.
