---
type: history
slug: laws-polish
shipped: 2026-07-13
pr: 89
---
# laws-polish — LAWS polish: glossed lane law, provenance to consolidations, ship syncs with main

## Status
Shipped — merged as
[PR #89](https://github.com/wsher0901/roam/pull/89) on the founder's
word after the external review. All edits landed as
[D-027](../DECISIONS.md#d-027--2026-07--laws-polish--glossed-lane-law-provenance-re-homed-to-consolidations-ship-syncs-with-main-before-the-weld)
entry + ripple in one commit; every Done-means box verified.

## What this task is
A docs-only polish of the constitution, fully specified in the
Web-chat workshop (slug laws-polish). Three moves: [LAWS](../LAWS.md)
dropped its four inline D-citations and gained one-line whys instead
(provenance lives in the consolidations, which the header now
names); the pacing law — the one LAWS rule not yet consolidated —
landed in
[PROJECT-POLICY §Workshop choices](../SETUP.md)
with its
[D-009](../DECISIONS.md#d-009--2026-06--pacing-law-finish-first-flexible-cap)
provenance; and [ship](../skills/ship.md)'s Preflight gained the
sync-with-main step (merge current origin/main, never rebase) so
what gets tested is exactly what main will contain after the weld —
mirrored in [LAWS §Workflow](../LAWS.md#workflow-non-negotiable) and
[HOME](../HOME.md)'s ship portrait. Lane-law glosses only — no
semantics changed.

## Pending issues
none

## Left / idle
Nothing — the weld that landed this file was the last act
(slug-keyed, no ROADMAP tick; spec finalized in place at
[../specs/laws-polish.md](../specs/laws-polish.md)).

## The story
Born from the laws-polish Web-chat workshop: the founder arrived
with edits 1–10 verbatim and the mechanism pre-decided (one
D-number, entry + ripple in the same commit). D-026 was
[DECISIONS](../DECISIONS.md)' tail, so this landed as
[D-027](../DECISIONS.md#d-027--2026-07--laws-polish--glossed-lane-law-provenance-re-homed-to-consolidations-ship-syncs-with-main-before-the-weld).
A neat recursion: this task rewrote ship's own Preflight, so the
ship that closed it was the first to follow the new procedure — the
origin/main merge ran (a clean "already up to date") before the
gate. Verification all green: zero "D-0" occurrences in LAWS, the
sync step present in ship.md's Preflight, 1104 internal links /
0 broken, lint clean, 3/3 tests, and the branch diff contains
exactly the seven intended files.

## Where to look
- spec: [../specs/laws-polish.md](../specs/laws-polish.md)
- PR: [#89](https://github.com/wsher0901/roam/pull/89)
  (squash-merged 2026-07-13)
- decision:
  [D-027](../DECISIONS.md#d-027--2026-07--laws-polish--glossed-lane-law-provenance-re-homed-to-consolidations-ship-syncs-with-main-before-the-weld)
- edited files: [LAWS](../LAWS.md) ·
  [PROJECT-POLICY](../SETUP.md) · [ship](../skills/ship.md) ·
  [HOME](../HOME.md)
- the laws-polish workshop chat (Web) — where edits 1–10 were cut
