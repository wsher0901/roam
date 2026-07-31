---
type: skill-procedure
title: Pickup
status: living
---
# Pickup — the sit-down briefing

Control tower only — delegated lanes and background agents skip it
and
proceed with their kickoff. Runs unprompted on the founder's first
message of a session. Assume the founder remembers NOTHING; plain
English everywhere. Glyphs, here and on the board: 🟢 done ·
🟡 ongoing · 🔴 issue · ⚪ idle.

## 1 · Claim the baton
Read the DASHBOARD header stamp and announce "last ritual: <when> ·
<seat>". Claiming happens on fresh origin (the session-start hook
pulls main and removes welded-elsewhere local branches; if it could
not, pull now). From this moment this session is the control tower.

Sources:
[DASHBOARD](../DASHBOARD.md)
[baton law — LAWS §Parallel lanes & cloud](../LAWS.md#parallel-lanes--cloud)

## 2 · Self-heal
If an open PR touches ONLY DASHBOARD.md and/or IDEAS.md, it is a
stranded micro-PR: squash-merge it now, pull, and report it in the
briefing header.

GHOST TEAMMATES — the resume case, and a recovery note rather
than a step. A session reached by `/resume` or `/rewind` can
inherit a LEAD whose teammates no longer exist: the team config
still lists members, but the processes died with the previous
session, and messaging them silently accomplishes nothing. If
that is what this session is, say so plainly in the briefing and
OFFER FRESH TEAMMATES — never message the ghosts, and never
report their silence as progress. Whatever the dead team had
found should already be in the record; if it is not, it is gone,
and the honest report says that too
([handoff §1.2](handoff.md#12--shut-the-team-down-full-only) is
what prevents the case).

Sources:
[DASHBOARD](../DASHBOARD.md)
[IDEAS](../IDEAS.md)
[HOME §Agent teams](../HOME.md#agent-teams)

## 3 · Gather (git outranks the board)
Read ROADMAP · DASHBOARD · every active branch's memory/<id>.md ·
live git (`git fetch --prune` first — stale remote-tracking refs
lie — then `git branch -r`, `gh pr list --state open` including
drafts). Check `git worktree list` against the liveness rule
([parallel-lanes §Liveness](parallel-lanes.md#liveness--live-vs-reclaimable)),
using the verdict the session-start hook printed: a LIVE worktree
(heartbeat within the window) is a running lane — LEAVE IT, surface
it under Sessions/NEEDS YOU as flying, never secure-or-prune. A
RECLAIMABLE one (terminal Status or silent past the window) that is
dirty is a lane that died un-parked — secure it (commit + push on
its branch) and surface it. Relay any hook lines from session
start (branches removed as welded elsewhere, or one it could not
remove). Where the board and git disagree, git wins — say so
plainly.
A LIVE COCKPIT HOLDING PENDING DECISIONS routes straight to
[§6's desk takeover](#the-desk-takeover--a-live-cockpit-holding-decisions)
— not to §5's fleet-resume ask, which renders only for a grounded
fleet. "Pending decisions" is read the same way the cockpit reads
it: open `BLOCKED:` comments, PRs standing ready at THE GATE, and
this flight's own Needs-you lines.
Re-arm every named watch: any "watching #N for X" line found in a
parked lane's memory or the board's flight-context line
([handoff §1.5](handoff.md#15--park-the-local-lanes-full-only)
writes them — watches die with sessions, the record must not) is
re-armed now, so the duty resumes with the new sitting.
THE `claude/*` RESIDUE SWEEP (standing hygiene — every cloud
session lazily leaves a workspace head on origin, and cloud
sessions cannot delete branches): list `claude/*` heads from the
fetch; for each, verify ZERO unique commits vs main
(`git log origin/main..origin/<head>`); if its session may still
be LIVE, HOLD and ask the founder — archive-before-delete, the
resurrection rule; else delete it, then the 60s `fetch --prune`
tripwire re-lists heads (the platform creates them lazily — a
clean mid-flight check proves nothing). A head carrying unique
commits is NEVER swept — surface it under Needs-you.

Sources:
[ROADMAP](../ROADMAP.md)
[DASHBOARD](../DASHBOARD.md)

### The baton line pickup paints — wording is law

Plain claim:

```text
CONTROL TOWER — <seat>, since <t> (pickup)
```

with a last-flight line preserving its CAUSE: `Last flight:
LANDED <t> via AUTO-LAND — clean` · or `via MANUAL-LAND` (adding
` · N lanes frozen → fleet-resume` when it froze work). When
nothing has flown, the line still renders — `Last flight: none —
the floor has been ground-side this sitting` — because a silent
BATON section reads as an unpainted one.

On a DESK TAKEOVER
([§6](#the-desk-takeover--a-live-cockpit-holding-decisions)):

```text
CONTROL TOWER — <seat>, since <t> (pickup — DESK TAKEOVER)
Last flight: LANDED <t> BY THIS PICKUP — was awaiting your word
on N items (now in Needs you) · N lanes fenced → fleet-resume
```

The awaiting clause appears only when it is true.

## 4 · Repaint if stale
If the board disagrees with its sources (ROADMAP checkboxes,
branch/PR reality, memory Status lines), REPAINT it now per the
board spec in [handoff §4](handoff.md) — pickup is a ritual and may
write the DASHBOARD. Ship the repaint exactly as handoff §5 ships
its note: chore branch from freshly pulled main, DASHBOARD-only
commit, micro-PR, immediate squash-merge.

Sources:
[handoff §4–§5](handoff.md)

## 5 · Render the sit-down summary (exactly this shape)
The briefing follows the response doctrine
([HOME §Response doctrine](../HOME.md#response-doctrine)); the
shape below is the founder's status template.
- ⏸ FIRST, above everything
  ([D-050](../record/DECISIONS.md#d-050--session-lifecycle-closed-is-not-dead)):
  whenever any memory's Status reads
  interrupted, LEAD the briefing with one line per interrupted
  task, drawn from its ⏸ capture block
  ([TEMPLATE](../memory/TEMPLATE.md)) —
  "⏸ INTERRUPTED: <one line> — continue?" — before anything else
  renders.
- FLEET RESUME, second (the ⏸ lead keeps priority): whenever the
  board shows a GROUNDED FLEET — a BATON line reading "no live
  cockpit — grounded for local pickup <date>", written by
  [land](land.md)'s MODE P — render one row PER LANE straight from
  the board's fleet-at-ground table (id · purpose · progress ·
  exact next step · held), then THE ASK, in these exact words:
  "Continue? — 'continue' redeploys the whole fleet: each held lane
  flips to resumed and re-labels `lane:cloud` (N cap runs, N fresh
  workers claim by canary and read their fences)."
  Then the granular alternatives, one line each: "'local <id>' —
  adopt the branch at this desk and continue (0 cap runs)" ·
  "'redeploy <id>' — one lane, 1 cap run" · "'hold <id>' — leave it
  parked". N is DERIVED AT ASK TIME (the lane count), and the cap
  arithmetic is stated aloud beside it — remaining runs from
  `npm run count:runs` plus any fires this sitting, against the
  15/day cap ([liftoff §2](liftoff.md#2--triage-every-open-item));
  if the script fails, say so and ask for the number rather than
  guessing. The founder's answer runs
  [§6](#6--fleet-resume-on-the-founders-answer).
- THE SIT-DOWN — render EXACTLY this shape
  ([HOME §Response doctrine](../HOME.md#response-doctrine),
  rule 8). Its ONE JOB is: where you are, and what you can do
  now.

  ```text
  ── pickup · <date> · <seat> ──
  <🟢 | 🟡 | 🔴> <seat> has the baton. <floor state: N open
  benches, N lanes, or "clean floor">.

  Needs you — <N | nothing>:
  <each, from the board, glyph-led: the act · where · when>

  In flight: <one line per live seat or lane, or "nothing">.

  Working on: <the bench this sitting resumes, exact next act —
  or what the board says is next>.

  Your act, if you want it now: <the single word or step · where
  you say it · when | nothing — say the word and I start>.

  [OFF-ORIGIN — what only this session can tell you:
  <the stranded micro-PR merged by §2 · ghost teammates and the
  offer of fresh ones · any session-start hook line>]

  Shipped lately: <one line> → the ledger.
  ```

  The OFF-ORIGIN block is OMITTED ENTIRELY when nothing qualifies
  — its presence is the signal. §2's self-heal and §3's hook
  relay have no home on origin, so they ride HERE or they are
  lost.

  The floor state, the counts and Needs-you are DERIVED from the
  board and git at render time, never recalled. Self-check before
  sending: verdict first? the founder's word named with its
  surface and its when? off-origin called out or omitted? Push
  first, report second — nothing here that is not on origin,
  except the founder's acts and off-origin content.
No ritual self-narration ("baton claimed" and kin stay silent
mechanics). Everything else lives on the board
([handoff §4](handoff.md)) — point, don't repeat. Then STOP — the
claim check happens in conversation before any task starts.

Sources:
[HOME §Response doctrine](../HOME.md#response-doctrine)
[TEMPLATE — the Status vocabulary](../memory/TEMPLATE.md)
[pacing law — LAWS §Workflow](../LAWS.md#workflow-non-negotiable)

## 6 · Fleet resume (on the founder's answer)

TWO ENTRY DOORS, and they are not the same door. THE RESUME
MECHANICS (redeploy · adopt · hold) run only after §5's FLEET
RESUME ask and only on the founder's word — a ritual never spends
cap runs by default; the redeploy mechanics live HERE and nowhere
else, and every other page points at this section. THE DESK
TAKEOVER below has its OWN trigger — §3's gather finding a live
cockpit that holds pending decisions — and needs no §5 ask,
because §5's ask renders only for a GROUNDED fleet, which is
exactly what this case is not.

### The desk takeover — a LIVE cockpit holding decisions

Reached from [§3](#3--gather-git-outranks-the-board), not from
§5's ask. The case that outranks the resume mechanics
([D-061](../record/DECISIONS.md#d-061--the-landing-doctrine-recut-to-three-scenarios),
scenario 2): §3's gather finds a cockpit that is LIVE and holding
PENDING DECISIONS — gates that reached decision and are waiting
on the founder. The founder is here, at this desk. Two commanding
seats cannot both hold the baton, so the desk takes it:

1. **ADOPT THE DECISION QUEUE.** Surface every pending gate at
   this desk, each one carrying the cockpit's own advice — read
   from its PR comments and the board's flight context, never
   re-invented. The founder answers them here.
2. **WRITE COCKPIT SUPERSEDED** to the board — THE BATON section,
   per the board spec
   ([handoff §4](handoff.md#4--repaint-dashboard-the-board-spec--single-source)),
   in this exact shape so the old cockpit can recognize it:

   ```text
   COCKPIT SUPERSEDED — desk takeover <date · time · seat> · <its session url>
   ```

   This is the board write the supersession rests on: the old
   cockpit learns it is superseded by READING this row, and from
   this moment the desk owns the board.
3. **PROCEED** with the rest of pickup — but LEAVE THE LANES
   ALONE. The resume mechanics below apply to FENCED branches
   only: `redeploy` writes `bench ready` onto a branch, which on
   a LIVE lane is a Status the worker does not own, so the
   wake-lock would kill a healthy lane; `local <id>` would check
   out a branch a live worker is still pushing to. A live lane is
   CLAIMED, never adopted
   ([parallel-lanes §Liveness](parallel-lanes.md#liveness--live-vs-reclaimable)).
   The superseded cockpit's own landing is what fences them, and
   they become an ordinary grounded fleet for the NEXT resume ask
   — this sitting's or a later one's.

The other side of this is the cockpit's TOMBSTONE WAKE-RULE — on
any wake, read the board first; if superseded, self-retire by the
full landing ritual, minus the board step
([land §Scenario 2](land.md#scenario-2--desk-takeover-the-desk-fires-it)).
The desk does not WAIT for that retirement — the board write
transfers the baton immediately, and the retirement is the old
seat's own duty — but it does not touch that seat's live lanes
before the fences land either. Nothing is lost by the wait: the
lanes keep working, and their branches are the work.

Per lane, by the answer given:

- **'continue'** (the whole fleet) or **'redeploy <id>'** (one
  lane) — REDEPLOY. On the lane's fenced branch: flip the memory
  Status to "bench ready — resumed <date>" (the existing
  `bench ready` state, [TEMPLATE](../memory/TEMPLATE.md)) and push
  — that push releases the fence, since `held` is what a waking
  worker would otherwise obey. Then re-apply the `lane:cloud`
  label per
  [parallel-lanes §Cloud spawn](parallel-lanes.md#cloud-spawn--route-ladder)
  (ready-flip first if the PR is a draft), and run the canary
  handshake as the baton-holder side of
  [§Canary](parallel-lanes.md#canary-handshake-both-sides) — the
  fresh worker claims, and the ack token is written
  character-for-character. The worker reads its own fence for the
  exact next step; no second birth, the bench already exists.
- **'local <id>'** — ADOPT AT THIS DESK. Check the branch out here
  and continue from its fence. Zero cap runs; the Status becomes
  this seat's ordinary working state.
- **'hold <id>'** — leave it. The fence stands, the board keeps
  its row, and the lane resumes at some later sitting.

Anything redeployed or adopted stops being a grounded-fleet row at
the next repaint; anything held keeps its row so the owed work
survives the sitting.

Sources:
[land](land.md)
[parallel-lanes §Respawn](parallel-lanes.md#respawn-on-an-existing-bench-liftoff-adopt)
[TEMPLATE — the Status vocabulary](../memory/TEMPLATE.md)
