---
type: dashboard
title: Dashboard
status: living
---

# Dashboard — the state surface

Stamp: 2026-07-24 · 15:24 · ship tail · work PC
V1 5/34 · S1 2/7 · S2 3/5 · sessions: 1 main · 0 parallel
(0 need you) · needs-you 2
How to read this board →
[HOME §Reading the board](HOME.md#reading-the-board)

## Needs you

1. 🟡 Re-save the cockpit routine box from the edited master —
   rule 6 changed, so the live box is one revision behind the repo
   (since 07-24).
   → [SETUP §cloud accounts](SETUP.md#once-and-done--cloud-accounts)
   (the master) · [#221](https://github.com/wsher0901/roam/pull/221)
   (what changed: rule 6 is now a three-line pointer to
   [land](skills/land.md))
2. 🟡 Set the two routine configs — lane worker and cockpit — to
   Opus 5 at the next flight; the doctrine moved today and the
   boxes have not (since 07-24).
   → [SETUP §Models & effort](SETUP.md#once-and-done--cloud-accounts)
   ·
   [D-054](DECISIONS.md#d-054--2026-07--the-landing-skill--how-a-flight-ends-becomes-a-first-class-ritual-one-skill-with-two-modes-routed-by-fleet-state-retire--pause-and-transfer-the-fence-is-a-commit-so-the-resume-point-is-the-branch-tip-by-construction-wake-lock-mediated-with-its-honesty-clause-the-board-is-the-single-transfer-material-pickup-gains-the-fleet-resume-ask-and-its-cap-arithmetic-sessions-are-cattle-branches-are-the-work-charter-rule-6-becomes-a-pointer-the-effort-doctrine-moves-to-opus-5--xhigh-upholds-the-wake-lock-the-park-protocol-and-one-home-supersedes-the-opus-48-reliance-pair)
   clause 7

Both are founder acts outside the repo, so no ritual can derive
them done — they clear on your word at any ritual.

The nine open engine questions stay parked in
[ENGINE §12](ENGINE.md#12-open-register) until
[V1.S3](ROADMAP.md#v1s3--engine-core--two-families-deep) opens;
they are a register, not an action. ENGINE's `type: spec`
frontmatter oddity is folded there too
([IDEAS](IDEAS.md), the founder's 07-23 gate word).

## Sessions

| Session | Task | State | Last push | Your move |
|---|---|---|---|---|
| main · control tower | — (landing-skill welded; nothing open, nothing parked) · 0/0 | 🟢 | 15:24 (this repaint) | the two manual acts above |

↳ main micro: — (no active task)

The work PC picked the baton up at 13:26 on a clean floor and
welded ONE bench: THE LANDING SKILL
([#221](https://github.com/wsher0901/roam/pull/221),
[D-054](DECISIONS.md#d-054--2026-07--the-landing-skill--how-a-flight-ends-becomes-a-first-class-ritual-one-skill-with-two-modes-routed-by-fleet-state-retire--pause-and-transfer-the-fence-is-a-commit-so-the-resume-point-is-the-branch-tip-by-construction-wake-lock-mediated-with-its-honesty-clause-the-board-is-the-single-transfer-material-pickup-gains-the-fleet-resume-ask-and-its-cap-arithmetic-sessions-are-cattle-branches-are-the-work-charter-rule-6-becomes-a-pointer-the-effort-doctrine-moves-to-opus-5--xhigh-upholds-the-wake-lock-the-park-protocol-and-one-home-supersedes-the-opus-48-reliance-pair)).
Origin carries `main` only; no lane flew, nothing is parked. The
queue, in order: AGENT TEAMS (which must settle the
subagent-model line — the effort doctrine governs surfaces and
sessions, not subagent internals, so the critic's `model:` line
rides there) · THE CHRONICLE LAYER (its own chat).

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

The live ops surface is the current ops chat, governed by the v5
master. Its most recent external review —
[#221](https://github.com/wsher0901/roam/pull/221) (the landing
skill, tower-authored) — is DONE, verdict PASS on `3e4d1ba`
(twelve files: the mandate's list plus the two disclosed ripples,
both upheld — TEMPLATE's held-row unification judged REQUIRED by
one-home rather than merely allowed; both modes, the fence and its
by-construction claim, the honesty clause, the cattle disposal,
pickup's three granular words and live cap arithmetic, rule 6 as a
pure pointer, and the mirrored stub boundary all verified; gates
re-run independently). Earlier reviews, all DONE:
[#218](https://github.com/wsher0901/roam/pull/218) (PASS on
`bd2f6ef`) · [#216](https://github.com/wsher0901/roam/pull/216)
(PASS on `5f4be89`) ·
[#213](https://github.com/wsher0901/roam/pull/213) (PASS on
`342e344`) · [#211](https://github.com/wsher0901/roam/pull/211)
(PASS on `edc0c9a` + `1ffebdf`) ·
[#207](https://github.com/wsher0901/roam/pull/207) (PASS on
`2b97a86`) · [#204](https://github.com/wsher0901/roam/pull/204)
(PASS on `614e0f8`) → next: grade the cockpit maiden, once the
closeout bench opens; THE CHRONICLE LAYER gets its own chat.
Under the surface doctrine
([D-046](DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)),
Web's one mandatory job is the external review of self-authored
diffs — the v5 box now says so itself.
T3–T6 source-vetting relaunch stays held (see You are here).

## Shipped (latest — full record: [the ledger](history/README.md#the-ledger))

| When | What | PR |
|---|---|---|
| 07-24 15:20 | [how a flight ends becomes a first-class ritual (D-054): land ships as ONE skill with TWO modes routed by the fleet the cockpit derives from origin — RETIRE, consolidating the duties charter rule 6 already carried, and PAUSE-AND-TRANSFER, answering the case that had none; its core is THE FENCE, a commit that makes the lane's next push non-fast-forward so the wake-lock turns the rejection into a stop and the resume point is the branch tip BY CONSTRUCTION, with the honesty clause beside it (wake-lock-mediated, never a guaranteed freeze); the board's fleet-at-ground table is the single material passed down, sessions are cattle and branches are the work, pickup gains the FLEET RESUME ask with live cap arithmetic, rule 6 reduces to a pointer, and the effort doctrine moves to Opus 5 · xhigh; five alternatives rejected with reasons; the critic's two findings repaired pre-flip, the 🟡 one judged REQUIRED by one-home at the external review](history/workshop/mechanism/landing-skill.md) | [#221](https://github.com/wsher0901/roam/pull/221) |
| 07-24 01:33 | [the harness found ALREADY AT BEST PRACTICE, the proof welded to the record (D-053): the founder's maximum-depth audit of the whole governing layer against Anthropic's guidance; the two real improvements shipped — LAWS' verification loop promoted to a copy-runnable block (proven live: this bench's gate ran the block verbatim as its mirror) and two stub trigger-surfaces sharpened, the harness picking both up mid-bench; five alternatives rejected with reasons; the critic's one finding — the hygiene bench's own bare D-053 mentions — repaired pre-flip](history/workshop/definition/guardrail-audit.md) | [#218](https://github.com/wsher0901/roam/pull/218) |
| 07-24 00:51 | [one standard for how every surface speaks to the founder (D-052): the goal verbatim — minimum reading time to decision, explicit steps over abstractions, purpose-shaped explanation — five clauses in ONE home (HOME §Response doctrine), the founder's §Command card with D-049's teleport warning where it will be read, the cockpit's FLEET TABLE report, the four-part status template rewritten into all three rituals (pickup's ⏸ lead above everything), and WEB-INSTRUCTIONS v4 → v5 — the paste-block loop dead, the mandatory-review role leading, the on-the-record word-paste in the procedure](history/workshop/definition/response-doctrine.md) | [#216](https://github.com/wsher0901/roam/pull/216) |
| 07-24 00:28 | [the fragilest component is deleted, not maintained (D-051): rung 1 fires `claude --cloud` BLIND — nothing captured, exit status only — and the cockpit SEATS ITSELF by its D-049 env-derived self-URL; the console-attach capture retired dated (it never failed — it was the component most likely to break silently); the missing greeting push IS the failure signal (/tasks · the list · retry), the pending row going stale honestly; the stray-collision close sharpened by the critic to a short factual note, never R4b's script; THE LIVE TEST rides the next real flight by the founder's word](history/workshop/mechanism/self-seat-birth.md) | [#213](https://github.com/wsher0901/roam/pull/213) |
| 07-23 23:38 | [what a session's start, pause, and close leave behind (D-050): closed ≠ dead — the close-lock's wall softens to injected read-only doctrine, one doctrine in four homes and the wall hook itself (the one flagged gap file, both paths run live), full removal REJECTED, R4b + seat-stamp byte-strict; the ⏸ interrupt capture standing (block · state · pickup's "continue?" lead); the claude/* residue sweep graduates to pickup hygiene; IDEAS becomes an inbox-not-archive with the first assert-first compaction (420→266, 11 deleted enumerated, both stay-clauses exercised); chronicle layer + self-seat birth queued](history/workshop/mechanism/session-lifecycle.md) | [#211](https://github.com/wsher0901/roam/pull/211) |
| 07-23 22:38 | [the cockpit gains a second API path (D-049): gh installs from the allowlisted Ubuntu archive and authenticates through the GitHub proxy — REST-shaped (gh api works repo-scoped; GraphQL porcelain 403s, the proxy pointing to REST); the probe flew NON-PASS on its own definition, STOP held, and the gate reopened on the founder-witnessed REST read; the API map two-pathed (only both paths dead demote), the charter R2 gains the automatic gh rung, self-ID from session env, the Claude-Session trailer noted; five findings ride first-class incl. the toolset bluff (probe-don't-assume extends to a session's own tools) and teleport-relocates-execution](history/workshop/mechanism/gh-second-path.md) | [#207](https://github.com/wsher0901/roam/pull/207) |
| 07-23 21:29 | [the docs currency audit: the clerk sweep came back already-clean (#197 held) — the real catch was the NEXT generation of staleness: the disproven `[COCKPIT]` title line dropped from liftoff §6 + SETUP with the verify-before-rely answer recorded in place, #193's board-governs doctrine landed in HOME's manual plus three more HOME edges (FOUNDATION's writer drops the paste block, go-remote joins the skills list, §Delegation names route 1 the recorded maiden winner), cloud-born-cockpit's two disproven recipes supersession-noted beyond the known clerk set, machine-setup gains the COCKPIT_ pair as step 11; four dated notes, zero deletions, zero record-body rewrites, orphans NONE by inbound-reference census; flown across two seats through a park, adopted from origin alone](history/workshop/mechanism/currency-audit.md) | [#204](https://github.com/wsher0901/roam/pull/204) |
| 07-23 21:07 | [.env.example carries zero CLERK_ cruft: the vestigial clerk comment prose scrubbed from the "Routine fires" block so the file names only the live cockpit routine, the payload matching the founder's intent rather than the literal "two placeholder lines" (already gone by #197); flown as a full-liftoff run-through — bench-first birth, canary, cockpit airborne ack, one-file scrub — then carried through an independent non-author review that re-verified CI on the true merge tip after the lane cited a run one commit behind](history/workshop/mechanism/env-clerk-scrub.md) | [#200](https://github.com/wsher0901/roam/pull/200) |
| 07-23 12:02 | [the repo stops pointing at a vehicle that cannot fire: the clerk routine was deleted 07-22, every live instruction reaching for the clerk removed and every verified record tombstoned (C1–C6, N2/N3, A1/A4 kept), liftoff's ladder bottomed out at the D-048 phone bootstrap, `fire.mjs` cockpit-only with the drain idiom untouched, no new D-number by design, and one live defect caught just outside the mandate's file list — parallel-lanes still armed the clerk as both fallback and notification watcher](history/workshop/mechanism/clerk-retirement.md) | [#197](https://github.com/wsher0901/roam/pull/197) |
| 07-22 16:36 | [a cockpit that survives, announces, and replaces its own GitHub connector loss (D-048): redundancy inside a session ruled impossible, so resilience became a five-rung ladder OUT of the session (prevent · detect · repair · degrade · self-rescue) with a tombstone and refusal guard; `summon.yml` ships live on `workflow_dispatch` + a push to `ops/summon`, reusing `fire.mjs`; merge-on-signal REJECTED with reasons — R2's premise since amended by D-049, the ladder standing](history/workshop/mechanism/cockpit-resilience.md) | [#195](https://github.com/wsher0901/roam/pull/195) |

Note: [#201](https://github.com/wsher0901/roam/pull/201) (liftoff
board weld) and [#202](https://github.com/wsher0901/roam/pull/202)
(the liftoff flight harvest into IDEAS) are chore/docs micro-PRs,
not history/ stories, so they carry no ledger line — the ledger is
history-keyed. #202's findings live in [IDEAS](IDEAS.md).
