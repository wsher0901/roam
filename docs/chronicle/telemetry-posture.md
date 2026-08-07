---
type: chronicle-story
shelf: IV — Roam
status: living
updated: 2026-08-06 · written · cloud lane
---

# The telemetry posture — capture from day one, use later, and never at the cost of the privacy floor

> **CURRENT ENDING (2026-08-06).** Settled and unbuilt. The posture
> is **capture now, use later**: V1 records the behavior-event corpus
> from day one — because events cannot be backfilled — under a strict
> privacy floor (consent-gated, pseudonymous session ids, no PII, no
> raw IPs, stated-only fields never in payloads, raw retention
> time-boxed at 12 months), while V1 may USE those events only for
> product debugging, fatigue-cap tuning, and quality signals. Ranking
> personalization stays Later; the data is never sold or shared. The
> vocabulary — **19 event types**, plus the quality, ground-truth and
> source-health registers — was folded out of its own retired file
> into
> [FACTS Appendix C](../data/FACTS.md#appendix-c--telemetry-vocabulary-what-the-app-records).
> Nothing captures anything yet: the storage lands in
> [V1.S1.T7](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
> and collection goes live in
> [V2](../ROADMAP.md#v2--real-users--rough-bucket), so this is a
> posture that has been decided twice and exercised zero times.

## What it is

The rule for what Roam records about itself and its users, and — more
carefully — for what it is allowed to DO with that record.

The posture separates two things that most products fuse:

- **Capture** — begins on day one, at full fidelity, under the privacy
  floor.
- **Use** — is restricted by an explicit V1 allowlist: product and
  funnel debugging, fatigue-cap tuning (which upfront questions get
  skipped), and quality signals. Ranking personalization is
  deliberately NOT on it.

Three registers make up the vocabulary in
[Appendix C](../data/FACTS.md#appendix-c--telemetry-vocabulary-what-the-app-records):
behavior events (C1), quality and ground truth (C2), and source health
(C3), with a storage note (C4) pointing at the schema task.

Two laws inside it carry more weight than the rest:

**The exposure law** (named non-negotiable): every
recommendation-reaction event carries `slate_id`, the full list of
items shown, and their positions — not just the item acted on.
Feedback only exists over what was shown; position shapes response;
**no-click is not dislike.**

**The calibration law**: an event earns a slot only if it answers a
named product question. Appendix C lists those questions explicitly —
which asks get skipped, whether inferences get corrected, whether
proactive shifts land, where plans churn, whether users read receipts,
whether "unverified" is trusted, where users abandon, whether the
draft is fast enough. The vocabulary is derived from the questions
rather than from what happens to be easy to log.

## What raised it

A timing asymmetry, stated plainly in the ruling: **events cannot be
backfilled.** The ranking work that would use them is explicitly
deferred to Later by
[FOUNDATION §The dataset](../FOUNDATION.md#the-dataset--the-quiet-asset),
and the day that work begins it will either open with months of
recorded slates or with zero. Nothing recoverable sits between those
two outcomes, and only one of them is a choice available today.

The second pressure was interpretability. A click-only log is not a
small version of a good log — it is an uninterpretable one, because
position bias makes a click meaningless without the slate it came
from. So the exposure law is not a nicety layered on top of the
posture; without it the corpus would be worthless for the exact
purpose it is being accumulated for.

The third was legitimacy. A corpus gathered loosely is a liability
that gets harder to clean the longer it grows, so the privacy floor
had to be part of the capture decision rather than a later tightening.

## What changed, in order

- **[#35](https://github.com/wsher0901/roam/pull/35) — the posture is
  ruled and the vocabulary written**
  ([D-014](../record/DECISIONS.md#d-014--telemetry-posture)).
  TELEMETRY.md is born as amendment 2 of the
  [V1.S1.T1](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
  vocabulary audit, defining behavior events under the privacy floor,
  the claim ledger and eval runs, actuals for calibration, and source
  health feeding the reliability ladder. The rejected alternatives are
  the clearest statement of the reasoning: deferring capture entirely
  (permanent data loss), and click-only logging without exposures
  (position-biased, unusable). A third — using events for ranking
  tuning in V1 — was rejected because it would contradict
  FOUNDATION's own Later.
- **The data-asset law lands beside it**
  ([D-015](../record/DECISIONS.md#d-015--data-asset-law)). The fact
  cache becomes bitemporal (`valid_for` when a value is true in the
  world; `recorded_at` when we learned it) and append-only — values
  are superseded, never overwritten, and revision series are
  first-class. An actuals harvester
  ([V1.S3.T7](../ROADMAP.md#v1s3--engine-core--two-families-deep))
  records observed values once `valid_for` passes, pairing with the
  claim ledger for calibration. **World data is strictly separated
  from traveler and event data** — the boundary that keeps the
  telemetry corpus from contaminating the asset layer, and vice
  versa.
- **[D-033](../record/DECISIONS.md#d-033--telemetry-folds-into-facts)
  — the file retires; the vocabulary survives whole.** TELEMETRY.md
  folds into FACTS as Appendix C, verbatim, and `data/` tightens to
  three files: [FACTS](../data/FACTS.md) ·
  [SOURCES](../data/SOURCES.md) · [SCHEMA](../data/SCHEMA.md). The
  reason is worth keeping: the standalone file confused its own author
  ("not sure what this is for"), and the alternative of keeping it
  with an added purpose line was rejected because **the file's
  existence was the confusion.** The posture itself was not touched —
  D-033 upholds D-014 — which is why this fold is a story about
  filing rather than about policy.

## Where it stands

Decided, complete on paper, and entirely unexercised.

Derived at write time: the event vocabulary is **19 types**,
deliberately parameterized rather than enumerated flat, to avoid event
explosion — `question_event {asked|answered|skipped}` rather than
three event types; `suggestion_reaction
{accepted|rejected|modified|near_peer_taken}` rather than four. Every
event carries an envelope with `event_id`, pseudonymous `session_id`,
timestamp, type, `schema_version`, subject and context references, and
client context. Events reference stored objects and never duplicate
their values, schema changes are additive only, and **stated-only
fields never appear in payloads**: an event may record that TP-45
(special conditions) was set, never what it was set to.

That last rule is the most interesting thing in the file, because it
is a privacy guarantee expressed as a schema constraint rather than a
policy sentence. The stated-only class exists in
[Appendix A](../data/FACTS.md#appendix-a--traveler-parameters-tp-0147--per-d-011--d-012)
so that sensitive fields are never INFERRED; the payload rule extends
the same protection to the telemetry corpus, so the class cannot leak
through the back door of an analytics event.

**The honest status is that none of this runs.** The storage for all
three registers lands in
[V1.S1.T7](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code),
which is unticked; consent-gated collection going live is listed under
[V2](../ROADMAP.md#v2--real-users--rough-bucket), not V1. So "capture
from day one" is a commitment about a day that has not arrived — and
the commitment's own argument (events cannot be backfilled) means the
clock on its value has been running the entire time. That is not a
contradiction in the ruling; it is the cost the ruling accepted by
being made before the app existed, and it is worth stating plainly
rather than letting "settled" read as "running".

One tension is worth recording without resolving. The posture says
capture begins on day one; V1 has no accounts, so ids are
pseudonymous session ids; V2 introduces accounts. Nothing on record
decides what happens to a V1 pseudonymous corpus when a real identity
arrives — whether sessions are linkable to accounts retroactively, and
under what consent. It is not an open register slot, and it will
become a real question the first time a returning user is recognized.

## Sources

Down-links only.

- [FACTS Appendix C](../data/FACTS.md#appendix-c--telemetry-vocabulary-what-the-app-records)
  — the vocabulary in full: the envelope, the exposure law, the 19
  event types, the privacy floor.
- [FACTS C1](../data/FACTS.md#c1--behavior-events-d-014) — behavior
  events and the questions they exist to answer.
- [FACTS C2](../data/FACTS.md#c2--quality--ground-truth-p5) — the eval
  case set, claim ledger, and actuals.
- [FACTS C3](../data/FACTS.md#c3--source-health-p6) — source health
  feeding the reliability ladder.
- [D-014](../record/DECISIONS.md#d-014--telemetry-posture) — the
  posture, the privacy floor, the use-allowlist, and the rejected
  alternatives.
- [D-015](../record/DECISIONS.md#d-015--data-asset-law) — bitemporal
  append-only storage, the actuals harvester, and the separation of
  world from traveler and event data.
- [D-033](../record/DECISIONS.md#d-033--telemetry-folds-into-facts) —
  the fold into Appendix C and the retirement of TELEMETRY.md.
- [the telemetry-inventory story](../record/history/product/definition/telemetry-inventory.md)
  — [#35](https://github.com/wsher0901/roam/pull/35).
- [FOUNDATION §The dataset](../FOUNDATION.md#the-dataset--the-quiet-asset)
  — the Later that the use-allowlist defers to.
- [ENGINE §10](../ENGINE.md#10-learn--the-loop-back) — the pipeline
  stage this corpus feeds.
