---
type: chronicle-story
shelf: III — the information system
status: living
updated: 2026-08-06 · written · cloud lane
---

# DECISIONS and decide — the append-only ledger and the ritual that writes it

> **CURRENT ENDING (2026-08-06).** `docs/record/DECISIONS.md` is the
> workshop's append-only decision ledger, D-001 onward, and
> [decide](../skills/decide.md) is its only writer — an entry plus
> its full ripple in ONE commit, fired unasked the moment the
> founder states or confirms a roadmap-level change. Append-only
> governs MEANING, NOT BYTES: amendments are new entries, never
> edits, but a mechanical link repair inside a frozen entry is
> maintenance
> ([D-057](../record/DECISIONS.md#d-057--the-record-shelf)).
> **The census cell is STALE — its span ends at D-057, and the
> entry's own FORMAT has changed since.**
> [D-068](../record/DECISIONS.md#d-068--the-short-anchor-law) made
> every heading a SHORT NAME of eight words at most, FROZEN AT MINT,
> with the complete statement moved verbatim to an `In full:` body
> line — and retrofitted D-001 through D-067 in the minting PR. A
> reader who trusts the cell would expect statement-length headings
> that no longer exist anywhere in the file.

## What it is

Two things that only make sense together: a file that may only be
appended to, and a ritual that is the sole thing permitted to append
to it.

The file is the answer to "why is it like this?" for every standing
choice the workshop has made. The ritual exists because the founder
cannot be relied upon to ask for a record at the moment a decision
happens — decide fires UNASKED, which is the property that makes the
ledger complete rather than merely available.

Its scope boundary is sharp and load-bearing: ROADMAP-LEVEL only.
Task-local implementation calls are NOT decisions and go in the
task's memory. Without that line the ledger would fill with choices
nobody needs to remember.

## What raised it

The workflow kit ([#1](https://github.com/wsher0901/roam/pull/1))
carried the first decisions, D-001 among them, before there was a
ritual to write them. The ritual arrived when the recording stopped
being reliable by hand — which is the same reason every other
automatic duty in this workshop exists.

## What changed, in order

- **[#1](https://github.com/wsher0901/roam/pull/1) — the ledger
  starts.** D-001 (the tech stack) onward.
- **[#56](https://github.com/wsher0901/roam/pull/56) — ritual engine
  v2.** decide takes shape as a ritual among the others.
- **[D-027](../record/DECISIONS.md#d-027--laws-polish) — provenance
  becomes the ledger's job.** LAWS drops its inline D-citations
  precisely because DECISIONS and the consolidations are where
  provenance belongs. The ledger's role is stated by what was
  removed from elsewhere.
- **[D-038](../record/DECISIONS.md#d-038--ci-is-the-arbiter) — the
  anchor is born resolving.** decide runs `npm run check:links`
  BEFORE an entry's first push, so a D-number heading and every link
  to it exist in the SAME commit. This closes a real failure mode:
  entries whose anchors were cited before they existed, which had
  been producing red Actions runs mid-authoring.
- **[#134](https://github.com/wsher0901/roam/pull/134) — the stale
  trigger fixed.** LAWS' description of when decide fires had drifted
  from what decide does.
- **[D-050](../record/DECISIONS.md#d-050--session-lifecycle-closed-is-not-dead)
  — IDEAS becomes an inbox, not an archive.** Adjacent, and it
  matters here because it settles the boundary on the other side:
  ideas are not decisions, and the road from one to the other runs
  through decide's triage.
- **[D-057](../record/DECISIONS.md#d-057--the-record-shelf) — the
  file moves, and the enabling ruling is minted.** `docs/DECISIONS.md`
  becomes `docs/record/DECISIONS.md` as a recorded rename, joining
  history and specs under one frozen roof. The move forced the
  question it then answered: relocating a file rewrites the relative
  link paths INSIDE frozen entries, which append-only appears to
  forbid. **THE RULING: a mechanical link-path-segment repair inside
  a frozen file is MAINTENANCE, not a content edit — append-only
  governs meaning, not bytes.** Scoped strictly to path segments,
  zero prose changes anywhere in `record/`.
- **[D-068](../record/DECISIONS.md#d-068--the-short-anchor-law) —
  the heading becomes an anchor, and anchors freeze at mint.** Every
  entry heading is a short name, eight words maximum; the complete
  statement and the date move verbatim to the first body line,
  prefixed `In full:`. The anchor that name produces is FROZEN AT
  MINT and never edited, because an edit breaks every citation at
  once. D-001 through D-067 were retrofitted in the same PR. The
  bill that forced it is named in the entry:
  [D-067](../record/DECISIONS.md#d-067--the-report-skeleton-and-the-board-diet)
  had minted a 1,038-character anchor, cited five times — written by
  the very bench that was dieting every other surface in the
  workshop.
- **The carve-out that came with it, and it is absolute.** The
  `In full:` line is a VERBATIM QUOTATION and the weave rule does
  not reach it. Plain D-numbers inside it stay plain; a later reader
  who "repairs" one is altering frozen text.

## Where it stands

Append-only, single-writer, and now short-anchored. The two rulings
that give this item its character both arrived late and both say the
same thing in different registers: **the record protects meaning,
not bytes.** D-057 licensed path repairs inside frozen entries on
that basis; D-068 rewrote sixty-seven headings on it, arguing that
nothing is lost because nothing is deleted — the statement moves one
line down, where it is read once instead of quoted a hundred times.

Held together, they describe a ledger that is immutable in the way
that matters and maintainable in the ways that do not. That is a
more useful invariant than byte-immutability would have been, and it
was reached twice, independently, by benches solving unrelated
problems.

**The census cell certifies a format that no longer exists.** It
reads "append-only D-001 onward, written only by decide as
entry-plus-ripple in one commit; append-only governs meaning, not
bytes" — every clause of which is still true — and stops at D-057,
before the change that altered what every entry in the file looks
like. The derivation wins: the shape of an entry today is short
heading, `In full:` line, then Decision / Why / Alternatives
rejected / Affects.

## Sources

Down-links only — this story cites the record beneath it and never
another story's prose.

- [DECISIONS](../record/DECISIONS.md) — the ledger itself.
- [decide](../skills/decide.md) — the ritual's current procedure.
- [D-027](../record/DECISIONS.md#d-027--laws-polish) · provenance
  re-homed · [D-038](../record/DECISIONS.md#d-038--ci-is-the-arbiter)
  · anchors born resolving ·
  [D-050](../record/DECISIONS.md#d-050--session-lifecycle-closed-is-not-dead)
  · the inbox boundary ·
  [D-057](../record/DECISIONS.md#d-057--the-record-shelf) · the move
  and the enabling ruling ·
  [D-068](../record/DECISIONS.md#d-068--the-short-anchor-law) · the
  short-anchor law and the retrofit.
- [record-shelf](../record/history/workshop/definition/record-shelf.md)
  — the move's own account.
- Spans cited by the census:
  [#1](https://github.com/wsher0901/roam/pull/1) ·
  [#56](https://github.com/wsher0901/roam/pull/56) ·
  [#134](https://github.com/wsher0901/roam/pull/134).
