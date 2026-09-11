---
type: memory
id: design-reference-note
updated: 2026-09-11 · completion · work PC agent-team lane A
---
# design-reference-note — the reference-images note tells the truth

## Status
complete, awaiting merge — 2026-09-11

One paragraph in [DESIGN §Reference images](../DESIGN.md#reference-images)
is replaced, the full CI mirror is green locally, and
[#363](https://github.com/wsher0901/roam/pull/363) is flipped ready.
What is left is review and the founder's word.

## What this task is
[DESIGN §Reference images](../DESIGN.md#reference-images) carried a
paragraph claiming the picked taste probe's two rejected siblings
"sit beside it … linked from that folder's index and marked there as
not-picked". That was true when it was written and false by the time
this bench opened: [#355](https://github.com/wsher0901/roam/pull/355)
deleted `index.html`, `object-first.html` and `type-first.html` from
`public/spikes/taste/` on 2026-09-10, leaving `place-first.html`
alone in that folder as the seed for reference slots 3 and 4.

The bench replaces that ONE paragraph with what is true — the
deletion, its date and its PR; the probe standing alone; the losers'
record living on in the
[taste-pass spec](../record/specs/taste-pass.md) and its
[history file](../record/history/product/definition/taste-pass.md).
Nothing else in [DESIGN](../DESIGN.md) changes: not the direction,
not the type pair, not the colour tokens, not a row of the slot
table.

## Pending issues
none. Every Done-means box in
[the spec](../record/specs/design-reference-note.md) is ticked
against verified work.

## Left / idle
Nothing of the payload. Review, then the founder's word, then ship.

## The story
Born bench-first from freshly pulled `main` (`a893524`) as lane A of
the test flight — the dress rehearsal for
[V1.S1](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
T3–T6, run as an agent team with the founder at the desk. Canary
pushed, ack read back from origin as a commit, then the payload.

**The claim held up under git, and was worse than filed.**
`git log --diff-filter=D` on `public/spikes/taste/` names exactly one
deleting commit — `897a28b`, dated 2026-09-10 by git metadata, the
weld of [#355](https://github.com/wsher0901/roam/pull/355) — removing
`index.html`, `object-first.html` and `type-first.html`.
`place-first.html` is the only file left. So the old paragraph was
false in BOTH its claims, not only the one about the listing page:
the siblings did not sit beside it, and nothing linked them.

**THE ONE REAL DECISION: the replacement cannot contain the word
"index".** The bench's own verification demands that
`grep -n "index" docs/DESIGN.md` return zero lines, which is how the
edit proves it landed — so naming the deleted `index.html` by its
filename would have failed the very check that certifies the work.
The deleted file is therefore named by what it DID rather than what
it was called: "the page that listed all three and marked the losers
not-picked". That description was verified against the file's own
bytes rather than assumed from its name —
`git show 897a28b^:public/spikes/taste/index.html` links all three
probes and carries "not picked" twice.

**What was kept, and why it got stronger.** The old paragraph's last
point — that NO REFERENCE SLOT ever pointed at the losers — survives
the rewrite. The deletion turns it from a distinction into a reason:
a slot is what earns a probe its place in the repo, which is why the
picked one stayed and the other two could go. The two sentences
before it, which explain why the picked probe lives in the repo at
all, are untouched — the new text is a continuation of that
paragraph, not a replacement for it.

**A dead end worth the next lane's time: `npm run build` failed in
this worktree for a reason that had nothing to do with the diff.**
The worktree is nested INSIDE the main clone, so Node resolution
walks up and finds the parent's `node_modules` — which is why
`lint`, `format:check` and `npm test` all passed against an empty
local `node_modules`. Next.js does not resolve that way: it detects
the worktree as its own workspace root and demands `node_modules/next`
THERE, so the build died claiming Next was "removed, renamed, or has
a broken symlink". `npm ci` inside the worktree (2 minutes, 621
packages, no change to `package-lock.json`) fixed it and the build
went green. The lesson for any worktree lane: the four fast checks
passing proves nothing about whether dependencies are actually
installed — only `npm run build` finds that out.

## Where to look
- [DESIGN §Reference images](../DESIGN.md#reference-images) — the
  replaced paragraph, mid-section, after "Run it, do not read it."
- [the spec](../record/specs/design-reference-note.md) — the
  contract, all seven Done-means boxes ticked.
- [#363](https://github.com/wsher0901/roam/pull/363) — this bench's
  PR.
- `public/spikes/taste/` — one file, `place-first.html`.
- [taste-pass spec](../record/specs/taste-pass.md) ·
  [taste-pass history](../record/history/product/definition/taste-pass.md)
  — the losers' surviving record, and what the new text points at.
- `897a28b` — the deleting commit;
  `git show 897a28b^:public/spikes/taste/index.html` still reads the
  page that was removed.
