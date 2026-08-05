---
type: chronicle-story
shelf: III — the information system
status: living
updated: 2026-08-05 · written · cloud lane
---

# CI is the arbiter — and auto-merge, the clause that made it literal

> **CURRENT ENDING (2026-08-05).** Settled and enforced by GitHub
> itself. No gate in this workshop passes on local green: THE GATE,
> every lane's ready-flip, and LAWS' definition of "done" all
> require the PUSHED commit's Actions run to be green. `main` is
> branch-protected with the `checks` context required and
> `enforce_admins` on, so red is unmergeable rather than merely
> discouraged. Self-merge paths — the atomic weld and the micro-PR —
> arm `gh pr merge --auto --squash --delete-branch` and fire on that
> run's green. **The ruling was made and then immediately caught its
> own missing precondition**: the first `--auto` the workshop ever
> issued was rejected because repo auto-merge had never been turned
> on, which took a second one-line bench to fix.

## What it is

One sentence with teeth: **the arbiter of "green" is GitHub Actions
on the pushed commit, and nothing else.**

Three consequences follow, and all three are load-bearing:

1. **Local green never suffices.** The preflight gate is a MIRROR of
   CI (lint · format:check · check:links · tests · build) — a
   convenience that predicts the verdict, never the verdict itself.
   Local-green-plus-CI-red is a STOP-and-investigate finding, never
   a merge.
2. **The rule is machine-enforced.** `main` requires the `checks`
   status context with `enforce_admins` on, so the law does not
   depend on a session remembering it.
3. **Immediacy yields to the arbiter.** The paths allowed to merge
   without asking — [ship](../skills/ship.md)'s atomic weld and the
   micro-PR — do not merge immediately. They ARM auto-merge and let
   the green fire it.

Its living text sits in
[LAWS §Workflow](../LAWS.md#workflow-non-negotiable) ("'Done' also
requires the PUSHED commit's Actions run green") and in
[ship §1](../skills/ship.md#1--preflight) and
[§7](../skills/ship.md#7--on-approval--the-atomic-weld).

## What raised it

A diagnosis the founder asked for, and a pattern nobody had looked
at. **Seven red Actions notifications reached the founder before any
written report did.** Every report was locally true and CI-blind,
because the reports were built from local checks and nothing in the
workshop ever looked at Actions.

The run log explained it. Many PRs were going fail→pass on a single
branch, and each first failure was the same thing: a `check:links`
anchor miss, where a D-number heading and the links pointing at it
were not yet in the same commit. Worse, there had been a spell where
`main` ITSELF was red for about thirty minutes
([#111](https://github.com/wsher0901/roam/pull/111) →
[#112](https://github.com/wsher0901/roam/pull/112)).

The insight in the fix is that these are two different problems and
the ruling solves both: make Actions the arbiter everywhere a gate
exists, AND kill the anchor stumble at its source rather than
gating harder on it.

## What changed, in order

- **[#117](https://github.com/wsher0901/roam/pull/117) —
  [D-038](../record/DECISIONS.md#d-038--ci-is-the-arbiter) is
  taken, and the law is written.** Actions-green required at every
  gate; the preflight gate widened to mirror all six CI steps;
  [decide](../skills/decide.md) runs `check:links` before an entry's
  first push so **anchors are born resolving** — the direct kill for
  the failure that dominated the log. The ruling explicitly widens
  [D-027](../record/DECISIONS.md#d-027--laws-polish)'s
  sync-with-main preflight from one step to the whole pipeline. Two
  judgment calls are on the record from this bench and both are
  small lessons in their own right: the entry took D-038 rather than
  D-037 because D-037 was CLAIMED by an in-flight PR awaiting the
  merge word and reuse would have collided on merge; and the
  required check context was narrowed to the CI job `checks` alone,
  not the two Vercel checks that also report green.
- **Branch protection, on the founder's yes (2026-07-14).** The law
  stops being a thing sessions obey and becomes a thing GitHub
  enforces: `checks` required, `enforce_admins` on, no review
  requirement, strict off.
- **[#119](https://github.com/wsher0901/roam/pull/119) — the missing
  precondition, found by the law's own first use.** The D-038 bench
  taught the self-merge paths to arm `gh pr merge --auto`, but
  repo-level auto-merge had never been enabled, so **the very first
  `--auto` the repo ever issued was rejected** — "Auto merge is not
  allowed for this repository" — and that ship tail fell back to
  watch-then-merge. This one-line bench flipped `allow_auto_merge`
  true and verified it by a GET. Its own merge was then armed as the
  repo's first real `--auto`, and it fired on the weld commit's
  green exactly as designed. The same GET surfaced an in-scope
  oddity, left deliberately untouched: `delete_branch_on_merge` is
  OFF at the repo level, and branches still vanish because every
  weld passes `--delete-branch` explicitly.
- **Alternatives rejected at the ruling, worth keeping.** Re-pinning
  Node was rejected and the node-24 hypothesis explicitly retracted
  — the pipeline was healthy and the reds were honest. Git pre-push
  hooks were rejected as heavier than the decide-step fix, and
  because per-machine hooks do not travel with the repo, which
  matters in a two-computer workshop.

## Where it stands

Standing and unamended. The rule has been quoted at every gate
since, and its most-repeated line — "local green never suffices" —
now appears in the lane law, in ship's preflight, and in the
definition of "done" a lane must satisfy before flipping a PR ready.

Two properties are worth naming because they are why this ruling
aged well.

**It removed a class of failure rather than adding a check for it.**
The anchor misses that filled the run log are not caught more
strictly now; they mostly do not happen, because decide runs the
link check before the entry's first push. Gating harder on a
recurring self-inflicted break would have been the easier design and
a worse one.

**It made the enforcement independent of the enforcer.** Every other
rule in this workshop is obeyed by sessions reading documents. This
one is obeyed by GitHub refusing the merge, which means it holds
against a session that has misread the law, forgotten it, or never
loaded it — including a cloud lane running unattended.

The open edge is narrow and inherent: the arbiter certifies that the
pipeline passed, not that the work is right. `checks` is lint,
format, links, tests and build — a green run says nothing about
whether a document tells the truth, which is what the pre-gate
critic and the external review exist for.

## Sources

Down-links only — this story cites the frozen record beneath it and
never another story's prose.

- [D-038](../record/DECISIONS.md#d-038--ci-is-the-arbiter) — the
  ruling in full: the arbiter clause, the CI mirror, anchors born
  resolving, branch protection, and the alternatives rejected.
- [the ci-trust story](../record/history/workshop/mechanism/ci-trust.md)
  — [#117](https://github.com/wsher0901/roam/pull/117): the
  seven-notification diagnosis, the run-log pattern, and the two
  judgment calls.
- [the auto-merge-flip story](../record/history/workshop/mechanism/auto-merge-flip.md)
  — [#119](https://github.com/wsher0901/roam/pull/119): the rejected
  first `--auto`, the flip, and the `delete_branch_on_merge` note.
- [LAWS §Workflow](../LAWS.md#workflow-non-negotiable) — "done"
  requires the pushed commit's Actions run green.
- [ship §1](../skills/ship.md#1--preflight) ·
  [ship §7](../skills/ship.md#7--on-approval--the-atomic-weld) — the
  preflight mirror, and the armed auto-merge at the weld.
