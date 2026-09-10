---
type: chronicle-story
shelf: III — the information system
status: living
updated: 2026-09-10 · the weave gate — half the blind spot closed · work PC
---

# Link integrity — the weave rule and the checker that defends it

> **CURRENT ENDING (2026-09-10).** The weave rule is law and the
> checker is a required CI gate running TWO PASSES: **7,408
> internal links across 350 markdown files, 0 broken**, and **0 bare
> D-numbers across 26 living docs** — both derived by running
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
>
> **The 2026-09-10 system audit then split this story's caveat in
> two and closed the half a machine can reach.** A plain-text
> D-number now FAILS, naming file:line — so the weave rule is a gate
> for the citation class that carries the corpus's argument. The
> other half is untouched and stays stated: the checker still proves
> an anchor EXISTS, never that it is the RIGHT one.

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
intent survives contact with a corpus this size.

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

- **2026-09-10 ([#362](https://github.com/wsher0901/roam/pull/362))
  — THE WEAVE GATE: the un-applied half of the rule becomes
  enforceable for D-numbers.** The system audit proved by probe what
  this story had only asserted — a plain-text `D-082` passed CI
  green — and then closed it for the one citation class where the
  test needs no judgment. A second pass over a LIVING corpus of 26
  files (the nine living singletons, `docs/data/`, `docs/skills/`,
  and the four box masters) fails any D-number that is not a
  markdown link, at file:line. The frozen record is deliberately
  outside it: back-filling links into a shipped story would rewrite
  the past to satisfy a present convention, and DECISIONS is where
  every anchor points anyway. **26 offenders were linked** — HOME 21
  · IDEAS 3 · ENGINE 1 · DASHBOARD 1 — and the link total moved
  7,370 → 7,396, one per mention, which is the arithmetic proof
  nothing was missed. Proved red-then-green by planting a bare
  mention and removing it.

  **THE EXEMPTION LIST THE MANDATE SPECIFIED WAS INCOMPLETE, AND
  THE INPUTS SAID SO RATHER THAN THE REASONING.** It named three
  exemptions — link, heading, fenced block — but
  [ship §7](../skills/ship.md#7--on-approval--the-atomic-weld)
  writes the exact string `synthesis: deferred — D-086` into a weld
  commit message and a history frontmatter field, and both of
  ship.md's two mentions are that literal. A markdown link cannot
  live inside a code span, and if it could, the value the weld
  writes would be wrong. Inline code joined the list for the same
  reason a fenced block is on it: it is a value, not a citation.
  Found by walking every offender the scanner named rather than
  reasoning about the categories — the enumeration law's own method,
  on a bench that exists because five case-analysis holes shipped in
  five consecutive benches. The pattern is also `D-d{3,}` rather
  than the `D-0dd` specified, so it does not silently stop
  covering new numbers at D-100.

## Where it stands, and the one honest caveat

The gate is live, required, and quoted at every gate report. Run on
this branch's tip it returns **5,203 links across 257 files, 0
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

One scoping note, so a later reader does not over-read the number
— and since 2026-09-10 it has TWO halves with different answers.

**The un-applied half is now partly mechanical.** A plain-text
mention was once invisible to this gate: not a link at all, so not
a link it could fail. For D-NUMBERS in the living corpus that is
over — pass 2 fails them at file:line, and the corpus stands at 0
bare. The rest of the weave rule (roadmap IDs, fact and param IDs,
sibling docs) is still enforced by review, including the pre-gate
critic, which has caught weave breaches more than once.

**The destination-blind half is untouched, and is not fixable by
this instrument.** The checker verifies that internal links RESOLVE.
It does not verify that they are the RIGHT links — a citation can
rot into pointing at a real-but-wrong heading with CI green
throughout, which the audit proved by probe rather than inferred
from the source. Closing it needs a notion of what a link MEANS,
which no regex has. It stays named in
[ATLAS](../ATLAS.md)'s dashed box rather than quietly dropped.

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
