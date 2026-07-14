---
type: history
slug: fix-routing-triage
shipped: 2026-06-12
pr: 43
---

# What happens after lanes finish

## What shipped

([D-018](../../../DECISIONS.md#d-018--2026-06--fix-routing-triage-after-lane-review-extends-d-017))
· Claude now reviews finished lane PRs before the founder does and
routes each fix by smallest-sufficient-context — stay on the lane's
branch, teleport into the lane, or open a new lane — with the
founder agreeing or overriding every call →
[PR #43](https://github.com/wsher0901/roam/pull/43)

## Story

D-018 codified what happens after lanes finish: Claude reviews the lane
PRs before the founder does, and every surfaced issue carries a routing
recommendation — stay on the lane's branch (the default), teleport into
the lane's own reasoning, or open a new lane — chosen by
smallest-sufficient-context, with the founder agreeing or overriding
every call.
