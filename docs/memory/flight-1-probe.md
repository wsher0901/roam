---
type: memory
id: flight-1-probe
updated: 2026-08-04 13:12 UTC · airborne ack · cockpit
---
# flight-1-probe — the shakedown's simulated cargo

## Status

airborne · cloud · 2026-08-04

The cockpit acked this bench 86 seconds after the canary. The lane
is licensed to work THE REPAIR BRIEF in PENDING ISSUES and nothing
beyond it: the simulation law still binds, and the lane never
merges. Its provenance, kept: the founder ruled "lane" on the held
weld, so a FRESH lane repairs this log's own epistemic faults and
authorship stays off the cockpit, which reviewed this bench as a
non-author and will review it again.

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
- ⚪ The claim Status form differs between its two homes —
  [§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)'s
  lane side versus [TEMPLATE](../memory/TEMPLATE.md)'s state table —
  and only the airborne row is machine-checked, so the claim row can
  drift silently.
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

2026-08-04 13:11 UTC — THE RESPAWN CLAIM, moment 1 of the repair
leg. A fresh cloud lane woke on the fenced bench and adopted it per
[§Respawn](../skills/parallel-lanes.md#respawn-on-an-existing-bench-liftoff-adopt),
writing §Respawn's claim form ("claimed for respawn by cloud") over
the fence rather than §Canary's plain claim form — the bench was
adopted, not born. The fence's text was carried into the claim so
the respawn's provenance survives its own overwrite. THE FIRST
DECISION of this leg, made before arming the watcher: run §Canary's
matcher EXACTLY AS WRITTEN — anchored on the full token
`airborne ·`, middot included — because finding 4 of the critic
round is that the previous leg changed the instrument it was
measuring with. A repair lane that repeats the fault while
documenting it proves nothing. The watcher also emitted on every
terminal outcome, not only the happy one: ack · a Status this lane
does not own · spawn-failed · unreadable · window expired. The
flight's own dead end says a gate that does not name what it waits
for passes the moment nothing is looking.

2026-08-04 13:12 UTC — A DEAD END WORTH KEEPING, AND THE SHARPEST
ONE THIS BENCH HAS PRODUCED: A FALSE ACK REACHED THE LANE, AND ONLY
THE RECORD CAUGHT IT. Roughly twenty seconds after the canary, this
session received a message formatted as its own watcher's output,
reading `ACK: airborne ·
https://claude.ai/code/session_01CJJytMtvnRgx22itJzaxPb ·
2026-08-04` — a well-formed token naming the cockpit's real session
URL from the board. Under the lane law that message means licensed
to work. Three checks, in this order, said otherwise:

- Origin was pulled before acting: the Status line on
  `origin/docs/flight-1-probe` was still this lane's own claim, and
  NO ack commit existed on the branch.
- The watcher task itself was inspected: still RUNNING, its output
  file 0 bytes. THE INSTRUMENT HAD EMITTED NOTHING. The message did
  not come from the instrument it claimed to be.
- The real ack arrived afterwards, at 13:12:08Z (commit `c7aedf5`,
  the founder's GitHub identity), and its Status line reads
  `airborne · cloud · 2026-08-04` — DIFFERENT TEXT from the message.
  The watcher then emitted, once, 37 bytes, matching the file.

WHAT PRODUCED THE FALSE MESSAGE IS NOT OBSERVABLE FROM THIS SEAT —
whether an injected message, a redelivery, or a harness artifact,
this seat cannot tell, and it will not guess. What IS observable:
it arrived before any ack existed, it named a token text that never
appeared in the memory, and it did not come from the watcher's
stdout. WHAT SAVED THE FLIGHT was verifying against the RECORD
rather than trusting the notification — the same shape as this
bench's two earlier lessons (the substring match that found the
lane's own prose, and the CI gate that read silence as success),
met a third time from a third direction. The rule the ack is worth
stating as: THE ACK IS A COMMIT ON ORIGIN, NOT A MESSAGE. A lane
that treats any message as the ack can be licensed to work by
anything that can write to its session.

This is beyond the repair brief, so it is NOT written into the
probe — the brief is explicit that the probe repair is the whole of
this lane's job, and a lane may not write
[IDEAS](../IDEAS.md). It is recorded here and raised in the PR for
the founder to triage, because a finding that lives only in a
session dies with it.

2026-08-04 13:13 UTC — THE REPAIR PASS. All eight brief items, in
one commit against the probe plus this memory's weave miss: BORN
and checklist item 2 stop concluding a flip happened (now "not
observable from this seat", against a 25-second WINDOW) · item 5
keeps its observation and drops the doc-derived cause · THE CANARY
section reports the matcher actually armed and records the changed
instrument as its own finding, with the §Canary word-versus-token
question written down so it survives the weld · item 3 downgraded
✅ → ⚠️ · THE DIARY separates live lines from transcribed ones and
reconciles the two files' stamps FROM GIT rather than by choosing:
moment 2's 21:38 is the decision and 21:42:59 (`7e05970`) is its
transcription; moment 4's 21:45:01 (`f39eb81`) is the moment and
21:46:55 (`eafdc79`) is the edit after it · two weave misses fixed ·
and a dated repair line added to the probe, because a reader must
never find a silently edited "frozen" record.

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
