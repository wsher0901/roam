---
type: shiplog
title: Shiplog
status: append-only
---
# SHIPLOG — what shipped, when
Past events only — for current state, run /pickup (or say "brief" in
Claude Web). Newest first.
Format: **date — plain-English headline** (task ID) · what it means
for the product → PR

- **2026-07-10 — The plan gets a version ladder; identity and plan
  split by lifespan**
  ([D-021](DECISIONS.md#d-021--2026-07--plan-synthesis-principles-re-home-to-decision-policy),
  [D-022](DECISIONS.md#d-022--2026-07--version-ladder--lifespan-split-amends-d-004))
  · [FOUNDATION](FOUNDATION.md) now holds only timeless identity
  while [ROADMAP](ROADMAP.md) carries everything a shipped version
  can falsify — the V1/V2/V3 ladder with testable done-whens,
  per-version For/Refuses/Ships scope blocks, and the unversioned
  socket Pool — with [DECISION-POLICY](DECISION-POLICY.md) canonical
  for the plan-synthesis rules and the notation manual re-homed to
  [HOME](HOME.md#roadmap-manual) →
  [PR #69](https://github.com/wsher0901/roam/pull/69)
- **2026-07-10 — Switching computers becomes pull + a checklist** · A
  machine-setup skill now carries the one-clone law (both seats'
  paths written down), the one-time per-machine checklist (git
  identity, roam.machine label, Obsidian + Dataview, stage-gated
  MCPs), and a verification block for when one machine misbehaves —
  with field-discovered traps promoted from
  [HANDOFF](HANDOFF.md)'s gotchas via normal PRs, and
  [HOME](HOME.md) routing to it →
  [PR #66](https://github.com/wsher0901/roam/pull/66)
- **2026-07-10 — Design sessions get a rule-carrier; the log is made
  whole** · A [DESIGN-KICKOFF](DESIGN-KICKOFF.md) preamble now
  carries Roam's identity, scope guard, no-write governance, and exit
  format into every Claude Design session (Project instructions
  cannot reach that surface), [HOME](HOME.md) routes to it, and the
  missing PR #62 entry below is backfilled →
  [PR #64](https://github.com/wsher0901/roam/pull/64)
- **2026-07-10 — Rituals count for themselves; the ship-tail goes
  quiet** · /pickup and /handoff now compute done/total live from
  [ROADMAP](ROADMAP.md)'s checkboxes instead of carrying a constant,
  /ship's tail runs /handoff in QUIET mode (no lane question — Web
  and Design carry forward), and the derivation law (if a number can
  be counted, count it) entered [CLAUDE.md](../CLAUDE.md) →
  [PR #62](https://github.com/wsher0901/roam/pull/62) (backfilled:
  merged without its entry — a files-touched omission in the
  founder's block)
- **2026-07-10 — Progress gets a face: the stage-map dashboard** · A
  living [DASHBOARD](DASHBOARD.md) renders all eight V1 stages as a
  colored Mermaid map with live done/total counts (on GitHub and in
  Obsidian), Dataview views list open specs and remaining work, and
  /ship now repaints the map at every merge so it can never disagree
  with [ROADMAP](ROADMAP.md) →
  [PR #60](https://github.com/wsher0901/roam/pull/60)
- **2026-07-09 — The knowledge layer: the vault learns to explain
  itself** · A spec system for per-task detail sheets
  ([specs/](specs/README.md)), a newcomer-proof
  [GLOSSARY](GLOSSARY.md), a [DECISION-POLICY](DECISION-POLICY.md)
  hub consolidating every decided engine rule with sources, a
  [SCHEMA](data/SCHEMA.md) placeholder, [HOME](HOME.md) rewritten as
  the zero-state front page, YAML frontmatter across the corpus — and
  merges no longer need a keypress: the founder's conversational yes
  is the only merge gate →
  [PR #58](https://github.com/wsher0901/roam/pull/58)
- **2026-07-09 — Repo hygiene: line endings pinned, old docs woven**
  · A `.gitattributes` now normalizes every text file to LF in the
  repository (ends the Windows phantom-modified-files trap), the
  pre-existing docs corpus carries the same markdown-link density as
  new files (266 links added machine-executed, per the new
  retroactivity law in [CLAUDE.md](../CLAUDE.md)), and
  [HOME.md](HOME.md) sheds the dead cloud-lane machinery superseded
  by [D-020](DECISIONS.md#d-020--2026-07--parallel-lanes-v2-native-lanes-replace-hand-built-orchestration)
  → [PR #57](https://github.com/wsher0901/roam/pull/57)
- **2026-07-09 — Ritual engine v2; this log is born** · The four
  session rituals were rewritten to their locked designs — /pickup
  renders a three-lens briefing, /handoff writes the same picture
  surface-tagged, /ship gates on specs and link hygiene and appends
  to this log, /decide records an Affects line and applies its own
  ripple edits — and SHIPLOG arrived backfilled with every real
  merged PR → [PR #56](https://github.com/wsher0901/roam/pull/56)
- **2026-07-09 — Session hooks that work on every machine** · Every
  session now opens synced and briefed on any OS (cross-platform Node
  hooks replace the Windows-only one), a session-end safety net
  auto-pushes unfinished lane work so it can never be lost, and
  routine git/GitHub commands are pre-approved — reliability work for
  the [D-020](DECISIONS.md#d-020--2026-07--parallel-lanes-v2-native-lanes-replace-hand-built-orchestration)
  lanes → [PR #53](https://github.com/wsher0901/roam/pull/53)
- **2026-07-09 — Parallel lanes go native**
  ([D-020](DECISIONS.md#d-020--2026-07--parallel-lanes-v2-native-lanes-replace-hand-built-orchestration))
  · Lanes now run as Claude Code background agents or worktree
  sessions with a draft PR from birth and every commit pushed — the
  hand-built cloud-session launch machinery
  ([D-016](DECISIONS.md#d-016--2026-06--parallel-ready-menu-amends-d-009)–[D-019](DECISIONS.md#d-019--2026-06--launch-mechanics-correction-amends-d-017)
  mechanics) is retired, [CLAUDE.md](../CLAUDE.md) is slimmed, and the
  equipment plan moves to a skill →
  [PR #51](https://github.com/wsher0901/roam/pull/51)
- **2026-06-12 — Erratum: where cloud lanes are watched** · The docs
  now point to claude.ai/code (and the mobile app) as the lane
  dashboard — the earlier `/tasks` references were wrong, since that
  command only lists the current session's local work →
  [PR #48](https://github.com/wsher0901/roam/pull/48)
- **2026-06-12 — Lane launches get a recipe that actually works**
  ([D-019](DECISIONS.md#d-019--2026-06--launch-mechanics-correction-amends-d-017))
  · Live testing showed `claude --remote` refuses every
  non-interactive shell, so lane launches now go through a visible,
  attended console window opened from a launcher kept outside this
  public repo → [PR #46](https://github.com/wsher0901/roam/pull/46)
- **2026-06-12 — What happens after lanes finish**
  ([D-018](DECISIONS.md#d-018--2026-06--fix-routing-triage-after-lane-review-extends-d-017))
  · Claude now reviews finished lane PRs before the founder does and
  routes each fix by smallest-sufficient-context — stay on the lane's
  branch, teleport into the lane, or open a new lane — with the
  founder agreeing or overriding every call →
  [PR #43](https://github.com/wsher0901/roam/pull/43)
- **2026-06-12 — Cloud sessions become the lane vehicle**
  ([D-017](DECISIONS.md#d-017--2026-06--cloud-sessions-are-the-parallel-lane-vehicle-amends-d-016))
  · Parallel lanes run as Claude Code cloud sessions launched from
  Claude Desktop — each in its own isolated clone, on its own branch,
  shipping its own PR; same-machine worktrees demoted to fallback →
  [PR #41](https://github.com/wsher0901/roam/pull/41)
- **2026-06-12 — Every briefing ends with a parallel-ready menu**
  ([D-016](DECISIONS.md#d-016--2026-06--parallel-ready-menu-amends-d-009))
  · Briefings and completions now list every unblocked parallel-safe
  task with a ready-to-paste launch command, without breaking the
  two-item attention cap →
  [PR #39](https://github.com/wsher0901/roam/pull/39)
- **2026-06-12 — Weather sources vetted; SOURCES.md is born**
  ([V1.S1.T2](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code))
  · Roam now knows exactly where its weather facts come from: all six
  weather slots have graded, licensed, spike-tested sources
  (Open-Meteo at Grade A, CC-BY 4.0) recorded in
  [SOURCES.md](data/SOURCES.md) — the first family through the
  reliability law end-to-end →
  [PR #37](https://github.com/wsher0901/roam/pull/37)
- **2026-06-12 — The system learns to record itself**
  ([V1.S1.T1](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
  amendment 2) · New [TELEMETRY.md](data/TELEMETRY.md) defines what
  Roam captures about its own behavior — usage events, a claim
  ledger, eval runs, actuals, source health — captured from day one,
  used later
  ([D-014](DECISIONS.md#d-014--2026-06--telemetry-posture-capture-now-use-later))
  → [PR #35](https://github.com/wsher0901/roam/pull/35)
- **2026-06-12 — Traveler vocabulary grows 26 → 47 fields**
  ([V1.S1.T1](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
  amendment 1) · Every field a traveler can tell Roam now carries an
  ask tier (at most six upfront questions) and provenance
  (stated / inferred / default), with sensitive fields marked
  stated-only — never inferred →
  [PR #33](https://github.com/wsher0901/roam/pull/33)
- **2026-06-12 — The fact inventory; FACTS.md is born**
  ([V1.S1.T1](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code))
  · [FACTS.md](data/FACTS.md) enumerates all 47 world facts the V1
  engine must know across the five check families, plus everything a
  traveler may tell it — each fact with a source slot that the T2–T6
  vetting tasks fill in →
  [PR #31](https://github.com/wsher0901/roam/pull/31)
- **2026-06-11 — Roam has a database**
  ([V1.S2.T3](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1))
  · A fresh Supabase Postgres project, co-located with the app's
  build region, with a server-side-only client so database
  credentials never reach the browser →
  [PR #29](https://github.com/wsher0901/roam/pull/29)
- **2026-06-11 — The pacing law**
  ([D-009](DECISIONS.md#d-009--2026-06--pacing-law-finish-first-flexible-cap))
  · Recommendations needing the founder's attention are capped at
  "Now + one parallel slot", open lanes always outrank new tasks, and
  stopping is a valid next step →
  [PR #27](https://github.com/wsher0901/roam/pull/27)
- **2026-06-11 — Roam is on the internet, with a quality gate**
  ([V1.S2.T2](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1))
  · First production deploy live on Vercel with PR preview links, and
  GitHub Actions CI (lint, format, tests, build) now guards every PR
  — /ship's test gate is enforced by the repo, not just habit →
  [PR #25](https://github.com/wsher0901/roam/pull/25)
- **2026-06-11 — The cockpit: HOME.md**
  ([D-008](DECISIONS.md#d-008--2026-06--cockpit-derived-state-automatic-recording))
  · New [HOME.md](HOME.md) answers where every kind of information
  lives, which tool to use, and what the daily loop is; the rituals
  are upgraded so recording and status come from the system instead
  of the founder's memory →
  [PR #23](https://github.com/wsher0901/roam/pull/23)
- **2026-06-11 — Tooling scope pinned** · Repo settings turn off the
  unrelated personal-connector bridge and set an explicit plugin
  policy, so sessions load only project-relevant tools →
  [PR #21](https://github.com/wsher0901/roam/pull/21)
- **2026-06-11 — The app exists**
  ([V1.S2.T1](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1))
  · The docs-only repo becomes a runnable Next.js + TypeScript +
  Tailwind v4 + shadcn/ui project, with the engine isolated in its
  own module directory and a first passing test →
  [PR #19](https://github.com/wsher0901/roam/pull/19)
- **2026-06-11 — Subagent plan, stage-gated** · The equipment plan
  now names two future subagents — a PR reviewer once CI exists and a
  design critic at first UI work — each to be built only when its
  stage opens → [PR #17](https://github.com/wsher0901/roam/pull/17)
- **2026-06-11 — Equipment plan, stage-gated** ·
  [CLAUDE.md](../CLAUDE.md) gains the never-stockpile tooling plan:
  which MCPs and plugins arrive at which roadmap stage, and none
  before → [PR #15](https://github.com/wsher0901/roam/pull/15)
- **2026-06-11 — Blueprint audit fixes** · Four pre-build
  tightenings: branch naming pinned to the lowercase-ID convention,
  Edit-UX scope fixed to one brain with no modes, and two more gaps
  closed before the first task branch existed →
  [PR #13](https://github.com/wsher0901/roam/pull/13)
- **2026-06-11 — The full V1 build plan**
  ([D-006](DECISIONS.md#d-006--2026-06--v1-roadmap-cut-stages--tasks))
  · [ROADMAP.md](ROADMAP.md) now holds the complete V1 cut — 8
  ordered stages, 33 PR-sized tasks, from the data gate to demo
  polish → [PR #11](https://github.com/wsher0901/roam/pull/11)
- **2026-06-11 — Stack re-trial: choice upheld, frontend named**
  ([D-005](DECISIONS.md#d-005--2026-06--stack-re-trial-vs-foundation-v1-d-001-upheld--frontend-layer))
  · The [D-001](DECISIONS.md#d-001--2026-06--tech-stack) stack
  survives a re-trial against the written product definition, and the
  frontend layer gets names: Tailwind v4, shadcn/ui, Motion, MapLibre,
  dnd-kit, AI SDK, TanStack Query + Zustand →
  [PR #9](https://github.com/wsher0901/roam/pull/9)
- **2026-06-11 — The product is defined on paper**
  ([D-003](DECISIONS.md#d-003--2026-06--roam-v1-scope-foundation-v1),
  [D-004](DECISIONS.md#d-004--2026-06--planning-notation--rolling-wave-depth))
  · [FOUNDATION.md](FOUNDATION.md) becomes the full product
  definition — the Suggest → Plan → Edit spine, the five check
  families, the reliability law — and Vn.Sm.Tk becomes the one
  official planning vocabulary →
  [PR #7](https://github.com/wsher0901/roam/pull/7)
- **2026-06-11 — Handoff notes get a merge carve-out**
  ([D-002](DECISIONS.md#d-002--2026-06--handoff-note-merge-policy))
  · Main stays PR-only for everything, with one narrow exception:
  handoff micro-PRs self-merge immediately, so end-of-session notes
  never strand → [PR #5](https://github.com/wsher0901/roam/pull/5)
- **2026-06-11 — Friendly machine labels** · Handoff notes now name
  each computer by a per-machine label (`git config roam.machine`)
  instead of a raw hostname →
  [PR #3](https://github.com/wsher0901/roam/pull/3)
- **2026-06-10 — Context engine v2** · Sessions auto-pull and print
  the handoff note the moment they open, and the note gains its fixed
  structure — every session starts informed and ends documented →
  [PR #2](https://github.com/wsher0901/roam/pull/2)
- **2026-06-10 — The workflow kit** · The repo's working rules are
  born: [CLAUDE.md](../CLAUDE.md) standing instructions plus the four
  rituals (/pickup, /handoff, /ship, /decide) →
  [PR #1](https://github.com/wsher0901/roam/pull/1)
