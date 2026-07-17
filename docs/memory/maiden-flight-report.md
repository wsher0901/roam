---
type: memory
id: maiden-flight-report
updated: 2026-07-16 · completion rewrite · home PC
---
# maiden-flight-report — block 2, the flight closed on paper

## Status
complete, awaiting merge — 2026-07-16 22:54. All contract items
landed; repo settings PATCHed and GET-verified; the Vercel skip
verified against current docs and tested on three real commits.
THE GATE waits on the founder's word AFTER external Web review —
ship stops at the announcement, per the kickoff brief.

## What this task is
The delegation maiden flight's second and final block: the flight
report. One decide —
[D-043](../DECISIONS.md#d-043--2026-07--cloud-ignition--away-command-redesign--route-ladder-v2-ready-flip-then-label-is-the-recipe-of-record-api-ignition-and-the-cloud-clerk-staged-the-claude-app-the-single-away-surface-amends-d-041-upholds-the-lane-law-and-the-wake-lock)
— plus the explicit edit set across
[parallel-lanes](../skills/parallel-lanes.md),
[DECISIONS](../DECISIONS.md), [SETUP](../SETUP.md),
[TEMPLATE](TEMPLATE.md), the [specs README](../specs/README.md),
and [IDEAS](../IDEAS.md); two enforcement actions (repo settings
PATCH · the Vercel docs-only build skip). Contract:
[the spec](../specs/maiden-flight-report.md).

## Pending issues
Two founder attestations, marked "pending founder attest" where
they land (the checklist in
[parallel-lanes §Cloud spawn](../skills/parallel-lanes.md#cloud-spawn--route-ladder),
the doorbell-mirror IDEAS line): (a) the routine's run-history
count at claude.ai/code/routines (expect 1); (b) whether the
`BLOCKED:`/completion @mentions buzzed the phone's GitHub app. The
ritual tail (post-weld) processes the attestations, clears the
WEB-INSTRUCTIONS Needs-you (attested at preflight), and closes the
flight on the board.

## Left / idle
Nothing in this task's scope. Staged for first need (in
[SETUP §Staged](../SETUP.md#staged--turns-on-when-its-stage-opens)):
api-ignition (route 1b) · cloud-clerk. Separate follow-up task:
wiring the reviewer subagent into ship.md.

## The story
Born 2026-07-16 22:44 from the founder's fully-specified brief,
minutes after leg A welded. The flight it closes:
[leg A — reviewer-subagent](../history/workshop/mechanism/reviewer-subagent.md)
(the first live cloud lane) ·
[leg B — time-doctrine](../history/workshop/definition/time-doctrine.md)
(the local control).

The finding that earned a decide: the routine's labeled trigger
does not fire on draft PRs. Three points, one variable at a time —
17:02 label on a draft → nothing · 21:31 re-label on the draft with
the routine verified Active → nothing · 21:53 ready-flip + label →
canary in 90 seconds. D-043 makes ready-flip-then-label the interim
recipe of record, stages api-ignition (benches stay draft; the
ready-flip goes back to meaning completion) and the cloud clerk
(the away-machine-off command seat), and names the Claude app the
single away surface with GitHub demoted to doorbell.

The phantom-event catch: our `npm run count:runs` proxy counted the
17:02 label event as a run, but the founder's provider-side read
showed ZERO runs ever — the proxy is a trigger-count UPPER bound,
not a spend meter. Draft-label failures burn proxy counts, never
provider runs. Recorded in the checklist item of record.

The unplanned crash-resilience pass — two live tests nobody
scheduled, both absorbed by doctrine: (1) a redelivered
`pull_request.labeled` webhook at 21:57, citing the pre-canary head
SHA, met the wake-lock's re-read-Status-first rule and died
harmless mid-flight; (2) the work-PC mini-session that recorded the
founder's route call (21:29–21:31) closed without a ritual repaint,
and the next sitting's pickup healed the stale board exactly as
designed (git outranks the board). Evidence for both appended to
the double-dispatch diagnostic in [IDEAS](../IDEAS.md) — redelivery
now the most plausible mechanism for the earlier incident.

Block-2 execution, this branch: D-043 + ripple in one commit whose
name-only diff exactly matches the Affects list (DECISIONS ·
parallel-lanes · SETUP · IDEAS). Enforcement: the repo PATCHed to
squash-only + branch auto-delete (preflight drift found 07-16,
GET-verified fixed); the Vercel docs-only skip implemented as
`vercel.json` ignoreCommand ONLY after verifying the mechanism
against current Vercel docs (exit 0 = skip, exit 1 = build) and
testing the exact command against three real commits (bench birth
docs-only → skip · reviewer weld touching .claude/ → build · board
micro-PR → skip). Note: the earlier IDEAS caveat about `paths-ignore`
starving the required `checks` context does NOT apply here — the
skip is Vercel-side only; GitHub Actions still runs on every PR.
Conventions hardened while passing: TEMPLATE's
refresh-updated-with-Status rule (the 07-16 stale-frontmatter seat
mis-attribution) and the specs-README fence rule for quoted doc
text.

## Where to look
Spec: [maiden-flight-report](../specs/maiden-flight-report.md).
PR: [#153](https://github.com/wsher0901/roam/pull/153). The decide:
[D-043](../DECISIONS.md#d-043--2026-07--cloud-ignition--away-command-redesign--route-ladder-v2-ready-flip-then-label-is-the-recipe-of-record-api-ignition-and-the-cloud-clerk-staged-the-claude-app-the-single-away-surface-amends-d-041-upholds-the-lane-law-and-the-wake-lock).
The amended doctrine:
[parallel-lanes §Cloud spawn](../skills/parallel-lanes.md#cloud-spawn--route-ladder)
·
[§Answering a lane](../skills/parallel-lanes.md#answering-a-lane-the-mail-slot).
The staged tasks:
[SETUP §Staged](../SETUP.md#staged--turns-on-when-its-stage-opens).
The flight legs:
[leg A](../history/workshop/mechanism/reviewer-subagent.md) ·
[leg B](../history/workshop/definition/time-doctrine.md).
