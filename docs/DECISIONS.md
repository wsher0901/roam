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
