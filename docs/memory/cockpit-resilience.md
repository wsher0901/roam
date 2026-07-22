---
type: memory
id: cockpit-resilience
updated: 2026-07-22 · birth · work PC
---

# cockpit-resilience — a cockpit that survives, announces, and replaces its own connector loss

## Status

complete, awaiting merge — 2026-07-22, work PC. The five rungs,
the summon workflow, D-048, the corrections and the IDEAS triage
all landed; the declared file list held with nothing outside it.
The workflow was NOT fired and `ops/summon` was never pushed — the
first fire is the founder's, after the weld and after the two
repository secrets exist. Authored at this seat; the payload is
tower-authored, so external Web review precedes the founder's word
at the gate (no-solo-approval,
[LAWS §Workflow](../LAWS.md#workflow-non-negotiable)).

## What this task is

[#193](https://github.com/wsher0901/roam/pull/193) wrote down what
a cockpit can and cannot do once its GitHub connector dies: it
stays a full author, it stops being a commander. This bench gives
it the ladder back — five rungs (prevent · detect · repair in
place · degrade · self-rescue) plus explicit supersession — and the
decide, D-048, that settles which rescue vehicles are lawful.

The contract is [the spec](../specs/cockpit-resilience.md). The
first fire of the summon workflow is the FOUNDER's, after the weld:
this bench never fires it and never pushes `ops/summon`.

## Pending issues

Two clauses ship deliberately unproven, both marked in Done-means
and to be answered post-weld: whether a cloud session can revive
its own injected connector from the shell (rung 2b), and whether
the mobile app can create a session on a repo (rung 5). Neither can
be tested from a desk seat with a healthy connector — they need a
real flight and a real drill.

The decide also rests on external research rather than a live
probe: that cloud sessions get a session-scoped MCP injection and
no `gh` BY DESIGN. That claim now carries the whole "redundancy
inside the session is impossible" argument, so it is stated as
research-sourced and dated, not as something this repo proved.

## Left / idle

nothing parked. Two things wait on the founder rather than on
code, both recorded on the board at the tail: the REQUIRED
repository secrets (`COCKPIT_FIRE_TOKEN`, `COCKPIT_ROUTINE_ID`),
without which self-rescue reports `missing-secrets` and fails
honestly; and the OPTIONAL single web-side run, needed only if the
founder ever wants the mobile Run-workflow button to appear, since
GitHub Mobile hides it on a workflow with zero prior runs.

One verification is deferred by nature: GitHub registers a
workflow from the DEFAULT branch, so `summon.yml` cannot appear in
`gh workflow list` until this PR merges. Confirmed instead at the
bench: strict YAML parse, structural assertions on both triggers
and the ref delete, `bash -n` on every run block, and the
four-path behavioural test above.

## The story

Born bench-first at the control tower on the founder's mandate,
2026-07-22, from a fresh main tip (`13d669c`), origin heads =
`main` only — the STEP 0 gate, passed and recorded before the
branch existed.

The mandate arrived with its research already done, and that
research changed the shape of the answer. After
[#191](https://github.com/wsher0901/roam/pull/191)'s connector
loss, the obvious fix looked like redundancy: give the cockpit a
second API path. The research kills that idea at the root — cloud
sessions get a SESSION-SCOPED GitHub MCP injection and no `gh` CLI
by design, so there is no second path to give. What remains is a
ladder: prevent the drop where you can, detect it before you rely
on it, repair it in place if the client allows, keep working
git-only while it is down, and — when none of that works — reach
OUTSIDE the session for a replacement.

That last rung is why the summon workflow is triggered by a PUSH
as well as a button: a push is something a connector-dead cockpit
can still do, because pushing is git, not API.

The same reasoning is what kills merge-on-signal, which
[#193](https://github.com/wsher0901/roam/pull/193) had staged as
the permanent fix and which this bench was told to reject with
reasons. Writing those reasons out sharpened one of them: it is
not merely that merge-on-signal restores too little (it does — a
connector-dead cockpit still cannot spawn a lane or open a bench).
It is that every session pushes as the FOUNDER, so a
push-triggered merge has no way to tell the baton-holder from a
lane, or from a redelivered webhook — the identity the
no-solo-approval law depends on simply is not present in the
signal. A push-triggered SUMMON survives the same test only
because its worst failure is a stray spawn: one cap run of
recoverable noise, not a law quietly broken.

**A dead end worth recording, because it changed the shipped
code.** The fire step first extracted the session URL with
`grep -o 'https://[^[:space:]]*'`. Verifying it locally was
impossible: in this seat's Git Bash EVERY `grep` invocation
inside a script returns exit 2 and a usage banner — even
`grep --version` — so the step could not be exercised at all. The
pattern would have worked on `ubuntu-latest`, but "correct by
inspection, untestable at the seat" is a poor trade when a POSIX
alternative exists. The extraction is now
`sed -n 's|.*\(https://[^ ]*\).*|\1|p'`, which runs here, needs no
GNU extension, and — a real bonus — cannot fail the step on a
no-match, because sed exits 0 where `grep -o` exits 1. That
removed the `|| true` crutch the first draft needed.

With sed in place the step was exercised against a stub
`fire.mjs` on all four paths, and all four behave: a successful
fire exits 0 with `status=fired` and the URL captured · a failed
fire exits 1 with `status=failed` and an empty URL · absent
secrets exit 1 with `status=missing-secrets` before any network
call · and an optional `mandate` arrives appended to the pointer
payload as a single argument.

Two smaller hardening decisions, taken while writing rather than
asked for: the summary step takes its values through `env` instead
of interpolating `${{ }}` into the shell, because `mandate` is
founder-supplied text in a PUBLIC repo; and the checkout pins
`ref: main`, so a rescue always fires main's blessed `fire.mjs`
rather than whatever the pushed `ops/summon` commit happens to
carry.

## Where to look

- The contract: [the spec](../specs/cockpit-resilience.md) — the
  five rungs, the decide's clauses, Done-means including the two
  unproven ones.
- The dependency map this ladder climbs:
  [SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts),
  written by
  [flight-hardening](../history/workshop/mechanism/flight-hardening.md).
- The fire vehicle reused as-is:
  [`scripts/fire.mjs`](../../scripts/fire.mjs).
- The flight that motivated all of it:
  [lane-worker-baton](../history/workshop/mechanism/lane-worker-baton.md)
  ([#191](https://github.com/wsher0901/roam/pull/191)).
