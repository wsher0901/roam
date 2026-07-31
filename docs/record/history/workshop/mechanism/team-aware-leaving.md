---
type: history
id: team-aware-leaving
updated: 2026-07-24 17:21 · weld · work PC
shipped: 2026-07-24 17:21
pr: 225
---

# team-aware-leaving — the rituals learn about live teams (D-056)

## Status

shipped — merged [#225](https://github.com/wsher0901/roam/pull/225)
on 2026-07-24 at the work PC. Tower-authored, so the
no-solo-approval law put an external Web review before the
founder's word: PASS on `fc4dcf7`, ten files, gates re-run
independently (links 3095/0 · ledger 96↔96 · memory valid ·
Actions green). Branch `docs/team-aware-leaving`, born from
`27415fa` with origin carrying `main` alone and zero open PRs.

## What this task is

One theme: no ritual lets a live agent team outlive the sitting
that made it.
[D-055](../../../DECISIONS.md#d-055--agent-teams-the-boundary)
made single-sitting-only law and left it unenforced — handoff
parks lanes, land fences them, neither mentioned a team. This
bench gives [handoff](../../../../skills/handoff.md) the
shutdown-and-capture duty, gives [land](../../../../skills/land.md) the
cockpit case with a routing line, gives
[pickup](../../../../skills/pickup.md) a ghost-teammate recovery note, and
gives the ⏸ block the one field a dead team leaves behind.
Contract: [the spec](../../../specs/team-aware-leaving.md).

## Pending issues

None open. The one ripple beyond the mandate's file list —
[liftoff](../../../../skills/liftoff.md) — is described in the story and
disclosed at the gate.

## Left / idle

Nothing. Shipped whole; the one deferred item is the
superseded-seat road below, filed to IDEAS with candidate fixes.

## The story

Born bench-first at 16:52 on the work PC from a freshly pulled
`main` — STEP 0 held: origin carried `main` only, tip `27415fa`,
zero open PRs.

THE CANDIDATE CLAUSE WAS SHARPENED, NOT OBEYED — the mandate's
own instruction, and the sharpening is the decision.
[IDEAS](../../../../IDEAS.md) proposed "a live team is finished or shut
down, never parked; a parked team does not exist." A good crisp
prohibition and an incomplete rule: it governs the PROCESSES,
which are not what is at risk. Teammates die cheaply and respawn
cheaply. What dies irrecoverably is what they FOUND, because a
team's output lives in transcripts that vanish with the session
while git keeps everything else. So the duty inverts to CAPTURE,
THEN KILL, and the capture is the part a ritual must guarantee.
The candidate's sentence survives as the prohibition inside that
larger duty.

WHY THE COVERAGE IS ASYMMETRIC, though the founder's gate word
asked for both leaving rituals. handoff carries the whole
procedure; land carries a routing line and no procedure at all —
because a cockpit does not lead a team, so a copy in land would
be a procedure that can never run, drifting quietly out of step
with the one that can. Both rituals are covered; only one has
anything to do.

THE JUSTIFICATION FOR THAT WAS WRONG AT FIRST, and the critic
caught it. I had written that a cockpit "cannot" lead a team
because a session has exactly one team and teammates cannot spawn
their own — but a cockpit is not a teammate, so that mechanism
does not imply the conclusion at all. The real basis is POLICY:
[D-055](../../../DECISIONS.md#d-055--agent-teams-the-boundary)
puts teams at a ground seat and makes lanes the cloud's
parallelism. The platform would let any session spawn teammates;
the boundary is what says a cockpit does not. Both homes now say
so plainly — a rule founded on the wrong mechanism erodes the day
the mechanism changes, and this one is load-bearing for land
carrying no procedure.

THE TWO REAL HOLES THE CRITIC FOUND, both of them the exact
failure this bench exists to prevent — a team result lost
silently.

The first: §1.2 routed refusals and hangs to "the close report
(§6)", but [liftoff](../../../../skills/liftoff.md) runs handoff FULL and
then SKIPS §6 entirely, and liftoff §7 carried no team line. On
the liftoff road the refusal report had nowhere to land. Fixed on
both sides — §1.2 now names which close report by road, and
liftoff §7 carries the team clause with the reason attached ("this
report is the ONLY close on the liftoff road, so a team result
dropped here is lost"). liftoff §1's enumeration of what handoff
FULL does gained the shutdown too. That is the one ripple beyond
the mandate's file list, taken because the alternative was
shipping the hole.

The second: "the open bench's `memory/<id>.md`" never said WHOSE
bench. If the open bench belonged to a LANE, the wording licensed
the control tower to write a multi-line findings block into a
lane's diary — which
[§1.5](../../../../skills/handoff.md#15--park-the-local-lanes-full-only)
calls the one control-tower-written line a lane's memory may ever
receive. D-056's own title claims it upholds the park protocol,
and the draft quietly broke it. Now scoped: THIS SESSION'S OWN
bench, never a lane's diary.

Three smaller ones, all taken: the header still said QUIET skips
1.5–3, which would have had ship's tail tearing down a live
mid-sitting team — now 1.2–3; TEMPLATE's preamble demanded EVERY
field filled while the new field says omit-when-absent, so the
locked format contradicted itself on its own page; and §3's
enumeration of the ⏸ fields never learned about TEAM FINDINGS,
leaving the one step that fills the block ignorant of the field
§1.2 had just captured — it now names the field and states that
the cognitive rewrite is never lossy.

THE CRITIC'S MODEL, reported because the mandate asked and
because the answer corrects the mandate's premise. The premise
was that this session starts after `reviewer.md`'s change, so the
critic should be Opus — but this is the SAME session that made
that change, and an agent definition is cut at session start, so
the first pass ran on the old definition. It also declined to
state its model despite being asked, which is itself the reason
not to trust self-report. The second pass was forced with an
explicit override and asked again: it answered **Opus 5 (1M
context) · effort high** on its first line, and was sharper for
the third bench running — it traced EVERY road out of a sitting
(handoff FULL, handoff QUIET, liftoff, land, go-remote, Esc) and
found two the first pass had not.

THE THIRD SILENT-LOSS HOLE, found by that pass and the subtlest
of the three: the IDEAS fallback had no COMMITTING VEHICLE. §1.2
runs on the task branch, so a dated IDEAS line written there
would be swept into a task commit or left dirty — and §5 commits
IDEAS only "if harvested", which a findings-only write is not. In
the no-bench-open case the fallback was written for, the findings
would have been lost exactly as if nothing had been captured.
§1.2 now routes that line to §5's micro-PR explicitly and §5's
condition was widened to name it.

ONE ROAD STAYS UNCOVERED, and it is recorded rather than
papered over: a SUPERSEDED SEAT self-closes with "push, write
nothing" ([LAWS](../../../../LAWS.md#parallel-lanes--cloud)), which is an
exit no ritual runs — a superseded tower leading a team would
lose its findings. The goal sentence says NO ritual lets a team
outlive its sitting, and that remains true; this is a road with
no ritual on it at all. Filed to [IDEAS](../../../../IDEAS.md) rather than
solved here, because touching the supersession rule is a
different bench.

THE EXTERNAL REVIEW, the mandatory one for a tower-authored diff:
PASS on `fc4dcf7`, ten files, gates re-run independently. It
called the liftoff ripple REQUIRED, NOT DRIFT — liftoff skips
handoff §6, so the shutdown report lands in §7 by necessity — and
noted the shape this bench took toward its predecessor: D-056
CORRECTS D-055'S MECHANISM-BASED REASONING FORWARD while leaving
that entry unedited under the append-only law. A decision log that
cannot be rewritten still has to be able to change its mind; the
forward correction is how.

TWO CORRECTIONS THE FOUNDER ACCEPTED ONTO THE RECORD AS HIS OWN,
kept here because a workshop that only records the assistant's
errors records half the truth. First, the mandate's premise about
the critic's model was wrong: agent definitions are cut at session
startup, so this session kept the old one no matter what
`reviewer.md` said. Second — the larger one — the candidate clause
he wrote ("never park a live team") was inverted by this bench to
CAPTURE, THEN KILL, and he judged the inversion the better
decision, for the reason the bench found rather than the one it
was given: teammates are cheap, and their findings are the only
irrecoverable thing.

## Where to look

- [the spec](../../../specs/team-aware-leaving.md) — goal, plan,
  Done-means.
- [handoff §1.2](../../../../skills/handoff.md#12--shut-the-team-down-full-only)
  — the shutdown duty, the one home.
- [land](../../../../skills/land.md#teams--not-this-rituals-case-both-modes)
  — the cockpit case and the routing line.
- [pickup §2](../../../../skills/pickup.md#2--self-heal) — the
  ghost-teammate note.
- [TEMPLATE](../../../../memory/TEMPLATE.md) — the conditional ⏸ field.
- [liftoff §1 + §7](../../../../skills/liftoff.md#7--close) — the disclosed
  ripple.
- [DECISIONS](../../../DECISIONS.md) —
  [D-056](../../../DECISIONS.md#d-056--team-aware-leaving-rituals),
  the entry this bench records.
