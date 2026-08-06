---
type: chronicle-story
shelf: III — the information system
status: living
updated: 2026-08-06 · written · cloud lane
---

# The record shelf — `docs/record/`

> **CURRENT ENDING (2026-08-06).** Born and settled in one decide,
> and unchanged since: the three append-only surfaces —
> [history/](../record/history/README.md),
> [specs/](../record/specs/README.md) and
> [DECISIONS](../record/DECISIONS.md) — live under one roof at
> `docs/record/`, while everything at `docs/` root is the living
> system. **Derived at write time: 217 files under `docs/record/`.**
> The move's lasting product is not the tidier tree but the ENABLING
> RULING it required — *a mechanical link-path repair inside a
> frozen file is MAINTENANCE, not a content edit; append-only
> governs meaning, not bytes* — without which an archive could never
> be re-shelved at all, because append-only would freeze not just
> meaning but geography. **The limit worth naming: the boundary is
> declared by PATH and enforced by discipline.** Three doc gates run
> in CI and not one of them checks append-only; nothing mechanical
> stops a frozen file from being meaning-edited.

## What it is

One directory, and a rule about what its name means.

`docs/record/` holds the three surfaces that are append-only:
`history/` (permanent shipped narratives, one per task),
`specs/` (per-task contracts, frozen at ship), and `DECISIONS.md`
(the append-only memory of choices). `docs/memory/` stays at root,
because in-flight memory is living. Everything else at `docs/` root
— [LAWS](../LAWS.md), [HOME](../HOME.md), [ROADMAP](../ROADMAP.md),
[the board](../DASHBOARD.md), [IDEAS](../IDEAS.md) and the rest — is
the living system.

**The path is the declaration.** `record/` means append-only; root
means living. Before the move, nothing in a file's path said which
discipline governed it, and a reader listing `docs/` met frozen and
living surfaces interleaved with no signal to tell them apart.

The move itself was three recorded renames — `git mv`, so git
carries every file's history across — plus one whole-corpus link
sweep.

## What raised it

Two pressures arriving together.

The first is the one any growing corpus meets: the frozen record and
the living system had been sharing a shelf, and every `docs/` root
listing interleaved them. That is a legibility cost, and on its own
it might have stayed a nuisance.

**The second made the boundary load-bearing.** The chronicle layer
was queued directly on top of the record — a layer of living stories
whose entire contract is that it links DOWN into frozen sources and
never modifies them. A story layer needs the record addressable as
ONE thing. With the frozen surfaces scattered across `docs/` root
among the living ones, "link down into the record" has no referent
you can write down; with one roof, it has a path.

The vault lens gives the same argument in miniature: one filter
(`-path:record`) replaces a per-surface list that would have needed
extending every time a new frozen surface was born.

## What changed, in order

- **[D-057](../record/DECISIONS.md#d-057--the-record-shelf)
  (2026-07, landed in
  [#229](https://github.com/wsher0901/roam/pull/229)) — the shelf is
  born.** Three recorded renames: `docs/history` →
  `docs/record/history`, `docs/specs` → `docs/record/specs`,
  `docs/DECISIONS.md` → `docs/record/DECISIONS.md`.
- **The enabling ruling, in the same entry.** A mechanical
  path-segment repair inside a frozen file is MAINTENANCE, not a
  content edit — append-only governs MEANING, not BYTES. It is
  scoped strictly to link path segments, with zero prose changes
  anywhere in `record/`, and it rests on two precedents that had
  already treated frozen files this way
  ([#163](https://github.com/wsher0901/roam/pull/163)'s restamp and
  [#204](https://github.com/wsher0901/roam/pull/204)'s dated
  blockquotes).
- **Intra-record links survive BY CONSTRUCTION.** Because the three
  surfaces moved TOGETHER, their relative distances to each other
  are preserved: history ↔ DECISIONS ↔ specs links kept resolving
  without being touched. The decide records that this was VERIFIED
  rather than rewritten — a distinction that matters, since
  rewriting them would have been a much larger edit inside frozen
  files for no gain.
- **The corpus-wide sweep.** Every relative link into the moved
  surfaces was recomputed — roughly 1,580 links across 158 files,
  living files gaining `record/` and frozen files gaining one `../`
  — run as one deterministic recompute rather than as hand-repair.
  The machinery moved with it: the ledger gate's walker root, the
  reviewer agent's paths, the vault seed's search filter,
  [machine-setup](../skills/machine-setup.md#vault-lens)'s lens
  filter, and the spec paths in
  [ship](../skills/ship.md#7--on-approval--the-atomic-weld) and
  [parallel-lanes](../skills/parallel-lanes.md#bench-first-birth-baton-holder-procedure).
- **What was deliberately NOT moved.** `docs/memory/` stayed at
  root. The decide names the reason as a rejected alternative:
  in-flight memory is a living handshake surface rewritten at every
  ritual, and shelving it under the frozen roof would misdeclare
  exactly the file a waking lane must trust.

## Where it stands

Born and settled — a single-decide item with no subsequent
amendment. **217 files under `docs/record/` at write time**, derived
from the tree.

The census cell reads "Born and settled: the frozen record under one
roof, no longer interleaving with the living system." Checked
against the record at write time, that holds: no later decide amends
[D-057](../record/DECISIONS.md#d-057--the-record-shelf), and the
shelf's three surfaces are where it put them.

**What the move actually bought, in order of durability.** The
tidier listing is the least of it. The lasting products are the
maintenance ruling — which is now the general licence for
re-shelving an append-only archive, and was cited again when the
chronicle layer needed to link down into frozen sources — and the
demonstration that a whole-corpus path change is a DETERMINISTIC
RECOMPUTE rather than a hand-repair job. The second is a method the
workshop can reuse; the first is a rule it can cite.

**The limit, stated plainly, because it is invisible from the tree.**
The frozen/living boundary is declared by path and carried by
discipline. Derived at write time, `scripts/` holds exactly three
doc gates — `check:links`, `check:ledger`, `check:memory` — and none
of them checks append-only. Nothing red-lights a prose edit inside
`record/`. What defends the freeze is the rituals (ship finalizes
and does not revisit), the annotation convention (a superseded
record gains a dated note rather than a rewrite), and review. That
is a real guarantee and it is a HUMAN one, which is worth knowing
before trusting the shelf's name to mean more than it does.

## Sources

Down-links only.

- [D-057](../record/DECISIONS.md#d-057--the-record-shelf) — the
  decide: the three renames, the enabling ruling, the
  by-construction argument, and every rejected alternative
  including the one that would have moved memory too.
- [the record-shelf bench](../record/history/workshop/definition/record-shelf.md)
  — [#229](https://github.com/wsher0901/roam/pull/229): the move as
  it was actually flown, and the sweep.
- [record/history/README](../record/history/README.md) ·
  [record/specs/README](../record/specs/README.md) ·
  [DECISIONS](../record/DECISIONS.md) — the three surfaces under the
  roof.
- [LAWS §Knowledge & tracking](../LAWS.md#knowledge--tracking) — the
  one-home routing law the shelf serves.
- [HOME §Where information goes](../HOME.md#where-information-goes)
  — the routing table naming each surface's writer and lifecycle.
- [machine-setup §Vault lens](../skills/machine-setup.md#vault-lens)
  — the single `-path:record` filter the move made possible.
- [D-059](../record/DECISIONS.md#d-059--the-chronicle-layer) —
  ruling 4, immutability beneath: the layer that made the boundary
  load-bearing.
