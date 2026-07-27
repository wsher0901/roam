---
type: spec
id: record-shelf
title: The record shelf — docs/record/ is born, the frozen record in one place ([D-057](../DECISIONS.md#d-057--2026-07--the-record-shelf--the-frozen-record-moves-under-one-roof-docsrecord-is-born-history--specs--decisions-in-memory-stays-living-at-root-the-enabling-ruling--a-mechanical-link-path-segment-repair-inside-a-frozen-file-is-maintenance-not-a-content-edit-append-only-governs-meaning-not-bytes-intra-record-links-resolve-by-construction-upholds-append-only-one-home-and-the-weave-rule))
status: open
stage: workshop
branch: docs/record-shelf
pr: —
opened: 2026-07-27
shipped: —
---

# record-shelf — the frozen record moves under one roof

**Links:**
[D-057](../DECISIONS.md#d-057--2026-07--the-record-shelf--the-frozen-record-moves-under-one-roof-docsrecord-is-born-history--specs--decisions-in-memory-stays-living-at-root-the-enabling-ruling--a-mechanical-link-path-segment-repair-inside-a-frozen-file-is-maintenance-not-a-content-edit-append-only-governs-meaning-not-bytes-intra-record-links-resolve-by-construction-upholds-append-only-one-home-and-the-weave-rule)
· queue: the founder's 2026-07-27 three-bench mandate (bench 1 of
3).

## Goal

Give the frozen record one shelf: `docs/record/` is born, and the
three append-only surfaces move into it — `docs/history` →
`docs/record/history`, `docs/specs` → `docs/record/specs`,
`docs/DECISIONS.md` → `docs/record/DECISIONS.md` — as recorded
renames (`git mv`). `docs/memory/` stays at root (in-flight is
living); everything else stays at root — the living system. The
decision also mints THE ENABLING RULING: a mechanical path-segment
repair inside a frozen file is MAINTENANCE, not a content edit —
append-only governs meaning, not bytes.

## Out of scope

- Any prose change anywhere in `record/` — the ruling licenses
  link path segments ONLY.
- Rewriting intra-record links (history ↔ DECISIONS ↔ specs):
  they keep resolving BY CONSTRUCTION because all three moved
  together — verified, not rewritten.
- The ATLAS and the chronicle layer (benches 2 and 3 of the same
  queue).
- Performing the post-weld vault-lens re-seed (a per-seat manual
  act, reported at the gate).

## Plan

1. Bench birth: branch, this spec, memory stub, draft PR.
2. `git mv` the three surfaces into `docs/record/`.
3. Mint the D-number: `docs/record/` born + the enabling ruling.
4. Sweep every broken link: frozen files linking UP to living
   roots gain one `../`; living files linking DOWN gain `record/`.
5. Rewire the machinery that hardcodes paths:
   `scripts/check-ledger.mjs` · ship's weld destination · recall +
   HOME's routing table · LAWS' routing clauses ·
   `.claude/agents/reviewer.md` ·
   `.claude/vault-seed/graph.json` (`-path:history` →
   `-path:record`) · then grep the whole tree for `docs/history`,
   `docs/specs`, and `DECISIONS.md` paths to catch stragglers.
6. Verification loop, full CI mirror, Actions green, gate report.

## Done means

- [ ] `docs/record/history/`, `docs/record/specs/`, and
      `docs/record/DECISIONS.md` exist on the branch as recorded
      renames; `docs/history`, `docs/specs`, `docs/DECISIONS.md`
      are gone.
- [ ] The D-number entry exists in `docs/record/DECISIONS.md` with
      the enabling ruling, and every anchor to it resolves.
- [ ] `npm run check:links` reports 0 broken.
- [ ] `check:ledger` + `check:memory` green after their path
      updates; full CI mirror green; the pushed head's Actions run
      green.
- [ ] The review criterion, mechanically checkable: the PR diff
      over `record/history/**` and `record/specs/**` contains ONLY
      link-path-segment hunks — with one stated exception, this
      bench's own spec, the sole NEW file under `record/specs/`
      (born at `docs/specs/` and carried by the move).

## Deviations

<filled by /ship: anything done differently than planned — or
"none">

## Open questions

none
