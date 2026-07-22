---
type: memory
id: lane-worker-baton
updated: 2026-07-22 · cockpit airborne ack · cockpit
---
# lane-worker-baton — the lane-worker charter's canary line names the baton-holder

## Status
airborne — [#191](https://github.com/wsher0901/roam/pull/191) ·
2026-07-22 · cockpit ack. Canary verified clean (memory-only); the
lane is cleared for real work — the one-line `docs/SETUP.md` edit.
Born by the cockpit on 2026-07-22, bench-first on fresh main (origin
tip 4af463f, #190 merged).

## What this task is
A single D-046 retroactivity straggler in
[`docs/SETUP.md`](../SETUP.md). The lane-worker charter master — the
fenced "You are a Roam cloud lane" box under
[SETUP §Once and done — cloud accounts](../SETUP.md#once-and-done--cloud-accounts) —
still tells a lane, at step 3, to "WAIT for **the control tower's**
airborne ack per §Canary before real work". The D-046 rename
([flight-cockpit](../specs/flight-cockpit.md), #177) swept every
lane-command-actor line to the BATON-HOLDER, but this box was missed.
The fix: change `the control tower's airborne ack` to
`the baton-holder's airborne ack` on that one line. That one phrase,
nothing else — the six other "control tower" mentions elsewhere in
`docs/SETUP.md` are legitimate ground-meaning and stay untouched.

## Pending issues
none — the change is fully specified; no spec, steps live here and in
the PR description.

## Left / idle
nothing parked — one line to edit, then push, confirm the pushed
commit's Actions run green, flip the PR ready, and post the
completion comment.

## The story
Born as the payload of the first end-to-end flight of the assembled
chain (D-046 + D-047): liftoff → cloud-born cockpit → label-spawned
lane → non-author cockpit review → the founder's word → landing. The
cockpit flies zero control-tower lanes this outing and births this
single bench itself, then label-spawns the one lane so the diff is
lane-authored — which makes a non-author cockpit review plus the
founder's word lawful without external Web review. The straggler
survived because the D-046 vocabulary sweep renamed lane-command-actor
lines to the baton-holder everywhere in living doctrine EXCEPT this
fenced charter box, whose text the sweep did not reach.

## Where to look
- Target line:
  [`docs/SETUP.md`](../SETUP.md) — the fenced "You are a Roam cloud
  lane" charter master, step 3's last sentence: "Otherwise WAIT for
  the control tower's airborne ack per §Canary before real work."
- Doctrine this aligns to:
  [parallel-lanes §Canary handshake](../skills/parallel-lanes.md#canary-handshake-both-sides) —
  the lane side there already reads "the baton-holder's
  acknowledgment".
- Why baton-holder: [flight-cockpit](../specs/flight-cockpit.md)
  (D-046) — the baton-holder is the lane-command actor (control tower
  on the ground, cockpit in flight).
