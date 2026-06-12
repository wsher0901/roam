# Telemetry, quality & source health — V1
(V1.S1.T1 amendment review, purposes P3–P6; D-014, D-015)

What the system records about ITSELF and about user interaction —
distinct from world facts (FACTS.md) and traveler inputs (FACTS.md
Appendix A). Three registers: behavior events, quality & ground
truth, source health. Storage for all of it lands in V1.S1.T7.

## 1. Behavior events (D-014)
Posture: capture now, use later. FOUNDATION defers ranking-tuning to
Later; events are captured from day one because they cannot be
backfilled.
V1 use-allowlist: product/funnel debugging · fatigue-cap tuning
(which upfront questions get skipped) · quality signals feeding §2.
Not in V1: ranking personalization. Never: selling or sharing.
Calibration law: an event earns a slot only if it answers a named
product question.

Envelope (every event):
{event_id, session_id (pseudonymous), ts, type, schema_version,
 subject_ref, action, context_ref,
 client_context {device_class, app_version, environment}}
Rules: events reference stored objects, never duplicate values;
stated-only fields never appear in payloads (an event may say "TP-45
was set", never to what); naming = object_action snake_case; schema
changes are additive only (bump schema_version).

Exposure law (non-negotiable): every recommendation-reaction event
carries slate_id, the full list of items shown, and positions.
Feedback only exists over what was shown; position shapes response;
no-click is not dislike.

Event vocabulary — 19 types, parameterized to avoid event explosion:
- Elicitation: question_event {asked|answered|skipped} · field_set
  {provenance_transition} · field_corrected
- Recommendation reactions (all carry slate_id + rank): slate_shown ·
  suggestion_reaction {accepted|rejected|modified|near_peer_taken} ·
  shift_suggestion_response {accepted|declined} · slate_regenerated
- Plan edits: plan_item_event {added|removed|swapped|pinned} ·
  tradeoff_event {presented|accepted|declined} (lock provenance) ·
  revalidation_run · receipt_expanded · unverified_outcome
  {kept|dropped}
- Session & funnel: session_event {started|ended} · view_dwell ·
  abandonment_point · plan_exported · draft_timing · ux_error_shown
- Explicit feedback: feedback_given {rating, target_ref, text?}

Questions answered, by group: which asks get skipped (tunes the
six-question cap); are inferences corrected (tunes inference trust);
do proactive shifts and near-peers land; where plans churn; do users
read receipts; is "unverified" trusted (feeds §2); where users
abandon; is the draft fast enough.

Privacy: consent-gated — no events before consent; GPC/DNT respected;
consent changes are themselves logged · pseudonymous session ids ·
no PII, no raw IPs · retention: raw events 12 months (parameter),
aggregates kept · deletion requests honored across raw and derived.

## 2. Quality & ground truth (P5)
- Eval case set: versioned in-repo {input scenario -> expected
  assertions}; extends V1.S3.T6's golden tests to product level;
  grows from anonymized real sessions and feedback events.
- Claim ledger: every RENDERED claim is logged
  {claim_id, fact_ref, source_slot, grade, value_ref, shown_at,
  session_ref} — what we asserted, at what confidence.
- Actuals pairing: the actuals harvester (ROADMAP V1.S3.T7) records
  observed values once valid_for passes; joined to the claim ledger
  it yields the calibration report — accuracy by source, family, and
  grade. Headline metric: verified-claim contradiction rate ("was our
  'verified' actually right").
- User-truth: field_corrected and unverified_outcome events feed the
  same ledger.
- Consequence: sustained miscalibration triggers §3's demotion law.

## 3. Source health (P6)
Per source slot: fetch_success_rate · latency · error_classes ·
quota_and_cost · freshness_compliance (% of serves inside the
freshness window) · schema_drift (live payload keys vs the FACTS.md
Dictionary line — the Dictionary IS the drift contract) ·
ladder_falls (runtime degradations down the reliability ladder, and
where).
Demotion law (D-015): sustained failure, drift, or §2 miscalibration
-> grade demotion -> renders fall down the ladder automatically;
promotion only via re-vetting (a T2–T6-style spike rerun). Grades are
earned, never grandfathered.
Coverage maps: derived views — % of facts verified per destination
per family. The product's honesty surface and the asset's quality
ledger.

## Storage note (for V1.S1.T7)
Tables implied: events · eval_runs (cases live in the repo) ·
claim_ledger · actuals · source_health, plus coverage views. Fact
cache: bitemporal (valid_for, recorded_at), append-only supersede
chains; license-segmented layers with per-layer attribution; world
data strictly separated from traveler and event data (D-015).
