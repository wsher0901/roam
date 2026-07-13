---
type: roadmap
title: Roadmap
status: living
---
# Roadmap
Manual — notation, tags, and how to read this file:
[HOME.md](HOME.md#roadmap-manual).

## The versions
| V    | Name        | Completion criteria                                                                                                                                                                                            |
| ---- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| V1   | The demo    | a public URL runs the full Suggest→Plan→Edit spine over all five [check families](FOUNDATION.md#what-roam-checks) on the three seeded scenarios, every claim sourced or labeled per the [reliability law](FOUNDATION.md#the-reliability-law) |
| V2   | Real users  | a stranger can sign up, build a real trip, leave, return — and everything holds                                                                                                                      |
| V3   | The product | charging money for it is defensible                                                                                                                                                                  |
| Pool | —           | unversioned sockets + [IDEAS.md](IDEAS.md) inbox                                                                                                                                                     |

This plan is living, never a promise: it changes whenever reality
disagrees, and every change lands as a decision — a D-number via
[decide](skills/decide.md) — nothing here is fixed. Detail fades on
purpose (the rolling wave,
[D-022](DECISIONS.md#d-022--2026-07--version-ladder--lifespan-split-amends-d-004)):
the active version is fully staged and tasked, the next is a rough
bucket, the one after only a name, and the rest waits in the
[Pool](#pool--unversioned-sockets).

## V1 — The demo · ACTIVE
The goal: one public URL where a visitor watches Roam do its whole
job — suggest trips from as little as origin + dates, build a full
day-by-day plan, and survive any edit with whole-plan re-validation —
across three seeded scenarios, every claim sourced or labeled per the
[reliability law](FOUNDATION.md#the-reliability-law). Built for
leisure travelers, any party type. Demo-first but real: deployable
production code, no onboarding or billing yet, and nothing that would
need a rewrite when accounts arrive in V2.
Refuses (each lifts in a later version, by roadmap edit only):
booking, payments, reservations, or any transaction · live fare/price
scraping — cost means honest estimate ranges · mid-trip features ·
social/sharing · mobile (web only).
Ships: all five [check families](FOUNDATION.md#what-roam-checks) —
two built deep, three more added as proof the plug-in promise holds;
trending via general signals only.

### V1.S1 — Data Definition (the gate; docs + spike scripts only, no app code)
Completion criteria: every V1 fact has a vetted source with a successful spike
fetch, a reliability grade, and a freshness window — and the storage
schema is written.
- [x] V1.S1.T1 [P] Fact inventory — enumerate every fact each of the
      five families needs (what it is, which spine step uses it,
      geographic scope, freshness need) -> [docs/data/FACTS.md](data/FACTS.md) ·
      [history](history/v1.s1.t1.md)
- [x] V1.S1.T2 [P] Vet sources: Weather — forecast + climatology
      candidates (e.g. Open-Meteo), spike fetch script, grade +
      freshness + coverage + cost -> entry in [docs/data/SOURCES.md](data/SOURCES.md) ·
      [history](history/v1.s1.t2.md)
- [ ] V1.S1.T3 [P] Vet sources: Sky & sea — sun/moon math, tides (NOAA
      for US; global gaps labeled), aurora/nature timing; same
      outputs -> `docs/data/SOURCES-sky-sea.md` (lane-disjoint per
      [D-020](DECISIONS.md#d-020--2026-07--parallel-lanes-v2-native-lanes-replace-hand-built-orchestration);
      consolidated at T7)
- [ ] V1.S1.T4 [P] Vet sources: Feasibility — places + opening hours,
      routing/distances, seasonal closures, cost-estimate basis; same
      outputs -> `docs/data/SOURCES-feasibility.md`
- [ ] V1.S1.T5 [P] Vet sources: Time & transport — airport data,
      flight-schedule feeds, ground transit; grade hardest (most
      data-gated family); same outputs ->
      `docs/data/SOURCES-time-transport.md`
- [ ] V1.S1.T6 [P] Vet sources: Crowds & calendar — public holidays,
      school breaks, events feeds, trending-general method; same
      outputs -> `docs/data/SOURCES-crowds-calendar.md`
- [ ] V1.S1.T7 [seq after T1–T6] Storage schema + source registry —
      Postgres schema for the fact cache (value, source, confidence,
      fetched_at, freshness window), places, plans, plan_versions;
      consolidate the four `SOURCES-<family>.md` files into
      [docs/data/SOURCES.md](data/SOURCES.md) and delete them; any
      fact lacking a reliable source explicitly marked "LLM-research
      grade -> rendered as unverified"
      Also covers: [docs/data/TELEMETRY.md](data/TELEMETRY.md) tables (events, claim
      ledger, eval runs, actuals, source health) and the bitemporal
      append-only fact-cache law ([D-014](DECISIONS.md#d-014--2026-06--telemetry-posture-capture-now-use-later), [D-015](DECISIONS.md#d-015--2026-06--data-asset-law-bitemporal-append-only-license-segmented)).

### V1.S2 — Skeleton & design foundations (parallel lane with S1)
Completion criteria: a styled shell is deployed on Vercel with CI green and the
database connected.
- [x] V1.S2.T1 [P] App scaffold — Next.js App Router + TypeScript +
      Tailwind v4 + shadcn/ui; repo layout with isolated engine/ module
      dir; ESLint/Prettier; Vitest with one passing test ·
      [history](history/v1.s2.t1.md)
- [x] V1.S2.T2 [seq after T1] Deploy + CI — Vercel project with PR
      preview links; GitHub Actions lint + test so /ship's gate is
      real; .env.example hygiene (public repo: secrets never
      committed) · [history](history/v1.s2.t2.md)
- [x] V1.S2.T3 [seq after T1] Supabase wiring — project, pooled
      connection, server-side client, env plumbing ·
      [history](history/v1.s2.t3.md)
- [ ] V1.S2.T4 [seq after [V1.S1.T7](#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code) and T3] Schema migration — implement
      the S1 schema as migrations; minimal seed data
- [ ] V1.S2.T5 [P after T1] Design foundations — tokens (palette, type
      scale, spacing, radii), shadcn theme, Motion principles
      (durations, springs), app shell layout deployed

### V1.S3 — Engine core + two families deep
Binding requirements: [ENGINE — Aggregate · Synthesize · Gate](ENGINE.md#5-aggregate--one-score)
(canonical since [D-021](DECISIONS.md#d-021--2026-07--plan-synthesis-principles-re-home-to-decision-policy)).
Completion criteria: a CLI harness returns scored, sourced, explained verdicts
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
Completion criteria: floor input (origin + dates) streams back ranked, reasoned
trip options in the app.
- [ ] V1.S4.T1 [seq] Brain endpoint — AI SDK streaming route; system
      prompt v1; however-much-input -> structured TripQuery via
      streamObject
- [ ] V1.S4.T2 [seq] Candidate generation — origin + dates -> candidate
      destinations within data coverage; engine scores them
- [ ] V1.S4.T3 [seq] Options UI — streaming option cards with reasons +
      confidence badges, map context, select-one flow

### V1.S5 — Plan
Binding requirements: [ENGINE — Aggregate · Synthesize · Gate](ENGINE.md#5-aggregate--one-score)
(canonical since [D-021](DECISIONS.md#d-021--2026-07--plan-synthesis-principles-re-home-to-decision-policy)).
Completion criteria: selecting an option yields a persisted day-by-day plan
rendered on timeline + map.
- [ ] V1.S5.T1 [seq] Plan builder — sequence activities by scores,
      daylight, opening hours; persist plan + snapshot version 1
- [ ] V1.S5.T2 [seq] Timeline UI — day columns, activity blocks,
      dnd-kit wiring (interaction verdicts arrive in S6)
- [ ] V1.S5.T3 [P after T1] Map view — MapLibre day routes + markers
      synced with timeline selection

### V1.S6 — Edit + revalidate (the money moment)
Completion criteria: dragging anything triggers whole-plan re-validation with
streamed verdicts, and any version reverts in one click.
- [ ] V1.S6.T1 [seq] Revalidation path — perturbation -> full re-score
      diff (what improved, what broke, why)
- [ ] V1.S6.T2 [seq] Edit UX — drag/move/swap or a typed request (one
      brain, no modes) -> streamed verdict panel, accept/undo
- [ ] V1.S6.T3 [seq] Versions & revert — version history UI, one-click
      revert, change annotations

### V1.S7 — The other three families (plug-in proof)
Completion criteria: all five families run in every spine step with zero
engine-core changes.
- [ ] V1.S7.T1 [P] Feasibility module — hours, closures, distances,
      cost estimate ranges
- [ ] V1.S7.T2 [P] Time & transport module — airport choice,
      flight-time sense per registry grades, backward-chained departure
      logistics, within-trip modes
- [ ] V1.S7.T3 [P] Crowds & calendar module — holidays, school breaks,
      events, trending-general

### V1.S8 — Demo polish
Completion criteria: a public demo URL runs three seeded wow scenarios smoothly.
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
