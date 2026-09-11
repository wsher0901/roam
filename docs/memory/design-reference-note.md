---
type: memory
id: design-reference-note
updated: 2026-09-11 · payload written · work PC agent-team lane A
---
# design-reference-note — the reference-images note tells the truth

## Status
airborne · work PC agent team · 2026-09-11

Canary acked by the work PC control tower. The lane is licensed to work.

## What this task is
[DESIGN §Reference images](../DESIGN.md#reference-images) carries a
paragraph claiming the picked taste probe's two rejected siblings
"sit beside it … linked from that folder's index and marked there as
not-picked". That was true when it was written and is false now:
[#355](https://github.com/wsher0901/roam/pull/355) deleted
`index.html`, `object-first.html` and `type-first.html` from
`public/spikes/taste/` on 2026-09-10. `place-first.html` is alone in
that folder, seeding reference slots 3 and 4.

The bench replaces that one paragraph with what is true — the
deletion, its date and its PR; the probe standing alone; the losers'
record living on in the [taste-pass spec](../record/specs/taste-pass.md)
and its [history file](../record/history/product/definition/taste-pass.md).
Nothing else in [DESIGN](../DESIGN.md) changes.

## Pending issues
none at birth.

## Left / idle
Nothing of the payload. The paragraph is replaced and both greps
and `check:links` are green; what is left is the full CI mirror,
the ready-flip and the founder’s word.

## The story
Born bench-first from freshly pulled `main` (`a893524`) as lane A of
the test flight — the dress rehearsal for
[V1.S1](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
T3–T6, run as an agent team with the founder at the desk.

**The claim held up under git.** `git log --diff-filter=D` on
`public/spikes/taste/` names one deleting commit — `897a28b`, dated
2026-09-10 by git metadata, the weld of
[#355](https://github.com/wsher0901/roam/pull/355) — removing
`index.html`, `object-first.html` and `type-first.html`.
`place-first.html` is the only file left. The old paragraph was
therefore false in both of its claims, not just the one about the
listing page.

**THE ONE REAL DECISION: the replacement cannot contain the word
"index".** The bench’s own verification demands that
`grep -n "index" docs/DESIGN.md` return zero lines, so naming the
deleted `index.html` by its filename would fail the check that
proves the edit landed. The deleted file is therefore named by what
it DID rather than what it was called — "the page that listed all
three and marked the losers not-picked" — which was verified
against its own bytes (`git show 897a28b^:public/spikes/taste/
index.html` links all three probes and carries "not picked" twice)
rather than assumed from the filename.

**What was kept.** The old paragraph’s last point — that no
reference slot ever pointed at the losers — survives, and the
deletion turns it from a distinction into a reason: a slot is what
earns a probe its place in the repo, which is why the picked one
stayed and the other two could go. The two sentences before it,
explaining why the picked probe lives in the repo at all, are
untouched.

## Where to look
- [DESIGN §Reference images](../DESIGN.md#reference-images) — the
  paragraph to replace.
- `public/spikes/taste/` — what actually survives.
- [taste-pass spec](../record/specs/taste-pass.md) ·
  [taste-pass history](../record/history/product/definition/taste-pass.md)
  — the losers' record.
- [the spec](../record/specs/design-reference-note.md).