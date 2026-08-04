---
type: spec
id: cloud-git-identity
title: The cloud seat gains a git-identity step
status: draft
stage: workshop
branch: docs/cloud-git-identity
opened: 2026-08-04
---

# cloud-git-identity — the third seat joins the one-time list

**Links:** [machine-setup](../../skills/machine-setup.md) (the file
this bench edits) · source:
[flight 1's first push](../history/workshop/mechanism/flight-1-probe.md)
and its [IDEAS line](../../IDEAS.md).

LANE B of FLIGHT 2 — see [§The fleet law](#the-fleet-law-for-flight-2)
below. This bench is real cargo; the flight around it is the test.

## Goal

[machine-setup](../../skills/machine-setup.md)'s one-time list has a
git-identity step, and it covers TWO SEATS: the work PC, where the
company identity is global and the personal one is repo-local, and
the home PC, where it is global. A cloud seat is neither. It starts
as `Claude <noreply@anthropic.com>`, and flight 1's cockpit learned
this the way it is always learned — its very first push was rejected
outright, for email privacy, when it carried the founder's real
address.

The gap is that the list is written per-machine for machines the
founder physically sits at, and the cloud seat is a machine nobody
sits at. It needs its own step: what identity a cloud seat sets,
when it sets it, and why the obvious value is the wrong one.

## Out of scope

- The separate question of giving lanes their OWN bot identity so PR
  comments stop posting as the founder's account. That is a distinct
  IDEAS line and a different decision; this bench only makes the
  existing identity reachable from a cloud seat.
- Any other one-time step, and the whole of the rest of
  [machine-setup](../../skills/machine-setup.md).
- Every other file in the repo. → [§The fleet law](#the-fleet-law-for-flight-2)

## The fleet law for flight 2

Flight 2 flies THREE cloud lanes at once. Its purpose is to exercise
the fleet path — concurrent lanes, [land](../../skills/land.md) MODE
P fencing them, and the grounded-fleet resume at the founder's next
sit-down — which has been designed and audit-repaired but never
flown. The fleet holds only if no two lanes can collide:

- **This lane touches EXACTLY TWO FILES**:
  `docs/skills/machine-setup.md` and its own bench memory
  `docs/memory/cloud-git-identity.md`. Nothing else, on any branch,
  for any reason.
- **It never writes main's surfaces** — no
  [DASHBOARD](../../DASHBOARD.md), no [IDEAS](../../IDEAS.md), no
  [ROADMAP](../../ROADMAP.md), no `record/history/`, no
  [DECISIONS](../DECISIONS.md), no merge. The lane law's two
  absolute prohibitions
  ([LAWS §Parallel lanes](../../LAWS.md#parallel-lanes--cloud))
  bind here exactly as written.
- **It never touches a sibling's file.** Lane A holds
  `docs/skills/parallel-lanes.md`; lane C holds `docs/HOME.md`.
- **The IDEAS line this repair closes is closed at the GROUND**,
  after the weld, by the founder's seat — never by this lane.
- **The rituals are NOT special-cased for the test.** Any friction
  produced by running one exactly as written is a FINDING, recorded
  in this bench's memory rather than smoothed over.

## Plan

1. Wake on this pre-birthed bench, post the canary, wait for the ack
   with §Canary's matcher exactly as written.
2. THE LANE IS ITS OWN EVIDENCE. It is running on a cloud seat, so
   before editing anything it reads what its OWN identity actually
   is (`git config user.name`, `user.email`, and whether they are
   global or repo-local) and records the observed values in its
   memory. The step it writes must match the seat it is written
   from, not the seat the docs imagine.
3. Add the cloud seat to the one-time list's git-identity step, in
   the list's existing voice: what to set, where, and the failure it
   prevents. Name the rejection flight 1 hit, so the step reads as
   lived rather than defensive.
4. State the trap plainly: the founder's real address is the WRONG
   value here — a push carrying it is rejected for email privacy.
   The GitHub noreply address is the one that works.
5. Say WHEN the step runs. A cloud seat is born fresh every flight,
   so "one-time per machine" is the wrong frame for it — the honest
   framing is per-seat-birth, and if that makes the section heading
   inaccurate, say so in the memory as a finding rather than
   silently restructuring the file.
6. Run the verification loop, keep the diary at the four memory
   moments, push every commit, flip ready with a plain summary. The
   lane never merges.

## Done means

- [ ] [machine-setup](../../skills/machine-setup.md)'s git-identity
      step covers the CLOUD seat alongside the work PC and home PC.
- [ ] The step states the exact identity a cloud seat sets, and that
      the founder's real email address is the wrong value.
- [ ] The email-privacy rejection flight 1 hit is named as the lived
      failure the step prevents.
- [ ] The step says WHEN it runs for a seat that is born fresh each
      flight, rather than inheriting "one-time per machine" without
      comment.
- [ ] The identity values written were READ FROM THIS LANE'S OWN
      SEAT and recorded in the memory — not carried over from the
      docs or assumed.
- [ ] `git diff` for this branch touches exactly
      `docs/skills/machine-setup.md` and
      `docs/memory/cloud-git-identity.md`.
- [ ] `npm run check:links` passes and Actions is green on the
      PUSHED head.
- [ ] The PR is flipped ready with a plain summary; the lane has NOT
      merged it.
