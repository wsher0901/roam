---
type: memory
id: delegation-architecture
updated: 2026-07-15 · birth · work PC
---
# delegation-architecture — Delegation architecture

## Status
complete, awaiting merge — the D-041 entry + full ripple are on origin
in one commit ([PR #136](https://github.com/wsher0901/roam/pull/136)).
Local CI mirror green; all verification greps pass; the PR is flipped
ready and sits at THE GATE. Not merged: founder approval follows
external review in the Web chat.

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
  self-contradict. Noted in the PR.

## Left / idle
Nothing before merge. On the founder's yes (after Web review): the
atomic weld — no ROADMAP tick (workshop task), git mv this memory to
history/workshop/mechanism/ (this defines new rituals/machinery — what
the workshop does), spec frontmatter → shipped, ledger line,
squash-merge. Then the two post-merge founder actions land as Needs-you
at the ship-tail repaint (the one-time UI setup + the maiden flight).

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
(rejected: keeping park-on-block everywhere). Recorded as D-041.

## Where to look
Spec: [delegation-architecture](../specs/delegation-architecture.md) ·
the new skill: [go-remote](../skills/go-remote.md) · the decision:
D-041 (this task's entry) · the amended law:
[D-032](../DECISIONS.md#d-032--2026-07--fleet-continuity--handoff-parks-every-local-lane-liftoff-respawns-parked-benches-wake-lock-parks-every-outcome-extends-the-d-020d-023-lane-law-upholds-d-009).
