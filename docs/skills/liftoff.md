---
type: skill-procedure
title: Liftoff
status: living
---
# Liftoff — hand the workshop to the cloud

Trigger: any take-it-to-the-cloud phrasing — "take it to the
cloud", "liftoff", "keep working while I'm out". From that phrase
on, ZERO founder approval is needed mid-ritual: the founder is
leaving. Control tower only. Closes the session — and hands the
baton to the cockpit it fires (§6).

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
fire — `fire:cockpit` (one per outing, the accepted trade —
[D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock),
extending the A4-recorded trade) and `fire:clerk` alike
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
The away surface is the COCKPIT, fired at §6 with the flight plan
as its payload — not spawned here. Fallback ladder, until the
clerk's staged retirement
([D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)):
if the cockpit fire fails at §6, `npm run fire:clerk` (API-fire,
verified 2026-07-19 at the Shakedown Flight, A-checklist grades:
[clerk-autospawn](../specs/clerk-autospawn.md) ·
[shakedown-audit](../specs/shakedown-audit.md)); final fallback,
retained verbatim: the manual charter paste — claude.ai/code
(browser or the phone's Claude app) → new session on
wsher0901/roam → paste the relevant charter master from
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

## 6 · Ledger handoff & fire the cockpit
Repaint DASHBOARD per [handoff §4](handoff.md) — the Sessions
table IS the flight plan: every airborne lane with its url, every
abort and hold with its reason in Your move / State.
Ship the micro-PR (board + any IDEAS harvest).

Then THE COCKPIT FIRE
([D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)):
compose the flight plan FROM THE BOARD just painted — three
parts, plain sentences: in flight (each airborne lane + url) ·
owed (every parked/held item + reason) · needs the founder's word
(every gate waiting) — and fire the cockpit routine with it as
the payload: `npm run fire:cockpit -- "<flight plan>"`. The
founder never opens the routines page. One cap-run per outing —
the accepted trade, already counted in §2's budget. Record the
returned session URL for the §7 close line (the cockpit adds its
own Sessions row at its first repaint). Fire fails → fall back
per §4's ladder (fire:clerk · the manual paste) and record the
failure + fallback in the close line — nothing silently parked.

Sources:
[DASHBOARD](../DASHBOARD.md)
[Cockpit charter — SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)

## 7 · Close
Report "N airborne, M parked · cockpit <url or fallback> — safe
to walk away." Then, as the ritual's LAST act, write
`.claude/session-closed` with content "Closed at liftoff · ledger
#<N> · <date> · <seat>" — the close-lock. End the session. The
baton is now the cockpit's for the flight
([LAWS §Parallel lanes & cloud](../LAWS.md#parallel-lanes--cloud)).
