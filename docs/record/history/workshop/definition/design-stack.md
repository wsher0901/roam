---
type: history
id: design-stack
shipped: 2026-08-11 18:40 UTC
pr: #345
---
# design-stack — the global design stack, and Roam's alignment

## Status

shipped — merged #345, 2026-08-11

The external Web review returned **PASS at `bc4a074`**, fetched and
re-reviewed independently on the Web seat's own copy: the repair
delta since its prior head was exactly the two files, D-084's table
parses as one table with both paragraphs below it, and the memory
carries the external round with its cause named. Its prior-pass
verifications were re-affirmed at that head — Done-means honest,
Affects ↔ edits matched, the override one-directional, both
`~/.claude/` master texts present in machine-setup step 12, the
context7 deviation recorded, the LAWS gate present, HOME/SETUP/IDEAS
single-homed. It re-ran the full loop itself (7069 links / 0 broken ·
136 ↔ 136 · memory valid · lint · format · 3/3 tests · build) and
noted one honest limit: **Actions on `bc4a074` was unreachable from
the review seat under an API rate-limit**, so it took the green as
reported and founder-visible on the PR rather than claiming to have
seen it. No-solo-approval satisfied; the founder's word followed.

## What this task is

Install a machine-wide design capability at USER scope (the
official `frontend-design` plugin, playwright + shadcn + context7
MCP servers, a global design law in `~/.claude/CLAUDE.md`, and a
global `design-review` agent), then make Roam answer to it:
[D-084](../../../../record/DECISIONS.md#d-084--the-global-design-stack), a
new [DESIGN](../../../../DESIGN.md) holding Roam's taste, a design-review
gate for UI-touching diffs, and the setup steps recorded where the
home PC will find them. Contract:
[the spec](../../../../record/specs/design-stack.md).

## Pending issues

**THE HOME PC IS PENDING.** Part A ran on the work PC only. The
procedure is recorded at
[machine-setup step 12](../../../../skills/machine-setup.md#one-time-per-machine)
and is re-runnable, but until it runs there, that seat has no
design-review agent and no screenshot loop — and nothing in git
will say so, which is why SETUP and HOME both carry the word
"pending" rather than leaving it implied.

**THE TASTE PASS IS OWED BY THE FOUNDER.** Direction, font pair
and five reference slots ship TBD. Filed in
[IDEAS](../../../../IDEAS.md); the tower's half is a shortlist, not a
choice.

**ONE DEVIATION FROM THE MANDATE, made deliberately: context7 was
NOT added as a second MCP server.** It is already served at user
scope by the `context7` plugin, running the identical command
(`npx -y @upstash/context7-mcp`), and a second registration would
have duplicated all of its tools under a second name. The
one-line command to add it stands commented in machine-setup step
12 for the case where the plugin is absent. Reversible either way;
the founder's call if a separate server is wanted anyway.

## Left / idle

Nothing on this bench. The first screen the stack governs belongs
to [V1.S2.T5](../../../../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1),
and the taste pass gates it.

## The story

2026-08-11 · A CAPABILITY ON THE MACHINE, A TASTE FILE IN THE REPO
· work PC

**THE SPLIT IS THE DECISION.** Part A writes nothing to this repo
and Part B writes nothing to the machine, and the reason they
share a bench is that either half alone fails silently: a law
citing an agent that does not exist, or an agent no rule ever
invokes. What made the split easy to get right is that the two
halves have different owners — the machine is
[machine-setup](../../../../skills/machine-setup.md)'s, per seat; the taste
is the founder's, per product — so the override runs ONE WAY and
is stated in both directions:
[DESIGN](../../../../DESIGN.md) says it wins, and the global law says it
loses.

**THE STACK WAS ALREADY HALF-BUILT, WHICH THE MANDATE COULD NOT
HAVE KNOWN.** `frontend-design` was already installed at user
scope and enabled, from `claude-plugins-official` — not
`anthropics/claude-code`, which is where the mandate expected to
find it. Nothing needed installing and nothing needed reloading;
the step became a verification. The same check found
`ui-ux-pro-max` v2.5.0 present at user scope with its PLUGIN
disabled but a copy of the SKILL sitting in `~/.claude/skills/`,
loading into every session regardless — so the mandate's
"evaluated, NOT installed" was already false on this machine, and
the inbox line asks the question that is actually open: keep it or
remove it.

**WHAT VERIFICATION MEANT HERE, GIVEN GIT CAN PROVE NONE OF IT.**
A user-scope install leaves no trace a later reader can check out.
So each claim was made to answer for itself: `claude mcp list`
returned ✔ Connected for both new servers — a real handshake, not
a config read — and both were then asked over stdio for their tool
lists, playwright answering with 24 tools and shadcn with 7. That
second step was not ceremony: the `design-review` agent's
frontmatter NAMES six playwright tools, and a name that does not
exist on the server fails at the moment the agent is first used,
which is the worst possible time to find out. All six were in the
24.

**THE SMOKE TEST RENDERED, AND THEN CONVICTED ITSELF.** A single
component was built in the scratch directory and screenshotted at
375px and 1440px through the Playwright CLI; the PNGs were opened
and read, because a file that exists is not a picture that
rendered. The component came out cream-background, high-contrast
serif, terracotta accent — which the `frontend-design` skill's own
calibration names as AI-default cluster (1), the exact look it
warns is produced regardless of subject. The instrument caught its
operator inside five minutes. That is the argument for the gate in
one line: the law is not for a seat that lacks taste, it is for a
seat that reaches for the nearest thing while busy with something
else.

**A LIMIT THAT MUST TRAVEL WITH THE RESULT: the MCP servers are
NOT usable in the session that added them.** Servers bind at
session start, so `claude mcp list` reporting healthy and the
tools being absent are both true at once, and the next session is
the first that can drive the browser through the agent. The
end-to-end path — design-review agent invoking playwright MCP —
is therefore PROVEN IN ITS PARTS AND NOT AS A WHOLE, and it is
written into machine-setup's Verify list so the next seat is told
rather than surprised. Expect a one-time trust prompt per server
there; none appeared here, because none was due yet.

## The pre-gate critic — 11 findings, 11 addressed, 0 dismissed

The reviewer subagent
([D-044](../../../../record/DECISIONS.md#d-044--the-pre-gate-critic-goes-live))
ran on the finished diff and returned 1 blocking, 6 notable, 4
minor. Every one was repaired; none was argued away.

**THE BLOCKING ONE WAS A TICKED BOX THAT WAS NOT TRUE.**
Done-means said "the second machine can reproduce Part A from
machine-setup alone", and steps c and d DESCRIBED the design law
and the agent without carrying either's text — so the home PC
would have re-invented both in different words while every check
still passed. The repair makes machine-setup THE MASTER: the full
text of both `~/.claude/` files now sits in step 12, and the
machine copy is written from it. Then the claim was tested rather
than asserted — both master blocks were extracted from the file
and compared against the live machine copies, and both matched
exactly, the `×` in `375 × 812` being the one character that did
not and was fixed. **This finding is the reason the ⚪ about
"copied substance from an unlinkable master" also closed:** the
master moved into git, so the drift it warned about now has a
diffable home.

**THREE MORE WERE CONTRADICTIONS THE DIFF INTRODUCED**, each in a
file that was already correct before it:

- HOME and D-084 said "three MCP servers" where SETUP and
  machine-setup said two-plus-a-warning. A home-PC seat reading
  the wrong one would have installed exactly the duplicate the
  procedure forbids. Both now name the plugin as context7's
  carrier and defer to step 12b for the command.
- SETUP §Staged still listed "playwright plugin ON · design-critic
  with screenshots" as turning on at
  [V1.S2.T5](../../../../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1),
  under a heading reading "Nothing here is armed" — while this
  bench armed both. The line now records that they left it early
  and deliberately, to USER SCOPE, and that the playwright PLUGIN
  stays off as a CHOICE (it would duplicate the server) rather
  than as a pending step.
- The home-PC pending status was written into three files. It now
  has one home — machine-setup step 12 — and the others point.

**AND ONE WAS THE ENUMERATION LAW, CAUGHT BEFORE IT SHIPPED.**
[DESIGN](../../../../DESIGN.md) answered "TBD slot, and the global law has
a rule" three different ways in three sections: ask · fall through
· report. D-084's override rules DISAGREEMENT, and a TBD is
SILENCE, which is not the same case. The repair is a two-row table
with the split stated: the three founder-reserved slots
(direction, font pair, references) BLOCK and are asked, because no
floor exists to fall through to — the global law's own first
instruction is to name a direction; every other TBD falls through
to the floor as an ordinary task-local call. The remaining ⚪s
were of a piece: a missing routing-table row for the new
information class, a "four checks" heading over five bullets, an
Affects line that had drifted from the edits, and the fourth box
master edited without being named as one.

**What the round is evidence of:** every finding was a JOINT
between two files rather than a mistake inside one — the ticked
box vs the procedure, HOME vs SETUP, the staged list vs the armed
reality, one file's three answers to one question. A diff that
touches eight existing files is mostly joints, and the author is
the worst-placed reader of them, which is the pattern this
workshop has now recorded across six benches.

## The external Web review — 1 finding, repaired

**D-084's four-layer table did not render as a table.** The
repair that closed the critic's context7 finding inserted its two
paragraphs after ROW ONE, so rows 2–4 sat below prose and parsed
as body text rather than as table rows — the entry's central
structure, broken by the fix for a different finding. Repaired by
moving the two paragraphs below the completed table; every word
stands, only position changed, and the table is now verified as
one contiguous run of six lines (header + separator + four rows).

**IT WAS A REPAIR THAT BROKE SOMETHING, WHICH IS THE PART WORTH
KEEPING.** Ten findings were repaired in one pass, each verified
against what it claimed — the master text was diffed against the
live machine copies, the links gate re-run, the full loop and CI
green — and none of that could see it, because every check that
ran was about CONTENT and this defect was about RENDERING. A
markdown table survives a broken row silently: no gate parses it,
and the author reads the source rather than the page.

## Where to look

- [the spec](../../../../record/specs/design-stack.md) — goal, out of scope,
  plan, Done-means.
- [D-084](../../../../record/DECISIONS.md#d-084--the-global-design-stack) —
  the ruling, its four-layer table, and the one-directional
  override.
- [DESIGN](../../../../DESIGN.md) — the taste file, every slot TBD.
- [machine-setup step 12](../../../../skills/machine-setup.md#one-time-per-machine)
  — the re-runnable install, and the Verify lines that check it.
- `~/.claude/CLAUDE.md` and `~/.claude/agents/design-review.md` —
  machine-local, outside this repo by design; no commit reaches
  them.
