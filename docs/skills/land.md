---
type: skill-procedure
title: Land
status: living
---

# Land — the flight's ending ritual

COCKPIT ONLY. Land ends a FLIGHT; [handoff](handoff.md) leaves a
DESK — the ground's leaving ritual never runs in flight, and this
one never runs on the ground. It closes the session.

ONE skill, TWO modes, routed by the fleet — because a flight can
END IN only two STATES and they need opposite acts: the work is
finished (retire it) or the work is still flying and the founder
is walking back to a desk (pause it and hand it over). The mode is
derived, never guessed. How many things can START a landing is a
different question, and the trigger table below answers it.

## The trigger table — what starts a landing

Four ways a flight ends, and only two of them begin with the
founder speaking
([D-061](../record/DECISIONS.md#d-061--the-landing-doctrine-recut-to-three-scenarios)).
Read this table first; it routes to the mode, and the mode is
never chosen any other way.

| # | Trigger | Who fires it | Mode |
|---|---|---|---|
| 1 | AUTO-LAND — no working lanes AND no decisions awaiting the founder, both true in the SAME turn | the cockpit, unprompted → [§Scenario 1](#scenario-1--auto-land-the-cockpit-fires-it) | MODE R |
| 2 | DESK TAKEOVER — a pickup adopts this flight's decision queue and writes COCKPIT SUPERSEDED | the desk; this cockpit obeys the [wake-rule](#scenario-2--desk-takeover-the-desk-fires-it) | derived (§0) |
| 3 | THE FOUNDER'S FREEZE — "ground the fleet", "pause everything — I'm going local" | the founder, word-only → [§Scenario 3](#scenario-3--the-founders-freeze-word-only) | MODE P |
| 4 | MANUAL RETIRE — a bare "land" or "land it" on an empty fleet | the founder | MODE R |

Triggers 1 and 4 reach MODE R by construction — each fires only
when nothing is flying. Trigger 2 does NOT: a desk can take the
decision queue while lanes are still airborne, so a superseded
cockpit derives its mode at §0 like any other landing, and lanes
that are still flying get FENCED. That is the intended handover —
the desk adopted the DECISIONS, and it resumes the fenced lanes
through [pickup §6](pickup.md#6--fleet-resume-on-the-founders-answer)
like any grounded fleet. Trigger 3 is the only one that forces a
mode against the fleet: it is MODE P even when nothing is flying,
so the founder always lands on a board that says where the work
is.

Sources:
[COCKPIT-CHARTER — the master](../COCKPIT-CHARTER.md)
[D-054](../record/DECISIONS.md#d-054--the-landing-skill)
[D-061](../record/DECISIONS.md#d-061--the-landing-doctrine-recut-to-three-scenarios)

## Scenario 1 · AUTO-LAND (the cockpit fires it)

THE TEST, read in ONE turn: no working lanes, AND no decisions
awaiting the founder. The moment both are true in the same turn,
run the full ritual unprompted — retire the lanes' sessions,
push, deliver the landing report naming the re-open paths, then
retire. Derive both halves from origin at test time, never from
what the last turn remembered:

- **No working lanes** — §0's derivation, read through the
  liveness rule
  ([parallel-lanes §Liveness](parallel-lanes.md#liveness--live-vs-reclaimable)):
  no lane with a non-terminal Status and a heartbeat in the
  window, and no bench of your own still open.
- **No decisions awaiting the founder** — ALL THREE clear, or the
  test fails: no open `BLOCKED:` comment on any PR · no PR
  standing ready at THE GATE waiting for the founder's word ·
  nothing in the board's Needs-you that this flight put there.
  This half is the one that decides whether a premature fire
  happens, so it is enumerated rather than judged.

FOUR GUARDS, each of which has to hold:

1. **Never at birth.** A fresh cockpit waits for at least one
   founder command before the test can fire at all. A cockpit
   born into an already-quiet fleet would otherwise land before
   it has done anything.
2. **Never on a timer.** No idle countdown, no scheduled check. A
   clock cannot see whether a gate is waiting.
3. **Never silent.** The landing report always ships. A landing
   with no report is indistinguishable from a crash.
4. **Both-true in the SAME turn.** Not "lanes finished earlier
   and the last gate cleared now" reconstructed from memory —
   both conditions are re-derived and must hold together at the
   moment of the test.

THE ACCEPTED COST, stated in the report rather than hidden: if
the fire was premature, it costs ONE RE-LIFTOFF. So the report
names the re-open paths — which branches, which PRs, and that a
fresh liftoff resumes them — and never implies the flight could
not be restarted.

Then run [MODE R](#mode-r--retire-the-flights-natural-end).

## Scenario 2 · DESK TAKEOVER (the desk fires it)

The founder returns to a seat while this flight still holds
undecided gates. The DESK acts —
[pickup §6](pickup.md#6--fleet-resume-on-the-founders-answer)
adopts the decision queue, surfaces each gate with this cockpit's
advice, and writes COCKPIT SUPERSEDED to the board with the
takeover stamp.

THE TOMBSTONE WAKE-RULE — this cockpit's whole duty in this
scenario: ON ANY WAKE, READ THE BOARD FIRST. If it says
superseded, self-retire by the full landing ritual and write
nothing else. Not "push and stop": a session that vanishes
mid-flight leaves its lanes unfenced and its row stale, and the
ritual is barely more expensive than silence. The tombstone line
and refusal guard are how that retirement speaks — the charter's
rule 8 carries the exact tombstone line, and the full procedure
(refusal guard, successor duty) is
[HOME §The cockpit's API paths & recovery ladder](../HOME.md#the-cockpits-api-paths--recovery-ladder).

Then run the ritual from
[§0](#0--derive-the-fleet-route-the-mode) and let the fleet pick
the mode — MODE R if the flight is empty, MODE P if lanes are
still airborne, which fences them for the desk to resume.

**THE ONE CARVE-OUT, and it is not optional: A SUPERSEDED
COCKPIT WRITES NO BOARD.** Both modes normally end in a board
micro-PR — MODE R clears the In-flight row, MODE P ships the
fleet-at-ground table. Here the DESK already holds the baton and
has already stamped the takeover, so those writes would be a
second seat repainting main's bookkeeping, and MODE R's cleared
row would erase the desk's own stamp. So in this scenario alone:
run every LANE duty (fence what flies, push, verify retired
branches dead) and the report — SKIP the board step entirely.
The desk owns the board from its takeover write onward, and the
fences you push are what it reads. This is
[LAWS](../LAWS.md#parallel-lanes--cloud)' supersession clause
applied here, not an exception to it.

## Scenario 3 · THE FOUNDER'S FREEZE (word-only)

"Ground the fleet" · "pause everything — I'm going local" — and
nothing else fires this. It forces
[MODE P](#mode-p--pause-and-transfer-the-founder-is-going-local)
whatever the fleet reads: the fence, the board transfer, resume
at any desk. The mechanics are unchanged from
[D-054](../record/DECISIONS.md#d-054--the-landing-skill);
this scenario only names the trigger.

## 0 · Derive the fleet, route the mode

FIRST ACT, before any other: derive the fleet FROM ORIGIN, never
from session memory (the derivation law) — `git fetch --prune`,
then every open PR (drafts included), each one's head branch, each
lane memory's Status, and each branch's last-commit time read
through the liveness rule
([parallel-lanes §Liveness](parallel-lanes.md#liveness--live-vs-reclaimable)).

Route on what that returns:

- **Nothing flying** — no live lane, nothing mid-bench →
  **[MODE R · RETIRE](#mode-r--retire-the-flights-natural-end)**.
- **Work flying** — any live lane, or the cockpit's own bench
  still open →
  **[MODE P · PAUSE-AND-TRANSFER](#mode-p--pause-and-transfer-the-founder-is-going-local)**.

Trigger 3 — the founder's freeze — overrides this routing and
forces MODE P whatever the fleet reads. An empty fleet still gets
MODE P's board line and report, so the founder always lands on a
board that says where the work is. Triggers 1, 2 and 4 route
here normally: 1 and 4 reach MODE R by construction, and 2 lands
in whichever mode its fleet dictates.

Sources:
[derivation law — LAWS §Knowledge & tracking](../LAWS.md#knowledge--tracking)

## Teams — not this ritual's case (both modes)

Stated once here so neither mode repeats it: A COCKPIT DOES NOT
LEAD AN AGENT TEAM. The basis is POLICY, not a platform limit —
[D-055](../record/DECISIONS.md#d-055--agent-teams-the-boundary)
puts teams at a GROUND seat, for exploration and review, and
makes LANES the cloud's parallelism
([HOME §Agent teams](../HOME.md#agent-teams)). The platform would
technically let any session spawn teammates; it is the boundary
that says a cockpit does not — stated plainly so the rule does
not rest on a mechanism that could change. So neither MODE R nor
MODE P has a team to shut down, and land carries no team
procedure at all.

A ground seat leaving with a live team is
[handoff §1.2](handoff.md#12--shut-the-team-down-full-only)'s
duty — capture the findings, then shut down by name. That
procedure has ONE home and this is not it. A ground tower that is
SUPERSEDED while leading a team follows the same duty on the
generalized wake-rule
([D-062](../record/DECISIONS.md#d-062--the-wake-rule-generalized)):
capture first, then close, and write no board.

## MODE R · RETIRE (the flight's natural end)

The flight's work is done and merged. Three acts, then silence —
these are the duties the cockpit charter's rule 6 used to carry;
they live here now, in one home.

1. **Final board repaint** per
   [handoff §4](handoff.md#4--repaint-dashboard-the-board-spec--single-source)
   — RECENT rolled to the newest history entries, this cockpit's
   In-flight row CLEARED, and THE BATON repainted from THIS
   MODE'S CASE in
   [handoff §4's case table](handoff.md#4--repaint-dashboard-the-board-spec--single-source)
   — AUTO-LAND or MANUAL RETIRE ON AN EMPTY FLEET. WHICH CASE
   APPLIES IS DERIVED, NEVER CHOSEN: the fire that started this
   landing decides it.
   Shipped as a micro-PR exactly as
   [handoff §5](handoff.md#5--ship-the-note) ships its note:
   chore branch from freshly pulled main, board-only commit,
   immediate squash-merge.
2. **Every retired branch verified dead.** After any retirement,
   re-fetch with `--prune` and re-list: a session can resurrect
   its own deleted branch at the byte-identical SHA, and ending or
   archiving it in the UI does not reliably stop that. Re-delete
   on sight — a same-SHA resurrection carries no unique work by
   construction. A branch carrying UNIQUE commits is never
   deleted: surface it on the board's Needs-you instead.


3. **THE LANDING REPORT** — render EXACTLY this shape
   ([HOME §Response doctrine](../HOME.md#response-doctrine),
   rule 8). Its ONE JOB is: the flight is over and nothing is
   owed.

   ```text
   <glyph> LANDED — <via AUTO-LAND — fleet empty, nothing awaited
   you | via MANUAL-LAND>. Origin clean.

   Your act: nothing. <Or: the act · where · when.>

   This flight: <one line: what it accomplished>.
   To re-open: <the branch or PR, and that a fresh liftoff
   resumes it>.

   Safe to archive me.
   ```

   On an AUTO-LAND, the report also states the ACCEPTED COST in
   one clause — if the fire was premature it costs one
   re-liftoff — so the founder never has to guess whether the
   landing was right. Self-check: verdict first? the founder's
   word named with its surface and its when? off-origin called
   out or omitted? Push first, report second. The last line is
   exactly `Safe to archive me.`

Then stop. Write nothing further.

Sources:
[parallel-lanes §Cloud spawn](parallel-lanes.md#cloud-spawn--route-ladder)
(the resurrection rule)
[DASHBOARD](../DASHBOARD.md)

## MODE P · PAUSE-AND-TRANSFER (the founder is going local)

Work is still flying and the founder is coming back to a desk. The
job is not to stop the fleet dead — nothing can, see the honesty
clause — but to make every lane's work FINDABLE, COMPLETE TO ITS
LAST PUSH, and RESUMABLE from any seat. Run (a) through (f) in
order; the order is the point.

### (a) Fleet snapshot — derived live, before anything is touched

Report the fleet BEFORE fencing anything, so the founder sees the
flight as it actually was. It keeps the charter's rule-5 FLEET
TABLE columns — id · purpose · verdict glyph — and adds the four a
landing needs:

| id | purpose | 🟢/🟡/🔴 | memory Status | PR head | CI | last push |
|---|---|---|---|---|---|---|

The glyph LEADS the row's verdict per the response doctrine, and
every 🔴 names its fix. `purpose` is one line. `memory Status` is
the Status-vocabulary word verbatim
([TEMPLATE](../memory/TEMPLATE.md)). `CI` is the head commit's
Actions state, read live. `last push` is an age, not a clock time.

Nothing is touched until this table exists.

### (b) FENCE each live lane

THE FENCE IS A COMMIT. On the lane's branch, rewrite its memory to
carry the FULL pause context in
[D-050](../record/DECISIONS.md#d-050--session-lifecycle-closed-is-not-dead)'s
shape — a resuming seat must be able to continue from that block
alone:

- what it did so far
- how much of the spec is done
- what is left
- the EXACT next step
- why it paused — "landed for local pickup" with the date

Status line — the terminal `held` state, whose
[TEMPLATE](../memory/TEMPLATE.md) row names land as its second
writer beside liftoff §5, one shape carrying two reasons:

```text
held — landed for local pickup <date>
```

Then PUSH. The push is the fence.

**Why a commit stops a running lane.** The fence lands on the
branch, so the lane's next push is non-fast-forward and is
REJECTED. A rejected push IS a wake
([parallel-lanes §Wake-lock](parallel-lanes.md#wake-lock--parking)):
the lane must pull, re-read its own memory Status FIRST, and obey
it before any retry. It then reads `held` — terminal, and a Status
it does not own — so it pushes nothing further and terminates. The
lane lands NOTHING after the fence. The resume point is therefore
the branch tip BY CONSTRUCTION, and the only thing that can be
lost is the lane's unpushed sliver — bounded by the lane law's
push-every-commit rule (rule 3).

**HONESTY CLAUSE.** The fence is WAKE-LOCK-MEDIATED, not an
interrupt. Lanes have no interrupt channel; the wake-lock is the
channel, and it acts at the lane's next push. A lane mid-turn may
finish its current step before it wakes. So the report states the
LAST-OBSERVED state per lane and never claims a guaranteed freeze
— if a lane's tip moves once more after the fence, that is the
mechanism working as designed, not a failure.

**Relationship to the park protocol.** The park protocol's
one-stamped-line limit governs [handoff](handoff.md)'s ground-side
park of a LOCAL lane
([handoff §1.5](handoff.md#15--park-the-local-lanes-full-only)).
The fence is its flight-side counterpart and deliberately writes
more: the transfer crosses a seat boundary, so the block a
resuming seat reads must be complete, not a stamp.

### (c) The cockpit's own bench

Any bench the cockpit itself has open gets the SAME full pause
block in its memory, with the same `held` Status, and is pushed.
The cockpit's own work is not a special case — it transfers by the
identical mechanism.

### (d) THE SINGLE MATERIAL — the board

One artifact is passed down, and it is the board's flight context
under IN FLIGHT
([handoff §4](handoff.md#4--repaint-dashboard-the-board-spec--single-source)
stays the board's single definition; this is a rendering of the
flight-context prose it already licenses, not a new section). The
FLEET-AT-GROUND table — one row per lane:

| id | purpose | progress | exact next step | state |
|---|---|---|---|---|

`progress` and `exact next step` are lifted FROM EACH LANE'S
FENCE, so the board and the memories cannot disagree. `state`
reads `held`. THE BATON section for the flight itself takes the
MODE P case from
[handoff §4's case table](handoff.md#4--repaint-dashboard-the-board-spec--single-source)
— ONE line, ending `grounded for local pickup <date>`, which is
the marker [pickup §5](pickup.md#5--render-the-sit-down-summary-exactly-this-shape)
reads alongside this table to offer the fleet resume.

Per-lane depth stays in each memory; the board carries the summary
and the pointers. NO new file — one home per class.

Ship it as the micro-PR per
[handoff §5](handoff.md#5--ship-the-note).

### (e) The landing report

Render EXACTLY this shape
([HOME §Response doctrine](../HOME.md#response-doctrine),
rule 8). Its ONE JOB is: the fleet is frozen and findable, and
resuming it is one word at any desk.

```text
<glyph> GROUNDED — N lanes fenced, all pushed.

Your act: nothing now. At any desk, pickup asks and "continue"
redeploys the fleet.

OFF-ORIGIN — the archive list, these sessions are done:
<one line per fenced lane's session url, plus this cockpit's own>

This flight: <one line>. Each lane's exact next step is in its
fence and on the board's fleet-at-ground table.

Grounded. Safe to archive me — pickup at any seat resumes the fleet.
```

THE BOARD'S BATON LINE is the one §(d) already painted — the
MODE P case in
[handoff §4's case table](handoff.md#4--repaint-dashboard-the-board-spec--single-source).
This step paints nothing new; there is exactly one line.

The HONESTY CLAUSE governs the numbers: the report states the
LAST-OBSERVED state per lane and never claims a guaranteed
freeze. Self-check: verdict first? the founder's word named with
its surface and its when? off-origin called out or omitted? Push
first, report second. The last line is exact.

### (f) Session disposal

SESSIONS ARE CATTLE; BRANCHES ARE THE WORK. The ARCHIVE LIST —
every fenced lane's session url plus the cockpit's own — rides in
the landing report's OFF-ORIGIN slot ([§(e)](#e-the-landing-report):
those urls exist nowhere on origin), and it is rendered AFTER the
fences are pushed, never before (the resurrection rule: a session that is
archived while it still has unpushed intent can wake and write).

Old sessions are NEVER revived. Resume births FRESH workers on the
fenced branches — a fresh worker reading a complete fence is
strictly more reliable than a revived session carrying stale
in-context state. Continuity is git's job, not a session's.

`claude/*` workspace residue needs no duty here: pickup's existing
sweep collects it
([pickup §3](pickup.md#3--gather-git-outranks-the-board)).

Sources:
[pickup §6 — the resume counterpart](pickup.md#6--fleet-resume-on-the-founders-answer)
[lane law — LAWS §Parallel lanes & cloud](../LAWS.md#parallel-lanes--cloud)
[TEMPLATE — the Status vocabulary](../memory/TEMPLATE.md)
