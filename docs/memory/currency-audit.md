---
type: memory
id: currency-audit
updated: 2026-07-23 · birth · work PC
---

# currency-audit — docs currency audit

## Status

bench ready — born bench-first from the fresh main tip
(`1c4b3a9`, the [#203](https://github.com/wsher0901/roam/pull/203)
tail). Spec and this stub are the first commits; the draft PR is the
public window. The control tower works this bench itself.

## What this task is

One theme: find and fix every LIVE instruction that points at retired
machinery, and inventory every orphaned file, without touching the
record.

The danger is narrow. Not "docs that read oddly" — an instruction a
future seat would OBEY that can no longer work. That is the class
[#197](https://github.com/wsher0901/roam/pull/197) fixed: the clerk
routine was deleted on 07-22, and the repo went on telling seats to
reach for it.

The governing principle is **annotation beats deletion**.
[history/](../history/), specs, and DECISIONS entries are immutable
record — never deleted, never rewritten. A superseded record earns a
dated supersession note naming what replaced it, and nothing else.
Scope edges live in [the spec](../specs/currency-audit.md).

## Pending issues

- The ORPHAN list and the PART C recommendations carry to THE GATE
  for the founder's word. This bench ships to the gate and does NOT
  merge.
- Tower-authored, so [no-solo-approval](../LAWS.md) requires an
  external Web review before the founder's word.

## Left / idle

Everything: PART A (classify), PART B (fix), PART C (recommend).

## The story

**Birth.** Origin carried two heads, not the one the mandate
expected: `main` plus `chore/liftoff-findings`. The second turned out
to be already merged — it landed as
[#202](https://github.com/wsher0901/roam/pull/202) and only its
remote ref survived the squash. So STEP 0 was satisfied in substance:
no live unmerged work anywhere on origin, and this bench was born
from the true fresh tip. The stale ref was left alone rather than
deleted; deleting remote refs is not this bench's business.

The session began in the `chore+env-clerk-scrub` worktree — the
leftover of the completed [#200](https://github.com/wsher0901/roam/pull/200)
lane, sitting on the already-merged `chore/liftoff-findings` branch.
Rather than work a dead lane's tree, this bench got its own worktree
cut from `origin/main`.

## Where to look

- [the spec](../specs/currency-audit.md) — scope edges, the law
  table this bench judges against, and the three PART results.
- [#197](https://github.com/wsher0901/roam/pull/197)
  ([story](../history/workshop/mechanism/clerk-retirement.md)) — the
  defect class this bench generalizes.
- [D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
  ·
  [D-047](../DECISIONS.md#d-047--2026-07--cloud-born-cockpit--the-cockpits-birth-vehicle-becomes-claude---cloud-list-native-on-every-device-the-automated-hidden-console-birth-is-liftoffs-primary-rung-the-routine-fire-demotes-to-fallback--summon-button-engine-amends-d-046-clause-3-upholds-the-lane-law)
  ·
  [D-048](../DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047)
  — the current law every LIVING-STALE finding is judged against.
