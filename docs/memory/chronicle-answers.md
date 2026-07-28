---
type: memory
id: chronicle-answers
updated: 2026-07-28 13:13 · external review repairs · work PC
---
# chronicle-answers — the nine owed endings become record

## Status

complete, awaiting merge — everything the mandate asked for is
written and pushed. The founder approved the full drafting batch on
2026-07-28 (work PC, control tower) with four rulings: item 7
CLOSE, flag A ADD the row, flag B note-the-dangle, flag C the weld
repoint. All nine endings, the nine changed shelf rows and the new
Shelf III one, the census restamp 65 → 66, the T3–T6 relaunch
brief, the three [IDEAS](../IDEAS.md) lines and the defect line's
closure are in. The external review returned two repairs, both
landed: the three-phase order minted as
[D-060](../record/DECISIONS.md#d-060--2026-07--the-three-phase-standing-order--settle-and-test-the-vault-then-roam-v1s1t3t6-and-v1s2t5-are-paused-until-phase-2-closes-the-founders-2026-07-28-sequencing-recorded-per-laws-pause-routing-upholds-the-pacing-law)
(the founder amending the files-touched to admit a pure append),
and item 6's second half answered — the phone still carries the
app, so the ending is a demotion. Five files touched, none
outside the amended set; the full CI mirror is green locally.
Awaiting the founder's word.

## What this task is

The [#233](https://github.com/wsher0901/roam/pull/233) census
marked nine endings "founder input owed" rather than guessing
them. The founder answered all nine in the Web ops chat on
2026-07-28. This bench writes the answers into the record — the
INDEX's owed register and the shelf rows they touch — plus the
T3–T6 relaunch brief and three fresh [IDEAS](../IDEAS.md) lines.
No story is written here; the first story weld is its own bench.
Contract: [the spec](../record/specs/chronicle-answers.md).

## Pending issues

- Tower-authored, so
  [no-solo-approval](../LAWS.md#workflow-non-negotiable) requires
  an external Web review before the founder's word at THE GATE. DO
  NOT MERGE.
- **A weld step that now covers three files.** The INDEX links
  this memory twice and
  [D-060](../record/DECISIONS.md#d-060--2026-07--the-three-phase-standing-order--settle-and-test-the-vault-then-roam-v1s1t3t6-and-v1s2t5-are-paused-until-phase-2-closes-the-founders-2026-07-28-sequencing-recorded-per-laws-pause-routing-upholds-the-pacing-law)
  links it once, all at the LIVING path. The weld commit repoints
  all three — the DECISIONS one being a mechanical link-path
  repair inside a frozen file, which
  [D-057](../record/DECISIONS.md#d-057--2026-07--the-record-shelf--the-frozen-record-moves-under-one-roof-docsrecord-is-born-history--specs--decisions-in-memory-stays-living-at-root-the-enabling-ruling--a-mechanical-link-path-segment-repair-inside-a-frozen-file-is-maintenance-not-a-content-edit-append-only-governs-meaning-not-bytes-intra-record-links-resolve-by-construction-upholds-append-only-one-home-and-the-weave-rule)
  rules is maintenance, not a content edit.
- **A weld step that cannot be forgotten:** this file's links from
  [the INDEX](../chronicle/INDEX.md) point at the LIVING path
  (`../memory/chronicle-answers.md`) because that is what
  `check:links` can resolve while the bench is in flight. The weld
  moves this file to `record/history/`, so the same weld commit
  must repoint both links — the register preamble and item 1 — to
  `../record/history/workshop/definition/chronicle-answers.md`.
  Recorded in the spec's Plan as an explicit step.

## Left / idle

nothing parked.

## The story

Born 2026-07-28 at the work PC, the sitting after the 07-27
three-bench queue closed 3/3. The mandate is narrow on purpose:
the census's honesty rule was that an underivable ending reads
"founder input owed" and never a guess
([D-059](../record/DECISIONS.md#d-059--2026-07--the-chronicle-layer--living-stories-above-the-frozen-record-one-story-per-item-the-ending-rule--settled-in-any-format-means-the-story-is-written-a-later-fix-is-incorporated-and-the-ending-rewritten-at-that-weld-retirement-is-a-settlement-docschronicle-one-file-per-story-indexmd-shelving-four-shelves-immutability-beneath--record-untouched-stories-link-down-as-footnotes-down-links-only--a-story-never-cites-another-storys-prose-supersedes-the-07-23-three-chapter-shape-the-ship-synthesis-at-weld-step-deferred-to-the-first-story-weld)),
so the answers are the only thing that can fill them — and the
same honesty runs forward: where the founder said "not sure", the
ending records uncertainty rather than rounding it to yes or no.
Three of the nine settled exactly that way.

### The nine answers, as given (Web ops chat, 2026-07-28)

1. **T3–T6 batch-1:** "The initial parallel cloud session failed.
   So, I will most likely start from scratch."
2. **land:** never run — "I don't think so."
3. **The summon secrets:** unsure; never tested.
4. **[D-048](../record/DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047)
   rungs 2b/5:** never tested — "we were not able to emulate
   this."
5. **[D-051](../record/DECISIONS.md#d-051--2026-07--self-seat-birth--liftoff-fires---cloud-blind-and-the-cockpit-seats-itself-by-its-env-derived-self-url-the-console-attach-launcher-is-retired-amends-d-047s-rung-1-mechanics-as-corrected-by-193-upholds-d-049-and-board-governs)
   self-seat birth:** not sure it has flown.
6. **go-remote:** never used — "unsure whether this will ever be
   useful given that if cloud works fine, it is superior."
7. **The reviewer registration defect:** the founder did not know
   what it referred to — so the bench explained it and asked.
8. **The manual acts:** vault lens applied on the work PC
   2026-07-28 (home PC still owed); WEB-INSTRUCTIONS box
   re-pasted 2026-07-28.
9. **The chronicle layer:** settled — confirmed.

### What the bench derived, so the founder did not have to

Three endings record uncertainty as their settled state (items 3,
4 and 5). Two of those were mechanically answerable, so the bench
answered what it could rather than handing the founder a question
a shell command settles:

- **The summon secrets (item 3).** `gh secret list` returns
  exactly the two names `.github/workflows/summon.yml` reads:
  `COCKPIT_FIRE_TOKEN` and `COCKPIT_ROUTINE_ID`, both created
  2026-07-22. Names only — no value was read, printed, or written
  anywhere. So the workflow is armed on paper; whether the values
  work is a different question, and nothing has ever fired it.
- **The self-seat birth (item 5).** Every weld since
  [#213](https://github.com/wsher0901/roam/pull/213) — #216, #218,
  #221, #223, #225, #229, #231, #233 — carries a ground-seat stamp
  (home PC or work PC), so no cockpit-seated WELD exists. The
  critic caught the bench overreaching here on its first pass: no
  weld is weaker than no flight, since a cockpit could have seated
  itself and produced no weld. The ending was softened to say
  exactly that — the record is as uncertain as the founder is, and
  "no confirmed flight" is the whole of what either can support.

### The one interactive item: the reviewer defect, CLOSED

The defect, from the record: on 2026-07-17 the `reviewer`
agent-type failed to register inside a running session (the Agent
tool reported it not found), and after a second recurrence the
same day it was graduated from gotcha to defect, with ship's
critic step falling back to a general-purpose agent. It has not
recurred since — native runs at
[#175](https://github.com/wsher0901/roam/pull/175) (the first
native registration), again 2026-07-24, and at all three benches
of the 07-27 queue
([#229](https://github.com/wsher0901/roam/pull/229) ·
[#231](https://github.com/wsher0901/roam/pull/231) ·
[#233](https://github.com/wsher0901/roam/pull/233)), each with a
critic round on record.

The founder's ruling: **CLOSE.** Five clean native registrations
are the confirmation the standing inbox line asked for. The
fallback path stays documented in
[ship §6](../skills/ship.md#6--the-gate), which is the re-open
route if it ever recurs — so closing the line loses nothing.

### THE T3–T6 RELAUNCH BRIEF

**The decision: RELAUNCH FROM SCRATCH.** No salvage, no partial
adoption — [V1.S1](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
T3–T6 are re-planned as new work when phase 3 opens. The ROADMAP's
unticked boxes already tell that truth, so nothing is ticked or
un-ticked here.

**What the record actually knows about the failure.** The founder
recalls only that the cloud sessions failed. The record holds the
vehicle's post-mortem
([D-020](../record/DECISIONS.md#d-020--2026-07--parallel-lanes-v2-native-lanes-replace-hand-built-orchestration):
bundle-seeded sandboxes could not push; T3+T5 work destroyed) and
the fix-routing triage
([D-018](../record/DECISIONS.md#d-018--2026-06--fix-routing-triage-after-lane-review-extends-d-017)).
T4 and T6 were never even recorded as failed. That is the whole of
it — nothing else about why these four lanes died is derivable,
and nothing is invented here.

**One dangling pointer, found while checking that evidence.** The
double-dispatch diagnostic is no longer in
[IDEAS](../IDEAS.md) — it was compacted away when IDEAS became an
inbox-not-archive
([D-050](../record/DECISIONS.md#d-050--2026-07--session-lifecycle--closed--dead-the-close-locks-wall-softens-to-injected-read-only-doctrine-interrupt-capture-is-standing-format-the-claude-residue-sweep-is-pickup-hygiene-ideas-is-an-inbox-not-an-archive-amends-the-d-046-era-close-wall-design-upholds-the-park-protocol-and-no-solo-approval)) —
yet both
[D-042](../record/DECISIONS.md#d-042--2026-07--lane-liveness--derive-live-vs-reclaimable-from-the-commit-heartbeat-read-it-at-claim-check-and-session-start-cleanup-so-a-live-lane-is-never-adopted-or-pruned-amends-the-claim-check-clause-and-pickup-3-upholds-the-wake-lock-and-seat-invariance)
and
[the lane-liveness story](../record/history/workshop/mechanism/lane-liveness.md)
still point at IDEAS for it. Both are frozen record and cannot be
edited, so the pointer stays dangling and is recorded here rather
than repaired. It is NOT called an open diagnostic: it is a
pointer with nothing behind it, and it carries no weight as
evidence for the relaunch.

**THE AUDIT RIDERS** — from the external reviewer's product
re-evaluation, carried into the relaunch. Each is marked
**verify licenses at spike**:

- **T4 · Feasibility** — *verify licenses at spike.* Google-class
  sources may serve display-time rungs but NEVER enter the asset
  layer: that collides with the license-segmented storage law
  ([D-015](../record/DECISIONS.md#d-015--2026-06--data-asset-law-bitemporal-append-only-license-segmented)).
  The asset layer builds on Overture Maps / Foursquare OS Places /
  OSM plus first-party data, and demo destinations are chosen by
  data coverage rather than by wish.
- **T5 · Time & transport** — *verify licenses at spike.* V1
  scopes to route existence
  ([F-TT-02](../data/FACTS.md#f-tt-02--route-existence-)) plus
  typical block times, at rung 3–4 and labeled as such.
  Schedule-level flight data
  ([F-TT-03](../data/FACTS.md#f-tt-03--flight-schedule-blocks-))
  moves to V3-with-budget; backward-chained departure logistics
  needs no schedule API.
- **T6 · Crowds & calendar** — *verify licenses at spike.*
  [F-CC-06](../data/FACTS.md#f-cc-06--venue-busyness-curves-)
  busyness lands as C-grade curated curves — venue-type × day ×
  season, built the way
  [F-WX-13](../data/FACTS.md#f-wx-13--activity-weather-sensitivity-profiles-15-types)
  is built, and ours.
- **T3 · Sky & sea** — *verify licenses at spike.*
  [F-SS-04](../data/FACTS.md#f-ss-04--tide-tables-) tides
  pre-accepts B-grade: US and major ports verified, everywhere
  else labeled.

### The founder's sequencing order — now [D-060](../record/DECISIONS.md#d-060--2026-07--the-three-phase-standing-order--settle-and-test-the-vault-then-roam-v1s1t3t6-and-v1s2t5-are-paused-until-phase-2-closes-the-founders-2026-07-28-sequencing-recorded-per-laws-pause-routing-upholds-the-pacing-law)

- **PHASE 1 — SETTLE & TEST:** this bench, then the first-story
  shakedown flight (blind cockpit birth · the fence /
  [land](../skills/land.md) MODE P ·
  [pickup](../skills/pickup.md#6--fleet-resume-on-the-founders-answer)
  fleet-resume · land MODE R). Items 2 and 5 get their test here.
- **PHASE 2 — THE VAULT:** chronicle story lanes plus a
  connections-and-content polish pass; the phase opens with the
  founder's scope ruling — all 66 stories, or the load-bearing
  dozen first.
- **PHASE 3 — ROAM:**
  [V1.S1](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
  T3–T6 relaunch from scratch (the brief above, audit riders
  included) plus
  [V1.S2.T5](../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
  design foundations. T3–T6 does not start before phases 1–2
  close.

The order goes on the board at the ship tail, under Now/Next,
citing the decide.

**The decision landed as
[D-060](../record/DECISIONS.md#d-060--2026-07--the-three-phase-standing-order--settle-and-test-the-vault-then-roam-v1s1t3t6-and-v1s2t5-are-paused-until-phase-2-closes-the-founders-2026-07-28-sequencing-recorded-per-laws-pause-routing-upholds-the-pacing-law)**
at the external review's word — the critic had flagged the gap
and the reviewer confirmed it. The pause is what forced the
D-number:
[V1.S1](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
T3–T6 and
[V1.S2.T5](../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
are HELD until phase 2 closes, and
[LAWS §Workflow](../LAWS.md#workflow-non-negotiable) routes a
paused stage to a decide rather than to conversation. The
founder amended this bench's files-touched at the gate to admit
`record/DECISIONS.md` as a pure append; the
[ROADMAP](../ROADMAP.md) stays untouched on purpose, since a
pause is sequencing and the unticked boxes already tell the
truth.

### The founder's four rulings on the drafting batch

The batch was shown in one piece before anything was written, per
the mandate. The rulings: **item 7 CLOSE** (above); **flag A ADD**
— the chronicle layer is settled and the ending rule says settled
means written, so it earns its own Shelf III row and the census
restamps 65 → 66; **flag B** — the dangling double-dispatch
pointer is noted plainly and the diagnostic is NOT called open, no
fourth IDEAS line; **flag C** — living link now, repoint as an
explicit weld step. Everything else approved as drafted.

### The critic round (ship §6, pre-flip)

The critic returned nine findings on `98d89f5`, and its two
sharpest were about the bench's own governing rule — that
uncertainty is never rounded. Four repairs landed before the flip,
all of them softening claims back to what the evidence actually
carries:

1. **Item 5 overreached.** "No cockpit ever seated itself" was
   written from a derivation that only shows no cockpit-seated
   WELD. Softened, and the gap named explicitly.
2. **Item 6 answered only half its question.** The census asked
   two things — whether the tether was ever used AND whether
   Remote Control still exists on the founder's phone. Only the
   first was asked on 2026-07-28, so the second was written as
   STILL OWED rather than silently dropped. The founder then
   answered it at the external review: the app IS still on the
   phone, so the ending is a demotion and not
   retirement-by-platform, and the row returns to high.
3. **Item 2 hardened a hedge.** "I don't think so" had become
   "confirmed NEVER RUN", propped on the ledger's silence — but a
   landing need not leave a ledger line. The ending now rests on
   the founder's hedge and claims nothing beyond it.
4. **Item 4 generalized one failure.** "Ungradable on demand"
   became "no drill has yet worked", since one failed emulation
   does not prove no method exists.

The remaining findings were minor and handled: the `ship §6`
fallback is now linked in both INDEX mentions, and the "two
answers, two of those" sentence above was an editing artifact,
rewritten. Two were checked and dismissed: the new census row's
`#236` span is this bench's real PR number, and the spec's
`pr: —` is correct until [ship §7](../skills/ship.md#7--on-approval--the-atomic-weld)
fills it at the weld. One rides to the tail: the
[DASHBOARD](../DASHBOARD.md) carries its own "65 proposed stories"
literal, which the ship tail's repaint must restamp to 66.

The critic's third notable finding went to the founder at THE
GATE, since the bench could not settle it alone: the three-phase
sequencing order pauses roadmap work, which LAWS routes to
decide, while the mandate had fixed the files touched and
excluded a D-number. The external review agreed with the critic,
and the founder amended the files-touched to admit a pure append.
The order is now
[D-060](../record/DECISIONS.md#d-060--2026-07--the-three-phase-standing-order--settle-and-test-the-vault-then-roam-v1s1t3t6-and-v1s2t5-are-paused-until-phase-2-closes-the-founders-2026-07-28-sequencing-recorded-per-laws-pause-routing-upholds-the-pacing-law) —
a finding the ship-time critic raised and the external reviewer
confirmed, which is the two-layer review working exactly as
designed.

## Where to look

- [the spec](../record/specs/chronicle-answers.md) — the contract,
  including the weld's repoint step.
- [the census](../chronicle/INDEX.md) — the nine endings live in
  [§Founder input owed](../chronicle/INDEX.md#founder-input-owed);
  nine shelf rows changed and one was added.
- [the census bench](../record/history/workshop/definition/chronicle-layer.md)
  ([#233](https://github.com/wsher0901/roam/pull/233)) — how the
  nine were arrived at, and the per-shelf team captures.
- [IDEAS](../IDEAS.md) — three new 2026-07-28 lines; the 07-17
  reviewer defect line closed citing this bench.
- the Web ops chat, 2026-07-28 — the founder's answers, quoted
  above.
