---
type: chronicle-story
shelf: III — the information system
status: living
updated: 2026-08-05 · written · cloud lane
---

# The docs currency audit — hunting instructions that can no longer work

> **CURRENT ENDING (2026-08-05).** Closed on 2026-07-23 at
> [#204](https://github.com/wsher0901/roam/pull/204) with **zero
> deletions and zero record-body rewrites**. Its target was narrow
> and precisely chosen: not documents that read oddly, but a LIVE
> INSTRUCTION a future seat would OBEY that can no longer work. The
> sweep for the known case came back already-clean, so the real
> catch was the NEXT generation of staleness — four subtler shapes,
> each now named. Its governing principle is **annotation beats
> deletion: an instruction is a trap, while a record is evidence.**
> **Checked at this writing, that principle has NO home in
> [LAWS](../LAWS.md) or any skill** — it lives in this audit's own
> spec and history, and its four supersession notes are still
> standing in the record. The census cell calls the principle
> "promoted"; the accurate word is *demonstrated*.

## What it was

A one-time hunt across the whole live corpus, with a deliberately
narrow definition of the prey.

**The danger, as the bench itself framed it:** not "docs that read
oddly" but *an instruction a future seat would obey that can no
longer work.* That is the class
[#197](https://github.com/wsher0901/roam/pull/197) had just fixed
when the founder deleted the cloud-clerk routine and the repository
went on reaching for it — live instructions pointing at machinery
that could not fire, sitting in exactly the places a seat reaches
under failure.

**The governing principle:** annotation beats deletion. `history/`,
specs and DECISIONS entries are immutable record, and a superseded
record earns a dated supersession note naming what replaced it —
nothing more. The asymmetry underneath it is the reusable part: **a
stale INSTRUCTION is a trap, because someone will obey it; a stale
RECORD is evidence, and deleting it destroys proof of what was
true.**

**The second half of the mandate:** inventory every orphaned file —
by inbound-reference census rather than by eyeball.

## What raised it

The clerk retirement, one PR earlier. The founder deleted the
cloud-clerk routine on 2026-07-22, ahead of the trigger its
retirement had been staged to, which INVERTED the risk the staging
protected against: the design assumed the paper would die before the
vehicle, so its worst case was a live vehicle nobody used. What
happened was the reverse — a fallback rung and a promised
notification channel that could no longer fire, still written as
live instructions.

[#197](https://github.com/wsher0901/roam/pull/197) fixed the known
instances. This audit asked the follow-up question: **are there
others, and are there SHAPES of this we have not named?**

## What happened, in order

*(An event has no evolution to trace, so this spine carries the
audit's own passes and anything that has since disturbed its
findings. A later weld that changes what this audit established adds
a bullet here and rewrites the ending above, exactly as for a system
piece.)*

- **[#197](https://github.com/wsher0901/roam/pull/197) — the
  precursor that defined the class.** Every live instruction
  reaching for the deleted clerk removed, every verified record
  kept, and the distinction stated that this audit then generalized.
- **Birth, across a complication worth keeping.** Origin carried two
  heads where the mandate expected one — `main` plus a
  `chore/liftoff-findings` ref that was already merged as
  [#202](https://github.com/wsher0901/roam/pull/202) and had only
  survived the squash as a remote ref. STEP 0 held in substance, and
  the stale ref was deliberately left alone: deleting remote refs
  was not this bench's business. The session had also opened in a
  completed lane's leftover worktree, so the bench cut its own from
  `origin/main` rather than work a dead lane's tree.
- **The known sweep came back CLEAN**, which is what made the audit
  interesting rather than routine. #197 had held; nothing else
  reached for the clerk.
- **[#204](https://github.com/wsher0901/roam/pull/204) — the four
  new shapes of staleness, found and fixed.** Eleven changes across
  ten files, zero deletions:
  - *A verify-before-rely instruction whose verification had already
    happened.* The `[COCKPIT]` title line had been disproven at the
    2026-07-23 birth; the instruction to go and check it was dropped
    from liftoff §6 and SETUP, **with the answer recorded in place**
    rather than the question simply removed.
  - *A doctrine landed in one home but not its manual.*
    [#193](https://github.com/wsher0901/roam/pull/193)'s
    board-governs ruling was missing from HOME's liftoff portrait —
    plus three further HOME edges found in the same pass.
  - *A shipped spec that reads as a recipe while carrying disproven
    shapes.* `cloud-born-cockpit` — caught BEYOND the mandate's
    known set, and annotated rather than corrected.
  - *A per-machine obligation missing from the per-machine
    procedure.* The `COCKPIT_` credential pair lived in SETUP and
    not in [machine-setup](../skills/machine-setup.md); added as a
    pointer, keeping the inventory's one home.
- **Four dated supersession notes**, each a blockquote under its
  spec's title. Annotation throughout; nothing rewritten, nothing
  deleted.
- **Orphans: NONE — established by inbound-reference census, not by
  eyeball.** The founder accepted the empty list at the gate.
- **The gate, and its by-products.** The pre-gate critic passed all
  eleven changes and caught two weave breaches in the bench's own
  diary, repaired before the flip; the external Web review returned
  PASS on `614e0f8` with the gates re-run independently; and the
  founder ordered the stale `chore/liftoff-findings` ref deleted —
  the thing the bench had correctly declined to do on its own
  authority.
- **Flown across two seats through a park**, which is worth noting
  as evidence about the workflow rather than the audit: the analysis
  ran at the work PC and was welded to the spec BEFORE any edit, and
  the implementation was adopted at the home PC from origin alone.

## What it found

Stated separately because an audit's product is its findings.

**The headline is a negative that cost real work to establish:** the
known staleness class was already clean. Everything of value came
from asking what ELSE decays, and the answer was four shapes that
share a property — **each is a document that was TRUE when written
and was falsified by an event elsewhere**, with nothing linking the
event to the document. A verification that already happened, a
ruling that reached its home but not its manual, a spec that outlived
its premise, an obligation that reached the inventory but not the
procedure.

**And the principle is the durable output:** annotation beats
deletion, because an instruction is a trap while a record is
evidence. It resolves the tension between "the record is immutable"
and "the record is now wrong" without needing to choose.

## Where it stands

Closed, its fixes intact, and its four supersession notes still
standing in the record where a reader meets them.

**One thing needs correcting rather than repeating.** The census
cell says this audit closed "with its principle promoted". Checked at
this writing, the phrase "annotation beats deletion" appears in
exactly two places: this audit's own spec and its own history file.
**It is in no law and no skill.** A sibling bench used the
convention about an hour later the same day
([#207](https://github.com/wsher0901/roam/pull/207), also carrying
supersession notes), which shows the practice travelled — but a
same-sitting sibling is weak evidence of durable adoption, and it is
not the same thing as promotion.

So the honest state is: **a principle that governs by being
remembered.** That is precisely the condition this audit was built
to hunt — knowledge that is true, useful, and reachable only if
someone happens to open the right file. The audit named the disease
and its own cure was never given a home immune to it.

Nothing here is broken, and no action is claimed as owed: whether
that principle belongs in LAWS is a founder's ruling, not a lane's.
It is recorded because the alternative — repeating "promoted"
because the census says so — is the exact failure mode the
verification law exists to prevent.

## Sources

Down-links only — this story cites the frozen record and the living
machinery beneath it, never another story's prose.

- [the currency-audit story](../record/history/workshop/mechanism/currency-audit.md)
  — [#204](https://github.com/wsher0901/roam/pull/204): the mandate,
  the narrow danger, the birth complication, and the gate.
- [the currency-audit spec](../record/specs/currency-audit.md) — the
  governing principle, the scope edges, and the four supersession
  notes as planned work.
- [the clerk-retirement story](../record/history/workshop/mechanism/clerk-retirement.md)
  — [#197](https://github.com/wsher0901/roam/pull/197): the
  precursor that defined the class and inverted risk.
- [the cloud-born-cockpit spec](../record/specs/cloud-born-cockpit.md)
  · [the cockpit-resilience spec](../record/specs/cockpit-resilience.md)
  — two of the four supersession notes, in place.
- [machine-setup](../skills/machine-setup.md) — the per-machine
  procedure that gained the missing obligation.
- [the ledger](../record/history/README.md#the-ledger) — the #204
  entry, which enumerates all eleven changes.
