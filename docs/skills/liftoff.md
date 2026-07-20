---
type: skill-procedure
title: Liftoff
status: living
---
# Liftoff — hand the workshop to the cloud

Trigger: any take-it-to-the-cloud phrasing — "take it to the
cloud", "liftoff", "keep working while I'm out". From that phrase
on, ZERO founder approval is needed mid-ritual: the founder is
leaving. Cockpit only. Closes the session.

## 1 · FULL handoff first
Run handoff FULL — origin must be whole (work pushed, every local
lane parked by its step 1.5, memories rewritten, board repainted,
micro-PR merged) before anything spawns. Skip handoff §6 entirely —
no close report, no close-lock write; liftoff §7 is the only close.

Sources:
[handoff](handoff.md)

## 2 · Triage every open item
The current task, every lane just parked, every queued [P] task.
First the HARD DISQUALIFIERS — any one keeps it on the ground:

- secrets/.env exposure
- cloud-incompatible network or tooling needs
- file-collision with a flying sibling

Then SORT what survives: fully-specified first, needs-input after
(once flying they idle-wait for the founder's reply per the idle-wait
law). The daily routine budget truncates from the bottom (Max plan:
15 routine runs/day (confirmed; flat across Max tiers);
GitHub-triggered spawns count against it, and so does every API
fire — `fire:clerk` included
([clerk-autospawn](../specs/clerk-autospawn.md)) — but API fires
are INVISIBLE to `count:runs`, a label-event proxy): derive the
consumed count — `npm run count:runs` PLUS the fires performed
this sitting — and truncate the sorted tail at the remaining
number; if the script fails, say so and ask the founder for the
remaining number — never guess (derivation law). A truncated
item → held with its reason.
A parked lane that passes: respawn on its SAME branch in cloud —
adopt, no second birth (parallel-lanes §Respawn).

Sources:
[parallel-lanes §Respawn](parallel-lanes.md#respawn-on-an-existing-bench-liftoff-adopt)
[idle-wait law — LAWS §Parallel lanes & cloud](../LAWS.md#parallel-lanes--cloud)

## 3 · Bench-first birth
Every triaged item not yet birthed gets the full birth — held items
need a memory to hold their status too: branch · spec if discussed
· memory stub · draft PR · verified on origin.

Sources:
[parallel-lanes](parallel-lanes.md)

## 4 · Spawn
Dispatch each eligible lane — fresh births and respawns alike —
cloud-side via the route ladder; route 1 (label-spawn) is one command
per lane: `gh pr edit <N> --add-label lane:cloud`.
One conditional step: spawn the clerk if it isn't already up —
the away surface should be up before the founder walks away.
Primary: `npm run fire:clerk` (API-fire, verified 2026-07-19 at
the Shakedown Flight, A-checklist grades:
[clerk-autospawn](../specs/clerk-autospawn.md) ·
[shakedown-audit](../specs/shakedown-audit.md)); record the
returned session URL in the flight-plan repaint (§6). Fallback,
retained verbatim: the manual charter paste — claude.ai/code
(browser or the phone's Claude app) → new session on
wsher0901/roam → paste the charter master from
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
(the clerk session itself verified 2026-07-17 —
[cloud-clerk](../specs/cloud-clerk.md)).

Sources:
[route ladder](parallel-lanes.md#cloud-spawn--route-ladder)

## 5 · Handshake-verify each
- Canary arrives → write "airborne · <url>" into its memory (for a
  respawn, this overwrites the parked Status).
- Fail or timeout → write "cloud spawn failed <date> — <reason> →
  parked" into its memory + the board's Sessions rows (+ Needs-you
  mirror) per [handoff §4](handoff.md).
- Ineligible → write "held: needs local — <reason>" into its memory
  + those same board rows.

Nothing is ever silently parked without its reason on record.

Sources:
[dispatch law — LAWS §Workflow](../LAWS.md#workflow-non-negotiable)

## 6 · Ledger handoff
Repaint DASHBOARD per [handoff §4](handoff.md) — the Sessions
table IS the flight plan: every airborne lane with its url, every
abort and hold with its reason in Your move / State.
Ship the micro-PR (board + any IDEAS harvest).

Sources:
[DASHBOARD](../DASHBOARD.md)

## 7 · Close
Report "N airborne, M parked — safe to walk away." Then, as the
ritual's LAST act, write `.claude/session-closed` with content
"Closed at liftoff · ledger #<N> · <date> · <seat>" — the
close-lock. End the session.
