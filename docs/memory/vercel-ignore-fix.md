---
type: memory
id: vercel-ignore-fix
updated: 2026-07-17 · bench birth · work PC
---

# vercel-ignore-fix — fail toward build, never toward error

## Status

bench ready — claimed by the cockpit in-session (2026-07-17, work
PC); hotfix, built directly.

## What this task is

Harden `vercel.json`'s ignoreCommand with `|| exit 1` so a git
failure (exit 128 on a beyond-horizon `VERCEL_GIT_PREVIOUS_SHA`)
fails toward BUILD instead of a production deployment ERROR; note
the hardening + self-healing side-effect in SETUP §Vercel.
Contract: [the spec](../specs/vercel-ignore-fix.md). Runs to THE
GATE — DO NOT MERGE; the review word follows in the Web chat.

## Pending issues

- Post-merge proof pending: the weld's production must come back
  READY; the tail's docs-only production after it must skip or
  build, never ERROR.

## Left / idle

The two edits — the bench was just born.

## The story

Born 2026-07-17 as a hotfix bench after four ERROR production
deployments tonight (first evidence: "fatal: bad object b4afebf"
on dpl_EnH6px3t), traced to Vercel's ~10-deep shallow clone no
longer containing the previous SHA once #163's burst of commits
pushed it past the horizon.

## Where to look

- Spec: [vercel-ignore-fix](../specs/vercel-ignore-fix.md)
- The skip line: [SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
- The skip's birth claim under repair:
  [maiden-flight-report](../history/workshop/mechanism/maiden-flight-report.md)
  ([#153](https://github.com/wsher0901/roam/pull/153))
