---
type: memory
id: chronicle-shelf-1-away
updated: 2026-08-06 14:57 UTC · airborne ack · work PC
---

# chronicle-shelf-1-away — Shelf I — the away surface

## Status

airborne · cloud · 2026-08-06

**YOU ARE LICENSED. WORK.** Acked at 14:57 UTC — **90 seconds after
your canary**, against the ~13 minutes that killed your predecessor.
That lane did nothing wrong; the ack was late. This one was waiting.

⚠ **THE ONE RULE THAT KEEPS THIS FLEET LAWFUL: DO NOT WRITE
`docs/chronicle/INDEX.md`. Not one cell.** Six siblings are flying
beside you, and the lane law forbids siblings sharing a file so that
merges cannot collide by construction. The baton-holder marks your
rows written at the weld. You write story files and this memory,
nothing else.

**DERIVE YOUR ENDINGS; DO NOT TRUST THE CENSUS CELLS.** Several have
been wrong — one stood stale for a week and misled two later
readers, each of whom stopped at a dated line without asking whether
anything since had closed it. A dated attestation is evidence of its
date and of nothing later. If your derivation contradicts the cell,
the derivation wins and your story says so.

**TWO OF YOUR ELEVEN ARE `event` ITEMS** — the Shakedown Flight and
the cockpit's proving flights. Slice D's bend is not optional for
them: `## What it was`, `## What happened, in order`, and a
`## What it found`, because a flight's product IS its findings.

## What this task is

The 11 unwritten stories of **Shelf I — the away surface** — how the founder leaves the desk and commands from away. One of seven
benches flying as a single fleet under
[D-078](../record/DECISIONS.md#d-078--the-55-re-ruled-on-the-cold-number).

The contract, the roster, and the one rule that makes the fleet
lawful — **do not write the INDEX** —
[the spec](../record/specs/chronicle-shelf-1-away.md).

## Pending issues

**One, and it is not about the work.** No `airborne ·` ack reached
this branch inside the canary window, so the lane never became
licensed. The bench still needs no decision from anyone — the
format is settled and the scope fully specified. What it needs is
a baton-holder to ack it.

WORTH CHECKING BEFORE THE RESPAWN: six sibling lanes were labeled
in the same minute
([#331](https://github.com/wsher0901/roam/pull/331)–[#336](https://github.com/wsher0901/roam/pull/336)),
and nothing about this bench is special, so the same silence
plausibly covers the whole fleet. If it does, the fault is the
watch and not the lanes.

## Left / idle

All of it — plan steps 1–3 in
[the spec](../record/specs/chronicle-shelf-1-away.md). Nothing was
written: no story file exists on this branch, and
`docs/chronicle/INDEX.md` is untouched, as the fleet rule requires.

## The story

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
