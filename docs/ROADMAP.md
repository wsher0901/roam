---
type: roadmap
title: Roadmap
status: living
---
# Roadmap
Manual — notation, tags, and how to read this file:
[HOME.md](HOME.md#roadmap-manual).

## The versions
| V | Name | Done when |
|---|---|---|
| V1 | The demo | a public URL runs the full Suggest→Plan→Edit spine over all five families on the three seeded scenarios, every claim sourced or labeled per the [reliability law](FOUNDATION.md#the-reliability-law) |
| V2 | Real users | a stranger can sign up, build a real trip, leave, return — and everything holds |
| V3 | The product | charging money for it is defensible |
| Pool | — | unversioned sockets + [IDEAS.md](IDEAS.md) inbox |

Depth (rolling wave,
[D-022](DECISIONS.md#d-022--2026-07--version-ladder--lifespan-split-amends-d-004)):
active version fully staged and tasked · next version a rough bucket ·
the one after name-only · pool unversioned.

## V1 — The demo · ACTIVE
For: leisure travelers, any party type. Demo-first, users soon — built
real and deployable, no day-one onboarding or billing; nothing in V1
may require a rewrite when accounts arrive.
Refuses (lifts per-version, by roadmap edit only): booking, payments,
reservations, or any transaction · live fare/price scraping (cost =
honest estimate ranges) · mid-trip features · social/sharing · mobile
(web only).
Ships: all five check families — two deep first
([S3](#v1s3--engine-core--two-families-deep)), three more as plug-in
proof ([S7](#v1s7--the-other-three-families-plug-in-proof)); trending
via general signals only.
Active stages:
[V1.S1](#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
and [V1.S2](#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
(parallel lanes). All later stages queued in order.

### V1.S1 — Data Definition (the gate; docs + spike scripts only, no app code)
Done when: every V1 fact has a vetted source with a successful spike
fetch, a reliability grade, and a freshness window — and the storage
schema is written.
- [x] V1.S1.T1 [P] Fact inventory — enumerate every fact each of the
      five families needs (what it is, which spine step uses it,
      geographic scope, freshness need) -> [docs/data/FACTS.md](data/FACTS.md)
- [x] V1.S1.T2 [P] Vet sources: Weather — forecast + climatology
      candidates (e.g. Open-Meteo), spike fetch script, grade +
      freshness + coverage + cost -> entry in [docs/data/SOURCES.md](data/SOURCES.md)
- [ ] V1.S1.T3 [P] Vet sources: Sky & sea — sun/moon math, tides (NOAA
      for US; global gaps labeled), aurora/nature timing; same outputs
- [ ] V1.S1.T4 [P] Vet sources: Feasibility — places + opening hours,
      routing/distances, seasonal closures, cost-estimate basis; same
      outputs
- [ ] V1.S1.T5 [P] Vet sources: Time & transport — airport data,
      flight-schedule feeds, ground transit; grade hardest (most
      data-gated family); same outputs
- [ ] V1.S1.T6 [P] Vet sources: Crowds & calendar — public holidays,
      school breaks, events feeds, trending-general method; same outputs
- [ ] V1.S1.T7 [seq after T1–T6] Storage schema + source registry —
      Postgres schema for the fact cache (value, source, confidence,
      fetched_at, freshness window), places, plans, plan_versions;
      consolidated [docs/data/SOURCES.md](data/SOURCES.md); any fact lacking a reliable
      source explicitly marked "LLM-research grade -> rendered as
      unverified"
      Also covers: [docs/data/TELEMETRY.md](data/TELEMETRY.md) tables (events, claim
      ledger, eval runs, actuals, source health) and the bitemporal
      append-only fact-cache law ([D-014](DECISIONS.md#d-014--2026-06--telemetry-posture-capture-now-use-later), [D-015](DECISIONS.md#d-015--2026-06--data-asset-law-bitemporal-append-only-license-segmented)).

### V1.S2 — Skeleton & design foundations (parallel lane with S1)
Done when: a styled shell is deployed on Vercel with CI green and the
database connected.
- [x] V1.S2.T1 [P] App scaffold — Next.js App Router + TypeScript +
      Tailwind v4 + shadcn/ui; repo layout with isolated engine/ module
      dir; ESLint/Prettier; Vitest with one passing test
- [x] V1.S2.T2 [seq after T1] Deploy + CI — Vercel project with PR
      preview links; GitHub Actions lint + test so /ship's gate is
      real; .env.example hygiene (public repo: secrets never committed)
- [x] V1.S2.T3 [seq after T1] Supabase wiring — project, pooled
      connection, server-side client, env plumbing
- [ ] V1.S2.T4 [seq after [V1.S1.T7](#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code) and T3] Schema migration — implement
      the S1 schema as migrations; minimal seed data
- [ ] V1.S2.T5 [P after T1] Design foundations — tokens (palette, type
      scale, spacing, radii), shadcn theme, Motion principles
      (durations, springs), app shell layout deployed

### V1.S3 — Engine core + two families deep
Binding requirements: [DECISION-POLICY §6–§8](DECISION-POLICY.md#6-preferences-are-defaults-not-blinders)
(canonical since [D-021](DECISIONS.md#d-021--2026-07--plan-synthesis-principles-re-home-to-decision-policy)).
Done when: a CLI harness returns scored, sourced, explained verdicts
for any destination + dates using Weather and Sky & sea.
- [ ] V1.S3.T1 [seq] Check contract + orchestrator — CheckModule
      interface; Verdict shape (score, confidence, source,
      explanation); engine context; parallel fan-out + merge
- [ ] V1.S3.T2 [seq] Fact-cache layer — read-through Postgres cache
      honoring per-source freshness windows; fetch dedupe;
      recorded-fixture mode for tests
- [ ] V1.S3.T3 [P after T2] Weather module (deep) — forecast-vs-
      climatology blend labeled in output; per-activity sensitivity
      profiles (wind, rain, fog, temp)
- [ ] V1.S3.T4 [P after T2] Sky & sea module (deep) — sun/moon/golden
      hours; tides where covered; nature timing only where
      source-backed, else labeled unverified
- [ ] V1.S3.T5 [seq after T3+T4] Scoring + explanations — verdicts ->
      activity/day/trip scores with confidence; reason rendering;
      `engine demo <place> <dates>` harness
- [ ] V1.S3.T6 [P] Engine test suite — golden tests on fixtures; CI
      runs with zero live calls
- [ ] V1.S3.T7 [P after T2] Actuals harvester — scheduled job that
      records observed values once a fact's valid_for passes; pairs
      with the claim ledger for calibration ([D-015](DECISIONS.md#d-015--2026-06--data-asset-law-bitemporal-append-only-license-segmented); spec:
      [docs/data/TELEMETRY.md §2](data/TELEMETRY.md#2-quality--ground-truth-p5))

### V1.S4 — Suggest
Done when: floor input (origin + dates) streams back ranked, reasoned
trip options in the app.
- [ ] V1.S4.T1 [seq] Brain endpoint — AI SDK streaming route; system
      prompt v1; however-much-input -> structured TripQuery via
      streamObject
- [ ] V1.S4.T2 [seq] Candidate generation — origin + dates -> candidate
      destinations within data coverage; engine scores them
- [ ] V1.S4.T3 [seq] Options UI — streaming option cards with reasons +
      confidence badges, map context, select-one flow

### V1.S5 — Plan
Binding requirements: [DECISION-POLICY §6–§8](DECISION-POLICY.md#6-preferences-are-defaults-not-blinders)
(canonical since [D-021](DECISIONS.md#d-021--2026-07--plan-synthesis-principles-re-home-to-decision-policy)).
Done when: selecting an option yields a persisted day-by-day plan
rendered on timeline + map.
- [ ] V1.S5.T1 [seq] Plan builder — sequence activities by scores,
      daylight, opening hours; persist plan + snapshot version 1
- [ ] V1.S5.T2 [seq] Timeline UI — day columns, activity blocks,
      dnd-kit wiring (interaction verdicts arrive in S6)
- [ ] V1.S5.T3 [P after T1] Map view — MapLibre day routes + markers
      synced with timeline selection

### V1.S6 — Edit + revalidate (the money moment)
Done when: dragging anything triggers whole-plan re-validation with
streamed verdicts, and any version reverts in one click.
- [ ] V1.S6.T1 [seq] Revalidation path — perturbation -> full re-score
      diff (what improved, what broke, why)
- [ ] V1.S6.T2 [seq] Edit UX — drag/move/swap or a typed request (one
      brain, no modes) -> streamed verdict panel, accept/undo
- [ ] V1.S6.T3 [seq] Versions & revert — version history UI, one-click
      revert, change annotations

### V1.S7 — The other three families (plug-in proof)
Done when: all five families run in every spine step with zero
engine-core changes.
- [ ] V1.S7.T1 [P] Feasibility module — hours, closures, distances,
      cost estimate ranges
- [ ] V1.S7.T2 [P] Time & transport module — airport choice,
      flight-time sense per registry grades, backward-chained departure
      logistics, within-trip modes
- [ ] V1.S7.T3 [P] Crowds & calendar module — holidays, school breaks,
      events, trending-general

### V1.S8 — Demo polish
Done when: a public demo URL runs three seeded wow scenarios smoothly.
- [ ] V1.S8.T1 [P] Motion + visual pass — loading choreography,
      transitions, empty states
- [ ] V1.S8.T2 [P] Reliability surfacing audit — error/edge handling;
      every unverified fact visibly labeled
- [ ] V1.S8.T3 [seq] Demo scenarios + perf — three seeded scenarios
      with warmed cache, streaming latency pass, README demo section,
      public URL

## V2 — Real users · rough bucket
accounts & auth (Supabase) with saved trips ·
[telemetry](data/TELEMETRY.md) consent-gated collection goes live ·
hardening: error/edge handling at user scale, abuse and cost caps.

## V3 — The product · named
real prices where source-backed · trip sharing (async) · promoted
sockets: safety & travel advisories, visa/entry rules · billing,
legal, ops · engine tuning v0 on the accumulated dataset.

## Pool — unversioned sockets
air quality, pollen, smoke seasons · sea temperature & swell ·
accessibility needs · in-app booking · SNS trend mining · sync
collaboration · plan diffs & branching · mid-trip companion · mobile.
Inbox: [IDEAS.md](IDEAS.md) — nothing is scope until triaged here.
