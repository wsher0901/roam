---
type: spec
id: currency-audit
title: Docs currency audit — every live instruction that points at retired machinery, and every orphan
status: open
stage: workshop
branch: docs/currency-audit
pr: 204
opened: 2026-07-23
shipped: —
---

# currency-audit — no live instruction points at machinery that cannot fire

**Links:**
[LAWS](../LAWS.md) · [HOME](../HOME.md) · [SETUP](../SETUP.md) ·
the class of defect this hunts:
[clerk-retirement](../history/workshop/mechanism/clerk-retirement.md)
([#197](https://github.com/wsher0901/roam/pull/197)) ·
[D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
·
[D-047](../DECISIONS.md#d-047--2026-07--cloud-born-cockpit--the-cockpits-birth-vehicle-becomes-claude---cloud-list-native-on-every-device-the-automated-hidden-console-birth-is-liftoffs-primary-rung-the-routine-fire-demotes-to-fallback--summon-button-engine-amends-d-046-clause-3-upholds-the-lane-law)
·
[D-048](../DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047)

## Goal

Find and fix every LIVE instruction in the repo that points at
machinery that no longer exists, and inventory every orphaned file —
without touching the record. The danger is narrow and specific: an
instruction a future seat would OBEY that can no longer work. That is
exactly the class [#197](https://github.com/wsher0901/roam/pull/197)
fixed when the clerk was retired but the repo kept reaching for it.

The governing principle is **annotation beats deletion**.
[history/](../history/), [specs/](.), and
[DECISIONS](../DECISIONS.md) entries are immutable record: never
deleted, never rewritten. A superseded record earns a dated
supersession note naming what replaced it — nothing more.

## Out of scope

- **[WEB-INSTRUCTIONS.md](../WEB-INSTRUCTIONS.md) — its own bench.**
  It carries the Project-instructions master at v4 (the paste-block
  loop, no cockpit) and needs a full v5 rewrite. Named in Pending
  below as the next bench; NOT touched here.
- `docs/history/**` — immutable record, read-only for this bench.
- Deleting anything. Nothing is deleted in this bench, orphans
  included.
- Rewriting any RECORD file's substance. Supersession notes only.
- Product decisions. If a product-side doc contradicts doctrine, it
  is FLAGGED here, not silently rewritten.

## Plan

1. **PART A — classify.** Read every non-history `.md` in `docs/`
   plus `.claude/`, `scripts/`, `package.json`, `.env.example`,
   `.github/workflows/`. Put every file in exactly one bucket in the
   table below: LIVING-CURRENT · LIVING-STALE · RECORD ·
   RECORD-NEEDS-SUPERSESSION-NOTE · ORPHAN · UNCLEAR.
2. **PART B — fix**, only what is mechanical and safe:
   1. Every LIVING-STALE instruction, judged against current law.
      Grep retired nouns AND their synonyms — the lesson of
      [#197](https://github.com/wsher0901/roam/pull/197) is that a
      verification phrased around one verb misses its synonyms.
   2. Dated supersession notes on RECORD files whose machinery is
      retired.
   3. ORPHANS: listed, never deleted — each with the home it should
      be linked from or a retire recommendation, for the founder's
      word at the gate.
3. **PART C — recommend**, never assume: [go-remote](../skills/go-remote.md) ·
   [machine-setup](../skills/machine-setup.md) ·
   [recall](../skills/recall.md) ·
   [DESIGN-KICKOFF](../DESIGN-KICKOFF.md) · [ENGINE](../ENGINE.md) ·
   [FOUNDATION](../FOUNDATION.md) · [data/](../data/) ·
   `.env.example` · [HOME](../HOME.md).

## The law this bench judges against

| Law | What it makes current |
|---|---|
| [D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock) | cockpit = the control tower online; no-solo-approval; CC-direct surface doctrine; Remote Control demoted to backstop |
| [D-047](../DECISIONS.md#d-047--2026-07--cloud-born-cockpit--the-cockpits-birth-vehicle-becomes-claude---cloud-list-native-on-every-device-the-automated-hidden-console-birth-is-liftoffs-primary-rung-the-routine-fire-demotes-to-fallback--summon-button-engine-amends-d-046-clause-3-upholds-the-lane-law) | `--cloud` birth is the route of record; the routine demoted to backstop |
| [D-048](../DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047) | the connector ladder; the summon workflow; the tombstone |
| [#193](https://github.com/wsher0901/roam/pull/193) | board-governs; the API dependency map |
| [#197](https://github.com/wsher0901/roam/pull/197) | the clerk is retired — routine deleted |

## PART A — the classification table

Method, stated honestly so the coverage claim is checkable: every
LIVING surface below was read end to end. The 46-file
[specs/](README.md) record corpus was swept by grep for every retired
noun and its synonyms, then read at each hit and around it — not each
file end to end. `docs/history/**` was not audited: it is immutable
record and out of scope by the governing principle.

### LIVING-STALE — a live instruction that is wrong or incomplete now

| File | What is stale | The law that dates it |
|---|---|---|
| [skills/liftoff.md](../skills/liftoff.md) §6 | the `[COCKPIT] roam — <date>` TITLE LINE still reads "UNPROVEN — confirm at the next birth, record the answer here, and drop the line if it does nothing". The confirmation HAPPENED: the 2026-07-23 birth carried the line and the platform ignored it, auto-titling from charter content. | [#202](https://github.com/wsher0901/roam/pull/202)'s harvest, executing [#193](https://github.com/wsher0901/roam/pull/193)'s own verify-before-rely instruction |
| [SETUP.md](../SETUP.md) §cloud accounts | the same title line, second home: the birth-prompt composition still lists it as a component | same |
| [HOME.md](../HOME.md) §The five rituals | liftoff "ends by FIRING THE COCKPIT with that flight plan **as its payload**" — the pre-board-governs model | [#193](https://github.com/wsher0901/roam/pull/193): the board IS the flight plan; the birth prompt is a pointer, never its carrier |
| [HOME.md](../HOME.md) §The files | FOUNDATION's writer reads "founder-approved PRs (paste block + D-number)" — asserts the paste block as a required write path, and disagrees with HOME's own routing table | [D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock) — CC-direct is standard; the relay is a tool, not a requirement |
| [HOME.md](../HOME.md) §Equipment | "The skills, one line each" omits [go-remote](../skills/go-remote.md) entirely — eight of nine named | routing law: every living file wants a home |
| [HOME.md](../HOME.md) §Delegation | "The cloud launch route is proven once, at the maiden flight, which records which route won" — reads as pending; the maiden flew 2026-07-16 and route 1 won | [parallel-lanes §Cloud spawn](../skills/parallel-lanes.md#cloud-spawn--route-ladder) records the winner |
| [skills/machine-setup.md](../skills/machine-setup.md) | ACCURATE BUT INCOMPLETE: the canonical per-machine procedure never mentions the `COCKPIT_` pair, though [SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts) says each seat must paste it and the board tracks it as an open seat debt. A seat could finish machine-setup and still not be able to fire `fire:cockpit` or the summon self-rescue. | [D-047](../DECISIONS.md#d-047--2026-07--cloud-born-cockpit--the-cockpits-birth-vehicle-becomes-claude---cloud-list-native-on-every-device-the-automated-hidden-console-birth-is-liftoffs-primary-rung-the-routine-fire-demotes-to-fallback--summon-button-engine-amends-d-046-clause-3-upholds-the-lane-law) (rung 3) · [D-048](../DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047) (self-rescue) |

### RECORD-NEEDS-SUPERSESSION-NOTE — note only, never a rewrite

| File | Retired machinery it still describes as live |
|---|---|
| [specs/cloud-clerk.md](cloud-clerk.md) | the clerk charter + its maiden; the routine was deleted 2026-07-22 |
| [specs/clerk-notify.md](clerk-notify.md) | the clerk's standing watch — the notification channel that can no longer fire |
| [specs/clerk-autospawn.md](clerk-autospawn.md) | `npm run fire:clerk` and the second routine, both gone |
| [specs/cloud-born-cockpit.md](cloud-born-cockpit.md) | **found beyond the known set** — TWO disproven recipes: the `winpty` pty wrapper with output captured to file (it cannot run; the capture is exactly what the wrapper refuses), and "the roam cloud environment's setup script must install `gh`" (the environment is named `Default`, and attempting the install fails the whole setup script with exit 100) |

The first three are the known clerk set. The fourth is this bench's
own catch and matters more: it reads as a RECIPE, so a future seat
reaching for the `--cloud` birth mechanics could follow a shape
proven not to work. Corrections exist in
[specs/flight-hardening.md](flight-hardening.md) and
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts),
but nothing in `cloud-born-cockpit.md` points at them.

### RECORD — immutable, left exactly as-is

[DECISIONS.md](../DECISIONS.md) (append-only) ·
[specs/clerk-retirement.md](clerk-retirement.md) (it EXECUTED the
retirement; not itself retired machinery) · the remaining 40 task
specs · [IDEAS.md](../IDEAS.md)'s dated entries.

### LIVING-CURRENT — verified, nothing to do

- **Laws & manuals:** [LAWS.md](../LAWS.md) ·
  [ROADMAP.md](../ROADMAP.md) · [FOUNDATION.md](../FOUNDATION.md) ·
  [ENGINE.md](../ENGINE.md) · [DESIGN-KICKOFF.md](../DESIGN-KICKOFF.md)
  · [history/README.md](../history/README.md) (legend + ledger) ·
  [specs/README.md](README.md) · [specs/TEMPLATE.md](TEMPLATE.md) ·
  [memory/README.md](../memory/README.md) ·
  [memory/TEMPLATE.md](../memory/TEMPLATE.md)
- **Skills:** [decide](../skills/decide.md) ·
  [go-remote](../skills/go-remote.md) ·
  [handoff](../skills/handoff.md) · [parallel-lanes](../skills/parallel-lanes.md)
  · [pickup](../skills/pickup.md) · [recall](../skills/recall.md) ·
  [ship](../skills/ship.md)
- **Data:** [data/FACTS.md](../data/FACTS.md) ·
  [data/SOURCES.md](../data/SOURCES.md) ·
  [data/SCHEMA.md](../data/SCHEMA.md) (placeholder by design)
- **Board:** [DASHBOARD.md](../DASHBOARD.md) — rendered surface;
  rituals repaint it, this bench never touches it
- **Harness:** `.claude/settings.json` · all three `.claude/hooks/*.mjs`
  · `.claude/agents/reviewer.md` · all nine
  `.claude/skills/*/SKILL.md` · `.claude/vault-seed/*.json`
- **Scripts:** `scripts/fire.mjs` (cockpit-only; a stale `clerk`
  target fails honestly) · `check-links.mjs` · `check-ledger.mjs` ·
  `check-memory.mjs` · `count-routine-runs.mjs` ·
  `scripts/spikes/*.mjs`
- **Root & CI:** `package.json` (only `fire:cockpit`) ·
  `.env.example` (**zero `CLERK_`**, confirmed) · `CLAUDE.md` ·
  `README.md` · `AGENTS.md` · `.github/workflows/ci.yml` ·
  `.github/workflows/summon.yml`

### ORPHAN — none

Mechanically verified by an inbound-reference census over every
tracked file (markdown links, bare paths, and bare filename
mentions). **Every in-scope file has at least one inbound
reference.** The only zero-inbound file is this bench's own
`docs/memory/currency-audit.md`, which is the normal state of an
in-flight memory — it joins the graph at ship, via the ledger and
its history/ landing. Nothing to retire, nothing to re-home; there
is no orphan list to bring to the gate.

### UNCLEAR — reported, not acted on

- [ENGINE.md](../ENGINE.md) frontmatter reads `type: spec`, though
  [HOME](../HOME.md) describes it as a living consolidation and it
  is not a task contract. A metadata oddity, not a currency defect:
  nothing machine-checks it and no instruction depends on it.
  Flagged for the founder's word rather than changed.
- [WEB-INSTRUCTIONS.md](../WEB-INSTRUCTIONS.md) is stale (v4: the
  paste-block loop, "Claude Code: the ONLY repo writer", no cockpit)
  but is EXPLICITLY OUT OF SCOPE — see Pending.

## PART B — what was fixed

Implemented 2026-07-23 at the home PC, from this spec's PART A
table after adoption from the 18:02 park — eleven changes: seven
LIVING-STALE fixes, four dated supersession notes.

### B.1 — the seven LIVING-STALE fixes

| # | File | The fix | The law that dates it |
|---|---|---|---|
| 1 | [skills/liftoff.md](../skills/liftoff.md) §6 | the `[COCKPIT] roam — <date>` title line dropped from the birth-prompt composition; the TITLE LINE paragraph now records the verify-before-rely answer in place — DISPROVEN at the 2026-07-23 birth, the platform auto-titles from charter content; the session-list doctrine kept unchanged | [#202](https://github.com/wsher0901/roam/pull/202)'s harvest, executing [#193](https://github.com/wsher0901/roam/pull/193)'s own instruction |
| 2 | [SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts) | the title line dropped from the exact-command-shape sentence; a no-title-line note names [liftoff §6](../skills/liftoff.md#6--ledger-handoff--fire-the-cockpit) as the answer of record | same |
| 3 | [HOME §The five rituals](../HOME.md#the-five-rituals) | the liftoff portrait no longer fires the cockpit "with that flight plan as its payload" — it now says the board IS the flight plan, the birth prompt only points at it, and the board governs where they disagree | [#193](https://github.com/wsher0901/roam/pull/193) |
| 4 | [HOME §The files](../HOME.md#the-files--what-each-one-is-for) | FOUNDATION's writer: "founder-approved PRs (paste block + D-number)" → "founder-approved PRs (+ D-number)" | [D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock) |
| 5 | [HOME §Equipment](../HOME.md#equipment--environment) | the skills list names all nine — [go-remote](../skills/go-remote.md) added ("the phone tether, the backstop away posture"), plus its Sources line | the routing law |
| 6 | [HOME §Delegation](../HOME.md#delegation--the-away-mode-chooser) | the pending-voiced maiden sentence now names the recorded winner: route 1 — label-spawn, ready-flip then label, 2026-07-16 | [parallel-lanes §Cloud spawn](../skills/parallel-lanes.md#cloud-spawn--route-ladder) |
| 7 | [skills/machine-setup.md](../skills/machine-setup.md) | the one-time-per-machine list gains item 11: the `COCKPIT_` pair, pointing at [SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts) for the recipe — a pointer, never a second copy of the secret path | [D-047](../DECISIONS.md#d-047--2026-07--cloud-born-cockpit--the-cockpits-birth-vehicle-becomes-claude---cloud-list-native-on-every-device-the-automated-hidden-console-birth-is-liftoffs-primary-rung-the-routine-fire-demotes-to-fallback--summon-button-engine-amends-d-046-clause-3-upholds-the-lane-law) (rung 3) |

### B.2 — the four supersession notes

Each is one dated blockquote directly under the spec's title, so a
reader reaching for the content hits the note first. No body text
was rewritten anywhere.

| File | The note says |
|---|---|
| [cloud-clerk](cloud-clerk.md) | clerk RETIRED 2026-07-22, routine deleted; [D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)/[D-048](../DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047) supersede, [#197](https://github.com/wsher0901/roam/pull/197) executed; everything below is record, nothing can fire |
| [clerk-notify](clerk-notify.md) | the standing watch can no longer be armed; what duty 6 proved lives on as the cockpit charter's turn-end report |
| [clerk-autospawn](clerk-autospawn.md) | `fire:clerk` gone, a stale target fails honestly; the proven API-fire lives on as `fire:cockpit`, the birth ladder's routine-fire rung |
| [cloud-born-cockpit](cloud-born-cockpit.md) | the D-047 decision STANDS; the two DISPROVEN recipes named (the `winpty` capture shape · the `gh` install), each with its correction of record ([liftoff §6](../skills/liftoff.md#6--ledger-handoff--fire-the-cockpit) · [SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts) · [flight-hardening](flight-hardening.md)) |

## PART C — recommendations

Each surface examined and answered, never assumed. These carry to
THE GATE for the founder's word.

**[skills/go-remote.md](../skills/go-remote.md) — KEEP AS IS. No
retirement, no new annotation.** It already carries the backstop
annotation this bench went looking for, in its §0, naming
[D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
and stating "machine-off + the cockpit is the standard away plan;
tether only when the machine must stay on". [SETUP §Per
machine](../SETUP.md#per-machine-procedure-machine-setup-skill) and
[HOME §Delegation](../HOME.md#delegation--the-away-mode-chooser)
agree. Retiring it would be wrong on the merits: a machine that must
stay on is a real case the cockpit does not cover, and
[D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
explicitly REJECTED full Remote Control retirement (alternative ②b).
Demoted is not dead.

**[skills/machine-setup.md](../skills/machine-setup.md) — ACCURATE
BUT INCOMPLETE; one line recommended.** Nothing in it points at
retired machinery. The gap is an omission: it is the canonical
per-machine procedure, and the `COCKPIT_` pair is a per-machine
obligation the board is actively tracking as owed at the home PC —
yet the procedure never names it. Recommended fix (in this bench,
mechanical): one per-machine bullet pointing at
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
for the recipe — a pointer, never a second copy of the secret path.

**[skills/recall.md](../skills/recall.md) — CURRENT, no change.**
Post-[D-047](../DECISIONS.md#d-047--2026-07--cloud-born-cockpit--the-cockpits-birth-vehicle-becomes-claude---cloud-list-native-on-every-device-the-automated-hidden-console-birth-is-liftoffs-primary-rung-the-routine-fire-demotes-to-fallback--summon-button-engine-amends-d-046-clause-3-upholds-the-lane-law)/[D-048](../DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047)
it holds up: it is a READ path, it names no vehicle, and its routing
table points only at homes that still exist. Its honesty rails even
anticipate this bench — frozen wording is quoted as historical with
the superseding D cited alongside.

**Product-side docs — nothing contradicts current doctrine.**
[FOUNDATION](../FOUNDATION.md), [ENGINE](../ENGINE.md),
[data/FACTS](../data/FACTS.md), [data/SOURCES](../data/SOURCES.md),
and [data/SCHEMA](../data/SCHEMA.md) are untouched by the week's
workshop churn precisely because they describe the PRODUCT, and no
workshop decision since [#193](https://github.com/wsher0901/roam/pull/193)
touched the product. `SCHEMA.md` is a deliberate placeholder awaiting
[V1.S1.T7](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code),
correctly labelled. [DESIGN-KICKOFF](../DESIGN-KICKOFF.md) is
current: its no-write governance and the "Hand off to Claude Code"
extraction path are Design-side and unaffected by the Web
paste-block demotion. The one flag is cosmetic and listed under
UNCLEAR (ENGINE's `type: spec` frontmatter).

**[.env.example](../../.env.example) — CLEAN, confirmed. No dead
variables.** `grep -c CLERK .env.example` returns 0. It carries the
`COCKPIT_` pair (live — read by `scripts/fire.mjs` and by
`summon.yml` as repository secrets), the Supabase pair (live), and
two commented-forward entries that are honestly labelled as such:
`DATABASE_URL` ("only if direct SQL is ever needed") and
`ANTHROPIC_API_KEY` ("Coming with V1.S4.T1"). Neither is dead — both
are staged, and both are commented out. Nothing to remove.
[#200](https://github.com/wsher0901/roam/pull/200) finished this job.

**[HOME.md](../HOME.md) — the routing table is COMPLETE; the manual
is MOSTLY current, with four fixes.** Answering both halves of the
question:
1. *Does the routing table still name a home for every living
   file?* Yes. §Where information goes covers every information
   class, and the census found zero orphans — no living file is
   without a home. The one omission is in a DIFFERENT list:
   §Equipment's "The skills, one line each" names eight of nine
   skills, dropping [go-remote](../skills/go-remote.md).
2. *Does the manual describe the CC-direct surface doctrine rather
   than the paste-block loop?* **Yes — this is already correct.**
   §The daily loop states it plainly: the paste block is "a tool
   since [D-046], not a requirement: CC-direct is the standard
   working mode at both seats". Web's one MANDATORY job is named as
   the external review. The four HOME fixes in PART A are edge
   corrections, not a doctrine rewrite — the doctrine landed.

## Where this bench stopped

COMPLETE. PART A ran at the work PC (2026-07-23, parked 18:02);
PART B was implemented at the home PC the same evening after
adoption from the park — all eleven changes applied, the
retired-noun greps re-run clean (every surviving hit is
record-with-note, this bench's own artifacts, the board's ledger
lines, or the out-of-scope
[WEB-INSTRUCTIONS](../WEB-INSTRUCTIONS.md)). Ships to THE GATE and
does NOT merge: tower-authored, so external Web review precedes
the founder's word.

## Done means

- [x] The classification table covers EVERY file read, none
      unclassified. (PART A, 2026-07-23.)
- [x] Greps for each retired noun return only record-with-
      supersession-note or zero. (Re-run after implementation,
      2026-07-23 — every hit adjudicated.)
- [x] Every LIVING-STALE instruction fixed, or explicitly deferred
      with a reason. (Seven fixed, none deferred.)
- [x] Every RECORD file whose machinery is retired carries a dated
      supersession note — note only, no rewrite. (Four notes.)
- [x] The ORPHAN list is complete, nothing deleted, each entry
      carrying a home or a retire recommendation. (The census
      answer is NONE — there are no orphans, so the complete list
      is empty; nothing was deleted.)
- [x] A PART C recommendation exists for each named surface.
- [x] `check:links` · `check:ledger` · `check:memory` green.
      (2026-07-23, home PC, on the completion tree.)
- [ ] Full CI mirror green locally AND the pushed head's Actions run
      green. (Local mirror green 2026-07-23; the final head's run is
      watched at the gate and this box ticks at the weld — the
      [shakedown-audit](shakedown-audit.md) precedent.)
- [ ] [ship §6](../skills/ship.md) critic runs; verdict rides to the
      founder verbatim. (Runs at the gate announcement; ticks at
      the weld.)

## Pending

**The next bench: [WEB-INSTRUCTIONS.md](../WEB-INSTRUCTIONS.md) v5.**
It carries the Project-instructions master at v4 — written around the
paste-block loop, with no cockpit in it. Post-[D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
that master is stale in its bones, not at its edges, so it needs a
full rewrite rather than the mechanical fixes this bench applies.
Deliberately untouched here.

## Deviations

- Fix 7's rationale narrowed at implementation: PART A/C claimed a
  seat without the `COCKPIT_` pair "could not fire the cockpit or
  the summon self-rescue"; the machine-setup bullet as written
  claims only `npm run fire:cockpit` — the summon workflow runs on
  repository secrets, not machine-local env, so the local pair
  gates the routine-fire rung alone. Narrower claim, same fix.
- Everything else landed as specified.

## Open questions

The ORPHAN list and the PART C recommendations both carry to THE
GATE for the founder's word. This bench ships to the gate and does
NOT merge.
