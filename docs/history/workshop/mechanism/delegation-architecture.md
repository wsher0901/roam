---
type: history
slug: delegation-architecture
shipped: 2026-07-15 14:39
pr: 136
---
# delegation-architecture — Delegation architecture

## Status
Shipped — merged as
[PR #136](https://github.com/wsher0901/roam/pull/136) on the founder's
word. Every gate on the way out waited on the pushed commit's Actions
run going green
([D-038](../../../DECISIONS.md#d-038--2026-07--ci-is-the-arbiter--actions-green-required-at-every-gate-local-gate-mirrors-all-six-ci-steps-d-anchors-born-resolving-upholds-d-027)).

## What this task is
THE delegation decide, reserved across the last five kickoffs. It
makes the away-mode chooser law: one variable per fork — at keyboard →
local lane; leaving + nothing continues → handoff; leaving + continues
+ machine on → go-remote (a posture that tethers the cockpit to the
founder's phone via Remote Control, parking nothing and keeping the
baton); leaving + continues + machine dark → liftoff (cloud). Blocked
lanes on phone-reachable vehicles idle-wait for the founder's reply
instead of parking. Cloud lanes spawn via a GitHub-label-triggered
routine; ad-hoc CLI spawn stays banned. The eligibility gate reverts
to hard disqualifiers with fully-specified as the dispatch sort key
under the daily routine budget. One D (D-041) + full ripple across
LAWS, parallel-lanes, liftoff, a new go-remote skill, machine-setup,
SETUP, HOME, DECISIONS — one commit. Out of scope: the maiden flight
(post-merge, post-UI-setup), handoff.md, product code.

## Pending issues
- Two founder actions land post-merge, surfaced at the ship-tail
  repaint as Needs-you: (1) the one-time UI setup — create the cloud
  lane-worker routine, install the Claude GitHub App on the repo,
  enable unrestricted branch pushes, turn on Remote Control
  auto-connect + push toggles; (2) the maiden flight that records the
  route ladder's winning route.
- One consistency touch beyond the literal HOME ripple list: the
  §Lanes "Dispatch" paragraph described the OLD eligibility gate
  (fully-specified as a bar). Since D-041 makes fully-specified a sort
  key and the gate hard disqualifiers, that paragraph — the immediate
  neighbor of the new portrait — was realigned so HOME does not
  self-contradict.

## Left / idle
Nothing parked. Post-merge, the two founder actions above land as
Needs-you at the ship-tail repaint.

## The story
Born this session from the kickoff — the capstone of the day's
currency run. The last five kickoffs each carved out "reserved for the
delegation decide" (the go-remote portrait, the tether, idle-wait, the
eligibility gate, cloud-launch, canary timeout constants); this task
spends that reservation. The core insight: away-mode is one variable
per fork, not a pile of rituals — and go-remote is a POSTURE, not a
third leaving ritual, so the baton law survives unamended (rejected: a
third leaving ritual). Cloud spawn moves to a zero-secret
GitHub-label routine rather than /fire API bearer-token wiring
(rejected: a token on two machines vs a label that is also
phone-drivable). Park-on-block softens to idle-wait only where a phone
can reach the lane, and D-032's recording guarantee is preserved
(rejected: keeping park-on-block everywhere). Recorded as
[D-041](../../../DECISIONS.md#d-041--2026-07--delegation-architecture--the-away-mode-chooser-go-remote-tether-idle-wait-label-spawned-cloud-amends-d-032s-wake-lock-and-the-dispatch-law-upholds-the-baton-law-and-d-009).

## Where to look
Spec:
[delegation-architecture](../../../specs/delegation-architecture.md) ·
the new skill: [go-remote](../../../skills/go-remote.md) · the
decision:
[D-041](../../../DECISIONS.md#d-041--2026-07--delegation-architecture--the-away-mode-chooser-go-remote-tether-idle-wait-label-spawned-cloud-amends-d-032s-wake-lock-and-the-dispatch-law-upholds-the-baton-law-and-d-009)
· the amended law:
[D-032](../../../DECISIONS.md#d-032--2026-07--fleet-continuity--handoff-parks-every-local-lane-liftoff-respawns-parked-benches-wake-lock-parks-every-outcome-extends-the-d-020d-023-lane-law-upholds-d-009).
