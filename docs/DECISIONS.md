# Decisions Log
Format: D-NNN | date | decision | why | alternatives rejected.

## D-001 — 2026-06 — Tech stack
Decision: Next.js (TypeScript) + Supabase (Postgres + Auth) + Vercel;
planning brain = Claude API server-side; scoring engine isolated as its
own tested module.
Why: one language and one deploy = fewest moving parts for a solo
non-dev; the stack Claude Code is strongest at; scales from portfolio
demo to real users without a rewrite (Supabase auth = multi-user built in).
Alternatives rejected: Python backend + JS frontend (two stacks to
maintain); mobile-first v1 (web decided).

## D-002 — 2026-06 — Handoff-note merge policy
Decision: main stays PR-only for everything, with one narrow carve-out —
a PR containing only a docs/HANDOFF.md update (written by /handoff or
/ship) is opened and squash-merged immediately without approval.
Why:
- keeps the physical PR gate universal on main;
- adds zero friction to the leaving ritual;
- HANDOFF is operational state I just authored, so approval adds nothing.
Alternatives rejected: ruleset bypass for my account (removes the
physical guarantee for the only identity that pushes); approval
micro-PRs (taxes the handoff habit; unapproved notes strand the other
machine with stale briefings).

## D-003 — 2026-06 — Roam V1 scope (Foundation V1)
Decision: V1 = one no-modes engine running Suggest -> Plan -> Edit-with-
revalidation over five pluggable check families (weather per activity;
sky & sea; feasibility; time & transport; crowds & calendar), pre-trip
only, estimates not live prices, web only, with plan version history +
revert, all gated by the reliability law (never fabricate; a check ships
only with a consistently reliable source).
Why:
- demo-first demands depth over breadth; breadth arrives by architecture
  (plug-in check modules);
- edit-with-full-revalidation is the differentiator mainstream planners
  lack;
- time/transport reasoning is core to "crossing every t" and to the
  time-as-scarcest-resource identity.
Alternatives rejected: single-scenario V1 (suggest-only or plan-only);
fixed modes per question type; live prices or booking in V1; mid-trip
companion in V1; excluding transport from V1 (reversed during blueprint —
included as reasoning, not transactions).

## D-004 — 2026-06 — Planning notation & rolling-wave depth
Decision: single notation Vn / Vn.Sm / Vn.Sm.Tk (Version -> Stage ->
Task; small steps are checkboxes inside a task). ROADMAP plans rolling
wave: V1 fully detailed, V2 a rough named bucket, everything else pooled
in FOUNDATION sockets + docs/IDEAS.md.
Why:
- one notation ends the v1/MVP/demo/milestone synonym confusion;
- IDs let every PR, branch, handoff, and decision point at an exact
  work item;
- detail only where actionable: a new idea costs one pool line, never a
  re-plan of future versions.
Alternatives rejected: spec all versions now (guesswork + heavy upkeep;
penalizes new ideas); V1-only with no version buckets (loses the
per-version narrative).

## D-005 — 2026-06 — Stack re-trial vs Foundation V1: D-001 upheld + frontend layer
Decision: D-001 upheld and extended — Next.js App Router (TypeScript,
React 19) + Supabase (Postgres + Auth) + Vercel, planning brain = Claude
API server-side, now with a named frontend layer: Tailwind v4 +
shadcn/ui (design system), Motion (animation), MapLibre GL (maps),
dnd-kit (timeline drag-and-drop), Vercel AI SDK in the "AI SDK UI"
flavor (streaming incl. streamObject; NOT the paused RSC/streamUI
variant), TanStack Query + Zustand (state) — plus a performance
doctrine: stream-first (UI never blocks on the brain; partial results
render as they resolve), cache-heavy (every fetched fact stored in
Postgres with a freshness window — the dataset asset and the speed
mechanism are the same feature), parallel fan-out across the five check
families, DB region co-located with pooled connections.
Riders: (1) the engine streams progressively and caches every fact from
day one; (2) the engine module keeps a hard boundary so it can later be
lifted into a Python worker for ML tuning of the dataset.
Why:
- 2026's cutting edge for this app class IS the deep modern React stack
  (server components, streaming, React 19 compiler); alternative
  frameworks trade away the React-first ecosystem Roam needs most —
  maps, drag-and-drop, AI streaming SDKs, component systems;
- the most-trodden TypeScript stack maximizes AI-assisted coding
  reliability, and Claude Code writes nearly every line — this is the
  solo builder's actual bug rate;
- the doctrine neutralizes serverless's one real risk (function time
  limits) and makes the dataset accrue as a side effect of being fast.
Alternatives rejected: Python backend + TS frontend (most moving parts
for a solo non-dev; the data/ML pull is satisfied by Rider 2's escape
hatch); all-TS on a long-running own server (ops burden; loses built-in
auth and the preview-URL flow the rituals assume); exotic frontends
(Svelte/Solid/Qwik — thinner ecosystem for Roam's needs, less
Claude-Code-trodden); AI SDK RSC/streamUI variant (development paused).

## D-006 — 2026-06 — V1 roadmap cut (stages & tasks)
Decision: V1 ships in 8 stages — S1 Data Definition gate running
parallel with S2 skeleton/design, S3 engine core + Weather and Sky & sea
deep, S4 Suggest, S5 Plan, S6 Edit+revalidate, S7 remaining three
families in parallel, S8 demo polish — 33 tasks, each one branch/PR,
tagged [P]/[seq]; accounts/auth parked to V2's bucket.
Why:
- depth-before-breadth made literal: two families ride the entire spine
  before the other three exist, and S7 stress-tests the plug-in promise
  (addition, not rewrite);
- Weather + Sky & sea first: the cleanest consistently-reliable sources,
  fastest to satisfy the reliability law, and they power the demo wow;
- S1 parallel with S2 gives the multi-session workflow real concurrency
  from day one.
Alternatives rejected: engine-first with all five families before any
UI (long dark period, no momentum); thin vertical slices of everything
at once (rework risk; violates depth-first); auth in V1 (the demo does
not need it; Supabase makes it a V2 addition, not a rewrite).

## D-007 — 2026-06 — shadcn/ui builds on Base UI, not Radix
Decision: Roam's shadcn/ui components use the Base UI primitive library
(shadcn's current default, "nova" preset) rather than the legacy Radix
option; confirmed with the V1.S2.T1 scaffold approval.
Why:
- shadcn's docs, CLI defaults, and new components now target Base UI —
  the well-trodden path D-005 optimizes for points there for greenfield
  apps;
- nothing existed to migrate, and switching costs only grow as
  components accumulate (they are vendored files);
- Radix remains available per-component if a gap ever appears.
Alternatives rejected: Radix UI (the legacy default — larger back
catalog of examples, but new shadcn development has moved off it);
deferring the choice (every added component would deepen whichever
default we ignored).

## D-008 — 2026-06 — Cockpit, derived state, automatic recording
Decision: docs/HOME.md is the cockpit (pointers, routing, daily loop,
information hierarchy; stores no state). Recording and sequencing are
system-enforced: /ship runs itself at task completion and ends by
naming the next labeled action; /pickup and "brief" render a stage
progress map and label every suggestion with tool +
parallel/sequential; ideas are captured to IDEAS.md the moment voiced
(Code appends directly; Web bakes APPENDs into blocks); Web chats
speak in Lane Status footers and Resume Primers, with done/change
calls confirmed by one question; git outranks notes; nothing starts
without the claim question; the D-002 carve-out extends to
docs/IDEAS.md additions.
Why:
- the human surface shrinks to pasting blocks, yes/no confirmations,
  and PR approvals — everything else is automatic or derived;
- every completion emits the next instruction, so the loop never goes
  silent;
- each information granularity has exactly one home and one update
  mechanism (the hierarchy in HOME.md), so nothing has two truths.
Alternatives rejected: a status file with its own state (rots); relying
on the user to remember /ship, idea capture, or lane reporting (the
failures this design exists to remove); PR approval for idea capture
(kills the habit).

## D-009 — 2026-06 — Pacing law (finish-first, flexible cap)
Decision: all briefings and completions (/pickup, /ship, "brief")
recommend in finish-first order — open lanes and pending blocks
outrank new tasks. Items needing the builder's attention are capped at
"Now: one item" plus at most one parallel slot, with "plate is full"
beyond that; Web items are explicitly flagged with the chat to open.
Flexible cap: no-overview work (fully specified, no decisions) may be
offered or run as extra autonomous lanes at Claude's discretion; an
explicit request for "more" unlocks the full ordered menu.
Why:
- a solo builder's scarce resource is attention, not task supply —
  endless next-lists cause fatigue and half-finished lanes;
- the cap protects attention, not throughput: autonomous lanes can
  widen without costing overview;
- "plate is full" is itself an instruction — stopping is a valid next
  step.
Alternatives rejected: full menus at every completion (the fatigue
this law removes); a rigid cap (wastes parallel capacity on
no-overview work); no cap (lane sprawl across two machines).

## D-010 — 2026-06 — Global coverage via graded fallback ladders
Decision: V1 fact coverage is global from day one — no geography cut.
Every coverage-risky fact in docs/data/FACTS.md declares a fallback
ladder, vetted top-down in V1.S1.T2–T6: (1) sources global by
construction (numerical weather models, astronomical/harmonic/timezone
math); (2) regional authoritative sources where rung 1 is weak;
(3) computed from physics/math; (4) estimated ranges, labeled;
(5) LLM-research grade, always rendered unverified; (6) refusal — the
engine says "can't verify here" rather than guessing.
Why:
- the demo's wow cases are international (aurora, blossom timing,
  tidal flats); a geography cut would underuse the reliability law,
  which already provides honest degradation (grades, unverified
  labels, refusal);
- preferring computed/model sources makes most of the inventory
  uniformly reliable everywhere at zero marginal coverage cost.
Alternatives rejected: US+Canada-only V1 (fastest to all-green grades,
but kills international demo scenarios and only defers sourcing work we
must do anyway); US plus a named shortlist (bounded, but creates a
two-tier product and still leaves the ladder unbuilt).

## D-011 — 2026-06 — Traveler input vocabulary: rich, nullable, tiered, append-only
Decision: V1 collects the traveler vocabulary TP-01..26 defined in
docs/data/FACTS.md Appendix A. The floor never changes: origin + dates
always suffices (dates may carry optional earliest-departure /
latest-return boundary times). Every other field defaults to Null. Each
field carries a handling tier: engine (a named V1 check consumes it),
brain-only (Claude personalizes with it; no deterministic check), or
Later-socket field (stored, unconsumed — accessibility). Extension is
append-only: a new field is one nullable column plus a D-number;
removals/renames after V1.S1.T7 are migrations.
Why:
- FOUNDATION promises "from the floor (origin + free dates) to rich
  preferences"; structuring only what checks consume keeps the
  reliability law honest on the input side;
- null-default keeps the floor sacred;
- append-only matches "nothing in V1 may require a rewrite".
Alternatives rejected: floor-only (underpowers logic FOUNDATION names:
red-eye fit, jet-lag pacing, multi-airport choice); free-text-only
supplements (the brain can read them, deterministic checks cannot);
exhaustive "all inputs ever" enumeration (stalls the gate and fakes
capability for fields nothing consumes).

## D-012 — 2026-06 — Elicitation & inference policy (ask tiers, provenance, upsert)
Decision: Every traveler field in docs/data/FACTS.md Appendix A carries
an ask tier. Upfront = asked before the first draft, capped at six
questions: origin, dates + flexibility (+ trip length when dates are
open — the one non-negotiable ask), who's going (composition + party
type), budget (tier or ceiling), multi-city openness, one light
interest pass; language comfort joins contextually when scope goes
international. Later = asked around/after the draft when it earns its
question. Never = inferred from chat, defaulted, or
composition-adjusted with a warn-don't-block pattern. Settings =
app-level. Every stored field carries provenance {stated | inferred |
default} + updated_at; supersede order: stated > inferred > default,
newer > older. A stated-only class (nationality, special conditions,
accessibility, allergy details) is never inferred. Pace is redefined
as per-stop speed; day fullness is the separate density field; trip
goal, trip focus, and trade-off priority are first-class fields.
Why:
- anti-fatigue law — users must not feel interrogated;
- chat-first means most fields arrive mid-conversation and must upsert
  correctly; inferred preferences masquerading as stated would corrupt
  tailoring and trust;
- fast-paced does not mean dense (founder correction).
Alternatives rejected: ask-everything-upfront forms (fatigue,
abandonment); no structured asks (engine rules starve); merged
pace/density (conflates speed with fullness).

## D-013 — 2026-06 — Canonical units: SI storage, display-time conversion
Decision: All storage and engine math use SI/metric exclusively, never
mixed. Conversion to US units happens only at render time via a
settings-tier units field (default metric for development and as the
initial product default; never asked; UI must expose the toggle —
noted for V1.S2). Locale-based defaulting (US users -> imperial) is
deferred until accounts/locale exist.
Why:
- mixed-unit storage is a classic data-corruption source;
- one canonical system keeps T7 column types and engine thresholds
  (e.g. heat ceilings) unambiguous.
Alternatives rejected: store-as-entered (mixed units inside math);
imperial-canonical (every upstream source is SI-native).

## D-014 — 2026-06 — Telemetry posture: capture now, use later
Decision: V1 captures the behavior-event corpus defined in
docs/data/TELEMETRY.md §1 from day one, under: consent-gated
collection (GPC/DNT respected; consent grants/withdrawals logged),
pseudonymous session ids (no accounts in V1), no PII and no raw IPs in
payloads, stated-only fields never appearing in events, raw-event
retention time-boxed (12-month default) with aggregates retained.
Exposure law: every recommendation-reaction event records the full
slate shown (items + positions), not just the acted-on item. V1 may
use events only for product/funnel debugging, fatigue-cap tuning, and
quality signals (TELEMETRY.md §2); ranking personalization remains
Later per FOUNDATION; event data is never sold or shared.
Why:
- events cannot be backfilled — day one of the Later ranking work
  should begin with months of slates, not zero;
- feedback only exists over what was shown and position shapes
  response, so click-only logs are uninterpretable;
- the privacy floor keeps the corpus lawful and clean.
Alternatives rejected: defer capture entirely (permanent data loss);
click-only logging without exposures (position-biased, unusable);
use-now ranking tuning (violates FOUNDATION's Later).

## D-015 — 2026-06 — Data-asset law: bitemporal, append-only, license-segmented
Decision: The fact cache is bitemporal — every value carries valid_for
(when it is true in the world) and recorded_at (when we learned it) —
and append-only: values are superseded, never overwritten; revision
series are first-class data. An actuals harvester (ROADMAP V1.S3.T7)
records observed values once valid_for passes, pairing with the claim
ledger for calibration. Source data is stored in license-segmented,
attributed layers (collective, never blended-derivative); SOURCES.md
records retention_rights and license_class per source, and these act
as primary selection criteria in T2–T6 — caching-prohibited sources
disqualify a slot from the asset layer. World data is strictly
separated from traveler and event data. Source grades are living:
sustained fetch failure, schema drift, or miscalibration demotes a
grade and renders fall down the reliability ladder automatically;
promotion requires re-vetting.
Why:
- the revision series and forecast-vs-actual pairs are the
  proprietary core of FOUNDATION's "quiet asset";
- storage-prohibiting ToS would hollow the asset (e.g. Places-style
  no-caching rules); share-alike licenses attach to blended
  derivatives but not to segmented collective or internal use, so
  segmentation keeps the proprietary layer ownable;
- never-discard is the temporal-modeling canon.
Alternatives rejected: overwrite-in-place caching (destroys the
asset); a single blended store (license contamination); static grades
(the reliability law dies of old age).

## D-016 — 2026-06 — Parallel-ready menu (amends D-009)
Decision: every briefing and completion (/pickup, /ship, "brief")
ALWAYS appends a "Parallel-ready:" list — every task that is [P],
unblocked, and not already claimed by an open lane — each item labeled
with its tool (-> Claude Code / -> CLAUDE WEB), its branch name, and,
for a second session on the same machine, the exact git worktree
launch command. The list is informational and exempt from the D-009
two-item attention cap: the cap still governs what needs the
builder's attention; finish-first still orders the recommendations;
the menu never converts into asks.
Why:
- parallel capacity was invisible unless explicitly requested —
  D-009's discretionary clause hid throughput the builder wanted to
  see;
- listing lanes with ready-to-paste launch commands makes opening a
  second lane a zero-thought action;
- keeping the list informational preserves the anti-fatigue law: more
  visibility, zero added attention cost.
Alternatives rejected: keep it discretionary (the invisibility this
fixes); fold parallel items into the attention cap (blows the fatigue
budget); a standing PARALLEL.md file (rots; derived state belongs in
briefings, not files — D-008).
