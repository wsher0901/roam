---
type: dashboard
title: Dashboard
status: living
---

# Dashboard — the state surface

Stamp: 2026-07-23 · 23:06 · ship · home PC
V1 5/34 · S1 2/7 · S2 3/5 · sessions: 1 main · 0 parallel
(0 need you) · needs-you 1
How to read this board →
[HOME §Reading the board](HOME.md#reading-the-board)

## Needs you

1. 🟡 Re-save the cockpit routine box from the updated charter
   master — it gained the R2 gh rung and the self-URL line at
   [#207](https://github.com/wsher0901/roam/pull/207)'s weld
   (since 07-23).
   → [SETUP §cloud accounts](SETUP.md#once-and-done--cloud-accounts)

The home-PC seat debt is CLEARED (07-23): claude 2.1.218 and the
`COCKPIT_` pair pasted, masked-verified (token 108 chars
`sk-ant-oat` shape · id 29 chars `trig_` prefix), machine-local
and gitignored — BOTH SEATS FULLY ARMED for `fire:cockpit` and
the summon self-rescue.

The nine open engine questions stay parked in
[ENGINE §12](ENGINE.md#12-open-register) until
[V1.S3](ROADMAP.md#v1s3--engine-core--two-families-deep) opens;
they are a register, not an action. ENGINE's `type: spec`
frontmatter oddity is folded there too
([IDEAS](IDEAS.md), the founder's 07-23 gate word).

## Sessions

| Session | Task | State | Last push | Your move |
|---|---|---|---|---|
| main · control tower | — (gh-second-path shipped [#207](https://github.com/wsher0901/roam/pull/207); no bench open) | 🟢 | 23:03 (this repaint) | — |

↳ main micro: — (no active task)

Ground state, nothing in flight. Two benches welded this sitting —
the currency audit ([#204](https://github.com/wsher0901/roam/pull/204))
and the gh second path
([#207](https://github.com/wsher0901/roam/pull/207), D-049: the
cockpit's second API path, probe-proven). The probe outing's five
sessions are archived and their five workspace branches deleted on
the founder's word — origin heads = `main` only, prune-confirmed
23:03. The next
named bench, unopened:
[WEB-INSTRUCTIONS](WEB-INSTRUCTIONS.md) v5 — stale in its bones
(v4 paste-block loop, no cockpit), needs a rewrite
([#204](https://github.com/wsher0901/roam/pull/204)'s spec names
it in Pending).

## You are here

V1 — The demo · 5/34 █████░░░░░░░░░░░░░░░░░░░░░░░░░░░░
S1 · Data Definition · 2/7 ██░░░░░ → T3–T6 source vetting ⚪ held
(awaiting relaunch briefs)
S2 · Skeleton & design · 3/5 ███░░ → T5 Design foundations ⚪ idle
S3–S8 · queued in order · 0/22

## Stage map

```mermaid
flowchart LR
  S1["S1 Data Definition<br/>2/7"]
  S2["S2 Skeleton + design<br/>3/5"]
  S3["S3 Engine core<br/>0/7"]
  S4["S4 Suggest<br/>0/3"]
  S5["S5 Plan<br/>0/3"]
  S6["S6 Edit + revalidate<br/>0/3"]
  S7["S7 Other families<br/>0/3"]
  S8["S8 Demo polish<br/>0/3"]
  S1 --> S3 --> S4 --> S5 --> S6 --> S7 --> S8
  S2 --> S3
  classDef done fill:#2e7d32,stroke:#1b5e20,color:#ffffff
  classDef active fill:#1565c0,stroke:#0d47a1,color:#ffffff
  classDef locked fill:#ef6c00,stroke:#e65100,color:#ffffff
  classDef pending fill:#616161,stroke:#424242,color:#ffffff
  class S1,S2 active
  class S3 locked
  class S4,S5,S6,S7,S8 pending
```

## Claude Web + Design discussion

The live ops surface is the current ops chat (title unrecorded at
the shakedown-audit weld). Its most recent external review —
[#207](https://github.com/wsher0901/roam/pull/207) (gh second
path, tower-authored) — is DONE, verdict PASS on `2b97a86` (eight
files as declared, D-049's Why and R2's gh rung verified verbatim,
both supersession notes pure additions, the gates re-run
independently), delivered inline with the founder's merge word.
Earlier reviews, all DONE:
[#204](https://github.com/wsher0901/roam/pull/204) (PASS on
`614e0f8`) · [#199](https://github.com/wsher0901/roam/pull/199) ·
[#197](https://github.com/wsher0901/roam/pull/197) ·
[#193](https://github.com/wsher0901/roam/pull/193) ·
[#195](https://github.com/wsher0901/roam/pull/195) → next: grade
the cockpit maiden, once the closeout bench opens; the
[WEB-INSTRUCTIONS](WEB-INSTRUCTIONS.md) v5 bench, when opened,
rewrites the Project-instructions master itself. Under the surface
doctrine
([D-046](DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)),
Web's one mandatory job is the external review of self-authored
diffs.
T3–T6 source-vetting relaunch stays held (see You are here).

## Shipped (latest — full record: [the ledger](history/README.md#the-ledger))

| When | What | PR |
|---|---|---|
| 07-23 22:38 | [the cockpit gains a second API path (D-049): gh installs from the allowlisted Ubuntu archive and authenticates through the GitHub proxy — REST-shaped (gh api works repo-scoped; GraphQL porcelain 403s, the proxy pointing to REST); the probe flew NON-PASS on its own definition, STOP held, and the gate reopened on the founder-witnessed REST read; the API map two-pathed (only both paths dead demote), the charter R2 gains the automatic gh rung, self-ID from session env, the Claude-Session trailer noted; five findings ride first-class incl. the toolset bluff (probe-don't-assume extends to a session's own tools) and teleport-relocates-execution](history/workshop/mechanism/gh-second-path.md) | [#207](https://github.com/wsher0901/roam/pull/207) |
| 07-23 21:29 | [the docs currency audit: the clerk sweep came back already-clean (#197 held) — the real catch was the NEXT generation of staleness: the disproven `[COCKPIT]` title line dropped from liftoff §6 + SETUP with the verify-before-rely answer recorded in place, #193's board-governs doctrine landed in HOME's manual plus three more HOME edges (FOUNDATION's writer drops the paste block, go-remote joins the skills list, §Delegation names route 1 the recorded maiden winner), cloud-born-cockpit's two disproven recipes supersession-noted beyond the known clerk set, machine-setup gains the COCKPIT_ pair as step 11; four dated notes, zero deletions, zero record-body rewrites, orphans NONE by inbound-reference census; flown across two seats through a park, adopted from origin alone](history/workshop/mechanism/currency-audit.md) | [#204](https://github.com/wsher0901/roam/pull/204) |
| 07-23 21:07 | [.env.example carries zero CLERK_ cruft: the vestigial clerk comment prose scrubbed from the "Routine fires" block so the file names only the live cockpit routine, the payload matching the founder's intent rather than the literal "two placeholder lines" (already gone by #197); flown as a full-liftoff run-through — bench-first birth, canary, cockpit airborne ack, one-file scrub — then carried through an independent non-author review that re-verified CI on the true merge tip after the lane cited a run one commit behind](history/workshop/mechanism/env-clerk-scrub.md) | [#200](https://github.com/wsher0901/roam/pull/200) |
| 07-23 12:02 | [the repo stops pointing at a vehicle that cannot fire: the clerk routine was deleted 07-22, every live instruction reaching for the clerk removed and every verified record tombstoned (C1–C6, N2/N3, A1/A4 kept), liftoff's ladder bottomed out at the D-048 phone bootstrap, `fire.mjs` cockpit-only with the drain idiom untouched, no new D-number by design, and one live defect caught just outside the mandate's file list — parallel-lanes still armed the clerk as both fallback and notification watcher](history/workshop/mechanism/clerk-retirement.md) | [#197](https://github.com/wsher0901/roam/pull/197) |
| 07-22 16:36 | [a cockpit that survives, announces, and replaces its own GitHub connector loss (D-048): redundancy inside a session ruled impossible, so resilience became a five-rung ladder OUT of the session (prevent · detect · repair · degrade · self-rescue) with a tombstone and refusal guard; `summon.yml` ships live on `workflow_dispatch` + a push to `ops/summon`, reusing `fire.mjs`; merge-on-signal REJECTED with reasons — R2's premise since amended by D-049, the ladder standing](history/workshop/mechanism/cockpit-resilience.md) | [#195](https://github.com/wsher0901/roam/pull/195) |
| 07-22 16:19 | [the lane-worker charter's canary line names the baton-holder: the D-046 vocabulary sweep's one missed straggler; flown as the first end-to-end flight of the assembled chain, the wake-lock catching a mistimed em-dash-vs-middot ack in flight](history/workshop/mechanism/lane-worker-baton.md) | [#191](https://github.com/wsher0901/roam/pull/191) |
| 07-22 15:09 | [the repo stops telling a future seat to do things that cannot work: nine corrections from the first end-to-end chain flight — one canonical anchored ack token, rung 1's impossible recipe replaced by the console-attach shape that flew, the board promoted to authoritative flight plan, a git-only vs API-only dependency map, the cloud environment corrected to `Default`, one LAWS sentence fixing "non-author" to the payload diff — the gh half since corrected in turn by D-049](history/workshop/mechanism/flight-hardening.md) | [#193](https://github.com/wsher0901/roam/pull/193) |
| 07-21 14:56 | [the cockpit's birth vehicle becomes `claude --cloud` (D-047): the automated hidden-console birth is liftoff §6's primary rung — list-native — with compose-and-hand, the routine fire, and the manual paste as fallbacks; three STOP-gates proved clone-from-GitHub and branch-create by live probe](history/workshop/mechanism/cloud-born-cockpit.md) | [#187](https://github.com/wsher0901/roam/pull/187) |
| 07-20 22:01 | [the `.claude/` harness learns the D-046 vocabulary: the pickup stub and session-start hook name the BATON-HOLDER (control tower on the ground, cockpit in flight); flown as a label-spawned cloud lane](history/workshop/mechanism/harness-vocab-rename.md) | [#180](https://github.com/wsher0901/roam/pull/180) |
| 07-20 15:40 | [the cockpit is the control tower online (D-046): full-authorship cloud command session fired by liftoff; the no-solo-approval law; the CC-direct surface doctrine; clerk retirement staged; fire.mjs generalized (clerk \| cockpit)](history/workshop/definition/flight-cockpit.md) | [#177](https://github.com/wsher0901/roam/pull/177) |

Note: [#201](https://github.com/wsher0901/roam/pull/201) (liftoff
board weld) and [#202](https://github.com/wsher0901/roam/pull/202)
(the liftoff flight harvest into IDEAS) are chore/docs micro-PRs,
not history/ stories, so they carry no ledger line — the ledger is
history-keyed. #202's findings live in [IDEAS](IDEAS.md).
