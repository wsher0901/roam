---
type: chronicle-story
shelf: II — the lane system
status: living
updated: 2026-08-05 · its rejected-push clause observed · work PC
---

# The wake-lock — the only thing that can stop a running lane

> **CURRENT ENDING (2026-08-05).** The wake-lock is the workshop's
> single stop mechanism: on ANY wake — a resume, a redelivered
> webhook, a rejected push — a lane re-reads its memory Status from
> origin BEFORE anything else, and a Status it does not own means
> push nothing and terminate. It began as a paragraph inside a
> fleet-continuity decision, absorbed an idle-wait exception, and
> became the mechanism a landing's fence rides. Its
> redelivered-webhook path has fired repeatedly and harmlessly since
> 2026-07-16. **Its REJECTED-PUSH clause — the one that stops a
> worker mid-job — was observed for the first time on 2026-08-04**,
> twice in one flight, in both directions, each seat learning the
> other existed by being refused. It works. What that observation
> also proved is that a refusal leaves NO trace on the server, so
> that clause is invisible in operation unless the stopped worker
> says so before it dies.

## What it is

A rule with one job: **make a lane read before it writes.** Every
other guard in the workshop is about who may do what; this one is
about a worker that has already been overtaken and does not know it
yet.

Its current text lives in
[parallel-lanes §Wake-lock & parking](../skills/parallel-lanes.md#wake-lock--parking)
and reduces to three clauses:

1. On any resume or wake, re-read your memory Status FIRST.
2. **A rejected push IS a wake** — pull, re-read, obey, before any
   retry.
3. A Status you do not own — parked · respawned · superseded ·
   failed — means push nothing new, terminate.

## What raised it

Not a failure. It was reasoned into existence alongside the problem
it guards: once handoff could PARK a lane and liftoff could RESPAWN
one on the same branch, two sessions could believe they owned the
same bench. [D-032](../record/DECISIONS.md#d-032--fleet-continuity)
solved the ownership question with a Status word and then had to
answer the obvious follow-up — *what stops the lane that was already
running?* The answer was to make the Status the thing a lane reads
before it acts, and to make a push failure count as a reason to
read.

That ordering matters to how the story reads later: **the wake-lock
was built before anything went wrong. Its cheap path — killing
redelivered webhooks — started working immediately and has never
stopped. Its expensive path, stopping a live worker, went four
flights without once being observed.**

## What changed, in order

- **[D-032](../record/DECISIONS.md#d-032--fleet-continuity) — born
  inside fleet continuity.** Handoff FULL gains the park step;
  liftoff respawns parked benches on the same branch; and "the lane
  law grows the wake-lock: on any resume a lane re-reads its memory
  Status". It is a clause of a larger decision, not yet a named
  mechanism.
- **[D-041](../record/DECISIONS.md#d-041--delegation-architecture) —
  the idle-wait exception, which amends it.** A blocked lane on a
  phone-reachable vehicle (a cloud session, or a local session
  tethered by Remote Control) no longer parks: it stays alive,
  silent and zero-cost, waiting for the founder's reply to resume it
  in-thread. Only a bare detached background agent — invisible from
  the phone — still parks on block. The wake-lock stops being purely
  a kill switch and starts distinguishing *stopped* from *waiting*.
- **[D-042](../record/DECISIONS.md#d-042--lane-liveness) — liveness
  is derived, and it upholds the wake-lock rather than replacing
  it.** Live means a non-terminal Status plus a commit heartbeat
  inside the window; a terminal word outranks a fresh heartbeat.
  This is the pairing that makes the wake-lock a BACKSTOP: liveness
  is a judgement made from outside, and the wake-lock is what saves
  the case where that judgement was wrong.
- **[D-054](../record/DECISIONS.md#d-054--the-landing-skill) — the
  fence rides it.** Landing becomes a ritual, and MODE P's fence is
  a COMMIT on the lane's branch. The wake-lock is what converts that
  commit into a stop: the lane's next push is refused, it pulls, it
  reads a Status it does not own, it stands down. THE RESUME POINT
  IS THE BRANCH TIP BY CONSTRUCTION — nothing has to be recorded
  correctly for it to be right. [D-054](../record/DECISIONS.md#d-054--the-landing-skill) also attaches the **honesty
  clause**: this is wake-lock-mediated, not an interrupt, so a lane
  mid-turn may finish its current step, and a landing report states
  last-observed state rather than a guaranteed freeze.
- **Redelivered webhooks, every one a harmless death — and the
  record cannot agree on how many.** GitHub redelivers
  `pull_request.labeled` events, sometimes citing a head SHA several
  commits stale. The sightings the record NAMES: 2026-07-16 (the
  first) · flight 1, which calls itself "a second occurrence of the
  redelivery first recorded on 2026-07-16" · flight 2, which met
  **two** live, one within four minutes of its lane's first firing
  and one citing a five-commit-stale SHA · flight 3 · and flight 4.
  THE SOURCES NUMBER THEM DIFFERENTLY — flight 4's own log calls
  itself "at least the third", counting 2026-07-16, flight 1 and
  itself while skipping flights 2 and 3, where the inbox line counts
  flight 3 "a third" and flight 4 "a fourth" from another starting
  point. **NO TOTAL IS ASSERTED HERE**, because deriving one means
  choosing which source to believe; by enumeration it is at least
  six. Every one died the same way and for the same reason: the lane
  read its STATUS from origin rather than comparing the SHA the
  event handed it. This is the wake-lock's most-exercised path by a
  wide margin, and not one of them is the rule under test.
- **2026-08-04 — [flight 4](../record/probes/flight-4-freeze.md),
  the drill built to catch it.** Three flights had fenced a bench
  and none had ever observed the rejected-push rule, because every
  fence landed on a bench that had already FINISHED. Flight 4
  specced a bench to hold at a checkpoint for fifteen minutes so a
  fence would meet a worker that was still alive. The window ran
  20:53:54Z → 21:09:32Z and **closed unused** — the founder's word
  reached the cockpit about ninety seconds late. The drill's own
  answer is that null result.
- **And then it fired anyway, twice, outside the window.** The
  landing fenced the branch at 21:14:06Z; the lane committed its
  completion pass at 21:15:55Z, pushed, and **was refused**. It
  pulled, read `held — landed for local pickup`, recognised a Status
  it does not own, pushed nothing further and stood down. Minutes
  earlier the same mechanism had run the other way: the cockpit's
  own fence push at 21:12:22Z was refused by the lane's commit —
  though that half is the COCKPIT'S OWN ATTESTATION and nothing
  else, a document written by a seat that is gone, since neither the
  desk nor the lane watched it happen and no git object or API
  response records a refusal.
  **Both seats were live, both were moving, and each learned the
  other existed by being refused** — the second half on the
  cockpit's word. Recorded and quarantined as a
  post-window artifact of the landing ritual, never promoted to the
  drill's finding.

## Where it stands, and the part that is uncomfortable

The mechanism is proven. It stopped a live worker mid-job, in both
directions, on its first real contact — and the worker did exactly
what the rule says: pushed nothing, stood down where it was.

**But the observation nearly did not survive.** A rejected push
leaves no server-side trace: GitHub's events feed records accepted
pushes only, and both refusals are absent from it. The only reason
this story can be written is that the stopped lane wrote a PR
comment before its container died — after the cockpit had already
landed, so no board carries it, and its final commit was never
pushed. Had it stood down silently, the record would show a clean
chain of accepted pushes and a fourth flight concluding the rule was
still unobserved.

That is a live gap, not a resolved one. The lane law's
self-termination clause says a lane "self-terminates after pushing
what exists"; it does not say *say what stopped you*. Filed as an
inbox line, unruled.

One older gap stands beside it: [D-054](../record/DECISIONS.md#d-054--the-landing-skill)'s
honesty clause is a promise the workshop keeps by writing carefully
rather than by any mechanism — nothing forces a landing report to
say "last observed" instead of "frozen".

## Sources

Down-links only — this story cites the frozen record beneath it and
never another story's prose.

- [parallel-lanes §Wake-lock & parking](../skills/parallel-lanes.md#wake-lock--parking)
  — the rule's living text.
- [D-032](../record/DECISIONS.md#d-032--fleet-continuity) · birth ·
  [D-041](../record/DECISIONS.md#d-041--delegation-architecture) ·
  the idle-wait amendment ·
  [D-042](../record/DECISIONS.md#d-042--lane-liveness) · the
  liveness pairing ·
  [D-054](../record/DECISIONS.md#d-054--the-landing-skill) · the
  fence.
- [flight 4's log](../record/probes/flight-4-freeze.md) — the drill,
  the null result, and THE EXIT PUSH's account of both refusals.
- [flight 1's log](../record/probes/flight-1-shakedown.md) — its
  own redelivery, which it numbers the SECOND after 2026-07-16.
- Spans cited by the census: [#146](https://github.com/wsher0901/roam/pull/146)
  · [#153](https://github.com/wsher0901/roam/pull/153) ·
  [#180](https://github.com/wsher0901/roam/pull/180) ·
  [#191](https://github.com/wsher0901/roam/pull/191).
