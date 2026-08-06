---
type: chronicle-story
shelf: III — the information system
status: living
updated: 2026-08-06 · the seat-identity step · work PC
---

# The session hooks — the mechanics the rituals stand on

> **CURRENT ENDING (2026-08-06).** Three cross-platform Node hooks,
> 324 lines total, carrying the mechanics every ritual assumes:
> `session-start` (209 lines) syncs, SETS A CLOUD SEAT'S GIT
> IDENTITY, and injects the board,
> `session-end` (68) is the never-strand-work safety net, and
> `user-prompt-submit` (47) is the close-lock — which now INSTRUCTS
> rather than blocks. Their governing design rule is uniform and
> visible in all three headers: **a hook may never block or fail a
> session; every step degrades gracefully and always exits 0.** They
> began as one Windows-only cmd.exe hook that was dying silently on
> every other platform, which is the failure mode the whole class is
> shaped against.

## What it is

Three files under `.claude/hooks/`, each firing at one moment of a
session's life.

**`session-start.mjs`** — anchors to the repo root, prunes, syncs
`main` by fast-forward ONLY when the tree is clean, force-deletes
local branches whose remotes are gone, and injects the
[DASHBOARD](../DASHBOARD.md) into the session's opening context. It
also computes and prints a per-worktree verdict — branch, heartbeat
age, Status word, LIVE or RECLAIMABLE — which is the instrument
[pickup](../skills/pickup.md)'s worktree sweep reads.

**`session-end.mjs`** — the safety net. On a lane branch it commits
any work-in-progress as an explicit `wip` commit and pushes, setting
upstream if needed. **On `main` it does nothing**, because main is
PR-only and must never receive an auto-commit. If the network is
down the work stays committed locally and the next push carries it.

**`user-prompt-submit.mjs`** — the close-lock. FULL
[handoff](../skills/handoff.md) and [liftoff](../skills/liftoff.md)
write `.claude/session-closed` as their last act; this hook reads
that record and stamps the prompt with read-only doctrine.

The design constraint they share is the interesting part. A hook
runs before the session exists as a working seat, so a hook that
throws takes the session with it. All three are written to fail
into silence rather than into a broken start.

## What raised it

**A hook that was dying silently everywhere it was not Windows.**

The original was a Windows-only `cmd.exe` hook. On any other
platform — a macOS or Linux seat, and critically a CLOUD SANDBOX —
it did not error loudly; it simply did nothing. Sessions started
BLIND: no pull, no briefing, no board. Every ritual downstream
assumed a synced tree and a loaded board, and on those platforms
neither assumption held, with nothing announcing the gap.

That is the shape of the problem this class of machinery exists for.
The rituals are documents; documents cannot pull a branch or push
stranded work. The hooks are where the workshop's habits become
mechanical, and a silent hook failure is therefore worse than a loud
one — it leaves every downstream ritual reasoning from state that
was never established.

## What changed, in order

- **[#2](https://github.com/wsher0901/roam/pull/2) — context engine
  v2.** The idea that a session should open already briefed rather
  than be briefed by its operator.
- **[#53](https://github.com/wsher0901/roam/pull/53) — the
  cross-platform rebuild, and the class's founding shape.** The
  Windows-only hook is replaced by Node hooks that run anywhere.
  `session-start` anchors to the repo root, fast-forwards main only
  when the tree is CLEAN, and injects the briefing; `session-end`
  auto-pushes unpushed lane work so nothing can be lost; routine
  git/GitHub commands are pre-approved so the mechanics do not stall
  on permission prompts. Framed at the time as reliability work for
  the [D-020](../record/DECISIONS.md#d-020--parallel-lanes-v2)
  lanes — correctly, since a lane is precisely a session nobody is
  watching.
- **[#78](https://github.com/wsher0901/roam/pull/78) — hardening and
  hygiene.** The hooks settle into standing machinery.
- **[D-031](../record/DECISIONS.md#d-031--stale-branch-hygiene) —
  the zombie branch, and the gone-guard.** A real failure named the
  engine-recut zombie: a weld deleted a remote branch, the OTHER
  seat's local copy survived, and its `session-end` safety net
  faithfully pushed the corpse back. The net had been resurrecting
  what a merge had just buried. Two clauses fix it — session-end
  never pushes a branch whose tracking is configured but whose
  remote is gone, and session-start force-deletes locals marked
  gone, excluding main, the current branch, and anything checked out
  in another worktree, logging each deleted name and tip SHA so the
  reflog keeps them recoverable. **The founder chose auto-delete
  over warn-and-skip**, rejecting repeat-warn fatigue.
- **[D-042](../record/DECISIONS.md#d-042--lane-liveness) — the hook
  becomes an instrument.** Liveness is derived from the commit
  heartbeat, and the rule has to be READ at two previously blind
  sites: the claim check and pickup's worktree sweep. The
  session-start hook is what feeds the second — it computes the
  per-worktree verdict and prints it, so a ritual reads a
  measurement rather than forming an impression. This is the point
  where the hooks stop being only a convenience and start being
  evidence-producing.
- **[D-050](../record/DECISIONS.md#d-050--session-lifecycle-closed-is-not-dead)
  — the close-lock SOFTENS.** `user-prompt-submit` had been a
  mechanical wall: `exit 2`, rejecting every input after a session
  closed. It becomes injected read-only doctrine — `exit 0`, stdout
  as context — so a closed session answers by fresh derivation from
  origin, names the current baton-holder, and refuses every write,
  command act and ritual. **Full removal of the lock was rejected**:
  the two-writers risk it was built for is real, and the softened
  wall still ends the session as a working seat.

- **2026-08-06 ([#324](https://github.com/wsher0901/roam/pull/324))
  — `session-start` gains the SEAT IDENTITY step, and the hook class
  takes on a duty no ritual could carry.** A cloud seat boots with
  the container image's git identity, so it authors commits as
  someone this history does not contain; the step that fixed it
  lived in [machine-setup](../skills/machine-setup.md), THE ONE FILE
  A CLOUD SEAT HAS NO REASON TO OPEN. The hook can do it because the
  hook is in the repo and reaches every seat that clones. It fires
  ONLY on the harness default — never on an unset identity, because
  this repo is public and setting one there would replace git's loud
  refusal with silent misattribution — and it RE-TESTS the value it
  derives from `origin/main` before writing it, so a bad tip cannot
  make it install the string it exists to remove. Both guards came
  from review, not from the first draft.


## Where it stands

Standing, and quietly load-bearing. The hooks are the least-discussed
machinery in the workshop and the most continuously exercised — every
session of every seat runs two of them, and this story's own session
opened on the injected board exactly as designed, in a cloud sandbox,
which is the platform the original hook could not reach.

Three properties are worth stating because they are the reusable
lessons rather than the local facts.

**Fail-open is a deliberate choice with a cost.** Always-exit-0 means
a hook can never take a session down, and it also means a hook that
silently does nothing looks identical to one that worked. That is the
exact failure the class was born from, and the design answer is not
"fail loudly" but "print what you did" — the hook's stdout is the
evidence, which is why the liveness verdict being PRINTED matters as
much as it being computed.

**The safety net needed a guard more than it needed reach.** The
`session-end` hook's whole value is that it cannot let work be
stranded on one machine, and its one recorded harm came from doing
that job too faithfully — pushing a branch that had deliberately been
deleted. A net that catches everything catches corpses too.

**The close-lock is the workshop's clearest case of a wall becoming a
sign.** The mechanical block enforced the right invariant by making a
closed session useless to the person standing at the desk asking it a
question. Softening kept the invariant and dropped the collateral,
which is a pattern worth reaching for whenever a guard's cost falls
on the founder rather than on the risk.

## Sources

Down-links only — this story cites the frozen record and the living
machinery beneath it, never another story's prose.

- `.claude/hooks/session-start.mjs` ·
  `.claude/hooks/session-end.mjs` ·
  `.claude/hooks/user-prompt-submit.mjs` — the three hooks; each
  header states its own contract.
- [the session-hooks story](../record/history/workshop/mechanism/session-hooks.md)
  — [#53](https://github.com/wsher0901/roam/pull/53): the
  Windows-only hook dying silently, and the cross-platform rebuild.
- [D-031](../record/DECISIONS.md#d-031--stale-branch-hygiene) — the
  engine-recut zombie and the gone-guard, with the founder's
  auto-delete call.
- [D-042](../record/DECISIONS.md#d-042--lane-liveness) — the
  per-worktree verdict the session-start hook computes and prints.
- [D-050](../record/DECISIONS.md#d-050--session-lifecycle-closed-is-not-dead)
  — the close-lock softening, and why full removal was rejected.
- [pickup §3](../skills/pickup.md#3--gather-git-outranks-the-board) —
  the ritual that consumes the hook's printed verdict.
