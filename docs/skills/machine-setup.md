---
type: skill-procedure
title: Machine setup
status: living
---
# Machine setup

## The law

- Exactly ONE roam clone per machine. Known seats:
  - work PC: C:\Users\WonseukHer\MyFile\Github\roam
  - home PC: C:\Users\wonse\MyFile\Coding\roam

  If any other clone exists on a machine (e.g. a leftover
  C:\dev\roam), delete it and point Obsidian at the survivor.

- Secrets and MCP tokens live in machine-local config (.env,
  settings.local.json, local MCP config) — never in this public repo
  ([LAWS' safety law](../LAWS.md#safety-non-negotiable)).

## One-time per machine

1. Git identity: personal name + GitHub noreply email (repo-local on
   the work PC, where the company identity is global; global
   elsewhere). core.autocrlf=true is fine — .gitattributes
   normalizes repo-side either way.
   THE CLOUD SEAT is the third seat, and the one nobody sits at. It
   boots as `Claude <noreply@anthropic.com>`, set globally in the
   image's own gitconfig, so it inherits neither desk and needs the
   same personal name + GitHub noreply email, repo-local, before its
   first commit.
   **THE SESSION-START HOOK NOW DOES THIS AUTOMATICALLY** — it fires
   only when the identity IS the harness default, derives the value
   from `origin/main` by the recipe below, re-tests it, and says so
   in its output. What follows is the rule it implements and the
   MANUAL FALLBACK when the hook cannot run or reports it failed;
   a seat should still check its own author before its first push.
   THE HOOK EXISTS BECAUSE THIS FILE IS THE ONE A CLOUD SEAT HAS NO
   REASON TO OPEN: a lane's orders route it to LAWS, parallel-lanes,
   its spec and its memory, and the 2026-08-05 cold lane complied
   only by luck — this procedure happened to be one of its own story
   subjects. Left alone it authors under a name no
   other commit in this history carries — exactly the tell
   [seat-invariance](../LAWS.md#parallel-lanes--cloud) forbids. It
   need not be told the value: `git log -1 --format='%an <%ae>'
   origin/main` returns it.
   THE TRAP is that the founder's REAL address is the WRONG value
   here — GitHub rejects a push carrying it outright, for email
   privacy, which is how flight 1's cockpit met this gap, on its
   very first push
   ([the story](../record/history/workshop/mechanism/flight-1-probe.md)).
   And this step alone is not once-per-machine: a cloud seat is
   built fresh for every flight and inherits nothing from the last
   one, so for that seat it runs ONCE PER SEAT BIRTH.
2. git config roam.machine "work PC" (or "home PC") — this is the
   seat label the ritual stamps use ([DASHBOARD](../DASHBOARD.md)
   header, memory updated: lines).
3. claude update — the workflow assumes a current CLI (hooks,
   background agents, Agent Teams).
4. gh auth status → gh auth login if needed.
5. Obsidian: open the vault at <clone>\docs (no community plugins
   required).
6. VS Code: Settings Sync ON (personal GitHub), Auto Save, word wrap.
7. Optional but recommended: npx ccstatusline@latest — persistent
   status bar (model, branch/worktree, context %, weekly usage).
8. MCPs only when their stage calls for them (see
   [SETUP §Staged](../SETUP.md#staged--turns-on-when-its-stage-opens));
   tokens stay local.
9. Vercel CLI when S2+ work touches deploys: npm i -g vercel, then
   vercel login.
10. Remote Control auto-connect: in claude run /config → "Enable
    Remote Control for all sessions" = true; enable both
    push-notification toggles. This registers every session for the
    phone so go-remote can tether it. Requires CLI ≥ 2.1.110 (claude
    update covers it).
11. The `COCKPIT_` pair — paste `COCKPIT_FIRE_TOKEN` +
    `COCKPIT_ROUTINE_ID` into this machine's `.env.local`, recipe
    and doctrine in
    [SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
    (a pointer — the secret path lives only there, never in this
    file). Without it this seat cannot run `npm run fire:cockpit`,
    the cockpit birth ladder's routine-fire rung.
12. **The design stack** — four steps, USER SCOPE, and the whole
    step is RE-RUNNABLE: every command below is a no-op or an
    overwrite when it has already been done, so a seat in doubt
    runs it again rather than inspecting first
    ([D-084](../record/DECISIONS.md#d-084--the-global-design-stack)).
    Installed on the WORK PC 2026-08-11; **the home PC is PENDING
    until the next sitting there.**

    ```text
    # a · the plugin, from Anthropic's official marketplace
    claude plugin marketplace list          # expect claude-plugins-official
    claude plugin install frontend-design@claude-plugins-official --scope user
    #   then /reload-plugins, and confirm with: claude plugin list

    # b · the MCP servers, user scope
    npx playwright install chromium         # prereq, once per machine
    #   --caps devtools is REQUIRED, not optional: without it the
    #   server exposes no recording tools at all, and the agent's
    #   motion-capture duty below silently degrades to stills.
    claude mcp add playwright --scope user -- npx -y @playwright/mcp@latest --caps devtools
    claude mcp add shadcn     --scope user -- npx shadcn@latest mcp
    #   context7 is ALREADY served at user scope by the context7
    #   PLUGIN, running the identical command; adding a second
    #   server duplicates every tool. Add it only if that plugin is
    #   absent:
    #   claude mcp add context7 --scope user -- npx -y @upstash/context7-mcp
    ```

    - **c · the global design law** → `~/.claude/CLAUDE.md`
    - **d · the design-review agent** → `~/.claude/agents/design-review.md`

    **THIS FILE IS THE MASTER FOR BOTH.** They live outside git, so
    nothing in the repo can prove or diff them — which means a
    procedure that merely DESCRIBED them would be re-invented in
    different words on the second machine, and the two seats would
    drift while both looked correct. The full text is therefore
    below, and the machine copy is written FROM here: edits ride a
    PR into this file first, then get re-applied to the machine.
    Re-running step c means REPLACING what sits between the two
    markers, never appending a second copy.

    Roam's own [DESIGN](../DESIGN.md) overrides the law in c
    wherever the two disagree
    ([D-084](../record/DECISIONS.md#d-084--the-global-design-stack)).

### c · `~/.claude/CLAUDE.md` — the master text

```markdown
<!-- BEGIN design-law -->
# Design law (global)

Applies to every project on this machine. **A project's own
`DESIGN.md` ALWAYS overrides this section** — where the two
disagree, the project wins, silently and without argument.

## Before any UI code

Commit to ONE named aesthetic direction and state it out loud
before writing the first line. "Editorial brutalist", "warm
Scandinavian utility", "technical monochrome with one signal
colour" — a name, not a mood board. An unnamed direction becomes
the default template every time.

## Banned as defaults

Not banned outright — banned as the thing you reach for when you
have not decided:

- **Typefaces:** Inter · Roboto · Open Sans · Arial · `system-ui`.
- **The purple gradient on white.** Any of its close relatives too.
- **Interchangeable glassmorphism card grids** — the blurred,
  translucent, three-across layout that fits every product and
  belongs to none.
- **Decorative emoji in UI.** Emoji as an icon system is a
  placeholder that shipped.

## Typography

- A distinctive DISPLAY + BODY pair, chosen together.
- Use the weight extremes — 200 and 800 — rather than living at
  400/600.
- Hierarchy comes from SCALE JUMPS of 3x or more, not from
  nudging 16px to 18px.

## Color

- ONE dominant colour plus ONE sharp accent. Everything else is
  neutral.
- Tokens, never ad-hoc values. A hex literal in a component is a
  decision nobody can find later.

## Motion

- Intentional only: staggered entrances, scroll-linked reveals,
  springs. No motion that merely proves motion is possible.
- In React the default is the **`motion`** library. Verify its
  current API through context7 before writing it from memory —
  this one has renamed itself and moved packages.

## Every screen ships all of its states

Loading · empty · error · long-content · mobile. A screen that
renders only its happy path is not finished, and the states are
part of the same deliverable, never a follow-up.

## When a reference image is present, it IS the target

Not inspiration. Build it, then screenshot with Playwright at
**375px** and **1440px**, compare against the reference, and
iterate — **three passes maximum**, then stop and report the
remaining gap rather than grinding.

<!-- END design-law -->
```

### d · `~/.claude/agents/design-review.md` — the master text

````markdown
---
name: design-review
description: Read-only visual critic for built UI. Screenshots a running surface at 375px and 1440px — and for motion-intensive surfaces records VIDEO or a TRACE of the opening and one interaction, because a still cannot see a spring. Grades against the global design law and the project's own DESIGN.md, and returns counted findings with their captures. Invoke when a diff touches UI and before it goes to review. Never edits, never merges, never starts a server.
tools: Read, Grep, Glob, mcp__playwright__browser_navigate, mcp__playwright__browser_resize, mcp__playwright__browser_take_screenshot, mcp__playwright__browser_snapshot, mcp__playwright__browser_console_messages, mcp__playwright__browser_click, mcp__playwright__browser_hover, mcp__playwright__browser_wait_for, mcp__playwright__browser_start_video, mcp__playwright__browser_stop_video, mcp__playwright__browser_video_chapter, mcp__playwright__browser_start_tracing, mcp__playwright__browser_stop_tracing, mcp__playwright__browser_close
---

# design-review — the visual gate

You look at what was actually built and say whether it is good. You
change nothing.

## What you need from the caller

A **URL of a running surface** (`http://localhost:3000/plan`) or a
`file://` path. You have no shell, so you cannot start a dev
server or build anything — if no reachable surface was given, say
so in one line and stop. That is a complete, useful answer, not a
failure.

## The two rulebooks, in this order

1. **The project's own `DESIGN.md`**, if one exists — find it with
   Glob. It is the taste authority and it OVERRIDES the global law
   wherever the two disagree. Read it first. A slot marked TBD is
   NOT yet a rule: report it as unset, never invent the answer.
2. **The global design law** in `~/.claude/CLAUDE.md` — direction
   named, banned defaults, typography, color, motion, states,
   reference-image handling.

Where the project file is silent, the global law governs. Where the
project file speaks, it wins.

## The pass

1. `browser_resize` to **375 × 812**, `browser_navigate`, then
   `browser_take_screenshot`. Look at it.
2. `browser_resize` to **1440 × 900**, screenshot again. Look at it.
3. `browser_snapshot` for the structure behind the pixels, and
   `browser_console_messages` — a console full of React key
   warnings is a design finding too, because it is what shipped.
4. Walk the STATES the surface claims to have: loading, empty,
   error, long-content, mobile. Any state you could not reach, name
   as unverified rather than passing it.
5. **If the surface is motion-intensive, capture it now** — the
   section below says how. Do this BEFORE closing the browser.
6. `browser_close`.

## Motion-intensive surfaces: capture time, not frames

**A SCREENSHOT CANNOT SEE A SPRING.** When the surface animates —
an opening sequence, a transition, anything whose correctness is a
matter of TIMING — stills are only the composition check, and the
motion needs a recording.

A surface is motion-intensive if ANY of these is true — and the
list is the whole test, so read it against the surface rather than
deciding by feel:

- it plays an entrance or assembly on load;
- it moves between states rather than swapping them;
- **it reveals or transforms anything on scroll**;
- **it springs on hover or press** — any interaction whose
  correctness is its timing rather than its result;
- the caller says it is.

For those surfaces, capture **VIDEO or a TRACE at BOTH widths** —
375 and 1440 — of two things:

1. **The opening moment**, from navigation to settled.
2. **One interaction**, driven with `browser_click` /
   `browser_hover` and `browser_wait_for`: whichever one the
   surface is actually about.

The tools are `browser_start_video` / `browser_stop_video` (with
`browser_video_chapter` to mark the two moments in one recording)
or `browser_start_tracing` / `browser_stop_tracing`. **They exist
only when the MCP server was registered with `--caps devtools`**
(step 12b). If you cannot see those tools, the server is
misregistered — say exactly that, because it is a five-second fix
and not a reason to skip the duty.

**ATTACH THE CAPTURES TO THE FINDINGS** — a motion finding that
cannot be replayed is an opinion. Name the file beside the finding
it supports, and say which width it came from.

If capture is genuinely unavailable, **say so in one line and grade
composition only, marking every timing question UNVERIFIED.** Do
not infer a spring from two frames; that is the failure this whole
section exists to prevent.

## What you return

A count first, then the findings, worst first. Every finding names
**which rule** it breaks and **which rulebook** that rule came
from, so the caller can tell taste from law:

```text
design-review — <N> findings (<M> blocking)

1. 🔴 <one sentence: what is wrong, where it is>
   Rule: <the rule, verbatim-ish> · Source: DESIGN.md | global law
   Seen at: 375px | 1440px | both
2. 🟡 ...

Unverified: <states or viewports you could not reach, or "none">
Unset: <DESIGN.md slots still TBD that this surface needed>
Captures: <files, with the width each came from — or "stills only, and why">
```

🔴 is a rule broken. 🟡 is a judgment call worth the caller's
attention. **Zero findings is a legitimate result** — say "0
findings" plainly rather than manufacturing a nit to look
thorough.

## What you never do

- Never edit a file, run a build, or touch git.
- Never grade code style, naming, or architecture — other reviewers
  own those. You own what the eye meets.
- Never fill in a TBD. An unset taste slot is the founder's to set,
  and guessing it launders an invention into a rule.
````

## Vault lens

Per machine, once — say "apply the vault lens" in any control-tower
session. The procedure that phrase runs:
1. Ensure docs/.obsidian/ exists (create it if missing — Obsidian
   adopts it on next launch).
2. Copy .claude/vault-seed/graph.json and
   .claude/vault-seed/bookmarks.json into docs/.obsidian/,
   overwriting those two files ONLY — nothing else in .obsidian/ is
   touched.
3. Remove the retired Dataview plugin if present: delete
   docs/.obsidian/plugins/dataview/ and its entry in
   docs/.obsidian/community-plugins.json.
4. Confirm to the founder: "vault lens applied — restart Obsidian
   to load it."

The lens itself: color groups — history gray · data blue · skills
green · memory+specs yellow · everything ungrouped (the core docs)
keeps the accent color; default graph filter `-path:record` (clear
it in Graph view whenever you want the archive visible); Bookmarks —
[DASHBOARD](../DASHBOARD.md) · [HOME](../HOME.md) ·
[ROADMAP](../ROADMAP.md) · [LAWS](../LAWS.md), the front door on
every seat.

Known behavior, harmless: Obsidian on Windows may realign markdown
tables and leave zero-content CRLF working-tree changes; git
normalizes them at commit and they never enter history.

Live docs/.obsidian/ stays gitignored; the seed travels in
`.claude/vault-seed/`, so every machine — including a future third —
gets the same lens from origin.

## Verify (after setup, or whenever one machine misbehaves)

- node --version → Node 20+ (stack and hooks require it)
- git --version · gh auth status → authenticated
- claude --version → current (≥ 2.1.110 for Remote Control)
- claude /config → "Enable Remote Control for all sessions" = true
  (the go-remote tether needs it)
- git config roam.machine → returns this seat's label
- From the repo root: node .claude/hooks/session-start.mjs → prints
  the sync line + [DASHBOARD](../DASHBOARD.md) contents
- Vault lens applied (if not: say "apply the vault lens")
- The design stack (step 12):
  - `claude plugin list` → `frontend-design@claude-plugins-official`
    at user scope, enabled
  - `claude mcp list` → `playwright` and `shadcn` ✔ Connected, and
    context7 connected from either the plugin or its own server
  - `~/.claude/CLAUDE.md` contains the `design-law` markers ONCE
  - `~/.claude/agents/design-review.md` exists
  - THE SERVERS BIND AT SESSION START, so a server added mid-session
    is absent from that session's tools however healthy
    `claude mcp list` says it is — restart before trusting it, and
    expect a one-time trust prompt for each new server.

## Every sitting

Nothing. The hooks own sync and briefing — open claude in the repo
and talk.

## Notes

- The repo needs no Python; a conda "(base)" prompt is harmless.
- Machine-specific traps discovered in the field land first in the
  current task's memory (task-local) or
  [DASHBOARD](../DASHBOARD.md)'s Needs-you (founder-facing);
  permanent ones get promoted here via a normal PR
  ([LAWS §Knowledge & tracking](../LAWS.md#knowledge--tracking)).
- PowerShell mangles em dashes (and some non-ASCII) on command
  lines — pass long text to commands via files, never inline.
- Phone (once): the Claude app and the GitHub app installed, signed
  into the same accounts, notifications allowed — the go-remote tether
  and the cloud lane-worker both reach you there.
