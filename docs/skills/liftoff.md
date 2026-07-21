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
The away surface is the COCKPIT, born at §6 by the rung ladder
([D-047](../DECISIONS.md#d-047--2026-07--cloud-born-cockpit--the-cockpits-birth-vehicle-becomes-claude---cloud-list-native-on-every-device-the-automated-hidden-console-birth-is-liftoffs-primary-rung-the-routine-fire-demotes-to-fallback--summon-button-engine-amends-d-046-clause-3-upholds-the-lane-law))
— not spawned here. Backstop, until the clerk's staged retirement
([D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)):
if every §6 rung fails, `npm run fire:clerk` (API-fire, verified
2026-07-19 at the Shakedown Flight, A-checklist grades:
[clerk-autospawn](../specs/clerk-autospawn.md) ·
[shakedown-audit](../specs/shakedown-audit.md); the clerk session
itself verified 2026-07-17 —
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

Then THE COCKPIT BIRTH
([D-047](../DECISIONS.md#d-047--2026-07--cloud-born-cockpit--the-cockpits-birth-vehicle-becomes-claude---cloud-list-native-on-every-device-the-automated-hidden-console-birth-is-liftoffs-primary-rung-the-routine-fire-demotes-to-fallback--summon-button-engine-amends-d-046-clause-3-upholds-the-lane-law),
amending
[D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
clause 3): compose the flight plan FROM THE BOARD just painted —
three parts, plain sentences: in flight (each airborne lane +
url) · owed (every parked/held item + reason) · needs the
founder's word (every gate waiting) — and OPEN it with the
standing first line, verbatim on every cockpit birth:

> Before any act: verify your clone's HEAD equals origin/main's
> tip and your workspace contains nothing origin lacks;
> mismatch = report verbatim and STOP.

The full birth prompt = the cockpit charter master from
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
adopted VERBATIM, then this flight plan. Birth by the rung
ladder, evidence order (gate 0b, [D-047](../DECISIONS.md#d-047--2026-07--cloud-born-cockpit--the-cockpits-birth-vehicle-becomes-claude---cloud-list-native-on-every-device-the-automated-hidden-console-birth-is-liftoffs-primary-rung-the-routine-fire-demotes-to-fallback--summon-button-engine-amends-d-046-clause-3-upholds-the-lane-law)):

1. The automated hidden-console `--cloud` birth (PRIMARY):
   `claude --cloud "<birth prompt>"` fired from a hidden console
   hosting a winpty pty (Start-Process, output captured to file)
   — `--cloud` demands a real TTY and refuses every piped route
   (the harness shell, the `!` bang-prefix, redirected
   Start-Process — all refuse verbatim). The birth returns the
   session link; sessions born this way are list-native — they
   join the phone's Code-tab GENERAL session list.
2. Compose-and-hand: the ritual composes the full command; the
   founder pastes it into a plain terminal — nothing piped.
3. `npm run fire:cockpit -- "<birth prompt>"` (the routine fire
   — list-invisible, so never the plan; one cap-run, already
   counted in §2's budget; the staged summon button's engine).
4. The manual charter paste, retained verbatim: claude.ai/code
   (browser or the phone's Claude app) → new session on
   wsher0901/roam → paste the birth prompt.

Record the rung that birthed the cockpit + the returned session
URL for the §7 close line (the cockpit adds its own Sessions row
at its first repaint). A failed rung falls to the next with its
failure recorded in the close line — nothing silently parked.

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
