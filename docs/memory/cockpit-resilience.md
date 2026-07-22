---
type: memory
id: cockpit-resilience
updated: 2026-07-22 · birth · work PC
---

# cockpit-resilience — a cockpit that survives, announces, and replaces its own connector loss

## Status

bench ready, no worker yet — birthed 2026-07-22 by the control
tower (work PC), from main's fresh tip `13d669c` with origin heads
= `main` only. Authored at this seat; the payload is
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

nothing parked. The bench is birthed and the work has not started.

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
