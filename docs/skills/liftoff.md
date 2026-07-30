---
type: skill-procedure
title: Liftoff
status: living
---
# Liftoff — hand the workshop to the cloud

Trigger: any take-it-to-the-cloud phrasing — "take it to the
cloud", "liftoff", "keep working while I'm out". From that phrase
on, ZERO founder approval is needed mid-ritual: the founder is
leaving. Control tower only. Closes the session — and hands the
baton to the cockpit it fires (§6).

## 1 · FULL handoff first
Run handoff FULL — origin must be whole (work pushed, any live
agent team captured and shut down by its
[step 1.2](handoff.md#12--shut-the-team-down-full-only), every local
lane parked by its step 1.5, memories rewritten, board repainted,
micro-PR merged) before anything spawns. Skip handoff §6 entirely —
no close report, no close-lock write; liftoff §7 is the only close.
Because [§6](handoff.md#6--close-full-only) is skipped, ITS team
line lands HERE instead: §7's report carries the shutdown result,
refusals and hangs included.

Sources:
[handoff](handoff.md)

## 2 · Triage every open item
The current task, every lane just parked, every queued [P] task.
First the HARD DISQUALIFIERS — any one keeps it on the ground:

- secrets/.env exposure
- cloud-incompatible network or tooling needs
- file-collision with a flying sibling

Then SORT what survives: fully-specified first, needs-input after
(once flying they idle-wait for the founder's reply per the idle-wait
law). The daily routine budget truncates from the bottom (Max plan:
15 routine runs/day (confirmed; flat across Max tiers);
GitHub-triggered spawns count against it, and so does every API
fire — `fire:cockpit`, the ONLY one since the clerk's retirement
2026-07-22 (one per outing, the accepted trade —
[D-046](../record/DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock),
extending the trade recorded at A4 —
[clerk-autospawn](../record/specs/clerk-autospawn.md), now a retired
record) — but API fires
are INVISIBLE to `count:runs`, a label-event proxy): derive the
consumed count — `npm run count:runs` PLUS the fires performed
this sitting — and truncate the sorted tail at the remaining
number; if the script fails, say so and ask the founder for the
remaining number — never guess (derivation law). A truncated
item → held with its reason.
A parked lane that passes: respawn on its SAME branch in cloud —
adopt, no second birth (parallel-lanes §Respawn).

Sources:
[parallel-lanes §Respawn](parallel-lanes.md#respawn-on-an-existing-bench-liftoff-adopt)
[idle-wait law — LAWS §Parallel lanes & cloud](../LAWS.md#parallel-lanes--cloud)

## 3 · Bench-first birth
Every triaged item not yet birthed gets the full birth — held items
need a memory to hold their status too: branch · spec if discussed
· memory stub · draft PR · verified on origin.

Sources:
[parallel-lanes](parallel-lanes.md)

## 4 · Spawn
Dispatch each eligible lane — fresh births and respawns alike —
cloud-side via the route ladder; route 1 (label-spawn) is one command
per lane: `gh pr edit <N> --add-label lane:cloud`.
The away surface is the COCKPIT, born at §6 by the rung ladder
([D-047](../record/DECISIONS.md#d-047--2026-07--cloud-born-cockpit--the-cockpits-birth-vehicle-becomes-claude---cloud-list-native-on-every-device-the-automated-hidden-console-birth-is-liftoffs-primary-rung-the-routine-fire-demotes-to-fallback--summon-button-engine-amends-d-046-clause-3-upholds-the-lane-law))
— not spawned here. The ladder BOTTOMS OUT at §6's rung 4, the
phone bootstrap: the Claude app → a new session on wsher0901/roam
→ the two-line bootstrap paste, recorded verbatim in
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
([D-048](../record/DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047)).
There is no rung beneath it. The clerk that once stood there was
RETIRED 2026-07-22 and its routine deleted
([D-046](../record/DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
decided it;
[D-048](../record/DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047)
superseded its last function) — a rung that cannot fire is worse
than no rung, because it is reached only when everything above it
has already failed. What the clerk PROVED is kept as record, not
as a rung:
[clerk-autospawn](../record/specs/clerk-autospawn.md) ·
[shakedown-audit](../record/specs/shakedown-audit.md) ·
[cloud-clerk](../record/specs/cloud-clerk.md).

Sources:
[route ladder](parallel-lanes.md#cloud-spawn--route-ladder)

## 5 · Handshake-verify each
- Canary arrives → write the ack token into its memory, exactly as
  [§Canary](parallel-lanes.md#canary-handshake-both-sides) fixes it
  — the Status line begins "airborne · <url> · <date>" (for a
  respawn, this overwrites the parked Status). Character-for-character:
  the lane's match is anchored and cannot see a variant.
- Fail or timeout → write "cloud spawn failed <date> — <reason> →
  parked" into its memory + the board's In-flight rows (+ Needs-you
  mirror) per [handoff §4](handoff.md).
- Ineligible → write "held: needs local — <reason>" into its memory
  + those same board rows.

Nothing is ever silently parked without its reason on record.

Sources:
[dispatch law — LAWS §Workflow](../LAWS.md#workflow-non-negotiable)

## 6 · Ledger handoff & fire the cockpit
Repaint DASHBOARD per [handoff §4](handoff.md) — IN FLIGHT IS THE
FLIGHT PLAN: every airborne lane with its url, every abort and
hold with its reason in Move / State. The
cockpit's own row is written at this weld, BEFORE the fire, as
"cockpit · fired <time> · self-seat pending" — the cockpit
rewrites it with its real URL at its self-seat repaint
([D-051](../record/DECISIONS.md#d-051--2026-07--self-seat-birth--liftoff-fires---cloud-blind-and-the-cockpit-seats-itself-by-its-env-derived-self-url-the-console-attach-launcher-is-retired-amends-d-047s-rung-1-mechanics-as-corrected-by-193-upholds-d-049-and-board-governs)).
Ship the micro-PR (board + any IDEAS harvest — entries land per
the entry contract at [IDEAS](../IDEAS.md)' head, and a harvest
COMPRESSES closed entries into its CLOSED section rather than
deleting them).

THE BOARD'S BATON LINE, painted by liftoff — wording is law:

```text
COCKPIT — live since <t> (liftoff) · <url>
```

with ` · awaiting your word on N items` appended when that is
true.

Then THE COCKPIT BIRTH
([D-047](../record/DECISIONS.md#d-047--2026-07--cloud-born-cockpit--the-cockpits-birth-vehicle-becomes-claude---cloud-list-native-on-every-device-the-automated-hidden-console-birth-is-liftoffs-primary-rung-the-routine-fire-demotes-to-fallback--summon-button-engine-amends-d-046-clause-3-upholds-the-lane-law),
amending
[D-046](../record/DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
clause 3): compose the flight plan FROM THE BOARD just painted —
three parts, plain sentences: in flight (each airborne lane +
url) · owed (every parked/held item + reason) · needs the
founder's word (every gate waiting).

THE BOARD IS THE FLIGHT PLAN — the birth prompt is a pointer to
it, never its carrier. The plan is WELDED TO THE BOARD FIRST (the
micro-PR above, merged), and only then does anything spawn; the
birth prompt carries the charter, the pointer, and a ONE-LINE
mandate — not the full plan. A birth prompt is a delivery channel
and channels truncate: this flight's mandate arrived cut
mid-sentence on 2026-07-22 and the cockpit recovered only because
the plan was already welded to the board. Where a birth prompt is
truncated, garbled, or contradicts the board, the BOARD GOVERNS —
the same "git outranks the note" reflex, applied to the prompt.

OPEN the birth prompt with the standing first line, verbatim on
every cockpit birth:

> Before any act: verify your clone's HEAD equals origin/main's
> tip and your workspace contains nothing origin lacks;
> mismatch = report verbatim and STOP.

The full birth prompt = the master in
[COCKPIT-CHARTER.md](../COCKPIT-CHARTER.md) adopted VERBATIM,
then the clone-provenance line, the board pointer, and the
one-line mandate.

TITLE LINE — none. The verify-before-rely answer, recorded here as
the instruction it replaces required: a prompt-supplied first line
`[COCKPIT] roam — <date>` was DISPROVEN at the 2026-07-23 birth —
the platform ignored it and auto-titled the session from charter
content, so the line does nothing and is dropped (the observation:
[IDEAS](../IDEAS.md), the 2026-07-23 liftoff harvest; this edit is
the reviewed PR that harvest called for). Doctrine, unchanged
either way: the general session list is what the founder touches;
routine run panels are the machinery's paper trail (archiving a
session does not clear a run log, by design).

Birth by the rung
ladder, evidence order (gate 0b, [D-047](../record/DECISIONS.md#d-047--2026-07--cloud-born-cockpit--the-cockpits-birth-vehicle-becomes-claude---cloud-list-native-on-every-device-the-automated-hidden-console-birth-is-liftoffs-primary-rung-the-routine-fire-demotes-to-fallback--summon-button-engine-amends-d-046-clause-3-upholds-the-lane-law)):

1. The automated hidden-window `--cloud` birth, fired BLIND
   (PRIMARY —
   [D-051](../record/DECISIONS.md#d-051--2026-07--self-seat-birth--liftoff-fires---cloud-blind-and-the-cockpit-seats-itself-by-its-env-derived-self-url-the-console-attach-launcher-is-retired-amends-d-047s-rung-1-mechanics-as-corrected-by-193-upholds-d-049-and-board-governs)).
   `--cloud` demands a real TTY on BOTH ends and refuses every
   piped route verbatim (the harness shell, the `!` bang-prefix,
   redirected `Start-Process`); a hidden window already supplies
   that TTY, so no pty wrapper is involved — and none may be: any
   redirection at all is what breaks this rung. The shape:
   - Launch with NO redirection anywhere:
     `Start-Process powershell -WindowStyle Hidden -File <launcher>`,
     the launcher calling `claude --cloud "<birth prompt>"`.
   - Hand the birth prompt as a FILE-READ argument — the launcher
     reads it from a file and passes it as one argument. Never a
     pipe, never here-string plumbing.
   - Capture NOTHING — exit status only. The fire is blind by
     design: the output-recovery machinery this rung once carried
     existed solely to hand the tower a session URL, and the
     cockpit now SEATS ITSELF on the board via its env-derived
     self-URL
     ([D-049](../record/DECISIONS.md#d-049--2026-07--gh-second-path--gh-api-rest-through-the-github-proxy-is-the-cockpits-second-api-path-a-connector-flap-stops-costing-command-r2-gains-the-automatic-gh-rung-self-id-by-session-env-amends-d-048-corrects-the-193-api-map-upholds-d-047-and-verify-before-rely);
     the charter's self-seat duty). Liftoff no longer reports a
     session URL — the cockpit's greeting push and its self-seat
     repaint carry it.
   Sessions born this way are list-native — they join the phone's
   Code-tab GENERAL session list.
   FAILURE SHAPE: a birth that dies before Claude starts leaves
   no URL anywhere and sends no greeting — the MISSING push IS
   the signal. Founder's checks, in order: `/tasks` at any
   terminal · the claude.ai/code list (list-native even when the
   clone failed) · retry the fire. The board's "self-seat
   pending" row goes stale honestly rather than carrying a
   scraped URL that may be wrong.
2. Compose-and-hand: the ritual composes the full command; the
   founder pastes it into a plain terminal — nothing piped.
3. `npm run fire:cockpit -- "<birth prompt>"` (the routine fire
   — list-invisible, so never the plan; one cap-run, already
   counted in §2's budget; the summon engine, fired locally).
4. The manual charter paste, retained verbatim: claude.ai/code
   (browser or the phone's Claude app) → new session on
   wsher0901/roam → paste the birth prompt.

Record the rung that fired + its exit status for the §7 close
line. There is no returned URL to record — the cockpit seats
itself (the charter's self-seat duty; its OWN url derived from
the session env per
[D-049](../record/DECISIONS.md#d-049--2026-07--gh-second-path--gh-api-rest-through-the-github-proxy-is-the-cockpits-second-api-path-a-connector-flap-stops-costing-command-r2-gains-the-automatic-gh-rung-self-id-by-session-env-amends-d-048-corrects-the-193-api-map-upholds-d-047-and-verify-before-rely),
`https://claude.ai/code/${CLAUDE_CODE_REMOTE_SESSION_ID/#cse_/session_}`).
A failed rung falls to the next with its
failure recorded in the close line — nothing silently parked.

This ladder BIRTHS a cockpit; a cockpit that loses its GitHub
connector IN FLIGHT climbs a different one — prevent · detect ·
repair · degrade · self-rescue, ending in a push to `ops/summon`
that fires a replacement
([D-048](../record/DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047);
procedure in
[HOME §The cockpit's API paths & recovery ladder](../HOME.md#the-cockpits-api-paths--recovery-ladder)).

Sources:
[DASHBOARD](../DASHBOARD.md)
[COCKPIT-CHARTER — the master](../COCKPIT-CHARTER.md)
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
(the routine's wiring and the fire recipe)

## 7 · Close
THE LIFTOFF CLOSE — render EXACTLY this shape
([HOME §Response doctrine](../HOME.md#response-doctrine),
rule 8). Its ONE JOB is: the flight is airborne, and where to
reach it.

```text
<glyph> AIRBORNE — cockpit fired (<rung> · exit <code>).
N lanes airborne, M parked · self-seat pending.

Your act: <greet the cockpit at <where> when its greeting push
lands | nothing — walk away>.

[OFF-ORIGIN — the birth FAILED: <what was seen, exit code, and
which rung> | omit]

This liftoff: <one line: what it dispatched><, team shut down
(N teammates)>.
Safe to walk away. (Fleet: the board.)

Waiting: <one line per lane — 🟢 all good · ⏸ its exact resume
word and where it goes>.
```

The OFF-ORIGIN block appears ONLY on a birth failure — a blind
fire captures nothing, so the exit code and what was observed
exist only in this session and cannot be derived. When
[handoff §1.2](handoff.md#12--shut-the-team-down-full-only) shut a
team down, this report carries
[handoff §6](handoff.md#6--close-full-only)'s team line verbatim —
that section is its single home, and this is the ONLY close on the
liftoff road, so a team result dropped here is lost. Self-check
before sending: verdict first? the founder's word named with its
surface and its when? off-origin called out or omitted? Push
first, report second — nothing here that is not on origin, except
the founder's acts and off-origin content.

WHAT THE FIRED COCKPIT WILL DO, stated in the close so the
founder is never surprised by it
([D-061](../record/DECISIONS.md#d-061--2026-07--the-landing-doctrine-recut-to-three-scenarios--the-cockpits-standing-job-advise-on-fleet-status-and-on-each-gate-reaching-decision-execute-the-founders-rulings-from-the-phone-auto-land-when-the-fleet-empties-and-nothing-awaits-the-founder-desk-takeover-when-pickup-finds-a-live-cockpit-holding-decisions-and-the-founders-freeze-unchanged-the-tombstone-wake-rule-makes-a-superseded-cockpit-retire-by-the-full-ritual-amends-d-054s-two-mode-routing-upholds-no-solo-approval-and-the-derivation-law)):
its STANDING JOB is to advise on fleet status and on each gate as
it reaches decision, and to execute the founder's rulings from
the phone — never merging on its own advice. And it may END THE
FLIGHT ITSELF: the same turn no lanes are working and nothing
awaits the founder, it runs the full landing ritual unprompted
and reports, one re-liftoff being the stated cost if that fire
was early ([land](land.md#the-trigger-table--what-starts-a-landing)).
So a flight going quiet is not a flight to check on — the landing
report arrives on its own.

Liftoff no longer reports a cockpit URL
([D-051](../record/DECISIONS.md#d-051--2026-07--self-seat-birth--liftoff-fires---cloud-blind-and-the-cockpit-seats-itself-by-its-env-derived-self-url-the-console-attach-launcher-is-retired-amends-d-047s-rung-1-mechanics-as-corrected-by-193-upholds-d-049-and-board-governs))
— the cockpit's greeting push and its self-seat repaint carry
it. The founder's commands for reaching the flight afterwards —
`/tasks`, teleport, and kin — live in
[HOME §Command card](../HOME.md#command-card); the close report
points there rather than re-listing. Then, as the ritual's LAST act, write
`.claude/session-closed` with content "Closed at liftoff · ledger
#<N> · <date> · <seat>" — the close-lock. CLOSED ≠ DEAD: a closed
session remains READ-ONLY CONVERSATIONAL — addressed after its
close it answers by fresh derivation from origin (state,
explanations, pointers), always names the current baton-holder,
and refuses every write, command act, and ritual. The close-lock
record is unchanged; only the wall is soft. Strictness kept where
it must be: a SUPERSEDED cockpit ends tombstone-only (the
charter's rule 8 carries the line; the supersession procedure is
[HOME's ladder](../HOME.md#the-cockpits-api-paths--recovery-ladder)
— a replaced cockpit is a hazard, not a reference desk),
though the tombstone is now its LAST word after the landing
ritual rather than instead of one, and the supersession law
carries that one carve-out
([D-061](../record/DECISIONS.md#d-061--2026-07--the-landing-doctrine-recut-to-three-scenarios--the-cockpits-standing-job-advise-on-fleet-status-and-on-each-gate-reaching-decision-execute-the-founders-rulings-from-the-phone-auto-land-when-the-fleet-empties-and-nothing-awaits-the-founder-desk-takeover-when-pickup-finds-a-live-cockpit-holding-decisions-and-the-founders-freeze-unchanged-the-tombstone-wake-rule-makes-a-superseded-cockpit-retire-by-the-full-ritual-amends-d-054s-two-mode-routing-upholds-no-solo-approval-and-the-derivation-law)). End the session as
a working seat. The
baton is now the cockpit's for the flight
([LAWS §Parallel lanes & cloud](../LAWS.md#parallel-lanes--cloud)).
