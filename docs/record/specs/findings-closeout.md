---
type: spec
id: findings-closeout
title: The findings close-out — every flight and fleet line closed or reasoned
status: open
stage: workshop
branch: fix/findings-closeout
pr: —
opened: 2026-08-06
shipped: —
---

# findings-closeout — closing what four flights and a fleet found

**Links:** D-079 (the campaign's advance word) ·
[LAWS](../../LAWS.md) · [ship](../../skills/ship.md) ·
[parallel-lanes](../../skills/parallel-lanes.md) ·
[SETUP](../../SETUP.md) · [IDEAS](../../IDEAS.md)

## Goal

Step 3 of the closing campaign. Every OPEN inbox line born of the
four flights, the seven-lane fleet and phase 2 **either closes now
with its patch in the home the routing law names, or stays open
carrying a one-clause standing reason.** No line born of that work
is left silent.

## Out of scope — and these are the campaign's own STOPs

- **Any box master's fenced text.** [COCKPIT-CHARTER](../../COCKPIT-CHARTER.md),
  [LANE-WORKER](../../LANE-WORKER.md),
  [WEB-INSTRUCTIONS](../../WEB-INSTRUCTIONS.md). Several lines route
  there; every one stays open naming the fence as its reason.
- **Any behavioral change.** A patch that alters what a ritual or a
  script DOES, rather than what it says, is out — including every
  new CI gate.
- **Any new decision** beyond the campaign's mandate.

## What was placed, and where

Nine patches, each in the home the routing law names, **masters
avoided wherever a lawful non-master home existed**:

| Patch | Home |
|---|---|
| the gate-window board repaint | [ship §6](../../skills/ship.md#6--the-gate) |
| THE ENUMERATION LAW | [LAWS §Knowledge & tracking](../../LAWS.md#knowledge--tracking), beside the sweep law |
| the gate-momentum seat rule | [ship](../../skills/ship.md#7--on-approval--the-atomic-weld) |
| resurrection-by-surviving-home | [parallel-lanes §Cloud spawn](../../skills/parallel-lanes.md#cloud-spawn--route-ladder) |
| the lane stand-down DUTY | [§Wake-lock](../../skills/parallel-lanes.md#wake-lock--parking) — **not** the master |
| the cap model, one sentence | [SETUP §cloud accounts](../../SETUP.md#once-and-done--cloud-accounts) |
| the summon one-liner | [SETUP §cloud accounts](../../SETUP.md#once-and-done--cloud-accounts) |
| fleet-scale rules (pre-staged acks · runner contention) | [§Cloud spawn](../../skills/parallel-lanes.md#cloud-spawn--route-ladder) |
| the PR-comments-read duty | [§Answering a lane](../../skills/parallel-lanes.md#answering-a-lane-the-mail-slot) |

**ONE ROUTING CORRECTION, made rather than followed blindly.** The
mandate placed resurrection-by-surviving-home in LAWS. The
resurrection rule's actual home is
[§Cloud spawn](../../skills/parallel-lanes.md#cloud-spawn--route-ladder)
— [land](../../skills/land.md) cites it there as the source, and
LAWS never carried it. The mandate's own instruction is "placed per
routing"; routing sent it to parallel-lanes.

## Done means

- [ ] Nine patches landed in the homes above; no box master edited.
- [ ] Every closed line moved to IDEAS' CLOSED section carrying the
      home that received it, never deleted.
- [ ] **Every remaining OPEN line born of the flights, the fleet or
      phase 2 carries a `STANDING:` clause** — proved by a grep
      returning zero unannotated, recorded in the memory.
- [ ] The verification loop is green and the PUSHED head's Actions
      run is green.

## Notes for whoever resumes this bench

The standing reasons are the deliverable as much as the patches. A
line that stays open without one is indistinguishable from a line
nobody read.
