---
type: history
slug: clerk-notify
shipped: 2026-07-17 16:16
pr: 163
---

# clerk-notify — the clerk's standing watch

## Status

Shipped — merged as
[#163](https://github.com/wsher0901/roam/pull/163), after external
Web review per the Shakedown Flight rule, ahead of its stacked
sibling [#164](https://github.com/wsher0901/roam/pull/164). The
N-checklist (N1–N6) grades at the flight.

## What this task is

Execute the staged clerk-notify line
([SETUP §Staged](../../../SETUP.md#staged--turns-on-when-its-stage-opens)):
charter v2 — the clerk gains duty 6, the standing watch, so lane
events (`BLOCKED:` comments · completions/ready-flips · CI red on
main) reach the founder's phone as turn-end announcements. Plus the
answering-a-lane watcher line (in verification), the two dated
IDEAS lines, and the spec's N-checklist + open watch-mechanic
question. Contract: [the spec](../../../specs/clerk-notify.md). Runs to
THE GATE only — DO NOT MERGE; external Web review precedes the
merge word.

## Pending issues

- The watch mechanic is an open implementation question — recorded
  in the spec for the flight's live prototyping, not solved here.
- The N-checklist (N1–N6) grades at the Shakedown Flight, after
  this PR merges.

## Left / idle

nothing on this bench — the N-checklist grades at the flight,
after the merge; the answering-a-lane watcher line un-verifies
("in verification") until the flight audit greens it.

## The story

Born 2026-07-17 from the founder's Shakedown Flight phase-1 paste
("two benches, one paste — the watch and the ignition"). Sibling
bench: clerk-autospawn
([#164](https://github.com/wsher0901/roam/pull/164)), which
branches after this bench's charter edit so the charter master
stays single-homed in SETUP §cloud accounts — its spec file lives
only on its own branch until it merges, so this file links the PR,
not the path.

Built by the cockpit in one sitting (2026-07-17, 15:38–15:50):
duty 6 appended verbatim from the founder's paste; the staged
clerk-notify line flipped to in-verification per the cloud-clerk
precedent (declared in the spec's Plan — executing a staged line
moves it); the watcher line into the answering-a-lane mail slot;
and the IDEAS pair — the doorbell-mirror line rewritten SUPERSEDED
(the clerk's turn-end announcements are the doorbell now) and the
reviewer agent-type registration failure graduated to a DEFECT
line on its second recurrence (first: the ship-wiring maiden run's
delivery finding chain; second: the cloud-clerk ship §6 this
afternoon, where the Agent tool reported 'reviewer' not found and
the synchronous general-purpose fallback carried the review).

One mechanical call: the sibling's spec file cannot be linked by
path from this branch (it does not exist here, and would 404 on
main between the two merges) — sibling references link the PR
instead; the path weave arrives with the sibling's own merge.

## Where to look

- Spec: [clerk-notify](../../../specs/clerk-notify.md)
- Charter master (duty 6 lands here):
  [SETUP §cloud accounts](../../../SETUP.md#once-and-done--cloud-accounts)
- Watcher line:
  [parallel-lanes §Answering a lane](../../../skills/parallel-lanes.md#answering-a-lane-the-mail-slot)
- Predecessor story:
  [cloud-clerk](../../../history/workshop/mechanism/cloud-clerk.md)
