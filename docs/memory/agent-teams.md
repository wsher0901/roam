---
type: memory
id: agent-teams
updated: 2026-07-24 16:04 · birth · work PC
---

# agent-teams — where teams fit, and where they must not (D-055)

## Status

bench ready — birthed 2026-07-24 16:04 by the control tower at the
work PC, which flies it itself (no lane; tower-authored, so the
no-solo-approval law puts an external Web review before the
founder's word). Branch `docs/agent-teams`, born from `fa38619`
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
built here. Contract: [the spec](../specs/agent-teams.md).

## Pending issues

None yet.

## Left / idle

Everything: the bench is birthed, the payload is unwritten. Order
of work is the spec's Plan 1–7, with step 4's verification
recorded here BEFORE `.claude/agents/reviewer.md` is touched.

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
teammates that no longer exist. Two facts the page adds, both
load-bearing for this bench: "One team per session" and "No
nested teams" — which independently justify the cockpit
rejection — and split-pane mode is explicitly unsupported in
Windows Terminal, which is what both seats run.

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
put it in [parallel-lanes](../skills/parallel-lanes.md) — it is
about parallelism — but that is the LANE manual, and filing the
team rules there would have implied teams are a lane vehicle,
which is precisely the claim this bench denies. So the boundary
lives in [HOME](../HOME.md) beside the Command card (it is a
founder-facing standing choice), and parallel-lanes keeps one
line saying teams are NOT a lane vehicle, pointing home.

THE CARVE-OUT WAS WRITTEN TWICE ON PURPOSE, in both places the
interrupt promise is actually read: the full statement in
HOME §Agent teams risk (a), and a clause on the Command card's
Esc line — because that line is where a founder meets the promise
"Esc is safe", and a promise and its exception must not live one
scroll apart. The sentence that ties them: an interrupt is safe
for your session and fatal to your teammates.

ONE RIPPLE BEYOND THE MANDATE'S FILE LIST, disclosed rather than
smuggled. parallel-lanes §Vehicles carried a second copy of the
team rules — "lead Fable/Opus, at most 4 Sonnet teammates". Once
teammates ride the LEAD's model by config, that line is stale AND
a one-home violation, and it sits in the manual consulted before
every dispatch, so it was reduced to a pointer. Same class as the
TEMPLATE row on the previous bench, and taken for the same
reason: the retroactivity law requires the backfill in the PR
that changes the convention.

## Where to look

- [the spec](../specs/agent-teams.md) — goal, plan, Done-means.
- [HOME](../HOME.md) — the boundary's home, beside the Command
  card.
- [LAWS](../LAWS.md) — the one no-solo-approval clause.
- [SETUP §Models & effort](../SETUP.md#once-and-done--cloud-accounts)
  — the founder-side config.
- [DECISIONS](../DECISIONS.md) — D-055, the entry this bench
  records.
- The official page: code.claude.com/docs/en/agent-teams.
