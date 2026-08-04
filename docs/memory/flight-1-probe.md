---
type: memory
id: flight-1-probe
updated: 2026-08-04 13:09 UTC · respawn fence · cockpit
---
# flight-1-probe — the shakedown's simulated cargo

## Status

respawned — cloud · 2026-08-04. The founder ruled "lane" on the
held weld: a FRESH cloud lane repairs this log's own epistemic
faults, so authorship stays off the cockpit and the non-author
review survives. The prior worker owns nothing here and
self-terminates on sight of this line. The repair brief is in
PENDING ISSUES below and it is the whole of the next lane's job.

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

THE REPAIR BRIEF — the whole of the next lane's job, and nothing
beyond it. Every item below came from the pre-gate critic
([ship §6](../skills/ship.md#6--the-gate)) and was CONFIRMED against
the sources by the cockpit before being written here. The critic
round further down the story carries the reasoning; this is the
work list.

THE SIMULATION LAW STILL BINDS: touch ONLY
`docs/record/probes/flight-1-shakedown.md` and this memory. Never
merge. Do not touch the spec, the board,
[IDEAS](../IDEAS.md), any skill, any law, or any master.

1. **THE FLIP IS INFERRED — say so.** In BORN and again in
   checklist item 2, the probe concludes "A FLIP DEMONSTRABLY
   HAPPENED" from `created_at`, the PR's CURRENT ready state, and
   the PR BODY's opening words "Draft PR at birth". A body string
   is boilerplate written at birth; it cannot witness a state
   transition, and a PR created ready carrying that same body is
   indistinguishable from one created draft and flipped. The probe
   itself says two lines earlier that it could not read the event
   timeline. REPLACE the conclusion with what the seat actually
   saw: the PR was NOT draft when read, and whether a flip ever
   occurred is NOT OBSERVABLE FROM THIS SEAT — the exact words.
2. **ITEM 5 CONTRADICTS ITEM 2 — resolve it toward the honest
   side.** Item 5 gives the ready state a cause — "because route 1
   spawns by flipping ready and then labelling" — which is lifted
   from
   [§Cloud spawn](../skills/parallel-lanes.md#cloud-spawn--route-ladder),
   not observed, while item 2 declares that same ordering
   unobservable. Keep item 5's OBSERVATION (the PR was already
   ready, so no flip was left to perform, so the ready state
   carries no completion information) and drop the doc-derived
   CAUSE, or mark it plainly as read from the skill rather than
   seen.
3. **THE CANARY SECTION MISREPORTS ITS OWN INSTRUMENT.** It says
   the watcher tested "STARTS WITH the token"; MOMENT 2 records
   that it anchored on the bare word `airborne`. Correct the
   CANARY section to what was actually armed.
4. **THE BIG ONE — RECORD THAT THE INSTRUMENT WAS CHANGED.**
   [§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)
   fixes the match as "STARTS WITH `airborne ·` … never a
   substring search anywhere in the memory, AND NEVER A SEARCH FOR
   THE BARE WORD". This lane matched the bare word deliberately,
   and its reasoning was good — but
   [the spec](../record/specs/flight-1-probe.md)'s simulation law
   says the rituals are NOT special-cased for the test, and that
   friction from running one exactly as written is a FINDING.
   THE LANE CHANGED THE INSTRUMENT IT WAS MEASURING WITH, so
   checklist item 3's green was measured against a matcher the
   contract does not sanction. Write this into the probe as its
   own finding, and downgrade item 3 accordingly — it is no longer
   a clean ✅. Add the implied skill question to the probe's
   findings so it does not evaporate: should §Canary's match
   anchor on the word rather than the token, given an em-dash ack
   is the failure it was written against?
5. **THE DIARY'S AT-THE-MOMENT CLAIM IS TOO STRONG.** The probe
   says its diary was "written AT the moment rather than
   reconstructed at the end", but the probe file was authored only
   after the ack, so MOMENT 1 and MOMENT 2 are transcriptions —
   the memory earned that property, the probe inherited it. Say
   which moments were live and which were transcribed. While
   there, reconcile the two files' stamps: the probe puts MOMENT 2
   at 21:38 and MOMENT 4 at 21:45; this memory puts them at 21:42
   and 21:46.
6. **A WINDOW IS NOT AN INSTANT.** BORN says the flip happened "25
   seconds before the container's own checkout". Only a
   25-second WINDOW is observable. Item 2 already states it
   correctly — make BORN match.
7. **TWO WEAVE MISSES.** In the probe, `DASHBOARD.md` and
   `IDEAS.md` appear as bare code spans where they should be
   links. In this memory's "Ideas surfaced" list, "§Canary's lane
   side versus TEMPLATE's state table" is plain text where both
   are linked elsewhere in the same file.
8. **DO NOT SILENTLY BREAK THE FREEZE.** The probe declares itself
   frozen as written. These repairs do not violate that — they
   REMOVE claims the seat could not support, which is the freeze's
   own principle — but the file must say so: add one dated line
   recording that it was repaired on 2026-08-04 at the founder's
   ruling, after the critic round, and naming what changed. A
   reader must never find a silently edited "frozen" record.

WHAT IS ALREADY CLOSED, so you do not redo it: Actions was green
on head `e0d8385`, and the mechanical simulation-law check still
holds — the sync merges brought only `DASHBOARD.md` and
`IDEAS.md` from main, no lane-authored file moved.

WHEN DONE: full verification loop, push every commit, flip nothing
(the PR is already ready — that is finding 3 of the flight), post
the completion comment, and STOP. The cockpit reviews as a
non-author and the founder's word does the rest.

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
