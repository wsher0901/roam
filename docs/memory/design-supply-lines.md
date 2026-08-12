---
type: memory
id: design-supply-lines
updated: 2026-08-12 · gate · work PC
---
# design-supply-lines — where components come from, and how the gate sees motion

## Status

complete, awaiting merge — 2026-08-12

Tower-authored, so the external Web review precedes the founder's
word. At THE GATE; does not merge.

## What this task is

Wire four shadcn registries into `components.json` with the ARRIVAL
LAW that governs what lands from them, settle the chart layer with
a D-number, and give the `design-review` agent MOTION EYES — video
or trace for motion-intensive surfaces, since a screenshot cannot
see a spring. Contract:
[the spec](../record/specs/design-supply-lines.md).

## Pending issues

**ONE REGISTRY COULD NOT BE VERIFIED, AND IT IS WIRED ANYWAY.**
`@motion-primitives` is the URL its own documentation gives —
`npx shadcn add "https://motion-primitives.com/c/in-view.json"` —
but every request from this machine returns **429**, including the
site's HOMEPAGE, with an HTML body rather than JSON. Plain curl, a
browser User-Agent, the shadcn CLI by namespace, and the CLI by
direct URL all fail identically, and `/`, `/docs`, `/r/…` and
`/c/…` all 429, which is what a host-level block looks like rather
than a wrong path. So the template rests on the vendor's own docs,
NOT on a passing dry-run, and a builder reaching for that namespace
may meet the same wall. The other three were verified through the
CLI and wrote nothing.

## Left / idle

The home PC inherits Part B the same way it inherits the design
stack — through the standing [DASHBOARD](../DASHBOARD.md) Needs-you
line, since `~/.claude/agents/design-review.md` lives outside git
and only a re-run of machine-setup step 12 puts it there.

## The story

2026-08-12 · BORN · work PC

The two halves share a bench because they are the same problem
seen from opposite ends: Part A widens what can ENTER the product,
and Part B widens what the gate can SEE before it does. Widening
the first without the second is how a product acquires four
registries' worth of house style.

**THE ARRIVAL LAW IS THE POINT OF PART A, NOT THE WIRING.** Wiring
four registries takes one JSON object; what it changes is that a
seat can now install someone else's design decisions in one
command. The law says what that command actually produces: a
DRAFT. Three adaptations are owed on landing — to
[D-007](../record/DECISIONS.md#d-007--shadcnui-builds-on-base-ui)'s
Base UI (many registries still ship Radix-era code, which is the
single most likely thing to be wrong), to the token layer once T5
builds it, and to the design law's bans. Arrival is not
ratification, and the sentence exists because nothing else in the
repo would have said so.

**THE CHART DECISION WAS CHECKED BEFORE IT WAS WRITTEN**, which is
the half worth recording. The obvious failure was to assume a
chart component built for a Radix-era kit works under Base UI.
It does — but for a stated reason rather than by luck: shadcn
publishes a Base UI variant of its chart components and says
plainly that it does not wrap Recharts, so the chart layer touches
no primitive at all. A chart is SVG; primitives govern popovers
and menus, which charts do not use. Verified from the vendor's
documentation, then the entry was cut.

**PART B CLOSED A LINE THIS SAME SESSION HAD FILED.** The
motion-blindness of the review gate was discovered from the other
side — the founder rejected three static specimens because stills
cannot judge a moving product — and filed as an inbox line hours
earlier. It is now built: the master text carries the capture
duty, and the machine copy was rewritten FROM that master and
proven identical by extraction and diff rather than by claiming to
have saved the file. The mastering pattern the design-stack bench
introduced paid off the first time it was exercised.

## The pre-gate critic — 12 findings, 12 addressed, 0 dismissed

**THE BLOCKING FINDING IS THE BEST ONE THIS WORKSHOP HAS HAD, because
it caught a duty that would have failed SILENTLY AND FOREVER.** The
first draft of Part B ordered the agent to capture video or a trace
— and no tool in its allowlist could record anything, while the MCP
server was registered as a bare `npx @playwright/mcp@latest`. Every
motion review would have fallen through the section's own "capture
is unavailable" escape hatch and graded stills, while the ledger
line, the master text and this memory all said the gate could see
motion. The gate would have been exactly as blind as before, with a
paragraph asserting otherwise.

The repair was not to soften the duty. `@playwright/mcp` DOES
expose `browser_start_video`, `browser_stop_video`,
`browser_video_chapter`, `browser_start_tracing` and
`browser_stop_tracing` — **but only under `--caps devtools`**, which
the registration lacked. So: the server was re-registered with the
capability, step 12b now says the flag is REQUIRED and why, the
agent's allowlist names the recording tools, and all FOURTEEN
playwright tools it names were extracted from the master and checked
against the live server's `tools/list`. The same test that proved
the master and the machine copy identical now also proves the
allowlist is real.

**THREE MORE WERE MY OWN ENUMERATION FAILURES**, in a bench whose
job was partly to write case tables. The motion-intensive test
listed three triggers and answered NO for a scroll-linked reveal and
for a hover spring — both pure timing questions, and the global law
one section above names scroll-linked reveals by name; both are now
triggers. The attribution duty was landed for ONE of the four
registries the table directly above it had just wired, and silence
for the other three reads as permission; the rule for them is now
procedural — read the licence at first use, record it in the task's
memory, treat an unread licence as a blocker. And the numbered pass
closed the browser at step 5 before the capture section it preceded,
so an agent following it literally could never capture anything.

The rest: the `@motion-primitives` 429 was disclosed only in the
bench's own papers, which move to `record/history/` at ship, and not
in DESIGN or SETUP where a builder actually reads — both now carry
it, and SETUP's blanket VERIFY command says which namespace is
expected to fail. The namespace→URL table in DESIGN duplicated
`components.json`, so the prose kept a second copy that could go
stale silently; it now names the namespaces and points at the config
as the one home. D-085's deviation clause lived only inside the
`In full:` line, which is the least-read sentence in an entry and
exactly where a seat about to deviate would not look. HOME's Terms
still described the agent as screenshots-only and had no row for the
arrival law. And the Status line still read `bench ready` at a head
about to reach the gate.

## Where to look

- [the spec](../record/specs/design-supply-lines.md) — goal, out of
  scope, plan, Done-means.
- [D-007](../record/DECISIONS.md#d-007--shadcnui-builds-on-base-ui)
  — the primitive choice every arriving component must adapt to.
- [machine-setup](../skills/machine-setup.md) step 12 — the agent's
  master text.
