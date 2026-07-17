---
type: spec
id: vercel-ignore-fix
title: Vercel ignore-step hardening — fail toward build
status: shipped
stage: workshop
branch: chore/vercel-ignore-fix
pr: 167
opened: 2026-07-17
shipped: 2026-07-17 16:41
---

# vercel-ignore-fix — fail toward build, never toward error

## Goal

Production deploys have ERRORED since
[#163](https://github.com/wsher0901/roam/pull/163): Vercel's
shallow clone (~10 commits deep) no longer contains
`VERCEL_GIT_PREVIOUS_SHA`, so the ignoreCommand's
`git diff --quiet` exits 128 (evidence: build log "fatal: bad
object b4afebf" on dpl_EnH6px3t; four ERROR productions tonight;
previews unaffected) — and Vercel treats non-0/1 ignore-step exits
as deployment ERRORS. The fix appends `|| exit 1` to the
ignoreCommand in `vercel.json`, so ANY git failure fails toward
BUILD, never toward error; exit 0 (skip on docs-only) is
untouched. [SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)'s
Vercel skip line notes the hardening and its documented
side-effect: a docs-only push whose previous SHA sits beyond the
clone horizon builds redundantly ONCE — and that build itself
resets the horizon, so the skip self-heals.

## Done means

- [x] `vercel.json`'s ignoreCommand ends `|| exit 1`.
- [x] SETUP §Vercel notes the hardening + the self-healing
      side-effect.
- [x] This PR's own preview deployment builds READY (it touches
      `vercel.json`) — built and completed on the edit commit,
      2026-07-17.
- [ ] Full CI mirror green; the pushed commit's Actions run green.
      (Ticked at the weld.)

Post-merge proof, recorded in the memory when observed: the weld's
production deployment comes back READY (the bad-object path now
exits 1 and builds), and the tail's docs-only production after it
skips or builds — never ERRORs.
