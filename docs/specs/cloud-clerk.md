---
type: spec
id: cloud-clerk
title: Cloud clerk — the founder's away-mode concierge
status: open
stage: workshop
branch: docs/cloud-clerk
pr: —
opened: 2026-07-16
shipped: —
---

# cloud-clerk — the founder's away-mode concierge

**Links:**
[D-043](../DECISIONS.md#d-043--2026-07--cloud-ignition--away-command-redesign--route-ladder-v2-ready-flip-then-label-is-the-recipe-of-record-api-ignition-and-the-cloud-clerk-staged-the-claude-app-the-single-away-surface-amends-d-041-upholds-the-lane-law-and-the-wake-lock)
· [SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
· [SETUP §Staged](../SETUP.md#staged--turns-on-when-its-stage-opens)
·
[parallel-lanes §Answering a lane](../skills/parallel-lanes.md#answering-a-lane-the-mail-slot)
· [liftoff](../skills/liftoff.md) ·
[maiden verify list — parallel-lanes §Cloud spawn](../skills/parallel-lanes.md#cloud-spawn--route-ladder)

## Goal

Execute D-043's staged cloud-clerk task — first need named by the
founder 07-16/17. The clerk is the manually-born, cap-free
away-surface session with a narrow read-and-relay charter: it reads
origin and reports, posts PR comments only on founder dictation,
and never writes, merges, or holds the baton. Deliverables: the
charter MASTER in SETUP §cloud accounts (box-is-a-copy), this
spec's verify checklist (founder-run), the staged-line flip to "in
verification", the answering-a-lane row, and liftoff's conditional
step.

## Out of scope

- api-ignition — D-043's other staged task; its own first need.
- Any clerk write capability — the charter is read-and-relay by
  design; widening it takes a [decide](../skills/decide.md).
- Automating clerk birth — the manual paste IS the mechanism
  (cap-free by construction: a plain session, not a routine).

## The clerk's verify checklist (the clerk's own maiden)

Founder-run; results recorded in this bench's memory. C1–C6 gate
the MERGE, not the ready-flip — this bench rides to THE GATE with
the checklist pending (founder instruction at kickoff, 07-16).

- [x] C1 — reports the board/lanes correctly from a fresh read.
- [x] C2 — posts a dictated comment (target: bench A's PR,
      [#155](https://github.com/wsher0901/roam/pull/155)) and the
      link checks out.
- [x] C3 — refuses an out-of-charter ask (e.g. "edit the README").
- [x] C4 — usable from the phone's Claude app; ergonomics noted.
- [x] C5 — longevity: idle ≥3h (overnight ideal), then answers
      correctly. This datum also completes maiden verify item 5 —
      a blocked lane survives a real idle gap
      ([parallel-lanes §Cloud spawn](../skills/parallel-lanes.md#cloud-spawn--route-ladder)).
- [x] C6 — whether the app pushes anything on the clerk's turns
      (feeds the doorbell decision + attest b).

All six flown founder-run 2026-07-17, all green; results verbatim
in this bench's memory (extra findings recorded there as C7).

## Plan

1. Bench birth: branch · this spec · memory stub · draft PR.
2. The charter MASTER, fenced verbatim in
   [SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts),
   beside the lane-worker master (same box-is-a-copy rule).
3. [SETUP §Staged](../SETUP.md#staged--turns-on-when-its-stage-opens)
   — the cloud-clerk line flips to "in verification", linking this
   bench.
4. [parallel-lanes §Answering a lane](../skills/parallel-lanes.md#answering-a-lane-the-mail-slot)
   — the machine-off row gains "cloud clerk (in verification)".
5. [liftoff](../skills/liftoff.md) — one conditional step:
   spawn/verify the clerk (pending clerk verification — see this
   bench).
6. Verification greps + full CI mirror + Actions green → THE GATE.
7. The founder births the clerk (claude.ai/code → new session on
   wsher0901/roam → paste the charter from SETUP) and runs C1–C6;
   results land in this bench's memory.
8. IF the checklist is green: promotion to primary — the GitHub app
   demoted to backstop in the answering-a-lane row — recorded in
   this same PR before it gates.

## Done means

- [x] The charter master is fenced verbatim in SETUP §cloud
      accounts.
- [x] Checklist C1–C6 present in this spec.
- [x] SETUP §Staged's cloud-clerk line reads "in verification" and
      links this bench.
- [x] parallel-lanes' machine-off row names the cloud clerk (in
      verification).
- [x] liftoff carries the conditional spawn/verify-the-clerk step.
- [ ] Full CI mirror green; the pushed commit's Actions run green.
      (Ticked at the weld — the box describes the very Actions run
      that can only exist after this spec's final commit.)
- [x] C1–C6 founder-run, results in this bench's memory — gates the
      merge, not the ready-flip (see §The clerk's verify checklist).

## Verification

- grep `Roam cloud clerk` → the fenced charter in `docs/SETUP.md`.
- grep `in verification` → the SETUP §Staged cloud-clerk line.
- grep `cloud clerk (in verification)` → the answering-a-lane
  machine-off row in `docs/skills/parallel-lanes.md`.
- grep `spawn/verify the clerk` → the liftoff conditional step.
- grep `C1|C2|C3|C4|C5|C6` → all six present in this spec.

## Deviations

One post-gate amendment on founder instruction (2026-07-16 23:53,
same PR): [parallel-lanes §Cloud spawn](../skills/parallel-lanes.md#cloud-spawn--route-ladder)
gained a session-hygiene sentence — after a cloud lane's weld, end
its session at claude.ai/code; an idle completed session can
resurrect its deleted branch on wake events (observed 2026-07-17).
Outside the original five deliverables; the memory's story carries
the observation.

Promotion-commit extensions (founder instruction 2026-07-17, with
the merge word):
[SETUP §Staged](../SETUP.md#staged--turns-on-when-its-stage-opens)
gained two lines beside api-ignition — clerk-notify and
clerk-autospawn — and the cloud-clerk "in verification" staged line
retired (the clerk is live; its home is now
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)).
Post-promotion, §Verification greps 2–3 read historically: "in
verification" no longer appears — the row now names the clerk
PRIMARY. Narrated in the memory.

## Open questions

none — promotion is conditional on the checklist (Plan 8).
