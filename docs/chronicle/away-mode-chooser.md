---
type: chronicle-story
shelf: I — the away surface
status: living
updated: 2026-08-06 · written · cloud lane
---

# The away-mode chooser — one variable per fork

> **CURRENT ENDING (2026-08-06).** Settled and depicted. Three
> questions with one variable each — *at the keyboard?* → a LOCAL
> LANE · *should work continue?* → no, [HANDOFF](handoff.md) ·
> *machine staying on?* → yes, [GO-REMOTE](go-remote.md) the
> backstop; no, [LIFTOFF](liftoff.md), the standard away posture.
> The census cell says exactly this, and its one stale detail is a
> refinement rather than a reversal: it describes the return as
> running through "land's TWO MODES", and
> [D-061](../record/DECISIONS.md#d-061--the-landing-doctrine-recut-to-three-scenarios)
> has since recut the way IN to **three SCENARIOS that route into**
> those two modes. The modes survive; they stopped being the front
> door. The chooser is now drawn twice — as a mermaid fork in
> [HOME](../HOME.md#delegation--the-away-mode-chooser) and as
> swimlanes in [ATLAS §3](../ATLAS.md) — and it has not changed
> shape since it was decided.

## What it is

A decision procedure for where work runs, deliberately built as a
CHAIN OF SINGLE QUESTIONS rather than a menu of rituals. Each fork
turns on one variable the founder already knows the answer to
without thinking:

```text
Leaving the machine?  ─ no ──→ Local lane
        │ yes
Should work continue? ─ no ──→ Handoff
        │ yes
Machine staying on?   ─ yes ─→ Go remote (the tether)
        │ no
                              Liftoff (the cloud)
```

Its second half is less obvious and just as deliberate: **each away
leaf carries its own notification channel and reply loop.** After
liftoff the cockpit IS the channel — its decision-shaped turn-end
reports arrive as app pushes, and replies in that thread are
command. The tether pushes to the app. A cloud lane pushes through
GitHub, and a PR comment feeds the founder's reply back to the
running session. **After handoff there is no channel — and that is
correct**: nothing is flying, so silence is the right state until
the next pickup.

## What raised it

**A pile of rituals that had grown one at a time.** By mid-July the
workshop had local lanes, handoff, cloud spawn and a tether, each
with its own trigger phrases and its own rules, and no statement of
when to use which. The corpus had reserved the decision across FIVE
SWEEPS — it kept being deferred because every attempt produced
another ritual instead of a rule.

## What changed, in order

- **[D-041](../record/DECISIONS.md#d-041--delegation-architecture)
  — away-mode becomes ONE VARIABLE PER FORK.** The framing is the
  decision: not "which ritual" but "which question". Four
  consequences ride in the same entry. **Go-remote is a POSTURE, not
  a leaving ritual** — it parks nothing, closes nothing, and keeps
  the baton, which is what lets the baton law survive UNAMENDED.
  **Idle-wait** replaces park-on-block wherever a phone can reach
  the lane, because parking there was pure loss. **Cloud lanes spawn
  through a label**, chosen over API wiring because a zero-secret
  label is safer than a bearer token on two machines and is
  phone-drivable. And the eligibility gate reverts to HARD
  DISQUALIFIERS — secrets exposure, cloud-incompatible needs,
  file-collision — with fully-specified becoming the dispatch sort
  key rather than a gate.
- **A THIRD LEAVING RITUAL WAS REJECTED**, and the reasoning is why
  the chooser stayed a chooser: a posture suffices for the tethered
  case, and inventing a ritual there would have forced an amendment
  to the baton law. **The simplest complete model won over the
  symmetrical one.**
- **[D-043](../record/DECISIONS.md#d-043--cloud-ignition-and-away-command-redesign)
  — the machine-off leaf gets a surface**, the cloud clerk, with
  the Claude app named as the single command surface across all
  postures and the GitHub app demoted to a doorbell.
- **[D-046](../record/DECISIONS.md#d-046--flight-cockpit-the-control-tower-online)
  — the leaves are re-weighted.** The cockpit replaces the clerk,
  liftoff's cloud branch ends by FIRING it, and **Remote Control is
  demoted to a backstop**: machine-off + cockpit becomes the
  STANDARD away plan, and the tether is what you use when the
  machine must stay on. The founder chose demotion over retirement —
  toggles are cheap insurance, and **the posture change, not the
  uninstall, is the decision.**
- **[D-054](../record/DECISIONS.md#d-054--the-landing-skill) →
  [D-061](../record/DECISIONS.md#d-061--the-landing-doctrine-recut-to-three-scenarios)
  — the RETURN half gets its own shape.** Going away was settled
  long before coming back was. Land supplies the ending, and the
  recut makes the way in three scenarios — AUTO-LAND, DESK TAKEOVER,
  the founder's FREEZE — which route into MODE R and MODE P.
- **[D-058](../record/DECISIONS.md#d-058--atlas-the-system-spine)
  and the ATLAS work — the chooser gets drawn.** ATLAS §3 renders
  away-and-return as swimlanes across the founder, the ground seat,
  the cockpit and origin, with a distinction the prose alone had
  never made explicit: **two of the four endings are the founder's
  to SPEAK and two are DERIVED**, which is why only two carry chips.
  AUTO-LAND fires on a condition the cockpit tests; DESK TAKEOVER
  fires because the founder sat down somewhere else; the freeze and
  the manual retire wait on a word.

## Where it stands

**Unchanged in shape since it was decided, which for a
decision-procedure is the whole point.** Every subsequent entry has
adjusted what a LEAF does — what the cloud leaf fires, what the
tether is for, how a flight ends — without touching the questions.
That stability is the evidence that one-variable-per-fork was the
right frame.

**Its most quietly useful property is the fourth answer: silence.**
Three of the four leaves arrange for the founder to be reachable.
The handoff leaf arranges for them NOT to be, and says so in words
rather than leaving it as an omission. A chooser that only ever
routes toward more notification would be a chooser with a bias, and
this one names the case where the correct output is nothing.

**Where the depiction can drift.** The chooser now exists in three
places — the law's one-line gloss, HOME's prose plus mermaid, and
ATLAS's figure — and the workshop has already been bitten twice by
one fact living in two paragraphs that were never read together
(liftoff's phantom URL; land's two board lines). These three are
pointer-linked rather than duplicated, and
[ATLAS](../ATLAS.md) originates nothing — but the coupling is
prose-deep, and prose agreement has no linter.

## Sources

Down-links only.

- [HOME §Delegation](../HOME.md#delegation--the-away-mode-chooser) —
  the chooser in prose and mermaid, with the per-leaf notification
  channels.
- [ATLAS §3](../ATLAS.md) — away and return as swimlanes; the
  spoken-versus-derived endings.
- [D-041](../record/DECISIONS.md#d-041--delegation-architecture) ·
  one variable per fork ·
  [D-043](../record/DECISIONS.md#d-043--cloud-ignition-and-away-command-redesign)
  · the machine-off surface ·
  [D-046](../record/DECISIONS.md#d-046--flight-cockpit-the-control-tower-online)
  · the leaves re-weighted ·
  [D-061](../record/DECISIONS.md#d-061--the-landing-doctrine-recut-to-three-scenarios)
  · the return's three scenarios.
- [LAWS §Workflow](../LAWS.md#workflow-non-negotiable) — the chooser
  law itself, in one paragraph.
- [handoff](handoff.md) · [liftoff](liftoff.md) ·
  [go-remote](go-remote.md) · [land](land.md) — the four leaves, each
  in its own story.
