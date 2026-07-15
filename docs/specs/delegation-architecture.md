---
type: spec
id: delegation-architecture
title: Delegation architecture — the away-mode chooser + four pillars
status: in-progress
stage: workshop
branch: docs/delegation-architecture
opened: 2026-07-15
---
# delegation-architecture — Delegation architecture

**Links:**
[LAWS](../LAWS.md) ·
[parallel-lanes](../skills/parallel-lanes.md) ·
[liftoff](../skills/liftoff.md) ·
[go-remote](../skills/go-remote.md) ·
[machine-setup](../skills/machine-setup.md) ·
[SETUP](../SETUP.md) ·
[HOME](../HOME.md) ·
Decisions:
[D-032 — wake-lock amended here](../DECISIONS.md#d-032--2026-07--fleet-continuity--handoff-parks-every-local-lane-liftoff-respawns-parked-benches-wake-lock-parks-every-outcome-extends-the-d-020d-023-lane-law-upholds-d-009)
·
[D-009 — pacing law, upheld](../DECISIONS.md#d-009--2026-06--pacing-law-finish-first-flexible-cap)

## Goal

Make the away-mode chooser and its four pillars law: one variable per
fork decides local lane · handoff · go-remote · liftoff; go-remote is
a posture (parks nothing, closes nothing, keeps the baton — the
cockpit relocates to the founder's phone via Remote Control);
phone-reachable blocked lanes idle-wait instead of parking; cloud
lanes spawn via a GitHub-label-triggered routine (ad-hoc CLI spawn
stays banned); the eligibility gate reverts to hard disqualifiers with
fully-specified as the dispatch sort key under the daily routine
budget. One decide entry (D-041) + full ripple, one commit.

## Out of scope

- The maiden flight — proving the cloud route ladder — happens
  post-merge, after the one-time UI setup; it records the winning
  route.
- `handoff.md` — needs nothing (go-remote never runs it; ending from
  the phone runs ordinary handoff FULL unchanged).
- Any product code.

## Plan

Decide entry D-041 titled "Delegation architecture — the away-mode
chooser, go-remote tether, idle-wait, label-spawned cloud (amends
D-032's wake-lock and the dispatch law; upholds the baton law and
D-009)", plus the ripple in the same commit:

1. LAWS §Workflow — dispatch-law bullet → the chooser law; leaving-
   phrases bullet gains the go-remote trigger guard.
2. LAWS §Parallel lanes & cloud — timeout constants leave lane-law
   point 2; new idle-wait law after the park bullet; cloud-launch
   line → sanctioned routes.
3. parallel-lanes — §Canary sole home of the constants; §Wake-lock &
   parking amended (idle-wait); §Vehicles (RC-visibility); §Cloud
   spawn route ladder rewritten (Route 1 label-spawn · Route 2
   manual).
4. liftoff §2 (hard disqualifiers + sort + budget) · §4 (route
   ladder).
5. NEW skill go-remote — stub + procedure body.
6. machine-setup — RC auto-connect one-time + Verify + Notes.
7. SETUP — Cloud lane worker (routine) under once-and-done cloud.
8. HOME — delegation portrait + mermaid; Terms (go-remote/tether ·
   idle-wait · label-spawn; dispatch-law term updated); the two
   leaving narrations gain the third exit.
9. DECISIONS — the entry, links born resolving.

Then verify (below) · [ship](../skills/ship.md) to THE GATE — no
merge; founder approval follows external review in the Web chat.

## Done means

- [ ] LAWS: chooser law + go-remote trigger guard; idle-wait law;
      constants gone from lane-law point 2; cloud-launch line →
      sanctioned routes.
- [ ] parallel-lanes: §Canary the sole constants home; §Wake-lock
      idle-wait; §Vehicles RC-visibility; route ladder rewritten
      (Route 1 label-spawn).
- [ ] liftoff §2 hard disqualifiers + fully-specified sort + routine
      budget truncation; §4 route ladder.
- [ ] go-remote stub + body exist; stub NEVER runs handoff for its
      phrases.
- [ ] machine-setup + SETUP carry the RC and routine one-time setup.
- [ ] HOME: delegation portrait + rendering mermaid; three new Terms;
      both leaving narrations gain the go-remote exit.
- [ ] D-041 entry, links born resolving.
- [ ] Greps: "~10 min" absent from LAWS; "lane:cloud" present in
      parallel-lanes + liftoff + SETUP; "ad-hoc CLI spawn" present in
      LAWS; check:links green + full CI mirror green.

## Open questions

none — the maiden flight (route ladder winner) and the one-time UI
setup are founder actions surfaced post-merge.
