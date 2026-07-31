---
type: skill-procedure
title: Handoff
status: living
---
# Handoff — the leaving ritual

Control tower only — lanes never run this. FULL means operations
halt on
this machine. Two modes.
FULL = leaving phrase, explicit call, or liftoff's step 1.
QUIET = ship's tail. QUIET skips steps 1.2–3 and never closes the
session.

The interrupt doctrine: Esc interrupts any running turn safely —
state lives in pushed commits, and §1's secure-the-work catches the
working tree. Interrupt-then-ritual is lawful ANYWHERE except THE
WELD's atomic commit
([ship §7](ship.md#7--on-approval--the-atomic-weld) — seconds long),
the one no-interrupt window. Never wait for a turn to finish before
leaving.

## 1 · Secure the work
On the current task's branch: commit anything uncommitted, push.
Nothing may exist only on this machine past this point.

## 1.2 · Shut the team down (FULL only)
BEFORE anything is parked. If this session leads a live agent
team, that team does not survive the sitting: `/resume` and
`/rewind` do not restore in-process teammates, so a team left
running is not paused work — it is abandoned work, with a lead
that will go on messaging teammates who no longer exist
([HOME §Agent teams](../HOME.md#agent-teams) risk (a)).

THE ORDER IS THE POINT, because the processes are not what is at
risk. Teammates die cheaply and respawn cheaply; what dies
irrecoverably is what they FOUND, since a team's output lives in
transcripts that vanish with the session.

1. CAPTURE FIRST, before a single shutdown request. Write the
   team's findings INTO THE RECORD: THIS SESSION'S OWN open
   bench — its `memory/<id>.md` — else a dated
   [IDEAS](../IDEAS.md) line PER THE ENTRY CONTRACT at that
   file's head — which rides §5's micro-PR, NOT
   this branch: §1.2 runs on the task branch, so an IDEAS line
   written here would be swept into a task commit or left dirty.
   NEVER a lane's diary: §1.5's
   one-line park stamp is the only thing the control tower may
   ever write there (the park protocol), and a findings block is
   not that line. Per teammate — what it was working
   on, what it found, what it left unfinished. A finding that
   reaches no file did not happen.
2. THEN SHUT DOWN, BY NAME. Ask each teammate by name to shut
   down. A teammate may approve and exit gracefully, or reject
   with an explanation.
3. REPORT WHAT EACH RETURNED. Shutdown is NOT INSTANT — a
   teammate finishes its current request or tool call first, so
   this step waits rather than assuming. A teammate that REFUSES
   or HANGS is named plainly in the CLOSE REPORT, never smoothed
   into a clean exit: an unreported hang is precisely the failure
   this step exists to prevent. Which close report depends on the
   road out — [§6](#6--close-full-only) on an ordinary handoff,
   [liftoff §7](liftoff.md#7--close) when the sitting ends in
   liftoff (which skips §6 entirely). Both carry it; neither may
   drop it.

A live team is never PARKED. Parking is a lane act — a lane
survives on its branch, which is why a stamped Status can hold
it. A team has no branch and no Status; a parked team does not
exist.

QUIET never shuts a team down — mid-sitting teams keep working.

Sources:
[HOME §Agent teams](../HOME.md#agent-teams)
[IDEAS](../IDEAS.md)

## 1.5 · Park the local lanes (FULL only)
Every live local lane gets parked — no question asked, none left
running:
1. Find the benches: `git worktree list` plus every memory whose
   Status says flying on a local vehicle.
2. Rescue-save, only if needed: if the lane's tree holds
   uncommitted work or unpushed commits — commit
   "wip: parked at handoff (rescue-save)" and push. A clean,
   pushed bench skips straight to the stamp.
3. Stamp its diary, on its branch: append
   "Status: parked — <date> · at handoff · <seat>", push — write
   "rescue-saved at handoff" in place of "at handoff" ONLY when step
   1.5.2 actually ran (the diary never claims a rescue that didn't
   happen). This is the ONE control-tower-written line a lane's
   memory may
   ever receive (the park protocol).
4. Count the parked for the close line.
5. Watch-duty inheritance: watches die with sessions — the record
   must not. Any active watch (a canary watch, an Actions-green
   watch, a background monitor) is NAMED at park —
   "watching #N for X" — written into the parked lane's memory (a
   lane-owned watch) or the board's flight-context line under
   IN FLIGHT (a control-tower watch);
   [pickup §3](pickup.md#3--gather-git-outranks-the-board) re-arms
   every named watch it finds.
QUIET never parks — mid-sitting lanes keep flying.
Cloud lanes are machine-independent — handoff never parks or touches
them; they keep flying and appear on the board
([D-032](../record/DECISIONS.md#d-032--fleet-continuity)
parks LOCAL lanes only).

Sources:
[park protocol — LAWS §Parallel lanes & cloud](../LAWS.md#parallel-lanes--cloud)

## 2 · The inline Web/Design paste (FULL only)
The message that triggered FULL handoff is the answer — never ask a
question, take zero founder input after invocation. Any text
preceding the trigger (a leaving phrase or `/handoff`) is the
founder's Web/Design paste, taken verbatim (chat titles · one line ·
next step, as written). If the message contains nothing but the
trigger, record "none".

## 3 · Rewrite the memories (FULL only)
For each active task NOT owned by a lane (a lane just parked in
step 1.5 keeps its diary exactly as stamped; live lanes keep their
own via the diary rule): check out its branch, rewrite
memory/<id>.md cognitively in the locked format
([TEMPLATE](../memory/TEMPLATE.md)). Fold in any step-2 paste lines
that concern this task; the paste as a whole lands on the board (§4).
Sentences, written for a reader returning cold.
PARKING INTERRUPTED WORK: when the handoff cuts a task mid-flight —
or the task already sits interrupted by Esc or a founder redirect —
the rewrite takes the `interrupted` state and fills the ⏸ capture
block ([TEMPLATE](../memory/TEMPLATE.md)): original mandate · the
plan · done so far · exact next step · why paused · and, ONLY when
a team was live at the pause, team findings — folded in from
§1.2's capture, which ran minutes earlier. The §3 rewrite is
cognitive but never lossy: whatever §1.2 wrote into this memory
survives it. A lane's diary
stays the lane's — §1.5's one-line park stamp is the park
protocol's limit.
Commit, push, return to main. Harvest any "Ideas surfaced" lines
from lane memories → IDEAS, each landing PER THE ENTRY CONTRACT at
[IDEAS](../IDEAS.md)' head: one idea per line, glyph first, plain
sentence, links short-text at the tail, a multi-part thought split
so each part can close on its own.
HARVESTING ALSO GROOMS, and it COMPRESSES — IT NEVER DELETES. Any
entry that closed or was superseded since the last sitting is
rewritten as ONE line with its closing vehicle linked and MOVED to
the CLOSED section, which is the outcome ledger: a closed idea
keeps its answer, never its narrative. Deleting one would strand
the question "what did we decide about this?" with no home.

Sources:
[IDEAS](../IDEAS.md)

## 4 · Repaint DASHBOARD (the board spec — single source)
Regenerate wholesale from sources — ROADMAP checkboxes, every
active branch's memory + PR state, history/** frontmatter, the
founder's step-2 paste. This section IS the board's definition;
pickup, liftoff, land and ship's tail render by pointing here.

THE BOARD IS THE STANDING REPORT, so it obeys the report skeleton
([HOME §Response doctrine](../HOME.md#response-doctrine), rule 8;
[D-067](../record/DECISIONS.md#d-067--the-report-skeleton-and-the-board-diet)):
STATE AND ACTS ONLY. No sitting narrative, no essay-length rows,
no review receipts — those live in the record, and the board
points. Counts and positions are computed at render time, never
carried.

**The painted line + glance**, stamp values read from the shell
clock, never typed:

```text
Painted <date> · <time> by <ritual> · from <seat>
<flight/seat one-liner> · needs-you <N> · git outranks this board
```

Sections, in this order:

- **NEEDS YOU** — the action queue on an URGENCY LADDER, numbered:
  🔴 blocking now · 🟡 needed, carrying its timing word · ⚪
  whenever. Each item is ONE act — what · where it happens · when
  — ending "(since <MM-DD>)", with an indented "→" line carrying
  the links. Invariants: any 🔴 anywhere on the board also appears
  here; whenever a seat or lane owes the founder a move, one line
  mirrors here; a parked lane whose `BLOCKED:` question is still
  unanswered gets its own line. An item completed OUTSIDE the repo
  (UI setup, a box paste) cannot be derived — it clears on the
  founder's word at any ritual, and the repaint drops it then.
- **THE BATON** — who holds it, as STATE never doctrine, in the
  one cause vocabulary: AUTO-LAND · MANUAL-LAND · DESK TAKEOVER
  (BY THIS PICKUP). THIS TABLE IS THE SINGLE HOME OF EVERY
  RENDERING — the wording is law, each writer paints its own case
  and CITES this row rather than restating it
  ([D-070](../record/DECISIONS.md#d-070--baton-renderings-single-homed)).

  | Case | Exact wording | Writer |
  |---|---|---|
  | Liftoff fires the cockpit | `COCKPIT — fired <t> (liftoff) · self-seat pending` | [liftoff §6](liftoff.md#6--ledger-handoff--fire-the-cockpit) |
  | The cockpit seats itself | `COCKPIT — live since <t> (liftoff) · <url>`, plus ` · awaiting your word on N items` when true | the cockpit's self-seat repaint ([COCKPIT-CHARTER](../COCKPIT-CHARTER.md) rule 1) |
  | AUTO-LAND | `No live seat — awaiting next pickup`, plus `Last flight: LANDED <t> via AUTO-LAND — fleet empty, nothing owed you · clean` | [land](land.md) MODE R |
  | Manual retire, empty fleet | `No live seat — LANDED <t> via MANUAL-LAND · awaiting next pickup` | [land](land.md) MODE R |
  | MODE P, fleet grounded | `No live seat — LANDED <t> via MANUAL-LAND · N lanes frozen → grounded for local pickup <date>` | [land](land.md) MODE P |
  | Pickup's plain claim | `CONTROL TOWER — <seat>, since <t> (pickup)`, plus a last-flight line preserving its CAUSE — or, when nothing has flown, `Last flight: none — the floor has been ground-side this sitting` | [pickup §3](pickup.md#3--gather-git-outranks-the-board) |
  | Desk takeover, write 1 (at adopt) | `COCKPIT SUPERSEDED — desk takeover <date · time · seat> · <its session url>` | [pickup §6](pickup.md#6--fleet-resume-on-the-founders-answer) |
  | Desk takeover, write 2 (final repaint) | `CONTROL TOWER — <seat>, since <t> (pickup — DESK TAKEOVER)`, plus `Last flight: LANDED <t> BY THIS PICKUP — was awaiting your word on N items (now in Needs you) · N lanes fenced → fleet-resume` (the awaiting clause only when true) | [pickup](pickup.md) §4's repaint |

  THE LAST-FLIGHT LINE IS ALWAYS ITS OWN LINE. AUTO-LAND writes
  one directly; the other landing cases carry their cause INLINE
  in the seat line, and pickup's plain claim restates that cause
  as `Last flight: LANDED <t> via <CAUSE>` — the cause word
  survives the move, the phrasing around it need not.

  TWO CASES DESERVE THEIR REASON. THE FIRE-TIME LINE CARRIES NO
  URL because the fire is BLIND
  ([D-051](../record/DECISIONS.md#d-051--self-seat-birth)):
  liftoff cannot know the session's address, and the cockpit's own
  self-seat repaint rewrites the row to the live form. The phrase
  also matters beyond this board — the charter's rule 1 sends an
  arriving cockpit to THE BATON to learn whether a live seat
  already exists, and `self-seat pending` is what tells it to
  seat itself. THE CHARTER CANNOT CITE THIS TABLE BACK — it is a
  fenced master, and a fence is not edited by a bench
  ([D-065](../record/DECISIONS.md#d-065--the-box-master-diet)); its
  rule 1 tells the cockpit to READ this section, which is what
  keeps the two in step, and any future change to the self-seat
  wording is a charter version bump, not a table edit alone.
  THE DESK TAKEOVER'S TWO WRITES ARE ORDERED: write 1 lands the
  moment the desk adopts the decision queue, so the old cockpit
  can recognise its own supersession by reading the board; write
  2 REPLACES it at the sitting's repaint, once the takeover is
  complete. The wake-rule keys on the seat-stamp not being the
  reader's own, so either write satisfies it.
- **IN FLIGHT** — one row per live seat or lane: Who (the
  commander's bench · `<id>`, or `lane · <id>`) · For · State
  🟢/🟡/🔴 · Move. Cloud and local alike; a failed or held row
  carries its reason in Move. TWO THINGS RIDE BENEATH THIS
  TABLE when they exist, and nothing else does:
  - THE FLIGHT-CONTEXT LINE — what a seat is mid-way through
    that its rows cannot say, and any NAMED WATCH a control
    tower owns ("watching #N for X"), written at
    [handoff §1.5](#15--park-the-local-lanes-full-only) and
    re-armed by
    [pickup §3](pickup.md#3--gather-git-outranks-the-board).
    Watches die with sessions; this line is why the record does
    not.
  - THE FLEET-AT-GROUND TABLE — after a MODE P landing only:
    id · purpose · progress · exact next step · state, each cell
    lifted FROM THE LANE'S OWN FENCE so board and memory cannot
    disagree ([land](land.md) writes it,
    [pickup §6](pickup.md#6--fleet-resume-on-the-founders-answer)
    reads it).
- **WORKING ON** — one line per active theme, and the standing
  order as its own list, ONE PHASE PER LINE.
- **RECENT** — Completed: one line each with its PR. Issues: ✓
  resolved, one line with its vehicle · ⏳ open, one line pointing
  at the issue's home.
- **WHERE WE ARE (Roam)** — the bars and nothing else; a paused
  tick POINTS AT the standing order rather than re-explaining it.
  Position lives here once.
- **WEB + DESIGN** — "(Web)" or "(Design)", then the VERBATIM chat
  title in quotes, then one line; a ⏸ row carries its exact resume
  word. [pickup](pickup.md) and handoff maintain these rows.
- **NEXT** — one line.

Sources:
[DASHBOARD](../DASHBOARD.md)
[ROADMAP](../ROADMAP.md)
[HOME §Reading the board](../HOME.md#reading-the-board)
[TEMPLATE — the Status vocabulary](../memory/TEMPLATE.md)

## 5 · Ship the note
Branch chore/handoff-<date> from main, commit ONLY DASHBOARD.md
(+ IDEAS.md if harvested OR if §1.2 captured team findings
there), push, PR "chore: handoff", squash-merge
as soon as its checks pass — `gh pr merge --auto --squash
--delete-branch` (the micro-PR carve-out, now ~35s). If the merge
fails, leave the PR open — the next pickup self-heals it.

Sources:
[DASHBOARD](../DASHBOARD.md)
[IDEAS](../IDEAS.md)

## 6 · Close (FULL only)
THE CLOSE REPORT — render EXACTLY this shape
([HOME §Response doctrine](../HOME.md#response-doctrine),
rule 8). Its ONE JOB is: everything is recorded, and you owe
nothing before powering off.

```text
<glyph> CLOSED — the sitting is recorded; origin clean.

Your act: nothing. <Or, if anything genuinely remains: the act ·
where · when.>

[OFF-ORIGIN — carry this to <surface>: <content> | omit]

This sitting: <1–3 plain sentences>. Handoff shipped (#N) ·
M lanes parked<, team shut down (N teammates)>.
Operations halted — safe to power off.

Waiting for you next time: <one line per parked lane or live
flight — 🟢 all good · ⏸ its exact resume word and where it
goes; or "nothing">.
(Story: the memories and the ledger.)
```

The team clause appears only when
[§1.2](#12--shut-the-team-down-full-only) shut one down, and any
teammate that REFUSED OR HUNG is named there with where its
findings landed — this wording is the single home of the team
close line; [liftoff §7](liftoff.md#7--close) carries it by
pointer. The OFF-ORIGIN block is omitted entirely when nothing
qualifies; the step-2 Web/Design paste lands on the board, not
here. Self-check before sending: verdict first? the founder's
word named with its surface and its when? off-origin called out
or omitted? Push first, report second — nothing here that is not
on origin, except the founder's acts and off-origin content.
Then, as the ritual's LAST
act, write `.claude/session-closed` with content "Closed at handoff
#<N> · <date> · <seat>" — the close-lock: from that moment the
prompt hook stamps every later prompt with the closed-session
doctrine, and the session ends AS A WORKING SEAT. Closed ≠ dead:
addressed after the close it stays READ-ONLY CONVERSATIONAL —
answers by fresh derivation from origin, always names the current
baton-holder, and refuses every write, command act, and ritual.
QUIET instead returns to the sitting and recommends
NEXT per the pacing law.

Sources:
[pacing law — LAWS §Workflow](../LAWS.md#workflow-non-negotiable)
