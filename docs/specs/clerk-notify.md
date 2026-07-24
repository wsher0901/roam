---
type: spec
id: clerk-notify
title: Clerk-notify — the clerk's standing watch
status: shipped
stage: workshop
branch: docs/clerk-notify
pr: 163
opened: 2026-07-17
shipped: 2026-07-17 16:16
---

# clerk-notify — the clerk's standing watch

> **SUPERSESSION NOTE — added 2026-07-23.** The clerk was RETIRED
> 2026-07-22 and its routine deleted
> ([D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock),
> executed by [#197](https://github.com/wsher0901/roam/pull/197)),
> so the standing watch described below can no longer be armed.
> What duty 6 proved lives on: it is the ancestor of the cockpit
> charter's turn-end report — the report IS the notification
> ([SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)).
> Everything below is RECORD, not instruction.

**Links:**
[SETUP §Staged](../SETUP.md#staged--turns-on-when-its-stage-opens)
· [SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
·
[parallel-lanes §Answering a lane](../skills/parallel-lanes.md#answering-a-lane-the-mail-slot)
·
[D-043](../DECISIONS.md#d-043--2026-07--cloud-ignition--away-command-redesign--route-ladder-v2-ready-flip-then-label-is-the-recipe-of-record-api-ignition-and-the-cloud-clerk-staged-the-claude-app-the-single-away-surface-amends-d-041-upholds-the-lane-law-and-the-wake-lock)
· [cloud-clerk story](../history/workshop/mechanism/cloud-clerk.md)
· sibling bench:
[clerk-autospawn — #164](https://github.com/wsher0901/roam/pull/164)
(file link lands when the sibling merges — it does not exist on
this branch by construction)

## Goal

Execute the staged clerk-notify line — first need named by the
founder 2026-07-17: the Shakedown Flight, phase 1. The clerk
charter gains duty 6 (the standing watch): on "arm the watch" the
clerk watches origin and this repo's open PRs for `BLOCKED:`
comments, lane completions/ready-flips, and CI red on main, and
announces each event via a turn-end message — the turn-end IS the
notification, so the app's push is the doorbell. Deliverables:
charter v2 (duty 6 appended to the master; the clerk-autospawn
routine box copies this master), the answering-a-lane watcher line
(in verification), the two dated IDEAS lines, and this spec's
N-checklist + open watch-mechanic question.

## Out of scope

- clerk-autospawn — the sibling bench, same paste, own branch and
  PR ([#164](https://github.com/wsher0901/roam/pull/164)).
  File-disjoint except `docs/SETUP.md` §cloud accounts: the
  sibling branches after this bench's charter edit so the master
  stays single-homed.
- Implementing the watch mechanic — the cloud session prototypes
  it live at the flight; this bench records the question and
  constraints only (§Open questions).
- Merging — external Web review precedes the merge word (founder
  instruction with the kickoff paste, 2026-07-17). This bench rides
  to THE GATE and holds.

## The N-checklist (graded at the flight)

Founder-run at the Shakedown Flight, after this PR merges; results
recorded in this bench's memory. The answering-a-lane watcher line
stays "in verification" until this checklist greens at the flight
audit.

- [ ] N1 — the watch survives ≥60–120 min; the mechanic that
      worked is recorded (see §Open questions).
      — survival EVIDENCED from the live record (armed at the
      07-17 liftoff, announced the phase-2 landing hours later);
      the mechanic + timings await the clerk's self-report —
      pending founder attest
      ([shakedown-audit](shakedown-audit.md)).
- [x] N2 — the announcement fires on a real event.
      — graded 2026-07-19 ([shakedown-audit](shakedown-audit.md)):
      fired on the real phase-2 landing, 2026-07-17 — the flight's
      record rides the audit story to history/ at its weld.
- [x] N3 — the push reaches the founder's phone.
      — graded 2026-07-19: the 07-17 relay is on record — the
      landing announcements reached the founder's phone
      ([shakedown-audit](shakedown-audit.md)).
- [ ] N4 — a founder message re-arms the watch.
      — pending founder attest (clerk self-report, asked at the
      [shakedown-audit](shakedown-audit.md) gate).
- [ ] N5 — usage per watch-hour recorded.
      — pending founder attest (clerk self-report).
- [ ] N6 — side-measure: does an active watch prevent environment
      reclaim (the counterpart of the cloud-clerk maiden's C5
      reclaim datum —
      [story](../history/workshop/mechanism/cloud-clerk.md)).
      — pending founder attest (clerk self-report: whether the
      armed watch prevented reclaim across the 07-17 sitting).

## Plan

1. Bench birth: branch · this spec · memory stub · draft PR.
2. Charter v2 — duty 6 appended verbatim (founder's text) to the
   clerk charter master in
   [SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts).
3. [SETUP §Staged](../SETUP.md#staged--turns-on-when-its-stage-opens)
   — the clerk-notify line flips "at first need" → "in
   verification", linking this bench (the cloud-clerk precedent:
   executing a staged line moves it to in-verification).
4. [parallel-lanes §Answering a lane](../skills/parallel-lanes.md#answering-a-lane-the-mail-slot)
   — one line: the clerk can be armed as a watcher; its
   announcements are the notification channel (in verification
   until the N-checklist greens at the flight audit).
5. [IDEAS](../IDEAS.md) — two dated lines: the doorbell-mirror
   line rewritten superseded-by-clerk-notify; a NEW defect line
   for the reviewer agent-type registration failure (second
   recurrence 2026-07-17).
6. CI mirror green · ship §6 critic (synchronous fallback lawful)
   · ready-flip → THE GATE. DO NOT MERGE.

## Done means

- [x] Duty 6 (watch duty) appended verbatim to the clerk charter
      master — charter v2.
- [x] This spec carries the N-checklist and the open
      watch-mechanic question.
- [x] SETUP §Staged's clerk-notify line reads "in verification"
      and links this bench.
- [x] parallel-lanes §Answering a lane names the clerk-as-watcher
      (in verification).
- [x] IDEAS carries both dated lines.
- [x] Full CI mirror green; the pushed commit's Actions run green.
      (Ticked 2026-07-20, a retroactivity repair — the box should
      have flipped at #163's 2026-07-17 weld, which landed green;
      found and repaired at the shakedown-audit weld.)

The N-checklist is deliberately NOT a Done-means item — it grades
at the flight, after the merge.

## Open questions

THE WATCH MECHANIC — recorded here for the flight; Code prototypes
and documents it live in the cloud session (verify-before-rely):

- Poll cadence ~5 min against origin (fetch + open-PR read + main
  CI status).
- Vehicle unknown: a long-running command vs chained sleeps vs
  whatever the cloud sandbox permits — record what actually works
  and any timeout behavior observed.
- Interaction with reclaim: the cloud-clerk maiden's C5 showed the
  idle environment IS reclaimed (and auto-revived on open); N6
  measures whether an ACTIVE watch prevents reclaim, which decides
  whether the watch survives by staying busy or by riding the
  revive.

## Verification

- grep `Watch duty` → duty 6 inside the charter master box in
  `docs/SETUP.md`.
- grep `armed as a watcher` → the answering-a-lane line in
  `docs/skills/parallel-lanes.md`.
- grep `superseded` + `clerk-notify` → the rewritten
  doorbell-mirror line in `docs/IDEAS.md`.
- grep `reviewer` + `defect` → the new defect line in
  `docs/IDEAS.md`.
- grep `N1|N2|N3|N4|N5|N6` → all six present in this spec.

## Deviations

none yet.
