---
type: laws
title: Working laws
status: living
---
# Roam — working laws

Loaded into every session via the root CLAUDE.md import (`@docs/LAWS.md`).
Universal laws only. Manuals and explanations: [HOME.md](HOME.md).
Rationale and sources for every law: [ENGINE.md](ENGINE.md) ·
[DECISIONS.md](record/DECISIONS.md).
Procedures: [docs/skills/](skills). Route new lessons per
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

## The three touchpoints
The founder's only ritual duties. Everything else — recording,
bookkeeping, claims, delegation — runs itself; genuine uncertainty
and judgment calls still come to the founder.

1. **The merge word** — the only merge gate; the sole exception
   is the micro-PR (§ Workflow).
2. **The review word** — a self-authored diff at THE GATE takes
   the founder's "review" to the Web surface; the review precedes
   the merge word (no-solo-approval, § Workflow).
3. **The leaving ritual** — "done for today" (handoff) or "take
   it to the cloud" (liftoff), with the Web/Design context carried
   inline in the leaving message; no question is asked. Both END
   the session.

## Workflow (non-negotiable)
- **TWO COMPUTERS + CLOUD.** Always `git pull` at session start;
  commit and push before finishing. (pickup and handoff do this.)
- **BENCH-FIRST BIRTH.** Never work on main. Every task is born
  from freshly pulled main → branch `feat/` | `fix/` | `docs/` |
  `chore/<id>-<slug>` → spec (when the task needed discussion) +
  memory stub as first commits → **draft PR at birth**, every task,
  control tower and cockpit alike. The task is public and
  rescuable from its first minute; no work ever exists in only one
  place. Push every commit. → § Task anatomy
- **ONE TASK = ONE BRANCH = ONE PR.**
- **THE MERGE GATE.** Never merge without the founder's explicit
  approval. Ready means green, flipped, and summarized in plain
  language; on the word, ship performs the atomic weld and merges.
  Sole exception: the MICRO-PR — only [DASHBOARD](DASHBOARD.md) and/or
  [IDEAS](IDEAS.md), written by a ritual (handoff · liftoff ·
  ship's tail · pickup's stale-repaint) — merges immediately
  without asking. → [ship](skills/ship.md) ·
  [HOME §Micro-PRs](HOME.md#micro-prs) ·
  [D-023](record/DECISIONS.md#d-023--universal-draft-pr-at-birth-and-micro-pr-carve-out)
- **NO-SOLO-APPROVAL.** No diff merges on its author's own
  approval: independent review first, then the founder's word.
  Lane-authored diffs take any non-author session's review
  (cockpit or control tower) + the word, from anywhere.
  Self-authored diffs — tower-, cockpit- OR TEAMMATE-authored,
  since a teammate is a full session pushing as the founder — take
  an external Web review before the word. "NON-AUTHOR" MEANS THE
  PAYLOAD DIFF: a baton-holder necessarily writes the memory stub
  and the airborne ack on bench-first flights, and neither makes
  it the payload's author — but it may never review a payload it
  wrote itself. →
  [D-046](record/DECISIONS.md#d-046--flight-cockpit-the-control-tower-online)
  (precedent [#175](https://github.com/wsher0901/roam/pull/175)) ·
  [HOME §Agent teams](HOME.md#agent-teams)
- **LEAVING PHRASES ARE COMMANDS.** "done for today", "bye",
  "wrapping up" → run the full handoff immediately, unasked.
  "Take it to the cloud" or any equivalent → liftoff. Both close
  the session. Leaving language carrying watch-from-phone intent
  ("go remote" and close variants) summons go-remote, NEVER
  handoff. → [handoff](skills/handoff.md) ·
  [liftoff](skills/liftoff.md) · [go-remote](skills/go-remote.md)
- **SHIP CLOSES A TASK.** When a task's work is complete, run ship
  yourself — never declare a task done in conversation without it.
  → [ship](skills/ship.md)
- **CLAIM CHECK BEFORE STARTING.** Open branches + draft PRs
  answer it, read through the liveness rule: a bench with a live
  heartbeat is CLAIMED, never picked up; a reclaimable one is
  adopted via respawn; on doubt, ask. Commits are the heartbeat. →
  [parallel-lanes §Liveness](skills/parallel-lanes.md#liveness--live-vs-reclaimable)
- **DELEGATION & AWAY-MODE (the chooser law).** Mid-session
  parallelizable work → a LOCAL lane (background agents /
  worktrees). Leaving with nothing continuing → handoff. Leaving
  with work continuing: machine going dark → liftoff (cloud —
  fires the cockpit; the standard away posture) · machine staying
  on → go-remote (the tether — a backstop posture, never the
  plan). Cloud lanes launch ONLY through liftoff's sanctioned
  routes, never an ad-hoc CLI spawn. →
  [parallel-lanes §Cloud spawn](skills/parallel-lanes.md#cloud-spawn--route-ladder)
  ·
  [D-046](record/DECISIONS.md#d-046--flight-cockpit-the-control-tower-online)
- **NOTHING IS SILENTLY PARKED.** Every held, failed, or waiting
  item is recorded in its own memory + [DASHBOARD](DASHBOARD.md).
- **DECIDE RUNS UNASKED** the moment the founder states or
  confirms a roadmap-level change — a task added, subtracted,
  moved, or pivoted; a stage reordered or paused — or any standing
  product/workshop convention change. Entry + ripple in the same
  commit. Task-local implementation calls are NOT decisions; they
  go in the task's memory. → [decide](skills/decide.md)
- **BEFORE SAYING "DONE".** Sync the branch with current main
  (merge, never rebase), then run the verification loop, fixing
  failures as they surface. The exact commands, in their exact
  order, live in [ship §1](skills/ship.md#1--preflight) — their
  one home. "Done" also requires the PUSHED commit's Actions run
  green; local green never suffices. →
  [D-038](record/DECISIONS.md#d-038--ci-is-the-arbiter)
- **PACING LAW.** The ongoing task and pending blocks outrank new
  tasks. At most "Now:" + one parallel slot needs the founder's
  attention. Fully-specified no-decision [P] work may run as extra
  lanes at your discretion; "more" unlocks the full menu. Stopping
  is a valid next step. →
  [D-009](record/DECISIONS.md#d-009--pacing-law)
- **IDEAS IS THE ONLY INBOX.** The moment the founder voices an
  idea or a defect outside the current task's scope, append one
  DATED line to [IDEAS](IDEAS.md) unasked, per its entry
  contract.
  Nothing is scope until triaged into [ROADMAP](ROADMAP.md) via
  decide. (No GitHub Issues, no boards.) →
  [D-066](record/DECISIONS.md#d-066--the-ideas-entry-contract)
- **IF THE FOUNDER FORGETS ANY OF THIS, DO IT ANYWAY** without
  being asked.

## Task anatomy
Every task carries three artifacts on its branch:
- **spec** `docs/record/specs/<id>-<slug>.md` — the stable contract: goal,
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
task branch; it reaches main once, at ship, as record/history/.
At ship, memory MOVES to `docs/record/history/<id>.md` (final form,
frontmatter shipped: + pr:). Git keeps the technical record;
record/history/ keeps the meaning.

## Parallel lanes & cloud
- **THE LANE LAW** (seat-blind — identical local or cloud). Every
  lane is BORN BENCH-FIRST BY THE BATON-HOLDER, with branch, spec,
  memory stub and draft PR laid on origin BEFORE the lane exists;
  it then runs the CANARY HANDSHAKE before real work — a trivial
  first push, answered by the baton-holder writing
  airborne-or-failed into the pre-birthed memory. It pushes every
  commit, never shares a file with a sibling (so merges cannot
  collide by construction), writes ITS OWN memory at four moments
  — claim, each decision or dead end, blocking, completion — and
  speaks through its PR.
  TWO PROHIBITIONS ARE ABSOLUTE: a lane NEVER WRITES MAIN — no
  [DASHBOARD](DASHBOARD.md), no [IDEAS](IDEAS.md), no
  [ROADMAP](ROADMAP.md) ticks, no history/, no merges, because
  "done" must keep meaning founder-approved and merged; and a lane
  seeing failed/aborted, a Status it does not own (parked ·
  respawned · superseded), or silence past the timeout
  SELF-TERMINATES AFTER PUSHING WHAT EXISTS — a worker that cannot
  push is a zombie writing into the void. → the seven duties
  enumerated:
  [parallel-lanes §The lane law](skills/parallel-lanes.md#the-lane-law-seat-blind--identical-local-or-cloud)
  · the canary constants:
  [§Canary](skills/parallel-lanes.md#canary-handshake-both-sides)
- **SEAT-INVARIANCE.** A task's artifacts must be indistinguishable
  by seat; only ritual stamps name seats.
- **BATON LAW.** Exactly one control tower — the session the
  founder is driving — and the baton is the right to be that
  session. The BATON-HOLDER is the commanding session: control
  tower on the ground, cockpit in flight. Claimed by pickup on
  fresh origin; released by FULL handoff or liftoff, which close
  the session (liftoff's fire hands the baton to the cockpit it
  summons). Between control towers the baton is dormant; lanes fly
  on. →
  [D-046](record/DECISIONS.md#d-046--flight-cockpit-the-control-tower-online)
- **NO SUPERSEDED SEAT EXITS BARE.** A session whose
  [DASHBOARD](DASHBOARD.md) seat-stamp is superseded exits by its
  OWN closing ritual: a cockpit by [land](skills/land.md), so its
  lanes are fenced rather than abandoned; a ground control tower by
  [handoff](skills/handoff.md)'s capture-then-close, TEAM FINDINGS
  CAPTURED FIRST if a team is live. It writes no board — the baton
  has already moved. →
  [D-062](record/DECISIONS.md#d-062--the-wake-rule-generalized)
- **PARK PROTOCOL.** Handoff FULL parks every live local lane, and
  that park — a rescue-save if needed, then ONE stamped Status
  line — is the ONLY moment the control tower may touch a lane's
  tree or diary mid-flight. Liftoff is the only road from parked
  to cloud. →
  [handoff §1.5](skills/handoff.md#15--park-the-local-lanes-full-only)
- **IDLE-WAIT.** A blocked lane on a resumable, phone-reachable
  vehicle (cloud session · RC-visible local session) stays alive
  and waits — the founder's reply resumes it in-thread. Blocked
  LOCAL lanes still park at handoff FULL, because the machine is
  halting. Termination only on: done · spawn failure · genuine
  error · a Status the lane does not own. →
  [parallel-lanes §Wake-lock & parking](skills/parallel-lanes.md#wake-lock--parking)
- **NEVER END A SESSION BEFORE ITS WORK IS ON ORIGIN.** →
  [parallel-lanes](skills/parallel-lanes.md) ·
  [liftoff](skills/liftoff.md) · [go-remote](skills/go-remote.md)

## Knowledge & tracking
- One ladder, one home per level: [FOUNDATION](FOUNDATION.md)
  (identity) → [ROADMAP](ROADMAP.md) (versions → stages → task
  checkboxes — the ONLY stored task state; ticked only by ship) →
  spec (contract) → memory (story) → draft PR (in-flight) →
  [history/](record/history) (shipped narrative). [DASHBOARD](DASHBOARD.md)
  renders it all — repainted only by rituals, never hand-edited,
  never stale-trusted: git outranks every note.
- Weave rule: in any docs/ file, every mention of a roadmap ID,
  D-number, fact/param ID (F-*, TP-*), or sibling doc is a markdown
  link (GitHub-compatible anchors), never plain text.
- Derivation law: derived values (counts, totals, statuses) are never
  written as literals — compute from source at render time. Time is
  derived, never recalled: every stamp, date, or time written
  anywhere comes from a clock read at write time — the shell clock
  on a seat, the VM clock on a lane, git metadata when reading the
  past — never typed from memory.
- Retroactivity law: when a convention is adopted OR changed, backfill
  every pre-existing file in the same PR; any later-found gap is
  repaired the moment it is found (current PR, or a chore PR).
- **Verification law:** nothing unrecorded may be dropped, and no
  status may be asserted without the record confirming it. VERIFY
  BEFORE DROP — before deleting or compressing any narrative,
  verify its content is present at the home you are pointing to;
  what has no home stays where it is, or gains one first. VERIFY
  BEFORE CLASSIFY — before calling anything done, open, dead, or
  shipped, check the record rather than the note that claims it.
- **Sweep law:** any pointer or citation sweep greps THE
  DESTINATION — the heading, anchor, or name being replaced —
  never the phrasings you predict will surround it. THE PROOF OF A
  SWEEP IS A RE-RUN RETURNING ZERO; a sweep that merely ran is not
  a sweep that finished, and a clean result from a bad pattern is
  more dangerous than a red one.
- **Box masters** are a class: a box master is its own top-level
  file carrying rules, invariants and pointers — never procedures,
  never values. The external box is a COPY, never the source;
  edits ride PRs into the master; the re-save rides
  [DASHBOARD](DASHBOARD.md) Needs-you until it is done, because a
  master change that never reaches its box fails SILENTLY. →
  [D-064](record/DECISIONS.md#d-064--the-box-master-class-and-setup-entry-contract)
  ·
  [D-065](record/DECISIONS.md#d-065--the-box-master-diet)
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
  in [DECISIONS.md](record/DECISIONS.md).
- Rituals live as skill stubs in `.claude/skills/` that only point;
  every procedure lives vault-readable in [docs/skills/](skills) —
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
  [docs/skills/](skills) page · explanation/manual → [HOME](HOME.md)
  · standing choice + rationale → its D-number in
  [DECISIONS.md](record/DECISIONS.md). This file holds universals only.

## Tech stack (decided)
Next.js App Router (TS, React 19) + Supabase + Vercel; brain = Claude
API server-side; engine isolated in engine/. Inventory + doctrine:
[SETUP §Stack](SETUP.md#stack).

## Equipment & stage-gated tooling
Reference: [SETUP §Staged](SETUP.md#staged--turns-on-when-its-stage-opens).
Never stockpile — add tools only when their stage opens.
