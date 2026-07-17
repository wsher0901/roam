---
type: decision-log
title: Decisions Log
status: append-only
---
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
Task; small steps are checkboxes inside a task). [ROADMAP](ROADMAP.md) plans rolling
wave: V1 fully detailed, V2 a rough named bucket, everything else pooled
in [FOUNDATION](FOUNDATION.md) sockets + [docs/IDEAS.md](IDEAS.md).
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
Decision: [D-001](#d-001--2026-06--tech-stack) upheld and extended — Next.js App Router (TypeScript,
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
option; confirmed with the [V1.S2.T1](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1) scaffold approval.
Why:
- shadcn's docs, CLI defaults, and new components now target Base UI —
  the well-trodden path [D-005](#d-005--2026-06--stack-re-trial-vs-foundation-v1-d-001-upheld--frontend-layer) optimizes for points there for greenfield
  apps;
- nothing existed to migrate, and switching costs only grow as
  components accumulate (they are vendored files);
- Radix remains available per-component if a gap ever appears.
Alternatives rejected: Radix UI (the legacy default — larger back
catalog of examples, but new shadcn development has moved off it);
deferring the choice (every added component would deepen whichever
default we ignored).

## D-008 — 2026-06 — Cockpit, derived state, automatic recording
Decision: [docs/HOME.md](HOME.md) is the cockpit (pointers, routing, daily loop,
information hierarchy; stores no state). Recording and sequencing are
system-enforced: /ship runs itself at task completion and ends by
naming the next labeled action; /pickup and "brief" render a stage
progress map and label every suggestion with tool +
parallel/sequential; ideas are captured to [IDEAS.md](IDEAS.md) the moment voiced
(Code appends directly; Web bakes APPENDs into blocks); Web chats
speak in Lane Status footers and Resume Primers, with done/change
calls confirmed by one question; git outranks notes; nothing starts
without the claim question; the [D-002](#d-002--2026-06--handoff-note-merge-policy) carve-out extends to
[docs/IDEAS.md](IDEAS.md) additions.
Why:
- the human surface shrinks to pasting blocks, yes/no confirmations,
  and PR approvals — everything else is automatic or derived;
- every completion emits the next instruction, so the loop never goes
  silent;
- each information granularity has exactly one home and one update
  mechanism (the hierarchy in [HOME.md](HOME.md)), so nothing has two truths.
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
Every coverage-risky fact in [docs/data/FACTS.md](data/FACTS.md) declares a fallback
ladder, vetted top-down in [V1.S1.T2–T6](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code): (1) sources global by
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
Decision: V1 collects the traveler vocabulary [TP-01..26](data/FACTS.md#appendix-a--traveler-parameters-tp-0147--per-d-011--d-012) defined in
[docs/data/FACTS.md](data/FACTS.md) Appendix A. The floor never changes: origin + dates
always suffices (dates may carry optional earliest-departure /
latest-return boundary times). Every other field defaults to Null. Each
field carries a handling tier: engine (a named V1 check consumes it),
brain-only (Claude personalizes with it; no deterministic check), or
Later-socket field (stored, unconsumed — accessibility). Extension is
append-only: a new field is one nullable column plus a D-number;
removals/renames after [V1.S1.T7](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code) are migrations.
Why:
- [FOUNDATION](FOUNDATION.md) promises "from the floor (origin + free dates) to rich
  preferences"; structuring only what checks consume keeps the
  reliability law honest on the input side;
- null-default keeps the floor sacred;
- append-only matches "nothing in V1 may require a rewrite".
Alternatives rejected: floor-only (underpowers logic [FOUNDATION](FOUNDATION.md) names:
red-eye fit, jet-lag pacing, multi-airport choice); free-text-only
supplements (the brain can read them, deterministic checks cannot);
exhaustive "all inputs ever" enumeration (stalls the gate and fakes
capability for fields nothing consumes).

## D-012 — 2026-06 — Elicitation & inference policy (ask tiers, provenance, upsert)
Decision: Every traveler field in [docs/data/FACTS.md](data/FACTS.md) Appendix A carries
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
noted for [V1.S2](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)). Locale-based defaulting (US users -> imperial) is
deferred until accounts/locale exist.
Why:
- mixed-unit storage is a classic data-corruption source;
- one canonical system keeps T7 column types and engine thresholds
  (e.g. heat ceilings) unambiguous.
Alternatives rejected: store-as-entered (mixed units inside math);
imperial-canonical (every upstream source is SI-native).

## D-014 — 2026-06 — Telemetry posture: capture now, use later
Decision: V1 captures the behavior-event corpus defined in
[docs/data/TELEMETRY.md §1](data/FACTS.md#c1--behavior-events-d-014) from day one, under: consent-gated
collection (GPC/DNT respected; consent grants/withdrawals logged),
pseudonymous session ids (no accounts in V1), no PII and no raw IPs in
payloads, stated-only fields never appearing in events, raw-event
retention time-boxed (12-month default) with aggregates retained.
Exposure law: every recommendation-reaction event records the full
slate shown (items + positions), not just the acted-on item. V1 may
use events only for product/funnel debugging, fatigue-cap tuning, and
quality signals ([TELEMETRY.md §2](data/FACTS.md#c2--quality--ground-truth-p5)); ranking personalization remains
Later per [FOUNDATION](FOUNDATION.md); event data is never sold or shared.
Why:
- events cannot be backfilled — day one of the Later ranking work
  should begin with months of slates, not zero;
- feedback only exists over what was shown and position shapes
  response, so click-only logs are uninterpretable;
- the privacy floor keeps the corpus lawful and clean.
Alternatives rejected: defer capture entirely (permanent data loss);
click-only logging without exposures (position-biased, unusable);
use-now ranking tuning (violates [FOUNDATION](FOUNDATION.md)'s Later).

## D-015 — 2026-06 — Data-asset law: bitemporal, append-only, license-segmented
Decision: The fact cache is bitemporal — every value carries valid_for
(when it is true in the world) and recorded_at (when we learned it) —
and append-only: values are superseded, never overwritten; revision
series are first-class data. An actuals harvester ([ROADMAP](ROADMAP.md) [V1.S3.T7](ROADMAP.md#v1s3--engine-core--two-families-deep))
records observed values once valid_for passes, pairing with the claim
ledger for calibration. Source data is stored in license-segmented,
attributed layers (collective, never blended-derivative); [SOURCES.md](data/SOURCES.md)
records retention_rights and license_class per source, and these act
as primary selection criteria in T2–T6 — caching-prohibited sources
disqualify a slot from the asset layer. World data is strictly
separated from traveler and event data. Source grades are living:
sustained fetch failure, schema drift, or miscalibration demotes a
grade and renders fall down the reliability ladder automatically;
promotion requires re-vetting.
Why:
- the revision series and forecast-vs-actual pairs are the
  proprietary core of [FOUNDATION](FOUNDATION.md)'s "quiet asset";
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
launch command. The list is informational and exempt from the [D-009](#d-009--2026-06--pacing-law-finish-first-flexible-cap)
two-item attention cap: the cap still governs what needs the
builder's attention; finish-first still orders the recommendations;
the menu never converts into asks.
Why:
- parallel capacity was invisible unless explicitly requested —
  [D-009](#d-009--2026-06--pacing-law-finish-first-flexible-cap)'s discretionary clause hid throughput the builder wanted to
  see;
- listing lanes with ready-to-paste launch commands makes opening a
  second lane a zero-thought action;
- keeping the list informational preserves the anti-fatigue law: more
  visibility, zero added attention cost.
Alternatives rejected: keep it discretionary (the invisibility this
fixes); fold parallel items into the attention cap (blows the fatigue
budget); a standing PARALLEL.md file (rots; derived state belongs in
briefings, not files — [D-008](#d-008--2026-06--cockpit-derived-state-automatic-recording)).

## D-017 — 2026-06 — Cloud sessions are the parallel-lane vehicle (amends D-016)
Decision: the launch command in the Parallel-ready menu is a
paste-ready kickoff prompt for a Claude Code CLOUD session, launched
from Claude Desktop's Code tab, claude.ai/code, or a terminal via
`claude --remote "<kickoff prompt>"`: task ID + branch name + a
pointer to the pattern to follow. (No "&" prefix exists — "!" is the
shell prefix; cloud sessions launch only via the routes above.)
Mechanics: a cloud session clones the repo's GitHub REMOTE at the
branch you launch from — so launch lanes from freshly pulled main
and push local commits first. `--remote` is fire-and-forget (prints
the session URL and returns); watch lanes at claude.ai/code or the
Claude mobile app — /tasks does NOT list cloud sessions (it shows
only the current session's local background work; corrected
2026-06-12 after live test); in a CLI, /teleport (alias /tp) opens
the cloud-session picker, but picking one pulls it into that
terminal — an entry door, not a dashboard, and ONE-WAY: teleport
moves the session's execution onto the local machine (cloud
sandbox released; the work then dies with that terminal; no
send-back from the CLI). To keep a running lane cloud-resident —
e.g. to answer a question it is waiting on — reply from
claude.ai/code or the mobile app; teleport only to deliberately
bring a lane home (safe once its work is pushed). One-time
prerequisite per account: GitHub access via the Claude GitHub App,
or `/web-setup` to sync the local gh token.
Launch protocol: the menu stays informational, but an explicit
launch approval from the founder ("launch them" / "launch T4+T6")
flips it to action — Claude Code itself launches every approved
lane via `claude --remote` from freshly pulled main (pushing first
if needed) and reports each session's URL; that approval doubles as
the claim answer for the launched lanes. Cloud sessions run on
Anthropic infrastructure and survive both computers being off; a
finished lane pushes its branch and opens its PR, and merge approval
still belongs to the founder. Each cloud lane runs remotely in
its own isolated clone of the repo, on its own branch, and ships its
own PR. Second-machine checkouts and same-machine git worktrees
remain available as offline fallbacks only. Unchanged: never two
sessions in one checkout; the claim question before starting any
lane; founder approval before any merge.
Why:
- [D-016](#d-016--2026-06--parallel-ready-menu-amends-d-009)'s worktree recipe encoded an assumption, not the practice —
  the builder's actual parallel workflow is Desktop-launched cloud
  sessions;
- cloud lanes are machine-independent: launchable from either
  computer (or phone), nothing local to set up or clean up;
- every cloud lane announces itself in git (branch + PR), so
  /pickup's git-outranks-notes flagging already tracks them with
  zero extra bookkeeping.
Alternatives rejected: same-machine worktrees as primary (ties lanes
to one computer and its local state — contradicts the two-computer
reality); second-machine-only parallelism (both lanes should be
launchable from one seat).

## D-018 — 2026-06 — Fix-routing triage after lane review (extends D-017)
Decision: when cloud lanes finish, Claude Code reviews the lane PRs
itself FIRST — before the founder reads them — and surfaces every
issue needing founder attention, each with a routing recommendation
picked by "smallest sufficient context wins":
1. STAY — fix here in the cockpit terminal on the lane's EXISTING
   branch (checkout, edit, push; the PR updates). The default for
   small fixes and founder judgment calls. Never spawn a session
   where a branch checkout suffices.
2. TELEPORT — the fix hinges on the lane's own reasoning ("why did
   it grade X a B?"); the lane's session should explain or fix its
   own work.
3. NEW LANE — review exposed a genuinely NEW, independent,
   fully-specified chunk of work.
The founder reads the PRs too, then answers each recommendation —
agree or override. The founder's verdict routes. Execution:
- "stay" → status quo: the fix proceeds here, no extra action;
- "teleport" → Claude resolves the session ID and hands the founder
  the exact ready-to-paste line (`claude --teleport <session-id>`)
  — attaching a terminal to a session is physically the founder's
  keystroke, never Claude's;
- "new lane" → Claude launches it itself via `claude --remote`
  under the [D-017](#d-017--2026-06--cloud-sessions-are-the-parallel-lane-vehicle-amends-d-016) protocol — the routing verdict doubles as the
  launch approval.
Why:
- the founder always reads the work, but pre-chewed issues plus a
  routing recommendation turn review into a confirm/override pass
  (anti-fatigue law) while keeping every routing visible and
  overridable — oversight belongs exactly here;
- fixes inherit the lane's branch, so one task stays one PR;
- spawning sessions for fixes fragments context and burns shared
  rate limits for no parallelism gain.
Alternatives rejected: fully automatic routing (invisible decisions
exactly where the founder wants overview); always-teleport
(heavyweight; hijacks a terminal); always-new-session (loses lane
context, splits a task across PRs).

## D-019 — 2026-06 — Launch mechanics correction (amends D-017)
Decision: `claude --remote` enforces a TTY guard — it refuses every
non-interactive invocation. Verified at first live launch: Claude's
own shell is headless AND the `!` prefix pipes output back into the
conversation, so NEITHER can create cloud sessions. The working
route: Claude writes a batch launcher (.cmd, one `claude --remote`
line per approved lane) OUTSIDE the repo — never committed, the
repo is public — and opens it as a visible console window on the
founder's screen (Start-Process). The lanes launch in that attended
window, print their session URLs, and the founder closes it.
[D-017](#d-017--2026-06--cloud-sessions-are-the-parallel-lane-vehicle-amends-d-016) is otherwise unchanged: explicit founder approval still
triggers the launch, Claude still prepares and fires everything,
and the session IDs are recorded in HANDOFF as open lanes.
Why:
- the TTY guard exists so cloud sessions are born attended; a
  popped window on the founder's desktop is exactly that — visible,
  readable, closed by a human;
- discovered live (both headless and `!` routes failed at first
  launch); docs must encode verified reality, not assumptions —
  this is the second correction of an assumed mechanic (worktrees
  in [D-016](#d-016--2026-06--parallel-ready-menu-amends-d-009) → cloud in [D-017](#d-017--2026-06--cloud-sessions-are-the-parallel-lane-vehicle-amends-d-016); headless launch in [D-017](#d-017--2026-06--cloud-sessions-are-the-parallel-lane-vehicle-amends-d-016) → attended
  window here).
Alternatives rejected: faking a TTY from the headless shell
(defeats the guard's purpose); founder hand-typing each launch
command (error-prone, scales badly past two lanes).

## D-020 — 2026-07 — Parallel lanes v2: native lanes replace hand-built orchestration
Decision: lanes run locally as background agents (dispatched from
`claude agents`) or `claude -w` worktree sessions; every lane opens a
draft PR at birth and pushes every commit. Supersedes the launch
mechanics of
[D-016](#d-016--2026-06--parallel-ready-menu-amends-d-009),
[D-017](#d-017--2026-06--cloud-sessions-are-the-parallel-lane-vehicle-amends-d-016),
[D-018](#d-018--2026-06--fix-routing-triage-after-lane-review-extends-d-017)
and [D-019](#d-019--2026-06--launch-mechanics-correction-amends-d-017);
closes the
[D-020](#d-020--2026-07--parallel-lanes-v2-native-lanes-replace-hand-built-orchestration)
pending item from HANDOFF. Lane law (June 12
post-mortem, kept as belt-and-suspenders): push-first canary before
real work in any cloud session, push after every commit, never end or
delete a session before its work is on origin. Parallel lanes never
share a file — source vetting writes `docs/data/SOURCES-<family>.md`,
consolidated at
[V1.S1.T7](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code).
Agent Teams (experimental env flag in `.claude/settings.json`) may be
used or proposed for research/review tasks: lead Fable/Opus, teammates
Sonnet, max 4 teammates. Cloud sessions only via claude.ai/code and
only after the push canary passes.
[D-018](#d-018--2026-06--fix-routing-triage-after-lane-review-extends-d-017)'s
pre-review behavior survives: finished lane PRs are pre-reviewed
against [FOUNDATION](FOUNDATION.md), the roadmap line, and the
reliability law before being surfaced. [CLAUDE.md](../CLAUDE.md) is slimmed
accordingly: launch/teleport machinery removed; the equipment plan
moves to `.claude/skills/equipment-plan/` (laws stay in [CLAUDE.md](../CLAUDE.md),
reference manuals live in skills).
Why:
- `claude --remote` bundle-seeded sandboxes on this machine (no origin
  remote -> push impossible) destroyed batch-1 T3+T5 work;
- three launch-mechanic corrections in a row
  ([D-016](#d-016--2026-06--parallel-ready-menu-amends-d-009) ->
  [D-017](#d-017--2026-06--cloud-sessions-are-the-parallel-lane-vehicle-amends-d-016)
  -> [D-019](#d-019--2026-06--launch-mechanics-correction-amends-d-017))
  showed the machinery was ours to maintain on shifting ground;
- Claude Code now ships the same capability natively (background
  agents that auto commit+push+draft-PR, Agent Teams, `claude -w`),
  running locally where deletion-loss is structurally impossible.
Alternatives rejected: keep repairing `--remote` (broken CLI-side, not
ours to fix); pure sequential work (leaves S1's [P] lanes serialized
now that loss-proof parallelism is native).

## D-021 — 2026-07 — Plan-synthesis principles re-home to DECISION-POLICY
**Decision:** [docs/DECISION-POLICY](ENGINE.md) is the
canonical home of the plan-synthesis rules (preferences-as-defaults,
constraint priority, warn-don't-block, composition- and
condition-aware placement, staged synthesis, near-peer alternatives,
proactive shifts, trade-off locking). [FOUNDATION](FOUNDATION.md)
drops its Plan-synthesis section; [POLICY](ENGINE.md)'s
existing word-for-word mirrors become the originals.
**Why:** one home per rule — [FOUNDATION](FOUNDATION.md) holds
identity, [POLICY](ENGINE.md) holds engine reasoning; the
mirror already existed, so canonicalizing removes a duplication that
would drift.
**Alternatives rejected:** [FOUNDATION](FOUNDATION.md) canonical with
[POLICY](ENGINE.md) mirroring (two edits per rule change);
duplicating in both (drift).
**Affects:** [FOUNDATION](FOUNDATION.md) (section removed) ·
[DECISION-POLICY](ENGINE.md) §1, §6–§8 ·
[ROADMAP](ROADMAP.md) S3/S5 binding-requirements links · all corpus
links to the old anchor.

## D-022 — 2026-07 — Version ladder + lifespan split (amends D-004)
**Decision:** versions are outcome milestones — V1 "The demo", V2
"Real users", V3 "The product", then an unversioned Pool (done-whens
as written in [ROADMAP §The versions](ROADMAP.md#the-versions)).
Rolling-wave depth: active version fully staged/tasked; next a rough
bucket; the one after name-only; sockets pooled.
[FOUNDATION](FOUNDATION.md)↔[ROADMAP](ROADMAP.md) divide by lifespan:
a sentence a shipped version can falsify lives in
[ROADMAP](ROADMAP.md) (per-version scope blocks: For / Refuses /
Ships); timeless sentences live in [FOUNDATION](FOUNDATION.md).
Refusals lift per-version via roadmap edits — never
[FOUNDATION](FOUNDATION.md) edits.
**Why:** outcome-named versions make "done" testable; the lifespan
split matches each file's change cadence, so identity never churns
and plan never rots.
**Alternatives rejected:** topic-based split (both files are "about
the product" — undecidable); detailing V2+ now (guesswork, violates
rolling wave); keeping sockets in [FOUNDATION](FOUNDATION.md) (the
pool is the plan's coarsest layer).
**Affects:** [ROADMAP](ROADMAP.md) (ladder, V1 scope block, V2/V3/Pool,
notation → [HOME](HOME.md)) · [FOUNDATION](FOUNDATION.md) v3 ·
[HOME §Roadmap manual](HOME.md#roadmap-manual) ·
[D-004](#d-004--2026-06--planning-notation--rolling-wave-depth)
(amended).

## D-023 — 2026-07 — Universal draft-PR-at-birth + micro-PR carve-out recut (amends D-002, D-008, D-020)
**Decision:** every task — cockpit included — is born bench-first:
freshly pulled main → branch → spec (when discussion opened the
task) + memory stub → a DRAFT PR pushed to origin BEFORE any session
works it. The self-merging micro-PR class is redefined to touch ONLY
[DASHBOARD.md](DASHBOARD.md) and/or [IDEAS.md](IDEAS.md) (it was the
handoff-note file and/or IDEAS —
[D-002](#d-002--2026-06--handoff-note-merge-policy),
[D-008](#d-008--2026-06--cockpit-derived-state-automatic-recording)).
GitHub Issues and the project board are retired;
[IDEAS.md](IDEAS.md) is the single inbox, triaged into
[ROADMAP](ROADMAP.md) via decide.
**Why:**
- the draft PR is the public window from the first commit — no work
  exists in only one place, which the two-computers-plus-cloud
  reality demands;
- seat-invariance
  ([D-024](#d-024--2026-07--architecture-v2-memoryhistory-narrative-layer-dashboard-as-sole-state-surface-rituals-as-skills-amends-d-008-retires-handoffmd--shiplogmd))
  needs one birth procedure for cockpit and lanes alike —
  special-casing the cockpit created two classes of task;
- two trackers (Issues/board beside the docs) meant two truths; one
  inbox ends the drift.
**Alternatives rejected:** draft PRs for lanes only (cockpit work
invisible until ship; violates seat-invariance); keeping the board
beside [IDEAS.md](IDEAS.md) (the split brain this recut removes);
widening the micro-PR class further (every added file weakens the
only no-approval merge path).
**Affects:** [LAWS §Workflow](LAWS.md#workflow-non-negotiable) ·
[D-002](#d-002--2026-06--handoff-note-merge-policy) (amended) ·
[D-008](#d-008--2026-06--cockpit-derived-state-automatic-recording)
(amended) ·
[D-020](#d-020--2026-07--parallel-lanes-v2-native-lanes-replace-hand-built-orchestration)
(amended: lane birth becomes the universal birth) ·
[parallel-lanes](skills/parallel-lanes.md) ·
[liftoff](skills/liftoff.md) · [HOME](HOME.md) tables ·
[GLOSSARY](HOME.md#terms) micro-PR entry.

## D-024 — 2026-07 — Architecture v2: memory/history narrative layer, DASHBOARD as sole state surface, rituals as skills (amends D-008; retires HANDOFF.md + SHIPLOG.md)
**Decision:** every task carries docs/memory/&lt;id&gt;.md — the
living story in the locked format — rewritten cognitively at rituals
and at the lane trigger moments, and moved to
docs/history/&lt;id&gt;.md by ship's atomic weld (one bookkeeping
commit: [ROADMAP](ROADMAP.md) tick + memory→history + spec
finalize). [DASHBOARD](DASHBOARD.md) is the sole state surface,
repainted ONLY by rituals (pickup when stale, handoff, liftoff,
ship's tail), never hand-edited. HANDOFF.md and SHIPLOG.md are
retired — the shiplog's 35 entries live on as backfilled
[history/](history/README.md) files. The five rituals (pickup,
handoff, ship, decide, liftoff) plus the
[parallel-lanes](skills/parallel-lanes.md) manual live as skills:
one-line stubs in .claude/skills/ carrying triggers, procedures
vault-readable in [docs/skills/](skills/). The baton, lane,
dispatch, and seat-invariance laws stand as written in
[LAWS.md](LAWS.md); root [CLAUDE.md](../CLAUDE.md) reduces to a
two-line import of LAWS.
**Why:**
- the handoff note was one file, one writer, whole-project scope —
  the single-writer law existed to manage that bottleneck; per-task
  memory dissolves it: every lane writes its own story, seat-blind;
- a shipped task's narrative belongs beside the work, one file per
  task — an ever-growing log rots, and "what shipped lately" is a
  derived view the [DASHBOARD](DASHBOARD.md) Shipped table renders;
- procedures in the vault are founder-readable and Obsidian-linked;
  a stub that only points can never drift from its procedure;
- skills fire on trigger phrases (leaving words, unprompted pickup)
  — commands had to be remembered and typed.
**Alternatives rejected:** keeping the handoff note beside memories
(two homes for one truth); a shiplog index over history/ (a derived
value written as a literal — the derivation law forbids it);
procedures inline in .claude/skills/ (invisible to the vault,
duplicated laws); memory as PR comments only (dies with the PR page,
unreadable in Obsidian).
**Affects:** [CLAUDE.md](../CLAUDE.md) (import shim) ·
[LAWS.md](LAWS.md) (born) · [PROJECT-POLICY](SETUP.md)
(born) · [DASHBOARD](DASHBOARD.md) v5 · docs/memory/ + docs/history/
(born) · HANDOFF.md + SHIPLOG.md (deleted) · .claude/commands/
(deleted) · eight skills · session-start hook · settings.json ·
[HOME](HOME.md) · [GLOSSARY](HOME.md#terms) ·
[specs/README](specs/README.md) ·
[D-008](#d-008--2026-06--cockpit-derived-state-automatic-recording)
(amended).

## D-025 — 2026-07 — FOUNDATION v4 — principles recut, open family set, lifespan repair (extends D-012; upholds D-021/D-022)
**Decision:** recut [FOUNDATION](FOUNDATION.md)'s identity for
honesty and openness, carrying the new cohort layer into
[DECISION-POLICY §5](ENGINE.md#2-intake--resolve-the-traveler):
- "What Roam is": Roam STARTS as the pre-trip brain — the boundary
  moves by roadmap decision, never by drift (lifespan is version
  scope in [ROADMAP](ROADMAP.md), per
  [D-022](#d-022--2026-07--version-ladder--lifespan-split-amends-d-004));
- "What Roam checks" drops "the five families" from its header: each
  family is a pluggable check module — five today, the set is open,
  and any condition the founder or Claude finds load-bearing enters
  as a new family by decision;
- the plug-in principle admits its blast radius: adding a check never
  rewrites what exists — it adds a module — and every new check
  re-tunes the rankings, by design;
- in-app first opens its list: maps, timelines, plans, and whatever
  the product comes to show;
- personalization is layered: stated > inferred (own) > cohort
  prior > default, in that order of authority — category patterns
  are priors, never pigeonholes, and demographic stereotypes never
  drive;
- [DECISION-POLICY §5](ENGINE.md#2-intake--resolve-the-traveler)
  extends
  [D-012](#d-012--2026-06--elicitation--inference-policy-ask-tiers-provenance-upsert)'s
  supersede order with the cohort layer; activation is version
  scope — cohort learning is not V1;
- [HOME](HOME.md)'s FOUNDATION portrait and check-module term align;
  the renamed anchor (what-roam-checks) is repaired repo-wide. The
  engine-reasoning rules stay consolidated in
  [DECISION-POLICY](ENGINE.md), per
  [D-021](#d-021--2026-07--plan-synthesis-principles-re-home-to-decision-policy).
**Why:** the plug-in principle overpromised zero blast radius — the
structure holds, but rankings re-tune with every added check; the
in-app list read as closed; the personalization principle
contradicted
[D-012](#d-012--2026-06--elicitation--inference-policy-ask-tiers-provenance-upsert)'s
inferred provenance and blocked the cohort layer; "five" in the
header made the count part of the identity; and the pre-trip clause
duplicated a [ROADMAP](ROADMAP.md) refusal against
[D-022](#d-022--2026-07--version-ladder--lifespan-split-amends-d-004) —
lifespan belongs to version scope, not identity.
**Alternatives rejected:** keep the header and add only an
extensibility sentence (the count stays in the anchor — the identity
keeps saying five); single-source personalization ("whatever the
traveler supplies") — already false per
[D-012](#d-012--2026-06--elicitation--inference-policy-ask-tiers-provenance-upsert),
which infers fields with provenance.
**Affects:** [FOUNDATION](FOUNDATION.md) ·
[DECISION-POLICY §5](ENGINE.md#2-intake--resolve-the-traveler) ·
[HOME](HOME.md) (FOUNDATION portrait · check-module term) · corpus
links to the renamed anchor:
[DECISION-POLICY §3](ENGINE.md#7-render--honest-pixels) ·
[HOME §Terms](HOME.md#terms).

## D-026 — 2026-07 — ROADMAP recut — plain-language V1, completion criteria, per-family vetting outputs (upholds D-020, D-022)
**Decision:** recut [ROADMAP](ROADMAP.md) into a plain-language read:
- the depth paragraph now opens by saying the plan is living, never
  a promise — it changes whenever reality disagrees, every change
  landing as a D-number via [decide](skills/decide.md) — before
  naming the rolling wave
  ([D-022](#d-022--2026-07--version-ladder--lifespan-split-amends-d-004));
- "Done when" → "Completion criteria" in the versions table and all
  eight stage lines; the spec-level term "Done-means" is a different
  artifact and keeps its name;
- the V1 block opens with the goal in prose (what a visitor watches
  Roam do), and the "Active stages" lines die — they stored status,
  against the derivation law;
- T3–T6 each write their own `SOURCES-<family>.md` file so four [P]
  lanes never share a file
  ([D-020](#d-020--2026-07--parallel-lanes-v2-native-lanes-replace-hand-built-orchestration));
  T7 consolidates the four into [SOURCES.md](data/SOURCES.md) and
  deletes them;
- ticked tasks link their [history/](history/README.md) stories;
- [HOME](HOME.md) follows the rename (ROADMAP portrait, the
  version/stage/task term, the Roadmap-manual notation bullet).
**Why:** the rolling-wave paragraph was shorthand; the V1 block
buried the goal under anchors; "Active stages" stored status against
the derivation law; T3–T6 "same outputs" implied four [P] lanes
writing one shared file, contradicting
[D-020](#d-020--2026-07--parallel-lanes-v2-native-lanes-replace-hand-built-orchestration);
"Done when" collided with the spec term "Done-means".
**Alternatives rejected:** sequential T3–T6 (serializes S1's liftoff
batch, amends
[D-020](#d-020--2026-07--parallel-lanes-v2-native-lanes-replace-hand-built-orchestration));
a shared SOURCES.md with per-family sections (the merge-conflict
risk [D-020](#d-020--2026-07--parallel-lanes-v2-native-lanes-replace-hand-built-orchestration)
exists to eliminate).
**Affects:** [ROADMAP](ROADMAP.md) · [HOME](HOME.md) (term rename) ·
this entry.

## D-027 — 2026-07 — LAWS polish — glossed lane law, provenance re-homed to consolidations, ship syncs with main before the weld
**Decision:** [LAWS](LAWS.md) drops its four inline D-citations
(bench-first, micro-PR, pacing, stack) — the weave rule stands for
relationships and retroactivity, but provenance is the
consolidations' job, and LAWS' header now names the three rationale
homes ([PROJECT-POLICY](SETUP.md) ·
[DECISION-POLICY](ENGINE.md) · [DECISIONS](DECISIONS.md)).
The bench-first bullet and the seven-point lane law carry one-line
whys; the baton law states what the baton IS.
[PROJECT-POLICY §Workshop choices](SETUP.md)
gains the pacing law — the one LAWS rule not yet consolidated — with
its [D-009](#d-009--2026-06--pacing-law-finish-first-flexible-cap)
provenance. [ship](skills/ship.md)'s Preflight now merges current
origin/main into the branch before gating (merge, never rebase), so
what is tested is exactly what main will contain after the weld;
[LAWS §Workflow](LAWS.md#workflow-non-negotiable) and
[HOME](HOME.md)'s ship portrait carry the same step.
**Why:** mid-sentence citation anchors hurt the constitution's
readability for a solo non-CS founder; a branch born days ago passes
tests against a stale main — the merged combination was never tested
anywhere; laws that carry their why are followed better.
**Alternatives rejected:** trailing citations (still noise; the
consolidations already exist for this); rebase instead of merge
(rewrites pushed history).
**Affects:** [LAWS](LAWS.md) · [PROJECT-POLICY](SETUP.md) ·
[ship](skills/ship.md) · [HOME](HOME.md) (ship portrait) · this
entry.

## D-028 — 2026-07 — Consolidation recut — DECISION-POLICY → ENGINE, brain-skeleton form; PROJECT-POLICY house style; OPEN register grows 6–9 (upholds D-021; extends the D-021 consolidation)
**Decision:** the engine consolidation is renamed
[ENGINE.md](ENGINE.md) and reshaped from topic-prose into the
pipeline form (Intake → Acquire → Judge → Aggregate → Synthesize →
Render → Gate → Re-validate → Learn + Invariants); undecided
calculations become numbered OPEN slots in an
[Open register](ENGINE.md#12-open-register) — filling one requires a
D-number; four founder-raised gaps join the register (aggregation
law · fact-drift re-validation · learning loop · eval-set gate); one
invariant makes the explainability boundary explicit;
[PROJECT-POLICY](SETUP.md) adopts the shared house style:
one-line italic gloss per section, bold handle per rule, citations
consolidated into per-section Sources lines.
**Why:** the founder read "Decision policy" as a policy for
decisions in general — the name misled its own author; prose-form
hid the pipeline the file actually describes; undecided slots must
be loud, not implied (the
[reliability law](FOUNDATION.md#the-reliability-law) applied to
ourselves).
**Alternatives rejected:** keep the name + a disambiguating sentence
(the name keeps whispering wrong); two sequential PRs (intermediate
broken-link state, double ritual overhead for one theme); putting
the four gaps into rules sections (they are undecided — register
only).
**Affects:** [ENGINE](ENGINE.md) (né DECISION-POLICY) ·
[PROJECT-POLICY](SETUP.md) · [LAWS](LAWS.md) rationale
line · [HOME](HOME.md) (table row, portrait, terms) ·
[ROADMAP](ROADMAP.md) S3/S5 binding-requirement links ·
[FACTS](data/FACTS.md) · [SOURCES](data/SOURCES.md) ·
[decide](skills/decide.md) skill · [DASHBOARD](DASHBOARD.md) (one
link) · [DECISIONS](DECISIONS.md) / [history/](history/README.md) /
finalized [specs](specs/README.md) (link targets only) · this entry.

## D-029 — 2026-07 — Corpus writing laws — readability-first; links below prose
**Decision:** two laws over every living markdown file.
1. Readability-first: every living md is written for the founder's
   reading first, bounded only by material cost to Claude's parsing
   (none identified).
2. Links-below: no markdown links inside sentences unless
   necessary; references gather under the text as a Sources block —
   the literal format, one reference per line, no separators, no
   trailing periods:

```
Sources:
[label](target)
[label](target)
```

   Sanctioned inline exceptions: table cells · trailing "->" refs
   on ROADMAP task lines · the CLAUDE.md import stub · trailing
   same-sentence refs where a Sources block would be heavier than
   the single link.
3. Frozen records (existing DECISIONS entries, docs/history/,
   finalized specs) are exempt — link repairs only, per the
   retroactivity law's frozen class; new DECISIONS entries follow
   the law.
4. Migration by ratchet: the law binds all new text now; each
   living file is restyled when the current ops leg reaches it; a
   leg-end sweep restyles every file the leg didn't touch.
**Why:** the founder reads these files daily; mid-sentence link
anchors tax reading without aiding Claude.
**Alternatives rejected:** big-bang restyle PR (front-loads risk,
zero functional gain); inline-link status quo (twice flagged by the
founder).
**Affects:** every living doc over the ops leg — the PR carrying
this entry demonstrates the format in [SETUP.md](SETUP.md) · this
entry.

## D-030 — 2026-07 — Setup consolidation — SETUP.md; equipment-plan and PROJECT-POLICY retired (extends D-024's retirement pattern; amends the D-021 consolidation split)
**Decision:** [SETUP.md](SETUP.md) is the single listing-style
inventory (stack · once-and-done repo-side · once-and-done cloud ·
per-machine · staged-by-stage; status lives on the DASHBOARD, never
here). equipment-plan retires — content re-homed: Design staging →
DESIGN-KICKOFF; stack/plugins/MCPs/staged tooling and the subagent
plan → SETUP §Staged; runtime-tool note → SETUP §Staged (S3.T1
line). PROJECT-POLICY retires — Stack + the
[D-005](#d-005--2026-06--stack-re-trial-vs-foundation-v1-d-001-upheld--frontend-layer)
doctrine → SETUP §Stack; the stubs rule → LAWS; whys already live
in LAWS' glosses and HOME. SETUP.md is the successor-of-record:
every frozen link to either retired file retargets to SETUP.md (or
its §Staged anchor for equipment-plan links); frozen prose keeps
historical names. machine-setup remains the invocable per-machine
procedure.
**Why:** LAWS already carried nearly every PROJECT-POLICY rule
(verified line-by-line); the founder questioned the file twice;
equipment-plan's content splits cleanly into inventory (SETUP),
design mechanics (DESIGN-KICKOFF), and explanations (HOME).
**Alternatives rejected:** keep both files (annotation layer nobody
reads); merge into LAWS (bloats the every-session load).
**Affects:** [SETUP.md](SETUP.md) (new) · equipment-plan skill +
stub (deleted) · PROJECT-POLICY (deleted) ·
[DESIGN-KICKOFF](DESIGN-KICKOFF.md) ·
[machine-setup](skills/machine-setup.md) · [LAWS](LAWS.md) ·
[HOME](HOME.md) · frozen-link retargets · this entry.

## D-031 — 2026-07 — Stale-branch hygiene — gone-guard on the session-end net; welded-elsewhere locals auto-removed at session start
**Decision:** session-end never pushes a branch whose tracking was
configured but whose remote is gone; session-start, after its
prune, force-deletes local branches marked gone — excluding main,
the current branch, and any branch checked out in another
worktree — logging each deleted name + tip sha (reflog keeps them
recoverable ~90 days); pickup reports what the hooks surface and
gains the dead-worktree check.
**Why:** the engine-recut zombie — a weld deletes the remote, the
other seat's local copy survives, its session-end faithfully pushed
the corpse back; mechanism verified in hook code. The founder chose
auto-delete over warn-and-skip.
**Alternatives rejected:** warn-and-skip (clutter + repeat-warn
fatigue; founder call); pushing the guard into LAWS prose
(procedure detail — hooks and pickup own it).
**Affects:** both hooks (`.claude/hooks/session-end.mjs` ·
`.claude/hooks/session-start.mjs`) · [pickup](skills/pickup.md) ·
this entry.

## D-032 — 2026-07 — Fleet continuity — handoff parks every local lane; liftoff respawns parked benches; wake-lock parks every outcome (extends the D-020/D-023 lane law; upholds D-009)
**Decision:** handoff FULL gains the Park step — every live local
lane is rescue-saved (wip commit + push, only if its tree holds
unsaved work) and stamped parked with ONE cockpit-written Status
line, the single lawful exception to never-touching a lane's tree
or diary; handoff never asks and never leaves lanes running — it
means operations halt on this machine. Liftoff step 2 respawns
eligible parked benches on their SAME branch (adopt — no second
birth); ineligible ones stay parked with a reason. The lane law
grows the wake-lock: on any resume a lane re-reads its memory
first and self-terminates on any Status it does not own (parked ·
respawned · superseded); after completion, a `BLOCKED:`, or a
failed spawn, a lane parks — nothing continues without a
founder-initiated action.
**Why:** the founder's leaving scenario — the machine powers off
after handoff; local agents die with it; without the park step
their since-last-push work and their task state depended on luck,
and a lane waking after sleep could dual-drive a respawned branch.
**Alternatives rejected:** asking at handoff (founder: handoff =
halt, no question); auto-liftoff at handoff (cloud only by the
word); signaling lanes to land themselves (no reliable channel;
the process dies with the machine anyway — saving the bench is
what matters).
**Affects:** [handoff](skills/handoff.md) ·
[liftoff](skills/liftoff.md) ·
[parallel-lanes](skills/parallel-lanes.md) ·
[LAWS §Parallel lanes & cloud](LAWS.md#parallel-lanes--cloud) ·
this entry.

## D-033 — 2026-07 — TELEMETRY folds into FACTS (Appendix C); file retired (upholds D-014; extends the D-030 retirement pattern)
**Decision:** FACTS gains Appendix C — Telemetry vocabulary (what
the app records) — holding TELEMETRY's three families and storage
note verbatim; data/TELEMETRY.md retires; data/ tightens to FACTS ·
SOURCES · SCHEMA.
**Why:** the founder's FACTS charter — categories of information we
decided to incorporate, each definition within — describes the
telemetry vocabulary exactly; FACTS already hosts non-world
vocabularies (Appendices A, B); the standalone file confused its
own author ("not sure what this is for").
**Alternatives rejected:** keep + purpose line (the file's
existence was the confusion); fold into ENGINE (tables bloat the
brain blueprint; T7 and SCHEMA read FACTS anyway).
**Affects:**
[FACTS Appendix C](data/FACTS.md#appendix-c--telemetry-vocabulary-what-the-app-records)
· data/TELEMETRY.md (deleted) ·
[ENGINE §10](ENGINE.md#10-learn--the-loop-back) ·
[ROADMAP](ROADMAP.md) · [HOME](HOME.md) ·
[SCHEMA](data/SCHEMA.md) · frozen link repairs
([D-014](DECISIONS.md#d-014--2026-06--telemetry-posture-capture-now-use-later)
entry ·
[telemetry-inventory](history/product/definition/telemetry-inventory.md)) ·
this entry.

## D-034 — 2026-07 — History quadrants — product×workshop · definition×implementation; memory TEMPLATE owns format + Status vocabulary (extends D-024's narrative layer and D-032's states)
**Decision:** four doors — history/product/definition ·
history/product/build · history/workshop/definition ·
history/workshop/mechanism; the weld assigns per the README legend
(is-vs-does picks the column, Roam-facing vs builder-facing picks
the row; ties → workshop/definition); TEMPLATE gains the Status
vocabulary the wake-lock reads; handoff and ship stop
re-enumerating the format.
**Why:** 49 flat files made the vault untangible for retrieval; the
founder's future-issue test routes five real issues from this
session to five distinct doors; the quadrant that will explode
(product/build at S3) is isolated from workshop noise.
**Alternatives rejected:** single appended HISTORY.md (unbounded
scroll; derivation rework); monthly buckets (dual conventions
forever); flat + lens only (fixed the graph, not browse/search).
**Affects:** 49 moves (+ telemetry-fold, welded between brief and
task) · [history/README](history/README.md) ·
[ship](skills/ship.md) · [handoff](skills/handoff.md) ·
[TEMPLATE](memory/TEMPLATE.md) · link ripple across
[ROADMAP](ROADMAP.md) · [DECISIONS](DECISIONS.md) ·
[DASHBOARD](DASHBOARD.md) · specs · this entry.

## D-035 — 2026-07 — State surfaces v2 — Sessions table with a type column; sentence-first Needs-you; verbatim chat titles; welds stamp time and write the ledger; handoff §4 is the single board spec (amends D-024's surface; extends D-029)
**Decision:** the board's sections, order, and rendering rules are
exactly [handoff §4](skills/handoff.md); pickup renders deltas and
points at the board instead of mirroring it; ship's weld stamps
shipped: <date HH:MM> and appends one
[ledger](history/README.md#the-ledger) line; legends live in
[HOME §Reading the board](HOME.md#reading-the-board);
DECISIONS-entry Affects lines and board tables keep inline links
(table-class sanction).
**Why:** the founder's morning-after scenario — one glance must
answer how many sessions, what state, needs-me vs waiting; two
writer-specs (handoff §4 + pickup §5's mirror) were a revert risk;
date-only frontmatter hid same-day chronology.
**Alternatives rejected:** separate Main/Parallel sections (founder
merged them); a divider row (the type column suffices); cell
coloring (not portable across Obsidian and GitHub); backfilling
times into frozen stories (invents data).
**Affects:** [handoff](skills/handoff.md) ·
[pickup](skills/pickup.md) · [liftoff](skills/liftoff.md) ·
[ship](skills/ship.md) · [history/README](history/README.md) ·
[HOME](HOME.md) · this entry.

## D-036 — 2026-07 — Information routing — one home per class, append vs upsert; HOME carries the table; Sessions anchor stabilized
**Decision:** every information class has exactly ONE home; new
information APPENDS via that home's named vehicle, changed
information UPSERTS in place via the same writer — never a second
copy (the weave links to a fact's home, never duplicates it);
[HOME](HOME.md#where-information-goes) renders the table; the
board's Sessions header stays plain (counts live in the glance
line) so its anchor survives every repaint.
**Why:** the founder asked twice where appends belong — the router
existed in [LAWS](LAWS.md) but no glanceable rendering did; #111
proved header-borne counts orphan inbound anchors.
**Alternatives rejected:** routing table in LAWS (bloats the
every-session load; LAWS gets the one binding clause next block);
counts in the Sessions header (unstable anchor, proven).
**Affects:** [HOME](HOME.md) · [handoff §4](skills/handoff.md) ·
this entry.

## D-037 — 2026-07 — Pickup speaks the founder's shape — exit table · Recent Summary · Pending Issues; LAWS binds the routing law (completes D-036)
**Decision:** [LAWS §Knowledge & tracking](LAWS.md#knowledge--tracking)
gains the one-home clause pointing at
[HOME's table](HOME.md#where-information-goes); pickup §5 renders
exactly: exit table (last-handoff caption; one row per parked/lifted
task: at exit → now → your move) · RECENT SUMMARY (plain prose of
the last sitting) · PENDING ISSUES (none-form: "No issues from last
sitting.") · OPEN CHAT + DESIGN DISCUSSION (the board's verbatim
titles) · NEEDS YOUR ATTENTION · NEXT; ritual self-narration is
silent.
**Why:** the founder's sit-down is about resuming a mind, not
restating a board — continuity of recent work, threads, and worries
first; "baton claimed" and kin are machinery, not information.
**Alternatives rejected:** keeping the delta-first SINCE-YOU-LEFT
shape (approved shape supersedes it); routing table in LAWS (HOME
renders, LAWS binds — D-036).
**Affects:** [LAWS](LAWS.md) · [pickup](skills/pickup.md) ·
this entry.

## D-038 — 2026-07 — CI is the arbiter — Actions-green required at every gate; local gate mirrors all six CI steps; D-anchors born resolving (upholds D-027)
**Decision:** THE GATE, every lane's ready-flip, and LAWS' "done"
all require the pushed commit's GitHub Actions run to be green —
local green never suffices; the preflight gate becomes the full CI
mirror (lint · format:check · check:links · tests · build);
[decide](skills/decide.md) runs check:links before an entry's first
push, so a D-number heading and every link to it are born in the
same commit; local-green + CI-red is a STOP-and-investigate finding,
never a merge. Machine-enforced (founder said yes, 2026-07-14): main
is branch-protected — the `checks` run is a required status check
with enforce_admins on, so red is unmergeable by GitHub itself. This
widens [D-027](#d-027--2026-07--laws-polish--glossed-lane-law-provenance-re-homed-to-consolidations-ship-syncs-with-main-before-the-weld)'s
sync-with-main-before-the-weld preflight to the whole pipeline.
Self-merge paths — the weld and micro-PRs — arm
`gh pr merge --auto` and fire on green: immediacy yields to the
arbiter.
**Why:** seven red Actions notifications reached the founder before
any report did — six were honest mid-authoring anchor failures, one
was main itself red for ~30 minutes (#111→#112); every report was
locally true and CI-blind because nothing ever looked at Actions.
The arbiter has to be the thing that actually gates the merge.
**Alternatives rejected:** re-pinning Node (the pipeline was healthy
— the node-24 hypothesis is retracted); git pre-push hooks (the
decide-step check:links fix is lighter, targets the actual stumble,
and per-machine hooks don't travel with the repo).
**Affects:** [ship §1 · §THE GATE · §7](skills/ship.md) ·
[handoff §5](skills/handoff.md) ·
[parallel-lanes §When a lane finishes](skills/parallel-lanes.md) ·
[decide §1](skills/decide.md) ·
[LAWS §Workflow](LAWS.md#workflow-non-negotiable) ·
[SETUP §Once and done](SETUP.md#once-and-done--cloud-accounts) ·
this entry.

## D-039 — 2026-07 — Recall — questions answered from files, never from memory (the D-036 routing table's read mirror; model-invoked at discretion)
**Decision:** a seventh skill, read-only, fired by Claude's own
judgment whenever a founder question concerns anything recorded —
past, ongoing, or future — or whenever an answer would otherwise come
from conversational memory; it classifies, opens the routed homes, and
answers sentence-first with a
[D-029](#d-029--2026-07--corpus-writing-laws--readability-first-links-below-prose)
Sources block; not-found means "not recorded" plus where it would
live — never an invention; git outranks the board and the answer says
so on conflict.
**Why:** the founder asked one already-answered question three times
in a day — the corpus had it, retrieval had friction; writes were
routed by
[D-036](#d-036--2026-07--information-routing--one-home-per-class-append-vs-upsert-home-carries-the-table-sessions-anchor-stabilized),
reads never were; keyword gating would under-fire.
**Alternatives rejected:** folding into [pickup](skills/pickup.md) (a
moment, not on-demand); a search index (the routing table IS the
index); explicit-keyword triggering (founder wants discretion).
**Affects:** [the new skill](skills/recall.md) + stub ·
[HOME](HOME.md#equipment--environment) · this entry.

## D-040 — 2026-07 — Handoff input inversion — the leaving message carries the Web/Design paste inline; the never-skipped question is retired; a bare trigger means none (amends the two-touchpoints law's wording; upholds D-032)
**Decision:** a FULL handoff never prompts the founder after it is
invoked — the message that triggered it IS the input. Any text
preceding the trigger (a leaving phrase or `/handoff`) is the
founder's Web/Design paste, taken verbatim (chat titles · one line ·
next step, as written); a bare trigger with nothing before it records
"none". The never-skipped question is retired; zero founder input
after invocation.
**Why:** the question was the last manual prompt in the leaving loop,
and it was a redundant round-trip — the founder is already typing a
leaving message, so that message can carry the paste and the ritual
reads it instead of asking back. Fewer touchpoints, same knowledge
carried; the founder still holds the only channel Claude Web and
Claude Design cannot write.
**Alternatives rejected:** keeping the question (an avoidable
round-trip the founder already has the context to skip); a separate
paste command (a second ritual for what the leaving message already
carries); auto-detecting the paste's shape (brittle — verbatim text
before the trigger is unambiguous).
**Affects:**
[handoff §2](skills/handoff.md#2--the-inline-webdesign-paste-full-only)
· [LAWS §The two touchpoints](LAWS.md#the-two-touchpoints) ·
[HOME](HOME.md) (manual entry · retention row · handoff walkthrough) ·
[WEB-INSTRUCTIONS](WEB-INSTRUCTIONS.md) ·
[D-032](#d-032--2026-07--fleet-continuity--handoff-parks-every-local-lane-liftoff-respawns-parked-benches-wake-lock-parks-every-outcome-extends-the-d-020d-023-lane-law-upholds-d-009)
· this entry.

## D-041 — 2026-07 — Delegation architecture — the away-mode chooser, go-remote tether, idle-wait, label-spawned cloud (amends D-032's wake-lock and the dispatch law; upholds the baton law and D-009)
**Decision:** away-mode is one variable per fork, not a pile of
rituals. At the keyboard → a LOCAL lane. Leaving with nothing
continuing → handoff. Leaving with work continuing: machine staying on
→ go-remote; machine going dark → liftoff. Go-remote is a POSTURE, not
a leaving ritual — it parks nothing, closes nothing, and keeps the
baton; the cockpit relocates to the founder's phone via Remote
Control. A blocked lane on a phone-reachable vehicle (cloud session ·
RC-tethered local session) IDLE-WAITS for the founder's reply instead
of parking. Cloud lanes spawn through a GitHub-label-triggered routine
(label `lane:cloud` on the pre-birthed draft PR); ad-hoc CLI spawn
stays banned. The eligibility gate reverts to hard disqualifiers
(secrets exposure · cloud-incompatible needs · file-collision), and
fully-specified becomes the dispatch sort key under the plan's daily
routine budget.
**Why:** the corpus had reserved this decision across five sweeps. One
variable per fork is the simplest complete model; a posture (not a
ritual) lets the baton law survive unamended
([baton law](LAWS.md#parallel-lanes--cloud)); a zero-secret label is
safer than API wiring and is drivable from the phone; idle-wait costs
nothing where a phone can reach the lane, so parking there was pure
loss.
**Alternatives rejected:** a third leaving ritual (a posture suffices;
the baton law survives unamended); `/fire` API wiring as the primary
route (a bearer token on two machines vs a zero-secret label — and the
label is also phone-drivable); keeping park-on-block everywhere (idle
costs nothing where a phone can reach, and
[D-032](#d-032--2026-07--fleet-continuity--handoff-parks-every-local-lane-liftoff-respawns-parked-benches-wake-lock-parks-every-outcome-extends-the-d-020d-023-lane-law-upholds-d-009)'s
recording guarantee is preserved).
**Affects:** [LAWS §Workflow](LAWS.md#workflow-non-negotiable) ·
[LAWS §Parallel lanes & cloud](LAWS.md#parallel-lanes--cloud) ·
[parallel-lanes](skills/parallel-lanes.md) ·
[liftoff](skills/liftoff.md) · [go-remote](skills/go-remote.md) (new)
· [machine-setup](skills/machine-setup.md) · [SETUP](SETUP.md) ·
[HOME §Delegation](HOME.md#delegation--the-away-mode-chooser) ·
[D-032](#d-032--2026-07--fleet-continuity--handoff-parks-every-local-lane-liftoff-respawns-parked-benches-wake-lock-parks-every-outcome-extends-the-d-020d-023-lane-law-upholds-d-009)
·
[D-009](#d-009--2026-06--pacing-law-finish-first-flexible-cap)
· this entry.

## D-042 — 2026-07 — Lane liveness — derive live-vs-reclaimable from the commit heartbeat; read it at claim-check and session-start cleanup so a live lane is never adopted or pruned (amends the claim-check clause and pickup §3; upholds the wake-lock and seat-invariance)
**Decision:** "commits are the heartbeat"
([LAWS §Task anatomy](LAWS.md#task-anatomy)) is now load-bearing. A
bench or worktree is LIVE — never adopted, never secured or pruned —
when its memory Status is non-terminal and its branch's last commit
falls within the staleness window (value settled in
[parallel-lanes §Canary](skills/parallel-lanes.md#canary-handshake-both-sides),
starting at ~30 minutes, tunable). It is RECLAIMABLE when its Status
is terminal (parked · failed · held · shipped · superseded) — a
terminal word outranks a fresh heartbeat, because the stamp commit IS
the parking act and the wake-lock guarantees no worker survives a
Status it does not own — OR when the branch is silent past the
window. Genuine doubt → announce what you see and ask. The rule is
read at the two previously blind sites: the claim check
([LAWS §Workflow](LAWS.md#workflow-non-negotiable)) and
[pickup §3](skills/pickup.md)'s worktree sweep, fed by a
per-worktree verdict (branch · heartbeat age · Status word ·
LIVE|RECLAIMABLE) the session-start hook computes and prints. The
wake-lock backstops a misjudged window: a wrongly-reclaimed lane
meets a Status it does not own on its next wake and self-terminates —
the cost is a restart, never split-brain work.
**Why:** the ledger-integrity incident
([the story](history/workshop/mechanism/ledger-integrity.md)) — a
cockpit session adopted a bench and removed a worktree that a live
lane was flying. The lane's heartbeat (commits minutes old) was
visible the whole time, but no rule told the claim check or the
session-start cleanup to read it: the claim check consulted branches
and PR state without asking "is someone flying this NOW", and pickup
§3 presumed every dirty sibling worktree dead.
**Alternatives rejected:** a hand-refreshed `claim:` frontmatter
field (per-commit churn, can-forget; the git commit time is the same
signal for free and derivation-law-aligned); a CI check (the
collision is cross-branch, invisible to a single-branch CI run —
enforcement is the two read-sites plus the hook's computed verdict).
**Affects:** [LAWS §Workflow](LAWS.md#workflow-non-negotiable) ·
[parallel-lanes §Liveness](skills/parallel-lanes.md#liveness--live-vs-reclaimable)
(new) ·
[parallel-lanes §Canary](skills/parallel-lanes.md#canary-handshake-both-sides)
·
[parallel-lanes §Respawn](skills/parallel-lanes.md#respawn-on-an-existing-bench-liftoff-adopt)
· [pickup §3](skills/pickup.md) · the session-start hook
(`.claude/hooks/session-start.mjs`) ·
[TEMPLATE — the Status vocabulary](memory/TEMPLATE.md) ·
[HOME §Terms](HOME.md#terms) ·
[HOME §Lanes](HOME.md#lanes-local--cloud) · [IDEAS](IDEAS.md) (the
double-dispatch diagnostic) ·
[D-032](#d-032--2026-07--fleet-continuity--handoff-parks-every-local-lane-liftoff-respawns-parked-benches-wake-lock-parks-every-outcome-extends-the-d-020d-023-lane-law-upholds-d-009)
(the wake-lock upheld) · this entry.

## D-043 — 2026-07 — Cloud ignition & away-command redesign — route ladder v2: ready-flip-then-label is the recipe of record, api-ignition and the cloud clerk staged, the Claude app the single away surface (amends D-041; upholds the lane law and the wake-lock)
**Decision:** the maiden flight's finding of record: the cloud
lane-worker routine's `pull_request.labeled` trigger does NOT fire
on draft PRs. Three-point experiment (2026-07-16): 17:02 label on a
draft → nothing · 21:31 re-label on the draft with the routine
verified Active → nothing · 21:53 ready-flip + label → canary in
90 seconds. Undocumented platform behavior — the provider's docs
imply drafts pass unless filtered. Consequences, in three layers:
(1) INTERIM route 1, live tonight — cockpit ignition is two acts:
flip the bench's PR ready, then apply (or cycle) `lane:cloud`.
Guard: for a cloud lane mid-flight, ready ≠ complete — completion
remains @mention + Actions green + founder review, and the memory
Status is the truth; the phone route is the same two acts in the
GitHub app.
(2) TARGET route 1b, staged — add the routine's API trigger so the
cockpit and liftoff ignite via endpoint, benches stay draft, and
the ready-flip reverts to meaning completion only.
Adopt at first need; verify-before-rely.
(3) AWAY-COMMAND architecture (founder requirements, 2026-07-16/17)
— the single command surface is the Claude app across all postures:
desk = Agent View + cockpit watches · away-machine-on = Remote
Control → the tethered cockpit · away-machine-off = the CLOUD
CLERK, a manually-born, cap-free cloud session with a narrow
charter (reads origin; posts PR comments only on founder
instruction; never writes files, never merges, never holds the
baton). Staged; the first post-adoption liftoff tests clerk
longevity on a trivial charter before anything depends on it. The
GitHub app is demoted to doorbell/backstop. The maiden checklist's
dormant-baton item is expected retired by the clerk and stays open
until proven. The reply-ack window (~15 min,
[parallel-lanes §Canary](skills/parallel-lanes.md#canary-handshake-both-sides))
is confirmed live at first use (22:10 reply → 22:11 resume).
**Why:** three draft labels burned trigger events and produced zero
sessions across two sittings; one ready-flip produced a live lane
in 90 seconds — the recipe had to become doctrine before the next
liftoff relies on it. The away redesign follows the founder's
stated requirement: one surface to command from, with GitHub
reduced to a doorbell.
**Alternatives rejected:** benches born ready permanently (erodes
the completion signal — ready must keep meaning reviewable; hence
route 1b staged to restore it) · the GitHub app as the away command
surface (four-tap friction, a second surface; demoted to
doorbell/backstop) · building a Slack/Telegram doorbell mirror now
(build only if the GitHub-app buzz annoys — awaiting the founder's
attest, parked in [IDEAS](IDEAS.md)).
**Affects:**
[parallel-lanes §Cloud spawn](skills/parallel-lanes.md#cloud-spawn--route-ladder)
(recipe of record + the filled maiden checklist) ·
[parallel-lanes §Answering a lane](skills/parallel-lanes.md#answering-a-lane-the-mail-slot)
(new) · [SETUP §Staged](SETUP.md#staged--turns-on-when-its-stage-opens)
(api-ignition · cloud-clerk) ·
[SETUP §cloud accounts](SETUP.md#once-and-done--cloud-accounts)
(the run-history sentence) · [IDEAS](IDEAS.md) (the away-redesign
idea lines + the double-dispatch resolution evidence) ·
[D-041](#d-041--2026-07--delegation-architecture--the-away-mode-chooser-go-remote-tether-idle-wait-label-spawned-cloud-amends-d-032s-wake-lock-and-the-dispatch-law-upholds-the-baton-law-and-d-009)
(the route ladder amended) · this entry.

## D-044 — 2026-07 — The pre-GATE critic goes live — ship's gate opens by invoking the reviewer subagent, verdicts advisory riding with the summary (turns on the staged reviewer; upholds D-038 and the reviewer frame)
**Decision:** every ship now runs the
[reviewer subagent](history/workshop/mechanism/reviewer-subagent.md)
as THE GATE's first act ([ship §6](skills/ship.md#6--the-gate)): the
critic reads the branch's diff against its spec, the laws, and the
memory diary, and its structured verdict rides to the founder
VERBATIM alongside the plain summary. The verdict is advisory — a
finding never halts ship by itself; the founder weighs it at the
gate. The reviewer moves from
[SETUP §Staged](SETUP.md#staged--turns-on-when-its-stage-opens) to
[SETUP §Once and done — repo-side](SETUP.md#once-and-done--repo-side-travels-with-git):
it is ON for every task, local or cloud, from this weld.
**Why:** the critic existed but nothing summoned it — a step that
must be remembered is not a ritual. Wired into §6, every diff gets
a second pair of eyes at the exact moment the founder is asked for
the merge word, at zero added founder friction (the advisory
policy, the founder's 2026-07-17 call on
[#146](https://github.com/wsher0901/roam/pull/146)).
**Alternatives rejected:** a new numbered ship section (renumbers
§6–§8 and breaks the ship-anchor weave — the agent file itself
links §6) · blocking verdicts (the founder chose advisory;
reversible by a later [decide](skills/decide.md)) · leaving
invocation discretionary (guarantees drift — the critic would run
only when remembered).
**Affects:** [ship §6](skills/ship.md#6--the-gate) (the critic
invocation) ·
[SETUP §Once and done — repo-side](SETUP.md#once-and-done--repo-side-travels-with-git)
(the reviewer filed live) ·
[SETUP §Staged](SETUP.md#staged--turns-on-when-its-stage-opens)
(the line retired) · [IDEAS](IDEAS.md) (the 2026-07-17 wiring line
cleared) ·
[D-038](#d-038--2026-07--ci-is-the-arbiter--actions-green-required-at-every-gate-local-gate-mirrors-all-six-ci-steps-d-anchors-born-resolving-upholds-d-027)
(the arbiter upheld — the critic adds eyes, not a gate) · this
entry.

## D-045 — 2026-07 — Hands doctrine: solo · subagents · agent team · lanes — the litmus is one-bench-many-hands vs many-benches vs read-only (upholds D-020 and D-041)
**Decision:** the founder's choose-your-hands rule is now doctrine,
filed verbatim at
[SETUP §Models & effort](SETUP.md#once-and-done--cloud-accounts):
solo for sequential or single-file work (the default); exploratory
subagents for parallel READ-ONLY research inside one task (no spec
needed); an agent team for ONE task that splits into file-disjoint
subparts benefiting from cross-talk with the founder present to
steer — never long-unattended (lead + 2–4 Sonnet 5 teammates,
start 2; delegate-mode lead for pure coordination; plan-approval
for teammates touching shared or hard-to-reverse surfaces; never
ritual/law files, never across tasks); parallel lanes for separate
tasks on their own benches, unattended-capable. The litmus: many
hands on ONE bench with the founder watching = team · many benches
= lanes · reading only = subagents.
**Why:** choosing the vehicle for a piece of work was ad-hoc — the
same task could be handed to a team, a lane, or a solo pass with no
rule saying which, and the costly wrong pick (an unattended team
turned loose on a law file, say) had nothing to catch it. The
one-bench-many-hands vs many-benches vs read-only litmus makes the
choice mechanical: the vehicle now follows from the shape of the
work, not the mood of the moment. Stated verbatim by the founder
with the Shakedown phase-2 kickoff; filed lane-written per the
[D-044](#d-044--2026-07--the-pre-gate-critic-goes-live--ships-gate-opens-by-invoking-the-reviewer-subagent-verdicts-advisory-riding-with-the-summary-turns-on-the-staged-reviewer-upholds-d-038-and-the-reviewer-frame)
precedent.
**Affects:**
[SETUP §Models & effort](SETUP.md#once-and-done--cloud-accounts)
(the Hands passage, doctrine verbatim) ·
[parallel-lanes §Vehicles](skills/parallel-lanes.md#vehicles) (the
pointer line) · this entry and its task memory.
