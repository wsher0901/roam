---
type: memory
id: skills-precision-pass
updated: 2026-07-15 · birth · work PC
---
# skills-precision-pass — Skills precision pass

## Status
complete, awaiting merge — the eight surgical edits are on origin in
one commit ([PR #128](https://github.com/wsher0901/roam/pull/128)).
Local CI mirror green; the three verification greps pass; the PR is
flipped ready and sits at THE GATE. Not merged: founder approval
follows external review in the Web chat.

## What this task is
Codify already-decided behavior across the skill corpus and repair
seven audited precision defects so every skill is deterministic and
self-consistent. Zero new behavior, no new D-number — the pass cites
D-032, D-040, and the cloud-lane-dashboard erratum. Eight surgical
edits in one commit across decide.md (+ its stub), handoff.md (four
spots), liftoff.md (two spots), parallel-lanes.md, and recall.md.
Out of scope: any behavior change, structural rewrites, history/,
LAWS, HOME, and TEMPLATE (unless a Status word is missing).

## Pending issues
- TEMPLATE.md line 43 still names "abort ledger" in the `cloud spawn
  failed` row's Written-by column — a surviving ghost. This pass
  gates TEMPLATE edits behind "only if a Status word is missing" (none
  are), and the verification grep is scoped to `docs/skills/`, so
  TEMPLATE is out of scope by the kickoff's own design. Flag it at the
  gate as a follow-up candidate; do NOT touch TEMPLATE in this PR.

## Left / idle
Nothing before merge. On the founder's yes (after Web review): the
atomic weld — no ROADMAP tick (workshop task), git mv this memory to
history/workshop/mechanism/ (these are ritual-procedure edits — what
the workshop does), spec frontmatter → shipped, ledger line,
squash-merge.

## The story
Born this session from the kickoff, immediately after
[D-040](../DECISIONS.md#d-040--2026-07--handoff-input-inversion--the-leaving-message-carries-the-webdesign-paste-inline-the-never-skipped-question-is-retired-a-bare-trigger-means-none-amends-the-two-touchpoints-laws-wording-upholds-d-032)
shipped. The audit found seven precision defects where a skill's
wording lagged an already-made decision: decide's ripple list omitted
LAWS/HOME; the handoff park stamp claimed a rescue-save that may not
have run; handoff never said cloud lanes are exempt from parking
([D-032](../DECISIONS.md#d-032--2026-07--fleet-continuity--handoff-parks-every-local-lane-liftoff-respawns-parked-benches-wake-lock-parks-every-outcome-extends-the-d-020d-023-lane-law-upholds-d-009)
parks LOCAL only); §3 folded the whole paste per-task instead of the
task-relevant lines; the Sessions table wasn't named as the single
home for every lane row (the erratum); the retired "abort ledger" /
"Cloud section" ghost still lingered in three skills; and liftoff §1
described handoff's close as "absorbed" rather than skipped. Each edit
codifies the decision already in force — no new behavior.

## Where to look
Spec: [skills-precision-pass](../specs/skills-precision-pass.md) ·
the edited skills: [decide](../skills/decide.md),
[handoff](../skills/handoff.md), [liftoff](../skills/liftoff.md),
[parallel-lanes](../skills/parallel-lanes.md),
[recall](../skills/recall.md) · the erratum this codifies:
[cloud-lane-dashboard-erratum](../history/workshop/mechanism/cloud-lane-dashboard-erratum.md).
