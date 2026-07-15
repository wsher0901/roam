---
type: history
slug: skills-precision-pass
shipped: 2026-07-15 10:24
pr: 128
---
# skills-precision-pass — Skills precision pass

## Status
Shipped — merged as
[PR #128](https://github.com/wsher0901/roam/pull/128) on the founder's
word, with one gate-approved amendment (the ghost retirement widened
to HOME + TEMPLATE). Every gate on the way out waited on the pushed
commit's Actions run going green
([D-038](../../../DECISIONS.md#d-038--2026-07--ci-is-the-arbiter--actions-green-required-at-every-gate-local-gate-mirrors-all-six-ci-steps-d-anchors-born-resolving-upholds-d-027)).

## What this task is
Codify already-decided behavior across the skill corpus and repair
seven audited precision defects so every skill is deterministic and
self-consistent. Zero new behavior, no new D-number — the pass cites
D-032, D-040, and the cloud-lane-dashboard erratum. Eight surgical
edits in one commit across decide.md (+ its stub), handoff.md (four
spots), liftoff.md (two spots), parallel-lanes.md, and recall.md;
plus a gate-approved amendment finishing the ghost retirement in
HOME.md and TEMPLATE.md. Out of scope: any behavior change, structural
rewrites, history/, LAWS.

## Pending issues
- none. The TEMPLATE.md "abort ledger" ghost flagged at the gate was
  retired here too, alongside a matching one in HOME.md, once the
  founder approved widening the carve-out (see The story + the spec's
  Deviations).

## Left / idle
Nothing parked.

## The story
Born this session from the kickoff, immediately after
[D-040](../../../DECISIONS.md#d-040--2026-07--handoff-input-inversion--the-leaving-message-carries-the-webdesign-paste-inline-the-never-skipped-question-is-retired-a-bare-trigger-means-none-amends-the-two-touchpoints-laws-wording-upholds-d-032)
shipped. The audit found seven precision defects where a skill's
wording lagged an already-made decision: decide's ripple list omitted
LAWS/HOME; the handoff park stamp claimed a rescue-save that may not
have run; handoff never said cloud lanes are exempt from parking
([D-032](../../../DECISIONS.md#d-032--2026-07--fleet-continuity--handoff-parks-every-local-lane-liftoff-respawns-parked-benches-wake-lock-parks-every-outcome-extends-the-d-020d-023-lane-law-upholds-d-009)
parks LOCAL only); §3 folded the whole paste per-task instead of the
task-relevant lines; the Sessions table wasn't named as the single
home for every lane row (the erratum); the retired "abort ledger" /
"Cloud section" ghost still lingered in three skills; and liftoff §1
described handoff's close as "absorbed" rather than skipped. Each edit
codifies the decision already in force — no new behavior.

At the gate, the founder approved a scope carve-out: the ghost hunt,
originally scoped to `docs/skills/`, widened to all of `docs/`
(bar immutable `history/`), which surfaced two more live "abort
ledger" mentions — `TEMPLATE.md`'s `cloud spawn failed` row and
`HOME.md`'s canary-handshake portrait. Both were repointed to "the
board's Sessions row (+ Needs-you mirror)" on this same branch, so the
only surviving mentions outside `history/` are now this task's own
spec and this story — the retirement narrative itself.

## Where to look
Spec:
[skills-precision-pass](../../../specs/skills-precision-pass.md) ·
the edited skills: [decide](../../../skills/decide.md),
[handoff](../../../skills/handoff.md),
[liftoff](../../../skills/liftoff.md),
[parallel-lanes](../../../skills/parallel-lanes.md),
[recall](../../../skills/recall.md) · the erratum this codifies:
[cloud-lane-dashboard-erratum](cloud-lane-dashboard-erratum.md).
