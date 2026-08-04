---
type: memory
id: flight-4-freeze
updated: 2026-08-04 21:42 UTC · ship · work PC
---

# flight-4-freeze — the bench built to be caught mid-job

## Status

complete, awaiting merge — 2026-08-04

The probe is whole. The fence was released by the founder's word
"local flight-4-freeze" at the work PC on 2026-08-04, the branch
was adopted at this desk for zero cap runs
([pickup §6](../skills/pickup.md#6--fleet-resume-on-the-founders-answer)),
and the one remaining section — **THE EXIT PUSH** — is written.

⚠️ **THE DRILL'S ANSWER IS STILL THE NULL RESULT, and nothing
below changes it.** The window ran 20:53:54Z → 21:09:32Z and CLOSED
UNUSED: origin's head never moved while the lane held, and the lane
recorded that in `40685e4`. Everything that happened afterwards is a
post-window artifact of the landing ritual, labelled as such in the
probe, and no later reader may promote it.

**THE OPEN QUESTION THE FENCE LEFT IS ANSWERED, AND THE ANSWER IS
YES.** The fence met a live worker. The lane was still running at
21:14:06Z, committed its completion pass locally at 21:15:55Z,
pushed, and **that push was rejected** non-fast-forward; it then
read the fence Status from origin at 21:16:11Z, recognised a
terminal Status it does not own, pushed nothing further, and stood
down. The verbatim refusal — honestly labelled as the TAIL of the
message, since the lane's own command piped git through `tail -3`
and the `! [rejected]` lines were lost before any seat could read
them — is in the probe under its own heading.

**HOW THAT ANSWER SURVIVED, which is the load-bearing part.** It
reached the record through THE MAIL SLOT, not through git: the lane
posted a stand-down comment on
[#303](https://github.com/wsher0901/roam/pull/303#issuecomment-5184732402)
at 21:17:42Z — after the cockpit had landed and painted its board,
which is why no board carries it. Its final local commit `29a0bd0`
was never pushed and died with the container. A rejected push leaves
NO server-side trace (verified twice this flight, in both
directions), so had the lane stood down silently, the record would
show a clean chain of accepted pushes and the rejection would have
left no evidence anywhere.

**How much of the spec is done: all five Done-means bullets hold.**
The checkpoint commit exists · the hold was honoured for its full
window with NO fetch at all, stricter than the no-rebase rule the
spec fixes · the exit was a plain push attempt and BOTH outcomes are
now recorded as observed — the accepted exit push, and the
post-window rejection with its verbatim text · the observability law
holds throughout, with the change of authoring seat handled by
attribution rather than pretence · the diff touches exactly the two
sanctioned files.

**Deviation from the spec, stated plainly.** The spec assumed one
seat would write the whole probe. It did not: the lane wrote BORN,
THE CHECKPOINT and THE WINDOW CLOSED UNUSED, and this desk wrote THE
EXIT PUSH after adopting the bench. The section opens by naming its
own author and its three sources, and every fact in it is attributed
to the seat that observed it — the flight-1 precedent for a later
seat editing a lane's probe.

## What this task is

FLIGHT 4 OF THE TEST PROGRAM — the failure drill. This bench
authors `docs/record/probes/flight-4-freeze.md`, the drill's own
log, and HOLDS at a checkpoint partway through so that a fence
landing on this branch meets a worker that is still alive.

THE HOLD IS THE CARGO. Three flights have fenced a bench and none
has observed
[the wake-lock's rejected-push rule](../skills/parallel-lanes.md#wake-lock--parking)
— does a fence actually STOP a live worker — because every fence so
far landed on a bench that had already finished. This bench is
specced to be caught.

The full contract, including the three-step checkpoint and the
null-result rule: [the spec](../record/specs/flight-4-freeze.md).
TWO FILES ONLY — the probe and this memory.

## Pending issues

None. The hold is over and nothing is blocked.

## Left / idle

Nothing on this bench. Two things belong to the flight rather than
to the bench and are owed AFTER the weld: the harvest of the ideas
below into [IDEAS](../IDEAS.md) — a lane may not write it, so
ship's tail does — and the SUMMON test, flight 4's third item under
test, still unflown.

## Ideas surfaced

- §Canary disagrees with itself about the ack token's middle field:
  the canonical block reads `airborne · <url> · <date>`, the
  baton-holder bullet says `airborne · <vehicle or url> · <date>`.
  This flight's ack wrote a vehicle (`cloud`) — canonical under the
  bullet, not under the block. Nothing broke; the section simply
  cannot be quoted from one place. Detail in the probe's THE
  CHECKPOINT.
- A cloud lane's remote is not a constant across flights: flight 1
  observed a local HTTP git proxy on `127.0.0.1`, this flight
  observed `github.com` directly, same spawn route, a day apart.
  Worth knowing before any doctrine is written that assumes one.
- The freeze drill's apparatus works and is re-flyable as-is; only
  the fence was missing. If it is re-flown, the variable to change
  is the fence side — the hold produced a live, stopped worker for
  16 minutes and would have produced one for any window asked of
  it. Whether 15 minutes is enough for a fence to be summoned is
  not a lane's call.
- A lane holding for a signal should poll with `git ls-remote`, not
  `git fetch`: it reads origin without writing local refs, so no
  later step can fast-forward past what it was watching for. Cheap,
  and it makes a whole class of self-inflicted contamination
  impossible. Candidate line for
  [§Wake-lock](../skills/parallel-lanes.md#wake-lock--parking).
- **A REJECTED PUSH IS INVISIBLE TO EVERY SEAT BUT THE ONE REFUSED,
  and the record has no channel for it but speech.** Verified twice
  this flight, in both directions. A lane that stands down silently
  destroys the only evidence that the wake-lock fired at all — so
  the stand-down comment should arguably be a DUTY of the lane law's
  self-termination clause, not a courtesy this lane happened to
  extend. This is the flight's most doctrinal finding.
- GitHub's repository events API is NOT a complete push log: the
  checkpoint push `c08a079..d5347ca` has no `PushEvent`, while its
  neighbours on the same ref before and after both do. Corroborating
  instrument only; the git objects are primary.
- The two seats derived window edges ~40 seconds apart (board
  21:08:52, lane 21:09:32) because each counted from its own event —
  the push versus the first read of origin. Both correct under the
  derivation law; a lane that had trusted the board's close over its
  own would have exited early. Worth a line wherever a window is
  specced.
- The drill's only untested link is its one UN-AUTOMATED link. The
  lane signalled, the cockpit seated inside the window, saw the
  checkpoint commit and published the deadline; what did not arrive
  in time was the founder's three words. Re-flying with a different
  lane or a different cockpit changes nothing — the variable is the
  fence's human gate, and the likely fix is ORDERING, not duration.

## The story

2026-08-04 21:42 UTC · adopted at the desk, and the fence's open
question answered · work PC — the founder said "local
flight-4-freeze" at the sit-down, so the bench came HERE rather than
back to the cloud: zero cap runs, and the branch tip was the resume
point exactly as the fence promised.

THE FIRST ACT WAS NOT WRITING — IT WAS LOOKING FOR THE ANSWER THE
FENCE SAID ONLY THIS BRANCH COULD GIVE. It was not on the branch. It
was in a PR comment the lane posted at 21:17:42Z, three and a half
minutes after the fence landed and after the cockpit had already
painted its board and gone. The lane had been alive, had been
refused, and had written down what it saw before dying. Everything
this desk added to the probe's last section rests on that comment
plus two instruments of its own: the git objects, and GitHub's
events API.

THE EVENTS API EARNED A CAVEAT WHILE BEING USED. It carries the
accepted pushes on this ref at 20:49:04Z, 20:50:15Z, 21:11:40Z and
21:14:06Z — enough to prove the exit push was a clean fast-forward
from the SHA the hold started on, `before` field and all — but it is
MISSING the checkpoint push itself, the single most important push
of the drill, while carrying both of its same-ref neighbours. A desk
treating that feed as a ledger would have concluded the checkpoint
never happened. It is corroboration, never a primary source.

AND THE TWO ABSENCES IN THAT FEED ARE THEMSELVES THE FINDING: the
cockpit's refused push at 21:12:22Z and the lane's refused push at
~21:15:5xZ are both invisible, because a refusal is a thing the
server declines to record. The wake-lock's rejected-push rule fired
twice this flight and left no trace anywhere except in one comment
written by a container that no longer exists.

THE AUTHORING SEAT CHANGED MID-DOCUMENT, and that was handled by
attribution rather than by pretending otherwise — the section names
its own author, its three sources, and which seat saw each fact.
[Flight 1's log](../record/probes/flight-1-shakedown.md) set the
precedent for a later seat editing a lane's probe: say what changed
and why, and never add to the original seat's observations.

2026-08-04 21:10 UTC · the hold closed unused · cloud lane — the
15-minute window ran out with origin's head unmoved at `d5347ca`
and no ack-to-proceed comment on
[#303](https://github.com/wsher0901/roam/pull/303). The bench held
the alive-and-stopped state for the whole window — the state three
previous flights could not offer a fence — and the fence did not
come. THE RULE UNDER TEST IS STILL UNOBSERVED, but for a new
reason: before, there was no live worker to stop; this time there
was one, and no event arrived. WHY is not observable from this
seat, and the probe says so rather than guessing.

One instrument decision worth keeping: the hold polled with
`git ls-remote` and never fetched, so a fast-forward past a fence
was impossible by construction rather than avoided by discipline.
For a drill whose experiment a single reflexive `git pull` would
destroy, that is the difference between a safeguard and an
intention.

2026-08-04 20:53 UTC · MOMENT 2, the checkpoint · cloud lane — the
probe's BORN and THE CHECKPOINT are written and this commit pushes
them. THE DECISION RECORDED HERE IS THE MATCHER: this lane armed
the anchored test on the FULL token `airborne ·`, the form
[§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)
fixes, and not on the bare word that
[flight 1](../record/probes/flight-1-shakedown.md) substituted and
recorded as its most consequential finding. That choice is what
makes this flight's handshake green a green for the contract rather
than for a modified instrument. The ack itself arrived as commit
`c08a079` at 20:50:12Z and was read back from origin at 20:50:27Z —
85 seconds after the canary, ~14% of the window.

A redelivered `pull_request.labeled` webhook citing the birth SHA
`771bd45` — two commits stale — reached this session at ~20:50:2x.
The wake-lock was obeyed: Status re-read from origin FIRST, no
duplicate claim, no second canary. Third recorded occurrence of
that redelivery, third harmless death.

2026-08-04 20:48 UTC · canary claim · cloud lane — claimed by a
cloud session on branch `docs/flight-4-freeze`, PR
[#303](https://github.com/wsher0901/roam/pull/303), spawned by the
`lane:cloud` label. This commit IS the canary. Nothing else has
been touched, and nothing will be until an ack COMMIT is read back
from origin with its Status line beginning with the anchored token
([§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides))
— no message arriving in this session licenses this lane.

2026-08-04 20:45 UTC · bench birth · work PC — born bench-first by
the control tower as flight 4's sole cargo, from the founder's
mandate of the same date (approved in the Web ops chat).

THE FAILURES IN THIS FLIGHT ARE COMMANDED, NOT SIMULATED, and that
distinction is the flight's whole method: nothing is special-cased,
every ritual runs exactly as written, and the machinery is allowed
to meet a real fence rather than a rehearsed one. Three things are
under test across the flight — this bench carries the first:

1. **The rejected-push rule** (this bench) — a fence meeting a live
   worker for the first time.
2. **The connector recovery ladder** — the cockpit performs one
   command read with rung 1 treated as dead, and reports the climb.
   Not observable from this seat.
3. **The summon workflow** — fired after the weld, its routine-born
   cockpit being the v4 charter box's first live test. Also not
   observable from this seat.

THE ONE INSTRUCTION THAT CAN DESTROY THE EXPERIMENT, restated here
because a lane reads its memory before it reads anything else: do
NOT fetch-and-rebase during the hold. The hold exits with a plain
push attempt, so that a fence landed meanwhile is met as a rejected
push. A rebase would convert the rejection into a fast-forward and
the flight would observe nothing.

If no fence arrives, that is a real result and it gets written as
one — section THE WINDOW CLOSED UNUSED. A staged or narrated
rejection would be worse than no flight at all.

## Where to look

- [the spec](../record/specs/flight-4-freeze.md) — the contract,
  including the three-step checkpoint and the null-result rule.
- [the lane's stand-down comment](https://github.com/wsher0901/roam/pull/303#issuecomment-5184732402)
  — the only witness to the lane's last four minutes: the rejection,
  the sync-merge finding, and the ideas it could not commit. Read it
  before doubting anything in THE EXIT PUSH.
- [flight 1's log](../record/probes/flight-1-shakedown.md) — the
  probe shape this bench's payload follows, and the home of the
  observability law it inherits.
- [§Wake-lock](../skills/parallel-lanes.md#wake-lock--parking) —
  the rule under test: a rejected push is a wake, and a Status the
  lane does not own is terminal.
- [§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)
  — the handshake this bench flies, ack token and all.
- [land MODE P](../skills/land.md#mode-p--pause-and-transfer-the-founder-is-going-local)
  — what a fence IS, and why the push is the fence.
- [D-074](../record/DECISIONS.md#d-074--phase-1-closes-on-flights-3-and-4)
  — why this flight exists.
