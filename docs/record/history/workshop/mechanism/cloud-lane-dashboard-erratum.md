---
type: history
slug: cloud-lane-dashboard-erratum
shipped: 2026-06-12
pr: 48
---

# Erratum: where cloud lanes are watched

## What shipped

The docs
now point to claude.ai/code (and the mobile app) as the lane
dashboard — the earlier `/tasks` references were wrong, since that
command only lists the current session's local work →
[PR #48](https://github.com/wsher0901/roam/pull/48)

## Story

A live-discovered erratum: /tasks lists only the current session's
local background work — cloud sessions never appear there, so the docs'
monitoring pointers were wrong. Corrected to claude.ai/code and the
mobile app, with /teleport documented as an entry door (one-way, pulls
the session local), not a dashboard.
