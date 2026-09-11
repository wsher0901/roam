---
type: memory
id: design-reference-note
updated: 2026-09-11 · critic round · work PC agent-team lane A
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
**One, and it is the founder's call rather than a defect.** Every
Done-means box in
[the spec](../record/specs/design-reference-note.md) is ticked
against verified work, but the critic round below leaves finding 2
open: [taste-pass spec](../record/specs/taste-pass.md) still carries
nearly the same false sentence this bench exists to correct, and the
new paragraph now points readers at that file. Editing a frozen spec
is out of this bench's scope, so it goes to the founder at THE GATE
as a choice between leaving it as a record of what was true then and
giving it a dated erratum line.

## Left / idle
Nothing of the payload. The pre-gate critic has run and its round is
recorded below; one of its three findings rides to THE GATE as the
founder's call. Left: the external Web review, then the founder's
word, then ship.

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

### The critic round — three findings, one repaired

**The critic's own limit is worth recording, because it bounds how
much the round proves.** That session had NO SHELL: it reconstructed
this branch's diff by comparing the worktree against main
file-by-file, after confirming the branch ref matched origin, and it
could run neither `check:links` nor read the Actions run. So its
verdict on WHAT THE DIFF SAYS is firsthand and its verdict on
WHETHER THE DIFF PASSES is not — the second is the arbiter's
([D-038](../record/DECISIONS.md#d-038--ci-is-the-arbiter)) and is
recorded above. Its factual check of the deletion did NOT rest on
this lane's say-so: it read
`docs/record/history/workshop/definition/product-first.md`
(`shipped: 2026-09-10 17:33 UTC`, `pr: #355`) and the reflog, and
reached the same 2026-09-10 that git metadata gave this lane.

1. ⚪ **Twelve U+2019 curly apostrophes in this memory file** — the
   possessives in "probe's", "founder's" and "losers'" — against ZERO
   in every other `.md` under `docs/`. **REPAIRED** at head
   `52ba84d`; the count is now zero. Cosmetic-looking and not: this
   file MOVES to `record/history/` at the weld and freezes there, so
   it would have landed permanently off-convention and invisible to
   a grep for the straight `founder's` — and prettier does not catch
   it, so nothing
   downstream would have. The zero-elsewhere claim was verified from
   the corpus by this lane rather than taken on report. While in
   there, the file's other non-ASCII was inventoried, since a second
   off-convention character would have been the same bug: U+2026 (…)
   and U+2013 (–) are ordinary repo convention, 95 and 290 uses
   elsewhere, and stay.
2. 🟡 **[taste-pass spec](../record/specs/taste-pass.md) lines 52–54
   still carry nearly the same false sentence** — "linked from that
   folder's index and marked there as not-picked". **NOT REPAIRED:**
   a spec is frozen record and editing one is outside this bench's
   scope, so it is the founder's call at THE GATE (see Pending
   issues). What lifts it above cosmetic is this lane's own
   observation rather than the critic's: **the contradiction is now
   REACHABLE BY A POINTER THIS BENCH ADDED** — the new paragraph
   sends readers to that file as the losers' surviving record, so a
   reader following the fix lands on the same claim it corrects.
3. ⚪ **[DESIGN](../DESIGN.md) line 202 re-asserts live directory
   contents** — "leaving `place-first.html` as the only file in
   `public/spikes/taste/`" is the same claim class that made the old
   paragraph go stale. **DISMISSED, with its reason:** the sentence
   is anchored to a dated event that cannot change, which is what the
   old one lacked, so the residual present-tense clause carries
   materially less risk — and churning the paragraph a second time to
   dodge it would cost more than it buys.

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
