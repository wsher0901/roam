---
type: spec
id: currency-audit
title: Docs currency audit — every live instruction that points at retired machinery, and every orphan
status: open
stage: workshop
branch: docs/currency-audit
pr: —
opened: 2026-07-23
shipped: —
---

# currency-audit — no live instruction points at machinery that cannot fire

**Links:**
[LAWS](../LAWS.md) · [HOME](../HOME.md) · [SETUP](../SETUP.md) ·
the class of defect this hunts:
[clerk-retirement](../history/workshop/mechanism/clerk-retirement.md)
([#197](https://github.com/wsher0901/roam/pull/197)) ·
[D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
·
[D-047](../DECISIONS.md#d-047--2026-07--cloud-born-cockpit--the-cockpits-birth-vehicle-becomes-claude---cloud-list-native-on-every-device-the-automated-hidden-console-birth-is-liftoffs-primary-rung-the-routine-fire-demotes-to-fallback--summon-button-engine-amends-d-046-clause-3-upholds-the-lane-law)
·
[D-048](../DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047)

## Goal

Find and fix every LIVE instruction in the repo that points at
machinery that no longer exists, and inventory every orphaned file —
without touching the record. The danger is narrow and specific: an
instruction a future seat would OBEY that can no longer work. That is
exactly the class [#197](https://github.com/wsher0901/roam/pull/197)
fixed when the clerk was retired but the repo kept reaching for it.

The governing principle is **annotation beats deletion**.
[history/](../history/), [specs/](.), and
[DECISIONS](../DECISIONS.md) entries are immutable record: never
deleted, never rewritten. A superseded record earns a dated
supersession note naming what replaced it — nothing more.

## Out of scope

- **[WEB-INSTRUCTIONS.md](../WEB-INSTRUCTIONS.md) — its own bench.**
  It carries the Project-instructions master at v4 (the paste-block
  loop, no cockpit) and needs a full v5 rewrite. Named in Pending
  below as the next bench; NOT touched here.
- `docs/history/**` — immutable record, read-only for this bench.
- Deleting anything. Nothing is deleted in this bench, orphans
  included.
- Rewriting any RECORD file's substance. Supersession notes only.
- Product decisions. If a product-side doc contradicts doctrine, it
  is FLAGGED here, not silently rewritten.

## Plan

1. **PART A — classify.** Read every non-history `.md` in `docs/`
   plus `.claude/`, `scripts/`, `package.json`, `.env.example`,
   `.github/workflows/`. Put every file in exactly one bucket in the
   table below: LIVING-CURRENT · LIVING-STALE · RECORD ·
   RECORD-NEEDS-SUPERSESSION-NOTE · ORPHAN · UNCLEAR.
2. **PART B — fix**, only what is mechanical and safe:
   1. Every LIVING-STALE instruction, judged against current law.
      Grep retired nouns AND their synonyms — the lesson of
      [#197](https://github.com/wsher0901/roam/pull/197) is that a
      verification phrased around one verb misses its synonyms.
   2. Dated supersession notes on RECORD files whose machinery is
      retired.
   3. ORPHANS: listed, never deleted — each with the home it should
      be linked from or a retire recommendation, for the founder's
      word at the gate.
3. **PART C — recommend**, never assume: [go-remote](../skills/go-remote.md) ·
   [machine-setup](../skills/machine-setup.md) ·
   [recall](../skills/recall.md) ·
   [DESIGN-KICKOFF](../DESIGN-KICKOFF.md) · [ENGINE](../ENGINE.md) ·
   [FOUNDATION](../FOUNDATION.md) · [data/](../data/) ·
   `.env.example` · [HOME](../HOME.md).

## The law this bench judges against

| Law | What it makes current |
|---|---|
| [D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock) | cockpit = the control tower online; no-solo-approval; CC-direct surface doctrine; Remote Control demoted to backstop |
| [D-047](../DECISIONS.md#d-047--2026-07--cloud-born-cockpit--the-cockpits-birth-vehicle-becomes-claude---cloud-list-native-on-every-device-the-automated-hidden-console-birth-is-liftoffs-primary-rung-the-routine-fire-demotes-to-fallback--summon-button-engine-amends-d-046-clause-3-upholds-the-lane-law) | `--cloud` birth is the route of record; the routine demoted to backstop |
| [D-048](../DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047) | the connector ladder; the summon workflow; the tombstone |
| [#193](https://github.com/wsher0901/roam/pull/193) | board-governs; the API dependency map |
| [#197](https://github.com/wsher0901/roam/pull/197) | the clerk is retired — routine deleted |

## PART A — the classification table

<!-- filled by PART A; every file read appears in exactly one bucket -->

## PART B — what was fixed

<!-- filled by PART B; each file with its bucket and the law that dates it -->

## PART C — recommendations

<!-- filled by PART C; a recommendation per named surface, never an assumption -->

## Done means

- [ ] The classification table covers EVERY file read, none
      unclassified.
- [ ] Greps for each retired noun return only record-with-
      supersession-note or zero.
- [ ] Every LIVING-STALE instruction fixed, or explicitly deferred
      with a reason.
- [ ] Every RECORD file whose machinery is retired carries a dated
      supersession note — note only, no rewrite.
- [ ] The ORPHAN list is complete, nothing deleted, each entry
      carrying a home or a retire recommendation.
- [ ] A PART C recommendation exists for each named surface.
- [ ] `check:links` · `check:ledger` · `check:memory` green.
- [ ] Full CI mirror green locally AND the pushed head's Actions run
      green.
- [ ] [ship §6](../skills/ship.md) critic runs; verdict rides to the
      founder verbatim.

## Pending

**The next bench: [WEB-INSTRUCTIONS.md](../WEB-INSTRUCTIONS.md) v5.**
It carries the Project-instructions master at v4 — written around the
paste-block loop, with no cockpit in it. Post-[D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
that master is stale in its bones, not at its edges, so it needs a
full rewrite rather than the mechanical fixes this bench applies.
Deliberately untouched here.

## Deviations

<filled by /ship: anything done differently than planned — or "none">

## Open questions

The ORPHAN list and the PART C recommendations both carry to THE
GATE for the founder's word. This bench ships to the gate and does
NOT merge.
