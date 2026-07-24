---
type: memory
id: landing-skill
updated: 2026-07-24 13:44 · payload complete · work PC
---

# landing-skill — the landing skill (D-054)

## Status

complete, awaiting merge — payload written and the full gate run
green locally on 2026-07-24 at the work PC. PR
[#221](https://github.com/wsher0901/roam/pull/221). Tower-authored,
so the no-solo-approval law puts an external Web review before the
founder's word. Branch `docs/landing-skill`, born from `7006854`
with origin carrying `main` alone.

## What this task is

One theme: how a flight ends. Landing becomes a first-class ritual
— `docs/skills/land.md` plus its `.claude` stub — ONE skill with
TWO modes routed by the fleet the cockpit derives at landing time.
MODE R retires a flight whose work is done; MODE P pauses a fleet
that is still flying because the founder is coming back to the
desk, fencing every live lane so the work transfers instead of
evaporating. The cockpit charter's rule 6 stops carrying the duties
and becomes a pointer; pickup gains the resume counterpart so a
grounded fleet can be picked up at any seat. Riding along, because
the founder confirmed it the same day: the effort doctrine moves to
Opus 5 · xhigh. Contract: [the spec](../specs/landing-skill.md).

## Pending issues

- `.claude/agents/reviewer.md` pins `model: sonnet` · `effort:
  high`, which the new "Opus 5 · xhigh for ALL work including
  reviews" doctrine appears to contradict. The file sits outside
  the mandate's list and the change is cost-bearing, so it is
  flagged at THE GATE rather than edited here. The founder's call.
- Two manual acts wait on the weld: re-save the cockpit routine
  box from the edited master (rule 6 changed), and set the
  lane-worker and cockpit routine configs to Opus 5 at the next
  flight.

## Left / idle

Nothing on the bench. What remains is the gate: the external Web
review of this tower-authored diff, then the founder's word.

## The story

Born bench-first at 13:34 on the work PC from a freshly pulled
`main` — origin carried `main` only, so STEP 0's precondition held
exactly as the mandate required. Spec and memory stub went to
origin as the first commit; the draft PR opened on top of them, so
the bench was public before a line of payload existed.

THE DESIGN CALL THAT SHAPED EVERYTHING ELSE: what can actually
stop a running lane. Nothing in the system can interrupt one — a
lane is a session with no inbound channel except its own next
push. So the pause had to be built out of the mechanism that
already exists: the wake-lock. A commit on the lane's branch makes
its next push non-fast-forward; the rejection is a wake; the wake
forces a pull and a re-read of its own Status; the Status reads
`held`, which is terminal and which the lane does not own; the lane
stops. That is the FENCE. Its best property is that nothing has to
be recorded for the resume point to be right — the resume point IS
the branch tip, by construction, and the only thing that can be
lost is a sliver the lane never pushed, which the push-every-commit
rule already bounds. Its honest limit went into the skill in the
same breath: the fence acts at the lane's NEXT push, not
instantly, so a lane mid-turn may finish its current step. The
landing report therefore states last-observed state and never
claims a freeze it cannot deliver.

TWO MODES, ONE SKILL rather than two skills: the spine is shared
(derive · repaint · report · stop), and a fork inside a ritual is
already the house shape in handoff's FULL/QUIET. Two skills would
have forked that spine and drifted.

NO NEW STATE WAS NEEDED — but one row did need widening, and the
critic caught the overclaim before the gate. The fence uses the
EXISTING terminal `held` state and pickup's redeploy flips back to
the existing `bench ready`, so no consumer needed an edit: the
lane-worker charter's rule 3 already lists `held` as terminal, and
`.claude/hooks/session-start.mjs` matches the bare word (verified
on this bench, not assumed). What was NOT true is the stronger
claim first written here — that nothing changed. [TEMPLATE](TEMPLATE.md)
documented exactly one `held` line shape, liftoff §5's
"needs local", so the fence would have been a second, undocumented
writer of a differently-shaped line. The retroactivity law says
backfill in the same PR, so that row now carries ONE shape with
BOTH writers named. Second finding, also taken: MODE P (a)'s
snapshot table had dropped the charter's glyph column, so the
response doctrine's "glyph verdicts lead" was not plainly
satisfied — the column is back and the framing no longer claims a
closer match to rule 5 than it delivers.

ONE RIPPLE BEYOND THE MANDATE'S FILE LIST, taken deliberately and
disclosed rather than smuggled. Making land a ritual makes six of
them, and HOME's section was headed "The five rituals". Leaving it
would have shipped a false census in the very file the mandate
told me to edit; the retroactivity law says backfill in the same
PR. So the heading is now "The rituals", which moved its anchor,
and its one inbound link — in the shipped
[currency-audit](../specs/currency-audit.md) spec — was repaired.
One line, a pure link repair, called out at the gate for the
founder to veto if the file boundary mattered more than the
census.

THE PARK PROTOCOL QUESTION, answered in the skill rather than left
for a future reader to trip over: the protocol's ONE-stamped-line
limit governs handoff's ground-side park of a LOCAL lane, and the
fence deliberately writes more than that. Not a breach — different
act, different clause — but the relationship is stated in land's
MODE P (b) so the two never read as contradicting each other.
LAWS is untouched by design.

The gate ran green locally in the exact order LAWS fixes it:
links (2895 checked, 0 broken — the new D-054 anchor and both new
section anchors resolve on their first push, as the decide skill
requires), ledger (94 ↔ 94), memory (valid), lint, format, tests
(3 passed), build.

## Where to look

- [the spec](../specs/landing-skill.md) — goal, plan, Done-means,
  and the one open question.
- [land](../skills/land.md) — the payload: §0's routing, MODE R,
  and MODE P (a)–(f).
- [pickup §6](../skills/pickup.md#6--fleet-resume-on-the-founders-answer)
  — the resume counterpart and the redeploy mechanics.
- [SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
  — charter rule 6 as a pointer, and the Models & effort line.
- [DECISIONS](../DECISIONS.md) — D-054, seven clauses and five
  rejections.
- [#221](https://github.com/wsher0901/roam/pull/221) — the PR.
