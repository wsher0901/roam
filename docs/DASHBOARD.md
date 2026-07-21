---
type: dashboard
title: Dashboard
status: living
---

# Dashboard — the state surface

Stamp: 2026-07-21 · 09:13 · pickup · work PC
V1 5/34 · S1 2/7 · S2 3/5 · sessions: 1 main · 0 parallel
(0 need you) · needs-you 3
How to read this board →
[HOME §Reading the board](HOME.md#reading-the-board)

## Needs you

1. 🟡 [#183](https://github.com/wsher0901/roam/pull/183) is a
   stranded handoff note that must be CLOSED UNMERGED: the cockpit
   wrote it pre-weld (its board still says the
   [#180](https://github.com/wsher0901/roam/pull/180) weld is owed),
   and the lane's ship tail
   [#182](https://github.com/wsher0901/roam/pull/182) out-raced it
   with the post-weld board — merging #183 now would regress the
   board; git already welded #180. Pickup's self-heal tried to
   close it, but this seat's harness blocked `gh pr close` — close
   it on GitHub (one tap, "Close pull request", no merge), or say
   "close #183" and the control tower retries (since 07-21).
   → [#183](https://github.com/wsher0901/roam/pull/183) ·
   [#182](https://github.com/wsher0901/roam/pull/182)
2. 🟡 The cockpit's arming is PART-DONE: this seat's credential
   paste landed 07-20 (COCKPIT_ pair in `.env.local`, masked
   read-back verified, shapes matching the clerk pair's). Still
   owed: the home PC repeats the paste at its next sitting; the
   lane-worker routine box and the clerk routine/session paste
   owe a re-save from the updated SETUP masters (the rename
   changed their wording). The harness-rename chore WELDED 07-20 as
   [#180](https://github.com/wsher0901/roam/pull/180) — one owed
   act remains: archive the lane's session at claude.ai/code, then
   verify `chore/harness-vocab-rename` stays dead (the resurrection
   rule) (since 07-20).
   → [SETUP §cloud accounts](SETUP.md#once-and-done--cloud-accounts)
   · [flight-cockpit](specs/flight-cockpit.md) ·
   [D-046](DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
3. ⚪ Nine open engine questions sit parked in the Open register
   until S3 opens (since 07-13).
   → [ENGINE §12](ENGINE.md#12-open-register) ·
   [D-028](DECISIONS.md#d-028--2026-07--consolidation-recut--decision-policy--engine-brain-skeleton-form-project-policy-house-style-open-register-grows-69-upholds-d-021-extends-the-d-021-consolidation)
   · [V1.S3](ROADMAP.md#v1s3--engine-core--two-families-deep)

## Sessions

| Session | Task | State | Last push | Your move |
|---|---|---|---|---|
| main · control tower (work PC) | the maiden closeout — [#183](https://github.com/wsher0901/roam/pull/183) to close, the lane session to archive, the maiden to grade ([flight-cockpit](specs/flight-cockpit.md)) | 🟡 | 09:13 (this repaint) | Needs-you 1 |

↳ main micro: 🟢 the weld
([#180](https://github.com/wsher0901/roam/pull/180)) ·
⚪ close [#183](https://github.com/wsher0901/roam/pull/183)
(superseded, unmerged) · ⚪ archive the lane session + verify
`chore/harness-vocab-rename` stays dead · ⚪ grade the maiden

Flight context — the maiden closeout
([D-046](DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)):
the 07-20 sitting ended in a photo finish — the cockpit's FULL
handoff note ([#183](https://github.com/wsher0901/roam/pull/183),
stamped 18:05) and the lane's ship tail
([#182](https://github.com/wsher0901/roam/pull/182)) raced; #182
welded minutes later and carries the truth: the founder's merge
word was spoken into the lane's window, ship ran from that seat,
[#180](https://github.com/wsher0901/roam/pull/180) is WELDED (the
no-solo-approval deviation recorded honestly in the
[history file](history/workshop/mechanism/harness-vocab-rename.md)).
#183 must close unmerged — Needs-you 1. Branch check at this
pickup: `chore/harness-vocab-rename` 0 refs — dead (re-verify
after the founder archives the lane session, per the resurrection
rule). No active watches. The clerk stays armed as fallback
(retirement staged for the maiden drill's closeout). Remaining
maiden landing: close #183 → founder archives the lane session →
branch re-verified dead → grade the maiden.

## You are here

V1 — The demo · 5/34 █████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
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

The live ops surface is the current ops chat (title unrecorded at
the shakedown-audit weld) — its external review of
[#177](https://github.com/wsher0901/roam/pull/177) is DONE (the
baton-holder amendment, folded) → next: grade the cockpit maiden.
Last paste: none (bare trigger at the 07-20 liftoff). Under the
surface doctrine
([D-046](DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)),
Web's one mandatory job is the external review of self-authored
diffs. T3–T6 source-vetting relaunch stays held (see You are
here).

## Shipped (latest — full record: [the ledger](history/README.md#the-ledger))

| When | What | PR |
|---|---|---|
| 07-20 22:01 | [the `.claude/` harness learns the D-046 vocabulary: the pickup stub's description and the session-start hook's briefing directive name the BATON-HOLDER (control tower on the ground, cockpit in flight) — wording only, zero stragglers by grep; flown as a label-spawned cloud lane, welded from the same seat on the founder's direct word with the reviewer critic's clean verdict](history/workshop/mechanism/harness-vocab-rename.md) | [#180](https://github.com/wsher0901/roam/pull/180) |
| 07-20 15:40 | [the cockpit is the control tower online (D-046): full-authorship cloud command session fired by liftoff with the board-derived flight plan; the no-solo-approval law (external Web review for self-authored diffs — this weld its own first subject); the CC-direct surface doctrine; clerk retirement staged; Remote Control demoted to backstop; the cockpit/control-tower rename with the BATON-HOLDER as lane-command actor, folded to closure through one review amendment + three critic passes; fire.mjs generalized (clerk \| cockpit)](history/workshop/definition/flight-cockpit.md) | [#177](https://github.com/wsher0901/roam/pull/177) |
| 07-20 13:17 | [the Shakedown Flight closes on paper: A/N checklists graded evidence-or-attest — the 07-20 gate answers folded verbatim, hedges included; six forensics findings closed (the exit-127 assert repaired to an honest 1, the resurrection incident's verify-the-branch-stays-dead ripple, the cloud-proxy 403 rail confirmed); both staged clerk lines resolved verified; liftoff's fire:clerk folded in on the founder's gate word; the attestation haze recorded as lived evidence for D-046](history/workshop/mechanism/shakedown-audit.md) | [#175](https://github.com/wsher0901/roam/pull/175) |
| 07-17 23:43 | [the Hands doctrine (D-045): solo · exploratory subagents · agent team · parallel lanes, the one-bench/many-benches/read-only litmus — the founder's passage verbatim into SETUP §Models & effort, D-045 into DECISIONS, a pointer in parallel-lanes §Vehicles; flown fully unattended as payload A of Shakedown phase 2](history/workshop/definition/agent-teams-brain.md) | [#170](https://github.com/wsher0901/roam/pull/170) |
| 07-17 23:39 | [the memory-format CI gate: scripts/check-memory.mjs validates every task memory against TEMPLATE's locked format — frontmatter, six headings in order, dated Status, no surviving placeholders — wired into package.json, ci.yml, and ship §1's mirror; flown fully unattended as payload B of Shakedown phase 2, the two declared doc mentions landed at the weld](history/workshop/mechanism/check-memory.md) | [#171](https://github.com/wsher0901/roam/pull/171) |
| 07-17 16:41 | [the ignore step fails toward build, never toward error: `\|\| exit 1` hardens the docs-only skip against Vercel's shallow-clone horizon (exit 128 turned four productions ERROR tonight; #153's "failure direction is always build" held for exit 1, not 128 — a shared miss, corrected); documented side-effect: a beyond-horizon docs-only push builds once and self-heals](history/workshop/mechanism/vercel-ignore-fix.md) | [#167](https://github.com/wsher0901/roam/pull/167) |
| 07-17 16:22 | [liftoff ignites the clerk by API: fire-clerk.mjs + fire:clerk against the doc-verified routine-fire endpoint (per-routine token, dated experimental beta header, no idempotency — no auto-retry), the second routine's recipe + the machine-local secret path, manual paste retained as fallback; API fires count against the daily cap yet stay invisible to count:runs — liftoff budgets both (A1–A5 graded at the flight audit)](history/workshop/mechanism/clerk-autospawn.md) | [#164](https://github.com/wsher0901/roam/pull/164) |
| 07-17 16:16 | [the clerk gains the standing watch (charter v2, duty 6): lane events reach the founder's phone as turn-end announcements — BLOCKED:/completions/CI-red; the watcher line opens in the mail slot (N1–N6 graded at the flight audit); the doorbell-mirror idea superseded; the reviewer agent-type failure graduated to defect](history/workshop/mechanism/clerk-notify.md) | [#163](https://github.com/wsher0901/roam/pull/163) |
| 07-17 15:26 | [the away surface goes live: the clerk maiden flown founder-run, C1–C6 all green (~4.5h idle survival proven, run-count attest closed at 1), the promotion clause executed — clerk PRIMARY for machine-off answering, GitHub app demoted to backstop; clerk-notify + clerk-autospawn staged beside api-ignition](history/workshop/mechanism/cloud-clerk.md) | [#156](https://github.com/wsher0901/roam/pull/156) |
| 07-17 11:09 | [the pre-GATE critic wired in (D-044): ship §6 opens by invoking the reviewer subagent — advisory verdicts riding to the founder with the summary; the critic's maiden wired run flew on its own PR (pass + the verdict-as-message clause)](history/workshop/mechanism/ship-wiring.md) | [#159](https://github.com/wsher0901/roam/pull/159) |
