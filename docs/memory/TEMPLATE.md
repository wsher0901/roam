---
type: memory
id: <vn.sm.tk or slug>
updated: <date · ritual-or-trigger · seat>
---
# <ID> — <task name>

## Status
<current state in plain sentences — this section is the handshake
surface — one state from the vocabulary below, plus what just
happened>

Whenever the state is `interrupted`, the ⏸ capture block follows
the Status line, EVERY field filled — a resuming seat must be able
to continue from this block alone. One field is conditional and
named as such: TEAM FINDINGS appears only when an agent team was
live at the pause, and is omitted entirely otherwise:

**⏸ Interrupt capture**

- ORIGINAL MANDATE: <verbatim, or a pointer to where it lives>
- THE PLAN: <the plan of record at the moment of pause>
- DONE SO FAR: <checkpoints already reached>
- EXACT NEXT STEP: <the single next action a resuming seat takes>
- WHY PAUSED: <Esc · founder redirect · handoff park — and the reason>
- TEAM FINDINGS: <only when an agent team was live at the pause —
  what each teammate had found. Teammates do not survive the
  SITTING — `/resume` and `/rewind` do not restore them — and
  their transcripts die with them, so this is the one field git
  cannot re-derive. Omit the line entirely when no
  team was running.
  ([handoff §1.2](../skills/handoff.md#12--shut-the-team-down-full-only))>

## What this task is
<the kickoff's essence in prose — goal and scope edges>

## Pending issues
<open questions, risks, things awaiting an answer — or "none">

## Left / idle
<what remains, and anything parked with its reason — or "nothing">

## The story
<the running narrative: decisions, dead ends, why the approach is
what it is — appended as it happens, rewritten cognitively at
rituals>

## Where to look
<files, PRs, chats, and external docs a cold reader needs>

## Status vocabulary
One state per Status line; the wake-lock licenses work ONLY on a
lane's own live claim. Whenever the Status line is stamped, refresh
the frontmatter `updated:` line in the same edit — a stale
`updated:` mis-attributes the seat (found 2026-07-16).

The airborne row is the one MACHINE-CHECKED token in this table —
a waiting lane polls for it — so its form is the contract in
[parallel-lanes §Canary](../skills/parallel-lanes.md#canary-handshake-both-sides),
copied here exactly, middots and all. Write it character-for-character;
a near-miss is invisible to the lane (proven live 2026-07-22 —
an em-dash ack cost a flight its handshake).

Every `<date>` slot below is load-bearing: `scripts/check-memory.mjs`
demands a `YYYY-MM-DD` stamp in the Status BODY, so a row copied
verbatim without one goes red — which flight 2's lanes A
([#278](https://github.com/wsher0901/roam/pull/278)) and B
([#279](https://github.com/wsher0901/roam/pull/279)) each discovered
independently on 2026-08-04, evidence about the table rather than
about either seat.

**AND ON 2026-09-10 THE AUDIT FOUND THE GAP WAS WIDER THAN THE TWO
ROWS THAT WERE FILED.** The checker demands a date in EVERY Status,
so every dateless row was a trap, not two: `bench ready`, `blocked`,
`cloud spawn failed`, `superseded` AND `held` all lacked a slot. All
five now carry one — and the fifth is the lesson: this seat reasoned
its way to four and missed `held`, which only a MECHANICAL WALK of
every row found. That walk is now
[`npm run check:vocab`](../../scripts/check-vocab.mjs), which fills
each row's placeholders and asks the memory checker whether the row
as written would pass, so the table can never again ship a state
that fails CI for being obeyed. (`shipped — merged #N` still does not, and is the one
safe exception — it is written by
[ship](../skills/ship.md#7--on-approval--the-atomic-weld)'s weld at
the moment the memory MOVES to `record/history/`, so `check:memory`
never sees it. Named here so the asymmetry reads as deliberate.)

The birth row also had a SECOND home that disagreed with it:
[parallel-lanes §Bench-first birth](../skills/parallel-lanes.md#bench-first-birth-baton-holder-procedure)
tells the baton-holder to write "bench ready, no worker yet —
birthed `<date>` by `<seat>`", and
[pickup §6](../skills/pickup.md#6--fleet-resume-on-the-founders-answer)
writes "bench ready — resumed `<date>`". **Both are lawful
elaborations of this row and neither is a competing vocabulary** —
what the checker needs is the state word first and a date somewhere
in the body, which all three satisfy now that the row itself carries
the slot.

| State | Written by | Licenses |
|---|---|---|
| bench ready — <date> | baton-holder, at birth | claiming |
| claimed — <vehicle · date> | the lane, canary | waiting for ack |
| airborne · <vehicle or url> · <date> | baton-holder ack (the machine-checked token — exact form) | the lane works |
| blocked — <date> · <reason> | the lane (+ BLOCKED: PR comment) | waiting on founder |
| parked — <date · reason> | handoff §1.5, liftoff §5, or the lane | nothing — until founder action |
| interrupted — <date> · <why> | the interrupting seat (Esc · founder redirect · handoff park), with the ⏸ capture block filled in Status | resume via pickup's ⏸ lead ("continue?") or the founder's word |
| claimed for respawn — <vehicle · date> | the cloud lane | waiting for ack |
| respawned — <new vehicle · date> | baton-holder/liftoff, at respawn | nothing — the bench belongs to the new lane; a prior worker self-terminates on sight |
| held — <date> · <reason> | two writers, one shape: liftoff §5 (`held: needs local — <date> · <reason>`) · [land](../skills/land.md) MODE P (b), the fence (`held — landed for local pickup <date>`) | nothing — resume only on the founder's word: adopt the branch locally, or redeploy via [pickup §6](../skills/pickup.md#6--fleet-resume-on-the-founders-answer) |
| cloud spawn failed — <date> · <reason> | baton-holder, + the board's In-flight row (+ Needs-you mirror) | nothing — founder decides |
| failed — <reason · date> | the lane (genuine error) or baton-holder | nothing — founder decides |
| superseded — <date> · <by> | baton-holder | self-terminate on sight |
| complete, awaiting merge — <date> | the finishing session | THE GATE |
| shipped — merged #N | ship's weld (the memory moves to record/history/) | nothing — the bench is done |
