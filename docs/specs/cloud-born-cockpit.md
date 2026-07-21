---
type: spec
id: cloud-born-cockpit
title: Cloud-born cockpit — liftoff births the cockpit via claude --cloud (D-047)
status: open
stage: workshop
branch: docs/cloud-born-cockpit
pr: TBD
opened: 2026-07-21
---

# cloud-born-cockpit — the cockpit's birth vehicle becomes `claude --cloud`

**Links:** [DECISIONS](../DECISIONS.md) ·
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts) ·
[liftoff](../skills/liftoff.md) ·
[parallel-lanes](../skills/parallel-lanes.md) · precedent:
[flight-cockpit](flight-cockpit.md) (D-046, whose clause 3 this
amends) · evidence base: cockpit maiden flights 1–2
([#177](https://github.com/wsher0901/roam/pull/177) ·
[#180](https://github.com/wsher0901/roam/pull/180))

## Goal

One decide (D-047, amending
[D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
clause 3) and its wiring, one theme: the cockpit's birth vehicle
becomes `claude --cloud` — list-native on every device — and the
routine fire (fire:cockpit / fire.mjs) drops to the fallback rung,
remaining the engine of the staged summon button. Evidence over
docs: maiden flights 1–2 proved routine-born sessions never join
the mobile GENERAL session list; the founder's command surface
must be list-native. Founder-mandated 2026-07-21, kickoff
verbatim in [the memory](../memory/cloud-born-cockpit.md).

## Step 0 — three gates (all must pass or STOP and report)

Context for rigor: this vehicle's ancestor (`--remote`)
bundle-seeded sandboxes and destroyed batch-1 T3+T5 at the
[D-020](../DECISIONS.md#d-020--2026-07--parallel-lanes-v2-native-lanes-replace-hand-built-orchestration)
turn; the gates prove the reform by evidence, not docs.

- **0a Flight + track check** — the board shows no cockpit in
  flight (flight 2 landed,
  [#180](https://github.com/wsher0901/roam/pull/180) resolved by
  the founder's word); origin heads = main only. Otherwise STOP —
  the founder finishes the flight first.
- **0b Seed-provenance + branch-create probe** — one throwaway
  UNPUSHED local commit adds `docs/.probe-marker`; then
  `claude --cloud "<probe prompt>"` must create a cloud session
  and RETURN with a session URL (if it blocks interactively: kill
  it, record a gate finding). PASS = the probe reports origin
  main's tip SHA and marker ABSENT (clone-from-GitHub proven — the
  bundle ghost dead by evidence) AND its `chore/cloud-probe` push
  succeeds (non-claude branch creation proven for THIS session
  type). Cleanup: reset the marker commit locally; delete
  `chore/cloud-probe` from origin (founder-seat push --delete —
  cloud sessions cannot delete, the C7 rail).
- **0c Phone list check** — the founder checks his PHONE
  mid-probe: the probe session must appear in the mobile app's
  Code-tab GENERAL session list; his answer recorded verbatim in
  the memory. If absent: STOP — the premise of this amendment is
  false.

## Out of scope

- Lane dispatch rules — the lane law's "never an ad-hoc CLI
  spawn" still governs LANE dispatch; this route is
  liftoff-sanctioned for the away surface, run inside the ritual
  after FULL handoff.
- Building the summon button — the routine + fire.mjs remain its
  staged engine, untouched here beyond the fallback-rung
  annotation.
- Deleting or editing the cockpit routine itself — it demotes on
  paper; the box re-save is a founder manual act post-weld
  (box-is-a-copy).
- The founder manual acts after the weld: re-save the cockpit
  routine box from the updated charter master · add the `gh`
  install to the roam cloud environment's setup script
  (claude.ai/code settings → Environments; flight-1 finding:
  absent) · the home seat's credential paste (unchanged, still
  owed).
- Merging — tower-authored: external Web review precedes the
  founder's word. Rides to THE GATE and holds.

## Plan

1. Gates 0a → 0b → 0c; probe outputs recorded verbatim in the
   memory; any failure STOPS the bench with a report.
2. DECIDE — append D-047 in house style (text fixed by the
   kickoff): cloud-born cockpit; fire demotes to fallback rung +
   summon-button engine; amends D-046 clause 3; upholds the lane
   law; evidence maiden flights 1–2.
3. [liftoff §6](../skills/liftoff.md) — primary birth becomes
   `claude --cloud "<adopt the cockpit charter master from
   SETUP §cloud accounts VERBATIM, then this flight plan:
   …composed from the board…>"`; `fire:cockpit` becomes fallback
   rung 2; the manual charter paste stays rung 3, retained
   verbatim.
4. [SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
   — the cockpit recipe documents the `--cloud` birth (exact
   command shape); the routine's section annotated "fallback +
   summon-button engine (D-047)"; the charter master's born-at
   clause gains "liftoff's `--cloud` birth" (BOX RE-SAVE rides
   the manual acts); environment note: the roam cloud
   environment's setup script must install `gh`.
5. Verification + THE GATE (below).

## Files touched (nothing outside)

`docs/DECISIONS.md` · `docs/skills/liftoff.md` · `docs/SETUP.md` ·
`docs/specs/cloud-born-cockpit.md` ·
`docs/memory/cloud-born-cockpit.md` · DASHBOARD via the ship tail.

## Done-means

- Gates 0a/0b/0c PASSED, probe outputs verbatim in the memory.
- D-047 appended, house style, amends D-046 clause 3.
- Grep-verifiable: liftoff §6's primary path carries `--cloud`
  and not the fire; the fire present only as fallback.
- SETUP recipe shows the exact `--cloud` command shape; routine
  annotated; charter born-at clause updated; `gh` environment
  note present.
- check:links · check:ledger · check:memory green; full CI
  mirror + the pushed commit's Actions run green.
- Ready-flip + plain summary at THE GATE — DO NOT MERGE;
  external Web review (tower-authored) precedes the founder's
  word.
