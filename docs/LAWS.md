---
type: laws
title: Working laws
status: living
---
# Roam — working laws

Loaded into every session via the root CLAUDE.md import (`@docs/LAWS.md`).
Universal laws only. Manuals and explanations: [HOME.md](HOME.md).
Rationale and sources for every law: [ENGINE.md](ENGINE.md) ·
[DECISIONS.md](DECISIONS.md).
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
   the cloud" (liftoff), with the Web/Design context carried inline
   in the leaving message — no question asked. Both END the session.
Everything else — recording, bookkeeping, claims, dispatch — runs
itself. Genuine uncertainty and judgment calls still come to the
founder.

## Workflow (non-negotiable)
- Two computers + cloud. ALWAYS `git pull` at session start; commit +
  push before finishing. (pickup and handoff do this.)
- Never work on main. Every task is born bench-first: freshly pulled
  main → branch feat/ | fix/ | docs/ | chore/<id>-<slug> → spec (if
  the task needed discussion) + memory stub as first commits →
  **draft PR at birth**, every task, cockpit included — the task is
  public and rescuable from its first minute; no work ever exists in
  only one place → push every commit.
- One task = one branch = one PR.
- NEVER merge without the founder's explicit approval. Ready = tests +
  linter green, PR flipped ready, plain-language summary (+ preview
  link) → ask. On approval: the atomic weld, then
  squash-merge, delete branch, pull main. (ship does this.) Sole
  exception: the micro-PR — touches ONLY [DASHBOARD.md](DASHBOARD.md)
  and/or [IDEAS.md](IDEAS.md), written by a ritual (handoff · liftoff
  · ship's tail · pickup's stale-repaint) — merges immediately
  without asking.
- Leaving phrases ("done for today", "bye", "wrapping up") → run the
  full handoff immediately, unasked. "Take it to the cloud" (or any
  equivalent) → run liftoff. Both close the session. Leaving language
  carrying watch-from-phone intent ("go remote" and close variants)
  summons go-remote, NEVER handoff.
- When a task's work is complete, run ship yourself — never declare a
  task done in conversation without it.
- Claim check before starting any task: open branches + draft PRs
  answer it; ask the founder only on genuine ambiguity.
- Dispatch & away-mode (the chooser): mid-session parallelizable work
  → LOCAL lane (background agents / worktrees). Leaving with nothing
  continuing → handoff. Leaving with work continuing: machine stays
  on → go-remote (the tether) · machine going dark → liftoff (cloud).
  Cloud dispatch only through liftoff's sanctioned routes
  ([parallel-lanes §Cloud spawn](skills/parallel-lanes.md#cloud-spawn--route-ladder)) —
  never an ad-hoc CLI spawn. Nothing is ever silently parked: every
  held, failed, or waiting item is recorded in its own memory +
  [DASHBOARD](DASHBOARD.md).
- When the founder states or confirms a roadmap-level change — a
  task added, subtracted, moved, or pivoted; a stage reordered or
  paused — or any standing product/workshop convention change, run
  decide unasked — entry + ripple in the same commit. Task-local
  implementation calls are not decisions; they go in the task's
  memory file.
- Before saying "done": sync the branch with current main (merge,
  never rebase), then run the full CI mirror (lint · format · links ·
  tests · build) and fix failures; "done" also requires the pushed
  commit's Actions run green — local green never suffices.
- If the founder forgets any of this, do it anyway without being asked.
- Pacing law:
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
   draft PR laid on origin BEFORE the lane exists: public and
   rescuable from its first minute;
2. runs the canary handshake before real work — its first act is a
   trivial push; the cockpit writes airborne-or-failed into the
   pre-birthed memory; a lane seeing failed/aborted, a Status it
   does not own (parked · respawned · superseded), or silence past
   the timeout (constants:
   [parallel-lanes §Canary](skills/parallel-lanes.md#canary-handshake-both-sides)),
   self-terminates after pushing what exists — a worker that cannot
   push is a zombie writing into the void;
3. pushes every commit — unpushed work does not exist;
4. never shares a file with any sibling — merges cannot collide by
   construction;
5. writes ITS OWN memory at four moments — handshake claim, each
   decision or dead end (invisible in the final diff, so written
   down), blocking, completion (before the ready-flip);
6. speaks through its PR — `BLOCKED:` comments, ready-flip + plain
   summary;
7. never writes main — no [DASHBOARD](DASHBOARD.md), no
   [IDEAS](IDEAS.md), no [ROADMAP](ROADMAP.md) ticks, no history/,
   no merges: "done" must keep meaning founder-approved and merged.
Seat-invariance law: a task's artifacts must be indistinguishable by
seat; only ritual stamps name seats.
- Park protocol: handoff FULL parks every live local lane — the park
  (a rescue-save if needed, then ONE stamped Status line) is the only
  moment the cockpit may touch a lane's tree or diary mid-flight;
  liftoff is the only road from parked to cloud. Mechanics:
  [handoff §1.5](skills/handoff.md#15--park-the-local-lanes-full-only).
- Idle-wait: a blocked lane on a resumable, phone-reachable vehicle
  (cloud session · RC-visible local session) stays alive and waits —
  the founder's reply resumes it in-thread. Blocked local lanes still
  park at handoff FULL (the machine is halting). Termination only on:
  done · spawn failure · genuine error · a Status the lane does not
  own. Mechanics:
  [parallel-lanes §Wake-lock & parking](skills/parallel-lanes.md#wake-lock--parking).
Baton law: exactly one cockpit — the session the founder is driving;
the baton is the right to be that one driving session.
Claimed by pickup on fresh origin; released by FULL handoff or
liftoff (which close the session). A session whose
[DASHBOARD](DASHBOARD.md) seat-stamp is superseded self-closes:
push, write nothing. Between cockpits the baton is dormant; lanes
fly on.
Cloud lanes launch only through liftoff's sanctioned routes; never
end a session before its work is on origin.
Mechanics: [parallel-lanes](skills/parallel-lanes.md) ·
[liftoff](skills/liftoff.md) · [go-remote](skills/go-remote.md).

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
- One home per class (the routing law): every information class
  has exactly ONE home — the table in
  [HOME §Where information goes](HOME.md#where-information-goes).
  New information APPENDS there via that home's named vehicle;
  changed information UPSERTS in place via the same writer. Never a
  second copy: the weave links to a fact's home, it never
  duplicates it.
- Record everything: deviations → the PR summary + the memory file;
  fresh gotchas → the task's memory (task-local) or
  [DASHBOARD](DASHBOARD.md) Needs-you (founder-facing) — permanent
  ones promote to these laws or a skill via a normal PR;
  roadmap-level changes → a D-number. Nothing important lives only
  in conversation.
- Standing choices with rationale: how ROAM'S BRAIN works →
  [ENGINE.md](ENGINE.md), the engine on paper; workshop whys live in
  these laws' one-line glosses, [HOME](HOME.md), and their D-numbers
  in [DECISIONS.md](DECISIONS.md).
- Rituals live as skill stubs in `.claude/skills/` that only point;
  every procedure lives vault-readable in [docs/skills/](skills/) —
  a stub cannot drift from its procedure.
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
  · standing choice + rationale → its D-number in
  [DECISIONS.md](DECISIONS.md). This file holds universals only.

## Tech stack (decided)
Next.js App Router (TS, React 19) + Supabase + Vercel; brain = Claude
API server-side; engine isolated in engine/. Inventory + doctrine:
[SETUP §Stack](SETUP.md#stack).

## Equipment & stage-gated tooling
Reference: [SETUP §Staged](SETUP.md#staged--turns-on-when-its-stage-opens).
Never stockpile — add tools only when their stage opens.
