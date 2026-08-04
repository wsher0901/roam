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

- ⏳ THE SUMMON ONE-LINER HAS NO WRITTEN HOME — [SETUP](SETUP.md)
  and [HOME](HOME.md) both carry the RECIPE ("push ONE empty commit
  to the reserved branch `ops/summon`") and
  `.github/workflows/summon.yml` confirms the trigger, but no file
  carries a command a founder can paste. Rung 4 is the self-rescue
  path, reached only when everything above it has failed, so the
  moment it is needed is the worst possible moment to be composing
  git plumbing from prose. Either write the literal command into
  SETUP beside the recipe, or add an npm script. Found while
  preparing flight 4's post-landing duty, where the desk is told to
  hand over the "exact one-liner, never improvised" and the record
  cannot supply one. (2026-08-04, flight 4's liftoff) →
  [SETUP §cloud accounts](SETUP.md#once-and-done--cloud-accounts)
- ⏳ **MASTER ITEM** · THE TOMBSTONE LINE LIES UNDER DESK TAKEOVER —
  [the charter](COCKPIT-CHARTER.md)'s rule 8 makes a retiring seat
  say "a replacement cockpit has been summoned and will greet you;
  the board carries its link", and under a desk takeover no such
  cockpit exists: the DESK took the baton, and the board carries a
  control-tower line, not a successor's link. The same presumption
  runs through the rule's SUCCESSOR DUTY, which is written for a
  replacement cockpit and has no reading when the successor is a
  desk. Flight 3's retiring seat REFUSED TO SPEAK IT, which is the
  right call and also the proof — a seat that may write nothing
  caught a false sentence in its own final message and had no way
  to fix it. THE FIX IS A CHARTER EDIT, so it carries the box-master
  duty with it: bump to **v5** with a version-history row, and the
  **box re-save** rides [DASHBOARD](DASHBOARD.md) Needs-you until it
  is done, because a master change that never reaches its box fails
  silently. For the fix bench. (2026-08-04, flight 3's cockpit at
  retirement) →
  [LAWS §Knowledge & tracking](LAWS.md#knowledge--tracking)
- ⏳ A SUPERSEDED SEAT HAS NO CHANNEL BUT SPEECH — it may write no
  board by [land](skills/land.md) Scenario 2's carve-out, so any
  finding it is holding at retirement can reach the founder only in
  its final message, and the tombstone line is fixed text with no
  room for one. Flight 3's cockpit hit this with two findings in
  hand. THE QUESTION TO RULE: may the tombstone message carry ONE
  off-origin block, or does a mute seat stay mute and accept that
  what it knows dies with it? Filed unruled — it trades the
  push-first law against losing a finding entirely. (2026-08-04,
  flight 3's cockpit at retirement) →
  [the charter](COCKPIT-CHARTER.md)
- ⏳ RUNG 1'S BIRTH PROMPT ARRIVES UTF-8-MANGLED ON WINDOWS —
  crossing the `--cloud` argument mojibakes the text, so a cockpit
  is born reading a corrupted mandate. It cost this flight nothing
  because [the charter](COCKPIT-CHARTER.md)'s rule 1 absorbed it —
  a garbled birth prompt loses to the board, the same reflex as
  "git outranks the note" — but that clause is a BACKSTOP, not a
  fix. What it protects is only what the board already says; a
  prompt that cannot be read cannot carry anything else, so the
  one-line mandate is the part silently lost. (2026-08-04, the
  founder) →
  [liftoff §6](skills/liftoff.md#6--ledger-handoff--fire-the-cockpit)
- ⏳ `check-memory.mjs` CANNOT SEE A CODE SPAN THAT WRAPS — it
  strips backtick spans with a regex that forbids newlines inside
  the span, so a legitimately backticked placeholder broken across
  two source lines survives the strip and is reported unresolved.
  The workaround it forces is "reflow your prose", which is a
  formatting rule wearing a correctness rule's clothes. Hit live
  while the lane was quoting the very row it had just amended.
  Distinct from the angle-bracket line below: that one is the rule
  being bluntly right, this one is the STRIP being wrong.
  (2026-08-04, flight 3's lane) → `scripts/check-memory.mjs`
- ⏳ LIFTOFF STAMPS THE FIRE TIME BEFORE IT FIRES — the baton line
  is painted into the board, and the board is welded, BEFORE the
  cockpit is launched, so `COCKPIT — fired <t>` names a moment
  that is always earlier than the launch it claims to record
  (flight 3: stamped 19:43, weld merged 19:45:20). Every flight's
  measured latency has been read off it. Either paint the fire
  time at fire time or rename the field to what it is. (2026-08-04,
  flight 3's self-seat) → [liftoff](skills/liftoff.md)
- ⏳ THE MID-WORK OVERLAP IS REAL BUT UNDER TWO MINUTES — flight 3
  showed a fired cockpit and a still-working lane coexisting for at
  most 1m47s, which retires flight 2's "the window closes by
  construction" without changing the ruling that a freeze test
  needs a holding bench. Worth writing into the record so the next
  reader does not re-derive it. (2026-08-04, flight 3's self-seat)
  → [D-074](record/DECISIONS.md#d-074--phase-1-closes-on-flights-3-and-4)
- ⏳ SPEC FRONTMATTER HAS NO GATE — flight 3's bench was born
  `status: draft`, a value outside the declared vocabulary
  (`open | shipped | superseded`) and the only such value in the
  repo's history. Nothing catches it; ship overwrites it anyway,
  so it is invisible in both directions. (2026-08-04, flight 3's
  non-author review) →
  [specs TEMPLATE](record/specs/TEMPLATE.md)
- ⏳ THE GATE-MOMENTUM GAP — no law names which seat collects a
  frozen or in-flight fleet's merge words; flight 2's cockpit moved
  from "review them" to offering the weld in one breath, and only
  the founder's plan caught it. Name the seat rule (gates travel
  with the baton's landing plan) in the fix bench. (2026-08-04,
  flight 2, the external review) → [ship](skills/ship.md)
- ⏳ THE CAP MODEL, ONE SENTENCE — which births burn the routine
  cap: label-spawns yes, `fire:cockpit` yes (invisible to
  `count:runs`), rung-1 `--cloud` births likely not. Flight 2's
  floor-counts were conservative guesses; write the model where
  SETUP holds the number. (2026-08-04, the external review) →
  [SETUP §cloud accounts](SETUP.md#once-and-done--cloud-accounts)
- ⏳ RESURRECTION BY SURVIVING HOME — the twin sweep satisfied the
  resurrection rule by verifying the unique commit survives in a
  closed PR's diff, then deleting the branch. Sound, but the
  interpretation lives only in a board note that rituals repaint;
  write it into the rule's own home. (2026-08-04, the twin sweep +
  the external review) → [LAWS](LAWS.md)
- ⏳ THE VERIFICATION LOOP ASSUMES DEPENDENCIES A FRESH SEAT DOES
  NOT HAVE — a cloud container arrives with `node_modules` empty,
  so lint, format, test and build all fail on a missing package
  until `npm ci` runs, which reads at first glance like a repo
  fault rather than an unbuilt seat.
  [ship §1](skills/ship.md#1--preflight) lists five commands with no
  install rung, and nothing on the cloud path installs for you; a
  desk never sees it because its clone was built once and stayed
  built. The three DOC gates run on bare node and pass before it,
  so a doc-cargo lane can verify itself before paying for an
  install. Met independently by flight 1's cockpit, flight 2's
  lanes B and C, and flight 3's lane — four seats, which makes it a
  property of the cloud path rather than a run of bad luck.
  (2026-08-04, flight 2 lane B) →
  [ship §1](skills/ship.md#1--preflight)
- ⏳ FLIGHT 4 — THE FAILURE DRILL: the connector rungs, summon, and
  the freeze checkpoint exercised together as DELIBERATE failures
  rather than hoped-for ones, so the paths that only run when
  something breaks are run on purpose at least once. Phase 1 closes
  on this flight and flight 3
  ([D-074](record/DECISIONS.md#d-074--phase-1-closes-on-flights-3-and-4)).
  Not scope until triaged. (2026-08-04, the founder) →
  [parallel-lanes §Cloud spawn](skills/parallel-lanes.md#cloud-spawn--route-ladder)
- ⏳ FLIGHT 3 — THE DESK TAKEOVER OF A LIVE COCKPIT HOLDING A
  DECISION: pickup's OTHER entry door, where the founder sits down
  at a desk while a cockpit is still flying and holding gates, so
  the board write transfers the baton and the old seat self-retires
  by reading its own supersession. Designed at
  [D-061](record/DECISIONS.md#d-061--the-landing-doctrine-recut-to-three-scenarios)
  scenario 2, never flown; flight 2 could not reach it because its
  fleet was already at ground. Not scope until triaged.
  (2026-08-04, the founder) →
  [pickup §6](skills/pickup.md#6--fleet-resume-on-the-founders-answer)
- ⏳ A DETERMINISTIC FREEZE DRILL — one bench SPECCED TO HOLD AT A
  CHECKPOINT UNTIL ACKED, so that "mid-work" is guaranteed by
  construction instead of raced against how fast the cargo happens
  to finish. This is what finally tests the wake-lock's
  rejected-push rule — does a fence actually STOP a live worker —
  which three flights have now failed to observe because every
  fence landed on a finished bench. Folds into flight 4 rather than
  earning a flight of its own
  ([D-074](record/DECISIONS.md#d-074--phase-1-closes-on-flights-3-and-4)).
  (2026-08-04, the founder) →
  [§Wake-lock](skills/parallel-lanes.md#wake-lock--parking)
- ⏳ NOTHING REQUIRES READING A PR'S COMMENTS BEFORE ACTING ON ITS
  BENCH — flight 2's cockpit read
  [#280](https://github.com/wsher0901/roam/pull/280)'s metadata,
  saw `comments: 2`, did not open them, and repeated a wrong
  diagnosis to the founder for 25 minutes while the contradicting
  evidence sat one call away. A PR's comments are a lane's ONLY
  channel for what a git clone cannot show, and no gate, ritual or
  law names them as a read. (2026-08-04, flight 2 the cockpit) →
  [parallel-lanes](skills/parallel-lanes.md)
- ⏳ THE CANARY WINDOW IS NARROWER THAN THE OBSERVED DISPATCH
  SPREAD — the same route onto the same bench produced a session in
  ~27 minutes once and ~2 minutes the next time, so the ~10-minute
  window is set inside the spread rather than outside it. The late
  session found a parked Status and self-terminated correctly, so
  the wake-lock held and the cost was one burned cap run, never
  split-brain work; the failure mode is DISPATCH LATENCY, not a
  dead trigger, which is a materially different repair from what a
  lost-spawn reading suggests. (2026-08-04, flight 2 lane C) →
  [§Canary](skills/parallel-lanes.md#canary-handshake-both-sides)
- ⏳ NOTHING CHECKS THAT A STAMP IS TRUE, ONLY THAT IT IS
  WELL-FORMED — a lane read the shell clock once on waking and
  extrapolated its later stamps from the shape of its own work,
  landing ~2.5 minutes in the FUTURE, and `check:memory`,
  `check:links` and CI all passed it green because a plausible
  stamp is indistinguishable from a true one. It caught itself
  only by re-reading the clock, which nothing required. Distinct
  from the counts-and-bars derivation line below: this is the time
  half of the same law. (2026-08-04, flight 2 lane C) →
  [LAWS §Knowledge & tracking](LAWS.md#knowledge--tracking)
- ⏳ A CLOUD LANE CANNOT TELL WHICH BENCH IS ITS OWN FROM THE
  CONTRACT — the lane-worker prompt says "that PR" but a fleet
  labels several at once, and neither the prompt nor the
  checked-out branch names one. The identifier exists in the
  ENVIRONMENT (`CCR_TRIGGER_PR_NUMBER`, agreeing with
  `CCR_TRIGGER_HEAD_SHA` and `CLAUDE_CODE_BASE_REF`) and no
  document mentions it, so without it a fleet lane guesses and
  races its siblings. (2026-08-04, flight 2 lane A) →
  [LANE-WORKER](LANE-WORKER.md)
- ⏳ HOME'S FILES TABLE HAS FOUR MORE GAPS, found by the audit that
  rode lane C: `.claude/agents/reviewer.md` (defines the subagent
  no-solo-approval leans on) · `.claude/vault-seed/` (no row and no
  mention anywhere, prose included) · `scripts/*.mjs` (all five,
  and `check-links.mjs` appears by filename in neither HOME nor
  SETUP while nearly every bench's Done-means invokes it) ·
  `.github/workflows/ci.yml` and `summon.yml`. Root build config is
  a NULL RESULT, not a gap — consistently absent and SETUP is its
  home. (2026-08-04, flight 2 lane C) →
  [HOME §The files](HOME.md#the-files--what-each-one-is-for)
- ⏳ A TABLE-COVERAGE GATE IS CHECKABLE WHERE THE GENERAL CASE IS
  NOT — the audit's real find was that HOME's absences are not
  scattered but cluster on ONE SIDE OF AN UNDECLARED BOUNDARY: the
  table documents writing completely and machinery partially. "Every
  file under `.claude/`, `scripts/` and `.github/workflows/` has a
  row or a declared exclusion" is a script's job, unlike "every
  mention became a pointer". The tempting excuse was tested and
  FAILS — `.claude/settings.json` is in SETUP twice and still
  carries a row. (2026-08-04, flight 2 lane C) →
  [HOME §The files](HOME.md#the-files--what-each-one-is-for)
- ⏳ MACHINE-SETUP STEP 2 NAMES TWO SEATS WHERE STEP 1 NOW NAMES
  THREE — `git config roam.machine "work PC" (or "home PC")` has no
  cloud value, so a cloud seat reaching it must invent one; flight
  2's cockpit set `cloud` by inference and that string is now in
  ritual stamps on the board. Either step 2 names the cloud label,
  or the seat-label vocabulary lives in one place both steps cite.
  Surfaced by the change that created it. (2026-08-04, flight 2
  lane B) → [machine-setup](skills/machine-setup.md)
- ⏳ A LANE'S PROOF THAT IT OBEYED §CANARY LIVES ONLY IN ITS PROSE —
  a lane that polls origin and matches the anchored token leaves no
  evidence but its own diary saying so; nothing mechanical
  distinguishes it from one that trusted a message. The same shape
  as the hole [#278](https://github.com/wsher0901/roam/pull/278)
  just closed, one level up. (2026-08-04, flight 2 lane A) →
  [§Canary](skills/parallel-lanes.md#canary-handshake-both-sides)
- ⏳ THE `pull_request.labeled` REDELIVERY IS NOT RARE — flight 2
  met two live, one within four minutes of its lane's first firing
  and one citing a five-commit-stale head SHA. Both were absorbed
  exactly as designed, and the point worth recording is that the
  wake-lock backstop is LOAD-BEARING rather than theoretical: the
  same rule made a live lane carry on and would have made a fresh
  session self-terminate. FLIGHT 3 MET A THIRD, citing the stale
  birth SHA mid-handshake, absorbed the same way — and sharpened
  the limit: all three landed on a lane that was WAITING, never
  one mid-push, so the rejected-push rule stays unobserved.
  (2026-08-04, flight 2 lanes A and C · flight 3's lane) →
  [§Wake-lock](skills/parallel-lanes.md#wake-lock--parking)
- ⏳ `check:memory` READS ANY ANGLE-BRACKETED TEXT AS AN UNRESOLVED
  PLACEHOLDER, so a memory cannot quote an email address, a git
  identity, or an XML-ish token in its natural form. The rule is
  right to be blunt, but the failure message does not say that a
  legitimate quotation is what tripped it. (2026-08-04, flight 2
  lane A) → `scripts/check-memory.mjs`
- ⏳ TWO OF THE TEMPLATE'S STATUS ROWS CARRY NO DATE SLOT WHILE THE
  CHECKER DEMANDS A DATE — `complete, awaiting merge` and
  `bench ready` are written in the vocabulary table without the
  `— <date>` their neighbours have, so copying the row verbatim
  goes red. A lane hit it doing exactly that. (2026-08-04, flight 2
  lane A) → [TEMPLATE](memory/TEMPLATE.md)
- ⏳ THE SESSION-START BRANCH SWEEP IS BLIND TO A BRANCH THAT
  CARRIES NO UPSTREAM — it filters `git branch -vv` for
  `[origin/…: gone]`, a marker git prints only when the local
  branch has upstream tracking config, so a branch never pushed
  with `-u` (or one whose config was lost) shows no bracket at all
  and survives every sweep forever, long after its work has
  shipped. Found when `docs/flight-1-probe` outlived the merge of
  [#268](https://github.com/wsher0901/roam/pull/268) and had to be
  removed by hand at pickup. Reproduced both ways at the desk: with
  the upstream config restored the sweep catches it, so the squash
  merge is NOT the cause and an ancestry test is not the fix — the
  sweep needs a second arm for the no-upstream case. (2026-08-04,
  the founder + pickup) → `.claude/hooks/session-start.mjs`
- ⏳ SHOULD §CANARY'S ACK MATCH ANCHOR ON THE WORD OR THE TOKEN —
  [§Canary](skills/parallel-lanes.md#canary-handshake-both-sides)
  fixes the test at "STARTS WITH `airborne ·`", never the bare
  word; flight 1's first lane deliberately anchored on the word
  instead, reasoning that the anchor does the safety work while the
  middot only adds brittleness against the em-dash ack of
  2026-07-22. The counter is that the token is what keeps the ack
  from matching by accident. Filed DEFERRED — no ruling made.
  (2026-08-04, the founder) →
  [the probe's CANARY section](record/probes/flight-1-shakedown.md)
- ⏳ WHETHER THE FIGURE LAW REACHES HOME — [ATLAS](ATLAS.md) is
  eight designed SVG figures under
  [D-073](record/DECISIONS.md#d-073--atlas-becomes-designed-figures),
  while [HOME](HOME.md) keeps its own small mermaid chooser
  diagram; whether it converts is a decide-level ruling. Filed
  DEFERRED — no ruling made. (2026-08-03, the founder) →
  [HOME](HOME.md)
- ⏳ GITHUB CANNOT RECORD THE NON-AUTHOR REVIEW — every seat
  authenticates as the one account, so `APPROVE` is refused as
  self-approval on every lane PR; the independent review can only
  ever be a comment, which means no-solo-approval is unenforceable
  through the platform's own mechanism. Found when the cockpit
  tried to approve flight 1. (2026-08-03, flight 1) →
  [LAWS §Workflow](LAWS.md#workflow-non-negotiable)
- ⏳ A memory's `updated:` stamp carries no timezone, so two seats
  writing in the same minute read four hours apart on the page —
  flight 1's ack reads `17:38` from the work PC and its canary
  `21:38 UTC` from the cloud, and a cold reader cannot order the
  file's own stamps. (2026-08-03, flight 1) →
  [TEMPLATE](memory/TEMPLATE.md)
- ⏳ THE CLAIM STATUS FORM DIFFERS BETWEEN ITS TWO HOMES —
  [§Canary](skills/parallel-lanes.md#canary-handshake-both-sides)'s
  lane side and [TEMPLATE](memory/TEMPLATE.md)'s state table write
  it differently, and only the `airborne` row is machine-checked,
  so the claim row can drift between them without anything going
  red. (2026-08-03, flight 1)
- ⏳ ON A ROUTE-1 CLOUD LANE THE READY-FLIP IS CONSUMED BY THE
  SPAWN, so the lane's completion contract carries a step that is
  a no-op and a signal that carries no information; the staged
  `api-ignition` target is what would give it back. REPRODUCED at
  flight 3, which makes it a property of the route rather than an
  incident — the memory Status is the only completion signal a
  route-1 lane has. (2026-08-03, flight 1 · 2026-08-04, flight 3's
  lane) →
  [§Cloud spawn](skills/parallel-lanes.md#cloud-spawn--route-ladder)
- ⏳ LIFTOFF REPAINTS THE BOARD TWICE — §1's handoff paints a
  ground board and ships a micro-PR, then §6 overwrites it with the
  flight plan minutes later; the first board is never read by
  anyone and its baton line has no defined case. Found by running
  the ritual exactly at flight 1. (2026-08-03, Claude Code) →
  [liftoff §1](skills/liftoff.md#1--full-handoff-first)
- ⏳ ATLAS FIGURE GATE — a standing lint for the figure law
  (viewBox 740 · palette hexes · generic fonts · coordinate
  bounds), so the law survives re-renders mechanically.
  (2026-08-03, re-scoped from the mermaid width gate at the
  figures conversion) → [ATLAS's header law](ATLAS.md)
- ⏳ The baton case table has no case for a GROUND HANDOFF — the
  ritual releases the baton, but no row says what THE BATON
  section should then read, so this sitting's close had to write
  a line the table does not define. Mint the case where the
  others live. (2026-07-31, the handoff that hit it) →
  [handoff §4](skills/handoff.md#4--repaint-dashboard-the-board-spec--single-source)
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
  at least print the swallowed error. NOT REPRODUCED at flight 1's
  triage (2026-08-03) — both paths returned the same count, so the
  fault is intermittent or already gone; confirm before spending a
  bench on it. (2026-07-22, Claude Code) →
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

- 🟢 The ack must be a commit on origin, never a message — written
  into [§Canary](skills/parallel-lanes.md#canary-handshake-both-sides)
  in all three places a reader meets the handshake, with flight 1's
  false ack named as the case and its unobservable cause stated
  rather than guessed. Asked 2026-08-04, flight 1. →
  [#278](https://github.com/wsher0901/roam/pull/278)
- 🟢 The cloud seat's missing git-identity step — added to
  [machine-setup](skills/machine-setup.md) with a derivation recipe
  instead of a literal value, the founder's real address named as
  the WRONG one with GitHub's email-privacy reason, and the cadence
  answered: once per seat birth. Proved on a cold cloud seat before
  it merged. Asked 2026-08-03, flight 1. →
  [#279](https://github.com/wsher0901/roam/pull/279)
- 🟢 HOME's missing row for the close-lock hook — written, and
  verified against the hook's source rather than its own claim
  (silent on a live session; a stamp, not a refusal, on a closed
  one). The audit that rode along found four further gaps and a
  checkable boundary; both are open lines above. Asked 2026-08-03. →
  [#280](https://github.com/wsher0901/roam/pull/280)
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
