---
type: readme
title: Spec system
status: living
---
# Specs — per-task detail sheets

A spec is the detail sheet behind one task line in
[ROADMAP.md](../ROADMAP.md) — the chapter behind the
table-of-contents entry. The roadmap line says WHAT in one sentence;
the spec holds the conclusions of the discussion that opened the
task: goal, scope edges, plan, and a verifiable "Done means"
checklist.

## When a spec is born
Just-in-time: only when a task opens AND needs discussion (a Claude
Web session or Claude Code plan mode). The discussion's conclusions
are saved here instead of evaporating with the chat. Fully-specified
simple tasks never get a spec.

## Naming
`docs/specs/<id>-<short-name>.md` — e.g. `v1.s3.t1-check-contract.md`.

## Lifecycle laws
- The spec is the FIRST commit on the task's branch.
- The task's line in [ROADMAP.md](../ROADMAP.md) gains a link to it.
- /ship verifies every "Done means" checkbox honestly against the
  actual work and fills the Deviations section; a spec with untickable
  boxes stops the ship.
- /decide updates or marks superseded any spec a pivot invalidates —
  the ripple happens in the same commit as the decision.
- status moves open → shipped (or superseded; never deleted).

## Frontmatter keys (see [TEMPLATE.md](TEMPLATE.md))
- `type: spec` — vault marker for this file class.
- `id` — the task's roadmap ID (Vn.Sm.Tk).
- `title` — the task's short name.
- `status` — open | shipped | superseded.
- `stage` — the parent stage (Vn.Sm).
- `branch` — the task's branch name.
- `pr` — the PR number once it exists ("—" until then).
- `opened` / `shipped` — dates (shipped stays "—" while open).
