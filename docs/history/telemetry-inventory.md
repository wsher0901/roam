---
type: history
slug: telemetry-inventory
shipped: 2026-06-12
pr: 35
---

# The system learns to record itself

## What shipped

([V1.S1.T1](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
amendment 2) · New [TELEMETRY.md](../data/TELEMETRY.md) defines what
Roam captures about its own behavior — usage events, a claim
ledger, eval runs, actuals, source health — captured from day one,
used later
([D-014](../DECISIONS.md#d-014--2026-06--telemetry-posture-capture-now-use-later))
→ [PR #35](https://github.com/wsher0901/roam/pull/35)

## Story

Amendment 2 completed the five-purpose vocabulary audit: TELEMETRY.md
defined everything the system records about itself — behavior events
under a strict privacy floor (consent-gated, pseudonymous, no PII, the
exposure law recording the full slate shown, not just the click), the
claim ledger and eval runs, actuals for calibration, and source health
feeding the ladder. Captured from day one because events cannot be
backfilled (D-014).
