---
type: history
slug: handoff-inline-context
shipped: 2026-07-15 09:23
pr: 126
---
# handoff-inline-context — Handoff input inversion

## Status
Shipped — merged as
[PR #126](https://github.com/wsher0901/roam/pull/126) on the founder's
word. Every gate on the way out waited on the pushed commit's Actions
run going green
([D-038](../../../DECISIONS.md#d-038--2026-07--ci-is-the-arbiter--actions-green-required-at-every-gate-local-gate-mirrors-all-six-ci-steps-d-anchors-born-resolving-upholds-d-027)).

## What this task is
Retire handoff's never-skipped Web/Design question and invert the
input. A FULL handoff must never prompt after it fires: the founder's
leaving message carries the paste inline — any text before the trigger
(a leaving phrase or `/handoff`) is the paste, taken verbatim; a bare
trigger records "none". One decide entry (D-040) plus its ripple
across handoff.md, LAWS, HOME, and WEB-INSTRUCTIONS, all in one
commit. Out of scope: liftoff, ship, pickup, the `.claude/skills/`
stubs, and immutable history/.

## Pending issues
- The claude.ai settings-box copy of WEB-INSTRUCTIONS goes stale now
  its footer changed here. The existing Needs-you item (re-paste the
  box) already covers this; the ship-tail repaint refreshes that
  line's wording.
- The Done-means grep `"never-skipped"` clean outside `docs/history/`
  is not literally zero: the D-040 entry (founder-supplied text),
  this story, and the spec name the retired concept. The four live
  ripple surfaces — handoff.md · LAWS · HOME · WEB-INSTRUCTIONS — ARE
  clean, which is the grep's real intent. See the spec's Deviations.

## Left / idle
Nothing parked.

## The story
Born this session from the kickoff. The never-skipped question was
the last manual prompt in the leaving loop — handoff asking "any open
Web or Design threads?" and waiting for the founder to answer back.
The founder chose to invert it: since a leaving message is already
being typed, that message can carry the Web/Design paste, and the
ritual reads it instead of asking. A bare trigger (a leaving phrase
or `/handoff` with nothing before it) records "none". This upholds
[D-032](../../../DECISIONS.md#d-032--2026-07--fleet-continuity--handoff-parks-every-local-lane-liftoff-respawns-parked-benches-wake-lock-parks-every-outcome-extends-the-d-020d-023-lane-law-upholds-d-009)
(handoff stays the single leaving ritual) and amends only the
two-touchpoints law's wording. Recorded as D-040.

Built as one decide commit: the D-040 entry and its whole ripple
landed together, so the D-040 heading and every inbound link to it
(and the new handoff step-2 anchor) were born resolving
([D-038](../../../DECISIONS.md#d-038--2026-07--ci-is-the-arbiter--actions-green-required-at-every-gate-local-gate-mirrors-all-six-ci-steps-d-anchors-born-resolving-upholds-d-027)).
handoff §2 kept its number so steps 3–4's "step 2" references still
point at the paste; its heading changed from "The never-skipped
question" to "The inline Web/Design paste", which moved its GitHub
anchor to `#2--the-inline-webdesign-paste-full-only` — HOME's manual
entry and the D-040 Affects line both repoint there, and check:links
(1490 links, 0 broken) proved the repoint.

One judgment call: the Done-means asked for a `grep "never-skipped"`
with zero hits outside history/, but the founder-supplied D-040 entry
text literally says "the never-skipped question is retired", so
DECISIONS.md must carry the phrase to name what it retires — and so do
this story and the spec. The four live surfaces the rule actually
targets are clean; the surviving hits are the record and task
artifacts naming the retired thing. Kept the phrase there; recorded
the deviation in the spec.

## Where to look
Spec:
[handoff-inline-context](../../../specs/handoff-inline-context.md) ·
the ripple targets:
[handoff §2](../../../skills/handoff.md#2--the-inline-webdesign-paste-full-only),
[LAWS §The two touchpoints](../../../LAWS.md#the-two-touchpoints),
[HOME](../../../HOME.md),
[WEB-INSTRUCTIONS](../../../WEB-INSTRUCTIONS.md) · decision:
[D-040](../../../DECISIONS.md#d-040--2026-07--handoff-input-inversion--the-leaving-message-carries-the-webdesign-paste-inline-the-never-skipped-question-is-retired-a-bare-trigger-means-none-amends-the-two-touchpoints-laws-wording-upholds-d-032)
· PR [#126](https://github.com/wsher0901/roam/pull/126).
