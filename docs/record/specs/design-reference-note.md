---
type: spec
id: design-reference-note
title: The reference-images note tells the truth about the losers
status: open
stage: V1.S2
branch: docs/design-reference-note
pr: #363
opened: 2026-09-11
shipped: —
---
# design-reference-note — the rejected probes are gone, and the note still says they are there

**Links:** [DESIGN §Reference images](../../DESIGN.md#reference-images)
· [D-084](../DECISIONS.md#d-084--the-global-design-stack) ·
[D-086](../DECISIONS.md#d-086--workshop-the-product-first-window) ·
[taste-pass spec](taste-pass.md) ·
[taste-pass history](../history/product/definition/taste-pass.md) ·
[V1.S2.T5](../../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)

## Goal

[DESIGN §Reference images](../../DESIGN.md#reference-images) claims
that the picked probe's "two rejected siblings sit beside it as the
material that lost — linked from that folder's index and marked
there as not-picked". **Neither the siblings nor the index exist.**
They were deleted on 2026-09-10 by
[#355](https://github.com/wsher0901/roam/pull/355) (commit
`897a28b`), which removed `public/spikes/taste/index.html`,
`object-first.html` and `type-first.html`. `place-first.html` stands
alone in that folder.

Replace the paragraph with the truth: the losers were deleted, the
picked probe stands alone as the seeded material for slots 3 and 4,
and the losers' record survives in the
[taste-pass spec](taste-pass.md) and its
[history file](../history/product/definition/taste-pass.md).

**Why this is a product bench and not a workshop one.** The subject
is ROAM'S TASTE MATERIAL — which reference exists and what it is a
reference FOR — not how the workshop runs a design pass.
[D-086](../DECISIONS.md#d-086--workshop-the-product-first-window)
ruling 1 puts "workshop-facing edits to DESIGN" inside the window;
this edit is the other kind, and the distinction is recorded here so
the call is auditable rather than assumed.

## Out of scope

- **Every other slot, value and paragraph in
  [DESIGN](../../DESIGN.md).** The direction, the type pair, the
  colour tokens, the slot table's rows, the scope column, the
  states section: untouched. This bench changes ONE paragraph.
- **Restoring the deleted probes.** They are gone on purpose
  ([#355](https://github.com/wsher0901/roam/pull/355)); their record
  is the spec and the history file, which is exactly what the new
  paragraph will say.
- **Filling slots 1, 2 or 5.** Those are founder-reserved TBD
  ([D-084](../DECISIONS.md#d-084--the-global-design-stack)); a seat
  never fills them.
- **Any UI code.**

## Plan

1. Verify the deletion from git rather than from this spec:
   `git log --oneline --diff-filter=D --name-status -- public/spikes/taste/`
   and `ls public/spikes/taste/`.
2. Rewrite the one paragraph in
   [DESIGN §Reference images](../../DESIGN.md#reference-images) that
   begins "Its two rejected siblings sit beside it".
3. Weave: every doc, D-number and roadmap ID in the new text is a
   markdown link.
4. Verify: `npm run check:links`; then
   `grep -n "index" docs/DESIGN.md` and
   `grep -n "siblings" docs/DESIGN.md` must each return nothing.

## Done means

- [x] The paragraph states that the two rejected probes and the
      folder index were DELETED on 2026-09-10 by
      [#355](https://github.com/wsher0901/roam/pull/355), naming the
      date and the PR.
- [x] It states that `place-first.html` stands alone as the seed for
      slots 3 and 4.
- [x] It points at the [taste-pass spec](taste-pass.md) and its
      [history](../history/product/definition/taste-pass.md) as the
      losers' surviving record.
- [x] `grep -n "index" docs/DESIGN.md` returns zero lines.
- [x] `grep -n "siblings" docs/DESIGN.md` returns zero lines.
- [x] `npm run check:links` passes.
- [x] The diff touches `docs/DESIGN.md`, this spec, and
      `docs/memory/design-reference-note.md` — nothing else.

## Deviations

<filled by ship>

## Open questions

none
