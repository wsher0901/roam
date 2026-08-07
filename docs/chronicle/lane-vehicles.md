---
type: chronicle-story
shelf: II — the lane system
status: living
updated: 2026-08-06 · written from the record · cloud lane
---

# Lane vehicles — the two ways a lane can exist, and the one that isn't

> **CURRENT ENDING (2026-08-06).** Exactly two vehicles. **LOCAL** —
> background agents or `claude -w` worktree sessions — is the
> mid-session default under the chooser law, with one posture
> condition attached: during go-remote every lane must be
> RC-visible, because a bare detached spawn cannot be seen from the
> founder's phone. **CLOUD** — a session started through the route
> ladder — is liftoff's vehicle only, never an ad-hoc CLI spawn.
> Beside them sits one NAMED EXCLUSION that exists to stop a
> recurring wrong answer: an agent team is not a lane vehicle.
> The list has swung a full circle to get here — worktrees, then
> cloud, then native local after cloud destroyed real work, then
> cloud again through a different door — and what makes the current
> pair stable is that neither is a default by preference: the seat's
> POSTURE picks, not the seat.

## What it is

A vehicle is the thing a lane actually runs inside. The choice is
not free-form; it falls out of the chooser law:

- **LOCAL** — the founder is at the keyboard and work should
  parallelize now. Worktrees share the clone's disk, which is safe
  only because lanes are file-disjoint by law.
- **CLOUD** — the founder is leaving and the machine is going dark.
  Reached through
  [§Cloud spawn](../skills/parallel-lanes.md#cloud-spawn--route-ladder)'s
  ladder; push-canary first; never end a cloud session before its
  work is on origin.
- **NOT A VEHICLE — agent teams.** Exploration and review at a
  ground seat only. The boundary and its reasons live at
  [HOME §Agent teams](../HOME.md#agent-teams), and
  [parallel-lanes](../skills/parallel-lanes.md) keeps one line
  pointing there rather than restating it.

## What raised it

Repeated wrong guesses about how lanes are launched — four
corrections in about a month, each discovering that the recorded
mechanism was an assumption rather than the practice. The vehicle
list is short today because every entry on it has had to survive a
live launch.

## What changed, in order

- **[D-016](../record/DECISIONS.md#d-016--parallel-ready-menu) —
  worktrees, assumed.** The first parallel-ready menu shipped with
  a same-machine `git worktree` launch command. It encoded how
  parallelism was imagined, not how it was done.
- **[D-017](../record/DECISIONS.md#d-017--cloud-sessions-are-the-lane-vehicle)
  — cloud becomes the vehicle, worktrees demoted to offline
  fallback.** The stated reason is worth keeping: cloud lanes are
  machine-independent, launchable from either computer or a phone,
  with nothing local to set up or clean up — and every lane
  announces itself in git anyway.
- **[D-019](../record/DECISIONS.md#d-019--launch-mechanics-correction)
  — the vehicle exists but cannot be started the assumed way.**
  `claude --remote` enforces a TTY guard and refuses every
  non-interactive invocation; both of Claude's own routes (a
  headless shell, and the `!` prefix) failed at the first real
  attempt. The working route was a batch launcher written OUTSIDE
  the public repo and opened as a visible attended console window —
  a guard the workshop chose to satisfy rather than defeat, since
  the guard exists so cloud sessions are born attended.
- **[D-020](../record/DECISIONS.md#d-020--parallel-lanes-v2) —
  cloud is retired after it destroys work.** Bundle-seeded sandboxes
  had no origin remote, so lanes could not push and two tasks' work
  died with their sessions. Lanes go native: background agents and
  worktree sessions, running locally where deletion-loss is
  structurally impossible. Three launch-mechanic corrections in a
  row had shown the machinery was ours to maintain on shifting
  ground.
- **[D-041](../record/DECISIONS.md#d-041--delegation-architecture)
  — cloud returns through a different door, and posture becomes the
  selector.** Mid-session parallel work is a local lane; leaving
  with the machine going dark is a cloud lane; cloud spawns only
  through the label route, never a CLI spawn. The go-remote tether
  adds the RC-visibility condition on local lanes: invisible from
  the phone is unlawful in that posture.
- **[D-055](../record/DECISIONS.md#d-055--agent-teams-the-boundary)
  — the exclusion is written where it will be read, and a stale
  entry is removed.** The Vehicles list had carried a team rule
  ("lead Fable/Opus, at most 4 Sonnet teammates") that was both
  outdated and a one-home violation, sitting in the manual consulted
  before every dispatch. It was reduced to a pointer.

## Where it stands

The pair is stable, and the reason it is stable is that the entries
stopped being preferences. Local is not "better"; cloud is not
"advanced". The founder's posture — at the desk, or leaving with
the machine going dark — decides, and each vehicle carries exactly
the guarantees its posture needs.

**A caveat the census cell does not carry, added here because the
record supports it:** the local half of the pair has been quieter
in the recent record than the cloud half. The flights, the freeze
drills, the fleet launches and every one of the failures worth
writing down happened in the cloud, and the local vehicle's most
recent named appearance is as the CONTROL in the maiden flight —
the lane that flew the whole law unassisted the same afternoon the
cloud half was still failing to start. That is not evidence that
local is fragile; it is evidence that nothing has stressed it
lately. A vehicle with no recent incidents and a vehicle with no
recent use look identical from the record.

One asymmetry is by construction and should stay: worktree lanes
share a disk, so the never-share-a-file clause is doing physical
work locally and merely logical work in the cloud, where each lane
holds its own clone.

## Sources

Down-links only.

- [parallel-lanes §Vehicles](../skills/parallel-lanes.md#vehicles)
  — the living list ·
  [§Cloud spawn](../skills/parallel-lanes.md#cloud-spawn--route-ladder)
  — how the cloud one is reached.
- [LAWS §Workflow](../LAWS.md#workflow-non-negotiable) — the
  chooser law that selects between them.
- [D-016](../record/DECISIONS.md#d-016--parallel-ready-menu) ·
  [D-017](../record/DECISIONS.md#d-017--cloud-sessions-are-the-lane-vehicle)
  ·
  [D-019](../record/DECISIONS.md#d-019--launch-mechanics-correction)
  · [D-020](../record/DECISIONS.md#d-020--parallel-lanes-v2) ·
  [D-041](../record/DECISIONS.md#d-041--delegation-architecture) ·
  [D-055](../record/DECISIONS.md#d-055--agent-teams-the-boundary).
- [the cloud-vehicle weld](../record/history/workshop/mechanism/cloud-lane-vehicle.md)
  ·
  [the launch-recipe weld](../record/history/workshop/mechanism/lane-launch-recipe.md)
  — the TTY guard, live ·
  [the native-lanes weld](../record/history/workshop/mechanism/parallel-lanes-native.md)
  — the retirement of the cloud machinery.
- Span cited by the census:
  [#48](https://github.com/wsher0901/roam/pull/48).
