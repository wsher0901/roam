---
type: history
id: agent-teams
updated: 2026-07-24 16:44 · weld · work PC
shipped: 2026-07-24 16:44
pr: 223
---

# agent-teams — where teams fit, and where they must not (D-055)

## Status

shipped — merged [#223](https://github.com/wsher0901/roam/pull/223)
on 2026-07-24 at the work PC. Tower-authored, so the
no-solo-approval law put an external Web review before the
founder's word: PASS on `9b798b2`, ten files, gates re-run
independently (links 2986/0 · ledger 95↔95 · memory valid ·
Actions green). Branch `docs/agent-teams`, born from `fa38619`
with origin carrying `main` alone and zero open PRs.

## What this task is

One theme: where agent teams fit this workshop and where they must
not. The boundary — teams are for EXPLORATION AND REVIEW at a
ground seat, lanes remain the authorship mechanism — lands in HOME
with its reasons. Two risks become law: a team is single-sitting
only (an explicit carve-out to the interrupt promise), and a
teammate-authored diff is self-authored under no-solo-approval.
The reviewer subagent's model is settled BY VERIFICATION, and the
founder-side config is recorded so any seat knows it. No team is
built here. Contract: [the spec](../../../specs/agent-teams.md).

## Pending issues

- ENFORCEMENT GAP, deliberately deferred and filed to
  [IDEAS](../../../IDEAS.md) rather than left silent: risk (a) says a
  team is finished or shut down before the sitting ends, but no
  ritual acts on it — [handoff §1.5](../../../skills/handoff.md#15--park-the-local-lanes-full-only)
  parks LANES and says nothing about a live team, and the park
  protocol is lane-only. The rule is documented in two places and
  enforced in none. Ritual machinery is out of this bench's
  scope, so the clause is queued, not smuggled in.
- The reviewer's new model takes effect for sessions started
  AFTER the merge — see the story's note on the first critic run.

## Left / idle

Nothing. Shipped whole; the one deferred item is the enforcement
gap above, filed to IDEAS with its candidate clause.

## The story

Born bench-first at 16:04 on the work PC from a freshly pulled
`main` — STEP 0 held: origin carried `main` only, tip `fa38619`,
zero open PRs.

RESEARCH VERIFIED BEFORE ANYTHING WAS WRITTEN, against the
official page (code.claude.com/docs/en/agent-teams, read
2026-07-24). Every claim the mandate rested on came back
confirmed, several verbatim: teammates do not inherit the lead's
`/model` and are configured through `/config` → Default teammate
model → "Default (leader's model)"; they DO inherit the lead's
effort level; a teammate's model is fixed at spawn; a teammate
spawned from a subagent definition honors that definition's
`tools` and `model` while its `skills` and `mcpServers` are NOT
applied; teammates load CLAUDE.md and project context but not the
lead's conversation history; `/resume` and `/rewind` do not
restore in-process teammates and a resumed lead may message
teammates that no longer exist. Three facts the page adds, all
load-bearing for this bench: "One team per session" and "No
nested teams" — which independently justify the cockpit
rejection — split-pane mode explicitly unsupported in Windows
Terminal, which is what both seats run; and on permissions,
"Teammates start with the lead's permission settings", teammate
prompts surface in the lead session, and "a teammate that was
denied an action cannot relay it to another teammate to bypass
the check" — the sentence SETUP's permission line rests on.

THE ALIAS ANSWER, recorded BEFORE `.claude/agents/reviewer.md`
was touched — the mandate's order, kept. `claude update` reported
"Claude Code is up to date (2.1.219)", so 2.1.219 is the version
this answer belongs to. `/model` is interactive and cannot be run
from this harness, so the alias was resolved MECHANICALLY instead,
from a headless run's own usage telemetry — stronger evidence than
a UI label, because it is what the API was actually billed for.
The command and the decisive fragment of its JSON, verbatim:

```text
$ claude -p "Reply with only the word: ok" --model opus --output-format json

"modelUsage":{"claude-opus-5":{"inputTokens":2,"outputTokens":4,
"cacheReadInputTokens":20812,"cacheCreationInputTokens":22110,
"webSearchRequests":0,"costUSD":0.23161600000000002,
"contextWindow":1000000,"maxOutputTokens":64000,
"canonicalModel":"claude-opus-5","provider":"firstParty"}}
```

VERDICT: on CLI 2.1.219 the `opus` alias RESOLVES TO OPUS 5 —
`canonicalModel` is `claude-opus-5`, not a 4.8 build. So the alias
is taken and no pin is written: aliases track the recommended
version and survive deprecations, which is exactly the brittleness
the founder asked to avoid. `effort: high` is retained; the
doctrine's throttle order (reduce effort before downgrading the
model) is untouched.

WHERE THE BOUNDARY WENT, and why there. The natural pull was to
put it in [parallel-lanes](../../../skills/parallel-lanes.md) — it is
about parallelism — but that is the LANE manual, and filing the
team rules there would have implied teams are a lane vehicle,
which is precisely the claim this bench denies. So the boundary
lives in [HOME](../../../HOME.md) beside the Command card (it is a
founder-facing standing choice), and parallel-lanes keeps one
line saying teams are NOT a lane vehicle, pointing home.

THE CARVE-OUT WAS WRITTEN TWICE ON PURPOSE, in both places the
interrupt promise is actually read: the full statement in
HOME §Agent teams risk (a), and a clause on the Command card's
Esc line — because that line is where a founder meets the promise
"Esc is safe", and a promise and its exception must not live one
scroll apart. The sentence that ties them: an interrupt is safe
for your session and fatal to your teammates.

THREE COPIES OF THE OLD TEAM RULE HAD TO GO, and I found only one
of them myself. The one I found:
[parallel-lanes §Vehicles](../../../skills/parallel-lanes.md#vehicles)
carried "lead Fable/Opus, at most 4 Sonnet teammates" — stale AND
a one-home violation once teammates ride the lead's model, sitting
in the manual consulted before every dispatch, so it was reduced
to a pointer. That is the one ripple beyond the mandate's file
list, disclosed rather than smuggled; same class as the TEMPLATE
row on the previous bench, and taken for the same reason (the
retroactivity law requires the backfill in the PR that changes the
convention).

THE TWO THE CRITIC FOUND, and they were the better catches.
SETUP's own D-045 Hands rule still said "lead + 2–4 Sonnet 5
teammates" — EIGHT LINES BELOW the text this bench added to retire
exactly that default, inside a file I was already editing: I had
swept other files for duplicates and not the one under my hands.
And [reviewer-subagent](../../../specs/reviewer-subagent.md)
recorded "Model + effort — Sonnet 5 · high" as a RESOLVED FOUNDER
DECISION, with SETUP pointing every reader there as the critic's
frame — so it contradicted `.claude/agents/reviewer.md`, the very
file this bench changed.
[decide §2](../../../skills/decide.md)'s ripple checklist names
that case exactly ("update or mark superseded any spec the pivot
invalidates"), which is what separates it from frozen narrative in
history/. Both fixed in place with the supersession named inline,
so the founder's verbatim words keep their provenance while the
retired clauses stop contradicting their own files. Also taken:
two bare `D-055` mentions in the IDEAS lines — a weave-rule miss
`check:links` cannot catch, because it verifies resolution, not
completeness.

THE DECIDE GAINED ITS FORWARD POINTER because of the same pass.
D-055 retired a clause of D-045's doctrine and of D-020's team
rule, but said so only in its Affects line — so the two old
entries would have stood with no forward pointer while SETUP told
readers the retirement had happened "by D-055". Clause (5) now
names both retirements explicitly; the entries themselves stay
unedited under the log's append-only law, which is where a
forward pointer belongs.

THE CRITIC RAN AS SONNET 5 THE FIRST TIME — a live finding about
the change this bench just made. `.claude/agents/reviewer.md` now
says `model: opus`, but the first critic run reported itself as
`claude-sonnet-5`: the agent definition this session holds was
loaded at session start, when the file still said `sonnet`, and
editing the file mid-session does not re-cut it. So the new model
takes effect for sessions started after the merge, not for the
session that makes the change. To satisfy the mandate's
verification honestly rather than by assertion, the critic was
re-run with an explicit model override, and both runs are
reported.

THE EXTERNAL REVIEW, the mandatory one for a tower-authored diff:
PASS on `9b798b2`, ten files, gates re-run independently. Its
sharpest act was not accepting the bench's own account of the
verification order but CHECKING IT: it read the log and confirmed
`cb5648c` is memory-only and `7aa7a4e` is the first commit
touching `reviewer.md` — the order is checkable, not merely
claimed. It also independently reached the same verdict on all
three stale copies (one-home required them), confirmed the
carve-out appears in BOTH homes so the promise and its exception
cannot be read apart, and confirmed D-045 and D-020 stand
unedited under the append-only law with the forward pointer in
D-055.

THE DEFERRED GAP WAS AFFIRMED AND WIDENED at the gate. The
founder's word: the deferral is correct — a candidate clause in
IDEAS beats a silent drop — and the follow-up bench is bigger
than this bench saw. Not only [handoff](../../../skills/handoff.md)
needs to know about a live team: [land](../../../skills/land.md)
does too, since a flight can end with a team still running just as
a sitting can. That widening rides the IDEAS line.

## Where to look

- [the spec](../../../specs/agent-teams.md) — goal, plan, Done-means.
- [HOME](../../../HOME.md) — the boundary's home, beside the Command
  card.
- [LAWS](../../../LAWS.md) — the one no-solo-approval clause.
- [SETUP §Models & effort](../../../SETUP.md#once-and-done--cloud-accounts)
  — the founder-side config.
- [DECISIONS](../../../DECISIONS.md) — D-055, the entry this bench
  records.
- The official page: code.claude.com/docs/en/agent-teams.
