---
type: memory
id: design-stack
updated: 2026-08-11 · gate · work PC
---
# design-stack — the global design stack, and Roam's alignment

## Status

complete, awaiting merge — 2026-08-11

Tower-authored, so the external Web review precedes the founder's
word. At THE GATE; does not merge.

## What this task is

Install a machine-wide design capability at USER scope (the
official `frontend-design` plugin, playwright + shadcn + context7
MCP servers, a global design law in `~/.claude/CLAUDE.md`, and a
global `design-review` agent), then make Roam answer to it:
[D-084](../record/DECISIONS.md#d-084--the-global-design-stack), a
new [DESIGN](../DESIGN.md) holding Roam's taste, a design-review
gate for UI-touching diffs, and the setup steps recorded where the
home PC will find them. Contract:
[the spec](../record/specs/design-stack.md).

## Pending issues

**THE HOME PC IS PENDING.** Part A ran on the work PC only. The
procedure is recorded at
[machine-setup step 12](../skills/machine-setup.md#one-time-per-machine)
and is re-runnable, but until it runs there, that seat has no
design-review agent and no screenshot loop — and nothing in git
will say so, which is why SETUP and HOME both carry the word
"pending" rather than leaving it implied.

**THE TASTE PASS IS OWED BY THE FOUNDER.** Direction, font pair
and five reference slots ship TBD. Filed in
[IDEAS](../IDEAS.md); the tower's half is a shortlist, not a
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
to [V1.S2.T5](../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1),
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
[machine-setup](../skills/machine-setup.md)'s, per seat; the taste
is the founder's, per product — so the override runs ONE WAY and
is stated in both directions:
[DESIGN](../DESIGN.md) says it wins, and the global law says it
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

## Where to look

- [the spec](../record/specs/design-stack.md) — goal, out of scope,
  plan, Done-means.
- [D-084](../record/DECISIONS.md#d-084--the-global-design-stack) —
  the ruling, its four-layer table, and the one-directional
  override.
- [DESIGN](../DESIGN.md) — the taste file, every slot TBD.
- [machine-setup step 12](../skills/machine-setup.md#one-time-per-machine)
  — the re-runnable install, and the Verify lines that check it.
- `~/.claude/CLAUDE.md` and `~/.claude/agents/design-review.md` —
  machine-local, outside this repo by design; no commit reaches
  them.
