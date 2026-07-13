---
type: history
slug: engine-swap
shipped: 2026-07-11
pr: 71
---

# The engine swap: architecture v2

## What shipped

The workshop's operating system, replaced in one PR
([D-023](../DECISIONS.md#d-023--2026-07--universal-draft-pr-at-birth--micro-pr-carve-out-recut-amends-d-002-d-008-d-020),
[D-024](../DECISIONS.md#d-024--2026-07--architecture-v2-memoryhistory-narrative-layer-dashboard-as-sole-state-surface-rituals-as-skills-amends-d-008-retires-handoffmd--shiplogmd)):
[LAWS.md](../LAWS.md) became the constitution (root CLAUDE.md is now
a two-line import), [PROJECT-POLICY](../PROJECT-POLICY.md) was born
beside [DECISION-POLICY](../ENGINE.md), the five rituals
plus the [parallel-lanes](../skills/parallel-lanes.md) manual became
skills with vault-readable procedures in
[docs/skills/](../skills/), every task gained the memory→history
narrative lifecycle, the shiplog's 35 entries were backfilled into
[history/](README.md), the handoff note retired, and
[DASHBOARD](../DASHBOARD.md) v5 became the sole state surface →
[PR #71](https://github.com/wsher0901/roam/pull/71)

## Story

Phase 3 of the ops — knowledge architecture thread, and the largest
workshop PR to date. The founder's brief arrived fully structured
(five commits, eight verification gates) but named three texts as
"founder-approved … verbatim" without including them; the executor
flagged the gap instead of reconstructing a constitution it had
never seen, the fallback offer was declined, and the supplement
delivered LAWS v3, handoff, and ship word-for-word. Notable
mechanics: ship now FLIPS a draft PR that has existed since the
task's birth (bench-first, D-023) and welds ROADMAP tick +
memory→history move + spec finalize into one atomic bookkeeping
commit; the micro-PR carve-out was recut around DASHBOARD/IDEAS; the
global gh-pr-merge allowance left settings.json and returned only as
narrow per-ritual allowed-tools on handoff, ship, and liftoff. Since
SHIPLOG died in commit 3, this file — written before its own merge —
is the first history entry born as one rather than backfilled.

## Where to look

[LAWS.md](../LAWS.md) · [docs/skills/](../skills/) ·
[memory/TEMPLATE.md](../memory/TEMPLATE.md) ·
[DASHBOARD](../DASHBOARD.md) ·
[PR #71](https://github.com/wsher0901/roam/pull/71) (Deviations
section) · the Web chat "Ops — knowledge architecture" (phases 4+
still to come).
