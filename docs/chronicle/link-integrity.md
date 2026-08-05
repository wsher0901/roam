---
type: chronicle-story
shelf: III — the information system
status: living
updated: 2026-08-05 · written · cloud lane
---

# Link integrity — the weave rule and the checker that defends it

> **CURRENT ENDING (2026-08-05).** The weave rule is law and the
> checker is a required CI gate: **5,208 internal links across 257
> markdown files, 0 broken**, derived by running
> `scripts/check-links.mjs` on this branch's tip. It began as repo
> hygiene, became a rule about how the corpus refers to itself, and
> then became the thing that makes the rule enforceable rather than
> aspirational. **Its most important lesson is not that it works —
> it is that "0 broken" was once a statement about the CHECKER
> rather than about the corpus.** A link whose text nested a
> bracket pair was invisible to a text-blind regex, so it could
> never fail; the [#229](https://github.com/wsher0901/roam/pull/229)
> critic found one, the regex was hardened, and 13 previously
> unseen links entered the count. The scar is a comment in the
> checker's own source, naming the bench and the date.

## What it is

Two halves that only work together.

**The rule** — in any `docs/` file, every mention of a roadmap ID, a
D-number, a fact or param ID (`F-*`, `TP-*`), or a sibling doc is a
markdown link, never plain text. It lives in
[LAWS §Knowledge & tracking](../LAWS.md#knowledge--tracking) and is
one sentence long.

**The checker** — [`scripts/check-links.mjs`](../../scripts/check-links.mjs),
108 lines and zero dependencies. It walks every `.md` under `docs/`
plus the three root stubs, and resolves each internal link's PATH
and its `#anchor` against real files and real heading slugs, using
GitHub's own slugger rules (lowercase, strip punctuation, spaces to
hyphens, `-1`/`-2` suffixes for duplicate headings). External URLs
and the `…` placeholders in templates are skipped by design. It
exits nonzero listing every failure.

The pairing is the point. A convention that says "always link" and
has no gate is a convention that decays silently at exactly the rate
the corpus grows. The rule states the intent; the checker is why the
intent survives contact with 249 files.

## What raised it

Not a single incident — an accumulation. The early corpus was small
enough that a mention of another document could be plain prose and a
reader would still find it. As the docs multiplied, two costs
appeared at once: a reader could no longer navigate from a mention
to its subject, and nothing could tell whether a pointer still
resolved after a heading was renamed or a file moved.

The rule answered the first. The checker exists because of the
second, which is the harder one: **a broken pointer is invisible to
the seat that broke it.** Renaming a heading in one file silently
falsifies every link to it from anywhere else in the corpus, and no
amount of care at the editing site can see that.

## What changed, in order

- **[#57](https://github.com/wsher0901/roam/pull/57) — repo hygiene,
  and the first weaving.** Line endings pinned and "old docs woven".
  The weave starts as a cleanup act performed by hand, not yet a law
  and not yet checkable. The line-ending work matters more than it
  looks: the checker normalizes CRLF on read to this day, because a
  two-computer workshop cannot have a gate whose verdict depends on
  which machine ran it.
- **[#76](https://github.com/wsher0901/roam/pull/76) — HOME v3, the
  encyclopedia.** The manual grows into the hub that most links
  point AT. The more the corpus routes through one file's headings,
  the more expensive an unnoticed heading rename becomes — this is
  the pressure that makes an automated gate worth building.
- **[#78](https://github.com/wsher0901/roam/pull/78) — hardening and
  hygiene, the final ops phase.** The checker becomes part of the
  standing machinery rather than a one-off sweep.
- **[D-038](../record/DECISIONS.md#d-038--ci-is-the-arbiter) — the
  gate stops being advisory.** `check:links` joins the CI mirror,
  and CI green becomes required at every gate, every ready-flip, and
  every "done". The same ruling adds a smaller clause that matters
  specifically here: [decide](../skills/decide.md) runs
  `check:links` BEFORE an entry's first push, **so a D-number
  heading and every link to it are born in the same commit.** That
  is what stops the most common self-inflicted break in this corpus
  — an anchor written before the heading it names exists.
- **[#108](https://github.com/wsher0901/roam/pull/108) — the corpus
  gains its quadrant structure**, moving history into four doors and
  giving TEMPLATE the memory format. Structural moves are the other
  way links break; the checker is now what makes such a move
  survivable.
- **[#229](https://github.com/wsher0901/roam/pull/229) — the record
  shelf move, and THE FINDING THAT REDEFINES WHAT "0 BROKEN"
  MEANS.** 155 files moved under `docs/record/`, and the sweep ran
  as one deterministic recompute of 1,580 links rather than as
  hand-repair. Then its critic caught a broken ledger link whose
  text nested a backticked bracket pair — invisible to the
  checker's text-blind `[^\]]*` link regex, which skipped such
  links ENTIRELY rather than failing them. The link was repaired
  AND the regex hardened to parse one nested bracket level, at
  which point **13 previously-skipped links entered the count for
  the first time** (3,106 / 0 at that weld). The same PR also
  established that a link-path repair inside a frozen record file is
  MAINTENANCE, not a content edit — append-only governs meaning, not
  bytes — which is what makes the record shelf maintainable at all.

## Where it stands, and the one honest caveat

The gate is live, required, and quoted at every gate report. Run on
this branch's tip it returns **5,208 links across 257 files, 0
broken**.
The count has roughly doubled since the record-shelf weld, which is
the useful way to read it: the corpus grew substantially and the
broken count stayed at zero, which is what a working gate looks
like.

**The caveat is the #229 lesson generalized, and it has not been
retired.** A checker reports on what it can see. Its blind spot was
found by a human-directed critic reading a specific rendered link,
not by the checker and not by any test of the checker — and nothing
structural changed to make the NEXT blind spot findable. The regex
now handles one level of bracket nesting; two levels would skip
again, silently, and the count would still print a confident zero.

The mitigation in place is documentary rather than mechanical: the
scar is written into the checker's source as a comment naming the
bench and the date it was found, so the next seat reading that regex
meets the failure mode before it edits it. That is a good practice
and it is not a guarantee.

One scoping note, so a later reader does not over-read the number:
the checker verifies that internal links RESOLVE. It does not
verify that they are the RIGHT links, and it cannot see a place
where the weave rule was simply not applied — a plain-text mention
that should have been a link is, to this gate, not a link at all.
That half of the rule is enforced by review, including the pre-gate
critic, which has caught weave breaches more than once.

## Sources

Down-links only — this story cites the frozen record and the living
machinery beneath it, never another story's prose.

- [LAWS §Knowledge & tracking](../LAWS.md#knowledge--tracking) — the
  weave rule's living text.
- [`scripts/check-links.mjs`](../../scripts/check-links.mjs) — the
  checker, including the nested-bracket comment that records its own
  blind spot.
- [D-038](../record/DECISIONS.md#d-038--ci-is-the-arbiter) — the
  ruling that made the gate required, and the decide-runs-check:links
  clause.
- [the record-shelf story](../record/history/workshop/definition/record-shelf.md)
  — [#229](https://github.com/wsher0901/roam/pull/229): the 1,580-link
  recompute, the critic's catch, and the regex hardening.
- [the ledger](../record/history/README.md#the-ledger) — the span
  entries for [#57](https://github.com/wsher0901/roam/pull/57),
  [#76](https://github.com/wsher0901/roam/pull/76),
  [#78](https://github.com/wsher0901/roam/pull/78) and
  [#108](https://github.com/wsher0901/roam/pull/108).
