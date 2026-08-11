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
    claude mcp add playwright --scope user -- npx -y @playwright/mcp@latest
    claude mcp add shadcn     --scope user -- npx shadcn@latest mcp
    #   context7 is ALREADY served at user scope by the context7
    #   PLUGIN, running the identical command; adding a second
    #   server duplicates every tool. Add it only if that plugin is
    #   absent:
    #   claude mcp add context7 --scope user -- npx -y @upstash/context7-mcp
    ```

    - **c · the global design law** — `~/.claude/CLAUDE.md` carries
      a section fenced by `<!-- BEGIN design-law -->` and
      `<!-- END design-law -->`: one named direction before any UI
      code, the banned defaults, typography, color, motion, the
      five states, and reference-image handling. Re-running means
      replacing what is between those two markers, never appending
      a second copy. A project's own [DESIGN](../DESIGN.md) file
      overrides it.
    - **d · the design-review agent** — `~/.claude/agents/design-review.md`,
      read-only tools plus the playwright MCP tools, grading a
      running surface at 375px and 1440px. The name must not
      shadow a project agent; this repo's own is `reviewer`, so
      the two coexist.

    Both files are MACHINE-LOCAL and outside this repo by design —
    nothing in git proves either exists, which is why the verify
    lines below check them directly.

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
- The design stack (step 12), four checks:
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
