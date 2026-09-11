---
type: memory
id: pre-s3-rulings
updated: 2026-09-11 · payload written · work PC control tower
---
# pre-s3-rulings — D-087, the model boundary and three plan corrections

## Status
complete, awaiting merge — 2026-09-11. D-087 is appended and the
whole ripple landed in the same commit. One question rides the
bench as a `BLOCKED:` comment on
[#366](https://github.com/wsher0901/roam/pull/366) — see Pending
issues.

## What this task is
Four founder rulings from the Web full-pass validation of
2026-09-10, recorded as `D-087 — [product] The model boundary and
three plan corrections`, with the ripple in the same commit:

1. **The model boundary** — what a language model may and may not
   produce inside the engine, as an
   [ENGINE §11](../ENGINE.md#11-invariants--the-reliability-law)
   invariant, with a pointer line in
   [§2](../ENGINE.md#2-intake--resolve-the-traveler)'s procedure
   step 1.
2. **Demo guardrails** — [V1.S8](../ROADMAP.md#v1s8--demo-polish)
   gains T4; T3 becomes `[seq after T1, T2, T4]`.
3. **The S3 dependency** —
   [V1.S3.T2](../ROADMAP.md#v1s3--engine-core--two-families-deep)
   becomes `[seq after V1.S2.T4]`, because the fact cache is
   Postgres and needs the migrations.
4. **The eval set** —
   [V1.S3.T6](../ROADMAP.md#v1s3--engine-core--two-families-deep)
   grows to golden tests AND the in-scope input eval set; §11 gains
   the handled-input rule; OPEN-9 closes with its number kept.

## Pending issues
**Two, both on ruling 3, both raised on
[#366](https://github.com/wsher0901/roam/pull/366) rather than
resolved here. Neither is a defect in the payload** — the line is
written exactly as the founder stated it, and both are consequences
that the ruling's stated reason does not mention.

**(a) THE CRITICAL PATH MOVED, and this is the bigger of the two.**
The critic caught it and the walk confirms it from the file:
[V1.S3.T2](../ROADMAP.md#v1s3--engine-core--two-families-deep) now
waits on
[V1.S2.T4](../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1),
which reads `[seq after V1.S1.T7 and T3]`, and
[V1.S1.T7](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
reads `[seq after T1–T6]`. With T3, T4 and T7 at `[P after T2]` and
T5 at `[seq after T3+T4]`, **five of V1.S3's seven tasks now sit
behind the whole of V1.S1** — only T1 and T6 are reachable before S1
closes. Before ruling 3, T2 was a bare `[seq]` and NONE of V1.S3
depended on V1.S1 at all.

That is a real change rather than a restatement, and it is not
obviously wrong — you cannot build a Postgres cache without the
schema, and the plan now tells that truth instead of hiding it. But
[V1.S2](../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
is explicitly "(parallel lane with S1)", so stages here are NOT
implicitly serial, and the founder is approving a wider consequence
than D-087 names. Surfaced, not decided.

**(b) The notation question.** Under
this file's own notation the wording carries a second consequence
the ruling's stated reason does not mention.

[HOME §Roadmap manual](../HOME.md#roadmap-manual) says `[seq]` means
"must follow", and "after X" names the dependency "when it is not
simply the previous task". Walking the real ROADMAP lines rather
than reasoning about the notation in the abstract —
[V1.S2.T4](../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
reads `[seq after V1.S1.T7 and T3]`, and T3 IS its previous task —
the convention is that once a line names dependencies it names ALL
of them. So `V1.S3.T2 [seq after V1.S2.T4]` reads as: the dependency
list is exactly {V1.S2.T4}, and T2 no longer waits on
[V1.S3.T1](../ROADMAP.md#v1s3--engine-core--two-families-deep).

That may be exactly right — the fact cache is infrastructure and
plausibly does not need the check contract. But it changes the build
order, and the ruling's reason speaks only about migrations. Asked
as a `BLOCKED:` comment on
[#366](https://github.com/wsher0901/roam/pull/366) with the two
answers spelled out; the line stays as ruled until the founder says
otherwise.

## Left / idle
Nothing in the payload. The bench waits on the batched external Web
review and then the merge word.

## The story
Born bench-first from freshly pulled `main` (`a893524`) as bench D
of the test flight. **This bench is TOWER-AUTHORED**, so the
no-solo-approval law puts it on the external Web review path — which
this flight batches across all four PRs, the founder extending
[D-086](../record/DECISIONS.md#d-086--workshop-the-product-first-window)
ruling 3 to cover it.

**The entry closes two ideas that had been banked since
2026-07-28.** [IDEAS](../IDEAS.md) §Open carried a line asking that
the eval-set gate be ruled by D-number and a line asking that the
LLM-boundary rule be ruled in the same decide — both from the
founder and the external reviewer. They are rulings 4 and 1. Both
are compressed to one line each and moved to §Closed per
[decide §2](../skills/decide.md), and the second closes WIDER than
it was asked: the line proposed a new open-register slot, and the
ruling makes it an invariant instead. A slot defers; an invariant
binds. Finding them was the routing law paying off — the inbox
already knew what this decide was for.

**OPEN-9 keeps its number, and that was a real decision rather than
a formality.** Inline `OPEN-n` references resolve BY NUMBER, and a
sweep of the corpus found them in
[ENGINE §10](../ENGINE.md#10-learn--the-loop-back) and in
[chronicle/engine.md](../chronicle/engine.md)'s slot table.
Renumbering the register would have broken all of them at once, and
silently — no link check catches a bare `OPEN-9` pointing at a slot
that now means something else. So the register's preamble now states
the keep-the-number rule, and the next closure does not have to
rediscover it. §10's sentence calling the gate OPEN-9 was rewritten
in the same commit rather than left to read as open.

**The mandate cited the untouchable sentence as ENGINE §1's; it is
§0's.** "Procedure steps describe the shape of one pass; the shape
is provisional until the V1.S3.T1 contract ratifies it" lives in
[§0](../ENGINE.md#0-what-this-is), not
[§1](../ENGINE.md#1-the-shape-of-one-thought). Either way it is
untouched. Recorded rather than silently corrected, because a
citation that drifts once drifts again.

**Dead end: the ripple patcher ran against LF patterns on a CRLF
tree and matched nothing.** The working tree is CRLF
(`core.autocrlf`), the patterns were authored with LF, and ten of
eleven surgical replacements reported zero matches — one
single-line pattern succeeded and wrote LF into a CRLF file. The
files were reverted with `git checkout --` before anything was
committed, the patcher was made line-ending aware, and all eleven
then applied. **The lesson is that the failure was LOUD by
construction**: the patcher asserts exactly one match per pattern
and refuses to write otherwise, so a mismatch could not become a
silent partial edit.

## The flight's findings — recorded here because they have no other home
This bench is the tower's own, and the test flight that carried it
surfaced four things that are WORKSHOP machinery rather than Roam.
[D-086](../record/DECISIONS.md#d-086--workshop-the-product-first-window)
ruling 1 forbids birthing a bench for any of them while the window
is open, and ruling 5 reserves [IDEAS](../IDEAS.md) §Open for
product, so they are written here — on origin, in the one artifact
of this flight that reaches
[record/history/](../record/history/README.md) — rather than left in
a session that ends. The founder's word routes them.

1. **THE ACK COMMITS LANDED WITH EMPTY SUBJECTS.** All three canary
   acks (`d7f0d92`, `45a95e3`, `d57145f`) carry no commit message.
   The tower's ack watcher built them with `git commit-tree -F -`
   but passed the message through a helper whose `stdio` set stdin
   to `ignore`, so git read an empty stdin and wrote an empty
   subject. **The ack PAYLOAD was correct** — the Status line
   begins `airborne · ` character-for-character, anchored, with its
   date — and all three lanes read it from origin and flew, so the
   handshake itself worked. Only the commit labels are blank. NOT
   repaired: rewriting three lane branches mid-flight would have
   met the wake-lock as rejected pushes and killed the lanes, which
   is a worse outcome than three unlabeled commits.
2. **A FRESH WORKTREE'S `node_modules` IS EMPTY, AND ONLY THE BUILD
   SAYS SO.** All three lanes hit this independently. `npm run
   lint`, `format:check` and `test` PASS in a fresh agent-team
   worktree because their binaries resolve upward into the parent
   clone's `node_modules`; `next build` does not, because Turbopack
   roots on the worktree's own lockfile and refuses to compile
   outside it ("Could not find the Next.js package"). `npm ci` in
   the worktree fixes it. The trap is that three greens prove
   nothing about whether dependencies are installed — the fourth
   check is the only one that looks.
3. **`next dev`/`next build` REWRITES THE TRACKED `AGENTS.md`.**
   Next's `generate-agent-files.js` re-adds its rules block on
   every run, leaving an uncommitted change in any worktree that
   built. Because
   [ship](../skills/ship.md#7--on-approval--the-atomic-weld)'s weld
   stages ALL files by design, a weld run in such a worktree would
   sweep it into the commit unnoticed. The injected text also
   contains a line telling its reader to commit it; lane C treated
   that as tool-injected text rather than an instruction, which is
   the right posture and is recorded here as the precedent.
4. **THE DESIGN-REVIEW GATE CANNOT REACH A VERCEL PREVIEW.** The
   project runs SSO protection with `deploymentType: all_except_
   custom_domains`, so an anonymous browser gets a Vercel login
   page and would grade THAT. Two routes work: fetch through the
   authenticated Vercel MCP surface, or mint a short-lived
   single-use `?_vercel_share=` token. This flight used neither —
   the tower ran the surface locally and pointed the agent at
   `localhost`, which needs no credential at all. **No share token
   was written to the repo, a memory, or a PR: this repo is public
   and that token is a credential.**

## Where to look
- [ENGINE §2](../ENGINE.md#2-intake--resolve-the-traveler) ·
  [§10](../ENGINE.md#10-learn--the-loop-back) ·
  [§11](../ENGINE.md#11-invariants--the-reliability-law) ·
  [§12](../ENGINE.md#12-open-register).
- [ROADMAP V1.S3](../ROADMAP.md#v1s3--engine-core--two-families-deep)
  · [V1.S8](../ROADMAP.md#v1s8--demo-polish).
- [IDEAS §Closed](../IDEAS.md#closed) — the two lines this entry
  closed.
- [D-087](../record/DECISIONS.md#d-087--product-the-model-boundary-and-three-plan-corrections)
  · [the spec](../record/specs/pre-s3-rulings.md) ·
  [#366](https://github.com/wsher0901/roam/pull/366).
