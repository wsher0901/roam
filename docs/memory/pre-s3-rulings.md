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
**One, and it is a case-analysis question rather than a defect.**
Ruling 3 was written exactly as the founder stated it, and under
this file's own notation that wording carries a second consequence
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

## Where to look
- [ENGINE §2](../ENGINE.md#2-intake--resolve-the-traveler) ·
  [§10](../ENGINE.md#10-learn--the-loop-back) ·
  [§11](../ENGINE.md#11-invariants--the-reliability-law) ·
  [§12](../ENGINE.md#12-open-register).
- [ROADMAP V1.S3](../ROADMAP.md#v1s3--engine-core--two-families-deep)
  · [V1.S8](../ROADMAP.md#v1s8--demo-polish).
- [IDEAS §Closed](../IDEAS.md) — the two lines this entry closed.
- [D-087](../record/DECISIONS.md#d-087--product-the-model-boundary-and-three-plan-corrections)
  · [the spec](../record/specs/pre-s3-rulings.md) ·
  [#366](https://github.com/wsher0901/roam/pull/366).
