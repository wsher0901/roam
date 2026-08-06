---
type: memory
id: chronicle-shelf-1-away
updated: 2026-08-06 17:25 UTC · ship · rulings applied · work PC
---

# chronicle-shelf-1-away — Shelf I — the away surface

## Status

complete, awaiting merge — 2026-08-06

Eleven stories written by a cloud lane, reviewed non-author at the
work PC, and repaired under the founder's two rulings. Merging under **D-079**'s advance word — green CI on the exact head
plus a non-author review clean or repaired. (Named, not linked: that
entry rides its own PR and does not reach main until it merges, the
in-flight-decision case already filed as an inbox line.)

## What this task is

The 11 unwritten stories of **Shelf I — the away surface** — how the founder leaves the desk and commands from away. One of seven
benches flying as a single fleet under
[D-078](../record/DECISIONS.md#d-078--the-55-re-ruled-on-the-cold-number).

The contract, the roster, and the one rule that makes the fleet
lawful — **do not write the INDEX** —
[the spec](../record/specs/chronicle-shelf-1-away.md).

## Pending issues

**None on the payload.** The eleven stories are written, the loop is
green, and nothing about this bench needs a decision.

**THREE THINGS FOR THE FOUNDER, none of them this bench's to rule.**

1. **[#331](https://github.com/wsher0901/roam/pull/331) is dead with
   zero payload and its Status still reads `airborne · cloud`** —
   found by the stood-down sibling's read-only liveness sweep, and
   the most urgent item here. It was acked 11 min 13 s after its
   canary, past the window, and has written nothing since. **A
   stale AIRBORNE Status makes a dead lane look alive**, which is
   the dangerous direction of the two.
2. **One label can spawn a session more than once.** Proved, not
   guessed: a third `pull_request.labeled` firing arrived for this
   PR carrying `Head SHA: ab39d2b`, a tip three commits stale — so
   it was a REDELIVERY of the original event. The ack token names a
   BENCH and a VEHICLE CLASS, never a session, so it cannot tell
   repeat claimants apart. Whether to close that gap in
   [§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)
   is a founder call.
3. **The go-remote keep-or-retire ruling is now DUE.** Its
   [IDEAS](../IDEAS.md) line defers the call until "a real cloud
   flight proves the cloud path"; flights 1–4 flew 2026-08-03 → 05,
   so the precondition is met and the line is still open. Surfaced
   in [the story](../chronicle/go-remote.md) rather than ruled here.

## Left / idle

**Nothing parked.** Plan steps 1–3 are all done: the stories are
written, every ending derived at write time, and the cost measured
below. The bench runs to THE GATE and stops there — a lane never
merges, never ticks the [ROADMAP](../ROADMAP.md), never writes
[DASHBOARD](../DASHBOARD.md), [IDEAS](../IDEAS.md) or the INDEX.

## The story

2026-08-06 17:25 UTC · THE TWO RULINGS — ONE APPLIED, ONE FOUND
MOOT BY THE REVIEWER'S OWN ERROR · work PC control tower

**RULING 1 IS APPLIED, AND IT IS
[D-080](../record/DECISIONS.md#d-080--a-story-may-link-a-sibling-never-quote-it).**
This lane broke ruling 5 twenty-two times across 8 of its 11
stories; the other four lanes of the fleet broke it ZERO times
across 26 stories. That distribution was the whole argument: Shelf I
is the one shelf whose items are DEFINED BY EACH OTHER — the
away-mode chooser IS the fork between handoff, liftoff, go-remote
and land. The founder ruled the link-only carve-out: a story may
LINK a sibling, never quote or summarise it. **All 22 were checked
against the new rule before it was written down** — every one is a
bare link with a naming gloss, none quotes or summarises. So the
carve-out makes this lane lawful WITHOUT EDITING A STORY, which is
the right outcome and also the suspicious one, so it was verified
line by line rather than assumed.

**RULING 2 WAS MOOT, AND THE REASON IS THE REVIEWER'S, NOT THE
LANE'S.** The founder ruled that `cockpit-connector-resilience.md`
be re-typed from the event shape to the system-piece shape. **IT WAS
ALREADY THE SYSTEM-PIECE SHAPE** — `## What it is`, `## What changed,
in order`, `## Where it stands`. The non-author review had reported
an event variant that does not exist.

**THE CAUSE IS EXACTLY THE ERROR CLASS THIS CAMPAIGN IS ABOUT TO
WRITE INTO LAW.** The review's checker tested
`"## What it was" in text`. Two files matched it and neither is an
event: this story's heading is `## What it was raised by`, which
CONTAINS the test string as a prefix; and slice A's
`chronicle-layer.md` QUOTES the event bend's rule inside a code span
(*"`## What it is` becomes `## What it was`"*). **A substring of a
rendering is not a case** — the sweep law's own words, and the
countermeasure this campaign is chartered to make law, failed in the
instrument used to review the fleet.

No repair was performed for ruling 2, because performing it would
have changed a correct story to satisfy a false finding. The review
on this lane and on
[#332](https://github.com/wsher0901/roam/pull/332) is corrected on
both PRs.

2026-08-06 14:40 UTC · bench birth · work PC — born bench-first as
one lane of a seven-lane fleet, on the founder's "one fleet — fire
all seven".

**THE FLEET IS LAWFUL ONLY BECAUSE OF ONE CLAUSE.** Every slice
bench before this one wrote `docs/chronicle/INDEX.md`, and the lane
law forbids siblings sharing a file so that merges cannot collide by
construction. Seven concurrent lanes would have been UNLAWFUL — and
that was found by checking the planned benches for shared files
rather than by discovering it at the first collision.
[D-078](../record/DECISIONS.md#d-078--the-55-re-ruled-on-the-cold-number)
clause 3 moved that write to the weld, where
[ship §7](../skills/ship.md#7--on-approval--the-atomic-weld)'s
synthesis step already performs it.

**WHAT THIS BENCH INHERITS that the pilot did not have:** a settled
format, an event variant proven by slice D, and a measured figure of
roughly two minutes a story. What it inherits as a WARNING is the
census itself — several cells have been wrong, and one stood stale
for a week and misled two later readers who each stopped at it
without asking whether anything since had closed it. So this bench
derives its endings and lets the derivation win.

2026-08-06 14:42 → 14:52 UTC · canary timeout · cloud — **the lane
woke, claimed, waited the full window, and stood down without
writing a line of payload.**

The claim went in at 14:42 (`96564dd`) and the push was ACCEPTED,
which is itself a finding: no other worker held this bench, so
this was not a lost race. From there the lane polled origin every
10–15 seconds until 14:52:30 — the ~10-minute cloud window fixed
in [§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)
— and origin never carried anything but the lane's own claim.
Two independent waiters returned the same verdict seconds apart.

**THE MATCH WAS ANCHORED, AND THAT MATTERS HERE.** The poll tested
whether the Status line STARTS WITH `airborne ·`, never a
substring search — the lane's own claim prose contains the word
"airborne", and a substring match would have read the lane's own
writing back as its licence. That is the
[#191](https://github.com/wsher0901/roam/pull/191) failure mode,
and it is why this timeout can be trusted as a real absence rather
than a bad pattern. The cost of getting it wrong is asymmetric:
a false positive licenses unowned work, a false negative costs one
respawn.

**A REDELIVERY IS NOT AN ACK.** The `pull_request.labeled` webhook
for this PR fired a SECOND time while the lane was waiting. It was
not treated as a licence, because §Canary is explicit that the
licence is an ack COMMIT PRESENT ON ORIGIN and that a webhook
redelivery is not one — the
[#268](https://github.com/wsher0901/roam/pull/268) precedent, where
a well-formed token arriving as a message named a real session URL
and still was not an ack. Origin was re-read after the redelivery
and still held only the claim.

**WHAT WAS SPENT, AND WHAT SURVIVES.** Gathering ran during the
wait — read-only, no file written, no commit — so the sources for
all 11 stories were opened and are named under *Where to look*
below. That reading dies with this session; it cost the founder
nothing and it saves the next worker nothing, which is the honest
accounting. What survives is the bench exactly as birthed.

2026-08-06 14:56 → 15:03 UTC · **TWO LICENSED WORKERS ON ONE
BENCH** · cloud (the second one) — a respawned lane claimed,
was acked in 90 seconds, began work, and discovered at its first
push that A SIBLING CLOUD LANE WAS ALREADY WRITING THE SAME FILES
ON THIS BRANCH. It stood down rather than fight. This entry is
that lane's, and it is the only thing it wrote.

**THE SEQUENCE, from git and nothing else.** `bc3e93d` 14:56:50 —
this lane's respawn canary, push ACCEPTED, so no other worker held
the bench at that moment. `187be02` 14:57:21 — the baton-holder's
ack, 31 seconds later, anchored token, verified read back FROM
ORIGIN rather than from the watcher's own message
([#268](https://github.com/wsher0901/roam/pull/268)'s rule, kept).
Then, from 14:59:15, a commit a minute from a worker that is not
this one: `a860728` handoff · `8cec8e1` liftoff · `5f2e41f` the
cockpit · `162cb07` the cockpit's birth vehicle. All four are
UTC-stamped, so the author is a CLOUD seat, not the work PC (whose
commits on this branch carry `-04:00`). Every session pushes as the
founder, so identity cannot separate them — **the timezone and the
cadence are the only evidence, and they are enough.**

**WHY THE STAND-DOWN, and why it is not the wake-lock.** The Status
line still reads `airborne · cloud` — a Status this lane OWNS, so
the wake-lock does not fire and nothing here is a self-termination
by the letter of it. The reason to stop is the other prohibition:
**a lane never shares a file with a sibling, so that merges cannot
collide by construction.** Two lanes on one branch share EVERY file
by construction instead. This lane had two stories written locally
— handoff and liftoff — and pushing them would have overwritten a
sibling's newer versions of the same paths. Reading those versions
settled it beyond doubt: they are BETTER SOURCED than this lane's,
citing [D-002](../record/DECISIONS.md#d-002--handoff-note-merge-policy),
[D-035](../record/DECISIONS.md#d-035--state-surfaces-v2),
[D-050](../record/DECISIONS.md#d-050--session-lifecycle-closed-is-not-dead)
and a 2026-07-31 phantom-URL defect this lane had not found. The
two drafts were therefore DISCARDED rather than pushed. "Push what
exists" is a rescue rule for work that would otherwise be lost; it
is not a licence to overwrite a live sibling with a weaker copy.

**THE STATUS LINE WAS DELIBERATELY NOT TOUCHED, and that is the
load-bearing call here.** The obvious move — stamp this lane
`stood down` — would have been actively destructive: `airborne ·
cloud` is ALSO the sibling's licence, and the sibling re-reads this
Status on every wake. A terminal stamp would be a Status IT does
not own, and the wake-lock would have made the productive worker
self-terminate. **A lane standing down must not take its sibling
with it.** So this entry appends to the diary and changes no state.

**ONE CROSS-VALIDATION WORTH BANKING.** Both lanes independently
derived the same correction to the census: the handoff cell orders
the spine "team shutdown → secure → park", while
[handoff](../skills/handoff.md) secures at §1 ahead of the team
step at §1.2 — §1.2's own text fixes it against PARKING, not
against securing. Two workers, no contact, same finding. That is
the strongest evidence this shelf has produced that the
derive-don't-trust-the-cell rule earns its cost.

**THE LIKELY CAUSE, stated as a hypothesis and not as a finding.**
The predecessor lane recorded a SECOND `pull_request.labeled`
webhook delivery for this PR while it waited. If the respawn's
label produced one session and that redelivery produced another,
both would wake on the same bench and both would read the same
single ack — which names a vehicle class ("cloud") but no session.
**The ack token identifies a bench, not a worker**, so it cannot
tell two claimants apart. That is a gap in
[§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)
if it is real, and it is the founder's call whether it is worth
closing.

2026-08-06 15:07 UTC · **the redelivery is CONFIRMED, and a
sibling bench is dead** · cloud (the stood-down lane) — a THIRD
`pull_request.labeled` firing arrived for this PR. This lane did
not re-claim and wrote no payload: the branch's heartbeat was 67
seconds old, and a bench with a live heartbeat is CLAIMED, never
picked up
([§Liveness](../skills/parallel-lanes.md#liveness--live-vs-reclaimable)).

**THE HYPOTHESIS IS NOW EVIDENCE.** The firing carried
`Head SHA: ab39d2b` — the RESPAWN commit, which stopped being this
branch's tip at 14:56:50 when the canary `bc3e93d` landed. A
webhook naming a tip three commits stale is a REDELIVERY of the
original label event, not a fresh label. That is the mechanism
this lane guessed at 15:03 and could not prove; it is proved now,
and it means one label can spawn a session more than once. **The
ack token names a bench and a vehicle class, never a session, so
it cannot tell repeat claimants apart** — the gap stands as
described.

**THE MORE URGENT FINDING IS NOT ABOUT THIS BENCH.** A liveness
sweep of the other six benches (read-only; no lane writes a
sibling) found five flying normally at roughly a story a minute,
and **[#331](https://github.com/wsher0901/roam/pull/331)
`docs/chronicle-shelf-2-lanes` DEAD WITH ZERO PAYLOAD**:

- canary `6fae0bd` at 14:42:58 UTC;
- ack `27bde94` at 14:54:11 UTC — **11 min 13 s later**, past the
  ~10-minute cloud window fixed in
  [§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides);
- no commit since, silent ~14 minutes, and **not one story file
  written**.

The worker stood down before its licence arrived — the same late-ack
failure that killed this bench's predecessor, on the same minute,
from the same cause. Unlike the predecessor it left no stand-down
commit, so nothing on its branch says it is gone.

**AND ITS STATUS STILL READS `airborne · cloud`.** That is the part
worth carrying into doctrine: a Status can outlive its worker, so
the Status is not a liveness test. §Liveness already says this —
commits are the heartbeat, the Status word can lag — but this is
the first case on record where the lag points the WRONG WAY. A
stale terminal Status makes a live lane look dead and costs a
restart; a stale AIRBORNE Status makes a dead lane look alive and
costs the whole bench, silently, because nothing ever asks again.
Six shelves will land and this one will produce nothing while every
surface claims it is flying.

Fixing it is the baton-holder's act, not this lane's: a lane never
writes a sibling's bench. Reported on
[#330](https://github.com/wsher0901/roam/pull/330).

2026-08-06 14:57 → 15:13 UTC · **eleven stories, written under a
licence that arrived on the second attempt** · cloud — the payload
is complete and the loop is green.

**THE MEASUREMENT (plan step 3), split as the spec demands.**

*GATHERING* — about 9 minutes, 14:43 → 14:52, and every minute of
it spent inside the FAILED first canary wait. That is the one piece
of luck in this bench's day: the reading was already done when the
licence finally landed, so the second attempt started warm. Roughly
30 sources opened — four skills, twelve decision entries, nine
history records, two probe records, the charter, ATLAS, HOME, IDEAS,
and the three already-written stories used as format models. All of
it read-only; not one file written before the ack.

*WRITING* — 16 minutes for 11 stories, 14:57 → 15:13, and the git
stamps make the cadence exact: **a story a minute for the first
seven** (14:59:15 → 15:05:41, never more than 71 seconds apart),
then slower for the last four. The slowdown is informative rather
than incidental — go-remote (91 s) needed an IDEAS check to
establish that its deferred ruling had come due, and the proving
flights (139 s, the longest) needed a GitHub API call to settle a
contradiction the local record could not.

*WHAT MADE IT HARD*, in the order the difficulty actually bit:

- **The shallow clone.** This container holds 49 commits, back to
  2026-08-04 only, so **git could not reach July at all** — the very
  period nine of these eleven stories are about. The derivation law
  says time comes from git metadata when reading the past, and here
  that instrument was simply absent. The GitHub API replaced it, and
  a future cloud lane writing history should expect the same and
  reach for the API early rather than late.
- **Two history files disagreed with each other on merge order**,
  and both were wrong. `flight-hardening` says the first end-to-end
  flight "welded as [#191](https://github.com/wsher0901/roam/pull/191)",
  while the two files' `shipped:` frontmatter stamps (16:19 for #191,
  15:09 for [#193](https://github.com/wsher0901/roam/pull/193)) imply
  the reverse. The API settled it: **#191 merged 18:09:02 UTC and
  #193 at 19:12:59 UTC**, an hour later — the prose was right and the
  stamps were not. Recorded in the story as a caution, because a
  later reader will hit the same trap.
- **Not the endings.** Deriving them was fast; the census cells are
  well built. Five needed correction and each correction fell out of
  one targeted check rather than a hunt.

**THE FIVE DERIVED CORRECTIONS**, banked here as a set because the
weld may want them:

1. **handoff** — the cell orders the spine "team shutdown → secure →
   park"; the skill secures at §1 AHEAD of the team step at §1.2.
   §1.2's own text fixes it against PARKING, not against securing.
   *Independently found by the stood-down sibling too — two workers,
   no contact, same finding.*
2. **team-aware leaving** — the cell says the superseded-seat
   self-close "stays uncovered and filed". **Closed in full** by
   [D-062](../record/DECISIONS.md#d-062--the-wake-rule-generalized),
   and live in [LAWS](../LAWS.md#parallel-lanes--cloud).
3. **the cockpit's birth vehicle** — the cell says the greeting push
   is "never confirmed in flight". Overtaken: cockpits flew and
   landed 2026-08-04, and a summoned seat was born 2026-08-05.
4. **connector resilience** — the cell says the summon secrets
   "exist by NAME". The workflow has since FIRED TWICE, measured at
   13.7 seconds push-to-seat. Rungs 2b and 5 stay ungraded, as the
   cell rightly says.
5. **go-remote** — the cell defers keep-or-retire until a real cloud
   flight; the flights have flown, so the ruling is due, not
   pending.

**ONE FORMAT NOTE FOR THE WELD.** The two `event` stories cite each
other's SUBJECTS but never each other's prose, and no story cites
another story's prose anywhere — the down-links rule holds. Story-to-
story links exist only where a story points at a SIBLING ITEM as a
thing ([land](../chronicle/land.md), the wake-lock), which is what
the census rows do too.

## Where to look

- [the spec](../record/specs/chronicle-shelf-1-away.md) — roster, format,
  and the INDEX prohibition.
- [the format](../record/history/workshop/definition/chronicle-pilot.md)
  — the pilot that settled it, and its honest caveats.
- [the event bend](../record/history/workshop/definition/chronicle-shelf-1.md)
  — slice D's variant for `event` items, and the cold calibration.
- [D-059](../record/DECISIONS.md#d-059--the-chronicle-layer) — the
  layer's six rulings.
- [the census](../chronicle/INDEX.md) — READ-ONLY for this bench.
- [land](../chronicle/land.md) — the one Shelf I story already
  written; the nearest model for the ten system pieces here.
- [the currency audit](../chronicle/currency-audit.md) ·
  [the guardrail audit](../chronicle/guardrail-audit.md) — the two
  written `event` stories, and the working shape of slice D's bend.

**Sources this lane opened during the wait**, listed so the next
worker does not re-hunt them: for the leaving rituals,
[handoff](../skills/handoff.md) ·
[liftoff](../skills/liftoff.md) ·
[go-remote](../skills/go-remote.md), with
[D-032](../record/DECISIONS.md#d-032--fleet-continuity) ·
[D-040](../record/DECISIONS.md#d-040--handoff-input-inversion) ·
[D-067](../record/DECISIONS.md#d-067--the-report-skeleton-and-the-board-diet)
behind them; for the cockpit cluster,
[the charter master](../COCKPIT-CHARTER.md) ·
[D-046](../record/DECISIONS.md#d-046--flight-cockpit-the-control-tower-online)
·
[D-047](../record/DECISIONS.md#d-047--cloud-born-cockpit)
·
[D-048](../record/DECISIONS.md#d-048--cockpit-resilience)
·
[D-049](../record/DECISIONS.md#d-049--gh-second-path)
·
[D-051](../record/DECISIONS.md#d-051--self-seat-birth);
for the clerk,
[cloud-clerk](../record/history/workshop/mechanism/cloud-clerk.md)
·
[clerk-notify](../record/history/workshop/mechanism/clerk-notify.md)
·
[clerk-autospawn](../record/history/workshop/mechanism/clerk-autospawn.md)
·
[clerk-retirement](../record/history/workshop/mechanism/clerk-retirement.md);
for the chooser,
[D-041](../record/DECISIONS.md#d-041--delegation-architecture) +
[HOME §Delegation](../HOME.md#delegation--the-away-mode-chooser);
for the two events,
[shakedown-audit](../record/history/workshop/mechanism/shakedown-audit.md)
·
[maiden-flight-report](../record/history/workshop/mechanism/maiden-flight-report.md)
·
[lane-worker-baton](../record/history/workshop/mechanism/lane-worker-baton.md)
(#191, the first end-to-end flight) ·
[flight-hardening](../record/history/workshop/mechanism/flight-hardening.md)
(#193) ·
[cockpit-resilience](../record/history/workshop/mechanism/cockpit-resilience.md)
(#195).

**ONE DERIVED FINDING, banked before it is lost.** The census cell
for *team-aware leaving* ends "the superseded-seat self-close stays
uncovered and filed" — and that is now FALSE.
[D-062](../record/DECISIONS.md#d-062--the-wake-rule-generalized)
closes exactly that road in full, and
[LAWS §Parallel lanes & cloud](../LAWS.md#parallel-lanes--cloud)
already carries it: a superseded ground control tower exits by
capture-then-close, team findings captured FIRST. The story that
gets written here must say so in words — this is precisely the
derivation-wins case the spec warns about, found by reading the
record rather than the cell.
