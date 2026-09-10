---
type: probe-record
title: The summon fire — push to a live cockpit in 13.7 seconds (2026-08-05)
status: frozen
---

# The summon fire — the first ignition observed from the firing side

The MEASUREMENT taken when [summon](../../skills/liftoff.md) was
fired on 2026-08-05, and the CORRECTION that fire forced. It is
kept apart from [the summon test](summon-test.md), which records
what the summoned SEAT did — held, refused to seat itself, refused
the supersession its own payload asserted, and returned five
findings. This file records what the FIRING SIDE could see, which
no previous ignition had ever exposed.

**This measurement had no record home until this file existed.** It
sat in [DASHBOARD](../../DASHBOARD.md)'s Recent section from
2026-08-05, carrying its own warning that it was sitting there
because verify-before-drop
([LAWS §Knowledge & tracking](../../LAWS.md#knowledge--tracking))
forbids deleting a narrative with nowhere to go — flight 4's probe
([flight-4-freeze](flight-4-freeze.md)) is frozen and shipped, so it
could not absorb this. The block below is that content, MOVED
VERBATIM; the move is the record, and the board's warning retires
with it.

---

**SUMMON IS NOT A BLIND FIRE — the first ignition ever observed
from the firing side.** Every previous one was blind (liftoff
cannot see the session it raises, which is why the `fired` stamp
has always been a paint stamp rather than an event, measured
4m00s early on flight 4). Summon returns the session URL to the
firing seat through its own run.

| Moment | Time (UTC) | Read from |
|---|---|---|
| the push to `ops/summon` | 13:54:05 | the desk's shell clock, before the command |
| push returned | 13:54:08 | same, after |
| workflow run created | 13:54:10 | Actions API |
| job started | 13:54:12 | Actions API |
| **cockpit fired, session returned** | **13:54:18.69** | the fire step's own stdout |
| `ops/summon` ref deleted | 13:54:19 | Actions API |
| run complete | 13:54:21 | Actions API |

**PUSH TO A LIVE COCKPIT: 13.7 SECONDS**, one command, no API path
on the firing side — the property rung 4 exists for. One push was
exactly one rescue: the ref is gone.

⚠️ **AND A CORRECTION THIS FIRE FORCED, which the board carried
wrong for several paints: the summon workflow was NOT "unflown".**
It flew 2026-07-23 — run `30028067870`, "summon: rescue drill",
event `push`, success, session returned. The mechanism was proven
then. What had never been exercised is what was under test on
08-05: a ROUTINE-BORN cockpit reading the SAVED BOX at v4, which
landed 2026-07-30, a week after that drill. Every flight between
was `--cloud`-born, which pastes the charter from the master
instead of reading the box.

---

## Why it is a probe record rather than a story

The [chronicle](../../chronicle/INDEX.md) holds STORIES — an item's
arc, with an ending a later weld rewrites. This is neither: it is a
frozen instrument reading, taken once, by one seat, with its
sources named per cell. It belongs on the same shelf as
[the summon test](summon-test.md),
[flight-4-freeze](flight-4-freeze.md),
[flight-1-shakedown](flight-1-shakedown.md) and
[cloud-birth-in-ci](cloud-birth-in-ci.md) — measurements that
outlive the sitting that took them and are never revised, only
cited.

Moved here on 2026-09-10 by the `product-first` bench
([D-086](../DECISIONS.md#d-086--workshop-the-product-first-window)
ruling 4 is what made the board's copy unlawful to keep, and
verify-before-drop is what made this file the precondition of
removing it).
