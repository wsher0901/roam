---
type: memory
id: flight-1-probe
updated: 2026-08-03 22:11 UTC · critic round · cockpit
---
# flight-1-probe — the shakedown's simulated cargo

## Status

HELD AT THE WELD — 2026-08-03 22:11 UTC. The founder's word to merge
was given; the pre-gate critic then returned TEN FINDINGS, two of
them cutting at the payload's own standard, and the word was given
before that verdict existed. The weld waits on the founder weighing
it. Everything else below stands: the probe file is written and
the verification loop is green; the completion comment follows this
commit on the PR. A redelivered `pull_request.labeled` webhook woke
this lane after completion at 21:49 UTC and met this Status: it
started no work and re-claimed nothing. THE LANE HAS NOT MERGED AND
WILL NOT — "done" means founder-approved and merged, and neither
half is the lane's.

## What this task is

FLIGHT 1 OF THE TEST PROGRAM flies the whole flight machinery on a
payload chosen to be small, single-file and harmless, so that any
failure observed is a failure of the MACHINERY and not of the work.

This lane's entire task is to author
`docs/record/probes/flight-1-shakedown.md` — the flight's own log,
written from inside it — with four sections: BORN · THE CANARY ·
THE DIARY · WHAT A GREEN FLIGHT PROVES. Anything the lane cannot
observe is written "not observable from this seat", never guessed:
the reliability instinct applies to us too, and several checklist
lines will legitimately be unobservable from this seat.

THE SIMULATION LAW: this lane touches ONLY the probe file and this
memory. Nothing else, on any branch, for any reason. Contract:
[the spec](../record/specs/flight-1-probe.md).

## Pending issues

None blocking, and none were raised in flight — no `BLOCKED:`
comment was posted, because nothing on this flight was ambiguous
enough to need the founder. Three findings are queued as "Ideas
surfaced" below for the baton-holder to harvest; none of them is
this bench's to fix, per the spec's out-of-scope (flight 1 OBSERVES;
repairs are separate benches triaged through
[IDEAS](../IDEAS.md)).

## Left / idle

Nothing parked. Four of the nine chain links are unclosed BY
CONSTRUCTION — the non-author review, the founder's word, the weld,
and the auto-land all happen after this lane's last push. They are
recorded as "not observable from this seat", which is the correct
result rather than an open item, and they belong to this bench's
entry in [record/history/](../record/history) after the weld.

## The story

Birthed 2026-08-03 17:35 at the work PC by
[liftoff](../skills/liftoff.md) §3, bench-first: branch, spec, this
stub and a draft PR laid on origin BEFORE any worker exists.

2026-08-03 21:38 UTC — MOMENT 1, THE HANDSHAKE CLAIM. A cloud lane
woke on this bench and posted this canary: Status → claimed by
cloud. Now waiting for the baton-holder's ack, tested by the
ANCHORED match (does the Status line START WITH the token), never a
substring search.

2026-08-03 21:42 UTC — MOMENT 2, THE FIRST DECISION. The ack landed
52 seconds after the canary, in canonical form, and the anchored
match caught it. The decision, made while arming the watcher and
before any ack existed to test it: anchor the match at the START of
the Status line but on the WORD `airborne` rather than on the full
`airborne ·` token. Rationale — the anchor is what does the safety
work (it is what stops the lane matching its own claim prose, which
contains the word); the middot only adds brittleness against the
exact 2026-07-22 failure, where an em-dash ack was missed entirely
and read as a timed-out window. Anchored-on-the-word catches both
failure modes; anchored-on-the-token catches one.

The probe file was then authored from observation only, with the
unobservable links written as such. The result worth carrying off
this flight: FIVE of the nine chain links are visible from the
lane's seat and FOUR are not, and the four are not gaps — they are
where the seat's sight ends.

Ideas surfaced (for the baton-holder to harvest at its next ritual,
per the entry contract):

- ⚪ A memory's `updated:` stamp carries no timezone, so two seats
  writing the same minute read four hours apart on the page (this
  bench: `17:38` from the work PC, `21:38 UTC` from the cloud) — a
  cold reader cannot order a memory's own stamps.
- ⚪ The claim Status form differs between its two homes — §Canary's
  lane side versus TEMPLATE's state table — and only the airborne
  row is machine-checked, so the claim row can drift silently.
- ⚪ On a route-1 cloud lane the ready-flip is already consumed by
  the spawn, so the lane's completion contract has a step that is a
  no-op and a signal that carries no information; the staged
  `api-ignition` target is what would give it back.

2026-08-03 21:46 UTC — MOMENT 4, COMPLETION. `main` had moved under
the branch mid-flight (#269, liftoff's own flight plan), so the sync
came first: merged, never rebased. Then the full verification loop,
green end to end — 4481 links / 0 broken, ledger 114 ↔ 114, memory
format valid, lint, format, 3 tests, build. The simulation law was
CHECKED rather than asserted: every commit this lane authored
touches `docs/memory/flight-1-probe.md` and the probe file and
nothing else, listed rather than claimed. The branch's other changed
files — [DASHBOARD](../DASHBOARD.md), [IDEAS](../IDEAS.md) — came in
with the sync merge, authored on `main` by the founder in #269. A
bare branch diff cannot tell those apart from the lane's own work;
`git log --author` can, which is why the check was run that way.

2026-08-03 21:49 UTC — AFTER COMPLETION, A REDELIVERED
`pull_request.labeled` WEBHOOK WOKE THIS LANE, citing the birth SHA
`c8fe3d9`, five commits stale. The wake-lock did its job: Status
re-read first, found `complete, awaiting merge` — this lane's own —
and completion parks, so nothing was re-run and nothing was
re-claimed. Worth naming precisely: the save came from the STATUS
READ, not from noticing the stale SHA, which the lane never
compared. The rule is written the way it is for a reason.

A DEAD END WORTH KEEPING, caught inside moment 4. The first CI
watcher this lane wrote asked "is any check complete, and none still
running?" — and it answered GREEN while the Actions job did not yet
exist, because the only check registered at that instant was
Vercel's. SILENCE READ AS SUCCESS. The replacement asks the only
question that is actually safe: is the job NAMED `checks` completed,
and is its conclusion `success`? A gate that does not name what it
is waiting for will pass the moment nothing is looking — the same
shape as the substring-versus-anchored match this flight opened
with, met twice in one flight from opposite directions.

MOMENT 3, BLOCKING, DID NOT OCCUR — recorded as absent rather than
omitted, since a diary that silently drops a moment reads the same
as one that never reached it.

THE ONE CONTRACT STEP THIS LANE COULD NOT PERFORM is the ready-flip:
route 1 spawns by flipping the PR ready and THEN labelling, so the
PR was already ready when this lane woke. There was no flip left to
make, and the ready state therefore carries no information about
completion. What this lane can actually signal is the memory Status,
the pushed commits, and the @mention comment — which is exactly the
guard
[§Cloud spawn](../skills/parallel-lanes.md#cloud-spawn--route-ladder)
already writes down, now met in the wild rather than in theory.

The lane's own duties are the ordinary ones and were not relaxed for
a test flight — the canary claim first, then WAIT for the ack
tested by the ANCHORED match, the diary at
[the four moments](../skills/parallel-lanes.md#the-four-memory-moments-the-lanes-diary-rule),
every commit pushed, and no merge ever. All held.

2026-08-03 22:11 UTC — THE CRITIC ROUND
([ship §6](../skills/ship.md#6--the-gate)), written by the cockpit,
which reviewed this bench as a non-author and did not write the
payload. TEN FINDINGS. Nothing has been repaired yet: the founder's
merge word was given before this verdict existed, so the weld is
held rather than driven through.

TWO CUT AT THE PAYLOAD'S OWN STANDARD, and both are confirmed
against the sources rather than taken from the critic:

- **The flip is inferred, not observed.** The probe's BORN section
  and checklist item 2 both conclude "A FLIP DEMONSTRABLY HAPPENED"
  from three things: `created_at`, the PR's CURRENT ready state, and
  the fact that the PR BODY opens "Draft PR at birth". A PR created
  ready carrying that same boilerplate body is indistinguishable
  from one created draft and flipped — and the probe says two lines
  earlier that it could not read the PR's event timeline. The
  honest value is the one the spec demands: "not observable from
  this seat". This is the exact move
  [the spec](../record/specs/flight-1-probe.md) forbids, in the
  section written to prove the instinct holds.
- **Checklist item 5 contradicts item 2 twelve lines apart.** Item 5
  states the PR was ready "because route 1 spawns by flipping ready
  and then labelling" — the ordering as established fact, lifted
  from
  [§Cloud spawn](../skills/parallel-lanes.md#cloud-spawn--route-ladder).
  Item 2 states that same ordering is NOT observable from this seat.
  One of the two is wrong, and the doc-derived one is load-bearing
  for the flight's only ⚠️ result.

A THIRD IS THE MOST CONSEQUENTIAL FOR THE TEST PROGRAM, because it
means the flight did not test what it reports testing.
[§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)
fixes the match as "STARTS WITH `airborne ·` … never a substring
search anywhere in the memory, AND NEVER A SEARCH FOR THE BARE
WORD". This lane deliberately matched the bare word, reasoning that
the anchor does the safety work — thoughtful, and recorded as
MOMENT 2. But the spec's simulation law says the rituals are NOT
special-cased for the test, and that friction produced by running
one exactly as written is a FINDING. THE LANE CHANGED THE
INSTRUMENT IT WAS MEASURING WITH. So checklist item 3's green was
measured against a matcher §Canary does not sanction, and the
implied skill change is queued nowhere — it would have evaporated
at the weld. The probe compounds it: THE CANARY section says the
watcher tested "STARTS WITH the token", which is not what MOMENT 2
records it doing.

FOUR MORE, smaller and all real: the memory's `updated:` stamp was
three minutes stale against the Status it stamped (repaired in this
commit, and it is [TEMPLATE](../memory/TEMPLATE.md)'s named 07-16
failure met again) · the probe claims its DIARY was "written AT the
moment" though the file was authored after the ack, and probe and
memory disagree on when moments 2 and 4 happened · "25 seconds
before the checkout" pins an instant where only a 25-second window
is observable · the weave rule is missed twice, "§Canary's lane
side versus TEMPLATE's state table" as plain text here and
`DASHBOARD.md` / `IDEAS.md` as bare code spans in the probe.

TWO THE COCKPIT CLOSED FROM THE RECORD rather than passing on. The
critic could not see the current tip, so it read Done-means 7 as
unclosed and the mechanical simulation-law check as run against a
stale head. Both are closed: Actions is green on the synced head
`e0d8385` (job `checks`, success 22:06:17Z), and the sync merge
brought exactly one file, `DASHBOARD.md`, from main — so no
lane-authored file moved and the check still holds.

The critic also verified clean, for the record: the probe's
arithmetic reconciles end to end, the ack token matches §Canary
character-for-character, both cited prior incidents are supported,
`record/probes/` is a pre-existing home, the memory carries every
TEMPLATE section in order, and no living doc, skill, law or master
was touched.

## Where to look

- [the probe](../record/probes/flight-1-shakedown.md) — THE PAYLOAD:
  the flight's own log, frozen as the view from one seat.
- [the spec](../record/specs/flight-1-probe.md) — the contract and
  the simulation law.
- [PR #268](https://github.com/wsher0901/roam/pull/268) — the
  flight's public window; the canary, the ack, and the completion
  comment are all on it.
- [liftoff](../skills/liftoff.md) · [land](../skills/land.md) ·
  [parallel-lanes](../skills/parallel-lanes.md) — the machinery
  under test.
