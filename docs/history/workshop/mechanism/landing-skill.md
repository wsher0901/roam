---
type: history
id: landing-skill
updated: 2026-07-24 15:20 · weld · work PC
shipped: 2026-07-24 15:20
pr: 221
---

# landing-skill — the landing skill (D-054)

## Status

shipped — merged [#221](https://github.com/wsher0901/roam/pull/221)
on 2026-07-24 at the work PC. Tower-authored, so the
no-solo-approval law put an external Web review before the
founder's word: PASS on `3e4d1ba`, twelve files, both disclosed
ripples upheld and the gates re-run independently (links 2902/0 ·
ledger 94↔94 · memory valid · Actions green). Branch
`docs/landing-skill`, born from `7006854` with origin carrying
`main` alone.

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
Opus 5 · xhigh. Contract: [the spec](../../../specs/landing-skill.md).

## Pending issues

None open on this bench. The one question it raised was ANSWERED
at the gate and is recorded below.

Two manual acts follow the weld: re-save the cockpit routine box
from the edited master (rule 6 changed), and set the lane-worker
and cockpit routine configs to Opus 5 at the next flight.

## Left / idle

Nothing. Shipped whole.

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
claim first written here — that nothing changed. [TEMPLATE](../../../memory/TEMPLATE.md)
documented exactly one `held` line shape, liftoff §5's
"needs local", so the fence would have been a second, undocumented
writer of a differently-shaped line. The retroactivity law says
backfill in the same PR, so that row now carries ONE shape with
BOTH writers named. Second finding, also taken: MODE P (a)'s
snapshot table had dropped the charter's glyph column, so the
response doctrine's "glyph verdicts lead" was not plainly
satisfied — the column is back and the framing no longer claims a
closer match to rule 5 than it delivers.

THE SECOND RIPPLE BEYOND THE MANDATE'S FILE LIST, taken
deliberately and disclosed rather than smuggled. Making land a
ritual makes six of
them, and HOME's section was headed "The five rituals". Leaving it
would have shipped a false census in the very file the mandate
told me to edit; the retroactivity law says backfill in the same
PR. So the heading is now "The rituals", which moved its anchor,
and its one inbound link — in the shipped
[currency-audit](../../../specs/currency-audit.md) spec — was repaired.
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
links (2902 checked, 0 broken — the new D-054 anchor and both new
section anchors resolve on their first push, as the decide skill
requires), ledger (94 ↔ 94), memory (valid), lint, format, tests
(3 passed), build.

THE EXTERNAL REVIEW, the mandatory one for a tower-authored diff:
PASS on `3e4d1ba`, twelve files, gates re-run independently. It
verified both modes, the fence mechanism and its by-construction
claim written where BOTH actors read them, the honesty clause's
last-observed wording, the cattle disposal with its archive list,
pickup's ask with all three granular words and live cap
arithmetic, rule 6 as a pure pointer with zero duplicated duties,
and the stub boundary mirrored in handoff's. On the two ripples it
went further than "acceptable": TEMPLATE's held-row unification
was REQUIRED, not merely allowed — two writers of a `held` line in
two shapes would have been a one-home violation — so the critic's
finding improved the mandate rather than merely satisfying it.

THE REVIEWER-MODEL QUESTION, answered by the founder at the gate
and recorded here because the answer draws a boundary the entry
itself does not: THE EFFORT DOCTRINE GOVERNS SURFACES AND
SESSIONS, NOT SUBAGENT INTERNALS. So `.claude/agents/reviewer.md`
keeping `model: sonnet` · `effort: high` is NOT a contradiction
with D-054's clause 7, and nothing changed at this gate. It rides
the AGENT TEAMS bench next, where it must be decided beside a fact
that widens it — a subagent definition spawned as an agent-team
teammate honors its OWN `model` and `tools`, so that one line will
govern the ship-time critic AND any review teammate — and with the
alias question VERIFIED rather than guessed: `opus` may still
resolve to Opus 4.8, while `claude-opus-5` pins but is
deprecation-brittle.

## Where to look

- [the spec](../../../specs/landing-skill.md) — goal, plan,
  Done-means, and the question the gate answered.
- [land](../../../skills/land.md) — the payload: §0's routing, MODE R,
  and MODE P (a)–(f).
- [pickup §6](../../../skills/pickup.md#6--fleet-resume-on-the-founders-answer)
  — the resume counterpart and the redeploy mechanics.
- [SETUP §cloud accounts](../../../SETUP.md#once-and-done--cloud-accounts)
  — charter rule 6 as a pointer, and the Models & effort line.
- [DECISIONS](../../../DECISIONS.md) — D-054, seven clauses and five
  rejections.
- [#221](https://github.com/wsher0901/roam/pull/221) — the PR.
