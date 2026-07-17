---
type: spec
id: maiden-flight-report
title: Maiden flight report — block 2, the flight closed on paper
status: open
stage: workshop
branch: docs/maiden-flight-report
pr: 153
opened: 2026-07-16
shipped: —
---
# maiden-flight-report — block 2, the flight closed on paper

**Links:**
[D-041 — delegation architecture](../DECISIONS.md#d-041--2026-07--delegation-architecture--the-away-mode-chooser-go-remote-tether-idle-wait-label-spawned-cloud-amends-d-032s-wake-lock-and-the-dispatch-law-upholds-the-baton-law-and-d-009)
· [parallel-lanes §Cloud spawn](../skills/parallel-lanes.md#cloud-spawn--route-ladder)
· [SETUP §Staged](../SETUP.md#staged--turns-on-when-its-stage-opens) ·
[SETUP §cloud](../SETUP.md#once-and-done--cloud-accounts) ·
[leg A story](../history/workshop/mechanism/reviewer-subagent.md) ·
[leg B story](../history/workshop/definition/time-doctrine.md)

## Goal

Close the delegation maiden flight on paper: one decide (D-043 —
cloud ignition & away-command redesign, route ladder v2) plus an
explicit edit set that records the winning spawn recipe, fills the
maiden verify checklist, opens the "Answering a lane" mail-slot
doctrine, stages the two follow-on tasks (api-ignition ·
cloud-clerk), enforces the repo-settings drift found at preflight,
and silences the Vercel bot on docs-only pushes.

## Founder data points

Two attestations did NOT arrive with the kickoff paste — both ride
as "pending founder attest":

- (a) the routine's run-history count at claude.ai/code/routines
  (expect 1);
- (b) whether the `BLOCKED:`/completion @mentions buzzed the
  phone's GitHub app.

## The edit set (the contract)

1. [parallel-lanes §Cloud spawn](../skills/parallel-lanes.md#cloud-spawn--route-ladder)
   — "Winning route: unrecorded" replaced by the recipe of record
   (ready-flip, then label; drafts filtered; dated three-point
   evidence) and the maiden verify checklist filled item-by-item;
   wake-lock redelivery note added.
2. parallel-lanes — new subsection "Answering a lane" (the mail
   slot): lanes speak and listen only through their PR; the
   founder's hands never need GitHub; never type into a session
   window; reply-ack window governs silence.
3. [DECISIONS](../DECISIONS.md) — D-043 appended, Affects matching
   the ripple commit's name-only diff.
4. SETUP §Staged — two lines: api-ignition (route 1b) ·
   cloud-clerk; each "adopt at first need, verify-before-rely."
5. SETUP §cloud accounts — one sentence: routine-born sessions
   appear under the routine's run history, not the main sessions
   list.
6. Repo settings enforcement (action): PATCH squash-only +
   branch-auto-delete via gh api; GET to verify; one SETUP line
   (preflight drift found 07-16, fixed and enforced).
7. Vercel bot silence: docs-only build skip (mechanism verified
   against current Vercel docs before applying — ignored build
   step via vercel.json); app PRs keep previews; one SETUP line.
8. [TEMPLATE](../memory/TEMPLATE.md) — one sentence: whenever
   Status is stamped, refresh the frontmatter `updated:` line too.
9. [specs README](README.md) — one line: verbatim quoted doc text
   inside specs goes in a top-level fence (check:links resolves
   links from the spec's path).
10. [IDEAS](../IDEAS.md) — seven dated lines (permission-guard
    hooks · Agent View/supervisor-backed local lanes ·
    cloud-session hygiene · check:memory lint · doorbell mirror ·
    separate bot identity · missing-local-main anomaly watch).
11. IDEAS — double-dispatch diagnostic gains its resolution
    evidence (live redelivery 21:57, wake-lock held) for the
    founder to downgrade or close at next review.
12. This task's memory Story narrates the full flight arc,
    including the unplanned crash-resilience pass and the
    phantom-event catch.

## Out of scope

- Implementing route 1b (the routine's API trigger) or the cloud
  clerk — both staged in SETUP, adopt at first need.
- Wiring the reviewer subagent into ship.md — its own follow-up
  task.
- Board edits outside the ritual tail; the tail (post-weld)
  processes the attestations and closes the flight on the board.

## Done means

- [x] "ready-flip, then label" is the recipe of record in
      parallel-lanes §Cloud spawn; "Winning route: unrecorded" is
      gone; the three-point evidence is dated.
- [x] The maiden verify checklist is filled item-by-item with the
      verdicts of record (1 ✓ ready-only · 2 ✓ 90s canary · 3 ✓ ·
      4 ✓ in-window resume · 5 partial → clerk test · 6 our side ✓
      + provider pending attest · 7 deferred → clerk).
- [x] "Answering a lane" exists in parallel-lanes.
- [x] D-043 in DECISIONS; its Affects matches the ripple commit's
      name-only diff.
- [x] SETUP: both staged lines · the run-history sentence · the
      repo-settings enforcement line · the Vercel skip line.
- [x] `gh api` GET shows squash-only true, merge-commit + rebase
      false, branch auto-delete true.
- [x] vercel.json docs-only skip in place, mechanism verified
      against current Vercel docs first.
- [x] TEMPLATE sentence + specs-README line landed.
- [x] IDEAS: seven dated lines + the double-dispatch resolution
      append.
- [x] Memory Story complete; both attestations marked pending
      founder attest.
- [ ] check:links · check:ledger · full CI mirror green; the
      pushed commit's Actions run green.
- [ ] Ship runs to THE GATE and STOPS — merge only on the
      founder's word after external Web review.
