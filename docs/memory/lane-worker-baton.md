---
type: memory
id: lane-worker-baton
updated: 2026-07-22 · lane complete · cloud
---
# lane-worker-baton — the lane-worker charter's canary line names the baton-holder

## Status
complete — 2026-07-22, awaiting review + the founder's word. The
one-line `docs/SETUP.md` edit is made and pushed: the lane-worker
charter box's step-3 last sentence now reads "WAIT for the
**baton-holder's** airborne ack per §Canary" (was "the control
tower's"). The six other "control tower" mentions in `docs/SETUP.md`
are legitimate ground-meaning and stay untouched. Canary claim and
cockpit airborne ack ([#191](https://github.com/wsher0901/roam/pull/191))
both exchanged; PR ready-flip pending green Actions. Born by the
cockpit on 2026-07-22, bench-first on fresh main (origin tip 4af463f,
#190 merged).

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
nothing parked — the edit is done and pushed. Remaining before
merge: green Actions on the pushed commit, ready-flip, completion
comment, then the non-author cockpit review + the founder's word.

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

The handshake had one wrinkle worth recording: the lane's canary
(a6b0552, 15:43 UTC) posted cleanly, but the cockpit's first airborne
ack (4511b14) landed as the ~10-min window elapsed and used an
em-dash ("airborne — #191") rather than the middot the lane's poll
filtered for, so the lane first read the window as timed out and
staged a clean stand-down. The wake-lock caught it: the stand-down
push was rejected (origin had moved), and re-reading the Status
showed the real "cleared for real work" ack — so the lane dropped the
stand-down and did the edit. The cockpit then re-stamped its ack in
the §Canary contract form (3693e48, middot). No harm done; a lesson
for the ack-format/poll match if the flight is repeated.

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
