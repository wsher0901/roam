---
type: history
id: pre-s3-rulings
shipped: 2026-09-11 17:36 UTC
pr: #366
synthesis: deferred — D-086
---
# pre-s3-rulings — D-087, the model boundary and three plan corrections

## Status
shipped — merged [#366](https://github.com/wsher0901/roam/pull/366) on
2026-09-11, after the external Web review re-issued PASS on the
repaired head and answered both BLOCKED questions.

## What this task is
Four founder rulings from the Web full-pass validation of
2026-09-10, recorded as `D-087 — [product] The model boundary and
three plan corrections`, with the ripple in the same commit:

1. **The model boundary** — what a language model may and may not
   produce inside the engine, as an
   [ENGINE §11](../../../../ENGINE.md#11-invariants--the-reliability-law)
   invariant, with a pointer line in
   [§2](../../../../ENGINE.md#2-intake--resolve-the-traveler)'s procedure
   step 1.
2. **Demo guardrails** — [V1.S8](../../../../ROADMAP.md#v1s8--demo-polish)
   gains T4; T3 becomes `[seq after T1, T2, T4]`.
3. **The S3 dependency** —
   [V1.S3.T2](../../../../ROADMAP.md#v1s3--engine-core--two-families-deep)
   becomes `[seq after V1.S2.T4]`, because the fact cache is
   Postgres and needs the migrations.
4. **The eval set** —
   [V1.S3.T6](../../../../ROADMAP.md#v1s3--engine-core--two-families-deep)
   grows to golden tests AND the in-scope input eval set; §11 gains
   the handled-input rule; OPEN-9 closes with its number kept.

## Pending issues
**None open. Both questions this bench raised are answered**, by the
external Web review of 2026-09-11, and the answers are in the
payload rather than only here.

**(a) The notation question → `T2 after T1 and V1.S2.T4`.** The tag
now reads `[seq after T1 and [V1.S2.T4](…)]`. The bench had written
the founder's words exactly — `[seq after V1.S2.T4]` — and flagged
that under this file's own convention naming any dependency means
naming all of them, so the short form silently dropped
[V1.S3.T1](../../../../ROADMAP.md#v1s3--engine-core--two-families-deep).
Naming both makes the line self-sufficient under either reading of
[HOME §Roadmap manual](../../../../HOME.md#roadmap-manual), which is the
durable fix available while
[D-086](../../../DECISIONS.md#d-086--workshop-the-product-first-window)'s
window blocks editing the manual itself.

**(b) The critical path → `accept the path`, with the reason
written into the record.** The walk stands: five of
[V1.S3](../../../../ROADMAP.md#v1s3--engine-core--two-families-deep)'s seven
tasks now sit behind the whole of
[V1.S1](../../../../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code).
The review's ruling is that this is not the change it looks like:
**V1.S3 already follows V1.S1 by stage order** — stages are ordered
slices and only
[V1.S2](../../../../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
is declared parallel — so the ruling adds ONE EDGE, S3.T2 ← S2.T4,
rather than a stage coupling, and it is absorbed when S2.T4 runs
promptly after S1.T7 inside S2's lane with S3.T1 in parallel. That
clause is now in D-087 ruling 3, so a later reader meets the answer
where the ruling lives and not only in this story.

**What the exchange proves about the bench rather than the plan:**
the question was worth asking and the answer was not the one the
bench guessed. It had reasoned that the marker might be dropping a
dependency by accident; the review's answer was that the dependency
list was right and the SECOND-ORDER reading — the stage coupling —
was the thing that needed stating rather than fixing.

## Left / idle
Nothing in the payload. The bench waits on the batched external Web
review and then the merge word.

## The story
Born bench-first from freshly pulled `main` (`a893524`) as bench D
of the test flight. **This bench is TOWER-AUTHORED**, so the
no-solo-approval law puts it on the external Web review path — which
this flight batches across all four PRs, the founder extending
[D-086](../../../DECISIONS.md#d-086--workshop-the-product-first-window)
ruling 3 to cover it.

**The entry closes two ideas that had been banked since
2026-07-28.** [IDEAS](../../../../IDEAS.md) §Open carried a line asking that
the eval-set gate be ruled by D-number and a line asking that the
LLM-boundary rule be ruled in the same decide — both from the
founder and the external reviewer. They are rulings 4 and 1. Both
are compressed to one line each and moved to §Closed per
[decide §2](../../../../skills/decide.md), and the second closes WIDER than
it was asked: the line proposed a new open-register slot, and the
ruling makes it an invariant instead. A slot defers; an invariant
binds. Finding them was the routing law paying off — the inbox
already knew what this decide was for.

**OPEN-9 keeps its number, and that was a real decision rather than
a formality.** Inline `OPEN-n` references resolve BY NUMBER, and a
sweep of the corpus found them in
[ENGINE §10](../../../../ENGINE.md#10-learn--the-loop-back) and in
[chronicle/engine.md](../../../../chronicle/engine.md)'s slot table.
Renumbering the register would have broken all of them at once, and
silently — no link check catches a bare `OPEN-9` pointing at a slot
that now means something else. So the register's preamble now states
the keep-the-number rule, and the next closure does not have to
rediscover it. §10's sentence calling the gate OPEN-9 was rewritten
in the same commit rather than left to read as open.

**The mandate cited the untouchable sentence as ENGINE §1's; it is
§0's.** "Procedure steps describe the shape of one pass; the shape
is provisional until the V1.S3.T1 contract ratifies it" lives in
[§0](../../../../ENGINE.md#0-what-this-is), not
[§1](../../../../ENGINE.md#1-the-shape-of-one-thought). Either way it is
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

## The critic round
The pre-gate critic ([ship §6](../../../../skills/ship.md#6--the-gate)) ran on
this branch and returned **seven findings — three notable, four
minor, none blocking.** Four repaired, three carried to THE GATE.
Its own stated limit, which bears on how much the round proves: that
session had no shell, so it reconstructed the change set from the
branch tree against the spec, D-087's `Affects:` line and this
memory's account of eleven replacements — the three agreed exactly,
but an edit outside that set would have been invisible to it.

**REPAIRED**

1. ⚪ **ENGINE §0's reading key contradicted §12.** The key defined
   OPEN slots as "decisions not yet made", leaving no room for a
   slot closed in place — so a reader learning the file's
   conventions from §0 met a contradiction one section later. A
   clause was added, and [§0](../../../../ENGINE.md#0-what-this-is) went
   into D-087's `Affects:` with it.
2. ⚪ **Two "§Closed" links had no anchor**, landing a reader at the
   top of a 900-line file. Now `#closed`. This is precisely the
   half of the weave rule `check:links` cannot see — the checker
   proves a link RESOLVES, never that it points at the right
   heading.
3. 🟡 **The spec under-named the ripple.** Plan step 3 listed ENGINE
   §11/§2/§12 and the two ROADMAP stages, but the commit also
   rewrote §10's stale OPEN-9 sentence and moved two
   [IDEAS](../../../../IDEAS.md) lines to §Closed. Both edits were correct
   and both were narrated here — but
   [LAWS §Task anatomy](../../../../LAWS.md#task-anatomy) requires a
   DUAL-WRITE, the spec getting the edit and the memory narrating
   it, and only the memory half had happened. The spec now names
   all of it and carries a Deviations entry saying the contract was
   caught up rather than written first.
4. ⚪ The `[seq after T1, T2, T4]` separator style — the critic
   noted the file already carries `and`, `+` and `–` for the same
   concept, making this a fourth. **Not repaired and not
   dismissed**: a ROADMAP-wide normalization is a product edit the
   window allows, but it is a different bench's, and doing it here
   would widen a diff under batched review.

**CARRIED TO THE GATE**

5. 🟡 The critical-path consequence of ruling 3 — see Pending
   issues (a). Raised as a `BLOCKED:` comment rather than decided.
6. 🟡 The BLOCKED question's own routing: the ambiguity's source is
   [HOME §Roadmap manual](../../../../HOME.md#roadmap-manual), which says
   "after X" names the dependency "when it is not simply the
   previous task" and never says whether naming X REPLACES or ADDS
   TO the previous-task default. **Clarifying HOME is a WORKSHOP
   edit that [D-086](../../../DECISIONS.md#d-086--workshop-the-product-first-window)'s
   window blocks**, so the durable fix available now is the
   product-side one: if the founder rules that T1 still gates T2,
   write `[seq after T1 and V1.S2.T4]` so the line is
   self-sufficient under EITHER reading of the manual.
7. ⚪ The Status line reads `complete, awaiting merge` while an
   unanswered `BLOCKED:` question is live. Deliberate: the payload
   IS complete, and the question rides the bench rather than
   halting it. Recorded so it is known the board will render this
   bench as gate-ready with an open question attached.

**NOT FILED, and worth knowing why.** The critic considered flagging
that [ROADMAP](../../../../ROADMAP.md) restates ruling 3's reason inline,
which is a second copy under the routing law — then didn't, because
the spec's Done-means explicitly ordered "with the reason" and
V1.S2.T5 carries a comparable inline rationale. Precedent plus an
instruction beat the general rule.

## The flight's findings — recorded here because they have no other home
This bench is the tower's own, and the test flight that carried it
surfaced four things that are WORKSHOP machinery rather than Roam.
[D-086](../../../DECISIONS.md#d-086--workshop-the-product-first-window)
ruling 1 forbids birthing a bench for any of them while the window
is open, and ruling 5 reserves [IDEAS](../../../../IDEAS.md) §Open for
product, so they are written here — on origin, in the one artifact
of this flight that reaches
[record/history/](../../README.md) — rather than left in
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
   [ship](../../../../skills/ship.md#7--on-approval--the-atomic-weld)'s weld
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
- [ENGINE §2](../../../../ENGINE.md#2-intake--resolve-the-traveler) ·
  [§10](../../../../ENGINE.md#10-learn--the-loop-back) ·
  [§11](../../../../ENGINE.md#11-invariants--the-reliability-law) ·
  [§12](../../../../ENGINE.md#12-open-register).
- [ROADMAP V1.S3](../../../../ROADMAP.md#v1s3--engine-core--two-families-deep)
  · [V1.S8](../../../../ROADMAP.md#v1s8--demo-polish).
- [IDEAS §Closed](../../../../IDEAS.md#closed) — the two lines this entry
  closed.
- [D-087](../../../DECISIONS.md#d-087--product-the-model-boundary-and-three-plan-corrections)
  · [the spec](../../../specs/pre-s3-rulings.md) ·
  [#366](https://github.com/wsher0901/roam/pull/366).
