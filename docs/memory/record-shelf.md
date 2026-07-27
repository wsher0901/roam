---
type: memory
id: record-shelf
updated: 2026-07-27 19:42 · ship (complete, awaiting merge) · home PC
---

# record-shelf — the frozen record moves under one roof

## Status

Complete, awaiting merge — 2026-07-27 19:42, home PC. Bench 1 of
the founder's three-bench queue (record shelf → ATLAS → chronicle
layer). The moves, the
[D-057](../record/DECISIONS.md#d-057--2026-07--the-record-shelf--the-frozen-record-moves-under-one-roof-docsrecord-is-born-history--specs--decisions-in-memory-stays-living-at-root-the-enabling-ruling--a-mechanical-link-path-segment-repair-inside-a-frozen-file-is-maintenance-not-a-content-edit-append-only-governs-meaning-not-bytes-intra-record-links-resolve-by-construction-upholds-append-only-one-home-and-the-weave-rule)
entry, the sweep, and the machinery are all in; every local gate
green; the review criterion proven mechanically (the record diff,
links normalized, is byte-identical line-for-line — the sole
exception the bench's own spec). At THE GATE — no merge without
the founder's word.

## What this task is

`docs/record/` is born — the frozen shelf. Three `git mv` renames:
`docs/history` → `docs/record/history` · `docs/specs` →
`docs/record/specs` · `docs/DECISIONS.md` →
`docs/record/DECISIONS.md`. `memory/` stays at root (in-flight is
living). The bench mints the next D-number carrying the enabling
ruling — a mechanical path-segment repair inside a frozen file is
MAINTENANCE, not a content edit — then sweeps every broken link
and rewires the path-hardcoding machinery. Scope edge: link path
segments only, zero prose changes anywhere in `record/`.

## Pending issues

none

## Left / idle

Verification and the gate report. Post-weld manual act (per seat,
reported at the gate, not performed): "apply the vault lens"
re-seeds the graph filter.

## The story

Born 2026-07-27 from the founder's queue mandate, decided in the
ops chat: the frozen record (history, specs, decisions) gets one
shelf so the living system and the record stop interleaving at
docs/ root. Autonomy granted on link-repair mechanics;
out-of-mandate catches follow the
[#197](https://github.com/wsher0901/roam/pull/197) rule — fix,
annotate, disclose at the gate. Intra-record links keep resolving
by construction (all three surfaces move together, so their
relative distances are preserved); the sweep therefore touches
only frozen→living links (one `../` deeper) and living→frozen
links (gain `record/`). Execution notes: the sweep ran as a
one-shot deterministic script — resolve every link from the
file's OLD location, map moved targets into `record/`, recompute
the relative path from the NEW location — so unmoved
relationships emerged byte-identical and only genuinely broken
links changed (1579 rewrites across 158 files, plus ONE manual
repair: a wrapped multi-line link in the currency-audit spec that
the line-based scan could not see; the checker caught it).
Machinery rewired: `check-ledger.mjs` walker root, the reviewer
agent's two paths, the vault-seed graph filter (`-path:history` →
`-path:record` — the color groups match by substring and needed
nothing), ship's weld destination + staging command,
parallel-lanes' spec path, LAWS' task anatomy, HOME's labels and
routing tables, WEB-INSTRUCTIONS' two paths, machine-setup's lens
prose.

## Where to look

- Spec:
  [docs/record/specs/record-shelf.md](../record/specs/record-shelf.md)
  (born at `docs/specs/`, carried by this branch's own move).
- The founder's queue mandate: this session's conversation,
  2026-07-27.
- Machinery inventory (surveyed at birth): `scripts/check-ledger.mjs`
  (hardcodes `docs/history`) · `.claude/agents/reviewer.md` (spec +
  history paths) · `.claude/vault-seed/graph.json` (`-path:history`
  filter) · living docs' links enumerated by `npm run check:links`
  after the move.
