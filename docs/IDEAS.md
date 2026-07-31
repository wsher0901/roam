---
type: ideas
title: Ideas Inbox
status: living
---
# Ideas Inbox

THE ENTRY CONTRACT
([D-066](record/DECISIONS.md#d-066--the-ideas-entry-contract)):
one idea per line, one line per idea — a plain sentence a tired
reader scans, jargon translated, links short-text at the tail.
Glyph first: ⏳ open · 🟢 developed (vehicle linked) · ⚪ declined
(one-word why). Two sections: OPEN, newest first · CLOSED, one
line each — the outcome ledger; closed entries compress and stay.
A multi-part thought splits into separate lines so closure is
per-idea. Findings and probe stories are not ideas — they live in
the record; a line here points at them. Nothing is scope until
triaged into [ROADMAP](ROADMAP.md) via decide.

## Open

- ⏳ The links gate is destination-blind — it proves an anchor
  EXISTS, never that it is the RIGHT one, and never that a
  mention became a link at all; both misses have already shipped
  past green gates. A checker that reads the target heading is
  the shape. (2026-07-31, the mechanism census) →
  [ATLAS §7](ATLAS.md)
- ⏳ Nothing checks the derivation law — a bar rendered 33
  segments for 34 tasks and every gate stayed green. Counts and
  bars on the board are the checkable class. (2026-07-31, the
  mechanism census) → [ATLAS §7](ATLAS.md)
- ⏳ Board freshness is judgment only — it is repaired at
  rituals, so between them the board is stale by design and only
  the "git outranks it" habit protects a reader. Decide whether
  that is a gap to close or a property to keep. (2026-07-31, the
  mechanism census) → [ATLAS §7](ATLAS.md)
- ⏳ CHARTER VERSION-TABLE ORDER — the v4 row sits above v3 in
  the [cockpit charter](COCKPIT-CHARTER.md)'s history table;
  straighten it at the charter's next natural touch.
  (2026-07-30, the external review)
- ⏳ The Roam stage map — the S1→S8 flowchart dropped from the
  board at [#250](https://github.com/wsher0901/roam/pull/250),
  since WHERE WE ARE is the bars and nothing else; stage order
  still lives in the ROADMAP headings, so decide whether the
  picture is wanted back in ATLAS. (2026-07-30, the board diet) →
  [ATLAS](ATLAS.md)
- ⏳ OBSIDIAN SEAT TOGGLES — add Readable-line-length OFF +
  Strict-line-breaks ON to machine-setup's Obsidian step.
  (2026-07-29, the founder) →
  [machine-setup](skills/machine-setup.md)
- ⏳ Decide whether to keep go-remote as a backstop or retire it —
  never used, and the founder judges the cloud path superior if it
  works; rule only AFTER a real cloud flight proves that path.
  (2026-07-28, the founder) → [go-remote](skills/go-remote.md)
- ⏳ Open every new decide heading with `[product]` or
  `[workshop]`, forward-only. Rule it at the next product decide.
  (2026-07-28, the founder + the external reviewer)
- ⏳ When the check contract is born, rule the EVAL-SET GATE by
  D-number: a ~50-trip golden set with hand-checked ground truth,
  its calibration read before [V1.S4](ROADMAP.md#v1s4--suggest)
  opens. Fills OPEN-9. (2026-07-28, the founder + the external
  reviewer) → [ENGINE](ENGINE.md#12-open-register)
- ⏳ Rule the LLM-BOUNDARY RULE by D-number in the same decide:
  the LLM resolves language at Intake and phrases at Render, and
  never originates a fact, a score, or a rank. A new
  open-register slot. (2026-07-28, the founder + the external
  reviewer) → [ENGINE](ENGINE.md#12-open-register)
- ⏳ Probe whether Opus 5 honours the `max` effort level the
  platform hooks reference lists above xhigh, before any touch of
  the effort doctrine. (2026-07-27, the founder + the external
  reviewer) → [SETUP](SETUP.md#once-and-done--cloud-accounts)
- ⏳ Adopt `.claude/rules/*.md` path-scoped conditional rules as
  the knowledge-loading architecture for engine work — token cost
  falls, and the right rules load when their files are touched.
  (2026-07-27, the founder + the external reviewer)
- ⏳ Licence every session to PROPOSE agent teams and parallel
  lanes unprompted per the hands litmus, the founder's word
  staying the only trigger. Gated on grading the first team use.
  (2026-07-27, the founder + the external reviewer) →
  [D-045](record/DECISIONS.md#d-045--hands-doctrine)
- ⏳ HARNESS V2 — one bench growing the hook layer from three
  events to the guard set: PreToolUse guards, a Stop done-means
  self-check, SessionStart `sessionTitle` for `[COCKPIT]`/`[LANE]`
  naming, Notification matchers for the alert taxonomy,
  TeammateIdle + SubagentStop observability, PreCompact capture.
  AT TRIAGE IT ABSORBS THREE LINES OF THIS INBOX, named so none
  can vanish silently: the PreToolUse-guard line (2026-07-16),
  the `[LANE]` naming half of the 07-22 session-naming line, and
  the notification-taxonomy line (2026-07-22). (2026-07-27, the
  founder + the external reviewer)
- ⏳ Give [ENGINE](ENGINE.md) the right frontmatter — it reads
  `type: spec` though it is a living consolidation. The founder's
  word: it stays for now, resolved at the first engine bench,
  which touches ENGINE anyway. (2026-07-23, the founder)
- ⏳ Separate lane pings from cockpit decisions in the
  notification taxonomy — absorbed by HARNESS V2 above at triage.
  (2026-07-22, Claude Code)
- ⏳ Name cloud sessions at birth with `[COCKPIT]`/`[LANE]`
  prefixes so the phone's session list reads itself — the
  prompt-supplied title was disproven, but SessionStart
  `sessionTitle` is the supported mechanism; absorbed by HARNESS
  V2 above at triage. (2026-07-22, Claude Code)
- ⏳ Make the daily-cap arithmetic account for TRIGGER
  REDELIVERIES — liftoff now adds API fires by hand, but a
  redelivered webhook still burns a run nobody counted.
  (2026-07-22, Claude Code) →
  [liftoff §2](skills/liftoff.md#2--triage-every-open-item)
- ⏳ Carry the external review verdict onto the record
  automatically at self-authored gates, instead of the founder
  pasting it. (2026-07-22, Claude Code)
- ⏳ WATCH — community reports suggest interactive web sessions
  lose their connectors while routine sessions keep them, which
  would make the rescue vehicle the sturdier species and reopen
  the list-native-beats-sturdy choice. One data point plus one
  filed report; do not act yet. (2026-07-22, Claude Code) →
  [D-047](record/DECISIONS.md#d-047--cloud-born-cockpit)
- ⏳ DEFECT — `npm run count:runs` fails at the work PC's Git Bash
  while the same script run directly succeeds; the npm wrapper's
  PATH leaves `execFileSync("gh", …)` unable to resolve the
  executable. Fix by resolving `gh` through the shell on win32, or
  at least print the swallowed error. (2026-07-22, Claude Code) →
  `scripts/count-routine-runs.mjs`
- ⏳ Make verification commands run in the FOREGROUND with results
  quoted from captured output — a detached background check lost
  its exit code and aged into a false all-clear. (2026-07-19,
  Claude Code) → [ship](skills/ship.md)
- ⏳ WATCH — the home PC once had no local `main` branch at
  pickup, healed by rebuilding from origin, cause unknown.
  (2026-07-16, Claude Code)
- ⏳ Give lanes a separate bot identity so PR comments do not post
  as the founder's own account. (2026-07-16, Claude Code)
- ⏳ Archive unrecognized cloud sessions on sight, as standing
  hygiene. (2026-07-16, Claude Code)
- ⏳ Prefer supervisor-backed background sessions over bare
  detached spawns for local lanes. (2026-07-16, Claude Code) →
  [parallel-lanes](skills/parallel-lanes.md#vehicles)
- ⏳ Name Agent View in the lane vehicles list. (2026-07-16,
  Claude Code) →
  [parallel-lanes](skills/parallel-lanes.md#vehicles)
- ⏳ Enforce the deny rails as PreToolUse hooks that block
  dangerous tool calls before they run, not only as settings
  permissions. (2026-07-16, Claude Code)
- ⏳ Add a `check:board` CI gate machine-verifying the board's
  glance-line numbers against ROADMAP checkbox counts — weigh
  against the board's deliberate least-authoritative status.
  (2026-07-16, Web) → [DASHBOARD](DASHBOARD.md)
- ⏳ Write a helper that emits the exact GitHub heading slug for a
  new D-number, so the heading and every link to it are born
  matching. (2026-07-14, Claude Code)
- ⏳ Licence or export the world-facts asset someday — revision
  series, forecast-vs-actual calibration pairs, coverage maps.
  Possible only because storage is licence-segmented.
  (2026-06-12, Web) →
  [D-015](record/DECISIONS.md#d-015--data-asset-law)
- ⏳ Support multi-origin trips and group preference merging —
  friends converging from different cities, several travellers'
  inputs merged into one plan. (2026-06-12, Web)
- ⏳ Build a reachability globe showing how far the traveller's
  max-travel-hours reaches; open question, heuristic distance
  rings versus true flight-time isochrones. (2026-06-12, Web)
- ⏳ Add `paths-ignore: docs/**` so docs-only PRs skip the full CI
  run — BLOCKED as written: branch protection requires the
  `checks` context, so ignoring `docs/**` would leave it
  unreported and block every docs-only merge. Adopt only with a
  matching protection carve-out. (2026-06-11, Claude Code;
  blocker found 2026-07-14)

## Closed

The outcome ledger — one line each, newest first. A closed idea
keeps its answer, never its narrative.

- 🟢 Shorten the decide-anchor links — done as THE SHORT-ANCHOR
  LAW: headings carry a short name (8 words max), the full
  statement moves to an `In full:` line, anchors freeze at mint;
  D-001–D-067 retrofitted. (2026-07-24 → closed 2026-07-31) →
  [#253](https://github.com/wsher0901/roam/pull/253)
- 🟢 The ritual report sweep — every founder-facing report now
  renders one skeleton (verdict · your act · off-origin · context
  · pointer), one job per surface, push first and report second;
  the board diets to the same principle. Asked 2026-07-28 with
  the founder's three requirements, all three written in. →
  [#250](https://github.com/wsher0901/roam/pull/250)
- 🟢 Box currency became derivable on the MASTER side: every box
  master now carries a version-history table, and a fresh Web chat
  drift-checks its box against the master's version line. The
  routine boxes still have no staleness signal of their own — the
  founder re-saves them by hand and the board tracks the owing.
  Asked 2026-07-24 as "stamp each master with last-pasted date +
  sha". →
  [D-064](record/DECISIONS.md#d-064--the-box-master-class-and-setup-entry-contract)
  ·
  [D-063](record/DECISIONS.md#d-063--response-doctrine-v2-and-web-instructions-v6)
  (the drift-check)
- 🟢 The superseded-seat exit — the one road out of a sitting that
  ran no ritual, so a superseded tower leading a team lost its
  findings. Closed in two steps: the cockpit road first, then
  generalized to ANY superseded seat. →
  [D-061](record/DECISIONS.md#d-061--the-landing-doctrine-recut-to-three-scenarios)
  ·
  [D-062](record/DECISIONS.md#d-062--the-wake-rule-generalized)
- 🟢 The reviewer agent-type registration defect, graduated
  2026-07-17 — closed on the founder's word after five clean
  native runs; ship's general-purpose fallback stays the
  documented re-open path. →
  [the answering bench](record/history/workshop/definition/chronicle-answers.md)
- 🟢 The chronicle layer — living stories above the frozen record;
  one story per ITEM superseded the three-chapter shape, the three
  threads surviving as shelves. →
  [D-059](record/DECISIONS.md#d-059--the-chronicle-layer)
- 🟢 The subagent-model question — settled by verification rather
  than guess: the critic runs the `opus` alias, and teammates ride
  the lead's model by config. →
  [D-055](record/DECISIONS.md#d-055--agent-teams-the-boundary)
- ⚪ Keeping the console-attach launcher as a script — DECLINED
  (retired): the blind fire captures nothing, so there is no
  output to read; D-051 deletes the component rather than
  maintaining it, and names keeping-it-as-a-fallback among its
  rejected options. Asked 2026-07-22. →
  [D-051](record/DECISIONS.md#d-051--self-seat-birth)
- 🟢 The cockpit birth-prompt title line — DISPROVEN at the
  2026-07-23 birth: the platform auto-titles from charter content
  and ignored it, so the line was dropped from both homes. →
  [#204](https://github.com/wsher0901/roam/pull/204)
- ⚪ Birthing a list-native cockpit from a GitHub Action —
  DECLINED (cost): the probe reached a real cloud-birth and died
  on the org-UUID gate, and seeding account identity into CI was
  judged too much for an uncertain payoff. The routine fire stays
  the rescue engine. →
  [the probe record](record/probes/cloud-birth-in-ci.md)
- 🟢 The gh-second-path probe findings — a session bluffing about
  its own toolset, teleport relocating execution, birth prompts
  truncating on nested quotes, a birth turn no-opping. Not ideas;
  they live in the record and this line is the pointer. →
  [their story](record/history/workshop/mechanism/gh-second-path.md)
- 🟢 The daily-cap arithmetic's API-fire blind spot — liftoff now
  adds the fires performed this sitting to the script's count.
  (The redelivery half stays open, above.) →
  [liftoff §2](skills/liftoff.md#2--triage-every-open-item)
- 🟢 Rung 1's mechanics rewritten to the console-attach shape:
  winpty is gone from both homes, the prompt reaches `claude` as a
  file-read argument, and the console is killed after the read. →
  [#193](https://github.com/wsher0901/roam/pull/193)
- 🟢 The cloud environment renamed `Default` in SETUP — the docs
  had said "roam". →
  [#193](https://github.com/wsher0901/roam/pull/193)
