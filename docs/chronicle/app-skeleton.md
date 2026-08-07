---
type: chronicle-story
shelf: IV — Roam
status: living
updated: 2026-08-06 · written · cloud lane
---

# The app skeleton — a real deployment with almost nothing in it, and an engine kept extractable by a lint rule

> **CURRENT ENDING (2026-08-06).** Standing and green: a runnable
> Next.js 16 + React 19 + TypeScript app on Vercel, a Supabase
> Postgres reachable only from the server, GitHub Actions gating
> every PR, and — the load-bearing piece — `engine/` isolated from
> the app **by an ESLint rule rather than by convention**. Three of
> five [V1.S2](../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
> tasks are ticked; the two open ones (schema migration, design
> foundations) are both blocked, one on
> [V1.S1.T7](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
> and one by
> [D-060](../record/DECISIONS.md#d-060--the-three-phase-standing-order).
> **Derived at write time and worth stating plainly: the skeleton
> holds only what those three tasks needed.**
> [D-005](../record/DECISIONS.md#d-005--stack-re-trial-upholds-d-001)
> names Motion, MapLibre GL, dnd-kit and the Vercel AI SDK as the
> frontend layer; none of them is installed. The stack is DECIDED in
> full and INSTALLED in part, and the gap is the honest shape of a
> skeleton.

## What it is

The running scaffold: the smallest real deployment that later stages
can be built into without a rewrite.

What exists today, derived from the repo:

- **The app** — Next.js 16.2.9, React 19.2.4, App Router, TypeScript,
  Tailwind v4, with a single vendored shadcn/ui Button in
  `src/components/ui/` that exists to prove the component pipeline
  rather than to be used.
- **The engine** — `engine/`, a standalone module beside the app, with
  a placeholder `index.ts` and its test. Its README states its own
  status honestly: placeholder only; the real CheckModule contract,
  Verdict shape and orchestrator arrive with V1.S3.T1.
- **The database** — Supabase Postgres, reached through a memoized
  server-side-only client guarded by the `server-only` package, so
  credentials cannot reach the browser.
- **The gates** — GitHub Actions on every PR and every push to main,
  running eight steps on Node 24: install, lint, `format:check`,
  `check:links`, `check:ledger`, `check:memory`, tests, and a full
  production build.
- **The deploy** — Vercel, with PR preview links, and a `vercel.json`
  whose `ignoreCommand` skips builds for docs-only changes.

## What raised it

[V1.S2](../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
was cut to run as a PARALLEL LANE beside the data gate — the two
halves of V1's foundation being built at once, because neither blocks
the other. The skeleton's job was never to do anything; it was to make
the later stages additive.

One requirement shaped it more than the rest. The engine is the
product's brain and may one day be extracted — to Python, for ML
tuning, or anywhere else. If the app and the engine grow entangled,
that extraction becomes a rewrite; if they stay separated, it stays a
move. But separation maintained by good intentions decays on the first
convenient import.

## What changed, in order

- **[#19](https://github.com/wsher0901/roam/pull/19) — the app
  exists** ([V1.S2.T1](../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)).
  A docs-only repo becomes a runnable project: Next.js + TypeScript +
  React 19 on the App Router, Tailwind v4 with one vendored shadcn/ui
  Button, Vitest with a first passing smoke test — and the isolated
  `engine/` directory **with the ESLint rule that enforces the
  isolation**. The app imports the engine through the `@engine/*`
  alias; the engine may import nothing from the app, React, or Next.
  The architectural promise became a build failure rather than a
  README paragraph on the same day the directory was created, which
  is the earliest it could possibly have been made real.
- **[#25](https://github.com/wsher0901/roam/pull/25) — Roam is on the
  internet, with a quality gate**
  ([V1.S2.T2](../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)).
  The Vercel project is linked, the first production deploy goes live,
  PR previews appear on every branch — and GitHub Actions begins
  running lint, format check, tests and a full production build on
  every PR. The framing on record is the important part: **ship's
  quality gate stops being a habit and becomes repo enforcement.**
  Plus `.env.example` hygiene, because the repo is public.
- **[#29](https://github.com/wsher0901/roam/pull/29) — Roam has a
  database**
  ([V1.S2.T3](../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)).
  A fresh Supabase Postgres in `us-east-1`, co-located with the Vercel
  build region per the
  [D-005](../record/DECISIONS.md#d-005--stack-re-trial-upholds-d-001)
  doctrine, with a server-side-only memoized client guarded by
  `server-only`. Auth session persistence stays OFF until accounts
  arrive in V2 — a deliberate non-feature, so the skeleton does not
  carry a half-configured auth surface for a version that does not
  need one.
- **[#167](https://github.com/wsher0901/roam/pull/167) — the deploy
  learns to fail toward BUILD.** The one later change, and it is a
  correction rather than a feature. The `ignoreCommand` that skips
  docs-only builds was calling `git diff` against
  `VERCEL_GIT_PREVIOUS_SHA`; when a burst of commits pushed that SHA
  beyond Vercel's ~10-deep shallow clone, git exited 128, and **Vercel
  treats a non-0/1 ignore-step exit as a deployment ERROR** — four
  production deployments errored in one night. The correction of
  record is precise: an earlier bench's claim that "the failure
  direction is always build" held for exit 1 and NOT for exit 128, and
  **the author, the pre-gate critic and the external review all passed
  it**, because nobody had exercised the path until the clone horizon
  moved. The fix is the `|| exit 1` in the command today: every git
  failure now fails toward building. The residue is benign and
  documented — a beyond-horizon docs-only push builds redundantly
  once, and that build resets the horizon, so it self-heals.

## Where it stands

Three of five V1.S2 tasks ticked, and both remaining tasks blocked on
something outside themselves: `T4` schema migration waits on the S1
storage schema (T7), and `T5` design foundations is explicitly PAUSED
by [D-060](../record/DECISIONS.md#d-060--the-three-phase-standing-order)
until phase 2 closes.

**The stack as decided vs the stack as installed.** D-005 upheld and
extended the tech-stack decision with a named frontend layer: Tailwind
v4 + shadcn/ui, **Motion** (animation), **MapLibre GL** (maps),
**dnd-kit** (timeline drag-and-drop), the **Vercel AI SDK** in its UI
flavor, and TanStack Query + Zustand for state. Derived from
`package.json` today, the installed dependencies are Next, React,
Tailwind, shadcn tooling, Supabase, and small utilities — **none of
the five named above is present.**

That is not drift, and reading it as drift would be the mistake. Each
missing library belongs to a task that has not started: MapLibre to
[V1.S5.T3](../ROADMAP.md#v1s5--plan), dnd-kit to
[V1.S5.T2](../ROADMAP.md#v1s5--plan), the AI SDK to
[V1.S4.T1](../ROADMAP.md#v1s4--suggest), Motion to
[V1.S2.T5](../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
and [V1.S8.T1](../ROADMAP.md#v1s8--demo-polish). This is the
"never stockpile" discipline the workshop applies to its own
equipment, applied to product dependencies: **a decision to use a
library is not an instruction to install it.** The gap between the
decided stack and the installed one is a measure of how much of V1
remains, and it is currently large.

Two further properties are worth naming.

**The isolation rule is the only architectural promise in the product
that is currently ENFORCED.** Everything else — the reliability law,
the explanation duty, provenance, the privacy floor — is written in a
document and waits for code to honour it. The engine boundary is
checked by `no-restricted-imports` on every CI run, which is why it is
the one promise that cannot quietly rot. It is the same pattern the
workshop uses for its own laws: the rules that survive are the ones a
machine refuses.

**The CI gates outgrew the product.** Of the eight steps in the
pipeline, three — `check:links`, `check:ledger`, `check:memory` — guard
the documentation system rather than the app. The skeleton's build
gate has become the enforcement point for the workshop's own record
laws, which is why a docs-only PR still runs a full production build
of a nearly-empty Next.js app.

The open edge is that almost nothing in `src/` does anything. One
page, one vendored button, one Supabase client, one placeholder
engine module with a smoke test. The skeleton is real, deployed and
green — and green here certifies that the pipeline passes, not that
the product works, because there is not yet a product to work.

## Sources

Down-links only.

- [D-005](../record/DECISIONS.md#d-005--stack-re-trial-upholds-d-001)
  — the stack re-trial, the named frontend layer, the co-location and
  performance doctrine.
- [D-001](../record/DECISIONS.md#d-001--tech-stack) — the original
  stack decision D-005 upholds.
- [D-038](../record/DECISIONS.md#d-038--ci-is-the-arbiter) — why the
  pushed commit's Actions run, not a local pass, is what "green"
  means here.
- [D-060](../record/DECISIONS.md#d-060--the-three-phase-standing-order)
  — the pause holding V1.S2.T5.
- [the v1.s2.t1 story](../record/history/product/build/v1.s2.t1.md) —
  [#19](https://github.com/wsher0901/roam/pull/19): the scaffold and
  the engine isolation rule.
- [the v1.s2.t2 story](../record/history/product/build/v1.s2.t2.md) —
  [#25](https://github.com/wsher0901/roam/pull/25): deploy, previews,
  and CI as repo enforcement.
- [the v1.s2.t3 story](../record/history/product/build/v1.s2.t3.md) —
  [#29](https://github.com/wsher0901/roam/pull/29): Supabase, the
  server-only client, auth deferred.
- [the vercel-ignore-fix story](../record/history/workshop/mechanism/vercel-ignore-fix.md)
  — [#167](https://github.com/wsher0901/roam/pull/167): the exit-128
  path, the shared miss, and both post-merge proofs.
- [SETUP §Stack](../SETUP.md#stack) — the inventory of what is
  installed and what is staged.
- [V1.S2](../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
  — the stage, its completion criteria, and the two open tasks.
