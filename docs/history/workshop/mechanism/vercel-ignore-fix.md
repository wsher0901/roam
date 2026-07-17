---
type: history
slug: vercel-ignore-fix
shipped: 2026-07-17 16:41
pr: 167
---

# vercel-ignore-fix — fail toward build, never toward error

## Status

Shipped — merged as
[#167](https://github.com/wsher0901/roam/pull/167), after external
review in the Web chat. Both post-merge proofs are recorded below
(the founder's weld instruction).

## What this task is

Harden `vercel.json`'s ignoreCommand with `|| exit 1` so a git
failure (exit 128 on a beyond-horizon `VERCEL_GIT_PREVIOUS_SHA`)
fails toward BUILD instead of a production deployment ERROR; note
the hardening + self-healing side-effect in SETUP §Vercel.
Contract: [the spec](../../../specs/vercel-ignore-fix.md). Runs to THE
GATE — DO NOT MERGE; the review word follows in the Web chat.

## Pending issues

none — the two post-merge proofs were observed at the weld and are
recorded here (§Post-merge proofs, below the story).

## Left / idle

nothing — the post-merge proof is observation, not work.

## The story

Born 2026-07-17 as a hotfix bench after four ERROR production
deployments tonight (first evidence: "fatal: bad object b4afebf"
on dpl_EnH6px3t), traced to Vercel's ~10-deep shallow clone no
longer containing the previous SHA once #163's burst of commits
pushed it past the horizon.

The correction of record: [#153](https://github.com/wsher0901/roam/pull/153)'s
claim that the ignore step's "failure direction is always build"
held for exit 1 but NOT for exit 128 — Vercel treats non-0/1
ignore-step exits as deployment ERRORS, a path nobody exercised
until the shallow-clone horizon moved. A shared miss: the author,
the critic, and the external review all passed it. Corrected today
by making every git failure exit 1 explicitly; the only residue is
benign and documented (a beyond-horizon docs-only push builds
redundantly once, and that build resets the horizon —
self-healing).

## Post-merge proofs

Recorded post-observation via the weld-commissioned record commit
(the founder's merge word ordered both proofs into this file):

- PROOF 1 — the weld's production deployment: PENDING OBSERVATION
  at weld time; filled by the record commit.
- PROOF 2 — the tail's docs-only production: PENDING OBSERVATION
  at weld time; filled by the record commit.

## Where to look

- Spec: [vercel-ignore-fix](../../../specs/vercel-ignore-fix.md)
- The skip line: [SETUP §cloud accounts](../../../SETUP.md#once-and-done--cloud-accounts)
- The skip's birth claim under repair:
  [maiden-flight-report](../../../history/workshop/mechanism/maiden-flight-report.md)
  ([#153](https://github.com/wsher0901/roam/pull/153))
