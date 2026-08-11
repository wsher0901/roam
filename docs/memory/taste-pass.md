---
type: memory
id: taste-pass
updated: 2026-08-11 · birth · work PC
---
# taste-pass — the shortlist, and the choice only the founder can make

## Status

bench ready — born 2026-08-11 at the work PC control tower, on the
founder's word "prepare the taste-pass shortlist".

## What this task is

Put three real design directions in front of the founder — named,
with font pairs, palettes and rendered specimens — and define the
five reference slots, so
[DESIGN](../DESIGN.md)'s three founder-reserved slots can be
filled by a choice rather than by a seat's invention. Contract:
[the spec](../record/specs/taste-pass.md).

## Pending issues

**BLOCKED — the founder's choice of FAMILY, round two.** Three live
probes are deployed and verified as served; the question is
place-first · object-first · type-first · or none, with why.
Nothing reaches [DESIGN](../DESIGN.md) until the word.

**ROUND ONE'S RECOMMENDATION IS DEAD, and a resuming seat must not
resurrect it.** A/B/C were all rejected — not on execution but on
AXIS. Their palettes and pairs survive as material; the font pair
is now a separate founder call, deliberately unbundled from the
family pick.

## Left / idle

On the word: fill [DESIGN](../DESIGN.md)'s direction, font pair
and reference-slot table with the chosen values, then ship. The
reference IMAGES stay the founder's to supply — the slots define
what each governs, not what fills it.

## The story

2026-08-11 · BORN · work PC

**SOLO, AND THE VEHICLE CONDITION IS WORTH NAMING** because
[D-082](../record/DECISIONS.md#d-082--the-vehicle-chooser) now
requires every triage to state one. The chooser's default at a
desk is an agent team, and three independent directions is
genuinely team-shaped work — but the session preamble still
carries the retired no-agents instruction (board Needs-you item
2), and the board's own reasoning is that the preamble WINS until
it is edited. So this runs solo, and the condition that fired is
not one of the chooser's: it is the un-retired instruction itself,
which is exactly the cost that Needs-you line predicted.

**THE SPECIMENS ARE THE POINT, AND THEY CHANGED THE ANSWER.** The
directions were designed on paper first, and on paper A · ALMANAC
was the obvious recommendation — a field guide is what a
validity-first planner IS, and the reference-book manner maps
straight onto provenance. **Rendering it killed the
recommendation.** At both widths the CAUGHT callout is the
quietest thing on the page: a field guide's whole voice is
unhurried, and the product's promise is "we found a problem before
you left". That is not a tuning problem — a louder callout in A
would be a callout fighting its own direction. The specimen was
the only thing that could have shown this, and it took about
fifteen minutes to find out.

**THE STACK PAID FOR ITSELF ONE DAY AFTER IT LANDED**, and not in
the way the bench that installed it predicted. Its screenshot loop
was justified as a REVIEW instrument — build, screenshot, compare
against a reference. Its first real use was GENERATIVE: three
directions rendered side by side turned a matter of taste into a
matter of looking. Also worth recording: the MCP path still could
not be used, because these servers bind at session start and this
session predates them, so the loop ran through the Playwright CLI
exactly as the smoke test did. The capability is real; the
plumbing to the agent remains unexercised.

2026-08-11 · ROUND TWO · work PC

**THE FOUNDER'S REJECTION WAS AN AXIS CORRECTION, AND IT WAS
RIGHT.** Round one offered three directions that differed in
typeface and palette while sharing one metaphor — static print. As
the founder put it: stills can judge a font pair, they cannot judge
a direction for a moving product. Three costumes, one direction.
The specimens were honest and the axis was wrong, which is a
harder mistake to see from inside than a bad execution is.

**WHAT ROUND TWO CHANGED, MECHANICALLY.** The variable is now the
METAPHOR and the MOTION CHARACTER, and the artifact is a live URL
rather than a picture. Each probe shows the same five things so
they can be compared: a day assembling, a conflict announcing
itself IN TIME, a card→detail transition, provenance appearing in
motion, at both widths, on springs. The font pair was explicitly
DEMOTED out of the pick — each probe carries a working pair only so
it can be felt, and the pair returns as a separate founder call.

**THREE THINGS BROKE, AND THE THIRD IS THE ONE WORTH KEEPING.**
First, `maplibre-gl@6` has no UMD build — v6 ships ESM only, so the
`<script>` global was undefined. The error trap I had added for the
founder's benefit is what surfaced it in the first screenshot,
which is the argument for the trap: a probe that fails silently on
someone else's machine teaches nothing. Second, the version I
VERIFIED (`@5`) and the version I SHIPPED (`@6.3.0`) were not the
same URL — I checked one thing and pinned another, then computed an
SRI hash for a path that returned "Not found". Third and worst:
**the deployed URLs returned 200 and rendered a Vercel login page.**
The first live pass produced three screenshots of identical byte
size, which is the tell — three different pages cannot render
identically. Had I trusted the 200, I would have handed the founder
three links to a login wall and called it delivered.

**THE PROTECTION IS NOT A BUG AND WAS NOT "FIXED".** Preview
protection is a project-wide security setting on a PUBLIC repo, and
weakening it to make a probe convenient is not a bench's call. The
resolution was a 23-hour share link that bypasses the wall for the
founder without touching the setting — reversible, scoped, and it
expires on its own.

**ONE HONEST LIMIT ON THE VERIFICATION.** Screenshots prove the
probes RENDER; they cannot prove the springs feel right, which is
the entire point of round two. Every timing claim in the spec is
authored, not measured — the founder's own hands are the
instrument here, and that is exactly what the inbox line about the
motion-blind design-review gate is for.

## Where to look

- [the spec](../record/specs/taste-pass.md) — the shortlist and
  the reference slots.
- [D-084](../record/DECISIONS.md#d-084--the-global-design-stack) —
  why these three slots are the founder's.
- [DESIGN](../DESIGN.md) — the file this bench fills.
