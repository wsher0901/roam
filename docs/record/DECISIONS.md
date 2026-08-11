---
type: decision-log
title: Decisions Log
status: append-only
---
# Decisions Log
Format: a SHORT heading (8 words maximum) that is the anchor, an
`In full:` line carrying the complete statement and the date, then
decision | why | alternatives rejected | affects. Headings FREEZE
AT MINT — every citation in the repo depends on them
([D-068](#d-068--the-short-anchor-law), written by
[decide](../skills/decide.md)).

## D-001 — Tech stack

In full: 2026-06 — Tech stack

Decision: Next.js (TypeScript) + Supabase (Postgres + Auth) + Vercel;
planning brain = Claude API server-side; scoring engine isolated as its
own tested module.
Why: one language and one deploy = fewest moving parts for a solo
non-dev; the stack Claude Code is strongest at; scales from portfolio
demo to real users without a rewrite (Supabase auth = multi-user built in).
Alternatives rejected: Python backend + JS frontend (two stacks to
maintain); mobile-first v1 (web decided).

## D-002 — Handoff-note merge policy

In full: 2026-06 — Handoff-note merge policy

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

## D-003 — Roam V1 scope

In full: 2026-06 — Roam V1 scope (Foundation V1)

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

## D-004 — Planning notation and rolling-wave depth

In full: 2026-06 — Planning notation & rolling-wave depth

Decision: single notation Vn / Vn.Sm / Vn.Sm.Tk (Version -> Stage ->
Task; small steps are checkboxes inside a task). [ROADMAP](../ROADMAP.md) plans rolling
wave: V1 fully detailed, V2 a rough named bucket, everything else pooled
in [FOUNDATION](../FOUNDATION.md) sockets + [docs/IDEAS.md](../IDEAS.md).
Why:
- one notation ends the v1/MVP/demo/milestone synonym confusion;
- IDs let every PR, branch, handoff, and decision point at an exact
  work item;
- detail only where actionable: a new idea costs one pool line, never a
  re-plan of future versions.
Alternatives rejected: spec all versions now (guesswork + heavy upkeep;
penalizes new ideas); V1-only with no version buckets (loses the
per-version narrative).

## D-005 — Stack re-trial upholds D-001

In full: 2026-06 — Stack re-trial vs Foundation V1: D-001 upheld + frontend layer

Decision: [D-001](#d-001--tech-stack) upheld and extended — Next.js App Router (TypeScript,
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

## D-006 — V1 roadmap cut

In full: 2026-06 — V1 roadmap cut (stages & tasks)

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

## D-007 — shadcn/ui builds on Base UI

In full: 2026-06 — shadcn/ui builds on Base UI, not Radix

Decision: Roam's shadcn/ui components use the Base UI primitive library
(shadcn's current default, "nova" preset) rather than the legacy Radix
option; confirmed with the [V1.S2.T1](../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1) scaffold approval.
Why:
- shadcn's docs, CLI defaults, and new components now target Base UI —
  the well-trodden path [D-005](#d-005--stack-re-trial-upholds-d-001) optimizes for points there for greenfield
  apps;
- nothing existed to migrate, and switching costs only grow as
  components accumulate (they are vendored files);
- Radix remains available per-component if a gap ever appears.
Alternatives rejected: Radix UI (the legacy default — larger back
catalog of examples, but new shadcn development has moved off it);
deferring the choice (every added component would deepen whichever
default we ignored).

## D-008 — Cockpit, derived state, automatic recording

In full: 2026-06 — Cockpit, derived state, automatic recording

Decision: [docs/HOME.md](../HOME.md) is the cockpit (pointers, routing, daily loop,
information hierarchy; stores no state). Recording and sequencing are
system-enforced: /ship runs itself at task completion and ends by
naming the next labeled action; /pickup and "brief" render a stage
progress map and label every suggestion with tool +
parallel/sequential; ideas are captured to [IDEAS.md](../IDEAS.md) the moment voiced
(Code appends directly; Web bakes APPENDs into blocks); Web chats
speak in Lane Status footers and Resume Primers, with done/change
calls confirmed by one question; git outranks notes; nothing starts
without the claim question; the [D-002](#d-002--handoff-note-merge-policy) carve-out extends to
[docs/IDEAS.md](../IDEAS.md) additions.
Why:
- the human surface shrinks to pasting blocks, yes/no confirmations,
  and PR approvals — everything else is automatic or derived;
- every completion emits the next instruction, so the loop never goes
  silent;
- each information granularity has exactly one home and one update
  mechanism (the hierarchy in [HOME.md](../HOME.md)), so nothing has two truths.
Alternatives rejected: a status file with its own state (rots); relying
on the user to remember /ship, idea capture, or lane reporting (the
failures this design exists to remove); PR approval for idea capture
(kills the habit).

## D-009 — Pacing law

In full: 2026-06 — Pacing law (finish-first, flexible cap)

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

## D-010 — Global coverage via graded fallback ladders

In full: 2026-06 — Global coverage via graded fallback ladders

Decision: V1 fact coverage is global from day one — no geography cut.
Every coverage-risky fact in [docs/data/FACTS.md](../data/FACTS.md) declares a fallback
ladder, vetted top-down in [V1.S1.T2–T6](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code): (1) sources global by
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

## D-011 — Traveler input vocabulary

In full: 2026-06 — Traveler input vocabulary: rich, nullable, tiered, append-only

Decision: V1 collects the traveler vocabulary [TP-01..26](../data/FACTS.md#appendix-a--traveler-parameters-tp-0147--per-d-011--d-012) defined in
[docs/data/FACTS.md](../data/FACTS.md) Appendix A. The floor never changes: origin + dates
always suffices (dates may carry optional earliest-departure /
latest-return boundary times). Every other field defaults to Null. Each
field carries a handling tier: engine (a named V1 check consumes it),
brain-only (Claude personalizes with it; no deterministic check), or
Later-socket field (stored, unconsumed — accessibility). Extension is
append-only: a new field is one nullable column plus a D-number;
removals/renames after [V1.S1.T7](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code) are migrations.
Why:
- [FOUNDATION](../FOUNDATION.md) promises "from the floor (origin + free dates) to rich
  preferences"; structuring only what checks consume keeps the
  reliability law honest on the input side;
- null-default keeps the floor sacred;
- append-only matches "nothing in V1 may require a rewrite".
Alternatives rejected: floor-only (underpowers logic [FOUNDATION](../FOUNDATION.md) names:
red-eye fit, jet-lag pacing, multi-airport choice); free-text-only
supplements (the brain can read them, deterministic checks cannot);
exhaustive "all inputs ever" enumeration (stalls the gate and fakes
capability for fields nothing consumes).

## D-012 — Elicitation and inference policy

In full: 2026-06 — Elicitation & inference policy (ask tiers, provenance, upsert)

Decision: Every traveler field in [docs/data/FACTS.md](../data/FACTS.md) Appendix A carries
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

## D-013 — Canonical units, SI storage

In full: 2026-06 — Canonical units: SI storage, display-time conversion

Decision: All storage and engine math use SI/metric exclusively, never
mixed. Conversion to US units happens only at render time via a
settings-tier units field (default metric for development and as the
initial product default; never asked; UI must expose the toggle —
noted for [V1.S2](../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)). Locale-based defaulting (US users -> imperial) is
deferred until accounts/locale exist.
Why:
- mixed-unit storage is a classic data-corruption source;
- one canonical system keeps T7 column types and engine thresholds
  (e.g. heat ceilings) unambiguous.
Alternatives rejected: store-as-entered (mixed units inside math);
imperial-canonical (every upstream source is SI-native).

## D-014 — Telemetry posture

In full: 2026-06 — Telemetry posture: capture now, use later

Decision: V1 captures the behavior-event corpus defined in
[docs/data/TELEMETRY.md §1](../data/FACTS.md#c1--behavior-events-d-014) from day one, under: consent-gated
collection (GPC/DNT respected; consent grants/withdrawals logged),
pseudonymous session ids (no accounts in V1), no PII and no raw IPs in
payloads, stated-only fields never appearing in events, raw-event
retention time-boxed (12-month default) with aggregates retained.
Exposure law: every recommendation-reaction event records the full
slate shown (items + positions), not just the acted-on item. V1 may
use events only for product/funnel debugging, fatigue-cap tuning, and
quality signals ([TELEMETRY.md §2](../data/FACTS.md#c2--quality--ground-truth-p5)); ranking personalization remains
Later per [FOUNDATION](../FOUNDATION.md); event data is never sold or shared.
Why:
- events cannot be backfilled — day one of the Later ranking work
  should begin with months of slates, not zero;
- feedback only exists over what was shown and position shapes
  response, so click-only logs are uninterpretable;
- the privacy floor keeps the corpus lawful and clean.
Alternatives rejected: defer capture entirely (permanent data loss);
click-only logging without exposures (position-biased, unusable);
use-now ranking tuning (violates [FOUNDATION](../FOUNDATION.md)'s Later).

## D-015 — Data-asset law

In full: 2026-06 — Data-asset law: bitemporal, append-only, license-segmented

Decision: The fact cache is bitemporal — every value carries valid_for
(when it is true in the world) and recorded_at (when we learned it) —
and append-only: values are superseded, never overwritten; revision
series are first-class data. An actuals harvester ([ROADMAP](../ROADMAP.md) [V1.S3.T7](../ROADMAP.md#v1s3--engine-core--two-families-deep))
records observed values once valid_for passes, pairing with the claim
ledger for calibration. Source data is stored in license-segmented,
attributed layers (collective, never blended-derivative); [SOURCES.md](../data/SOURCES.md)
records retention_rights and license_class per source, and these act
as primary selection criteria in T2–T6 — caching-prohibited sources
disqualify a slot from the asset layer. World data is strictly
separated from traveler and event data. Source grades are living:
sustained fetch failure, schema drift, or miscalibration demotes a
grade and renders fall down the reliability ladder automatically;
promotion requires re-vetting.
Why:
- the revision series and forecast-vs-actual pairs are the
  proprietary core of [FOUNDATION](../FOUNDATION.md)'s "quiet asset";
- storage-prohibiting ToS would hollow the asset (e.g. Places-style
  no-caching rules); share-alike licenses attach to blended
  derivatives but not to segmented collective or internal use, so
  segmentation keeps the proprietary layer ownable;
- never-discard is the temporal-modeling canon.
Alternatives rejected: overwrite-in-place caching (destroys the
asset); a single blended store (license contamination); static grades
(the reliability law dies of old age).

## D-016 — Parallel-ready menu

In full: 2026-06 — Parallel-ready menu (amends D-009)

Decision: every briefing and completion (/pickup, /ship, "brief")
ALWAYS appends a "Parallel-ready:" list — every task that is [P],
unblocked, and not already claimed by an open lane — each item labeled
with its tool (-> Claude Code / -> CLAUDE WEB), its branch name, and,
for a second session on the same machine, the exact git worktree
launch command. The list is informational and exempt from the [D-009](#d-009--pacing-law)
two-item attention cap: the cap still governs what needs the
builder's attention; finish-first still orders the recommendations;
the menu never converts into asks.
Why:
- parallel capacity was invisible unless explicitly requested —
  [D-009](#d-009--pacing-law)'s discretionary clause hid throughput the builder wanted to
  see;
- listing lanes with ready-to-paste launch commands makes opening a
  second lane a zero-thought action;
- keeping the list informational preserves the anti-fatigue law: more
  visibility, zero added attention cost.
Alternatives rejected: keep it discretionary (the invisibility this
fixes); fold parallel items into the attention cap (blows the fatigue
budget); a standing PARALLEL.md file (rots; derived state belongs in
briefings, not files — [D-008](#d-008--cockpit-derived-state-automatic-recording)).

## D-017 — Cloud sessions are the lane vehicle

In full: 2026-06 — Cloud sessions are the parallel-lane vehicle (amends D-016)

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
- [D-016](#d-016--parallel-ready-menu)'s worktree recipe encoded an assumption, not the practice —
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

## D-018 — Fix-routing triage after lane review

In full: 2026-06 — Fix-routing triage after lane review (extends D-017)

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
  under the [D-017](#d-017--cloud-sessions-are-the-lane-vehicle) protocol — the routing verdict doubles as the
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

## D-019 — Launch mechanics correction

In full: 2026-06 — Launch mechanics correction (amends D-017)

Decision: `claude --remote` enforces a TTY guard — it refuses every
non-interactive invocation. Verified at first live launch: Claude's
own shell is headless AND the `!` prefix pipes output back into the
conversation, so NEITHER can create cloud sessions. The working
route: Claude writes a batch launcher (.cmd, one `claude --remote`
line per approved lane) OUTSIDE the repo — never committed, the
repo is public — and opens it as a visible console window on the
founder's screen (Start-Process). The lanes launch in that attended
window, print their session URLs, and the founder closes it.
[D-017](#d-017--cloud-sessions-are-the-lane-vehicle) is otherwise unchanged: explicit founder approval still
triggers the launch, Claude still prepares and fires everything,
and the session IDs are recorded in HANDOFF as open lanes.
Why:
- the TTY guard exists so cloud sessions are born attended; a
  popped window on the founder's desktop is exactly that — visible,
  readable, closed by a human;
- discovered live (both headless and `!` routes failed at first
  launch); docs must encode verified reality, not assumptions —
  this is the second correction of an assumed mechanic (worktrees
  in [D-016](#d-016--parallel-ready-menu) → cloud in [D-017](#d-017--cloud-sessions-are-the-lane-vehicle); headless launch in [D-017](#d-017--cloud-sessions-are-the-lane-vehicle) → attended
  window here).
Alternatives rejected: faking a TTY from the headless shell
(defeats the guard's purpose); founder hand-typing each launch
command (error-prone, scales badly past two lanes).

## D-020 — Parallel lanes v2

In full: 2026-07 — Parallel lanes v2: native lanes replace hand-built orchestration

Decision: lanes run locally as background agents (dispatched from
`claude agents`) or `claude -w` worktree sessions; every lane opens a
draft PR at birth and pushes every commit. Supersedes the launch
mechanics of
[D-016](#d-016--parallel-ready-menu),
[D-017](#d-017--cloud-sessions-are-the-lane-vehicle),
[D-018](#d-018--fix-routing-triage-after-lane-review)
and [D-019](#d-019--launch-mechanics-correction);
closes the
[D-020](#d-020--parallel-lanes-v2)
pending item from HANDOFF. Lane law (June 12
post-mortem, kept as belt-and-suspenders): push-first canary before
real work in any cloud session, push after every commit, never end or
delete a session before its work is on origin. Parallel lanes never
share a file — source vetting writes `docs/data/SOURCES-<family>.md`,
consolidated at
[V1.S1.T7](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code).
Agent Teams (experimental env flag in `.claude/settings.json`) may be
used or proposed for research/review tasks: lead Fable/Opus, teammates
Sonnet, max 4 teammates. Cloud sessions only via claude.ai/code and
only after the push canary passes.
[D-018](#d-018--fix-routing-triage-after-lane-review)'s
pre-review behavior survives: finished lane PRs are pre-reviewed
against [FOUNDATION](../FOUNDATION.md), the roadmap line, and the
reliability law before being surfaced. [CLAUDE.md](../../CLAUDE.md) is slimmed
accordingly: launch/teleport machinery removed; the equipment plan
moves to `.claude/skills/equipment-plan/` (laws stay in [CLAUDE.md](../../CLAUDE.md),
reference manuals live in skills).
Why:
- `claude --remote` bundle-seeded sandboxes on this machine (no origin
  remote -> push impossible) destroyed batch-1 T3+T5 work;
- three launch-mechanic corrections in a row
  ([D-016](#d-016--parallel-ready-menu) ->
  [D-017](#d-017--cloud-sessions-are-the-lane-vehicle)
  -> [D-019](#d-019--launch-mechanics-correction))
  showed the machinery was ours to maintain on shifting ground;
- Claude Code now ships the same capability natively (background
  agents that auto commit+push+draft-PR, Agent Teams, `claude -w`),
  running locally where deletion-loss is structurally impossible.
Alternatives rejected: keep repairing `--remote` (broken CLI-side, not
ours to fix); pure sequential work (leaves S1's [P] lanes serialized
now that loss-proof parallelism is native).

## D-021 — Plan-synthesis principles re-home

In full: 2026-07 — Plan-synthesis principles re-home to DECISION-POLICY

**Decision:** [docs/DECISION-POLICY](../ENGINE.md) is the
canonical home of the plan-synthesis rules (preferences-as-defaults,
constraint priority, warn-don't-block, composition- and
condition-aware placement, staged synthesis, near-peer alternatives,
proactive shifts, trade-off locking). [FOUNDATION](../FOUNDATION.md)
drops its Plan-synthesis section; [POLICY](../ENGINE.md)'s
existing word-for-word mirrors become the originals.
**Why:** one home per rule — [FOUNDATION](../FOUNDATION.md) holds
identity, [POLICY](../ENGINE.md) holds engine reasoning; the
mirror already existed, so canonicalizing removes a duplication that
would drift.
**Alternatives rejected:** [FOUNDATION](../FOUNDATION.md) canonical with
[POLICY](../ENGINE.md) mirroring (two edits per rule change);
duplicating in both (drift).
**Affects:** [FOUNDATION](../FOUNDATION.md) (section removed) ·
[DECISION-POLICY](../ENGINE.md) §1, §6–§8 ·
[ROADMAP](../ROADMAP.md) S3/S5 binding-requirements links · all corpus
links to the old anchor.

## D-022 — Version ladder and lifespan split

In full: 2026-07 — Version ladder + lifespan split (amends D-004)

**Decision:** versions are outcome milestones — V1 "The demo", V2
"Real users", V3 "The product", then an unversioned Pool (done-whens
as written in [ROADMAP §The versions](../ROADMAP.md#the-versions)).
Rolling-wave depth: active version fully staged/tasked; next a rough
bucket; the one after name-only; sockets pooled.
[FOUNDATION](../FOUNDATION.md)↔[ROADMAP](../ROADMAP.md) divide by lifespan:
a sentence a shipped version can falsify lives in
[ROADMAP](../ROADMAP.md) (per-version scope blocks: For / Refuses /
Ships); timeless sentences live in [FOUNDATION](../FOUNDATION.md).
Refusals lift per-version via roadmap edits — never
[FOUNDATION](../FOUNDATION.md) edits.
**Why:** outcome-named versions make "done" testable; the lifespan
split matches each file's change cadence, so identity never churns
and plan never rots.
**Alternatives rejected:** topic-based split (both files are "about
the product" — undecidable); detailing V2+ now (guesswork, violates
rolling wave); keeping sockets in [FOUNDATION](../FOUNDATION.md) (the
pool is the plan's coarsest layer).
**Affects:** [ROADMAP](../ROADMAP.md) (ladder, V1 scope block, V2/V3/Pool,
notation → [HOME](../HOME.md)) · [FOUNDATION](../FOUNDATION.md) v3 ·
[HOME §Roadmap manual](../HOME.md#roadmap-manual) ·
[D-004](#d-004--planning-notation-and-rolling-wave-depth)
(amended).

## D-023 — Universal draft-PR-at-birth and micro-PR carve-out

In full: 2026-07 — Universal draft-PR-at-birth + micro-PR carve-out recut (amends D-002, D-008, D-020)

**Decision:** every task — cockpit included — is born bench-first:
freshly pulled main → branch → spec (when discussion opened the
task) + memory stub → a DRAFT PR pushed to origin BEFORE any session
works it. The self-merging micro-PR class is redefined to touch ONLY
[DASHBOARD.md](../DASHBOARD.md) and/or [IDEAS.md](../IDEAS.md) (it was the
handoff-note file and/or IDEAS —
[D-002](#d-002--handoff-note-merge-policy),
[D-008](#d-008--cockpit-derived-state-automatic-recording)).
GitHub Issues and the project board are retired;
[IDEAS.md](../IDEAS.md) is the single inbox, triaged into
[ROADMAP](../ROADMAP.md) via decide.
**Why:**
- the draft PR is the public window from the first commit — no work
  exists in only one place, which the two-computers-plus-cloud
  reality demands;
- seat-invariance
  ([D-024](#d-024--architecture-v2-narrative-layer-and-skills))
  needs one birth procedure for cockpit and lanes alike —
  special-casing the cockpit created two classes of task;
- two trackers (Issues/board beside the docs) meant two truths; one
  inbox ends the drift.
**Alternatives rejected:** draft PRs for lanes only (cockpit work
invisible until ship; violates seat-invariance); keeping the board
beside [IDEAS.md](../IDEAS.md) (the split brain this recut removes);
widening the micro-PR class further (every added file weakens the
only no-approval merge path).
**Affects:** [LAWS §Workflow](../LAWS.md#workflow-non-negotiable) ·
[D-002](#d-002--handoff-note-merge-policy) (amended) ·
[D-008](#d-008--cockpit-derived-state-automatic-recording)
(amended) ·
[D-020](#d-020--parallel-lanes-v2)
(amended: lane birth becomes the universal birth) ·
[parallel-lanes](../skills/parallel-lanes.md) ·
[liftoff](../skills/liftoff.md) · [HOME](../HOME.md) tables ·
[GLOSSARY](../HOME.md#terms) micro-PR entry.

## D-024 — Architecture v2, narrative layer and skills

In full: 2026-07 — Architecture v2: memory/history narrative layer, DASHBOARD as sole state surface, rituals as skills (amends D-008; retires HANDOFF.md + SHIPLOG.md)

**Decision:** every task carries docs/memory/&lt;id&gt;.md — the
living story in the locked format — rewritten cognitively at rituals
and at the lane trigger moments, and moved to
docs/history/&lt;id&gt;.md by ship's atomic weld (one bookkeeping
commit: [ROADMAP](../ROADMAP.md) tick + memory→history + spec
finalize). [DASHBOARD](../DASHBOARD.md) is the sole state surface,
repainted ONLY by rituals (pickup when stale, handoff, liftoff,
ship's tail), never hand-edited. HANDOFF.md and SHIPLOG.md are
retired — the shiplog's 35 entries live on as backfilled
[history/](history/README.md) files. The five rituals (pickup,
handoff, ship, decide, liftoff) plus the
[parallel-lanes](../skills/parallel-lanes.md) manual live as skills:
one-line stubs in .claude/skills/ carrying triggers, procedures
vault-readable in [docs/skills/](../skills). The baton, lane,
dispatch, and seat-invariance laws stand as written in
[LAWS.md](../LAWS.md); root [CLAUDE.md](../../CLAUDE.md) reduces to a
two-line import of LAWS.
**Why:**
- the handoff note was one file, one writer, whole-project scope —
  the single-writer law existed to manage that bottleneck; per-task
  memory dissolves it: every lane writes its own story, seat-blind;
- a shipped task's narrative belongs beside the work, one file per
  task — an ever-growing log rots, and "what shipped lately" is a
  derived view the [DASHBOARD](../DASHBOARD.md) Shipped table renders;
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
**Affects:** [CLAUDE.md](../../CLAUDE.md) (import shim) ·
[LAWS.md](../LAWS.md) (born) · [PROJECT-POLICY](../SETUP.md)
(born) · [DASHBOARD](../DASHBOARD.md) v5 · docs/memory/ + docs/history/
(born) · HANDOFF.md + SHIPLOG.md (deleted) · .claude/commands/
(deleted) · eight skills · session-start hook · settings.json ·
[HOME](../HOME.md) · [GLOSSARY](../HOME.md#terms) ·
[specs/README](specs/README.md) ·
[D-008](#d-008--cockpit-derived-state-automatic-recording)
(amended).

## D-025 — FOUNDATION v4 principles recut

In full: 2026-07 — FOUNDATION v4 — principles recut, open family set, lifespan repair (extends D-012; upholds D-021/D-022)

**Decision:** recut [FOUNDATION](../FOUNDATION.md)'s identity for
honesty and openness, carrying the new cohort layer into
[DECISION-POLICY §5](../ENGINE.md#2-intake--resolve-the-traveler):
- "What Roam is": Roam STARTS as the pre-trip brain — the boundary
  moves by roadmap decision, never by drift (lifespan is version
  scope in [ROADMAP](../ROADMAP.md), per
  [D-022](#d-022--version-ladder-and-lifespan-split));
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
- [DECISION-POLICY §5](../ENGINE.md#2-intake--resolve-the-traveler)
  extends
  [D-012](#d-012--elicitation-and-inference-policy)'s
  supersede order with the cohort layer; activation is version
  scope — cohort learning is not V1;
- [HOME](../HOME.md)'s FOUNDATION portrait and check-module term align;
  the renamed anchor (what-roam-checks) is repaired repo-wide. The
  engine-reasoning rules stay consolidated in
  [DECISION-POLICY](../ENGINE.md), per
  [D-021](#d-021--plan-synthesis-principles-re-home).
**Why:** the plug-in principle overpromised zero blast radius — the
structure holds, but rankings re-tune with every added check; the
in-app list read as closed; the personalization principle
contradicted
[D-012](#d-012--elicitation-and-inference-policy)'s
inferred provenance and blocked the cohort layer; "five" in the
header made the count part of the identity; and the pre-trip clause
duplicated a [ROADMAP](../ROADMAP.md) refusal against
[D-022](#d-022--version-ladder-and-lifespan-split) —
lifespan belongs to version scope, not identity.
**Alternatives rejected:** keep the header and add only an
extensibility sentence (the count stays in the anchor — the identity
keeps saying five); single-source personalization ("whatever the
traveler supplies") — already false per
[D-012](#d-012--elicitation-and-inference-policy),
which infers fields with provenance.
**Affects:** [FOUNDATION](../FOUNDATION.md) ·
[DECISION-POLICY §5](../ENGINE.md#2-intake--resolve-the-traveler) ·
[HOME](../HOME.md) (FOUNDATION portrait · check-module term) · corpus
links to the renamed anchor:
[DECISION-POLICY §3](../ENGINE.md#7-render--honest-pixels) ·
[HOME §Terms](../HOME.md#terms).

## D-026 — ROADMAP recut

In full: 2026-07 — ROADMAP recut — plain-language V1, completion criteria, per-family vetting outputs (upholds D-020, D-022)

**Decision:** recut [ROADMAP](../ROADMAP.md) into a plain-language read:
- the depth paragraph now opens by saying the plan is living, never
  a promise — it changes whenever reality disagrees, every change
  landing as a D-number via [decide](../skills/decide.md) — before
  naming the rolling wave
  ([D-022](#d-022--version-ladder-and-lifespan-split));
- "Done when" → "Completion criteria" in the versions table and all
  eight stage lines; the spec-level term "Done-means" is a different
  artifact and keeps its name;
- the V1 block opens with the goal in prose (what a visitor watches
  Roam do), and the "Active stages" lines die — they stored status,
  against the derivation law;
- T3–T6 each write their own `SOURCES-<family>.md` file so four [P]
  lanes never share a file
  ([D-020](#d-020--parallel-lanes-v2));
  T7 consolidates the four into [SOURCES.md](../data/SOURCES.md) and
  deletes them;
- ticked tasks link their [history/](history/README.md) stories;
- [HOME](../HOME.md) follows the rename (ROADMAP portrait, the
  version/stage/task term, the Roadmap-manual notation bullet).
**Why:** the rolling-wave paragraph was shorthand; the V1 block
buried the goal under anchors; "Active stages" stored status against
the derivation law; T3–T6 "same outputs" implied four [P] lanes
writing one shared file, contradicting
[D-020](#d-020--parallel-lanes-v2);
"Done when" collided with the spec term "Done-means".
**Alternatives rejected:** sequential T3–T6 (serializes S1's liftoff
batch, amends
[D-020](#d-020--parallel-lanes-v2));
a shared SOURCES.md with per-family sections (the merge-conflict
risk [D-020](#d-020--parallel-lanes-v2)
exists to eliminate).
**Affects:** [ROADMAP](../ROADMAP.md) · [HOME](../HOME.md) (term rename) ·
this entry.

## D-027 — LAWS polish

In full: 2026-07 — LAWS polish — glossed lane law, provenance re-homed to consolidations, ship syncs with main before the weld

**Decision:** [LAWS](../LAWS.md) drops its four inline D-citations
(bench-first, micro-PR, pacing, stack) — the weave rule stands for
relationships and retroactivity, but provenance is the
consolidations' job, and LAWS' header now names the three rationale
homes ([PROJECT-POLICY](../SETUP.md) ·
[DECISION-POLICY](../ENGINE.md) · [DECISIONS](DECISIONS.md)).
The bench-first bullet and the seven-point lane law carry one-line
whys; the baton law states what the baton IS.
[PROJECT-POLICY §Workshop choices](../SETUP.md)
gains the pacing law — the one LAWS rule not yet consolidated — with
its [D-009](#d-009--pacing-law)
provenance. [ship](../skills/ship.md)'s Preflight now merges current
origin/main into the branch before gating (merge, never rebase), so
what is tested is exactly what main will contain after the weld;
[LAWS §Workflow](../LAWS.md#workflow-non-negotiable) and
[HOME](../HOME.md)'s ship portrait carry the same step.
**Why:** mid-sentence citation anchors hurt the constitution's
readability for a solo non-CS founder; a branch born days ago passes
tests against a stale main — the merged combination was never tested
anywhere; laws that carry their why are followed better.
**Alternatives rejected:** trailing citations (still noise; the
consolidations already exist for this); rebase instead of merge
(rewrites pushed history).
**Affects:** [LAWS](../LAWS.md) · [PROJECT-POLICY](../SETUP.md) ·
[ship](../skills/ship.md) · [HOME](../HOME.md) (ship portrait) · this
entry.

## D-028 — Consolidation recut, DECISION-POLICY becomes ENGINE

In full: 2026-07 — Consolidation recut — DECISION-POLICY → ENGINE, brain-skeleton form; PROJECT-POLICY house style; OPEN register grows 6–9 (upholds D-021; extends the D-021 consolidation)

**Decision:** the engine consolidation is renamed
[ENGINE.md](../ENGINE.md) and reshaped from topic-prose into the
pipeline form (Intake → Acquire → Judge → Aggregate → Synthesize →
Render → Gate → Re-validate → Learn + Invariants); undecided
calculations become numbered OPEN slots in an
[Open register](../ENGINE.md#12-open-register) — filling one requires a
D-number; four founder-raised gaps join the register (aggregation
law · fact-drift re-validation · learning loop · eval-set gate); one
invariant makes the explainability boundary explicit;
[PROJECT-POLICY](../SETUP.md) adopts the shared house style:
one-line italic gloss per section, bold handle per rule, citations
consolidated into per-section Sources lines.
**Why:** the founder read "Decision policy" as a policy for
decisions in general — the name misled its own author; prose-form
hid the pipeline the file actually describes; undecided slots must
be loud, not implied (the
[reliability law](../FOUNDATION.md#the-reliability-law) applied to
ourselves).
**Alternatives rejected:** keep the name + a disambiguating sentence
(the name keeps whispering wrong); two sequential PRs (intermediate
broken-link state, double ritual overhead for one theme); putting
the four gaps into rules sections (they are undecided — register
only).
**Affects:** [ENGINE](../ENGINE.md) (né DECISION-POLICY) ·
[PROJECT-POLICY](../SETUP.md) · [LAWS](../LAWS.md) rationale
line · [HOME](../HOME.md) (table row, portrait, terms) ·
[ROADMAP](../ROADMAP.md) S3/S5 binding-requirement links ·
[FACTS](../data/FACTS.md) · [SOURCES](../data/SOURCES.md) ·
[decide](../skills/decide.md) skill · [DASHBOARD](../DASHBOARD.md) (one
link) · [DECISIONS](DECISIONS.md) / [history/](history/README.md) /
finalized [specs](specs/README.md) (link targets only) · this entry.

## D-029 — Corpus writing laws

In full: 2026-07 — Corpus writing laws — readability-first; links below prose

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
this entry demonstrates the format in [SETUP.md](../SETUP.md) · this
entry.

## D-030 — Setup consolidation

In full: 2026-07 — Setup consolidation — SETUP.md; equipment-plan and PROJECT-POLICY retired (extends D-024's retirement pattern; amends the D-021 consolidation split)

**Decision:** [SETUP.md](../SETUP.md) is the single listing-style
inventory (stack · once-and-done repo-side · once-and-done cloud ·
per-machine · staged-by-stage; status lives on the DASHBOARD, never
here). equipment-plan retires — content re-homed: Design staging →
DESIGN-KICKOFF; stack/plugins/MCPs/staged tooling and the subagent
plan → SETUP §Staged; runtime-tool note → SETUP §Staged (S3.T1
line). PROJECT-POLICY retires — Stack + the
[D-005](#d-005--stack-re-trial-upholds-d-001)
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
**Affects:** [SETUP.md](../SETUP.md) (new) · equipment-plan skill +
stub (deleted) · PROJECT-POLICY (deleted) ·
[DESIGN-KICKOFF](../DESIGN-KICKOFF.md) ·
[machine-setup](../skills/machine-setup.md) · [LAWS](../LAWS.md) ·
[HOME](../HOME.md) · frozen-link retargets · this entry.

## D-031 — Stale-branch hygiene

In full: 2026-07 — Stale-branch hygiene — gone-guard on the session-end net; welded-elsewhere locals auto-removed at session start

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
`.claude/hooks/session-start.mjs`) · [pickup](../skills/pickup.md) ·
this entry.

## D-032 — Fleet continuity

In full: 2026-07 — Fleet continuity — handoff parks every local lane; liftoff respawns parked benches; wake-lock parks every outcome (extends the D-020/D-023 lane law; upholds D-009)

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
**Affects:** [handoff](../skills/handoff.md) ·
[liftoff](../skills/liftoff.md) ·
[parallel-lanes](../skills/parallel-lanes.md) ·
[LAWS §Parallel lanes & cloud](../LAWS.md#parallel-lanes--cloud) ·
this entry.

## D-033 — TELEMETRY folds into FACTS

In full: 2026-07 — TELEMETRY folds into FACTS (Appendix C); file retired (upholds D-014; extends the D-030 retirement pattern)

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
[FACTS Appendix C](../data/FACTS.md#appendix-c--telemetry-vocabulary-what-the-app-records)
· data/TELEMETRY.md (deleted) ·
[ENGINE §10](../ENGINE.md#10-learn--the-loop-back) ·
[ROADMAP](../ROADMAP.md) · [HOME](../HOME.md) ·
[SCHEMA](../data/SCHEMA.md) · frozen link repairs
([D-014](DECISIONS.md#d-014--telemetry-posture)
entry ·
[telemetry-inventory](history/product/definition/telemetry-inventory.md)) ·
this entry.

## D-034 — History quadrants

In full: 2026-07 — History quadrants — product×workshop · definition×implementation; memory TEMPLATE owns format + Status vocabulary (extends D-024's narrative layer and D-032's states)

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
[ship](../skills/ship.md) · [handoff](../skills/handoff.md) ·
[TEMPLATE](../memory/TEMPLATE.md) · link ripple across
[ROADMAP](../ROADMAP.md) · [DECISIONS](DECISIONS.md) ·
[DASHBOARD](../DASHBOARD.md) · specs · this entry.

## D-035 — State surfaces v2

In full: 2026-07 — State surfaces v2 — Sessions table with a type column; sentence-first Needs-you; verbatim chat titles; welds stamp time and write the ledger; handoff §4 is the single board spec (amends D-024's surface; extends D-029)

**Decision:** the board's sections, order, and rendering rules are
exactly [handoff §4](../skills/handoff.md); pickup renders deltas and
points at the board instead of mirroring it; ship's weld stamps
shipped: <date HH:MM> and appends one
[ledger](history/README.md#the-ledger) line; legends live in
[HOME §Reading the board](../HOME.md#reading-the-board);
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
**Affects:** [handoff](../skills/handoff.md) ·
[pickup](../skills/pickup.md) · [liftoff](../skills/liftoff.md) ·
[ship](../skills/ship.md) · [history/README](history/README.md) ·
[HOME](../HOME.md) · this entry.

## D-036 — Information routing, one home per class

In full: 2026-07 — Information routing — one home per class, append vs upsert; HOME carries the table; Sessions anchor stabilized

**Decision:** every information class has exactly ONE home; new
information APPENDS via that home's named vehicle, changed
information UPSERTS in place via the same writer — never a second
copy (the weave links to a fact's home, never duplicates it);
[HOME](../HOME.md#where-information-goes) renders the table; the
board's Sessions header stays plain (counts live in the glance
line) so its anchor survives every repaint.
**Why:** the founder asked twice where appends belong — the router
existed in [LAWS](../LAWS.md) but no glanceable rendering did; #111
proved header-borne counts orphan inbound anchors.
**Alternatives rejected:** routing table in LAWS (bloats the
every-session load; LAWS gets the one binding clause next block);
counts in the Sessions header (unstable anchor, proven).
**Affects:** [HOME](../HOME.md) · [handoff §4](../skills/handoff.md) ·
this entry.

## D-037 — Pickup speaks the founder's shape

In full: 2026-07 — Pickup speaks the founder's shape — exit table · Recent Summary · Pending Issues; LAWS binds the routing law (completes D-036)

**Decision:** [LAWS §Knowledge & tracking](../LAWS.md#knowledge--tracking)
gains the one-home clause pointing at
[HOME's table](../HOME.md#where-information-goes); pickup §5 renders
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
**Affects:** [LAWS](../LAWS.md) · [pickup](../skills/pickup.md) ·
this entry.

## D-038 — CI is the arbiter

In full: 2026-07 — CI is the arbiter — Actions-green required at every gate; local gate mirrors all six CI steps; D-anchors born resolving (upholds D-027)

**Decision:** THE GATE, every lane's ready-flip, and LAWS' "done"
all require the pushed commit's GitHub Actions run to be green —
local green never suffices; the preflight gate becomes the full CI
mirror (lint · format:check · check:links · tests · build);
[decide](../skills/decide.md) runs check:links before an entry's first
push, so a D-number heading and every link to it are born in the
same commit; local-green + CI-red is a STOP-and-investigate finding,
never a merge. Machine-enforced (founder said yes, 2026-07-14): main
is branch-protected — the `checks` run is a required status check
with enforce_admins on, so red is unmergeable by GitHub itself. This
widens [D-027](#d-027--laws-polish)'s
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
**Affects:** [ship §1 · §THE GATE · §7](../skills/ship.md) ·
[handoff §5](../skills/handoff.md) ·
[parallel-lanes §When a lane finishes](../skills/parallel-lanes.md) ·
[decide §1](../skills/decide.md) ·
[LAWS §Workflow](../LAWS.md#workflow-non-negotiable) ·
[SETUP §Once and done](../SETUP.md#once-and-done--cloud-accounts) ·
this entry.

## D-039 — Recall, answers from files

In full: 2026-07 — Recall — questions answered from files, never from memory (the D-036 routing table's read mirror; model-invoked at discretion)

**Decision:** a seventh skill, read-only, fired by Claude's own
judgment whenever a founder question concerns anything recorded —
past, ongoing, or future — or whenever an answer would otherwise come
from conversational memory; it classifies, opens the routed homes, and
answers sentence-first with a
[D-029](#d-029--corpus-writing-laws)
Sources block; not-found means "not recorded" plus where it would
live — never an invention; git outranks the board and the answer says
so on conflict.
**Why:** the founder asked one already-answered question three times
in a day — the corpus had it, retrieval had friction; writes were
routed by
[D-036](#d-036--information-routing-one-home-per-class),
reads never were; keyword gating would under-fire.
**Alternatives rejected:** folding into [pickup](../skills/pickup.md) (a
moment, not on-demand); a search index (the routing table IS the
index); explicit-keyword triggering (founder wants discretion).
**Affects:** [the new skill](../skills/recall.md) + stub ·
[HOME](../HOME.md#equipment--environment) · this entry.

## D-040 — Handoff input inversion

In full: 2026-07 — Handoff input inversion — the leaving message carries the Web/Design paste inline; the never-skipped question is retired; a bare trigger means none (amends the two-touchpoints law's wording; upholds D-032)

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
[handoff §2](../skills/handoff.md#2--the-inline-webdesign-paste-full-only)
· [LAWS §The two touchpoints](../LAWS.md#the-three-touchpoints) ·
[HOME](../HOME.md) (manual entry · retention row · handoff walkthrough) ·
[WEB-INSTRUCTIONS](../WEB-INSTRUCTIONS.md) ·
[D-032](#d-032--fleet-continuity)
· this entry.

## D-041 — Delegation architecture

In full: 2026-07 — Delegation architecture — the away-mode chooser, go-remote tether, idle-wait, label-spawned cloud (amends D-032's wake-lock and the dispatch law; upholds the baton law and D-009)

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
([baton law](../LAWS.md#parallel-lanes--cloud)); a zero-secret label is
safer than API wiring and is drivable from the phone; idle-wait costs
nothing where a phone can reach the lane, so parking there was pure
loss.
**Alternatives rejected:** a third leaving ritual (a posture suffices;
the baton law survives unamended); `/fire` API wiring as the primary
route (a bearer token on two machines vs a zero-secret label — and the
label is also phone-drivable); keeping park-on-block everywhere (idle
costs nothing where a phone can reach, and
[D-032](#d-032--fleet-continuity)'s
recording guarantee is preserved).
**Affects:** [LAWS §Workflow](../LAWS.md#workflow-non-negotiable) ·
[LAWS §Parallel lanes & cloud](../LAWS.md#parallel-lanes--cloud) ·
[parallel-lanes](../skills/parallel-lanes.md) ·
[liftoff](../skills/liftoff.md) · [go-remote](../skills/go-remote.md) (new)
· [machine-setup](../skills/machine-setup.md) · [SETUP](../SETUP.md) ·
[HOME §Delegation](../HOME.md#delegation--the-away-mode-chooser) ·
[D-032](#d-032--fleet-continuity)
·
[D-009](#d-009--pacing-law)
· this entry.

## D-042 — Lane liveness

In full: 2026-07 — Lane liveness — derive live-vs-reclaimable from the commit heartbeat; read it at claim-check and session-start cleanup so a live lane is never adopted or pruned (amends the claim-check clause and pickup §3; upholds the wake-lock and seat-invariance)

**Decision:** "commits are the heartbeat"
([LAWS §Task anatomy](../LAWS.md#task-anatomy)) is now load-bearing. A
bench or worktree is LIVE — never adopted, never secured or pruned —
when its memory Status is non-terminal and its branch's last commit
falls within the staleness window (value settled in
[parallel-lanes §Canary](../skills/parallel-lanes.md#canary-handshake-both-sides),
starting at ~30 minutes, tunable). It is RECLAIMABLE when its Status
is terminal (parked · failed · held · shipped · superseded) — a
terminal word outranks a fresh heartbeat, because the stamp commit IS
the parking act and the wake-lock guarantees no worker survives a
Status it does not own — OR when the branch is silent past the
window. Genuine doubt → announce what you see and ask. The rule is
read at the two previously blind sites: the claim check
([LAWS §Workflow](../LAWS.md#workflow-non-negotiable)) and
[pickup §3](../skills/pickup.md)'s worktree sweep, fed by a
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
**Affects:** [LAWS §Workflow](../LAWS.md#workflow-non-negotiable) ·
[parallel-lanes §Liveness](../skills/parallel-lanes.md#liveness--live-vs-reclaimable)
(new) ·
[parallel-lanes §Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)
·
[parallel-lanes §Respawn](../skills/parallel-lanes.md#respawn-on-an-existing-bench-liftoff-adopt)
· [pickup §3](../skills/pickup.md) · the session-start hook
(`.claude/hooks/session-start.mjs`) ·
[TEMPLATE — the Status vocabulary](../memory/TEMPLATE.md) ·
[HOME §Terms](../HOME.md#terms) ·
[HOME §Lanes](../HOME.md#lanes-local--cloud) · [IDEAS](../IDEAS.md) (the
double-dispatch diagnostic) ·
[D-032](#d-032--fleet-continuity)
(the wake-lock upheld) · this entry.

## D-043 — Cloud ignition and away-command redesign

In full: 2026-07 — Cloud ignition & away-command redesign — route ladder v2: ready-flip-then-label is the recipe of record, api-ignition and the cloud clerk staged, the Claude app the single away surface (amends D-041; upholds the lane law and the wake-lock)

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
[parallel-lanes §Canary](../skills/parallel-lanes.md#canary-handshake-both-sides))
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
attest, parked in [IDEAS](../IDEAS.md)).
**Affects:**
[parallel-lanes §Cloud spawn](../skills/parallel-lanes.md#cloud-spawn--route-ladder)
(recipe of record + the filled maiden checklist) ·
[parallel-lanes §Answering a lane](../skills/parallel-lanes.md#answering-a-lane-the-mail-slot)
(new) · [SETUP §Staged](../SETUP.md#staged--turns-on-when-its-stage-opens)
(api-ignition · cloud-clerk) ·
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
(the run-history sentence) · [IDEAS](../IDEAS.md) (the away-redesign
idea lines + the double-dispatch resolution evidence) ·
[D-041](#d-041--delegation-architecture)
(the route ladder amended) · this entry.

## D-044 — The pre-GATE critic goes live

In full: 2026-07 — The pre-GATE critic goes live — ship's gate opens by invoking the reviewer subagent, verdicts advisory riding with the summary (turns on the staged reviewer; upholds D-038 and the reviewer frame)

**Decision:** every ship now runs the
[reviewer subagent](history/workshop/mechanism/reviewer-subagent.md)
as THE GATE's first act ([ship §6](../skills/ship.md#6--the-gate)): the
critic reads the branch's diff against its spec, the laws, and the
memory diary, and its structured verdict rides to the founder
VERBATIM alongside the plain summary. The verdict is advisory — a
finding never halts ship by itself; the founder weighs it at the
gate. The reviewer moves from
[SETUP §Staged](../SETUP.md#staged--turns-on-when-its-stage-opens) to
[SETUP §Once and done — repo-side](../SETUP.md#once-and-done--repo-side-travels-with-git):
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
reversible by a later [decide](../skills/decide.md)) · leaving
invocation discretionary (guarantees drift — the critic would run
only when remembered).
**Affects:** [ship §6](../skills/ship.md#6--the-gate) (the critic
invocation) ·
[SETUP §Once and done — repo-side](../SETUP.md#once-and-done--repo-side-travels-with-git)
(the reviewer filed live) ·
[SETUP §Staged](../SETUP.md#staged--turns-on-when-its-stage-opens)
(the line retired) · [IDEAS](../IDEAS.md) (the 2026-07-17 wiring line
cleared) ·
[D-038](#d-038--ci-is-the-arbiter)
(the arbiter upheld — the critic adds eyes, not a gate) · this
entry.

## D-045 — Hands doctrine

In full: 2026-07 — Hands doctrine: solo · subagents · agent team · lanes — the litmus is one-bench-many-hands vs many-benches vs read-only (upholds D-020 and D-041)

**Decision:** the founder's choose-your-hands rule is now doctrine,
filed verbatim at
[SETUP §Models & effort](../SETUP.md#once-and-done--cloud-accounts):
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
[D-044](#d-044--the-pre-gate-critic-goes-live)
precedent.
**Affects:**
[SETUP §Models & effort](../SETUP.md#once-and-done--cloud-accounts)
(the Hands passage, doctrine verbatim) ·
[parallel-lanes §Vehicles](../skills/parallel-lanes.md#vehicles) (the
pointer line) · this entry and its task memory.

## D-046 — Flight Cockpit, the control tower online

In full: 2026-07 — Flight Cockpit — the cockpit is the control tower online: full-authorship cloud command session, the no-solo-approval law, liftoff auto-fires the cockpit, CC-direct surface doctrine, clerk retirement staged, Remote Control demoted to backstop, the cockpit/control-tower rename (amends D-041 and D-043; upholds the lane law and the wake-lock)

**Decision:** the away command architecture becomes ONE surface
with full authorship. By clause:
(1) THE COCKPIT — the control tower online: a cloud command
session with FULL authorship under the laws — authors benches,
births lanes via labels, external-reviews lane PRs, merges on the
founder's word, repaints the board, appends
[IDEAS](../IDEAS.md) lines, answers process questions by derivation
(clones at birth; never from memory). Bounded flight lifetime:
born at liftoff's fire or a founder summon; landing = final
repaint → park → founder archives → verify its branch stays dead
(the
[parallel-lanes confirmed clause](../skills/parallel-lanes.md#cloud-spawn--route-ladder)).
Turn-end reports are decision-shaped — what happened · what needs
your word · options + recommendation — and each turn-end message
doubles as the app push (the N-verified channel,
[clerk-notify](specs/clerk-notify.md)). It inherits the lane
mail-slot rules, never shares a file with a lane it spawned,
states cap arithmetic when spawning, and throttles per the
standing order under limits. Charter master:
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts).
The cockpit holds the baton for its flight — liftoff closes the
ground session before the fire, so the one-writer invariant
holds; supersession and the wake-lock backstop any overlap.
(2) NO-SOLO-APPROVAL, now law
([LAWS §Workflow](../LAWS.md#workflow-non-negotiable)): no diff
merges on its author's own approval — independent review first,
then the founder's word. Lane-authored diffs: any non-author
session's review (cockpit or control tower) + the founder's word,
lawful from anywhere. Self-authored diffs (tower- or
cockpit-authored): external Web review before the word.
Precedent: [#175](https://github.com/wsher0901/roam/pull/175) —
this generalizes the standing external-review practice.
(3) THE LIFTOFF FIRE
([liftoff §6](../skills/liftoff.md#6--ledger-handoff--fire-the-cockpit)):
the away chooser's cloud branch now ends by composing the flight
plan FROM THE BOARD at that moment (in flight · owed · needs the
founder's word) and firing the cockpit routine with it as the
payload (`npm run fire:cockpit`) — the founder never opens the
routines page. One cap-run per outing, accepted (extends the
A4-recorded trade,
[clerk-autospawn](specs/clerk-autospawn.md)). `fire:clerk`
remains the manual fallback until the staged retirement.
(4) CC-DIRECT SURFACE DOCTRINE: Claude Code direct is the
standard working mode at both seats — discuss, decide, author,
bookkeep in-session; the paste-block relay retires as a
REQUIREMENT and remains a tool when the founder chooses Web as a
thinking room; Web's one mandatory job is the external review of
self-authored diffs (clause 2). Manual:
[HOME §The daily loop](../HOME.md#a-day-in-the-workshop); the loop text in
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts).
(5) CLERK RETIREMENT, staged — executed at the cockpit maiden
drill's closeout, when the maiden greens: archive the clerk
session (+ the branch tripwire), delete its routine, retire
`fire:clerk`, annotate the clerk's SETUP sections (verified
record preserved; superseded by this entry). Until then the clerk
stays armed; this bench only annotates its sections "retirement
staged (D-046)".
(6) REMOTE CONTROL demoted to backstop
([SETUP §Per machine](../SETUP.md#per-machine-procedure-machine-setup-skill)):
toggles stay installed on both machines, never the plan;
machine-off is the standard away posture. (The founder's ②a,
confirmed 2026-07-20 at the
[shakedown-audit](specs/shakedown-audit.md) gate.)
(7) VOCABULARY RENAME — cockpit = the cloud command session (a
control tower, online); control tower = the ground Claude Code
session (called "cockpit" before this entry). Renamed in LIVING
doctrine only — LAWS, HOME, SETUP, docs/skills/, the memory
TEMPLATE; docs/history/ and prior DECISIONS entries stay AS
WRITTEN (immutable record;
[HOME §Terms](../HOME.md#terms) disambiguates old texts). Every
renamed line is listed in the bench PR's description.
(8) THE SUMMON BUTTON, staged
([SETUP §Staged](../SETUP.md#staged--turns-on-when-its-stage-opens)):
a workflow_dispatch GitHub Action holding the fire call, token in
Actions secrets — two taps in the GitHub mobile app summon a
cockpit with no desk. Adopt at first need, verify-before-rely.
**Why:** the Shakedown Flight's audit recorded the lived
evidence: the founder could not reconstruct where-did-what across
Friday's three surfaces (the attestation haze,
[shakedown-audit](history/workshop/mechanism/shakedown-audit.md))
— three narrow surfaces (clerk · Remote Control · GitHub app)
each held a sliver of command, and none held authorship. One
surface with full authorship removes the haze: everything the
founder does away from the desk happens in one session that can
actually act, reports decision-shaped, and leaves the ordinary
paper trail. No-solo-approval had been practice since the first
external review; [#175](https://github.com/wsher0901/roam/pull/175)
proved it load-bearing (the external review caught the
resurrection incident a self-check had missed) — a rule that
catches what its author cannot see must be law, not habit.
**Alternatives rejected:** ②b — full Remote Control retirement
(the founder chose backstop: toggles are cheap insurance; the
posture change, not the uninstall, is the decision) · a
read-only cockpit (a clerk v2 — authorship is exactly what the
haze evidence indicts; answering without acting keeps three
surfaces alive) · keeping the clerk beside the cockpit
permanently (two overlapping cloud surfaces re-create the haze;
the clerk's verified record is preserved and its duties fold
into the cockpit charter) · renaming inside history/ and old
DECISIONS entries (the record is immutable; the vocabulary entry
disambiguates instead).
**Affects:** [LAWS §Workflow](../LAWS.md#workflow-non-negotiable)
(the no-solo-approval law + the rename) ·
[LAWS §Parallel lanes & cloud](../LAWS.md#parallel-lanes--cloud)
(the rename) · [HOME](../HOME.md) (vocabulary entries · the surface
doctrine in the manual passages · the rename) ·
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
(the cockpit charter master + routine recipe · the clerk
sections' staged-retirement annotations · the surface-doctrine
loop text) ·
[SETUP §Per machine](../SETUP.md#per-machine-procedure-machine-setup-skill)
(Remote Control backstop) ·
[SETUP §Staged](../SETUP.md#staged--turns-on-when-its-stage-opens)
(the summon button) ·
[liftoff](../skills/liftoff.md) (the cockpit fire) ·
[parallel-lanes](../skills/parallel-lanes.md) ·
[handoff](../skills/handoff.md) · [pickup](../skills/pickup.md) ·
[ship](../skills/ship.md) · [go-remote](../skills/go-remote.md) ·
[machine-setup](../skills/machine-setup.md) ·
[memory TEMPLATE](../memory/TEMPLATE.md) (the rename) ·
`scripts/fire.mjs` + `package.json` + `.env.example` (the fire
vehicle generalized) ·
[D-041](#d-041--delegation-architecture)
(the away chooser amended: the cloud branch fires the cockpit;
go-remote demoted to backstop posture) ·
[D-043](#d-043--cloud-ignition-and-away-command-redesign)
(the away surface amended: the clerk superseded-on-maiden by the
cockpit) · this entry.

## D-047 — Cloud-born cockpit

In full: 2026-07 — Cloud-born cockpit — the cockpit's birth vehicle becomes claude --cloud, list-native on every device; the automated hidden-console birth is liftoff's primary rung; the routine fire demotes to fallback + summon-button engine (amends D-046 clause 3; upholds the lane law)

**Decision:** the cockpit's birth vehicle becomes `claude --cloud`
— list-native on every device — and the routine fire
(`fire:cockpit` / `scripts/fire.mjs`) drops to the fallback rungs,
remaining the engine of the staged summon button. By clause:
(1) THE PRIMARY BIRTH
([liftoff §6](../skills/liftoff.md#6--ledger-handoff--fire-the-cockpit)):
liftoff births the cockpit via the automated hidden-console
`--cloud` birth — a hidden console hosting a winpty pty
(Start-Process, output captured to file), because `--cloud`
demands a real TTY and refuses every piped route. The birth
prompt = the cockpit charter master from
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
VERBATIM, then the board-derived flight plan. Sessions born this
way join the mobile app's Code-tab GENERAL session list — the
command surface is list-native (gate 0c, the founder's phone,
verbatim in [the memory](history/workshop/mechanism/cloud-born-cockpit.md); moved to
history/ at ship).
(2) THE RUNG LADDER, evidence order (decided by gate 0b's probe):
1 the automated hidden-console `--cloud` birth · 2
compose-and-hand (the ritual composes the full command; the
founder pastes it into a plain terminal — nothing piped) · 3
`fire:cockpit` (the routine fire — list-invisible, so never the
plan) · 4 the manual charter paste, retained verbatim.
(3) THE STANDING FIRST LINE: every composed flight plan opens
with the clone-provenance directive — "Before any act: verify
your clone's HEAD equals origin/main's tip and your workspace
contains nothing origin lacks; mismatch = report verbatim and
STOP." The one-time probe proved the primary path exists; this
line polices every flight after, so the documented bundle
auto-fallback (or any seeded ghost) dies at birth.
(4) THE SUMMON BUTTON keeps its engine: the cockpit routine and
`fire.mjs` stay armed as rung 3 and the staged button's motor
([D-046](#d-046--flight-cockpit-the-control-tower-online)
clause 8) — the routine's SETUP section is annotated, not
deleted; the box re-save rides the founder's manual acts.
**Why:** maiden flights 1–2
([#177](https://github.com/wsher0901/roam/pull/177) ·
[#180](https://github.com/wsher0901/roam/pull/180)) proved the
cockpit works but routine-born sessions never join the mobile
GENERAL session list — the founder commands from the phone, so
the birth vehicle must be list-native. Three STOP-gates demanded
evidence over docs, because the vehicle's ancestor (`--remote`)
bundle-seeded sandboxes and destroyed batch-1 T3+T5 at the
[D-020](#d-020--parallel-lanes-v2)
turn: 0a — origin heads = main only, no cockpit in flight; 0b —
the probe session cloned origin main's tip (`5d1d4ea`) with the
unpushed marker commit absent from its history and pushed
`chore/cloud-probe` — clone-from-GitHub and branch-create proven
by evidence, the bundle ghost dead; 0c — the founder's phone,
verbatim: the probe session appeared in the GENERAL session list
"right off the bat … no link-open needed." Gate outputs verbatim:
[the memory](history/workshop/mechanism/cloud-born-cockpit.md).
**Alternatives rejected:** keeping the routine fire primary (the
maiden evidence indicts it: list-invisible sessions are exactly
the command haze D-046 exists to remove) · compose-and-hand as
the primary rung (gate 0b's attempt B proved the hidden-console
birth automates — the founder should not paste a command every
outing when a machine can) · retiring `fire.mjs` outright (it is
the staged summon button's engine, D-046 clause 8 — demote, never
delete) · trusting the docs' clone-primary claim without a probe
(the bundle is a DOCUMENTED auto-fallback, forcible by env var;
the D-020 scar demands evidence, and the standing first line
polices every flight after).
**Affects:**
[liftoff §6](../skills/liftoff.md#6--ledger-handoff--fire-the-cockpit)
(primary birth · rung ladder · the standing first line) ·
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
(the `--cloud` birth recipe · the routine's fallback annotation ·
the charter's born-at clause · the `gh` environment note) ·
[D-046](#d-046--flight-cockpit-the-control-tower-online)
clause 3 (amended: the fire is no longer the birth vehicle) ·
this entry.

## D-048 — Cockpit resilience

In full: 2026-07 — Cockpit resilience — the five-rung connector ladder; the summon workflow live on workflow_dispatch and a push to ops/summon; explicit supersession with tombstone and refusal guard; and the phone bootstrap; merge-on-signal and a cloud-environment token both REJECTED (upholds no-solo-approval and D-047)

**Decision:** a cockpit survives, announces, and replaces its own
GitHub connector loss, by a ladder that reaches OUTSIDE the
session. By clause:
(1) THE FIVE-RUNG LADDER, written into the cockpit charter master
([SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)):
R0 PREVENT — a watching cockpit polls on a cadence (fetch origin ·
re-read the lane's Status · check the PR), reporting only on
change, instead of sleeping on one long monitor; the cadence is a
dial in minutes and the trade — usage and context — is stated in
the charter, because this is a mitigation, not a guarantee. R1
DETECT — one cheap connector probe immediately before ANY command
act, reported in the same turn; never a command act on an
unverified connector. R2 REPAIR IN PLACE — retry once (the client
auto-reconnects with backoff, about five attempts, before marking
a server failed), then attempt in-session revival from the shell
(`claude mcp list` and whatever reconnect subcommand the installed
version exposes — `claude mcp --help` first, never a guessed
flag), then, failing both, TELL THE FOUNDER in one fixed sentence
as its own whole turn. R3 DEGRADE — git-only work continues
(author, commit, push, weld); commanding pauses; nothing is lost
or redone; the surviving-acts map is cross-referenced, not
restated. R4 SELF-RESCUE — push one empty commit to `ops/summon`,
then land.
(2) THE SUMMON WORKFLOW IS LIVE — `.github/workflows/summon.yml`,
two triggers: a push to the reserved branch `ops/summon` (the
self-rescue path) and `workflow_dispatch` with one optional
`mandate` input. It runs `scripts/fire.mjs` for the cockpit target
— the verified vehicle, reused as-is and never reimplemented —
with `COCKPIT_FIRE_TOKEN` and `COCKPIT_ROUTINE_ID` from repository
secrets, writes the fire status and any returned session URL to
the run's step summary, and then deletes the `ops/summon` ref so
one push is exactly one rescue. Concurrency `summon`,
cancel-in-progress false: a second summon must never cancel a
first mid-fire. The token is never echoed. This RESOLVES the
summon button staged by
[D-046](#d-046--flight-cockpit-the-control-tower-online)
clause 8
([SETUP §Staged](../SETUP.md#staged--turns-on-when-its-stage-opens)
updated). The dispatch button is documented as present but UNUSED
BY PREFERENCE — the founder does not use the GitHub app; it costs
nothing and is never required.
(3) THE PAYLOAD IS A POINTER, never a plan: "Summoned cockpit.
Derive state from origin; the board's flight context is the
authoritative flight plan (#193). You supersede the previous
cockpit." — the board-authoritative rule from
[#193](https://github.com/wsher0901/roam/pull/193), applied to the
rescue path.
(4) SUPERSESSION MADE EXPLICIT, so the founder never commands a
dead cockpit by accident. A TOMBSTONE: a landed-and-superseded
cockpit's final message is one fixed sentence, alone, nothing
after it. A REFUSAL GUARD: on any founder message thereafter it
re-derives from origin, and if the board's seat stamp is not its
own it replies with the tombstone line and NOTHING else — no
work, no writes; this is charter rule 7's supersession made loud.
A SUCCESSOR DUTY: the replacement's first act after deriving
state is a board repaint marking the predecessor landed ·
superseded with its session URL and seating itself — the board
always names exactly one live cockpit.
(5) A SUMMONED COCKPIT IS ROUTINE-BORN and therefore
LIST-INVISIBLE — reachable by push and by its board link, not by
the phone's general session list. `--cloud`
([D-047](#d-047--cloud-born-cockpit))
therefore STAYS PRIMARY for a planned birth, because it is
list-native; the routine is the rescue vehicle, not the plan.
(6) RUNG 5, THE PHONE BOOTSTRAP — for no terminal and no GitHub, a
paste recorded verbatim in SETUP that tells the session to clone
the repo and read its own charter, so the paste carries a pointer
rather than a doctrine copy. VERIFY BEFORE RELYING: whether the
mobile app can create a session on a repo is unproven — tested at
the next drill, recorded in
[the spec](specs/cockpit-resilience.md)'s Done-means. Rung 2b's
in-session revival is unproven on the same terms.
(7) POINTER:
[D-047](#d-047--cloud-born-cockpit)'s
rung-1 mechanics are corrected by
[#193](https://github.com/wsher0901/roam/pull/193);
[liftoff §6](../skills/liftoff.md#6--ledger-handoff--fire-the-cockpit)
owns the birth shape. D-047's entry is left unannotated — this
log is append-only and amendments live in new entries (the
founder's ruling at the #193 gate).
**Why:** the first end-to-end flight
([#191](https://github.com/wsher0901/roam/pull/191)) lost its
cockpit's GitHub connector mid-flight, stranding merge, label (so:
lane spawn), PR-open, and CI-read. External research on 2026-07-22
corrected the mechanism and with it the shape of the fix: a cloud
session receives a SESSION-SCOPED GitHub MCP injection and has NO
`gh` CLI BY DESIGN, so the connector is the sole API path and
redundancy INSIDE the session is impossible — there is no second
credential to hand out. Community reports attribute mid-session
drops to idle timeout and context compression, which matches this
flight exactly: the cockpit sat idle on a long monitor while its
lane worked. Official docs put the client's own recovery at
auto-reconnect with backoff up to five attempts, after which the
server is marked failed and retried manually from `/mcp` — which
is why R2 retries once and then asks the founder for `/mcp` by
name. Since redundancy is impossible, resilience must be a ladder
that leaves the session; and since a connector-dead cockpit can
still PUSH (git, not API), the rescue trigger is a push.
**Alternatives rejected:** MERGE-ON-SIGNAL — a GitHub Action
merging on an agreed signal with the runner's own token, the
obvious permanent fix and the one
[#193](https://github.com/wsher0901/roam/pull/193) staged. Turned
down for two reasons. It restores only MERGE, while a
connector-dead cockpit still cannot spawn lanes or open benches —
so it buys the smallest fraction of lost command. Decisively:
every session pushes as the founder, so a push-triggered MERGE
cannot distinguish the baton-holder from a lane, or from a
redelivered webhook — it would break
[no-solo-approval](../LAWS.md#workflow-non-negotiable) structurally,
not by accident. A push-triggered SUMMON passes the same test,
which is why it is permitted: a stray spawn is recoverable noise
(one cap run), not a law breach · A SCOPED GITHUB TOKEN IN THE
CLOUD ENVIRONMENT — rejected for the same class of reason: every
cloud session reads that environment, lanes included, so the token
would hand lane sessions the command powers the lane law denies
them · REDUNDANT IN-SESSION CONNECTORS — impossible by design, per
the research above; the idea died on the facts, not on judgment ·
POLLING AS A GUARANTEE — R0 reduces idle time but cannot prevent
compression-driven drops, so it is written as a mitigation with
its cost stated, never as the fix.
**Residual:** on a `push` event GitHub runs the workflow
definition FROM THE PUSHED REF, so the `ref: main` checkout pin
protects the fire SCRIPT but not `summon.yml` itself — a push to
`ops/summon` carrying an edited workflow would run the edited
version. ACCEPTED: only the founder and the founder's own sessions
can push to this repo, and the worst case is one unwanted routine
fire (a cap run of recoverable noise), never repo write. Revisit
if a session is ever observed authoring workflow files.
**Affects:**
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
(the charter's connector ladder · the summon workflow entry + its
required repository secrets · the by-design environment
correction · rung 5's bootstrap paste · the dependency map's
recovery rung and its merge-on-signal reversal) ·
[SETUP §Staged](../SETUP.md#staged--turns-on-when-its-stage-opens)
(the summon button resolves) ·
[liftoff §6](../skills/liftoff.md#6--ledger-handoff--fire-the-cockpit)
(the in-flight ladder cross-reference) ·
`.github/workflows/summon.yml` (new) ·
[D-046](#d-046--flight-cockpit-the-control-tower-online)
clause 8 (the staged button resolves) ·
[D-047](#d-047--cloud-born-cockpit)
(upheld: `--cloud` stays primary; the routine is the rescue
vehicle) · this entry.

## D-049 — gh second path

In full: 2026-07 — gh second path — gh api REST through the GitHub proxy is the cockpit's second API path; a connector flap stops costing command; R2 gains the automatic gh rung; self-ID by session env (amends D-048, corrects the #193 API map, upholds D-047 and verify-before-rely)

**Decision:** the cockpit has a SECOND API path — `gh` through the
GitHub proxy, REST-shaped — and a connector flap stops costing
command. By clause:
(1) THE SECOND PATH IS REAL AND REST-SHAPED, adopted on live
evidence, not docs (the probe of 2026-07-23,
[#207](https://github.com/wsher0901/roam/pull/207), plus the
founder-witnessed REST read): `gh` 2.45.0 installs from the
UBUNTU ARCHIVE (allowlisted) via the cloud environment's setup
script — `apt update || true && apt install -y gh || true` — and
authenticates AUTOMATICALLY through the proxy: `GH_TOKEN` is the
literal 14-character placeholder `proxy-injected`, and the proxy
substitutes real credentials in transit. `gh api` REST works
repo-scoped: `gh api user` answered the authenticated login;
`gh api repos/wsher0901/roam/pulls` answered this repo's open PR
(founder-witnessed, 2026-07-23). Porcelain riding GraphQL is
PROXY-BLOCKED: `gh pr list` 403s against a pinned set of
PR-review operations, and the proxy's own message points to REST.
The second path is therefore written REST-SHAPED everywhere: the
path is `gh api`, never bare porcelain.
(2) WHAT STAYS TRUE: the raw token is a placeholder — a script
reading `GH_TOKEN`/`GITHUB_TOKEN` directly still 401s; only
gh-through-proxy works. The attached-repo boundary holds: a
foreign repo answers a scoped 403 naming `add_repo`. And
permission classifiers treat `GH_TOKEN` as a SECRET — any gh
probe is an API READ (`gh api user` or equivalent), never an
env-var echo, which the classifier lawfully blocks.
(3) THE API MAP IS CORRECTED: merge · label · PR-open · CI-read
each now have TWO paths — the MCP connector, and `gh api` REST
through the proxy. A single connector flap no longer demotes a
cockpit from commander to author; only BOTH paths dead do.
(4) R2 GAINS THE AUTOMATIC gh RUNG, between the MCP retry and
the shell revival: on MCP failure, retry the SAME act via
`gh api`; if it succeeds, command CONTINUES — report the flap in
the same turn and carry on. The founder-facing CONNECTOR DOWN
message and the self-rescue drop one rung deeper.
(5) SELF-ID BY SESSION ENV: successor-duty and board seating use
the documented self-URL —
`https://claude.ai/code/${CLAUDE_CODE_REMOTE_SESSION_ID/#cse_/session_}`
— replacing console-buffer scraping wherever a session states its
OWN url. (The tower reading ANOTHER session's birth output over
`CONOUT$` is untouched — that is D-047's recipe for a session it
cannot ask.) The automatic `Claude-Session:` git trailer (CLI
v2.1.179+) is noted in SETUP as the free audit link from any
commit back to its authoring session.
**Why — the honest three-revision history, kept because each
revision was once written as certain:** FIRST reading
([#193](https://github.com/wsher0901/roam/pull/193)): the `gh`
install is EGRESS-BLOCKED — the `cli.github.com` 403 failed the
whole setup script with exit 100, so "the setup script must not
attempt a gh install." SECOND reading
([D-048](#d-048--cockpit-resilience),
sourced from a community report): no `gh` BY DESIGN, the MCP
connector the SOLE API path, redundancy in-session impossible.
THIRD reading (the official docs, then the probe): installable
AND proxy-authenticated — the earlier failure was the WRONG APT
SOURCE, not a design wall; the Ubuntu archive is allowlisted
where `cli.github.com` is egress-blocked. The correction rode
evidence: verify-before-rely, upheld.
[D-048](#d-048--cockpit-resilience)'s
LADDER architecture
survives intact — resilience still ends OUTSIDE the session — but
its bottom premise softens: the ladder is climbed less often,
because R2 now usually ends the climb.
**Rejected:** BARE-PORCELAIN WORDING for the map ("gh works") —
the probe proved porcelain-GraphQL is blocked; writing the path
REST-shaped is what keeps a future seat from rediscovering the
403 · ENV-VAR-ECHO PROBES — blocked by permission classifiers and
needless when an API read answers more.
**Affects:**
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
(the environment entry's no-gh premise reversed · the charter's
connector-ladder preamble + R2 · the API dependency map's
two-path rewrite · the self-URL + trailer notes) ·
[liftoff §6](../skills/liftoff.md#6--ledger-handoff--fire-the-cockpit)
(the seating parenthetical gains the self-URL) ·
[liftoff §7](../skills/liftoff.md#7--close) (the `/tasks` + teleport
line) · [cockpit-resilience](specs/cockpit-resilience.md) +
[flight-hardening](specs/flight-hardening.md) (dated supersession
notes on the overturned premises — record kept) ·
[D-048](#d-048--cockpit-resilience)
(amended: the ladder keeps its shape, R2 gains the gh rung) ·
[D-047](#d-047--cloud-born-cockpit)
(upheld: `--cloud` births and the console-attach recovery are
untouched) · this entry.

## D-050 — Session lifecycle, closed is not dead

In full: 2026-07 — session lifecycle — closed ≠ dead: the close-lock's wall softens to injected read-only doctrine; interrupt capture is standing format; the claude/* residue sweep is pickup hygiene; IDEAS is an inbox, not an archive (amends the D-046-era close-wall design, upholds the park protocol and no-solo-approval)

**Decision:** what a session's start, pause, and close leave
behind is deliberate, by four clauses:
(1) CLOSED ≠ DEAD. The close-lock's WALL softens from a
mechanical block (the prompt hook's exit 2, rejecting every
post-close input) to INJECTED READ-ONLY DOCTRINE (exit 0, stdout
as context): a closed session, addressed after its close, answers
by fresh derivation from origin — state, explanations, pointers —
always names the current baton-holder, and refuses every write,
command act, and ritual. The close-lock RECORD
(`.claude/session-closed`, written by FULL
[handoff](../skills/handoff.md) and [liftoff](../skills/liftoff.md) as
their last act; cleared by session-start) is unchanged. FULL
REMOVAL of the lock is REJECTED — the two-writers risk the lock
was built for is real: two sessions driving one clone corrupts
state, and the softened wall still ends the session as a working
seat. Strictness explicitly KEPT: a superseded cockpit stays
TOMBSTONE-ONLY (charter R4b — a replaced cockpit is a hazard, not
a reference desk), and the seat-stamp supersession law is
untouched.
(2) INTERRUPT CAPTURE is standing format. Interrupted work —
Esc, founder redirect, or a handoff parking mid-task — leaves the
⏸ capture block in its memory (ORIGINAL MANDATE · THE PLAN · DONE
SO FAR · EXACT NEXT STEP · WHY PAUSED), the `interrupted` state
in [TEMPLATE](../memory/TEMPLATE.md)'s vocabulary, and a pickup
briefing that LEADS with "⏸ INTERRUPTED — continue?". The park
protocol holds: a lane's diary still receives only the one-line
park stamp; the capture duty is the tower's, for tower-owned
memories ([handoff §3](../skills/handoff.md#3--rewrite-the-memories-full-only)).
(3) THE `claude/*` RESIDUE SWEEP is pickup hygiene. Every cloud
session lazily leaves a workspace head it cannot delete; pickup
sweeps them on a standing rule — zero-unique-work verified per
head, HOLD on live-session doubt (ARCHIVE-BEFORE-DELETE held),
else delete plus the 60s prune tripwire
([pickup §3](../skills/pickup.md#3--gather-git-outranks-the-board)).
(4) IDEAS IS AN INBOX, NOT AN ARCHIVE. At every harvest, entries
already closed in an outing older than the current one are
DELETED — the closing artifact (the decide, the PR, the history
file) is the record and the ledger finds it; the two stays (a
closed entry whose only record is itself · a partly-closed entry)
are written into [IDEAS](../IDEAS.md)' header with the rule.
**Why:** a hard wall made a closed session's knowledge
unreachable when the founder is exactly the person standing at
the desk asking; softening to read-only keeps the lock's purpose
(one driving seat per clone) while ending the pointless
open-a-fresh-session round-trip for a question. Interrupts were
losing their context to memory rewrites shaped for planned parks;
the ⏸ block makes resumption exact. The residue sweep and the
compaction turn two founder-ordered one-offs (five branches swept
2026-07-24 · the inbox at 420 lines) into standing rules with
their safety rails named. Decided at
[#211](https://github.com/wsher0901/roam/pull/211)'s gate on the
critic's routing question — the founder's word made the
conventions decide-gated.
**Rejected:** FULL close-lock removal (above — the two-writers
risk is real) · sweeping a `claude/*` head that carries unique
commits (never — surfaced to the founder instead) · compacting
entries whose only record is themselves (the stay clause exists
for exactly that).
**Affects:**
[liftoff §7](../skills/liftoff.md#7--close) ·
[handoff §3](../skills/handoff.md#3--rewrite-the-memories-full-only)
+ [handoff §6](../skills/handoff.md#6--close-full-only) ·
[pickup §3](../skills/pickup.md#3--gather-git-outranks-the-board) +
[pickup §5](../skills/pickup.md#5--render-the-sit-down-summary-exactly-this-shape)
· [TEMPLATE](../memory/TEMPLATE.md) (the ⏸ block + the state row) ·
[IDEAS](../IDEAS.md) (the header rule + the first compaction) ·
[HOME](../HOME.md) (two close-lock passages · the closed-≠-dead
Terms line · the pickup portrait) ·
`.claude/hooks/user-prompt-submit.mjs` (the wall itself) ·
[#211](https://github.com/wsher0901/roam/pull/211) · this entry.

## D-051 — Self-seat birth

In full: 2026-07 — self-seat birth — liftoff fires --cloud blind and the cockpit seats itself by its env-derived self-URL; the console-attach launcher is retired (amends D-047's rung-1 mechanics as corrected by #193, upholds D-049 and board-governs)

**Decision:** liftoff's rung 1 fires `claude --cloud` BLIND — no
output capture, no console attach, no `CONOUT$` read; exit status
only — and the cockpit SEATS ITSELF on the board as its first
act, by the same env-derived self-URL mechanism
([D-049](#d-049--gh-second-path))
successor-duty already uses. By clause:
(1) THE BLIND FIRE: the hidden window supplies the TTY `--cloud`
demands; the launcher hands the birth prompt as a file-read
argument and captures NOTHING. The flight-plan board weld still
precedes the fire (board-governs, unchanged); its Sessions row is
written "cockpit · fired <time> · self-seat pending", and liftoff
no longer reports a session URL — the cockpit's greeting push and
its self-seat repaint carry it.
(2) THE SELF-SEAT DUTY (charter rule 1, with the first-act
derivation): a cockpit finding "self-seat pending" — or no live
cockpit — on the board repaints it seating itself with its
env-derived URL, as a pickup-class DASHBOARD-only micro-PR. A
FOREIGN live cockpit seat-stamp instead means rule 7 governs: the
new session is the stray — push nothing, write nothing, close with
a short factual note naming the live cockpit (NOT R4b's
landed-superseded script, which presumes a flight the stray never
had), stop.
(3) THE CONSOLE-ATTACH LAUNCHER IS RETIRED — the component is
DELETED from the recipe, not maintained. Disproof and retirement
dated: the attach-and-read shape flew 2026-07-22 and again
2026-07-23 (a background-job birth), but it existed solely to
hand the tower a session URL for the board weld, and capturing a
TUI's console buffer is the component most likely to break
SILENTLY on any platform UI change — the 2026-07-23 title-line
experiment on the same flight proved platform behavior shifts
under us. Retired 2026-07-24, this decision.
(4) THE TRADE, NAMED: a birth that dies before Claude starts
leaves no URL anywhere and sends no greeting. Mitigations, in the
founder's order of reach: the MISSING push IS the signal ·
`/tasks` at any terminal · the claude.ai/code list (the session
is list-native even when its clone failed) · retry the fire. The
board's "self-seat pending" row goes stale HONESTLY rather than
carrying a scraped URL that may be wrong.
**Why:** the capture machinery served exactly one purpose — a
URL for the board — and
[D-049](#d-049--gh-second-path)
gave every session self-knowledge, making the fragile half
redundant. Deleting is strictly simpler than maintaining. The
first REAL flight after this weld is the live test of
self-seating — testing deliberately deferred to it on the
founder's word, 2026-07-23/24, on the record in
[the spec](specs/self-seat-birth.md).
**Rejected:** KEEPING THE LAUNCHER AS A FALLBACK — a fallback
that breaks silently is worse than none (the clerk-retirement
lesson, generalized to components) · SCRAPING AS VERIFICATION —
a scraped URL can be wrong while looking right; the self-seat
URL is derived from the session's own env, which cannot
mis-identify.
**Affects:**
[liftoff §6](../skills/liftoff.md#6--ledger-handoff--fire-the-cockpit)
(rung 1 blind · the Sessions-row shape · the record line) +
[liftoff §7](../skills/liftoff.md#7--close) (the close line, no
URL) ·
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
(the inventory shape · charter rule 1's self-seat duty + failure
shape) ·
[cloud-born-cockpit](specs/cloud-born-cockpit.md) +
[flight-hardening](specs/flight-hardening.md) (one-sentence note
extensions) ·
[D-047](#d-047--cloud-born-cockpit)
(amended: rung 1's mechanics, as previously corrected by
[#193](https://github.com/wsher0901/roam/pull/193)) ·
[D-049](#d-049--gh-second-path)
(upheld: the self-URL is the mechanism) · this entry.

## D-052 — Response doctrine

In full: 2026-07 — response doctrine — one standard for every surface speaking to the founder: answer-first, explicit steps, purpose-shaped explanation, live-derived state, glyph verdicts; the command card; the fleet-table report; the ritual status templates; WEB-INSTRUCTIONS v5 ships (retires the v4 paste-block-loop master, upholds D-046's CC-direct doctrine and the derivation law)

**Decision:** how every surface speaks to the founder is ONE
standard with ONE home, by clause:
(1) THE RESPONSE DOCTRINE lives in
[HOME §Response doctrine](../HOME.md#response-doctrine), five
clauses: (a) answer first — a question's first line is its
answer, a task's first line the exact next act · (b) steps are
explicit — never "give the word"; the word itself and where it
goes, and every prompt handed to the founder carries WHERE ·
WHAT · WHY · (c) explanation is purpose-shaped and LAST, concise
by law · (d) state is derived live (the derivation law restated
as style) · (e) glyph verdicts — 🟢/🟡/🔴 lead every status item,
every 🔴 naming the fix AND where. Every ritual and charter
REFERENCES the section; none copies it.
(2) THE COMMAND CARD lives in
[HOME §Command card](../HOME.md#command-card) — the founder's
platform commands, one line each (what · when);
[liftoff §7](../skills/liftoff.md#7--close) and the charter's R2
point at it instead of re-listing.
(3) THE COCKPIT REPORT is the fleet-table shape (charter rule 5):
FLEET TABLE (id · purpose · 🟢/🟡/🔴 · waiting-on) → NEEDS YOUR
WORD (the exact word and where to type it) → OPTIONS + REC →
context last. One message carries everything a decision needs —
the founder's Web↔Code loop minimized by design.
(4) THE RITUAL STATUS TEMPLATE — liftoff §7, handoff §6, and
pickup §5 render the founder's four-part shape: WORKING ON · WHAT
HAPPENED (context → narrative → issue → resolution) ·
SUPPLEMENTAL · PARALLEL/RECENT FLIGHTS (🟢 all-good / ⏸
resume-needed per item, every ⏸ with its exact resume word).
Pickup's ⏸ INTERRUPTED lead
([D-050](#d-050--session-lifecycle-closed-is-not-dead))
stays above everything. The close reports and briefs were
REWRITTEN to the template, not annotated.
(5) WEB-INSTRUCTIONS SHIPS AT v5 — the master describes the
system AS IT IS: Web's role (the mandatory external review under
no-solo-approval + optional thinking room; never a writer), the
five-surface map, CC-direct with the paste-block-loop language
DEAD, the review procedure ending in an on-the-record word-paste,
the doctrine restated compactly, the live-status and
prompt-delivery rules, the brief and WEB HANDOFF aligned to
clause 4's template. The master-copy pattern stands: edit via PR,
re-paste into the claude.ai box — the box is a copy.
**Why — the founder's stated goal, verbatim:** minimum reading
time to decision, explicit steps over abstractions,
purpose-shaped explanation. The v4 master still described the
paste-block loop as THE working mode — a surface teaching a
retired doctrine to every chat that opened it; the report shapes
had grown one-off per ritual; and the founder's own commands
lived scattered across five files or nowhere. One standard, one
home each.
**Rejected:** copying the doctrine into each ritual (one home,
the routing law — copies drift; the currency audit exists because
they drift) · keeping v4's structure and patching lines (stale in
its bones was [#204](https://github.com/wsher0901/roam/pull/204)'s
verdict — a rewrite was named the moment the audit ruled it out
of mechanical scope).
**Affects:**
[HOME §Response doctrine](../HOME.md#response-doctrine) +
[HOME §Command card](../HOME.md#command-card) (new) ·
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
(charter rule 5 + the R2 card pointer) ·
[liftoff §7](../skills/liftoff.md#7--close) ·
[handoff §6](../skills/handoff.md#6--close-full-only) ·
[pickup §5](../skills/pickup.md#5--render-the-sit-down-summary-exactly-this-shape)
· [WEB-INSTRUCTIONS](../WEB-INSTRUCTIONS.md) (v4 → v5) ·
[D-046](#d-046--flight-cockpit-the-control-tower-online)
(upheld: CC-direct finally reaches the Web master) · this entry.

## D-053 — Guardrail audit

In full: 2026-07 — guardrail audit — the harness found ALREADY AT BEST PRACTICE against Anthropic's guidance; two promotions ship (the verification loop as a copy-runnable block in LAWS, two stub descriptions sharpened); five alternatives rejected with reasons (upholds the routing law and one-home)

**Decision:** the founder's maximum-depth audit of the whole
governing layer — [LAWS](../LAWS.md) · [HOME](../HOME.md) · the
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
charter · all nine `.claude/skills/` stubs · all three
`.claude/hooks/` · the reviewer agent · settings · `AGENTS.md` —
read against Anthropic's guidance (the always-loaded file
governs · verification loops multiply quality · sparse emphasis
outperforms shouting) found the harness ALREADY COMPLIANT: marker
density 1–7 per file, thin single-source stubs, mechanics living
in hooks (including the injected pickup directive and the
session-end gone-guard), and the constitution always-loaded via
the root CLAUDE.md import. This entry is the audit's record; the
decision is the audit's only two real improvements:
(1) THE VERIFICATION LOOP, PROMOTED — the CI-mirror sentence in
[LAWS §Workflow](../LAWS.md#workflow-non-negotiable)'s
before-saying-done bullet becomes a labeled, ordered,
copy-runnable block (`check:links` → `check:ledger` →
`check:memory` → `lint` + `format:check` → `test` + `build`),
the bullet's sync-first and Actions-green clauses kept around
it. Wording-only; zero semantic change.
(2) TWO STUB DESCRIPTIONS SHARPENED, one line each — the liftoff
stub gains its condition and boundary (fires when the machine is
going dark; watch-from-phone intent belongs to go-remote, never
liftoff), the ship stub gains its moment (fires the moment the
payload is complete and the CI mirror is green, BEFORE any "done"
claim in conversation). No other stub changed: the audit read all
nine and the rest are precise — recall the house exemplar.
**Why:** verification loops earn their promotion by being run,
and a copy-runnable block is run more reliably than prose; a
stub's description is its trigger surface, and the two sharpened
lines close the two real mis-fire risks the audit found (liftoff
vs go-remote intent, ship-before-done timing). Everything else
scored at best practice — the proof belongs on the record so no
future audit re-derives it.
**Rejected, each with its reason:** a separate BRIEF.md and
`.claude/rules/` — one always-loaded home; the founder's routing
law · a marker-economy pass — density already sparse, churn
without gain · duplicating [HOME](../HOME.md)'s routing table into
LAWS — breaks one-home · a session-shape law line — the
session-start hook already injects the directive every session ·
settings/hook changes — the deny list and existing hooks cover
the mechanical cases.
**Affects:**
[LAWS §Workflow](../LAWS.md#workflow-non-negotiable) (the block) ·
`.claude/skills/liftoff/SKILL.md` + `.claude/skills/ship/SKILL.md`
(the two descriptions) · [IDEAS](../IDEAS.md) (one line: the
~300-char decide-anchor links in LAWS cost context and vault
readability every session — a weave-rule-compatible shortening
pattern is a future consideration, not now) · this entry.

## D-054 — The landing skill

In full: 2026-07 — the landing skill — how a flight ends becomes a first-class ritual: ONE skill with TWO modes routed by fleet state (retire · pause-and-transfer); the fence is a commit, so the resume point is the branch tip by construction (wake-lock-mediated, with its honesty clause); the board is the single transfer material; pickup gains the fleet-resume ask and its cap arithmetic; sessions are cattle, branches are the work; charter rule 6 becomes a pointer; the effort doctrine moves to Opus 5 · xhigh (upholds the wake-lock, the park protocol, and one-home; supersedes the Opus 4.8 reliance pair)

**Decision:** landing becomes a ritual with a written procedure —
[land](../skills/land.md) plus its `.claude` stub — instead of a
duty improvised from the charter each time. By clause:
(1) ONE SKILL, TWO MODES, ROUTED BY STATE. Land's first act is to
derive the fleet from origin; nothing flying routes to MODE R ·
RETIRE, work flying routes to MODE P · PAUSE-AND-TRANSFER, and the
founder's "ground the fleet" or "pause everything — I'm going
local" forces MODE P outright. MODE R consolidates the duties
charter rule 6 already carried (final repaint · every retired
branch verified dead · "Safe to archive me") — no new law, one
home.
(2) THE FENCE. MODE P holds a live lane with a COMMIT on its
branch: the memory rewritten to the full ⏸ block
([D-050](#d-050--session-lifecycle-closed-is-not-dead)'s
shape — done so far · spec progress · what is left · the exact next
step · why paused) under the existing terminal `held` Status, then
pushed. The mechanism is the wake-lock: the fence makes the lane's
next push non-fast-forward, the rejection is a wake, the lane
re-reads a Status it does not own, and it stops — landing nothing
after the fence. RESUME POINT = BRANCH TIP BY CONSTRUCTION; the
only loss is an unpushed sliver, bounded by push-every-commit.
HONESTY CLAUSE, written into the skill: the fence is
wake-lock-mediated, not an interrupt, so a lane mid-turn may finish
its current step — the report states last-observed state per lane
and never claims a guaranteed freeze.
(3) THE SINGLE MATERIAL. One artifact is passed down: the board's
flight-context fleet-at-ground table (per lane — id · purpose ·
progress · exact next step · held), with the Sessions row reading
"no live cockpit — grounded for local pickup". Per-lane depth stays
in each memory. No new file.
(4) THE RESUME COUNTERPART. A grounded fleet makes
[pickup](../skills/pickup.md) render FLEET RESUME — after any ⏸
INTERRUPTED lead, which keeps priority — then ask, in fixed words,
whether to continue, with N and the cap arithmetic derived AT ASK
TIME, plus the granular alternatives (`local <id>` at 0 cap runs ·
`redeploy <id>` at 1 · `hold <id>`). Redeploy mechanics live in
[pickup §6](../skills/pickup.md#6--fleet-resume-on-the-founders-answer)
once; [parallel-lanes](../skills/parallel-lanes.md) points at it.
(5) SESSIONS ARE CATTLE, BRANCHES ARE THE WORK. The landing report
ends with the archive list — every fenced lane's session URL plus
the cockpit's own — ordered AFTER the fences are pushed (the
resurrection rule). Old sessions are never revived; resume births
fresh workers on the fenced branches.
(6) CHARTER RULE 6 BECOMES A POINTER — three lines naming the
ritual, its two modes, and its skill; the duties move out.
(7) THE EFFORT DOCTRINE. Opus 5 (released 2026-07-24 at Opus 4.8's
price, the new Max default, no Fable-class cap) becomes the default
for ALL work including reviews and architecture, at xhigh; Fable 5
is an optional second opinion only; throttle-effort-before-model is
unchanged. The Opus 4.8 / Sonnet 5 reliance pair is retired, and
the two routine boxes are set to Opus 5 at the next flight.
**Why:** the flight's ending was the one lifecycle moment with no
written procedure, and its expensive case — a fleet still flying
when the founder wants the work back at a desk — had no answer at
all: archiving the sessions would have killed the workers and left
nothing on the branches saying where they stopped. A commit is the
only pause a lane can be made to obey, because a rejected push is
the only signal that reliably reaches a running session; building
the pause out of the mechanism that already exists means the resume
point needs no bookkeeping to be correct — it IS the branch tip.
Two modes in one skill rather than two skills because the spine is
shared (derive · repaint · report · stop) and a fork inside a
ritual is the house shape already, in handoff's FULL/QUIET. And the
transfer rides the board because the board is already the artifact
every seat reads first.
**Alternatives rejected, each with its reason:** an instant lane
freeze — lanes have no interrupt channel; the wake-lock IS the
channel, and pretending otherwise would put a guarantee in writing
that the mechanism cannot keep · auto-redeploy at pickup — spending
cap runs is the founder's word, never a ritual's default ·
pausing via session archive alone — it kills the worker and leaves
no fence, which is the exact discrepancy this skill exists to
prevent · reviving old lane sessions — no mechanism exists, and a
fresh worker reading a complete fence is strictly more reliable
than a revived session carrying stale in-context state; continuity
is git's job · two separate skills — the shared spine would fork
and drift, and mode-inside-skill is the house shape per handoff and
pickup.
**Affects:** [land](../skills/land.md) (new — the ritual) ·
`.claude/skills/land/SKILL.md` (new — the stub) ·
`.claude/skills/handoff/SKILL.md` (the seat boundary: a desk, not a
flight) · [pickup §5 + §6](../skills/pickup.md#6--fleet-resume-on-the-founders-answer)
(FLEET RESUME and the redeploy mechanics) ·
[parallel-lanes §Respawn](../skills/parallel-lanes.md#respawn-on-an-existing-bench-liftoff-adopt)
(one pointer line) ·
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
(charter rule 6 → a pointer; the cockpit inventory line; the
Models & effort doctrine) · [HOME](../HOME.md) (the ritual portrait
and census, the three Terms entries, the Command card line, the
merge-allowance sentence) ·
[the spec](specs/landing-skill.md) + its memory · this entry.

## D-055 — Agent teams, the boundary

In full: 2026-07 — agent teams — the boundary: teams are for EXPLORATION AND REVIEW at a ground seat, lanes remain the authorship mechanism; two risks become law (single-sitting only — an explicit carve-out to D-050's interrupt promise — and a teammate-authored diff is self-authored under no-solo-approval); the reviewer's model settled by verification, not guess; the founder-side config recorded (upholds the lane law, no-solo-approval, and one-home; gives the experimental flag its consumer)

**Decision:** agent teams get a written place in this workshop and
a written fence around it. By clause:
(1) THE BOUNDARY, its home
[HOME §Agent teams](../HOME.md#agent-teams): teams are for
EXPLORATION AND REVIEW AT A GROUND SEAT; LANES REMAIN THE
AUTHORSHIP MECHANISM. A team never authors a bench, never merges,
never runs a ritual. The reasons are stated, not asserted: lanes
are cloud-isolated, PR-gated, canary-claimed and wake-locked with
days of hardening behind them, while teams are local, in-session,
share ONE working tree, and have no PR isolation; and bench
authoring is sequential same-file work — the exact shape the
official guidance points away from teams and back at a single
session or subagents.
(2) RISK A — SINGLE-SITTING ONLY. `/resume` and `/rewind` do not
restore in-process teammates, and a resumed lead may go on
messaging teammates that no longer exist, so a team is never left
mid-flight expecting pickup to restore it. This is an explicit
CARVE-OUT to
[D-050](#d-050--session-lifecycle-closed-is-not-dead)'s
interrupt promise, written where that promise is read (the
Command card's Esc line and the new section): the ⏸ block
preserves the LEAD's work, never the team. An interrupt is safe
for your session and fatal to your teammates.
(3) RISK B — A TEAMMATE-AUTHORED DIFF IS SELF-AUTHORED. A
teammate is a full session pushing as the founder, so it earns no
independent review merely by being a second agent: no-solo-
approval applies unchanged, external Web review before the word.
One clause in
[LAWS §Workflow](../LAWS.md#workflow-non-negotiable), beside the
existing rule.
(4) THE REVIEWER'S MODEL, SETTLED BY VERIFICATION. `claude update`
reported already-current at 2.1.219; `/model` is interactive and
unavailable from the harness, so the alias was resolved
mechanically instead — a headless `--model opus` run billed
`canonicalModel: claude-opus-5`. The `opus` ALIAS therefore
resolves to Opus 5, and `.claude/agents/reviewer.md` takes the
alias rather than a pin: aliases track the recommended version and
survive deprecations, which is the brittleness a
`claude-opus-5` pin would have carried. `effort: high` is kept.
This one line is a TWO-SURFACE decision — reviewer.md governs the
ship §6 critic AND any teammate spawned from that definition;
noted with it, a teammate spawned this way does NOT receive the
definition's `skills` or `mcpServers`, only its `model` and
`tools`.
(5) THE FOUNDER-SIDE CONFIG, recorded in
[SETUP §Models & effort](../SETUP.md#once-and-done--cloud-accounts)
so any seat sets it up identically: `/config` → Default teammate
model → Default (leader's model), the ONLY way teammates ride the
lead's pick, since a teammate's model is fixed at spawn; effort
inherits automatically; `teammateMode` stays in-process, because
split panes need tmux or iTerm2 and are unsupported in Windows
Terminal — what both seats run; permissions need no per-teammate
setup, since teammates start with the lead's and the deny rails
therefore cover the team; and the
`CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` flag, armed in
`.claude/settings.json` with nothing reaching for it, now has a
documented consumer. RETIRED BY THIS CLAUSE, named so the forward
pointer exists: the Sonnet-5 teammate default recorded in
[D-045](#d-045--hands-doctrine)'s
Hands doctrine ("lead + 2–4 Sonnet 5 teammates") and in
[D-020](#d-020--parallel-lanes-v2)'s
team rule ("teammates Sonnet, max 4") — teammates ride the LEAD's
model by config. Those entries stand unedited per the log's
append-only law; this is their forward pointer, and the live copy
in SETUP carries the supersession inline.
**Why:** the flag was already on, so the question was not whether
teams would be used but whether their first use would be governed.
The workshop's parallelism is already solved for authorship —
lanes are the mechanism the last month hardened, and every
property that makes them safe (cloud isolation, the PR gate, the
canary, the wake-lock) is a property teams structurally lack. What
teams add is the thing lanes cannot do: several minds on ONE
question, arguing. Drawing the line at exploration-and-review
keeps each mechanism where its guarantees hold, and turns the two
failure modes that would otherwise be discovered the expensive way
— a lost team at a resume, an unreviewed teammate diff — into
rules written before the first team exists.
**Alternatives rejected, each with its reason:** teams for bench
authorship — the documented anti-pattern (sequential, same-file,
dependency-heavy work), and lanes already solve it with
isolation and a PR gate that teams have no equivalent of · teams
in the cockpit — a session has exactly ONE team and teammates
cannot spawn their own, so a cloud command session's parallelism
is lanes by construction, not preference · changing
`settings.json`'s permissions for teammates — they inherit the
lead's, teammate prompts surface in the lead session, and the deny
list is precisely what makes catastrophes impossible; loosening it
for teams would trade the one structural guarantee for
convenience.
**Affects:** [HOME §Agent teams](../HOME.md#agent-teams) (new) +
its Command card carve-out clause ·
[LAWS §Workflow](../LAWS.md#workflow-non-negotiable) (one clause) ·
[SETUP §Models & effort](../SETUP.md#once-and-done--cloud-accounts)
(the founder config bullet; the retired Sonnet-teammate default in
BOTH its copies — the Models & effort line and the D-045 Hands
rule's agent-team clause; the reviewer's line) ·
[parallel-lanes §Vehicles](../skills/parallel-lanes.md#vehicles)
(the stale team entry becomes a pointer) ·
`.claude/agents/reviewer.md` (`model: opus`) ·
[IDEAS](../IDEAS.md) (two lines: the chronicle layer as the first
intended use; box-provenance stamps) ·
[the spec](specs/agent-teams.md) + its memory · this entry.

## D-056 — Team-aware leaving rituals

In full: 2026-07 — team-aware leaving rituals — no ritual lets a live agent team outlive the sitting that made it: handoff SHUTS THE TEAM DOWN BEFORE PARKING ANYTHING and captures its findings into the record first, land states the cockpit-cannot-lead-a-team case once and routes the ground seat to handoff, pickup gains the ghost-teammate recovery note, and the ⏸ block gains what the team had found (closes D-055's deferred gap; upholds one-home and the park protocol)

**Decision:** the leaving rituals learn about live teams. By
clause:
(1) HANDOFF SHUTS THE TEAM DOWN, in a new step BEFORE anything is
parked
([handoff §1.2](../skills/handoff.md#12--shut-the-team-down-full-only)),
and the ORDER inside that step is the decision: CAPTURE FIRST —
the team's findings go into the record before a single shutdown
request, to the open bench's memory when a bench is open, else a
dated [IDEAS](../IDEAS.md) line, per teammate (what it was working
on, what it found, what it left unfinished) — THEN shut down by
name, THEN report what each returned. Two honesty clauses ride
with it: shutdown is NOT INSTANT, because a teammate finishes its
current request or tool call first, so the step waits rather than
assumes; and a teammate that REFUSES or HANGS is named plainly in
THE CLOSE REPORT ON THE ROAD OUT —
[handoff §6](../skills/handoff.md#6--close-full-only) ordinarily, or
[liftoff §7](../skills/liftoff.md#7--close) when the sitting ends in
liftoff, which skips §6 — never smoothed into a clean exit. A live team is
never PARKED — parking is a lane act, and a lane survives on its
branch, which is what a stamped Status holds; a team has no branch
and no Status, so a parked team does not exist. QUIET never shuts
a team down.
(2) LAND STATES THE COCKPIT CASE ONCE AND POINTS. A cockpit does
not lead a team, and the basis is stated as what it is — POLICY,
not a platform limit:
[D-055](#d-055--agent-teams-the-boundary)
puts teams at a ground seat and makes lanes the cloud's
parallelism. The platform would let any session spawn teammates;
the boundary is what says a cockpit does not. Resting the rule on
one-team-per-session instead would have founded it on a mechanism
that does not imply it and could change — so neither MODE R nor
MODE P has a team to shut down, and land carries no team
procedure at all, only the routing line to handoff.
(3) PICKUP GAINS THE GHOST-TEAMMATE NOTE
([pickup §2](../skills/pickup.md#2--self-heal)), one paragraph: a
session reached by `/resume` or `/rewind` can inherit a lead whose
teammates are gone — the config still lists members, the processes
are dead. Say so, offer fresh teammates, never message the ghosts
and never report their silence as progress. A recovery note, not a
ritual step.
(4) THE ⏸ BLOCK GAINS ONE CONDITIONAL FIELD
([TEMPLATE](../memory/TEMPLATE.md)): TEAM FINDINGS, written only when
a team was live at the pause — the one field git cannot
re-derive, since teammates do not survive the SITTING (`/resume`
and `/rewind` do not restore them) and their transcripts die with
them. Omitted entirely when no team was
running.
**Why:** [D-055](#d-055--agent-teams-the-boundary)
made single-sitting-only law and left it enforced by nothing: a
rule documented in two surfaces and acted on by no ritual is a
rule that will be broken the first time a team is running when the
founder says "done for today". And the loss it prevents is not the
one the wording first suggests. Teammates are cheap — they die
cheaply and respawn cheaply, and the IDEAS candidate line that
opened this bench ("a live team is finished or shut down, never
parked") stopped at the processes. What cannot be re-derived is
what the team FOUND, because a team's output lives in transcripts
that vanish with the session while git keeps everything else. So
the duty inverts: capture, then kill. That inversion is the
decision; the prohibition survives inside it.
**Alternatives rejected, each with its reason:** auto-shutdown
without reporting — a silent teardown is fast and loses exactly
the thing worth keeping; the findings and the refusals are the
output, and a ritual that swallows them is worse than one that
does nothing, because it looks clean · trying to persist a team
across sittings — no mechanism exists and the official docs are
explicit that `/resume` and `/rewind` do not restore in-process
teammates; building bookkeeping on a capability that does not
exist would fail silently, which is the failure mode this
workshop spends the most effort avoiding · duplicating the
shutdown procedure into land — one home; land has no team to host
BY THE BOUNDARY, so a copy there would be a procedure that can
never run,
drifting quietly out of step with the one that can.
**Affects:**
[handoff §1.2](../skills/handoff.md#12--shut-the-team-down-full-only)
(new) + [§6](../skills/handoff.md#6--close-full-only)'s close line ·
[land](../skills/land.md#teams--not-this-rituals-case-both-modes)
(the routing section) ·
[pickup §2](../skills/pickup.md#2--self-heal) (the ghost note) ·
[TEMPLATE](../memory/TEMPLATE.md) (the ⏸ field) ·
[handoff §3](../skills/handoff.md#3--rewrite-the-memories-full-only)
(the ⏸ enumeration + the never-lossy clause) ·
[handoff §5](../skills/handoff.md#5--ship-the-note) (the micro-PR
carries an IDEAS findings line) ·
[liftoff §1](../skills/liftoff.md#1--full-handoff-first) +
[§7](../skills/liftoff.md#7--close) (the shutdown named in what
handoff FULL does, and the close line carried by pointer — without
it the report has nowhere to land on the liftoff road) ·
[HOME §Agent teams](../HOME.md#agent-teams) (risk (a) gains its
enforcement pointer) · [IDEAS](../IDEAS.md) (the candidate line
closed by this PR) · [the spec](specs/team-aware-leaving.md) +
its memory · this entry.

## D-057 — The record shelf

In full: 2026-07 — the record shelf — the frozen record moves under one roof: docs/record/ is born (history · specs · DECISIONS in; memory stays living at root); THE ENABLING RULING — a mechanical link-path-segment repair inside a frozen file is MAINTENANCE, not a content edit, append-only governs meaning not bytes; intra-record links resolve by construction (upholds append-only, one-home, and the weave rule)

**Decision:** `docs/record/` is born — the frozen shelf, one roof
for the three append-only surfaces. Recorded renames (`git mv`):
`docs/history` → `docs/record/history` · `docs/specs` →
`docs/record/specs` · `docs/DECISIONS.md` →
`docs/record/DECISIONS.md`. `docs/memory/` stays at root —
in-flight is living — and everything else at `docs/` root remains
the living system. With the move, THE ENABLING RULING: a
mechanical path-segment repair inside a frozen file is
MAINTENANCE, not a content edit — append-only governs meaning,
not bytes (precedent:
[#163](https://github.com/wsher0901/roam/pull/163)'s restamp and
[#204](https://github.com/wsher0901/roam/pull/204)'s dated
blockquotes). Scoped strictly: link path segments only; zero
prose changes anywhere in `record/`. Intra-record links
(history ↔ DECISIONS ↔ specs) keep resolving BY CONSTRUCTION —
the three surfaces moved together, so their relative distances
are preserved — verified, never rewritten.

**Why:** the frozen record and the living system had been sharing
one shelf: every `docs/` root listing interleaved append-only
surfaces (DECISIONS, shipped specs, history's door) with living
ones (LAWS, HOME, ROADMAP, the board), and nothing in a path said
which discipline governed the file at its end. The chronicle
layer now queued on top of the record (bench 3 of the founder's
2026-07-27 queue) makes that boundary load-bearing — a story
layer needs the record addressable as ONE thing it can link down
into. One roof makes the freeze visible in the path itself
(`record/` = append-only; root = living) and gives the vault lens
a single filter (`-path:record`) instead of per-surface
exclusions. The ruling exists because a move breaks relative
links into and out of frozen files; without a licensed
maintenance class, the archive could never be re-shelved at all —
append-only would otherwise freeze not just meaning but
geography.

**Alternatives rejected:** the status quo (record interleaved at
`docs/` root) — the frozen and the living keep competing for the
same shelf, and every future record surface inherits the
ambiguity · moving `docs/memory/` under `record/` too — in-flight
memory is a living handshake surface rewritten at every ritual;
shelving it under the frozen roof would misdeclare exactly the
file a waking lane must trust · copies or redirect stubs at the
old paths — one home per class
([LAWS §Knowledge & tracking](../LAWS.md#knowledge--tracking));
a second copy is what the routing law forbids, and a stub shelf
rots silently · treating frozen-file link repairs as content
edits requiring [#204](https://github.com/wsher0901/roam/pull/204)-style
dated annotations — a path segment carries no meaning; annotating
~150 files would bury the archive in notation noise to record a
byte-level fact git already records as a rename.

**Affects:** the three renames themselves ·
[LAWS §Task anatomy](../LAWS.md#task-anatomy) (spec path + weld
destination) ·
[HOME](../HOME.md) (Q&A labels, both routing tables, the
history-file term) ·
[WEB-INSTRUCTIONS](../WEB-INSTRUCTIONS.md) (where-things-live +
the review's spec path) ·
[ship §7](../skills/ship.md#7--on-approval--the-atomic-weld)
(weld destination + staging command) ·
[parallel-lanes §Bench-first birth](../skills/parallel-lanes.md#bench-first-birth-baton-holder-procedure)
(spec path) ·
[machine-setup §Vault lens](../skills/machine-setup.md#vault-lens)
(the filter, `-path:history` → `-path:record`) ·
`scripts/check-ledger.mjs` (the walker's root) ·
`.claude/agents/reviewer.md` (spec + history paths) ·
`.claude/vault-seed/graph.json` (the search filter) · the
whole-corpus mechanical link sweep (every relative link into the
moved surfaces, ~1580 links across 158 files — living files gain
`record/`, frozen files gain one `../`) ·
[the spec](specs/record-shelf.md) + [its
memory](history/workshop/definition/record-shelf.md) · this entry.

## D-058 — ATLAS, the system spine

In full: 2026-07 — ATLAS — the system spine: the workshop depicted as six diagrams on one page; the posture is the board's — IT RENDERS, ORIGINATES NOTHING: dated stamp, least-authoritative, the prose governs, every box linked to its owning doctrine so a currency audit verifies it mechanically (upholds the derivation law, one-home, and the weave rule)

**Decision:** `docs/ATLAS.md` is born — the system spine, six
mermaid diagrams with one-line captions depicting the workshop on
one page: the task loop · the file flow · away & return · a
lane's life · the surfaces · the state surfaces. Its posture is
[the board](../DASHBOARD.md)'s: IT RENDERS, ORIGINATES NOTHING —
stamped with its date, least-authoritative, the prose governs on
any disagreement; beneath every diagram a weave line links each
doctrine-carrying box to the
[HOME](../HOME.md)/skill section that owns the doctrine, so a
currency audit verifies the page mechanically.
[HOME §Where information goes](../HOME.md#where-information-goes)
gains exactly ONE routing-table row (system map → ATLAS), whose
upsert rule doubles as the page's maintenance law: the bench that
changes what a diagram depicts re-renders the diagram in the same
PR.

**Why:** the workshop's mechanisms live in prose across LAWS,
HOME, and nine skills — correct, single-homed, and invisible as a
whole. A newcomer (or the founder after a week away) has no one
page that shows the machine's SHAPE: how a task flows, where a
sitting reads and writes, how leaving and returning connect, what
a lane's life looks like, who may write what, and where state
actually lives. Diagrams answer shape questions faster than
prose — but a second authoritative home would drift, so the atlas
takes the one posture that cannot: it renders what the prose
says, links every box to where the doctrine lives, and loses
every argument with its sources.

**Alternatives rejected:** scattering the diagrams into their
owning docs — HOME already carries the chooser diagram beside its
prose and that stays right; a SPINE needs one page, and
scattering re-creates the exact search problem the atlas exists
to solve · an authoritative atlas (diagrams as the source of
doctrine) — two homes for one rule violates
[one-home](../LAWS.md#knowledge--tracking) and drifts; the
board's renders-originates-nothing posture already proved the
safe pattern · auto-generating the diagrams by parsing the docs —
over-engineering with no stable parse source; the derivation law
governs values, and composition is judgment · in-diagram
click-links instead of prose weave lines — links inside mermaid
fences are stripped by `check-links.mjs` before scanning and
GitHub's sandboxed mermaid renderer does not honor click
directives, so the mechanically-verifiable requirement would fail
on both ends; the weave lines beneath each diagram are what the
checker and a currency audit can actually read.

**Affects:** `docs/ATLAS.md` (born) ·
[HOME §Where information goes](../HOME.md#where-information-goes)
(one row) · [the spec](specs/atlas.md) + its memory (in flight on
the bench; moves to history at the weld) · this entry.

## D-059 — The chronicle layer

In full: 2026-07 — the chronicle layer — living stories above the frozen record: ONE STORY PER ITEM; the ending rule — settled in any format means the story is written, a later fix is INCORPORATED and the ending rewritten at that weld, retirement is a settlement; docs/chronicle/ one file per story, INDEX.md shelving four shelves; immutability beneath — record/ untouched, stories link DOWN as footnotes; down-links only — a story never cites another story's prose; supersedes the 07-23 three-chapter shape (the ship synthesis-at-weld step deferred to the first story weld)

**Decision:** the chronicle layer exists, governed by the
founder's six rulings (ops chat, 2026-07-27), recorded verbatim
in substance:

1. UNIT — one living story per ITEM: an event, a system piece
   (skill, command, instruction, architecture, workflow), or a
   Roam piece (feature, change, decision). Each story tells: the
   item · the events that raised it · the changes and actions in
   order · what it ended up as.
2. ENDING RULE — settled in ANY format ⇒ the story is written. A
   later fix to the same item is INCORPORATED into the existing
   story and the ending rewritten at that weld — never a second
   story. Retirement is a settlement like any other.
3. STRUCTURE — `docs/chronicle/`, one file per story;
   `docs/chronicle/INDEX.md` shelves them — the away surface ·
   the lane system · the information system · Roam.
4. IMMUTABILITY BENEATH — `record/` stays untouched; stories
   link DOWN into it as footnotes.
5. DOWN-LINKS ONLY — a story never cites another story's prose;
   cross-references ride decide anchors or ledger lines.
6. SUPERSEDES the three-chapter shape queued in
   [IDEAS](../IDEAS.md) on 2026-07-23 — that line closes citing
   this decide.

Deferred by the founder's ruling to the first story weld: the
ship-ritual synthesis-at-weld step (its own bench, touching
[ship](../skills/ship.md)). This bench writes NO story: it births
`chronicle/INDEX.md` as a DRAFT census — the proposed story list,
each entry carrying item · span · one-sentence current ending ·
confidence, underivable endings marked "founder input owed" — for
the founder's veto at the gate.

**Why:** the record is complete and tells no thread. git holds
every diff, [record/history/](history/README.md) every shipped
narrative, [DECISIONS](DECISIONS.md) every choice — but the READER
who asks "what is the cockpit and how did it come to work this
way?" must reassemble the answer from a dozen frozen files every
time. A story layer answers thread-shaped questions once, and the
ending rule keeps it honest: because every story names its
CURRENT ending, a later weld has exactly one place to rewrite,
and the layer can stay living without ever touching the frozen
sources beneath it. One story per ITEM (not per chapter) is what
makes the rewrite duty tractable — an item can SETTLE, a chapter
never does.

**Alternatives rejected:** the three-chapter shape (the 07-23
IDEAS line — the away surface, the lane system, the information
system as three mega-narratives) — a chapter-scale unit never
settles, so the rewrite duty would fire at every weld and each
rewrite would churn a whole chapter; the founder's ruling keeps
the three threads as SHELVES and moves the story unit down to the
item, which settles · stories inside `record/` — the layer is
living by definition and `record/` is the frozen shelf
([D-057](DECISIONS.md#d-057--the-record-shelf));
mixing them would re-blur the boundary bench 1 just drew ·
writing the first stories on this bench — the census must survive
the founder's veto first; a story written before its item is
confirmed on the list is speculative work the veto would discard ·
cross-links between stories — two stories citing each other's
prose would couple their rewrites and break the one-place-to-
rewrite property; decide anchors and ledger lines are stable,
story prose is not.

**Affects:** `docs/chronicle/INDEX.md` (born, draft census) ·
[HOME §Where information goes](../HOME.md#where-information-goes)
(one routing row) · [IDEAS](../IDEAS.md) (the 07-23 line closed) ·
[the spec](specs/chronicle-layer.md) + its memory (in flight on
the bench; moves to history at the weld) · this entry.

## D-060 — The three-phase standing order

In full: 2026-07 — The three-phase standing order — settle and test, the vault, then Roam: V1.S1.T3–T6 and V1.S2.T5 are PAUSED until phase 2 closes (the founder's 2026-07-28 sequencing, recorded per LAWS' pause routing; upholds the pacing law)

**Decision:** work proceeds in three phases, in this order, on the
founder's word of 2026-07-28:

1. **PHASE 1 — SETTLE & TEST.** The answering bench (the census's
   nine owed endings written into the record), then the
   first-story shakedown flight: blind cockpit birth · the fence
   and [land](../skills/land.md) MODE P ·
   [pickup §6](../skills/pickup.md#6--fleet-resume-on-the-founders-answer)
   fleet-resume · land MODE R.
2. **PHASE 2 — THE VAULT.** Chronicle story lanes plus a
   connections-and-content polish pass. The phase OPENS with a
   founder scope ruling that is deliberately not made here: all
   66 census stories, or the load-bearing dozen first.
3. **PHASE 3 — ROAM.**
   [V1.S1](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
   T3–T6 relaunched FROM SCRATCH per the brief in the answering
   bench's memory, audit riders included, plus
   [V1.S2.T5](../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
   design foundations.

**V1.S1.T3–T6 and V1.S2.T5 are PAUSED until phase 2 closes.** That
pause is what makes this a decision rather than a preference: it
is a stage held, and
[LAWS §Workflow](../LAWS.md#workflow-non-negotiable) routes a
paused stage to a D-number rather than to conversation.

**Why:** phase 1 exists because two pieces of flight machinery
shipped and were never flown —
[land](../record/DECISIONS.md#d-054--the-landing-skill)
and
[self-seat birth](../record/DECISIONS.md#d-051--self-seat-birth) —
and [the answering bench](history/workshop/definition/chronicle-answers.md)'s own
derivations confirmed it: no landing appears in the record and no
weld since #213 is cockpit-seated. Product work carried by untested away-machinery
is work that cannot be rescued when the machinery fails, which is
exactly what the batch-1 lanes proved in June
([D-020](DECISIONS.md#d-020--parallel-lanes-v2)).
Phase 2 comes second because the chronicle is written from a
record that is fresh now and gets staler with every bench.
Phase 3 comes last because T3–T6 restart FROM SCRATCH anyway: the
relaunch loses nothing by waiting and gains a proven vehicle.

**Alternatives rejected:** running T3–T6 in parallel with the
vault work — it is the exact shape the pacing law
([D-009](DECISIONS.md#d-009--pacing-law))
forbids, and the parallel slot it would fill is better spent on
the shakedown flight the phase exists for · fixing the phase-2
scope now (all 66 vs the load-bearing dozen) — the ruling depends
on how the first story weld actually reads, which nobody knows
yet; deciding it early would bind the founder to a number chosen
blind · leaving the order in the bench memory and on the board
only — a memory is task-local and a board is repainted; a paused
stage outlives both, and LAWS routes it here · recutting the
[ROADMAP](../ROADMAP.md) to express the pause structurally — a
pause is sequencing, not structure: the boxes stay unticked and
therefore stay truthful, and a recut would have to be undone when
phase 3 opens.

**Affects:** [LAWS §Workflow](../LAWS.md#workflow-non-negotiable)
(cited as the routing authority, unchanged) ·
[the spec](specs/chronicle-answers.md) + its memory (in flight on
the bench; moves to history at the weld) ·
[DASHBOARD](../DASHBOARD.md) (the ship tail's SEQUENCING note
cites this entry) · [ROADMAP](../ROADMAP.md) deliberately
UNTOUCHED — the pause is sequencing, and the unticked T3–T6 and
T5 boxes already tell the truth · this entry.

## D-061 — The landing doctrine recut to three scenarios

In full: 2026-07 — The landing doctrine recut to three scenarios — the cockpit's standing job (advise on fleet status and on each gate reaching decision, execute the founder's rulings from the phone), AUTO-LAND when the fleet empties and nothing awaits the founder, DESK TAKEOVER when pickup finds a live cockpit holding decisions, and the founder's FREEZE unchanged; the tombstone wake-rule makes a superseded cockpit retire by the full ritual (amends D-054's two-mode routing, upholds no-solo-approval and the derivation law)

**Decision:** four clauses, from the founder's three-scenario model
(Web ops chat, 2026-07-28).

**(1) THE COCKPIT'S STANDING JOB**, stated so a flight stops
improvising it: ADVISE the founder on fleet status and on each
gate as it reaches decision, and EXECUTE the founder's rulings
from the phone. The merge boundary is
[no-solo-approval](../LAWS.md#workflow-non-negotiable) restated
for the seat rather than amended — LANE-AUTHORED diffs may merge
on cockpit review plus the founder's word; COCKPIT-AUTHORED diffs
always take external Web review before the word. THE COCKPIT
NEVER MERGES ON ITS OWN ADVICE.

**(2) SCENARIO 1 — AUTO-LAND.** In the same turn that BOTH become
true — no working lanes AND no decisions awaiting the founder —
the cockpit runs the full landing ritual UNPROMPTED: retire the
lanes' sessions, push, deliver the landing report naming the
re-open paths, retire itself. Four guards, each load-bearing:
never at birth (a fresh cockpit waits for at least one command),
never on a timer, never silent, and the both-true test is read in
ONE turn rather than remembered across turns. The accepted cost
of a premature fire is ONE RE-LIFTOFF, and the report states it
so the founder is never guessing whether the landing was right.

**(3) SCENARIO 2 — DESK TAKEOVER.** When [pickup](../skills/pickup.md)
finds a LIVE cockpit holding PENDING DECISIONS, the desk adopts
the decision queue — each gate surfaced with the cockpit's advice
— writes COCKPIT SUPERSEDED to the board with the takeover stamp,
and proceeds. The cockpit charter gains THE TOMBSTONE WAKE-RULE:
on any wake, read the board FIRST; if superseded, self-retire by
the full landing ritual, writing nothing else.

**(4) SCENARIO 3 — THE FOUNDER'S FREEZE.** "Ground the fleet"
stays WORD-ONLY MODE P — the fence, the board transfer, resume at
any desk. Mechanics unchanged. A bare "land" on an empty fleet
stays legal as a manual retire.

**Why:** [D-054](#d-054--the-landing-skill)
routed landing by the FLEET but left the TRIGGER in one place —
the founder's word. That is one trigger for three situations, and
the two it does not fit are the expensive ones. A flight whose
work is finished and whose gates are all answered has nothing
left to do but burn: every extra turn costs usage and the founder
must remember to say "land" from wherever they are, so the
cockpit lands ITSELF. A founder who instead walks back to a desk
while gates are still undecided creates the opposite problem —
two live commanding seats, which the baton law forbids — so the
desk takes the queue and says so on the board, and the wake-rule
makes the old cockpit read that before it acts on anything. The
one scenario D-054 did fit, the founder's freeze, is left exactly
as it is.

The standing job is written down for the same reason: a cockpit
that improvises its role improvises the merge boundary too, and
the boundary is the one thing no seat may loosen for itself.

**Alternatives rejected:** a TIMER for auto-land (land after N
idle minutes) — a clock cannot see whether a gate is waiting, and
the failure mode is a fleet that lands while the founder is
typing a ruling; the both-true test reads state, which is what
the derivation law asks for · SILENT auto-land — a landing that
leaves no report is indistinguishable from a crash, and the
founder's next pickup would have to reconstruct why the fleet is
gone · asking the founder to confirm before auto-landing — that
is the word-triggered landing we already have, and it re-creates
the exact cost this scenario exists to remove · letting the
superseded cockpit simply STOP (today's "push, write nothing") —
a session that vanishes mid-flight leaves its lanes unfenced and
its board row stale; retiring by the ritual is barely more
expensive and leaves the board true · letting the DESK defer to
the live cockpit until it lands — the founder is at the desk, and
making them wait for a cloud session to notice is the tail
wagging the dog; the baton belongs to the seat the founder is
driving.

**Affects:**
[LAWS §Parallel lanes & cloud](../LAWS.md#parallel-lanes--cloud)
(the supersession clause gains its one carve-out: a superseded
COCKPIT self-retires by the landing ritual instead of "push,
write nothing", and still writes no board) ·
[land](../skills/land.md) (the trigger table — three
scenarios plus manual retire) ·
[pickup §6](../skills/pickup.md#6--fleet-resume-on-the-founders-answer)
(the decisions-pending takeover + the supersession write) ·
[liftoff](../skills/liftoff.md) and the cockpit charter master in
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
(the standing job · the auto-land clause · the tombstone
wake-rule) · [HOME §Terms](../HOME.md#terms) (the two lands and
supersession) · [ATLAS](../ATLAS.md) diagram 3 (re-rendered per
its own maintenance duty) · [IDEAS](../IDEAS.md) (the
superseded-seat line) · [the spec](specs/land-doctrine-v2.md) +
its memory (in flight on the bench; moves to history at the weld)
· this entry.

## D-062 — The wake-rule generalized

In full: 2026-07 — The wake-rule generalized — ANY superseded seat exits by its own closing ritual, never bare: a cockpit by the landing ritual, a ground control tower by capture-then-close with team findings captured first; no superseded seat writes a board, because the baton has already moved (closes D-056's deferred road in full; upholds D-056 and D-061)

**Decision:** the tombstone wake-rule stops being a cockpit rule
and becomes THE rule for every seat. ANY session that finds
itself superseded — its [DASHBOARD](../DASHBOARD.md) seat-stamp
no longer its own — EXITS BY ITS OWN CLOSING RITUAL, never
bare:

- a COCKPIT by the landing ritual
  ([D-061](#d-061--the-landing-doctrine-recut-to-three-scenarios)
  clause 3), so its lanes are fenced rather than abandoned;
- a GROUND CONTROL TOWER by
  [D-056](#d-056--team-aware-leaving-rituals)'s
  capture-then-close — and IF A TEAM IS LIVE, ITS FINDINGS ARE
  CAPTURED FIRST, before anything else, exactly as that entry
  orders it.

EVERY superseded seat WRITES NO BOARD. The baton has already
moved to whoever superseded it, and two seats repainting main's
bookkeeping is the failure the baton law exists to prevent. The
exit writes the seat's OWN homes — its bench memory, its lanes'
fences — and nothing that belongs to the seat now holding the
baton.

This CLOSES IN FULL the road
[D-056](#d-056--team-aware-leaving-rituals)
left open and its bench filed rather than solved in passing.

**Why:** D-056 covered every exit that RUNS A RITUAL — handoff
FULL and QUIET, liftoff, land, go-remote, Esc — and supersession
was the one road out that ran none: "push, write nothing". That
made it the single place where a team's findings could die
silently, since a team's output lives in transcripts that vanish
with the session and nothing was licensed to write it down.
[D-061](#d-061--the-landing-doctrine-recut-to-three-scenarios)
fixed that for the cockpit and, in doing so, showed the shape of
the general answer — a superseded seat is not a seat that must
vanish, it is a seat that must HAND OVER — but it fixed it only
where the landing doctrine reached, and a cockpit is the one seat
that never leads a team. So the fix landed everywhere except the
case that raised the problem. Generalizing costs nothing new:
every seat already HAS a closing ritual, and the rule is simply
that supersession routes to it rather than around it.

The no-board clause is what keeps the generalization safe. The
reason supersession originally said "write nothing" was to stop
a dead seat from fighting a live one over shared surfaces — a
real hazard, and it survives intact here, narrowed to what
actually causes it.

**Alternatives rejected:** leaving supersession bare and adding a
capture clause to
[handoff §1.2](../skills/handoff.md#12--shut-the-team-down-full-only)
only — the candidate the D-056 bench filed; it fixes the team
case and leaves the deeper oddity standing, that one road out of
a sitting still runs no ritual at all · letting a superseded seat
run its ritual INCLUDING the board write — the hazard the
original clause existed to prevent, and D-061's bench had already
found it live (a superseded cockpit's MODE R repaint would erase
the takeover stamp of the desk that superseded it) · a separate
supersession ritual of its own — a fifth road out to maintain,
when every seat already carries the ritual that knows how to
close it.

**Affects:**
[LAWS §Parallel lanes & cloud](../LAWS.md#parallel-lanes--cloud)
(the supersession clause reworded from D-061's cockpit exception
to this general rule) ·
[land §Teams](../skills/land.md#teams--not-this-rituals-case-both-modes)
(one sentence: a superseded tower leading a team captures, then
closes, and writes no board) · [HOME §Terms](../HOME.md#terms)
(the supersession entry gains the generalized line) ·
[IDEAS](../IDEAS.md) (the superseded-seat line CLOSED in full) ·
[the spec](specs/land-doctrine-v2.md) + its memory (in flight on
the bench; moves to history at the weld) · this entry.

## D-063 — Response doctrine v2 and Web instructions v6

In full: 2026-07 — response doctrine v2 + Web instructions v6 — two channels: sentences for the founder, fenced blocks for machines; process is proof, not prose; the chat-start ingest contract; the relay rule — origin is the only courier, Code's output is never pasted to Web; reviews speak in goal-and-outcome; the core-file alert; the agenda convention; brief renders the full picture; the master gains a version history (amends D-052)

**Decision:** the response doctrine goes to V2 in its one home
([HOME §Response doctrine](../HOME.md#response-doctrine)), and the
Web surface's instruction master goes v5 → v6 carrying it.

THE DOCTRINE, seven rules, led by the one that reorganizes every
other: TWO CHANNELS — sentences for the founder, fenced blocks for
machines, and NO TECHNICAL CONTENT OUTSIDE A FENCE. Then: three
questions in order WITH TIMING (what is the situation · what is
needed, counted · what exactly does the founder do, and WHEN);
PROCESS IS PROOF, NOT PROSE — verification detail lives in the
block or the record, the prose states only the outcome;
human-readable, and "if it looks stressful to read, it already
failed"; depth on request; state derived live; glyph verdicts,
now including ⏸ and ⏳.

V6 ADDS what v5 had no home for. THE CHAT-START INGEST CONTRACT —
what a fresh chat reads before answering (this box drift-checked
against the master's version line, LAWS, the board, the roadmap,
live git plus every open bench's memory Status), with the rest
declared act-gated, topic-gated, or never-proactively. THE RELAY
RULE — ORIGIN IS THE ONLY COURIER: everything Code produces is on
origin by law, so the Web surface never asks the founder to paste
Code's output; the founder's messages are triggers ("review",
"review PR N", "brief"), outcomes are confirmed by re-deriving,
and the sole exception is content that never reached origin (a
crash, a pre-commit error, a platform-UI fact). REVIEWS SPEAK IN
GOAL-AND-OUTCOME — what the bench set out to do and whether it
did, in plain sentences, with receipts and shas confined to the
fenced verdict, and a verdict that is PER-SHA: any new commit
voids it. THE CORE-FILE ALERT — a prompt touching LAWS, HOME,
FOUNDATION, ROADMAP structure, ENGINE, SETUP, or any master names
each file and its change before the block, so the founder can
ponder once more. THE AGENDA CONVENTION — a chat-local numbered
ledger, rendered on item switch and inside any brief or handoff;
it also carries the one guardrail revived from v5's retired
sections, NEVER ENCOURAGE WORK AHEAD OF ITS ROADMAP STAGE. THE
EXPLICIT-GO LAW — a proposal and its block never share a message;
the block is generated only on the founder's explicit go, so
agreeing to an idea is never mistaken for agreeing to the mandate
that implements it. BRIEF RENDERS THE FULL PICTURE — a richer
pickup: where we are · working on · needs you, counted · just
happened · parallel · next. The no-solo-approval gloss is restated
for the seat rather than amended, and the Web handoff becomes a
labelled instruction line plus one fenced paste.

THE MASTER GAINS A VERSION HISTORY — a table at its bottom
(version · date · vehicle · one-line change) and, as its own law,
FULL COPY, ALWAYS: whenever a version is compiled or the master
merges, the surface in hand prints the COMPLETE new text for the
box paste, never a diff.

**Why:** [D-052](#d-052--response-doctrine)
set one standard for how every surface speaks, and it worked — but
it optimized the SHAPE of a reply (answer first, explicit steps,
purpose last) while leaving its CONTENTS mixed. A single paragraph
would carry a status, a sha, a gate count, and an instruction, and
the founder — a solo builder without a CS background — had to
sort the machine's business from their own. Two channels fixes
that at the root: if it is for a machine it goes in a fence, and
what remains in prose is by construction readable. Process-is-
proof follows from it: a gate that ran is proven by the record,
not by narrating the run.

The v6 additions are all failures already paid for. Chats were
being started with a status question answered from stale
Project-knowledge, so the ingest contract makes the first read
explicit and drift-checks the box against its own master. The
founder was repeatedly asked to ferry Code's output into Web when
that output was already on origin — the relay rule ends it and
names the one class that genuinely cannot travel any other way.
Reviews were arriving as receipt-dumps the founder had to
interpret; the goal-and-outcome shape says what a review is FOR.
And a master with no version history could not be drift-checked
at all, which is what makes the ingest contract's first step
possible.

**Alternatives rejected:** keeping doctrine v1 and fixing only the
Web box — the box already said "follow HOME §Response doctrine",
so the fix would have created two doctrines and the copy would
have won by proximity · a machine-readable header on every
response instead of fenced blocks — more structure for the reader
to parse, not less, and the fence is a boundary the founder
already recognizes · letting the relay rule be advisory ("prefer
origin") — the failure it fixes is a habit, and a preference does
not break a habit · rewriting the rituals' report shapes in this
same bench — ship §6, pickup §5, handoff §6, liftoff §7, land's
reports and the charter's rule 5 all speak in v1's shape; sweeping
six surfaces while the doctrine itself is still being minted is
how a recut half-lands, so it is filed to
[IDEAS](../IDEAS.md) as its own bench.

**Affects:**
[HOME §Response doctrine](../HOME.md#response-doctrine) (the body
rewritten to the seven v2 rules; framing and one-home clause
kept) · [WEB-INSTRUCTIONS](../WEB-INSTRUCTIONS.md) (the fenced
master replaced with v6; a version-history table added below it) ·
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
(the cockpit charter's rule 5 gloss reduced to a pure pointer —
it named doctrine v1's clauses, which this entry retires) ·
[IDEAS](../IDEAS.md) (the ritual/report-shape sweep filed) · this
entry.

## D-064 — The box-master class and SETUP entry contract

In full: 2026-07 — The box-master class + the SETUP entry contract — every external-box master is its own top-level file on the WEB-INSTRUCTIONS pattern; COCKPIT-CHARTER.md and LANE-WORKER.md extracted verbatim; SETUP compresses to a replication spec under the entry contract (WHAT · WHERE · VALUES · VERIFY · SOURCE); DESIGN-KICKOFF joins the class on paper

**Decision:** two things, and the second is why the first matters.

**(1) THE BOX-MASTER CLASS.** A master for any EXTERNAL BOX — text
this repo authors but another product stores — is its OWN
TOP-LEVEL FILE under `docs/`, built on the shape
[WEB-INSTRUCTIONS](../WEB-INSTRUCTIONS.md) proved at
[D-063](#d-063--response-doctrine-v2-and-web-instructions-v6).
FOUR ELEMENTS, all four required:

- HEADER LAWS in prose — the box is a COPY, never the source;
  RE-SAVE after any edit; FULL COPY, ALWAYS (any surface
  compiling a new version prints the complete text, never a
  diff).
- ONE FENCED MASTER — the exact text that goes in the box, and
  nothing else inside the fence.
- A VERSION-HISTORY table — version · date · vehicle · one-line
  change.
- A SOURCES block pointing at the wiring that stays elsewhere.

Two masters move into the class NOW, both extracted VERBATIM:
`docs/COCKPIT-CHARTER.md` (the cockpit routine's saved prompt,
and the text liftoff adopts into every `--cloud` birth) and
`docs/LANE-WORKER.md` (the lane-worker routine's saved prompt).
[DESIGN-KICKOFF](../DESIGN-KICKOFF.md) JOINS THE CLASS ON PAPER —
it is a box master by definition, and it retrofits at its next
natural edit rather than being churned now.

**(2) THE SETUP ENTRY CONTRACT.** [SETUP](../SETUP.md) is a
REPLICATION SPEC — what a person needs to rebuild this workshop on
a new machine or a new account — so every entry answers five
fields and nothing more: **WHAT** it is · **WHERE** it lives
(the console, the path, the URL) · **VALUES** (names only; never
a secret value) · **VERIFY** (how to know it works) · **SOURCE**
(the pointer to whatever governs it). Anything that is not one of
those five belongs elsewhere: the CLERK RECORD relocates to the
record shelf, and the cockpit's WHY relocates to
[HOME](../HOME.md). THE COMPRESSION IS A FOLLOW-UP BENCH; this
entry decides the contract and clears the two masters out of the
way so that bench has less to move.

**Why:** SETUP had become a container rather than a spec. It held
the cockpit charter and the lane-worker prompt in full — two of
the longest texts in the repo — plus a retired clerk's complete
record, plus the reasoning for why the cockpit works as it does,
none of which a person rebuilding the workshop needs at the
moment they are rebuilding it. The cost is not aesthetic: a
master buried inside a section about routine wiring is hard to
find, hard to diff, and impossible to version, and the re-save
duty it carries has nowhere to be stated where its reader will
see it. WEB-INSTRUCTIONS had already solved exactly this for the
Web box, and the solution generalized without modification.

The class also makes the re-save duty CHECKABLE. Each master now
carries its own version history, so "which boxes are stale?" —
a question the founder previously answered from memory, and which
[IDEAS](../IDEAS.md) has carried as an open line since 07-24 —
becomes a question about files.

The entry contract's five fields come from what SETUP is FOR. A
replication spec is read under pressure, by someone who has
something broken or missing; every field answers a question that
person actually asks, and prose that answers none of them is
weight they carry while looking for the line that does.

**Alternatives rejected:** leaving both masters in SETUP and
adding a version-history table there — the table would sit in a
file whose other sections version independently, so it would
describe nothing precisely · one combined `BOX-MASTERS.md`
holding every master — the boxes are pasted independently into
different products, and a combined file would make every paste a
selective copy, which is exactly what FULL COPY, ALWAYS exists to
forbid · retrofitting
[DESIGN-KICKOFF](../DESIGN-KICKOFF.md) in this same bench — it is
untouched otherwise and nothing forces the churn; the class
states it belongs, and the next real edit to that file lands the
shape · compressing SETUP here rather than in a follow-up — the
compression moves a retired clerk's whole record and the cockpit
why into two other files, which is a bench's worth of relocation
on its own; doing it beside a verbatim extraction would make the
diff unreviewable, and a verbatim move is only verifiable when it
is the ONLY thing in view.

**Affects:** `docs/COCKPIT-CHARTER.md` (born — the charter
extracted verbatim) · `docs/LANE-WORKER.md` (born — the
lane-worker prompt extracted verbatim) ·
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
(both embedded masters replaced by one pointer line each; every
wiring fact kept; the phone bootstrap now adopting the charter
from its own file) · the living-doc pointer sweep
([liftoff](../skills/liftoff.md) ·
[land](../skills/land.md) ·
[parallel-lanes](../skills/parallel-lanes.md) ·
[HOME](../HOME.md) · [ATLAS](../ATLAS.md) ·
`scripts/fire.mjs`) · [the spec](specs/box-masters.md) + its
memory (in flight on the bench; moves to history at the weld) ·
this entry. The frozen record is deliberately UNTOUCHED — its
citations of the old location were true when written.

## D-065 — The box-master diet

In full: 2026-07 — The box-master diet — a box master carries standing rules, invariants, and pointers; procedures live in their repo homes and are derived at need; values live in SETUP; provenance labels do not ride boxes (the session that needs a decision's text greps the clone); the cockpit charter goes v3 on the principle, the connector ladder moves to HOME (upholds D-064, amends the charter's D-061/D-048 embeddings by relocation, not repeal)

**Decision:** THE BOX-MASTER DIET — what belongs INSIDE a box
master, which
[D-064](#d-064--the-box-master-class-and-setup-entry-contract)
gave a home and a shape but never a content rule. Four clauses:

1. **A box carries STANDING RULES, INVARIANTS, and POINTERS** —
   what its reader must always do, what must always hold, and
   where to look for everything else.
2. **PROCEDURES LIVE IN THEIR REPO HOMES** and are derived at
   need. A box's reader has the clone; a procedure copied into
   the box is a second home that drifts.
3. **VALUES LIVE IN [SETUP](../SETUP.md)** — the box names the
   thing and points; the number, the path, and the exact setting
   stay in the replication spec that exists to carry them.
4. **PROVENANCE LABELS DO NOT RIDE BOXES.** A rule in a box is
   stated, not attributed: the session that needs a decision's
   reasoning greps the clone it already has, and the D-number tag
   costs every future reader attention it does not need.

THE COCKPIT CHARTER GOES V3 on the principle — eight rules, no
embedded procedure. THE CONNECTOR LADDER MOVES TO
[HOME](../HOME.md), joining the dependency map that already
explains it, under one title naming both. THE SPLIT IS STATED IN
BOTH FILES so neither claims the other's job: the charter holds
the STANDING DUTY (climb the ladder, never improvise) and the one
thing a superseded session must say WITHOUT reading anything —
the exact tombstone line; HOME holds the PROCEDURE.

This AMENDS BY RELOCATION, never by repeal. Every rung, every
script, and the cap arithmetic all survive at a named home;
[D-061](#d-061--the-landing-doctrine-recut-to-three-scenarios)'s
wake-rule and
[D-048](#d-048--cockpit-resilience)'s
five rungs are unchanged in force and moved in address.

**Why:** a box master is the one artifact in this workshop that a
session carries INSTEAD OF READING the repo — it is pasted into
another product's box and arrives before the clone does. That
makes its length a direct cost: every line is context the session
spends before it has done anything, and every procedure inside it
is a copy that cannot be kept in step with the file it duplicates.
The cockpit charter had drifted furthest — it carried a five-rung
recovery procedure, its sub-rungs, and a founder-facing script,
all of which a cockpit could derive from its own clone at the
moment it actually needed them, which is the only moment they
matter.

The rules/invariants/pointers cut is not arbitrary. A rule must
ride the box because there is no moment to look it up: rule 8's
tombstone line must be sayable by a session that has just learned
it is superseded and must write nothing else. A procedure must
NOT ride it, because its moment always comes with a clone
attached. That test — "is there a moment where this is needed and
the repo is not available?" — is what sorts one from the other.

Provenance labels fail the same test twice over. `(D-061)` beside
a rule tells the reader nothing they can act on; if they want the
reasoning they have `grep`, and if they do not, the tag is
noise sitting in the most expensive real estate in the repo.

**Alternatives rejected:** keeping the ladder in the charter and
merely trimming its prose — the length was a symptom; the disease
is a procedure with two homes, and a shorter copy drifts exactly
as fast · moving the ladder to [SETUP](../SETUP.md) instead of
HOME — SETUP is a replication spec under
[D-064](#d-064--the-box-master-class-and-setup-entry-contract)'s
entry contract, and a recovery ladder is neither a value nor a
verify; HOME already held the dependency map that the ladder is
the answer to, so the two belong in one section · dropping the
tombstone line from the charter and pointing at HOME for it too —
the one case where the reader provably cannot read: a superseded
session's whole duty is to say one sentence and write nothing,
so that sentence must already be in hand · applying the diet to
all three masters in this bench — [LANE-WORKER](../LANE-WORKER.md)
and [WEB-INSTRUCTIONS](../WEB-INSTRUCTIONS.md) are governed by the
principle from now on, but each recut is its own verifiable diff,
and bench 1 already proved that a verbatim-critical change is only
checkable when it is the only thing in view.

**Affects:** [COCKPIT-CHARTER](../COCKPIT-CHARTER.md) (the fence
recut to v3; header laws unchanged; a v3 version row) ·
[HOME](../HOME.md) (the cockpit section absorbs the full ladder
and is retitled to name both the paths and the ladder) · the
citation sweep into the moved content ·
[the spec](specs/charter-v3.md) + its memory (in flight on the
bench; moves to history at the weld) · this entry.
[LANE-WORKER](../LANE-WORKER.md) and
[WEB-INSTRUCTIONS](../WEB-INSTRUCTIONS.md) are governed from now
on but NOT recut here.

## D-066 — The IDEAS entry contract

In full: 2026-07 — The IDEAS entry contract — one idea per line, one line per idea, plain language, links short-text at the tail; glyph first (open · developed with vehicle · declined with a one-word why); two sections, OPEN newest-first and CLOSED one line each; closed entries COMPRESS AND STAY as the outcome ledger (amends the delete-at-harvest compaction law); multi-part thoughts split so closure is per-idea; findings and probe stories live in the record, never here; enforcement — the header is the law, handoff's harvest grooms to it every sitting, liftoff/decide/parallel-lanes cite it at their write steps, the critic and the external review grade IDEAS diffs against it

**Decision:** [IDEAS](../IDEAS.md) gains an ENTRY CONTRACT, stated
at its own head and enforced by every file that writes there.

**THE SHAPE.** One idea per line, one line per idea — a plain
sentence a tired reader scans, jargon translated, links short-text
at the tail. GLYPH FIRST: ⏳ open · 🟢 developed (vehicle linked) ·
⚪ declined (one-word why). TWO SECTIONS: OPEN, newest first ·
CLOSED, one line each. A MULTI-PART THOUGHT SPLITS into separate
lines so closure is per-idea. FINDINGS AND PROBE STORIES ARE NOT
IDEAS — they live in the record; a line here points at them.

**THE AMENDMENT.** [D-050](#d-050--session-lifecycle-closed-is-not-dead)
made IDEAS an inbox-not-an-archive and DELETED closed entries at
every harvest. That half is amended: CLOSED ENTRIES COMPRESS AND
STAY, one line each, as THE OUTCOME LEDGER. The inbox-not-archive
principle survives in the compression — a closed idea keeps one
line and its closing vehicle, never its narrative.

**THE ENFORCEMENT**, because a shape with no enforcer decays back
in one sitting: the header IS the law;
[handoff](../skills/handoff.md)'s harvest grooms the file to it
every sitting (compressing, never deleting);
[liftoff](../skills/liftoff.md),
[decide](../skills/decide.md) and
[parallel-lanes](../skills/parallel-lanes.md) cite it at their
write steps. The ship-time critic and the external review grade
IDEAS diffs against it AS THEY ALREADY GRADE ANY CONTRACT — that
clause needs no new wiring, and neither [ship](../skills/ship.md)
nor [WEB-INSTRUCTIONS](../WEB-INSTRUCTIONS.md) is edited here.

**Why:** the inbox had become the least readable file in the repo
— single entries running past twenty lines, several ideas bundled
into one bullet so no part could close without the others, and
probe narratives sitting where a scanning reader expects a
sentence. The founder's actual use of this file is a thirty-second
scan for "what is open?", and the file had stopped answering it.

The delete-at-harvest half was worse than unreadable: it made the
file unable to answer "what did we decide about X?". A closed idea
deleted leaves the reasoning discoverable only by knowing which
PR to look in — which is precisely the knowledge a person asking
the question does not have. Compression keeps the answer at one
line's cost.

Splitting multi-part thoughts is what makes closure honest. The
07-22 "four smaller ones" entry sat PARTLY CLOSED for a week
because one of its four had shipped and three had not; under the
contract those are four lines and three of them are still open,
which is both true and actionable.

**Alternatives rejected:** keeping delete-at-harvest and relying
on [the ledger](../record/history/README.md#the-ledger) to answer
outcome questions — the ledger is keyed by PR and tells you what
shipped, not what was CONSIDERED and declined; a declined idea
leaves no ledger line at all, so its outcome would vanish
entirely · a separate `DECLINED.md` — a second file to keep in
step, when one section header does the same work · letting
entries stay long and merely sorting them — length is the
symptom; the disease is that an entry mixing four ideas and a
probe narrative cannot be classified, closed, or scanned · a
CI check enforcing the shape mechanically — the contract's
clauses are judgments (is this one idea? is this plain?), and a
checker that cannot judge them would either pass everything or
block on formatting; the critic and the external review already
grade contracts, and they can read.

**Affects:** [IDEAS](../IDEAS.md) (the header becomes the
contract; every entry re-derived under it, status verified
against the record) ·
[handoff](../skills/handoff.md) (the harvest step compresses to
CLOSED and cites the contract; §1.2's IDEAS instruction cites it)
· [liftoff](../skills/liftoff.md) ·
[decide](../skills/decide.md) ·
[parallel-lanes](../skills/parallel-lanes.md) (one citing line
each at their write steps) · [HOME](../HOME.md) (the IDEAS routing
row and lifecycle, the outcome-ledger row, the micro-PR safety
argument, and a files-table + routing row for the new
`record/probes/` shelf) ·
`docs/record/probes/cloud-birth-in-ci.md` (born — a probe
narrative the contract evicts and nothing else recorded) ·
[the spec](specs/ideas-contract.md) + its memory (in flight on
the bench; moves to history at the weld) · this entry.

## D-067 — The report skeleton and the board diet

In full: 2026-07 — The report skeleton + the board diet — every founder-facing report, ritual or not, renders five slots in order: VERDICT (glyph + state + finding count) · YOUR ACT (exact word or paste · surface · when, or "nothing") · OFF-ORIGIN (content existing only in the session, else omitted) · one-breath context · a pointer to the record, never a retelling; one job per surface — the gate report carries ready + the word, the external review carries decisions, the shipped report carries confirmation + needs-you + next; PUSH FIRST, REPORT SECOND — beyond the founder's acts and off-origin content, a report may contain nothing not already on origin; the DASHBOARD is the standing report and diets to the same principle: state and acts only, stories live in the record, position lives once (the bars), Needs-you carries the urgency ladder, the baton renders state never doctrine with the cause vocabulary AUTO-LAND · MANUAL-LAND · DESK TAKEOVER (BY THIS PICKUP), WORKING ON splits from WHERE WE ARE, and the sitting narrative + essay ledger rows + review receipts die into the record

**Decision:** two halves of one principle — what a report contains,
and what the standing report contains.

**THE REPORT SKELETON.** Every founder-facing work-report turn-end,
on every surface, ritual or not, renders FIVE SLOTS IN ORDER:

1. **VERDICT** — glyph + state + finding count. Whether it went
   well, before anything else.
2. **YOUR ACT** — the exact word or paste · which surface · when.
   Or the word "nothing", which is an answer.
3. **OFF-ORIGIN** — content that exists ONLY in this session and
   therefore cannot be derived. Omitted entirely when there is
   none, so its presence means something.
4. **One-breath context** — what this was for and how it went, in
   a sentence or three.
5. **A pointer to the record** — never a retelling.

**ONE JOB PER SURFACE.** The gate report carries READY + THE WORD.
The external review carries DECISIONS. The shipped report carries
CONFIRMATION + NEEDS-YOU + NEXT. A surface that does two jobs makes
the founder sort them.

**PUSH FIRST, REPORT SECOND.** Beyond the founder's acts and
off-origin content, a report may contain NOTHING that is not
already on origin. The report is a pointer with a verdict on it,
not a second copy of the work.

**THE BOARD DIETS TO THE SAME PRINCIPLE**, because
[the DASHBOARD](../DASHBOARD.md) is the standing report — the one
that renders when no one is speaking. State and acts only. Stories
live in the record. POSITION LIVES ONCE, in the bars. NEEDS-YOU
CARRIES AN URGENCY LADDER — 🔴 blocking now · 🟡 needed, with its
timing word · ⚪ whenever — so the founder can triage by glyph.
THE BATON RENDERS STATE, NEVER DOCTRINE, in one cause vocabulary:
AUTO-LAND · MANUAL-LAND · DESK TAKEOVER (BY THIS PICKUP). WORKING
ON splits from WHERE WE ARE, because a theme in progress and a
stage's position are different questions. And the sitting
narrative, the essay-length ledger rows, and the review receipts
DIE INTO THE RECORD, which is where they were always meant to go.

**Why:** [D-063](#d-063--response-doctrine-v2-and-web-instructions-v6)
settled HOW a surface speaks — two channels, process as proof. It
never settled WHAT A REPORT CONTAINS, so each ritual grew its own
answer. The founder ends up reading six different layouts to
answer the same three questions every single time: did it go well,
what do I do, and where does it go. Six shapes for one job is a
tax paid on every turn-end.

The slot order is not cosmetic. VERDICT first because a founder
scanning on a phone needs the answer before the evidence. YOUR ACT
second because it is the only part that requires them. OFF-ORIGIN
third and OMITTED WHEN EMPTY because its whole value is that its
presence is a signal — this is the one class of content the relay
rule says cannot travel any other way. Context and pointer last,
because they are the parts a reader can skip.

Push-first is the rule that makes the rest safe. If a report may
only say what origin already holds, then a lost message costs
nothing, a re-read costs nothing, and the founder never has to
treat a chat transcript as a system of record.

The board earns the same treatment for the same reason: it is a
report that renders continuously. It had accumulated a sitting
narrative that re-told what the ledger holds, ledger rows the
length of essays, and review receipts — all of it prose a reader
must cross to reach the two things the board exists to answer:
what is the state, and what do I owe?

**Alternatives rejected:** a per-ritual style guide instead of one
skeleton — six guides drift into six shapes again, which is the
disease · making the slots optional "as appropriate" — the whole
value is that the founder learns ONE shape and can find any slot
without reading; optional slots restore the sorting cost · keeping
the board's sitting narrative as a "what happened" convenience —
it duplicates the ledger and the histories, and a duplicate is the
thing that goes stale while looking authoritative · dropping the
OFF-ORIGIN slot and letting sessions mention such content inline —
it is the one content class that cannot be re-derived, so it needs
a named place a founder can trust, not a sentence that might be
missed · a CI check enforcing slot order — the slots are prose
judgments; the critic and the external review already grade
contracts and can read.

**Affects:**
[HOME §Response doctrine](../HOME.md#response-doctrine) (rule 8,
appended; rules 1–7 untouched) ·
[HOME §Reading the board](../HOME.md#reading-the-board) (rewritten
to the new section map) · `CLAUDE.md` (one line pointing every
work-report turn-end at rule 8) ·
[ship](../skills/ship.md) · [pickup](../skills/pickup.md) ·
[handoff](../skills/handoff.md) · [liftoff](../skills/liftoff.md)
· [land](../skills/land.md) (each ritual's founder-facing report
rewritten to a fenced render-exactly-this template, with the board
writers aligned to the baton case renderings) ·
[DASHBOARD](../DASHBOARD.md) (the one-time migration repaint;
the stage flowchart drops, since position renders once) ·
[IDEAS](../IDEAS.md) (the sweep line closes; two lines appended) ·
THE SECTION RENAME RIPPLE — Sessions → THE BATON + IN FLIGHT,
Shipped → RECENT — swept through
[COCKPIT-CHARTER](../COCKPIT-CHARTER.md) (v4: rule 1's self-seat
pointer), [recall](../skills/recall.md),
[parallel-lanes](../skills/parallel-lanes.md), and
[the memory TEMPLATE](../memory/TEMPLATE.md), each of which
addressed the board by its old section names ·
[the spec](specs/report-shapes.md) + its memory (in flight on the
bench; moves to history at the weld) · this entry.

## D-068 — The short-anchor law

In full: 2026-07 — The short-anchor law — every DECISIONS entry heading is a SHORT NAME (8 words maximum) and the complete title or statement lives verbatim in the entry body as its first line, "In full: …"; anchors FREEZE AT MINT, so a short name is never edited after it is written; every citation repo-wide links the short anchor; D-001 through D-067 are retrofitted in the minting PR as a content-preserving format change sanctioned by the retroactivity law — append-only protects the words, and every word survives one line lower.

**Decision:** a decision heading carries a short name, eight words
at most: `## D-0XX — <short name>`. The complete statement — and
the date — move verbatim to the entry's first body line, prefixed
`In full:`. The anchor that name produces is FROZEN AT MINT and
never edited afterwards. Every citation in the repo links the
short anchor. D-001 through D-067 are retrofitted in this PR;
[decide](../skills/decide.md) writes the new format from here on.

**Why:** the heading IS the anchor, and the anchor is quoted
ambient-wide — [LAWS](../LAWS.md), every skill, every story, every
frozen shelf. A statement-length heading therefore charges its full
length to every citing file, on every read, forever.
[D-067](#d-067--the-report-skeleton-and-the-board-diet) made the
bill impossible to ignore: a 1,038-character anchor, cited five
times, written by the very bench that was dieting every other
surface in the workshop. Nothing is lost by the cut, because
nothing is deleted — the statement moves one line down, where it
is read once instead of quoted a hundred times. FREEZING AT MINT
is what makes a short name safe to depend on: an anchor edit
breaks every citation in the repo at once, and a name chosen for
brevity is exactly the kind a later reader would want to "improve".

**Alternatives rejected:**

- **An alias convention** (a short anchor beside the long heading)
  — GitHub has no heading-alias mechanism; the only way to mint a
  second anchor is a second heading, which splits every entry in
  two and doubles what the weave rule must maintain.
- **Shortening new entries only, leaving D-001–D-067 alone** —
  cheaper today, and it leaves the repo with two anchor
  conventions forever, which the retroactivity law exists to
  prevent. The retrofit is mechanical and its links gate proves
  it.
- **Deleting the long titles outright** — faster, and it would
  destroy the record. The statements ARE the decisions; several
  of them are the only place a clause is written in full.
- **A numeric-only anchor** (`#d-068`) — shortest of all, and
  unreadable: a citation would carry no meaning at the point of
  use, which is the one thing the weave rule buys.

**Affects:** [DECISIONS](DECISIONS.md) (all 68 entries: short
headings, `In full:` lines, 92 internal citations repointed) ·
[decide](../skills/decide.md) (§1's entry format, the freeze rule,
the why; §3 gains THE VERBATIM CARVE-OUT — the weave rule does not
reach the `In full:` line, whose plain D-numbers are frozen text) ·
[HOME](../HOME.md) (the ledger's file-catalog row: append-only
governs meaning, not bytes) · THE CITING SWEEP by destination-grep — 23 living files
([LAWS](../LAWS.md) · [HOME](../HOME.md) · [ATLAS](../ATLAS.md) ·
[ENGINE](../ENGINE.md) · [ROADMAP](../ROADMAP.md) ·
[SETUP](../SETUP.md) · [IDEAS](../IDEAS.md) ·
[DASHBOARD](../DASHBOARD.md) · the three box masters' version
tables · [data/](../data/FACTS.md) · eight skills) and 128 frozen
files on the history, specs, chronicle, retired and probe shelves,
which take POINTER-ONLY repairs under
[D-057](#d-057--the-record-shelf)'s enabling ruling — a mechanical
link repair inside a frozen file is maintenance, not a content
edit · [IDEAS](../IDEAS.md) (the LAWS-ANCHOR line closes 🟢) ·
[the spec](specs/anchor-diet.md) + its memory (in flight on the
bench; moves to history at the weld) · this entry.

## D-069 — The law register and the manual groom

In full: 2026-07 — LAWS recut to the register shape — every law renders NAME → the rule in one to three plain sentences → one pointer to its mechanics and its D-number; three laws minted: THE VERIFICATION LAW (nothing unrecorded may be dropped and no status may be asserted without the record confirming it — verify before drop, verify before classify), THE SWEEP LAW (any pointer or citation sweep greps the DESTINATION, never predicted phrasings; the proof of a sweep is a re-run returning zero), THE BOX-MASTER LINE (the class exists in law: a box master is its own top-level file carrying rules, invariants, and pointers; the box is a copy; edits ride PRs; the re-save rides Needs-you — D-064 / D-065); the founder's touchpoints corrected to three (the review word added); dispatch→delegation vocabulary swept in LAWS and HOME; the verification command block becomes a pointer to its one home; HOME groomed — the two day sections merged, six Terms rows added, the board section reduced to reading keys plus the handoff §4 pointer, decide's ripple gains the new-vocabulary line.

**Decision:** [LAWS](../LAWS.md) is a REGISTER, not prose. Every
law in §Workflow and §Parallel lanes & cloud now renders as
**NAME** → the rule in one to three plain sentences → a pointer to
its mechanics and its D-number. Three laws the workshop already
practised are written down — THE VERIFICATION LAW, THE SWEEP LAW,
and THE BOX-MASTER LINE. §The two touchpoints becomes §THE THREE
TOUCHPOINTS, adding the review word. "Dispatch" gives way to
"delegation" throughout, and the dispatch law unifies with THE
CHOOSER LAW. The verification command fence leaves LAWS for a
pointer at [ship §1](../skills/ship.md#1--preflight), which gains
the literal list. [HOME](../HOME.md) grooms alongside: its two
overlapping day sections merge into §A day in the workshop,
§Terms gains six rows, and §Reading the board stops restating the
board spec.

**Why:** LAWS loads into EVERY session through the root
`CLAUDE.md` import, so its length is a tax paid on every sitting
and its shape is what a session actually obeys. It had drifted:
several laws ran as paragraphs re-explaining mechanics that live
in a skill, and the verification loop was quoted in full where its
one home is ship — a second copy the routing law forbids, and one
that had already begun to drift from what ship performs.

The three minted laws are not new behaviour; they are behaviour
the workshop had learned the hard way and stored only in stories.
VERIFY-BEFORE-DROP and VERIFY-BEFORE-CLASSIFY were born at the
[SETUP recut](history/workshop/definition/setup-recut.md) and the
[IDEAS contract](history/workshop/definition/ideas-contract.md);
THE SWEEP LAW was paid for four separate times — most sharply at
[#250](https://github.com/wsher0901/roam/pull/250), where a
re-sweep reported CLEAN because it was still the wrong grep, and
at [#253](https://github.com/wsher0901/roam/pull/253), where an
underscore hid 40 citations. A lesson that lives only in a story
is a lesson the next bench repeats.

THE THIRD TOUCHPOINT is a correction, not an addition: the review
word has been law since
[D-046](DECISIONS.md#d-046--flight-cockpit-the-control-tower-online),
and the founder has been saying it at every gate for weeks, while
the file that names the founder's duties still said there were
two. A touchpoint list that omits a real duty is worse than no
list.

**Alternatives rejected:**

- **Compress by deleting the nuances** (the payload-diff rule, the
  teammate rule, the canary constants) — it would have halved
  §Workflow. The verification law, applied to its own birth,
  forbids it: the payload-diff rule has NO other home in the repo,
  so it stays as a sentence.
- **Move the verification loop to HOME instead of ship** — HOME is
  a manual; a session about to say "done" is reading ship. One
  home, and it is the one already being read at that moment.
- **Leave "dispatch"** — it is the shorter word, and it now names
  a phone feature. Two meanings for one word in a file read by
  every session is a bug, not a style question.
- **A separate bench for HOME** — the touchpoint count, the
  vocabulary, and the board section are the SAME edits on both
  sides; splitting them would leave main inconsistent between two
  merges.

**Affects:** [LAWS](../LAWS.md) (§Workflow and §Parallel lanes &
cloud recut to the register; §The three touchpoints replaces §The
two touchpoints — the heading anchor changes; the three new laws
in §Knowledge & tracking; the verification fence becomes a
pointer; the vocabulary sweep) · [HOME](../HOME.md) (§One day in
the workshop + §The daily loop merge into §A day in the workshop —
both anchors die; §Terms gains six rows — box master · the entry
contract · the report skeleton · the urgency ladder · the outcome
ledger · the short-anchor law; §Reading the board keeps the
reading keys and points at handoff §4 for the map; the touchpoint
restatements go to three; the vocabulary sweep) ·
[ship](../skills/ship.md) (§1 gains the literal verification loop
— the content's home, laid before the fence died) ·
[decide](../skills/decide.md) (§2's ripple gains: new vocabulary
minted → a HOME §Terms row in the same PR) · THE VOCABULARY SWEEP
also reaches [parallel-lanes](../skills/parallel-lanes.md),
[liftoff](../skills/liftoff.md), [pickup](../skills/pickup.md) —
two of which CITED "the dispatch law" by a name LAWS no longer
uses — and, beyond the doc tree, the two `.claude/` skill stubs
that mirror those skills' first lines plus the two session hooks
that inject the same vocabulary (SETUP's "dispatch button" stays:
it names the GitHub feature) · THE ANCHOR SWEEP —
[ATLAS](../ATLAS.md) and this file, plus pointer-only repairs on
three frozen files · [the spec](specs/laws-home-groom.md) + its
memory (in flight on the bench; moves to history at the weld) ·
this entry.

## D-070 — Baton renderings single-homed

In full: 2026-07 — Baton renderings single-homed — every board BATON rendering lives in ONE case table at handoff §4's BATON bullet, each case naming its writer; liftoff, land, and pickup cite their cases instead of re-mandating wording; the fire-time line is "COCKPIT — fired <t> (liftoff) · self-seat pending" (a blind fire has no url; the cockpit's self-seat repaint rewrites it to the live form), which also aligns the phrase with the BATON section the charter's rule 1 reads; MODE P paints ONE line — "No live seat — LANDED <t> via MANUAL-LAND · N lanes frozen → grounded for local pickup <date>" — and pickup's fleet-resume trigger keys on the fleet-at-ground table's presence plus that grounded marker, never on a competing string; cap values point at SETUP; pickup and ship run by the baton-holder; the takeover's two board writes get their ordering sentence; ship's tail names its carried-forward sections; recall gains the chronicle door.

**Decision:** every BATON rendering moves into ONE CASE TABLE at
[handoff §4](../skills/handoff.md#4--repaint-dashboard-the-board-spec--single-source)'s
BATON bullet — one row per case, exact wording, each naming its
writer. [liftoff](../skills/liftoff.md),
[land](../skills/land.md) and [pickup](../skills/pickup.md) CITE
their cases and keep one line of local context; no "wording is
law" block survives outside the table. Two renderings are
corrected in the move: the FIRE-TIME LINE becomes `COCKPIT —
fired <t> (liftoff) · self-seat pending`, and MODE P paints ONE
line ending `grounded for local pickup <date>`. Pickup's
fleet-resume trigger re-keys on TWO FACTS TOGETHER — a
fleet-at-ground table under IN FLIGHT plus that marker. Five
smaller seams close alongside: the daily cap points at
[SETUP](../SETUP.md#once-and-done--cloud-accounts) instead of
being hard-coded twice, pickup and ship declare themselves
baton-holder-only, the desk takeover's two board writes state
their order, ship's tail names the sections it carries forward,
and [recall](../skills/recall.md) gains the chronicle door.

**Why:**
[D-067](#d-067--the-report-skeleton-and-the-board-diet) said each
writer paints its own case and the wording is law — and then left
the wordings in four files. Prose agreement has no linter, so they
drifted into two contradictions that a gate cannot see and only a
FLIGHT can:

- **Liftoff painted a url it cannot have.** Its BATON line said
  `COCKPIT — live since <t> (liftoff) · <url>` while its own IN
  FLIGHT row, three paragraphs earlier, said `self-seat pending`
  — because [D-051](#d-051--self-seat-birth) made the fire BLIND.
  The line would have been written from a value that does not
  exist, on the very board an arriving cockpit reads to decide
  whether to seat itself.
- **MODE P painted two different lines for one landing.** §(d)
  wrote `no live cockpit — grounded for local pickup <date>` and
  §(e) wrote `No live seat — LANDED <t> via MANUAL-LAND ·
  awaiting next pickup`. Pickup's resume trigger matched the
  FIRST string, so a board painted by §(e) would have silently
  offered no fleet resume — the fleet still fenced, still
  findable, and never surfaced.

A rendering quoted in four places is four places to drift. The
table makes drift impossible by construction: there is one row to
change, and every writer reads it.

**Alternatives rejected:**

- **Fix the two contradictions in place** — cheapest, and it
  leaves the four-copy structure that produced them. The next
  wording change re-opens the same bug.
- **Move the renderings into the board file itself** —
  [DASHBOARD](../DASHBOARD.md) is rendered output, repainted
  wholesale by rituals; a spec cannot live in the artifact it
  specifies.
- **Keep pickup's trigger as a string match, just corrected** — a
  string match on prose is what broke; keying on the
  fleet-at-ground table's PRESENCE plus a short marker survives
  any future rewording of the sentence around it.
- **Leave the daily cap written out** — it is a value, and values
  live in SETUP. It had already been written twice, and a number
  duplicated is a number that goes stale in one of its homes.

**Affects:**
[handoff §4](../skills/handoff.md#4--repaint-dashboard-the-board-spec--single-source)
(the BATON bullet becomes the case table — the single home) ·
[liftoff](../skills/liftoff.md) (§6's baton block cites the
fire-time case and states that a blind fire has no url; §2's cap
points at SETUP) · [land](../skills/land.md) (MODE R step 2 cites
its two cases; MODE P §(d) and §(e) cite the ONE grounded case —
the conflicting rendering dies) · [pickup](../skills/pickup.md)
(§3's block cites its cases; §5's fleet-resume trigger re-keys
and its cap points at SETUP; §6 gains the ordering sentence AND
names THE DESK as the writer of the MODE P board material in the
takeover branch, where the superseded cockpit writes no board and
that write had no owner; the header declares baton-holder-only) ·
[ship](../skills/ship.md) (the header declares
baton-holder-only; §8 names the carried-forward sections) ·
[recall](../skills/recall.md) (§1's Why/provenance and Past-work
rows gain the chronicle door, and Why/provenance now names the
short-heading grep + `In full:` per
[D-068](#d-068--the-short-anchor-law)) ·
[the spec](specs/flight-seams.md) + its memory (in flight on the
bench; moves to history at the weld) · this entry.

## D-071 — Atlas gains the enforcement mesh

In full: 2026-07 — ATLAS grows a seventh diagram rendering the enforcement & update mesh — the delivery chain from ambient law to the founder's word — with every box linking the prose home that owns its doctrine; ATLAS's header and HOME's files-table row update six to seven; diagram 1's verification-loop box gains ship §1 as the commands' home; diagrams 3 and 6 gain the baton case-table citation; the stamp refreshes. ATLAS still renders and originates nothing — the prose governs.

**Decision:** [ATLAS](../ATLAS.md) gains §7, THE ENFORCEMENT &
UPDATE MESH: one flowchart of the delivery chain from
`CLAUDE.md`'s ambient import through the register, act-time
skills, the point-only stubs (the five board-writers carrying the
ONLY merge allowance), the three session hooks, CI, the summon
workflow, the settings denies, the critic and the external review,
ending at THE FOUNDER'S WORD as sole merge authority. A DASHED
SIDE-NOTE names the three joints that are judgment only. The
header and [HOME](../HOME.md)'s files-table row go six → seven;
diagram 1 cites [ship §1](../skills/ship.md#1--preflight) as the
verification commands' home; diagrams 3 and 6 cite
[handoff §4](../skills/handoff.md#4--repaint-dashboard-the-board-spec--single-source)'s
baton case table. EVERY BOX LINKS A PROSE HOME, never a machinery
file: ATLAS renders, and doctrine lives in prose.

**Why:** the enforcement layer is the one part of this workshop
that exists almost entirely OUTSIDE the doc tree — in
`.claude/`, `.github/`, and a settings file — and it is the part
a session is least able to discover by reading. Each piece is
recorded where it belongs, and no page had ever drawn them as ONE
CHAIN, so their INTERLOCKS were invisible. The census surfaced one
immediately: CI fires on pull requests and on main, not on every
push, which would leave a branch uncovered until its PR existed —
and it is the BENCH-FIRST LAW, giving every task a draft PR in its
first minute, that closes the hole. Neither law covers the floor
alone, and nothing in the repo said so.

THE DASHED BOX IS THE POINT AS MUCH AS THE CHAIN. A picture of
enforcement invites the belief that everything is enforced, which
is the more expensive error: the links gate proves an anchor
EXISTS and never that it is the RIGHT one (a Needs-you arrow rode
a real-but-wrong heading through every green gate at
[#250](https://github.com/wsher0901/roam/pull/250)); nothing
checks the derivation law (a bar rendered 33 segments for 34
tasks, same bench); board freshness is only ever repaired at a
ritual; and THE TERMINUS ITSELF is judgment — nothing mechanical
enforces that the external review happened or that the word was
given, since the ritual merge allowance is unconditional once a
ritual is running. Drawing those as gaps, each with an
[IDEAS](../IDEAS.md) line, is what keeps the diagram honest.

**Alternatives rejected:**

- **A prose section in [HOME](../HOME.md) instead** — the value
  here is precisely the SHAPE, which is what a diagram carries
  and a paragraph does not. HOME already names each piece; what
  was missing was their order.
- **Linking the machinery files from the boxes** — the shortest
  path from box to truth, and it would make ATLAS a second source
  for rules that live in prose. A hook file says what it DOES,
  never why it is lawful.
- **Drawing the mesh without the gaps** — a cleaner picture and a
  false one. A map that shows only the covered ground is how a
  session comes to trust a gate that does not exist.
- **Waiting for HARNESS V2 to close the gaps first** — the gaps
  are true today, and a diagram that waits for the world to be
  tidy never ships.

**Affects:** [ATLAS](../ATLAS.md) (§7 added; the header six →
seven; the stamp refreshed; diagram 1's Boxes line re-homes the
verification loop at ship §1 with LAWS kept beside it as the
law's home; diagrams 3 and 6 gain the baton case-table citation) ·
[HOME](../HOME.md) (the files-table ATLAS row, six → seven —
one row, nothing else) · [IDEAS](../IDEAS.md) (one line per
judgment-only gap, because a gap named in a diagram and absent
from the inbox is silently parked) ·
[the spec](specs/atlas-census.md) + its memory (in flight on the
bench; moves to history at the weld) · this entry.

## D-072 — The Atlas no-scroll law

In full: 2026-08 — ATLAS gains a RENDERING LAW written into its own header: every diagram is top-down (flowchart TD, never LR), and a node label is a NAME and never a sentence — at most two lines via <br/>, no line over 45 characters — with every sentence a node used to carry living in the prose under its diagram or in the home its Boxes line links; every future re-render obeys. All seven existing diagrams are brought under the law in the same PR, and coverage closes in two places: diagram 1 gains the work-intake band (voiced idea or defect → IDEAS line → decide → ROADMAP line → the bench), and a new diagram 8 "A sitting" draws the ground cycle (session-start hook → pickup → the work loop → handoff FULL → the close-lock → the closed session). ATLAS's header and HOME's files-table row go seven to eight. ATLAS still renders and originates nothing — the prose governs.

**Decision:** [ATLAS](../ATLAS.md)'s header gains THE RENDERING
LAW beside "THIS PAGE RENDERS, IT ORIGINATES NOTHING": TOP-DOWN
ONLY, and A NODE LABEL IS A NAME, NEVER A SENTENCE — two `<br/>`
lines at most, 45 characters at most per line. Everything a box
wants to explain goes to the PROSE under its diagram or to the
home its Boxes line already links. All seven existing diagrams
are rewrapped to the law in the same PR — diagrams 2 and 6
converting `LR` → `TD` — and two missing chains are drawn:
[diagram 1](../ATLAS.md#1--the-task-loop) gains THE INTAKE BAND
upstream of the bench, and a new
[diagram 8](../ATLAS.md#8--a-sitting) draws A SITTING end to end.
The header and [HOME](../HOME.md)'s files-table row go seven →
eight.

**Why:** ATLAS is the page a cold reader opens to see the workshop
WHOLE, and it could not be read that way. Labels had become a
place to explain — one box in §7 ran to 340 characters, written by
this workshop one bench earlier — so mermaid rendered boxes wider
than any screen and two diagrams flowed sideways on top of that.
The reader scrolled horizontally to finish a single box, and THE
SHAPE, which is the only thing a diagram offers that prose does
not, was lost behind the scrollbar. The cause is a category error
rather than sloppiness, which is why the fix is a LAW and not a
tidy-up: a diagram carries structure, prose carries sentences, and
ATLAS already has prose under every diagram plus a Boxes line
linking each doctrine's real home. Writing the rule into the
header is what makes the next re-render obey it — a rewrap alone
would decay at the first bench that added a box.

THE TWO NEW CHAINS ARE COVERAGE, not decoration. Diagram 1 began
at "freshly pulled main" — the bench already existing — so the
single-inbox law, one of the most-cited rules in the workshop,
appeared in no picture at all; a newcomer could not see how a
voiced thought BECOMES work. And nothing drew the ordinary ground
day, the container every other diagram happens inside, which is
also where the close-lock lives — the one mechanism that makes
"closed" mean something precise rather than "the session stopped".

**Alternatives rejected:**

- **Rewrap without writing the law down** — the page would be
  clean today and drift at the next bench, exactly as it drifted
  into this state. A convention nobody can cite is a convention
  that loses to the next author's convenience.
- **A mechanical width lint in the same bench** — the right idea
  and the wrong moment: the gate belongs with the other
  harness-shaped guards, and building it here would mean shipping
  an untested check against a page still being rewritten. It goes
  to [IDEAS](../IDEAS.md) as a line, per the single-inbox law.
- **Deleting the displaced sentences outright** — faster, and it
  would have destroyed real doctrine that lived NOWHERE ELSE. The
  verify-before-drop rule caught four such sentences in §7 alone;
  every one of them is now in prose.
- **Wrapping labels but keeping `LR` for the two wide diagrams** —
  LR is what forces horizontal growth in the first place; keeping
  it would leave the law true in letter and false on screen.
- **A larger character cap (60 or 80)** — 45 is what fits a
  two-line box at a readable width on a laptop half-screen and in
  Obsidian's default pane, which is where this page is actually
  read.

**Affects:** [ATLAS](../ATLAS.md) (the header law; seven → eight;
the stamp refreshed; all seven diagrams rewrapped, 2 and 6
converted to TD; diagram 1's intake band and Boxes-line cites for
IDEAS, decide and the roadmap manual; §1, §5, §7 and the new §8
gain the prose that now carries the displaced sentences) ·
[HOME](../HOME.md) (the files-table ATLAS row, seven → eight —
one row, nothing else) · [IDEAS](../IDEAS.md) (the width-gate
line, and one defect line for a missing HOME row found while
redrawing) · [the spec](specs/atlas-clean.md) + its memory (in
flight on the bench; moves to history at the weld) · this entry.

## D-073 — Atlas becomes designed figures

In full: 2026-08 — ATLAS's eight diagrams are re-authored as static SVG figures under docs/atlas/, embedded by image link, in one visual language — THE FIGURE LAW, which supersedes D-072's mermaid mechanics while keeping its principle (no horizontal scroll, names never sentences): fixed 740-wide viewBox, self-painted panel, actor lanes, cards as acts, quoted trigger words as chips on the crossings they cause, files as badges in the origin lane, double-checked coordinates, the return track for loops, the fixed palette, generic sans-serif and monospace only (no webfonts); lanes encode the chain's dominant dimension — actors by default, surfaces or stores when the chain is about data; every figure re-drawn by the bench that changes what it depicts, in the same PR; the Boxes line under each figure keeps carrying the prose links, since links cannot live inside an embedded SVG.

**Decision:** [ATLAS](../ATLAS.md)'s eight chains are re-authored
as hand-written static SVG figures under [docs/atlas/](../atlas),
embedded by image link, and THE FIGURE LAW goes into ATLAS's
header with its full fixed vocabulary — canvas, lanes, actor
tones, cards, chips, badges, edges, type and the coordinate audit.
It SUPERSEDES
[D-072](DECISIONS.md#d-072--the-atlas-no-scroll-law)'s mermaid
mechanics — `flowchart TD`, the `<br/>` ceiling, the 45-character
cap — while keeping its principle intact: no horizontal scroll,
and a label is a NAME, never a sentence. LANES ENCODE THE CHAIN'S
DOMINANT DIMENSION: actors by default, surfaces or stores when the
chain is about data. Section headings are unchanged, so every
anchor quoted elsewhere still resolves.

**Why:** D-072 fixed the symptom and revealed the ceiling.
Mermaid renders a GRAPH — nodes laid out by dependency — and what
these eight chains actually are is a set of HANDOFFS BETWEEN
ACTORS: you, the control tower, the Web surface, the machine.
Mermaid has no way to say WHO OWNS AN ACT, so ownership had to be
smuggled into node text, which is precisely the pressure that
inflated the labels D-072 had to cut back. Every figure read as a
flowchart of steps rather than a picture of a workshop.

SWIMLANES PUT OWNERSHIP IN THE GEOMETRY. An act sits in its
owner's lane; a crossing between lanes IS a handoff; and the exact
word that causes a crossing rides on it as a quoted chip. A reader
now learns the two things they most need — WHO DOES WHAT, and WHAT
DO I SAY — before reading a single label. That is a capability
mermaid could not be talked into; it needed a different medium.

THE COST IS PAID KNOWINGLY. Hand-authored SVG cannot be
regenerated from a text graph, so a figure is only as current as
the bench that last touched it — which is why the re-draw duty is
written into the law itself, and why the header carries the full
vocabulary rather than a reference to a sample nobody can open.
Links cannot live inside an embedded SVG either, so the Boxes line
under each figure is promoted from convention to load-bearing
structure: it is the only path from a drawn box to its prose home.

**Alternatives rejected:**

- **Staying on mermaid and living with the ceiling** — the labels
  would re-inflate at the first bench that needed to say who owned
  a step, because the medium leaves nowhere else to put it. D-072
  would have to be re-fought rather than superseded.
- **Mermaid's own `sequenceDiagram`** — it does model actors, and
  it models them as a strict message ordering, which most of these
  chains are not: the intake band, the four flight endings and the
  enforcement mesh are branching structures, not conversations.
  One figure would have fit; seven would have been distorted.
- **A build step that generates the SVG from a spec file** — the
  right answer at ten times the volume, and here it would mean
  inventing and maintaining a diagram DSL for eight pictures that
  change a few times a year. The mechanical gate that IS worth
  building is a conformance lint, and it goes to
  [IDEAS](../IDEAS.md).
- **Letting each figure find its own look** — expressive, and it
  would destroy the one thing a shared language buys: that a
  reader learns the vocabulary once and then reads all eight.
  Hence a FIXED palette and a FIXED device set, checked
  mechanically.
- **Keeping the mermaid blocks alongside the figures** — two
  sources for one picture, guaranteed to drift, and the drift
  would be invisible because nothing compares them.

**Affects:** [ATLAS](../ATLAS.md) (the figure law replaces the
mermaid rendering law; the stamp refreshed; every mermaid block
retired and replaced by an image embed; section prose kept and
trimmed where a figure now shows what a sentence said; the eight
headings and every Boxes line unchanged) ·
[docs/atlas/](../atlas) (eight new SVG figures — task-loop,
file-flow, flight, lane-life, surfaces, state-surfaces,
enforcement-mesh, sitting) · [HOME](../HOME.md) (the files-table
ATLAS row — one row, nothing else) · [IDEAS](../IDEAS.md) (the
width-gate line re-scoped to the figure gate; the 48-vs-45
conflict dies with the mermaid medium) ·
[the spec](specs/atlas-figures.md) + its memory (in flight on the
bench; moves to history at the weld) · this entry.

## D-074 — Phase 1 closes on flights 3 and 4

In full: 2026-08-04 — The mid-work freeze test is neither retired nor re-flown on ordinary cargo: it becomes A DETERMINISTIC DRILL — one bench specced to HOLD AT A CHECKPOINT UNTIL ACKED, so that "mid-work" is guaranteed by construction rather than raced against a lane's runtime — and it folds into the failure-drill flight rather than earning a flight of its own; and PHASE 1 OF THE THREE-PHASE STANDING ORDER (D-060) NOW CLOSES ON TWO REMAINING FLIGHTS, not on the freeze property alone: flight 3, the desk takeover of a LIVE cockpit holding a decision, and flight 4, the failure drill (the connector rungs, summon, and the freeze checkpoint together). The founder's word of 2026-08-04, after flight 2 measured the freeze window closed for the third time.

**Decision:** two rulings, taken together on the founder's word:

1. **THE FREEZE TEST BECOMES A DETERMINISTIC DRILL.** The
   wake-lock's rejected-push rule — does a fence actually STOP a
   live worker — is tested by a bench whose spec tells it to HOLD
   AT A CHECKPOINT UNTIL ACKED. Mid-work then holds by
   construction, for as long as the drill needs, instead of being
   raced against how fast the cargo happens to finish. It rides the
   failure-drill flight; it does not get a flight of its own.
2. **PHASE 1 CLOSES ON FLIGHTS 3 AND 4**, amending
   [D-060](#d-060--the-three-phase-standing-order)'s phase 1, which
   named the shakedown flight as its test leg and is silent on what
   follows it. FLIGHT 3 — the desk takeover of a LIVE cockpit
   holding a decision
   ([D-061](#d-061--the-landing-doctrine-recut-to-three-scenarios)
   scenario 2, and
   [pickup §6](../skills/pickup.md#6--fleet-resume-on-the-founders-answer)'s
   other entry door, never flown). FLIGHT 4 — the failure drill:
   the connector rungs, summon, and the freeze checkpoint, run
   together as deliberate failures rather than hoped-for ones.
   Phase 2 opens when both have flown, not when the freeze property
   alone is settled.

Neither flight is scope yet. Both are filed as
[IDEAS](../IDEAS.md) lines per the entry contract
([D-066](#d-066--the-ideas-entry-contract)), and each becomes scope
only when triaged — this entry fixes the CLOSING CONDITION of a
phase, which is the standing order's shape, not a task list.

**Why:** flight 2 measured the thing that defeats the freeze test,
and the measurement is what makes this a decision rather than a
retry. A cloud lane carrying doc-sized cargo runs about five
minutes from licence to completion; lane C ran 4m48s and the
founder's word arrived seventeen minutes after that. Every fence
therefore landed on a finished bench, and the property has now gone
unobserved three times. THE FAILURE IS STRUCTURAL, NOT BAD LUCK: any
duty timed against "the fleet is mid-work" is unrunnable by
construction on cargo this size, so a fourth attempt of the same
shape would fail the same way. A checkpoint that holds until acked
removes the race entirely — the drill decides when mid-work ends,
rather than the cargo deciding for it.

Phase 1 gains its two flights for the same reason it existed at
all: [D-060](#d-060--the-three-phase-standing-order) opened it
because machinery had shipped and never been flown. That argument
does not stop at the shakedown. The desk takeover and the failure
paths are exactly the same class — designed, load-bearing, and
never exercised — and closing phase 1 while they stay untested
would carry the original risk into phase 2 under a different name.

**Alternatives rejected:**

- **RETIRE THE FREEZE TEST** — rejected: the rejected-push rule is
  load-bearing and remains the single largest untested claim in the
  machinery. Retiring it converts an unproven behaviour into a
  permanently unproven one, which is the state phase 1 was created
  to end.
- **ANOTHER FLIGHT ON LONGER CARGO** — rejected: it buys a bigger
  window rather than a guaranteed one, still races the lane's
  runtime, and costs a full flight to test one property
  probabilistically. The checkpoint gets certainty for a fraction
  of the cargo.
- **GIVE THE FREEZE DRILL ITS OWN FLIGHT** — rejected: it shares
  its whole apparatus with the other failure paths, and a flight
  that exercises one deliberate failure is cheaper to run as part
  of a flight that exercises several.
- **CLOSE PHASE 1 ON THE FREEZE ALONE** — rejected by the founder:
  it would declare the away-machinery settled while its takeover
  and failure paths had never once been run.
- **MAKE THE FLIGHTS SCOPE NOW** — rejected: nothing is scope until
  triaged ([D-066](#d-066--the-ideas-entry-contract)), and the
  founder filed them deliberately as inbox lines. Workshop flights
  never appear in the [ROADMAP](../ROADMAP.md) in any case — flights
  1 and 2 shipped as workshop benches with no tick.

**Affects:** [D-060](#d-060--the-three-phase-standing-order) (its
phase 1 closing condition, amended here and left otherwise intact) ·
[IDEAS](../IDEAS.md) (three lines: the deterministic drill, flight
3, flight 4) · [DASHBOARD](../DASHBOARD.md) (the standing order's
phase 1 line and Needs-you, at the next ritual repaint — the board
is never hand-edited) · this entry.

## D-075 — The self-seat duty gains a live-desk case

In full: 2026-08-05 — The self-seat duty of D-051 clause (2) is amended: a newborn cockpit reads THE BATON section and matches one of THREE cases, not two — "self-seat pending" or no live baton-holder of any kind → self-seat · A LIVE BATON-HOLDER THAT IS NOT A COCKPIT, meaning a control tower at a desk → HOLD AND REPORT, seating nothing and superseding nothing · a foreign live cockpit → stray birth, unchanged. Two consequences ride with it: NO BIRTH PROMPT MAY ASSERT A SUPERSESSION, because the board is the arbiter of whether a live seat exists (D-051), so the summon workflow stops hardcoding "You supersede the previous cockpit" into its payload; and THE TOMBSTONE'S SUCCESSOR SENTENCE IS READ OFF THE BOARD RATHER THAN ASSUMED, with the successor duty scoped to replacement COCKPITS only, since a desk takeover writes its own board. The founder's "go" of 2026-08-05, on the 🔴 the summon test returned.

**Decision:** a newborn cockpit matches three cases against
[THE BATON](../DASHBOARD.md#the-baton), not two. The new middle case
— a live baton-holder that is not a cockpit — HOLDS AND REPORTS: it
seats nothing, supersedes nothing, writes nothing, and stays
available under the live commander rather than replacing it. Two
consequences follow and are ruled here rather than left implied: the
firing machinery may not assert a supersession the board has not
granted, and a retiring seat's tombstone reads its successor off the
board instead of presuming a cockpit.

**Why:** [D-051](#d-051--self-seat-birth) was written when the only
two things a newborn cockpit could meet were A COCKPIT or NOTHING.
The baton law
([D-046](#d-046--flight-cockpit-the-control-tower-online)) has always
named the DESK as a commanding seat, and flight 3's desk takeover
made "a desk holds the baton" an ordinary state rather than an edge
one — but nothing propagated that into the duty a cockpit performs
at birth. The gap stayed invisible until a seat was born into it: the
cockpit summoned 2026-08-05 read rule 1 literally, reported that it
was being told to seat itself over a working desk, and refused ONLY
because that board carried a warning hand-written before the fire.
A safeguard that must be hand-written per fire is not a safeguard;
this entry replaces it with a rule.

**Alternatives rejected:**

- **Leave the charter and warn on the board at each fire** — the
  status quo that happened to hold. Rejected: the warning lives in
  no ritual, so it depends on whoever fires remembering to write it,
  and the failure is SILENT when they do not.
- **Make the board's BATON line call a desk a "cockpit"** so the
  existing two cases match. Rejected outright: it makes the board
  lie about which kind of seat holds the baton in order to satisfy a
  document that reads it. The board is the arbiter; the reader
  bends.
- **Let the middle case be a stray birth too** (archive me).
  Rejected: a summoned seat under a live desk is not redundant — it
  is a working seat the founder may want, and flight 4's own summon
  test is the case in point. Holding costs nothing; discarding
  throws away a seat that was deliberately raised.
- **Split the five findings across five benches.** Rejected: four of
  them are one box master, and every separate merge opens another
  re-save window — a master change that never reaches its box fails
  silently
  ([D-064](#d-064--the-box-master-class-and-setup-entry-contract)).
  The fifth is a workflow edit and is deliberately kept OUT of the
  version bump for the mirror-image reason: a one-line YAML fix must
  not wait on a manual paste.

**Affects:** [D-051](#d-051--self-seat-birth) (clause 2, amended
here and left otherwise intact) ·
[the charter](../COCKPIT-CHARTER.md) (rules 1 and 8, and its v5
row) · [HOME](../HOME.md#the-cockpits-api-paths--recovery-ladder)
(R4b's tombstone copy, which the charter deliberately duplicates) ·
`.github/workflows/summon.yml` (the payload's supersession claim) ·
[the bench spec](specs/charter-cockpit-assumption.md) ·
[the summon test's probe record](probes/summon-test.md) (new, and
the evidence this entry rests on) ·
[IDEAS](../IDEAS.md) (THREE lines closed into the outcome ledger by
this bench: the MASTER ITEM, the homeless summon measurement, and
the charter's version-table order) ·
[DASHBOARD](../DASHBOARD.md) (Needs-you gains the box re-save at the
next ritual repaint — the board is never hand-edited) · this entry.

## D-076 — Phase 2 opens with a three-story pilot

In full: 2026-08-05 — Phase 2 opens with a PILOT OF THREE STORIES rather than either option D-060 deferred to this ruling ("all 66 census stories, or the load-bearing dozen first"): no chronicle story has ever been written, so the format, the length and the per-story cost are all unmeasured, and a dozen or sixty-six is a commitment made against an estimate. The pilot writes three deliberately UNLIKE stories — one absorbing brand-new evidence (the wake-lock, whose rejected-push clause flight 4 observed firing for the first time), one whose census ending is STALE and must be rewritten (land, whose census reads "no recorded run" and which has since run four times, all on 2026-08-04), and one carrying a live unresolved defect (the canary handshake, whose ack token is defined two ways in its own section) — so that the format meets its three hard cases before scale is chosen. It returns a written format, a measured cost per story, and a re-ruling of the remaining 63 made against a number instead of a guess. The founder's ruling of 2026-08-05, at the desk, after phase 1 closed.

**Decision:** phase 2 opens with a THREE-STORY PILOT, and the scope
of the remaining 63 is re-ruled when the pilot reports. The three
are chosen to be unlike each other rather than to be the most
important, because the pilot's product is the FORMAT and the COST,
not the coverage.

**Why:** [D-060](#d-060--the-three-phase-standing-order) deferred
this ruling deliberately and named two options, both of which
commit before anything is known — `docs/chronicle/` currently holds
exactly one file, its INDEX, and not one story. The workshop's own
method answers it: flight 1 flew TRIVIAL CARGO to test the flight
machinery, on the principle that a failure observed on small cargo
is a failure of the machinery rather than of the work. A pilot is
that principle applied to the vault. It also unpauses phase 3
sooner in the case where the format needs revision, since three
stories are cheaper to rewrite than twelve.

**Alternatives rejected:**

- **All 66 in one pass** — complete coverage, one mobilization.
  Rejected: the largest commitment available, made against a format
  never once exercised, and it holds
  [V1.S1](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
  T3–T6 and
  [V1.S2.T5](../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
  shut for the longest.
- **The load-bearing dozen first** — D-060's own smaller option.
  Rejected only as a FIRST step, not as a plan: it is the likely
  shape of the second step, and the pilot exists to size it. Twelve
  stories written to a format that turns out wrong is twelve
  rewrites.
- **Picking the three most important stories.** Rejected: the
  pilot's job is to break the format, not to bank value. Three
  important-but-similar stories would exercise one case three
  times.

**Affects:**
[D-060](#d-060--the-three-phase-standing-order) (its phase 2, whose
deferred scope ruling this answers; otherwise intact) ·
[D-059](#d-059--the-chronicle-layer) (the layer this first exercises
— unchanged, and its deferred ship synthesis-at-weld step comes due
at this pilot's weld) · [the chronicle census](../chronicle/INDEX.md)
(three of its 66 rows stop being proposals) ·
[the pilot's spec](specs/chronicle-pilot.md) AND ITS MEMORY ·
THE THREE STORIES THIS RULING PRODUCED —
[the wake-lock](../chronicle/wake-lock.md) ·
[land](../chronicle/land.md) ·
[the canary handshake](../chronicle/canary-handshake.md) ·
[DASHBOARD](../DASHBOARD.md) (the standing order's phase 2 line and
Needs-you, at the next ritual repaint — the board is never
hand-edited) · this entry.

## D-077 — Shelf benches, and the settling weld writes

In full: 2026-08-05 — Two rulings taken together on the founder's word, answering the scope deferred by D-076 and the settle-weld fork the synthesis bench declined to resolve. (1) THE REMAINING 63 STORIES ARE WRITTEN BY SHELF-SIZED BENCHES, Shelf III split — and THE FIRST SHELF BENCH DOUBLES AS THE COLD-BENCH CALIBRATION: its measured cost re-rules the remaining shelves BEFORE they fire, so no fleet is committed against the pilot's floor number. (2) A SETTLING WELD WRITES THE STORY THEN AND THERE, resolving the tension between HOME's routing row and ship §7's recorded-debt form in HOME's favour — because the settling seat has ALREADY PAID THE GATHERING COST that the pilot named as the dominant one, which makes it the cheapest seat that will ever exist for that story. ship §7's cases 2 and 3 are adjusted accordingly inside the first shelf bench, and the story-owed debt form survives ONLY for the backlog the shelf benches will clear.

**Decision:** two rulings, and the second is the reason the first is
affordable.

1. **SHELF-SIZED BENCHES, SHELF III SPLIT, CALIBRATION FIRST.** The
   63 unwritten stories are written a shelf at a time rather than
   all at once or as a cross-cutting dozen. Shelf III (32 of the 66
   rows) is split into slices. THE FIRST BENCH TO FLY IS A
   CALIBRATION: it reports its true cost, and that number re-rules
   the remaining shelves before any of them fire.
2. **THE SETTLING WELD WRITES.** When a weld SETTLES an item that
   has no story, it writes the story at that weld — not a recorded
   debt. [HOME](../HOME.md#where-information-goes)'s routing row was
   right. The debt form stays for the BACKLOG only: items already
   settled before this ruling, which the shelf benches clear.

**Why:** the settle-weld fork looked like a cost trade and was not
one. The synthesis bench argued that writing at the weld makes every
settling weld a story-writing bench, and specced a recorded debt to
avoid it. THE FOUNDER'S READING INVERTS IT USING THE PILOT'S OWN
FINDING: the pilot concluded that story cost is dominated by
SOURCE-GATHERING, not writing — and the seat that just settled an
item has already gathered everything that item's story needs. It is
therefore THE CHEAPEST SEAT THAT WILL EVER EXIST for that story, and
deferring the write to a later shelf bench does not save the cost,
it PAYS IT TWICE. The bench had the right finding and drew the wrong
conclusion from it.

The calibration ruling follows the same logic in the other
direction: the pilot's number is a floor measured by a seat already
saturated in its subjects, so committing four shelves to it would be
planning against a figure its own author disowned.

**Alternatives rejected:**

- **Keep the recorded-debt form for settling welds** (the synthesis
  bench's design). Rejected on the cost argument above: it defers a
  write to a seat that must re-gather, and the re-gathering is the
  expensive half.
- **Amend HOME's two rows to match the debt form** — the other way
  to end the same tension. Rejected because HOME was correct; the
  step was what needed moving.
- **Fire all four shelf benches at once now that a shape exists.**
  Rejected: it spends the fleet against the pilot's floor number.
  One bench measures first.
- **Make the calibration its own throwaway bench.** Rejected as
  waste — a real shelf slice measures the real thing and delivers
  stories while doing it.

**Affects:**
[D-076](#d-076--phase-2-opens-with-a-three-story-pilot) (its
deferred re-ruling, answered here; otherwise intact) ·
[D-059](#d-059--the-chronicle-layer) (ruling 2 now performed
literally by a settling weld — the layer's rules are unchanged) ·
[ship §7](../skills/ship.md#7--on-approval--the-atomic-weld) (cases
2 and 3, adjusted inside the first shelf bench, NOT here) ·
[HOME §Where information goes](../HOME.md#where-information-goes)
(confirmed correct, unedited) ·
[the census](../chronicle/INDEX.md) (its shelves become bench
units) · [the first shelf bench's spec](specs/chronicle-shelf-1.md)
· [DASHBOARD](../DASHBOARD.md) (Needs-you and the standing order's
phase 2 line, at the next ritual repaint — the board is never
hand-edited) · this entry.

## D-078 — The 55 re-ruled on the cold number

In full: 2026-08-05 — The remaining 55 chronicle stories are re-ruled against the calibration D-077 demanded, on the founder's delegation ("re-rule on the cold number"). THE MEASURED FIGURE HOLDS FOR 46 OF THEM: Shelf I (11), Shelf II (11) and Shelf III's remaining slices A (6), B (7), C (7) and E (4) fly as SIX SLICE BENCHES at ≈1m50s per story, the figure a cold cloud lane measured writing eight. SHELF IV (9) DOES NOT INHERIT IT and takes its own calibration bench first, because the lane that measured refused to scale its number there — Shelf IV's sources are code and specs rather than the pre-digested benches that made slice D's gathering cheap. AND THE THIRD CLAUSE IS THE ONE NOBODY HAD NOTICED: slice benches may run CONCURRENTLY only because the INDEX update moves to the WELD, since every slice bench so far wrote docs/chronicle/INDEX.md and the lane law forbids siblings sharing a file — ship §7's synthesis step already performs exactly that write, so the constraint costs nothing to satisfy and a lane now writes story files ONLY.

**Decision:** three clauses.

1. **46 STORIES FLY AT THE MEASURED FIGURE**, as six slice benches:
   Shelf I (11) · Shelf II (11) · Shelf III A (6), B (7), C (7) and
   E (4). Slice E — the task-loop rituals — goes LAST of the six, as
   [its slice note](specs/chronicle-shelf-1.md) argued: those four
   items are touched constantly, so they are worth writing once the
   format has stopped moving.
2. **SHELF IV (9) TAKES ITS OWN CALIBRATION**, exactly as the first
   one worked: a bench that writes the shelf AND reports its true
   cost, because the number that governs Shelves I–III was earned on
   sources Shelf IV does not have.
3. **THE INDEX WRITE MOVES TO THE WELD, WHICH IS WHAT MAKES
   CONCURRENCY LAWFUL.** A slice lane writes its story files and
   NOTHING ELSE; the baton-holder's weld marks the rows written,
   under the synthesis step
   [ship §7](../skills/ship.md#7--on-approval--the-atomic-weld)
   already carries. Without this, two slice lanes collide on
   `docs/chronicle/INDEX.md` and the lane law's no-shared-file
   clause forbids running them together at all.

**Why:** the calibration did its job by contradicting the thing that
commissioned it. Measured cold, WRITING dominates GATHERING roughly
60/40 — the reverse of
[the pilot](history/workshop/definition/chronicle-pilot.md)'s
inference — and the shelf-batching ruling survives anyway, but for a
better reason than the one it was made on: source-sharing INSIDE a
slice is real and large, and one story's gathering cost SIX SECONDS
because its neighbour had opened the same sources minutes earlier.
That is a measurement, where the pilot had only an inference.

Clause 2 exists because the measuring lane said so about its own
number, unprompted, and a bench that names the limit of its own
result has earned that limit being honoured. Clause 3 exists because
a check for shared files across the planned benches found one that
every slice bench had written and nobody had flagged.

**Alternatives rejected:**

- **Fire all seven benches at the measured figure**, Shelf IV
  included. Rejected on the measuring lane's own caveat: its
  gathering was cheap because the ledger indexes PR→history file and
  every slice-D item had a dedicated bench. Shelf IV has neither.
- **Run the slice benches strictly sequentially.** Rejected as
  unnecessary once clause 3 removes the only shared file — but it
  remains the correct fallback if a slice ever needs to write the
  INDEX itself.
- **Let each slice lane write its own INDEX rows** and resolve
  collisions at merge. Rejected outright: the lane law's
  no-shared-file rule exists so merges cannot collide BY
  CONSTRUCTION, and trading that for convenience would spend a
  guarantee to save a weld step that already exists.
- **Re-slice Shelves I and II** (11 each) closer to slice D's 8.
  Rejected as false precision — the measured spread within slice D
  was wider than the difference between 8 and 11.

**Affects:**
[D-077](#d-077--shelf-benches-and-the-settling-weld-writes) (its
deferred re-ruling, answered here; its shelf-bench shape confirmed) ·
[D-076](#d-076--phase-2-opens-with-a-three-story-pilot) (the pilot's
gathering-dominates inference, now measured false — the pilot's
caveats were right and its conclusion was not) ·
[ship §7](../skills/ship.md#7--on-approval--the-atomic-weld) (its
synthesis step becomes the INDEX's only writer during a slice
fleet — no edit needed, the step already does it) ·
[the census](../chronicle/INDEX.md) (its shelves and slices become
bench units) · [parallel-lanes](../skills/parallel-lanes.md) (the
no-shared-file clause is what clause 3 satisfies; unchanged) ·
[DASHBOARD](../DASHBOARD.md) (Needs-you and the phase 2 line, at the
next ritual repaint — the board is never hand-edited) · this entry.

## D-079 — The closing campaign's advance word

In full: 2026-08-06 — THE CLOSING CAMPAIGN, authorized by the founder in the Web ops chat: for ONE enumerated run of work — #330's two rulings, the seven chronicle lane welds, a findings close-out bench, a flight reflection audit, and the close of phase 2 — THE FOUNDER'S MERGE WORD IS GIVEN IN ADVANCE, conditional on two things per bench and no others: GREEN CI ON THE EXACT HEAD, and a NON-AUTHOR REVIEW that is clean or repaired per the rulings this mandate carries. THE EXTERNAL WEB REVIEW IS BATCHED — one post-hoc audit of everything the campaign merged replaces per-bench review, run on the founder's word "verify the close". THREE THINGS STOP THE CAMPAIGN AND ARE SURFACED INSTEAD OF DECIDED: any edit to a box master's fenced text, any new decision beyond this mandate, and any finding that changes BEHAVIOR rather than wording. The advance word is spent by this campaign and does not survive it.

**Decision:** the founder's merge word, ordinarily the sole merge
gate ([LAWS §Workflow](../LAWS.md#workflow-non-negotiable)), is
given IN ADVANCE for one enumerated campaign. Two conditions replace
it per bench, and both must hold: **green CI on the exact head**
([D-038](#d-038--ci-is-the-arbiter) unchanged — never merge over red
or unanswered), and a **non-author review** that is clean or
repaired.

**THE EXTERNAL WEB REVIEW IS NOT WAIVED, IT IS BATCHED.** One
post-hoc audit runs against everything the campaign merged. That is
the trade this decision actually makes, and it is the one worth
naming: per-bench external review is exchanged for a single
end-to-end audit with a wider view.

**THE THREE STOPS.** The campaign halts and surfaces rather than
deciding, on: **(1) any edit to a box master's fenced text** —
[COCKPIT-CHARTER](../COCKPIT-CHARTER.md),
[LANE-WORKER](../LANE-WORKER.md),
[WEB-INSTRUCTIONS](../WEB-INSTRUCTIONS.md) — because a master edit
carries a re-save that fails silently
([D-064](#d-064--the-box-master-class-and-setup-entry-contract));
**(2) any new decision beyond this mandate**; **(3) any finding that
changes BEHAVIOR rather than wording.** The third is the load-bearing
one: this campaign is authorized to write down what is already true
and to close what is already decided, not to redesign anything.

**Why:** the work enumerated here is closing work — repairs whose
rulings are already given, welds whose reviews are already done or
mechanical, and inbox lines whose homes the routing law already
names. Per-bench founder words on that shape of work buy little and
cost a round trip each; a single audit at the end sees the whole
campaign at once, which is strictly more than any one gate saw.

**What it deliberately does NOT relax:** CI stays the arbiter, the
non-author review stays mandatory, and the three stops mean the
riskiest classes of change still reach the founder before they land.

**Alternatives rejected:**

- **Per-bench words as usual.** Rejected by the founder for this
  campaign only — the round trips exceed the value on closing work.
- **Waive the external review entirely.** Rejected: batching keeps
  it, and a post-hoc audit over a whole campaign catches
  cross-bench drift a per-bench review cannot see.
- **Also pre-authorize master edits and behavioral changes.**
  Rejected as the exact place advance authorization stops being
  cheap: a silent-failing re-save or a redesign is what a founder's
  word exists for.

**Affects:** [LAWS §Workflow](../LAWS.md#workflow-non-negotiable)
(the merge gate, suspended for this campaign only and restored when
it ends — the law is not edited) ·
[D-038](#d-038--ci-is-the-arbiter) (unchanged and reaffirmed) ·
[D-064](#d-064--the-box-master-class-and-setup-entry-contract) (the
master-fence stop rests on it) · this entry.

## D-080 — A story may link a sibling, never quote it

In full: 2026-08-06 — [D-059](#d-059--the-chronicle-layer) ruling 5 said a story never cites another story's prose and that cross-references ride decide anchors or ledger lines. THE SEVEN-LANE FLEET FOUND ITS FIRST HARD CASE: Shelf I broke it 22 times across 8 of its 11 stories while the other four lanes broke it ZERO times, because Shelf I is the one shelf whose items are DEFINED BY EACH OTHER — the away-mode chooser IS the fork between handoff, liftoff, go-remote and land, and naming them is the item. The rule is amended to a LINK-ONLY CARVE-OUT on the founder's ruling: a story may LINK a sibling story; it may never QUOTE OR SUMMARISE that story's prose. The purpose ruling 5 was protecting — no second copy of a narrative, no drift between two tellings — is served by the prohibition on quoting and summarising; a bare pointer creates neither.

**Decision:** [D-059](#d-059--the-chronicle-layer) ruling 5 becomes:
**a story may LINK another story, and may never quote or summarise
its prose.** A link may carry a naming gloss — what the target is —
but never its content. Everything else in ruling 5 stands: down-links
into the frozen record remain the norm, and decide anchors and ledger
lines remain the way to carry a CLAIM across stories.

**Why:** the distribution is the argument. Four lanes writing 26
stories about unrelated items cross-cited **zero** times; one lane
writing 11 stories about items that are each other's branches
cross-cited **22**. That is not a careless lane, it is a rule meeting
the case it was not written for — an item whose whole nature is
"these four things" cannot name them without pointing at them.

What ruling 5 exists to prevent is a SECOND TELLING: two stories
narrating the same events, drifting apart, with no home that wins.
**A link cannot drift.** Quoting and summarising can, and both stay
forbidden. The rule keeps its teeth and loses the part that made an
index-shaped story unwritable.

**Alternatives rejected:**

- **Enforce ruling 5 as written** — repoint all 22 at skills and
  decide anchors. Rejected: it costs the reader the trail from a
  chooser to the story that explains each leaf, and it makes the
  ending of an index-shaped item clumsier for no gain in the drift
  risk the rule targets.
- **Merge as-is and file the tension.** Rejected: it leaves the
  record carrying a rule its own stories contradict, which is the
  shape this workshop has repeatedly been bitten by.
- **Let stories summarise siblings too** (drop ruling 5 entirely).
  Rejected outright: the second-telling problem is real, and a
  summary is exactly the thing that drifts.

**Affects:** [D-059](#d-059--the-chronicle-layer) (ruling 5, amended
here; the other five rulings intact) · the 11 Shelf I stories, whose
22 sibling links become lawful without edit ·
[the census](../chronicle/INDEX.md) (unchanged) · this entry.

## D-081 — Phase 2 closes; the polish pass is split out, not dropped

In full: 2026-08-06 — [D-060](#d-060--the-three-phase-standing-order) defined PHASE 2 — THE VAULT as two halves: chronicle story lanes PLUS a connections-and-content polish pass. The stories are done — 66 of 66 census rows WRITTEN, none remaining a proposal, delivered by the three-story pilot ([D-076](#d-076--phase-2-opens-with-a-three-story-pilot)), Shelf III slice D, and the seven-lane fleet ([D-078](#d-078--the-55-re-ruled-on-the-cold-number)). THE POLISH PASS NEVER STARTED, and closing the phase on the stories alone would have made the record say the phase finished as specified, which is not true. The founder was asked rather than guessed at, and ruled: phase 2 CLOSES on the stories plus the closing campaign's patches, and the connections-and-content pass is SPLIT OUT BY DECISION as a named successor bench — never run here, never folded into a claim about coverage, and never silently dropped.

**Decision:** **PHASE 2 IS CLOSED.** Its deliverables are the 66
written stories and the closing campaign's patches
([D-079](#d-079--the-closing-campaigns-advance-word)). **The
connections-and-content polish pass is carved out of the phase and
becomes its own bench: `vault-connections`** — the weave and content
pass across the 66 written stories and the surfaces they point at.
It is named here so it has a home that is not a memory or a board:
this entry. It does NOT gate phase 2's close, and it does NOT gate
phase 3; it is scope from this ruling, and its shape is re-specified
against the 66 stories that now exist rather than inherited from a
scoping written when none did.
With phase 2 closed, D-060's pause lifts: **PHASE 3 — ROAM is
NEXT** —
[V1.S1](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
T3–T6 relaunched from scratch, plus
[V1.S2.T5](../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
design foundations.

**Why:** the alternative readings were each worse in a specific way,
and the difference between them is what a future reader will need.
**Folding** the pass — declaring it absorbed because 63 stories
re-read and re-linked the surfaces they touch — would have been a
claim about coverage that nobody measured, buried inside a word.
**Running** it inside the campaign would have been honest to D-060
as written, but the pass was scoped before a single story existed:
63 stories later, "polish" is a different question than the one
D-060 was answering, and re-specifying it is a bench's work, not a
closing act. **Splitting it out** keeps the change of meaning
visible, costs nothing today, and leaves a known debt with a name
instead of an absence. The nothing-is-silently-parked rule
([LAWS §Workflow](../LAWS.md#workflow-non-negotiable)) makes the
carve-out mandatory once the pass is not being run: a half-phase
that quietly evaporates is exactly the failure that rule exists to
prevent.

**Alternatives rejected:** closing phase 2 without mentioning the
polish pass at all — the record would read "finished as specified",
green and false, and this entry exists because that was the default
outcome · declaring the pass absorbed by the fleet — an unmeasured
coverage claim · running it now — it needs re-specifying against 66
stories that did not exist when it was scoped · holding phase 2 open
until the pass runs — it would keep
[V1.S1](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
T3–T6 and
[V1.S2.T5](../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
paused on work whose shape nobody has agreed, which is the pause
[D-060](#d-060--the-three-phase-standing-order) justified only for
as long as the phase had a plan.

**Affects:**
[D-060](#d-060--the-three-phase-standing-order) (its phase 2 is
closed and its second half carved out; the three-phase order
otherwise intact, and its pause on
[V1.S1](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
T3–T6 and
[V1.S2.T5](../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
LIFTS) ·
[D-079](#d-079--the-closing-campaigns-advance-word) (the campaign
this closes; its advance word is spent here) ·
[the census](../chronicle/INDEX.md) (66 of 66 WRITTEN, and its prose
stops calling itself a list of proposals) ·
[ROADMAP](../ROADMAP.md) (unchanged BY DESIGN — D-060 rejected
expressing the pause structurally, so lifting it is not a recut
either) · [DASHBOARD](../DASHBOARD.md) (the phase lines and
Needs-you, at the next ritual repaint — the board is never
hand-edited) · this entry.

## D-082 — The vehicle chooser

In full: 2026-08-07 — THE VEHICLE CHOOSER, ruled by the founder in the Web ops chat: for parallel work the seat TRIAGES BY RULE rather than by mood. With the founder at a desk, AN AGENT TEAM IS THE DEFAULT — up to four teammates, each on its own bench, with the lane laws unrelaxed. Cloud lanes are reached for only when a NAMED CONDITION holds: more than four disjoint benches · a cold seat is required · the work is unattended or the founder is leaving (liftoff) · or the founder names cloud. EVERY TRIAGE STATES WHICH CONDITION FIRED, so the choice is auditable after the fact rather than defensible only in the moment. Any standing no-agents instruction is retired.

**Decision:** parallel work is triaged by the table below, which
lives once in
[parallel-lanes §The vehicle chooser](../skills/parallel-lanes.md#the-vehicle-chooser)
and is pointed at from everywhere else:

| The seat's situation | Vehicle |
|---|---|
| Founder at a desk, work splits across benches | **AGENT TEAM — the default.** ≤4 teammates, one bench each, lane laws unrelaxed |
| More than four disjoint benches | cloud lanes |
| A cold seat is required (the work must not see this context) | cloud lanes |
| Unattended work, or the founder is leaving | cloud lanes, via [liftoff](../skills/liftoff.md) |
| The founder names cloud | cloud lanes |

**A triage that does not name its condition is incomplete.** The
default needs no condition; every departure from it does.

**Why:** the vehicle was being chosen by habit, and the habit was
cloud. The closing campaign is the evidence: seven chronicle
benches went to cloud lanes with the founder AT THE DESK the whole
time, which cost seven cap runs, two lanes killed by a late ack,
and a canary window that had to be reasoned about twice — none of
which a desk-side team would have encountered at all. The cloud's
real advantages are COLDNESS and UNATTENDED SURVIVAL; neither was
needed that day. Naming the conditions makes the expensive vehicle
opt-in and the cheap one automatic, which is the correct default
for a solo builder who is usually present.

**Alternatives rejected:** leaving the choice to judgement — that
is the status quo, and it produced seven lanes for work a team
could hold · a hard cap forbidding cloud lanes at a desk — the
cold-seat and >4-bench cases are real and the ban would have to be
broken · keeping teams read-only and adding a "prefer fewer lanes"
preference — a preference is not a rule, and
[D-055](#d-055--agent-teams-the-boundary)'s bar on authorship is
what forced the lanes in the first place.

**AMENDS TWO ENTRIES, and the amendments are consequences of the
ruling rather than choices made here:**

- [D-055](#d-055--agent-teams-the-boundary) said **a team never
  authors a bench**. It now may: a teammate authors on its OWN
  branch under unrelaxed lane law. **Both of D-055's risks stand
  unchanged** — a team is SINGLE-SITTING-ONLY, and a
  teammate-authored diff is SELF-AUTHORED and takes external Web
  review before the founder's word.
- [D-045](#d-045--hands-doctrine)'s litmus said **many benches =
  lanes**. It now reads: many benches AT A DESK = a team of ≤4;
  lanes when a chooser condition fires. The rest of the hands
  doctrine — solo for sequential work, subagents for read-only
  research — is untouched.

**Affects:**
[parallel-lanes §The vehicle chooser](../skills/parallel-lanes.md#the-vehicle-chooser)
(new — the table's one home; §Vehicles' "NOT a lane vehicle" line
is replaced by the chooser's terms) ·
[liftoff §2](../skills/liftoff.md#2--triage-every-open-item) and
[§3](../skills/liftoff.md#3--bench-first-birth) (one pointer line
each) ·
[HOME §Agent teams](../HOME.md#agent-teams) (its boundary
sentence, reconciled) ·
[D-055](#d-055--agent-teams-the-boundary) ·
[D-045](#d-045--hands-doctrine) ·
[LAWS §Workflow](../LAWS.md#workflow-non-negotiable) (the chooser
law, which already routes mid-session parallel work to a LOCAL
lane — the chooser refines what "local" means and does not
contradict it) · this entry.

## D-083 — The external-blocker rule

In full: 2026-08-07 — THE EXTERNAL-BLOCKER RULE, ruled by the founder in the Web ops chat after a GitHub Actions major outage stalled the closing campaign for roughly ninety minutes: when a seat determines progress is blocked by something OUTSIDE THE WORKSHOP'S CONTROL — a platform outage, API degradation, arbiter silence — every turn-end report LEADS with one unmissable line, repeated every turn until cleared, and the board's glance line carries the same banner at the next repaint. BURYING AN EXTERNAL BLOCKER IN PROSE IS A REPORT DEFECT, not a style preference.

**Decision:** the line is fixed in form so it cannot be softened
by whoever writes it:

```text
🔴 STOPPED — EXTERNAL: <what> · since <t> · <the one thing the
founder can do, or "nothing — waiting">
```

It is the FIRST thing in the report, above the verdict slot, and
it repeats EVERY TURN until the blocker clears. The board's glance
line carries the same banner at the next repaint. A report that
mentions the blocker only in prose is DEFECTIVE, however accurate
the prose.

**Why:** on 2026-08-06 the arbiter went silent for about ninety
minutes and the reports said so — in paragraph four, under a
heading about what had been achieved. Everything stated was true
and the one fact that governed what the founder could do was
architecturally invisible: a reader skimming saw progress. The
rule exists because AN EXTERNAL BLOCKER IS THE ONE STATE WHERE
MORE WORK CANNOT HELP, and a report format that lets it sink is
optimising for the writer's sense of momentum over the reader's
decision. Repeating it every turn is deliberate: a blocker
announced once and then dropped reads as cleared.

**Alternatives rejected:** a glyph in the existing verdict slot —
🔴 already means "blocked" generally, and the distinction that
matters is whether the founder or the seat can act · one
announcement, not repeated — silence after an announcement is
indistinguishable from resolution · leaving it to rule 7's
"every 🔴 names the fix" — that rule is satisfied by a sentence
anywhere in the report, which is exactly the failure observed.

**Affects:**
[HOME §Response doctrine](../HOME.md#response-doctrine) (gains
RULE 9, and its Sources line gains this entry — the doctrine's one
home; every ritual and charter references it) ·
[handoff §4](../skills/handoff.md#4--repaint-dashboard-the-board-spec--single-source)
(the glance-line spec gains the banner slot, so every ritual that
renders by pointing there inherits it) ·
[LAWS §Workflow](../LAWS.md#workflow-non-negotiable)
(nothing-is-silently-parked, whose reporting counterpart this is —
cited, unchanged) · this entry.

## D-084 — The global design stack

In full: 2026-08-11 — THE GLOBAL DESIGN STACK, adopted at USER SCOPE on the founder's machines rather than inside this repo: Anthropic's official `frontend-design` plugin, three MCP servers (playwright for screenshots, shadcn for registry components, context7 for current library APIs), a delimited `# Design law (global)` section in `~/.claude/CLAUDE.md`, and a global read-only `design-review` agent that screenshots a running surface at 375px and 1440px and returns counted findings. FOUR CONSEQUENCES FOLLOW, and they are the decision as much as the install is: machine parity is owed by machine-setup, so a second machine reproduces the stack from the record rather than from memory; a project's own DESIGN.md CARRIES ITS TASTE and outranks the global law wherever the two disagree; the taste itself — aesthetic direction, typography, and the reference images — remains FOUNDER AUTHORITY, so Roam's DESIGN.md ships with every such slot marked TBD; and a UI-touching diff passes design-review before THE GATE, which makes the agent a gate rather than a convenience.

**Decision:** the design capability lives at USER SCOPE on the
machine, and this repo carries only what is specific to Roam.

| Layer | Where it lives | Who owns it |
|---|---|---|
| The tools — plugin, 3 MCP servers, the `design-review` agent | the machine (`~/.claude/`) | [machine-setup](../skills/machine-setup.md), per machine |

**TWO OF THE THREE SERVERS ARE REGISTERED BY HAND.** context7
arrives with its own user-scope plugin running the identical
command, so a second registration duplicates every one of its
tools; [machine-setup](../skills/machine-setup.md) step 12b is the
authority on which command to run, and this entry defers to it
rather than restating a command that could drift.

**THE TWO `~/.claude/` FILES ARE MASTERED IN THE REPO** — their
full text lives in machine-setup step 12, and the machine copy is
written from it. They sit outside git, so nothing can diff them;
a procedure that merely described them would be re-invented in
different words on the second machine, which is the drift this
layer exists to prevent.
| The general law — banned defaults, typography, color, motion, states | `~/.claude/CLAUDE.md`, delimited | the same procedure, re-runnable |
| Roam's taste — direction, font pair, tokens, references | [DESIGN.md](../DESIGN.md), in this repo | **the founder**, via a taste pass |
| The gate — a UI diff faces design-review before THE GATE | [LAWS §Workflow](../LAWS.md#workflow-non-negotiable) | every seat |

**THE OVERRIDE IS ONE-DIRECTIONAL AND ABSOLUTE:** where
[DESIGN.md](../DESIGN.md) and the global law disagree, DESIGN.md
wins. The global law is a floor for every project on the machine,
not a ceiling for this one.

**Why:** a design capability that lives in the repo has to be
installed by every project separately and drifts between machines;
one that lives at user scope is installed once per machine and
applies to whatever the founder opens. But a global law cannot
carry TASTE — it would make every project look the same, which is
the exact failure the banned-defaults list exists to prevent — so
taste is per-project and the override runs one way.

The gate is the load-bearing half. The stack's value is not that a
screenshot can be taken; it is that a UI diff CANNOT REACH THE
GATE without one having been taken and read. Without that
sentence in [LAWS](../LAWS.md), the agent is a thing a seat may
remember to use, and the case-analysis history of this workshop is
that what is not enforced is not done.

**THE TASTE PASS IS OWED AND IS NOT THIS BENCH'S TO MAKE.**
[DESIGN.md](../DESIGN.md) ships with direction, font pair and five
reference slots marked TBD. A bench that filled them would hand
the founder a face chosen by a docs task; the tower's job is to
prepare a shortlist, and the pending pass is filed in
[IDEAS](../IDEAS.md).

**Alternatives rejected:** the whole stack in the repo
(`.claude/` project scope) — it would travel with git, which is
the appeal, but it also forces every unrelated project on the
machine to re-solve design and puts machine-local MCP config in a
PUBLIC repo, which [LAWS §Safety](../LAWS.md#safety-non-negotiable)
forbids · the law inside [LAWS.md](../LAWS.md) — LAWS is universal
workshop law, and banned typefaces are neither universal nor
workshop-level; they are a floor for UI work on this machine ·
no gate, design-review by judgment — the same shape as the four
judgment-only joints already filed in [IDEAS](../IDEAS.md), and
this one is cheap to enforce · a third-party design skill instead
(UI/UX Pro Max and kin) — unverified third-party code in every
session is a founder call, not a bench's; filed, not adopted.

**Affects:**
[DESIGN.md](../DESIGN.md) (NEW — Roam's taste file, the override
top of this ladder) ·
[CLAUDE.md](../../CLAUDE.md) (a Design section naming the taste
authority and the gate) ·
[LAWS §Workflow](../LAWS.md#workflow-non-negotiable) (the
design-review gate, one sentence) ·
[DESIGN-KICKOFF](../DESIGN-KICKOFF.md) (two preamble lines — the
Design surface reads the law and the taste file before drafting) ·
[SETUP §Per machine](../SETUP.md#per-machine-procedure-machine-setup-skill)
and [machine-setup](../skills/machine-setup.md) (the install as a
re-runnable procedure, plus its Verify lines; the home PC is
pending) ·
[HOME §Terms](../HOME.md#terms) (design law · taste file ·
design-review agent),
[HOME §Equipment & environment](../HOME.md#equipment--environment)
(the stack entry),
[HOME §Where information goes](../HOME.md#where-information-goes)
(a row for Roam's taste — a new information class needs a home in
the routing table) and
[HOME §The files](../HOME.md#the-files--what-each-one-is-for) (a
row for the new file; that table is exhaustive) ·
[IDEAS](../IDEAS.md) (the pending taste pass, the third-party
skills call, and the watchlist) · this entry.
