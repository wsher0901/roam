---
type: chronicle-story
shelf: II — the lane system
status: living
updated: 2026-08-06 · written from the record · cloud lane
---

# Lane liveness — how you tell a flying bench from an abandoned one

> **CURRENT ENDING (2026-08-06).** LIVE means a non-terminal memory
> Status plus a commit inside the ~30-minute staleness window; a
> TERMINAL word (parked · failed · held · shipped · superseded)
> outranks even a fresh heartbeat; genuine doubt is answered by
> asking the founder, never by guessing. The rule is read at the two
> sites that were once blind to it — the claim check and
> [pickup §3](../skills/pickup.md)'s worktree sweep — and the
> session-start hook computes the verdict so a seat does not have
> to. It exists because a cockpit once adopted a bench a lane was
> actively flying and deleted its worktree mid-flight. Its
> guarantees are asymmetric on purpose: a wrong LIVE call costs a
> stall, a wrong RECLAIMABLE call is caught by the wake-lock, and
> the worst outcome either way is a restart rather than split-brain
> work. **On 2026-08-06 it was exercised in its rarest direction —
> a bench judged reclaimable and respawned, twice, correctly.**

## What it is

A two-word verdict on somebody else's branch, derived rather than
recalled:

- **LIVE** — the memory Status is non-terminal AND the branch's
  last commit falls inside the staleness window. Hands off,
  whatever the Status says: never adopt, never secure, never prune.
- **RECLAIMABLE** — the Status is terminal, OR the branch has been
  silent past the window. Adopt by respawn.
- **Doubt** — announce what you see and ask.

The derivation runs on git, not on notes, because **commits are the
heartbeat**: the board can lag, the Status word can lag, a note can
be stale by a week; the commit timestamp cannot lie about when
somebody last did something. The window constant lives in exactly
one place —
[parallel-lanes §Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)
holds ~30 minutes, deliberately longer than the ~10-minute canary
window so that a live lane pausing between commits never reads dead.

## What raised it

A collision, on the night of 2026-07-15. A cockpit session ran its
claim check on a bench, concluded nobody owned it, adopted it,
re-implemented the task, and removed the worktree the live lane was
working in. The lane survived — bench-first birth and push-every-
commit meant its work was already on origin — and the whole cost
was duplicate effort.

**What makes the incident worth a story is that nothing was
hidden.** The lane's heartbeat was commits minutes old, visible the
entire time. No rule told either blind site to look: the claim
check read Status words and PR state without ever asking "is
somebody flying this right NOW", and pickup §3 presumed every dirty
sibling worktree was dead. The signal existed; the instruction to
read it did not.

## What changed, in order

- **[D-042](../record/DECISIONS.md#d-042--lane-liveness) — the
  rule, born the morning after.** Liveness is DERIVED from the
  heartbeat, read at the claim check and pickup §3, and fed by a
  per-worktree verdict (branch · heartbeat age · Status word ·
  LIVE|RECLAIMABLE) that the session-start hook computes and
  prints. Two alternatives were rejected for reasons that still
  hold: a hand-refreshed `claim:` frontmatter field (churn, and
  forgettable, when git already carries the same signal for free)
  and a CI check (the collision is cross-branch, which a
  single-branch run cannot see).
- **The precedence call, made at implementation and worth
  keeping.** The kickoff's own two clauses overlapped: LIVE said
  "a fresh commit, whatever the Status", RECLAIMABLE said "terminal
  Status OR silent" — and a just-parked bench satisfies both,
  because the park stamp IS a fresh commit. Precedence went to the
  terminal word. Had it gone the other way, a parked bench could
  not be lawfully respawned until the window lapsed, breaking the
  ordinary handoff → liftoff flow. It is safe because the wake-lock
  guarantees no worker survives a Status it does not own. "Whatever
  the Status" now reads precisely: whatever NON-terminal word the
  Status shows, a fresh heartbeat means hands off.
- **The verdict was proven before it was trusted.** The hook was
  tested against a scratch worktree three ways — fresh commit +
  airborne → LIVE; a two-hour-backdated commit → RECLAIMABLE
  (silent); a Status stamped parked → RECLAIMABLE (terminal) — and
  the scratch removed. One gotcha survives in the record for the
  next person to backdate a commit: `GIT_COMMITTER_DATE` rejects
  the relative dates (`2 hours ago`) that `--date` accepts; an ISO
  timestamp works.
- **[D-054](../record/DECISIONS.md#d-054--the-landing-skill) — a
  new way to make a bench terminal.** A landing's fence is a commit
  stamping a Status the lane does not own, so the terminal-outranks-
  heartbeat precedence became the mechanism by which a fenced lane
  is both stopped and correctly read as reclaimable afterwards.

## Where it stands

The rule is stable and its consumers are wired: the two read-sites,
the hook's printed verdict, and the Status vocabulary in the memory
[TEMPLATE](../memory/TEMPLATE.md).

**What 2026-08-06 added is the first recorded run in the RECLAIM
direction, and it is a better test than the incident that caused
the rule.** Two lanes of a seven-bench fleet were licensed late,
past their canary window, and stopped without writing payload. Both
benches then presented exactly the ambiguous case the rule was
written for: a non-terminal Status word (a live-sounding claim) and
a branch that had gone silent. Read by the window rather than by
the word, both were RECLAIMABLE, and both were respawned on their
existing benches rather than waited on or re-birthed. **The
respawns were correct** — the second worker on this bench wrote the
story you are reading.

The asymmetry is the part worth remembering. A wrong LIVE reading
costs a stall: a bench nobody picks up. A wrong RECLAIMABLE reading
puts two workers on one branch — and that is the case the wake-lock
catches, because the second worker's first push meets a Status it
does not own. **The rule is therefore allowed to be wrong in one
direction and expensive to be wrong in the other**, which is why
"announce what you see and ask" is written into it rather than left
to judgement.

One limit stands, unchanged since the rule was written: liveness is
derived from what a lane PUSHES. A lane that is thinking, or stuck,
or dead, all look the same from outside for up to half an hour —
and a lane that dies without saying so leaves a bench that reads
exactly like a slow one.

## Sources

Down-links only.

- [parallel-lanes §Liveness](../skills/parallel-lanes.md#liveness--live-vs-reclaimable)
  — the rule's living text; the window constant lives in its
  [§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides).
- [D-042](../record/DECISIONS.md#d-042--lane-liveness) — the
  decision, its rejected alternatives, and the incident that raised
  it · [D-054](../record/DECISIONS.md#d-054--the-landing-skill) —
  the fence as a terminal stamp.
- [the lane-liveness weld](../record/history/workshop/mechanism/lane-liveness.md)
  — the precedence call, the three-way hook proof, and the
  backdating gotcha.
- [the ledger-integrity story](../record/history/workshop/mechanism/ledger-integrity.md)
  — the adopted-bench incident itself.
- [LAWS §Workflow](../LAWS.md#workflow-non-negotiable) — the claim
  check that reads this rule · [pickup §3](../skills/pickup.md) —
  the worktree sweep that reads it.
- Span cited by the census:
  [#140](https://github.com/wsher0901/roam/pull/140).
