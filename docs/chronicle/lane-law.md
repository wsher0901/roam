---
type: chronicle-story
shelf: II — the lane system
status: living
updated: 2026-08-07 · D-082/D-083 incorporated · work PC
---

# The lane law — the seven-clause contract every lane signs

> **CURRENT ENDING (2026-08-06).** Seven numbered clauses in
> [LAWS §Parallel lanes & cloud](../LAWS.md#parallel-lanes--cloud),
> with the mechanics in
> [parallel-lanes §The lane law](../skills/parallel-lanes.md#the-lane-law-seat-blind--identical-local-or-cloud)
> — and the load-bearing word is SEAT-BLIND: the same contract binds
> a background agent on the founder's desk and a cloud session on
> Anthropic's infrastructure, guarded by seat-invariance so a task's
> artifacts cannot be told apart by where they were made. The law
> was not designed; it ACCRETED, one clause per incident, from a
> June post-mortem where four lanes could not push to an August
> fleet of seven flying at once. Its two prohibitions are absolute
> and its self-termination clause has one known hole, filed and
> unruled: a lane must push what exists before dying, but nothing
> requires it to SAY WHAT KILLED IT — and two lanes of this very
> fleet died silently the same afternoon this story was written.

## What it is

The contract a lane signs by existing. Seven clauses, each of which
can be traced to something that went wrong:

1. **Born bench-first by the baton-holder** — branch, spec, memory
   stub and draft PR on origin BEFORE any session exists.
2. **The canary handshake before real work** — a trivial first
   push, answered by the baton-holder writing airborne-or-failed.
3. **Push every commit.**
4. **Never share a file with a sibling.**
5. **Write its own memory at four moments** — the handshake claim,
   each decision or dead end, the moment it blocks, and completion
   before the ready-flip.
6. **Speak through its PR** — `BLOCKED:` comments, ready-flip plus
   a plain summary.
7. **Never write main** — no [DASHBOARD](../DASHBOARD.md), no
   [IDEAS](../IDEAS.md), no [ROADMAP](../ROADMAP.md) ticks, no
   `record/history/`, no merges.

Clause 4 is the one that reads like fussiness and is not. Lanes are
kept file-disjoint so that **merges cannot collide by
construction** — not so that collisions are rare, but so that they
are impossible to write. Clause 7 exists so that "done" keeps
meaning founder-approved and merged, which is the only definition
under which the board can be trusted.

## What raised it

A post-mortem, on 2026-06-12. The first batch of cloud lanes had
been launched through hand-built machinery and came back with
nothing: sandboxes seeded from a bundle rather than a clone had no
origin remote, so they could not push, and two tasks' work was
destroyed with the sessions that held it. The founding clauses —
push-first canary, push after every commit, never end a session
before its work is on origin — were written as belt-and-suspenders
in [D-020](../record/DECISIONS.md#d-020--parallel-lanes-v2) and
kept even after the vehicle that made them necessary was retired.

**The law is therefore a scar map.** Almost nothing in it was
reasoned from first principles; almost everything was paid for.

## What changed, in order

- **[D-016](../record/DECISIONS.md#d-016--parallel-ready-menu) →
  [D-017](../record/DECISIONS.md#d-017--cloud-sessions-are-the-lane-vehicle)
  →
  [D-019](../record/DECISIONS.md#d-019--launch-mechanics-correction)
  — three launch-mechanic corrections in a row**, each discovering
  the previous one had encoded an assumption rather than the
  practice. This is the pre-history: a lot of machinery, no
  contract.
- **[D-020](../record/DECISIONS.md#d-020--parallel-lanes-v2) — the
  law is born from the failure.** Lanes go native (background
  agents, worktree sessions); the June post-mortem's three rules
  are kept explicitly as belt-and-suspenders; and never-share-a-file
  is written down with a worked example — source vetting writes
  `SOURCES-<family>.md` per lane, consolidated later.
- **[D-018](../record/DECISIONS.md#d-018--fix-routing-triage-after-lane-review)
  — what happens when a lane finishes.** Lane PRs are pre-reviewed
  before the founder reads them, and fixes inherit the lane's own
  branch so one task stays one PR. The clause survives every later
  rewrite of the vehicle.
- **[D-023](../record/DECISIONS.md#d-023--universal-draft-pr-at-birth-and-micro-pr-carve-out)
  — bench-first birth stops being a lane rule and becomes THE
  rule.** Every task, cockpit included, is born branch → spec +
  memory stub → draft PR on origin before work. The reason is
  seat-invariance: special-casing the cockpit had created two
  classes of task.
- **[D-032](../record/DECISIONS.md#d-032--fleet-continuity) — the
  wake-lock arrives inside a continuity decision.** Once handoff
  could park a lane and liftoff could respawn one on the same
  branch, two sessions could believe they owned a bench; the answer
  was to make a lane re-read its Status before acting.
- **[D-041](../record/DECISIONS.md#d-041--delegation-architecture)
  — the chooser above the law.** Away-mode becomes one variable per
  fork, cloud lanes spawn by GitHub label, ad-hoc CLI spawn is
  banned, and a blocked lane on a phone-reachable vehicle idle-waits
  instead of parking.
- **[D-042](../record/DECISIONS.md#d-042--lane-liveness) — the
  heartbeat becomes load-bearing.** "Commits are the heartbeat"
  stops being a description and starts being read at the claim
  check, after a cockpit adopted a bench a live lane was flying.
- **[D-043](../record/DECISIONS.md#d-043--cloud-ignition-and-away-command-redesign)
  — the spawn recipe becomes doctrine**, on three-point evidence
  from the maiden flight; and the reply-ack window is confirmed live
  at first use.
- **[D-046](../record/DECISIONS.md#d-046--flight-cockpit-the-control-tower-online)
  — the baton learns to fly, and no-solo-approval becomes law.** The
  cockpit is the control tower online, holding the baton for its
  flight; no diff merges on its author's own approval. The seat
  vocabulary is renamed in living doctrine only, the frozen record
  left as written.
- **[D-054](../record/DECISIONS.md#d-054--the-landing-skill) — a
  lane can now be stopped from outside**, by a fence commit that
  the wake-lock converts into a stand-down.
- **[D-055](../record/DECISIONS.md#d-055--agent-teams-the-boundary)
  — the law's perimeter is drawn.** Teams are exploration and
  review at a ground seat; LANES REMAIN THE AUTHORSHIP MECHANISM,
  precisely because every property that makes a lane safe — cloud
  isolation, the PR gate, the canary, the wake-lock — is a property
  a team structurally lacks.
- **[D-058](../record/DECISIONS.md#d-058--atlas-the-system-spine)
  — the law gets a spine to hang from**, as the system's mechanisms
  are indexed rather than remembered.

- **[D-082](../record/DECISIONS.md#d-082--the-vehicle-chooser)
  — seat-blindness reaches a third seat.** The lane law now binds a
  TEAMMATE BENCH at a desk exactly as it binds a background agent
  and a cloud session: bench-first birth, one branch and one PR, no
  shared file with a sibling, its own memory at the four moments,
  and the two absolute prohibitions. The law was extended by
  reaching further, not by being relaxed.

## Where it stands

**The law works, and it is now being run at a scale it was never
tested at.** Seven benches flew as one fleet on 2026-08-06 under
[D-078](../record/DECISIONS.md#d-078--the-55-re-ruled-on-the-cold-number),
which was lawful only because clause 4 was checked BEFORE the fleet
launched: every slice would have written the same census file, so
that write was moved to the weld. Clause 4 was satisfied by
construction rather than by luck — which is the clause working
exactly as intended, at the only moment it can work.

**The known hole is clause 2's exit path, and it is not
hypothetical.** A lane that sees a Status it does not own, or hears
nothing inside the canary window, "self-terminates after pushing
what exists". Nothing in the seven clauses requires it to say WHY.
The census cell for this item is a fair summary of the law's text
and does not mention this; **the derivation adds it, because the
evidence arrived after the cell was written.** On 2026-08-06 two
lanes of this fleet were licensed late and died in the gap: one
wrote a stand-down and said so; the other simply stopped, and from
origin the two are indistinguishable — a silent lane and a dead
lane look identical, and only the heartbeat tells them apart. The
same gap was named a day earlier from the other direction, when a
worker stopped by a fence left no server-side trace of the refusal.

Twice found, from two directions, still unruled.

## Sources

Down-links only — this story cites the record beneath it and never
another story's prose.

- [LAWS §Parallel lanes & cloud](../LAWS.md#parallel-lanes--cloud)
  — the law's own text.
- [parallel-lanes §The lane law](../skills/parallel-lanes.md#the-lane-law-seat-blind--identical-local-or-cloud)
  — the seven clauses enumerated, plus the mechanics.
- [D-016](../record/DECISIONS.md#d-016--parallel-ready-menu) ·
  [D-017](../record/DECISIONS.md#d-017--cloud-sessions-are-the-lane-vehicle)
  ·
  [D-018](../record/DECISIONS.md#d-018--fix-routing-triage-after-lane-review)
  ·
  [D-019](../record/DECISIONS.md#d-019--launch-mechanics-correction)
  · [D-020](../record/DECISIONS.md#d-020--parallel-lanes-v2) ·
  [D-023](../record/DECISIONS.md#d-023--universal-draft-pr-at-birth-and-micro-pr-carve-out)
  · [D-032](../record/DECISIONS.md#d-032--fleet-continuity) ·
  [D-041](../record/DECISIONS.md#d-041--delegation-architecture) ·
  [D-042](../record/DECISIONS.md#d-042--lane-liveness) ·
  [D-043](../record/DECISIONS.md#d-043--cloud-ignition-and-away-command-redesign)
  ·
  [D-046](../record/DECISIONS.md#d-046--flight-cockpit-the-control-tower-online)
  · [D-054](../record/DECISIONS.md#d-054--the-landing-skill) ·
  [D-055](../record/DECISIONS.md#d-055--agent-teams-the-boundary) ·
  [D-058](../record/DECISIONS.md#d-058--atlas-the-system-spine) ·
  [D-078](../record/DECISIONS.md#d-078--the-55-re-ruled-on-the-cold-number).
- [the native-lanes weld](../record/history/workshop/mechanism/parallel-lanes-native.md)
  — the D-020 turn, and the destroyed batch-1 work behind it.
- [flight 4's log](../record/probes/flight-4-freeze.md) — a stopped
  worker leaving no server-side trace.
- Spans cited by the census:
  [#180](https://github.com/wsher0901/roam/pull/180) ·
  [#191](https://github.com/wsher0901/roam/pull/191) ·
  [#193](https://github.com/wsher0901/roam/pull/193).
