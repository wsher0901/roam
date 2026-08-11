---
type: chronicle-story
shelf: III — the information system
status: living
updated: 2026-08-11 · the procedure becomes a master · work PC
---

# The per-machine seat and machine-setup — how a computer becomes a seat

> **CURRENT ENDING (2026-08-11).** One procedure carries everything a
> computer needs to become a Roam seat: the one-clone law with both
> desks' paths written down, the git identity, the `roam.machine`
> label every ritual stamp reads, the tools, the vault lens, and a
> Verify block for when one machine misbehaves. Field-discovered
> traps are promoted INTO it by normal PRs, which is why it has
> grown rather than rotted. **Its hardest section is now about the
> seat nobody sits at**: the cloud seat is the third seat, it is
> rebuilt from nothing for every flight, and its identity step is
> therefore ONCE PER SEAT BIRTH rather than once per machine. That
> step WAS the procedure's one silent failure mode, and **this
> story's own lane demonstrated it** — it authored four commits as
> `Claude <noreply@anthropic.com>` before reading the section that
> forbids it. **AS OF 2026-08-06 THE SESSION-START HOOK PERFORMS
> THAT STEP AUTOMATICALLY**, deriving the value from `origin/main`;
> this procedure keeps it as the rule the hook implements and as the
> manual fallback, which is the shape a silent failure needed —
> something in the repo that acts without being read.
> **AND AS OF 2026-08-11 IT IS A MASTER, NOT ONLY A PROCEDURE**
> ([D-084](../record/DECISIONS.md#d-084--the-global-design-stack)):
> step 12 installs a design stack at USER SCOPE, and because two of
> its four parts are FILES OUTSIDE GIT — `~/.claude/CLAUDE.md` and
> `~/.claude/agents/design-review.md` — the step carries their FULL
> TEXT, so the machine copy is written from this file rather than
> re-invented on the second seat. That is a new kind of load for
> this procedure: it no longer only tells a seat what to do, it
> holds the thing itself, for the one class of setup git cannot
> diff.

## What it is

[machine-setup](../skills/machine-setup.md) — the per-machine
procedure, in five parts.

**The law.** Exactly ONE roam clone per machine, with both known
seats' absolute paths written down so a stray second clone is
recognizable as a stray. Secrets and MCP tokens live in
machine-local config, never in this public repo.

**One-time per machine.** Git identity · `git config roam.machine
"work PC"` · a current CLI · `gh auth` · Obsidian on the vault ·
stage-gated MCPs.

**The vault lens.** The one-phrase view application.

**Verify.** A block to run after setup or whenever one machine
behaves differently from the other.

**Every sitting.** The recurring habits.

The keystone is item 2. `roam.machine` is a git config value that
answers one question — *which computer am I?* — and **every ritual
stamp in the workshop reads it**: the [DASHBOARD](../DASHBOARD.md)
header, every memory `updated:` line, every handoff title. It is how
a two-computer workshop's records say where they were written
without anyone typing it.

## What raised it

**The field pain of seat-switching.** Two computers, one repository,
and a founder moving between them. Everything that differs between
two machines — an identity, a tool version, an auth token, a clone
in the wrong directory — surfaces as a session behaving oddly on one
machine and fine on the other, which is the most expensive shape a
problem can take because it is not reproducible where you are
standing.

The procedure exists so that "one machine misbehaves" has a
checklist instead of a diagnosis, and so that a fix found once at one
desk is not re-discovered at the other.

## What changed, in order

- **[#3](https://github.com/wsher0901/roam/pull/3) — the seat gets a
  NAME.** The leaving ritual's title line starts using `git config
  roam.machine` as a friendly per-machine label instead of the raw
  hostname. One command touched, and it is the root of everything
  above: a machine that can name itself can stamp a record.
- **[#66](https://github.com/wsher0901/roam/pull/66) — switching
  computers becomes pull plus a checklist.** The machine-setup skill
  is born and gathers the one-clone law, the one-time checklist
  (identity, label, Obsidian, stage-gated MCPs) and the Verify
  block, with [HOME](../HOME.md) routing to it. Its governing habit
  is established here: **field-discovered traps promote INTO the
  skill via normal PRs**, so the procedure is where hard-won
  machine-local knowledge accumulates rather than where it is
  guessed at.
- **[#91](https://github.com/wsher0901/roam/pull/91) — the vault
  lens folds in.** The skill gains the copy procedure behind "apply
  the vault lens", and its Verify block gains the line that points
  at the phrase.
- **[#204](https://github.com/wsher0901/roam/pull/204) — the
  currency audit finds a per-machine obligation missing from the
  per-machine procedure.** The `COCKPIT_` credential pair was a
  standing per-seat requirement documented in
  [SETUP](../SETUP.md) and absent from machine-setup — the exact
  class of gap this file exists to close. Added as a pointer, not a
  copy, so the inventory keeps its one home.
- **The cloud seat is written in as the THIRD SEAT, and it breaks
  the "once per machine" premise.** It boots as `Claude
  <noreply@anthropic.com>` from the image's own global gitconfig, so
  it inherits neither desk and must set the personal name and GitHub
  noreply email itself, repo-local, before its first commit — left
  alone it authors under a name no other commit in this history
  carries, which is exactly the tell
  [seat-invariance](../LAWS.md#parallel-lanes--cloud) forbids. It
  need not be TOLD the value: `git log -1 --format='%an <%ae>'
  origin/main` returns it. **The trap is that the founder's real
  address is the WRONG value** — GitHub rejects a push carrying it
  outright for email privacy, which is how flight 1's cockpit met
  this gap on its very first push. And because a cloud seat is built
  fresh for every flight, this step runs ONCE PER SEAT BIRTH, not
  once per machine.

- **2026-08-06 ([#324](https://github.com/wsher0901/roam/pull/324))
  — the identity step stops depending on being read.** The
  session-start hook now sets a cloud seat's identity when it finds
  the harness default, deriving the value by this procedure's own
  recipe so no second home is created. Step 1 is backfilled to name
  the hook and keep itself as the fallback. THE REASON IS THIS
  STORY'S OWN SUBJECT: a procedure that only works when opened
  cannot fix a seat that has no reason to open it, and the failure
  was clean — push succeeds, CI passes, only the author differs —
  where its neighbour trap fails loudly.

- **2026-08-11 ([#345](https://github.com/wsher0901/roam/pull/345))
  — step 12, and the procedure becomes a MASTER.**
  [D-084](../record/DECISIONS.md#d-084--the-global-design-stack)'s
  design stack installs at user scope: the `frontend-design`
  plugin, the playwright and shadcn MCP servers, a global design
  law, and a `design-review` agent. Two of those four are files
  living OUTSIDE GIT, and the first draft of the step merely
  DESCRIBED them — which the pre-gate critic caught against a
  ticked Done-means box claiming the second machine could reproduce
  the stack from this file alone. It could not: it would have
  written two files of its own devising in different words, and
  every check would still have passed. **The repair was to put
  their full text here**, and then to test the claim rather than
  restate it — both master blocks were extracted from this file and
  diffed against the live machine copies, matching after one `×`
  that did not. The step also records what a seat CANNOT verify
  from a session: MCP servers bind at session start, so a server
  added mid-session is healthy and absent at the same time.


## Where it stands, and the step that fails silently

The procedure is healthy and actively maintained. Its promote-traps
habit has worked: every section beyond the original checklist got
there because a real machine did something surprising.

**It now carries a second kind of content, and the distinction is
worth keeping straight.** Steps 1–11 tell a seat what to DO; step
12 additionally holds WHAT TO WRITE, verbatim, because two of its
artifacts live outside the repo where nothing can diff them. That
makes this file a box master in the
[D-064](../record/DECISIONS.md#d-064--the-box-master-class-and-setup-entry-contract)
sense for those two files — with one difference that matters: their
"box" is a local filesystem rather than a product's saved prompt,
so a seat can re-apply them itself at any time, and the re-save
that other masters owe the founder is here just a re-run of the
step. The pending half is honest and on the board: **the home PC
has not run it**, and no commit can reveal that, which is precisely
why the outstanding seat rides
[DASHBOARD](../DASHBOARD.md) Needs-you rather than being inferred.

**The unresolved edge is the cloud seat's identity step, and this
story is evidence rather than speculation about it.** The lane that
wrote this file set `roam.machine` never, and authored its canary
and its first two story commits as `Claude
<noreply@anthropic.com>` — the forbidden tell — before reaching this
item's sources, at which point it read the rule and set the
repo-local identity. The deviation is recorded in this bench's
memory and PR rather than rewritten out of history.

That sequence is the finding. **The identity step is documented in
the one place a cloud seat has no particular reason to open.** A
lane's standing orders route it to [LAWS](../LAWS.md),
[parallel-lanes](../skills/parallel-lanes.md), its spec and its
memory; machine-setup is a per-machine procedure, and a lane does
not think of itself as setting up a machine. It complied here only
because the procedure happened to be one of the items it was
assigned to write about — which is luck, not a mechanism.

The failure is also silent in the way that matters: nothing rejects
the wrong identity. The push succeeds, CI passes, and the only
symptom is an author name in the history that differs from every
other commit — visible to someone reading `git log`, invisible to
every gate. Contrast the neighbouring trap, where using the
founder's real address makes GitHub refuse the push outright: **the
error that is caught is the one that fails loudly, and the error
that persists is the one that fails clean.**

Two smaller edges, named without being overstated. The one-clone law
lists two absolute Windows paths, so a third human seat means
editing the law rather than following it — fine at this scale,
and worth noticing as the file's only non-general section. And the
Verify block is a list of things a person checks, not a script; it
is the same class of per-seat manual obligation that the vault lens
already showed has no derivable completion state.

## Sources

Down-links only — this story cites the frozen record and the living
machinery beneath it, never another story's prose.

- [machine-setup](../skills/machine-setup.md) — the living
  procedure: the law, the one-time checklist, the cloud-seat
  identity section, Verify, and Every sitting.
- [the machine-labels story](../record/history/workshop/definition/machine-labels.md)
  — [#3](https://github.com/wsher0901/roam/pull/3): `roam.machine`
  replacing the raw hostname.
- [the machine-setup-skill story](../record/history/workshop/mechanism/machine-setup-skill.md)
  — [#66](https://github.com/wsher0901/roam/pull/66): the skill's
  birth and the promote-traps habit.
- [the currency-audit story](../record/history/workshop/mechanism/currency-audit.md)
  — [#204](https://github.com/wsher0901/roam/pull/204): the
  per-machine obligation missing from the per-machine procedure.
- [the flight-1 story](../record/history/workshop/mechanism/flight-1-probe.md)
  — the cockpit that met the email-privacy rejection on its first
  push.
- [LAWS §Parallel lanes & cloud](../LAWS.md#parallel-lanes--cloud) —
  seat-invariance, the rule the identity step serves.
