---
type: chronicle-story
shelf: II — the lane system
status: living
updated: 2026-08-06 · the boxes and the dangling pointer re-checked · cloud lane
---

# The batch-1 lane launch (2026-06-12) — four lanes out, none back

> **CURRENT ENDING (2026-08-06).** Four parallel cloud lanes were
> launched on 2026-06-12 through hand-built machinery and none of
> them landed. The vehicle's post-mortem is the whole of what the
> record knows about WHY: bundle-seeded sandboxes had no origin
> remote, so lanes could not push, and T3+T5's work was destroyed
> with their sessions. **T4 and T6 were never even recorded as
> failed.** The machinery was retired at
> [D-020](../record/DECISIONS.md#d-020--parallel-lanes-v2); the
> tasks were never re-flown or folded; and on 2026-07-28 the
> founder ruled RELAUNCH FROM SCRATCH — no salvage, no partial
> adoption — with the relaunch scheduled into phase 3. **Verified
> at write time rather than assumed: the four boxes are still
> unticked in the roadmap, which is exactly the honest state the
> ruling relies on.** One artefact of the episode survives as a
> permanently dangling pointer, and the reason it cannot be
> repaired is itself worth knowing.

## What it was

The workshop's first real attempt at parallelism: four
source-vetting tasks — T3 through T6 — launched at once as cloud
sessions, in June, on the strength of three decisions made in
rapid succession that month.

It is the only episode in this shelf where the work itself was
lost. Everything after it is, in one way or another, machinery
built so that this cannot happen again.

## What happened, in order

- **[D-016](../record/DECISIONS.md#d-016--parallel-ready-menu) —
  parallel capacity becomes visible.** Every briefing ends with a
  list of unblocked parallel-safe tasks, each with a ready-to-paste
  launch command. The command assumed same-machine worktrees.
- **[D-017](../record/DECISIONS.md#d-017--cloud-sessions-are-the-lane-vehicle)
  — the assumption is corrected.** The founder's real workflow was
  cloud sessions launched from the desktop app: machine-independent,
  each lane in its own isolated clone, on its own branch, shipping
  its own PR. Worktrees demoted to offline fallback.
- **[D-019](../record/DECISIONS.md#d-019--launch-mechanics-correction)
  — the corrected recipe cannot be executed.** The launch command
  enforces a TTY guard and refuses every non-interactive
  invocation; both automated routes failed at the first real
  attempt. The working route was a batch launcher written OUTSIDE
  the public repo and opened as a visible attended console window
  on the founder's screen. The four lanes launched through that
  window.
- **They did not come back.** The sandboxes had been seeded from a
  bundle rather than cloned, so they had no origin remote and could
  not push. Two lanes' work was destroyed with their sessions. The
  other two produced no recorded outcome at all.
- **[D-020](../record/DECISIONS.md#d-020--parallel-lanes-v2),
  2026-07-09 — the machinery is retired, and the law is written
  from the wreckage.** Lanes go native, running locally where
  deletion-loss is structurally impossible; the June post-mortem's
  three rules — push-first canary before real work, push after
  every commit, never end a session before its work is on origin —
  are kept explicitly as belt-and-suspenders. The stated reason for
  retiring rather than repairing: three launch-mechanic corrections
  in a row had shown the machinery was ours to maintain on shifting
  ground, and the capability was arriving natively anyway.
- **2026-07-28 — the founder rules on the four orphaned tasks.**
  Asked what should become of them, the answer was: "The initial
  parallel cloud session failed. So, I will most likely start from
  scratch." RELAUNCH FROM SCRATCH — re-planned as new work, with
  four audit riders attached by the external reviewer, each marked
  verify-licenses-at-spike. Nothing was ticked or un-ticked,
  because the unticked boxes already told the truth.
- **[D-060](../record/DECISIONS.md#d-060--the-three-phase-standing-order)
  — the relaunch gets a place in the queue.** The four tasks are
  PAUSED until phase 2 closes, and phase 3 is where they return.

## What it found

1. **A lane that cannot push is a lane that does not exist.** This
   is the origin of the canary handshake: the first act of every
   lane since is a trivial push, precisely because these four could
   not make one and nobody knew until the work was gone.
2. **A sandbox seeded from a bundle is not a clone.** The failure
   was in how the environment was constructed, not in the lane's
   work — which is why no amount of care inside the lane would have
   saved it.
3. **The failures were not equally legible, and that asymmetry is
   the lesson that keeps recurring.** Two lanes were recorded as
   failed; two produced no record at all. A lane that dies loudly
   leaves a post-mortem; a lane that dies silently leaves an
   unticked box and a founder's vague memory. **The same
   distinction has come up in every generation of this system
   since** — including a fleet on 2026-08-06 where two lanes died
   the same death and only one of them said so.
4. **Three corrections in a row is a signal about the machinery,
   not the operator.** That reading is what turned a fourth repair
   attempt into a retirement.

## Where it stands

**Open, scheduled, and honestly represented.** Checked against the
roadmap at write time: T1 and T2 are ticked; T3, T4, T5 and T6 are
not. Nothing anywhere claims otherwise. The relaunch waits on phase
3 by the standing order.

**What cannot be recovered is the WHY.** The founder recalls only
that the cloud sessions failed. The record holds the vehicle's
post-mortem and the fix-routing triage of the same period, and that
is the whole of it. The answering bench that put this question to
the founder said so explicitly and invented nothing — which is why
this story can be exact about the limit rather than filling it in.

**One pointer from the episode dangles permanently, and its
permanence is by construction rather than by neglect.** The
double-dispatch diagnostic — the investigation into whether a
single trigger could produce two lanes — was compacted out of the
inbox when that file became an inbox rather than an archive. Two
surfaces still point at it: a decision entry's Affects line and a
frozen task history. Neither can be edited: the decision log is
append-only, and history is immutable by law. So the pointer will
keep pointing at a line that is no longer there, and the only
possible repair is a story like this one saying where it went.
Verified at write time — the inbox contains no such entry, and both
citations still stand.

That is the last living trace of batch 1: not the lost work, which
will be redone from scratch, but a pointer that outlived its
target.

## Sources

Down-links only.

- [D-016](../record/DECISIONS.md#d-016--parallel-ready-menu) ·
  [D-017](../record/DECISIONS.md#d-017--cloud-sessions-are-the-lane-vehicle)
  ·
  [D-018](../record/DECISIONS.md#d-018--fix-routing-triage-after-lane-review)
  ·
  [D-019](../record/DECISIONS.md#d-019--launch-mechanics-correction)
  · [D-020](../record/DECISIONS.md#d-020--parallel-lanes-v2) — the
  post-mortem of record ·
  [D-050](../record/DECISIONS.md#d-050--session-lifecycle-closed-is-not-dead)
  — the compaction that orphaned the pointer ·
  [D-060](../record/DECISIONS.md#d-060--the-three-phase-standing-order)
  — where the relaunch sits.
- [the answering bench](../record/history/workshop/definition/chronicle-answers.md)
  — the founder's ruling verbatim, the relaunch brief, the audit
  riders, and the dangling pointer named honestly.
- [the menu weld](../record/history/workshop/mechanism/parallel-ready-menu.md)
  ·
  [the cloud-vehicle weld](../record/history/workshop/mechanism/cloud-lane-vehicle.md)
  ·
  [the launch-recipe weld](../record/history/workshop/mechanism/lane-launch-recipe.md)
  ·
  [the native-lanes weld](../record/history/workshop/mechanism/parallel-lanes-native.md).
- [V1.S1](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
  — the four unticked boxes, re-checked at write time.
- PRs: [#39](https://github.com/wsher0901/roam/pull/39) ·
  [#41](https://github.com/wsher0901/roam/pull/41) ·
  [#46](https://github.com/wsher0901/roam/pull/46) ·
  [#51](https://github.com/wsher0901/roam/pull/51).
