---
type: chronicle-story
shelf: III — the information system
status: living
updated: 2026-08-05 · written · cloud lane
---

# The guardrail audit — the audit that found nothing to fix, and proved it

> **CURRENT ENDING (2026-08-05).** Closed with a verdict on
> 2026-07-24 at [#218](https://github.com/wsher0901/roam/pull/218):
> the founder's maximum-depth audit of the entire governing layer,
> read against Anthropic's guidance, found the harness **ALREADY AT
> BEST PRACTICE**. Its only two real improvements shipped — the
> verification loop promoted to a labeled, copy-runnable block, and
> two skill-stub descriptions sharpened — and five alternatives were
> rejected each with its reason.
> [D-053](../record/DECISIONS.md#d-053--guardrail-audit) exists to
> BE the audit's record, so no future audit re-derives the same
> answer. **Checked at this writing, both promotions still hold —
> but the first no longer lives where the audit put it**: the
> verification block has since moved from LAWS to
> [ship §1](../skills/ship.md#1--preflight), with LAWS pointing at
> it as its one home. The improvement survived; its address did not.

## What it was

A one-time event, not a system piece: a deliberate, maximum-depth
review of everything that governs how a session behaves, measured
against an external standard rather than against the workshop's own
taste.

**What it read:** [LAWS](../LAWS.md) · [HOME](../HOME.md) · the
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
charter · all nine `.claude/skills/` stubs · all three
`.claude/hooks/` · the reviewer agent · settings · `AGENTS.md`.

**What it read them against:** three principles from Anthropic's
guidance — the always-loaded file governs · verification loops
multiply quality · sparse emphasis outperforms shouting.

**What it produced:** a verdict, two changes, five documented
refusals, and a decision entry whose purpose is to be the evidence.

## What raised it

The founder's own question, asked at full depth rather than
prompted by a failure. That origin is the unusual part and it
shapes everything: this audit had no incident to explain and no
symptom to chase, so it could return "nothing is wrong" as a real
answer rather than as a failure to find the bug.

Most reviews in this workshop are triggered by something breaking.
An audit that fires on a schedule or a whim is measuring whether
the *design* is sound, and its most valuable possible output is
proof of soundness — which is only valuable if it is written down.

## What happened, in order

*(An event has no evolution to trace, so this spine carries the
audit's own passes and anything that has disturbed its findings
since. A later weld that changes what this audit established adds a
bullet here and rewrites the ending above, exactly as for a system
piece.)*

- **The read, at maximum depth.** Every governing surface opened
  and scored against the three principles.
- **The verdict: ALREADY COMPLIANT**, with the evidence named
  rather than asserted — marker density 1–7 per file (sparse, as
  the guidance wants), thin single-source skill stubs, mechanics
  living in hooks rather than in prose (including the injected
  pickup directive and the session-end gone-guard), and the
  constitution always-loaded via the root `CLAUDE.md` import.
- **[D-053](../record/DECISIONS.md#d-053--guardrail-audit) — the
  audit becomes the record.** The entry is written so the compliant
  findings, the two promotions and the five rejections are all
  permanently retrievable. This is the event's real artifact.
- **[#218](https://github.com/wsher0901/roam/pull/218) — the two
  improvements ship.** *(1)* The CI-mirror sentence in LAWS'
  before-saying-done bullet becomes a labeled, ordered,
  copy-runnable `sh` block — five commands in the mandate's exact
  order, with the sync-first and Actions-green clauses byte-kept
  around it. Wording-only; zero semantic change. *(2)* Two stub
  descriptions gain one line each: liftoff gains its condition and
  boundary (fires when the machine is going dark; watch-from-phone
  intent belongs to go-remote), and ship gains its moment (fires
  the moment the payload is complete and the CI mirror is green,
  BEFORE any "done" claim). **No other stub changed** — the audit
  read all nine and found the rest precise, naming recall as the
  house exemplar.
- **The audit's own premise demonstrated mid-bench.** The harness
  picked up the two new stub descriptions LIVE within the sitting —
  the skill listing refreshed before the PR merged. The
  always-loaded surface governs, which is exactly the principle
  being audited, observed in the act.
- **2026-08-05 — the promoted block MOVES, and the promotion
  survives it.** The verification loop no longer lives in LAWS.
  [LAWS §Workflow](../LAWS.md#workflow-non-negotiable) now carries
  the sync-first and Actions-green clauses and points to
  [ship §1](../skills/ship.md#1--preflight) as "their one home,"
  where the five commands sit in a fenced block in the same order.
  The routing law relocated the artifact; the audit's substance —
  labeled, ordered, copy-runnable — is intact.

## What it found

Stated separately because an audit's product IS its findings, and a
chronology buries them.

**The verdict: already at best practice.** Not "no major issues" —
a positive finding, with its evidence enumerated so it is checkable
rather than reassuring.

**The two real improvements**, both about how a rule is ENCOUNTERED
rather than what it says. A verification loop earns its promotion by
being RUN, and a copy-runnable block is run more reliably than
prose. A stub's description is its TRIGGER SURFACE, and the two
sharpened lines close the two genuine mis-fire risks the audit found
— liftoff-versus-go-remote intent, and ship-before-done timing.

**The five rejections, each with its reason**, which are worth as
much as the acceptances because they record why the obvious
improvements are wrong here:

- a separate `BRIEF.md` and `.claude/rules/` — rejected: one
  always-loaded home, per the routing law.
- a marker-economy pass — rejected: density is already sparse;
  churn without gain.
- duplicating HOME's routing table into LAWS — rejected: breaks
  one-home.
- a session-shape law line — rejected: the session-start hook
  already injects the directive every session.
- settings and hook changes — rejected: the deny list and the
  existing hooks already cover it.

## Where it stands

Closed, and its findings have held for the twelve days since — with
one relocation, which is itself the useful lesson.

**An event closes; its findings do not stay closed.** The audit is
over and cannot be reopened, but what it established is a claim
about a system that keeps changing. Both promotions were verified in
place at this writing, and one of them had moved house under a rule
adopted after the audit ran. Nothing was lost, because the move was
made by a bench applying the one-home rule deliberately — but
nothing *checked* that a D-053 promotion was being relocated either.

**The verdict itself is dated, and should be read that way.**
"Already at best practice" was true of the governing layer as it
stood on 2026-07-24, measured against the guidance as it stood then.
The layer has grown since. That does not weaken the finding; it
scopes it, and the reason D-053 records its evidence rather than
just its conclusion is precisely so a later audit can re-measure
cheaply instead of re-deriving.

The one deferred item is small and honest: the decide-anchor length
question was filed to [IDEAS](../IDEAS.md) as a future
consideration rather than ruled on here.

## Sources

Down-links only — this story cites the frozen record and the living
machinery beneath it, never another story's prose.

- [D-053](../record/DECISIONS.md#d-053--guardrail-audit) — the audit
  AS the record: the compliant findings with their evidence, the two
  promotions, and the five rejections each with its reason.
- [the guardrail-audit story](../record/history/workshop/definition/guardrail-audit.md)
  — [#218](https://github.com/wsher0901/roam/pull/218): the bench,
  the external review, and the harness refreshing the stubs
  mid-sitting.
- [LAWS §Workflow](../LAWS.md#workflow-non-negotiable) ·
  [ship §1](../skills/ship.md#1--preflight) — the promoted
  verification block, and where it lives now.
- `.claude/skills/liftoff/SKILL.md` ·
  `.claude/skills/ship/SKILL.md` — the two sharpened descriptions,
  still verbatim.
