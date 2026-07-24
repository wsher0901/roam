---
type: home
title: Home
status: living
---
# Home — the manual & encyclopedia

Roam is one engine for travel planning: from as little as an origin
and free dates it suggests trips, plans them day by day, and
re-validates the whole plan on every edit — catching the small
checkable details (weather per activity, tides, closures, crowds,
flight-time sense) that other planners miss. It never fabricates:
every claim carries a source and a confidence, and anything
unverifiable is labeled unverified — the reliability law. Full
identity: FOUNDATION.md.

Three documents govern the workshop; this page explains all of them.
LAWS.md INSTRUCTS — the universal rules every session loads and must
obey. ENGINE.md holds the STANDING CHOICES of the product's brain —
the engine on paper. DECISIONS.md holds HISTORY — every choice as an
append-only D-number with its rationale and the alternatives it
rejected. THIS FILE answers "how does anything work, and why is it
like that": it explains and links, holds ZERO live state, and
duplicates no rule — where a rule is restated here for readability,
the restatement is a reading aid and the linked home stays canonical.
Any "where are we" question is answered by DASHBOARD.md (repainted by
rituals) or by sitting down and talking — never by content here.

Sources:
[reliability law](FOUNDATION.md#the-reliability-law)
[FOUNDATION.md](FOUNDATION.md)
[LAWS.md](LAWS.md)
[ENGINE.md](ENGINE.md)
[DECISIONS.md](DECISIONS.md)
[DASHBOARD.md](DASHBOARD.md)

## Start here — the questions

| Question | Go to |
|---|---|
| What are we building, and for whom? | [FOUNDATION.md](FOUNDATION.md) |
| What's the plan, in what order? | [ROADMAP.md](ROADMAP.md), read with the [Roadmap manual](#roadmap-manual) |
| Where are we right now? | [DASHBOARD.md](DASHBOARD.md) — or just talk: control-tower sessions brief unprompted ([pickup](skills/pickup.md)) |
| What are the working laws? | [LAWS.md](LAWS.md) |
| Why did we choose X? | [DECISIONS.md](DECISIONS.md); engine rules consolidated: [ENGINE](ENGINE.md) |
| What does the workshop run on? | [SETUP.md](SETUP.md) |
| How does anything work around here? | [§The mechanisms](#the-mechanisms) |
| What does a term mean? | [§Terms](#terms) |
| What's the contract of a task? | its spec in [docs/specs/](specs/README.md) |
| What's the story of a task in flight? | its memory file in [docs/memory/](memory/README.md), living on the task's branch |
| What's the story of a shipped task? | its file in [docs/history/](history/README.md) |
| What has shipped? | [DASHBOARD §Shipped](DASHBOARD.md#shipped-latest--full-record-the-ledger), derived from [history/](history/README.md) |
| How do I read the data files? | [§Reading the data files](#reading-the-data-files) |
| I'm sitting at a new or second machine | [machine-setup](skills/machine-setup.md) |
| How do I start a Design session? | [DESIGN-KICKOFF.md](DESIGN-KICKOFF.md) |
| I've been away for weeks | open [DASHBOARD.md](DASHBOARD.md), then just talk — [pickup](skills/pickup.md) rebuilds the rest |

## One day in the workshop
You sit down and type anything — pickup claims the baton and hands
you the sit-down summary: what shipped while you were away, which
parallel sessions flipped state, what needs you. You give the merge
words the summary asked for, answer any BLOCKED question, and the
fleet moves on without you. Then the main session: you and the
control tower drive one task — discuss, decide, and author
in-session (CC-direct, the standard working mode); THE GATE, the
independent review the no-solo-approval law requires (external Web
review when the diff is self-authored), your yes, the weld.
Somewhere
in the afternoon you say "run T3–T6 in parallel" and four benches
are born, four lanes fly; the pacing law keeps only Now plus one
parallel slot on your desk. Leaving is one sentence: "done for
today" parks every local lane and halts the machine; "keep working
while I'm out" lifts the eligible ones to the cloud and fires the
cockpit — the control tower online — briefed with the flight plan;
"go remote"
tethers the machine to your phone instead (a backstop posture), so
you drive the fleet from
your pocket.
Either way the board is repainted before the lights go out, and the
next seat — tomorrow, or your phone tonight — starts by reading it.
Nothing important ever lives only in a conversation.

Sources:
[pickup](skills/pickup.md)
[handoff](skills/handoff.md)
[liftoff](skills/liftoff.md)
[ship](skills/ship.md)
[pacing law — LAWS §Workflow](LAWS.md#workflow-non-negotiable)

## The daily loop

The founder's whole day, as the system sees it: sit down at either
PC and open Claude Code in the repo — the session hook pulls main and
reads the board before you type a word. Say anything ("hi" works);
the sitting begins with the pickup briefing rendering itself — where
everything stands, what needs you, one recommended next step. Then
work: talk, decide, review. Every task is born on its own branch with
a draft PR (bench-first); commits flow as the work's heartbeat; the
moment a task's work is complete, ship runs itself and asks for the
merge — your conversational yes is the only gate. When you're done
for the day, one leaving phrase ("done for today", "bye") runs
handoff; "take it to the cloud" runs liftoff instead — it hands the
open work to cloud lanes and fires the cockpit, your away command
deck, briefed from the board; "go remote" tethers the machine to
your phone instead (backstop — machine-off is the standard away
posture). The first two close the session; go remote keeps it
open. Walk away.

Sources:
[pickup](skills/pickup.md)
[bench-first](#task-anatomy--lifecycle)
[ship](skills/ship.md)
[handoff](skills/handoff.md)
[liftoff](skills/liftoff.md)

The two touchpoints (LAWS §The two touchpoints) are the founder's
ONLY ritual duties:

1. **Final merge approval** — every merge waits for your explicit
   yes; the sole exception is the micro-PR.
2. **The leaving ritual** — the leaving phrase or `/handoff`, with
   the Web/Design paste carried inline before it — no question asked
   (and pasting Web/Design blocks into Code during the day).

Sources:
[LAWS §The two touchpoints](LAWS.md#the-two-touchpoints)
[micro-PR](#micro-prs)

The promise behind the design: everything else — recording,
bookkeeping, status, claim checks, dispatch, briefings — runs
itself. Genuine uncertainty and judgment calls still come to you;
housekeeping never does.

Four tools, four verbs — and only one of them writes. Claude WEB
reviews (and thinks): its one MANDATORY job is the external review
of self-authored diffs (the no-solo-approval law,
[LAWS §Workflow](LAWS.md#workflow-non-negotiable)); as an optional
thinking room, what it concludes still travels as a paste block
(WEB-INSTRUCTIONS) — a tool since
[D-046](DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock),
not a requirement: CC-direct is the standard working mode at both
seats — discuss, decide, author, bookkeep in-session. Claude DESIGN
draws: a no-write surface whose deliverables enter the repo only as
extracted token values (DESIGN-KICKOFF). Claude CODE writes: every
repo change flows through it as a PR. Obsidian READS: the vault is
docs/; quick capture goes only into IDEAS.md, and nothing rituals
own — above all the board — is ever hand-edited.

Sources:
[WEB-INSTRUCTIONS](WEB-INSTRUCTIONS.md)
[DESIGN-KICKOFF](DESIGN-KICKOFF.md)
[IDEAS.md](IDEAS.md)
[board](#the-board)

## The files — what each one is for

| File | What it is | Who writes it | When / lifecycle |
|---|---|---|---|
| [LAWS.md](LAWS.md) | the universal working laws every session loads (root [CLAUDE.md](../CLAUDE.md) imports it) | founder-approved PRs | living; changes rare and deliberate |
| [FOUNDATION.md](FOUNDATION.md) | timeless product identity & principles | founder-approved PRs (+ D-number) | living; only sentences no shipped version can falsify |
| [ROADMAP.md](ROADMAP.md) | the version ladder — versions → stages → task checkboxes; the ONLY stored task state | structure via [decide](skills/decide.md); ticks via [ship](skills/ship.md)'s weld | living, rolling-wave depth |
| [DASHBOARD.md](DASHBOARD.md) | the rendered state surface | rituals only — never hand-edited | living; repainted at ritual moments, never trusted over git |
| [DECISIONS.md](DECISIONS.md) | the decision log, one D-number per choice | [decide](skills/decide.md) | append-only; entries are never rewritten |
| [SETUP.md](SETUP.md) | everything the workshop runs on — stack, configs, tools; once-and-done vs per-machine vs staged | ops PRs | living |
| [ENGINE.md](ENGINE.md) | the engine on paper — pipeline stages, decided rules in slots, OPEN register | [decide](skills/decide.md) ripples; invents nothing | living consolidation; seeds the [V1.S3](ROADMAP.md#v1s3--engine-core--two-families-deep) contract |
| [IDEAS.md](IDEAS.md) | the single untriaged inbox — no Issues, no boards ([D-023](DECISIONS.md#d-023--2026-07--universal-draft-pr-at-birth--micro-pr-carve-out-recut-amends-d-002-d-008-d-020)) | Claude Code, the moment an idea or defect is voiced | lines leave only by triage into [ROADMAP](ROADMAP.md) via decide |
| [DESIGN-KICKOFF.md](DESIGN-KICKOFF.md) | the Claude Design session preamble + governance rules | ops PRs | living until the repo-synced design system replaces it |
| [WEB-INSTRUCTIONS.md](WEB-INSTRUCTIONS.md) | master copy of the Claude Web Project-instructions box | ops PRs | living; re-pasted into the box after every edit (the box is a copy, never the source) |
| HOME.md | this manual & encyclopedia; zero live state | founder-approved PRs | living |
| [data/FACTS.md](data/FACTS.md) | every fact the engine must know + every traveler parameter + the telemetry vocabulary ([Appendix C](data/FACTS.md#appendix-c--telemetry-vocabulary-what-the-app-records)) | [V1.S1](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code) tasks via PRs | living; IDs stable, extension append-only |
| [data/SOURCES.md](data/SOURCES.md) | the vetted source registry, one entry per source slot | source-vetting tasks (T2–T6), consolidated at [T7](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code) | living; grades move under the demotion law |
| [data/SCHEMA.md](data/SCHEMA.md) | human-readable mirror of the SQL schema | [V1.S1.T7](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code) | placeholder until T7 ships |
| [specs/](specs/README.md) | per-task contracts + [TEMPLATE](specs/TEMPLATE.md) | born at task birth when discussion opened the task; [ship](skills/ship.md) finalizes | open → shipped or superseded; never deleted |
| [memory/](memory/README.md) | in-flight task stories in the locked format ([TEMPLATE](memory/TEMPLATE.md)) | the task's own seat — baton-holder at rituals, lanes at their four moments | lives on the task's branch; MOVES to history/ at ship |
| [history/](history/README.md) | permanent shipped narratives, one per task | [ship](skills/ship.md)'s atomic weld | frozen after landing (link repairs only) |
| [skills/](skills/) | ritual procedures + workshop manuals, vault-readable | founder-approved PRs + promoted gotchas | living |
| docs/.obsidian/ | Obsidian's own workspace config | Obsidian | gitignored, never committed |
| [../CLAUDE.md](../CLAUDE.md) | two-line shim importing [LAWS](LAWS.md) into every session | ops PRs | changes only if LAWS moves |
| [../AGENTS.md](../AGENTS.md) | vendor note for non-Claude agents (Next.js docs pointer) | scaffold | rarely touched |
| [../README.md](../README.md) | the public front door — what Roam is, where docs live | ops PRs | grows a demo section at [V1.S8](ROADMAP.md#v1s8--demo-polish) |
| `.claude/settings.json` | shared harness config — hooks wiring, permission allow/deny lists, plugins, env flags | ops PRs | living |
| `.claude/settings.local.json` | machine-local config (tokens, per-machine plugins) | each machine, by hand | gitignored; never in the repo |
| `.claude/hooks/session-start.mjs` | session-start hook: sync main, inject the board, order the briefing | ops PRs | living |
| `.claude/hooks/session-end.mjs` | session-end hook: the crash net — auto-commit + push WIP on lane branches | ops PRs | living |
| `.claude/skills/*/SKILL.md` | trigger stubs, one per ritual/manual — each only points to its [docs/skills/](skills/) procedure | ops PRs | point-only; never hold procedure text |

Portraits of the load-bearing ones — what each is FOR, and what
would break without it:

**FOUNDATION** is the product's identity: what Roam is, the spine,
what Roam checks, the reliability law, the principles — only
sentences that stay true across versions. It is the yardstick every
PR and every lane review is judged against. Without it, "is this
Roam?" would be re-litigated in every conversation, and scope would
drift with whoever spoke last. It is read at judgment moments —
ship's PR pre-review, lane pre-review, decide's ripple scan,
equipment vetting, the Design kickoff's identity line — and reaches
the engine code through ENGINE's seeding.

Sources:
[FOUNDATION](FOUNDATION.md)
[ship](skills/ship.md)
[decide](skills/decide.md)
[equipment vetting](SETUP.md#staged--turns-on-when-its-stage-opens)
[Design kickoff](DESIGN-KICKOFF.md)
[ENGINE](ENGINE.md)

**ROADMAP** is the build order made falsifiable: versions and stages
with testable completion criteria, tasks as checkboxes — the only
place task state is stored at all. Without it there is no "next", no
claim check, and no honest progress bar; with it, one glance settles
what is done, active, and queued.

Sources:
[ROADMAP](ROADMAP.md)

**DASHBOARD** renders everything the ladder and the narratives
already know into one screen — and is deliberately disposable:
rituals repaint it wholesale from sources, and git outranks it on any
disagreement. Without it the founder would reconstruct state from
branches and PRs by hand; because it is derived, it can never become
a second truth.

Sources:
[DASHBOARD](DASHBOARD.md)

**LAWS** is the constitution — the non-negotiables every session
loads before its first word (workflow, task anatomy, lanes, safety,
self-improvement). Without it every session would improvise its own
workflow, and the guarantees the rest of this page describes would be
habits instead of laws.

Sources:
[LAWS](LAWS.md)

**DECISIONS** is the append-only memory of choices: each D-number
records what was decided, why, and what it rejected — so settled
questions stay settled. Without it the same debates would replay
forever, and nobody could tell a principle from an accident.

Sources:
[DECISIONS](DECISIONS.md)

**ENGINE** — The engine's blueprint, shaped like the engine itself:
ten pipeline stages, each with inputs, outputs, a short procedure,
its binding rules, and a Sources line. What is decided reads as
rules; what is not decided is a numbered OPEN slot in the Open
register — filling one takes a D-number. The V1.S3 contract and V1.S4
brain prompt are written FROM this file; engine PRs are reviewed
AGAINST it. It grows by accretion: new sources, families, and metrics
plug into stages; the shape stays.

Sources:
[ENGINE](ENGINE.md)

### SETUP
The workshop's inventory, pure listing: the stack, what is
configured once in the repo or the cloud, what every machine owes
(machine-setup is the skill that pays it), and what is staged for a
future stage. Status never lives here — the DASHBOARD holds it.

**specs/** holds each task's stable contract — goal, scope edges,
plan, Done-means — born from the discussion that opened the task, so
conclusions don't evaporate with the chat. Without specs, ship would
have nothing objective to gate on, and "done" would mean "tired".

Sources:
[specs/](specs/README.md)
[ship](skills/ship.md)

**memory/** holds each task's living story in the locked format
(Status first), rewritten cognitively at rituals and at the lane
trigger moments. It is how a session that has never seen the task
before — tomorrow's baton-holder, a rescuer of a dead lane — picks
it up
cold. Without it, every interruption would cost the whole context.

Sources:
[memory/](memory/README.md)

**history/** is where memories retire: one narrative file per shipped
task, moved at the weld with its shipped date and PR number. Git
keeps the technical record; history/ keeps the meaning. Without it,
"why does this exist?" would eventually have no answer a human can
read.

Sources:
[history/](history/README.md)

**IDEAS** is the one inbox: any idea or defect voiced outside the
current task's scope becomes a dated line, unasked. Without it, stray
thoughts would either derail the current task or be lost; with it,
nothing is scope until triaged, and nothing is forgotten either.

Sources:
[IDEAS](IDEAS.md)

**skills/** holds the ritual procedures and workshop manuals as
vault-readable pages — the founder can read every ritual in Obsidian,
and the `.claude/skills/` stubs that trigger them cannot drift
because they only point. Without this split, the workshop's
automation would be invisible and unauditable.

Sources:
[skills/](skills/)

**data/** is the engine's ground truth on paper: FACTS (what the
engine must know, what it may be told, and what the app records about
itself — Appendix C), SOURCES (where each fact verifiably comes
from), SCHEMA (how it will be stored). Without this layer the
reliability law would be a slogan; with it, every claim the product
ever renders traces to a vetted, graded source.

Sources:
[data/](data/FACTS.md)
[FACTS](data/FACTS.md)
[Appendix C](data/FACTS.md#appendix-c--telemetry-vocabulary-what-the-app-records)
[SOURCES](data/SOURCES.md)
[SCHEMA](data/SCHEMA.md)

**DESIGN-KICKOFF** carries the rules into Claude Design, which cannot
read the repo's instructions: the pasted preamble sets identity,
scope, and the no-write law for every Design session. Without it each
session would need the rules re-explained — or worse, wouldn't get
them.

Sources:
[DESIGN-KICKOFF](DESIGN-KICKOFF.md)

## The mechanisms

How the workshop actually works, one mechanism at a time. The laws
themselves live in LAWS; the procedures in docs/skills/; this section
explains why they fit together.

Sources:
[LAWS](LAWS.md)
[docs/skills/](skills/)

### Task anatomy & lifecycle

**Birth — bench-first.** Every task, control tower and cockpit
included, starts
identically: freshly pulled main → branch → spec (when discussion
opened the task) + memory stub → a DRAFT PR pushed to origin BEFORE
any session works it (D-023; procedure: parallel-lanes §Bench-first
birth). The point of the bench: from its first minute, a task exists
in public — branch, contract, story, and window all on origin — so no
work ever lives in only one place, and any seat (or any rescuer) can
see and claim it. The draft PR is the task's public window for its
whole life.

Sources:
[D-023](DECISIONS.md#d-023--2026-07--universal-draft-pr-at-birth--micro-pr-carve-out-recut-amends-d-002-d-008-d-020)
[parallel-lanes §Bench-first birth](skills/parallel-lanes.md#bench-first-birth-baton-holder-procedure)

**Work — the heartbeat.** Commits are the heartbeat; every commit is
pushed. Small steps live as checkboxes in the spec's Done-means (or
in the PR description when the ROADMAP line was already fully
specified and no spec exists). Contract changes dual-write: the spec
receives the edit, and the memory narrates what changed and why — the
contract stays clean while the story keeps the reasoning.

Sources:
[ROADMAP](ROADMAP.md)

**Ship — the atomic weld.** When the work is complete, ship runs
itself: tests and linter, an honest Done-means check, weave-lint, the
memory's final rewrite, the draft→ready flip, a plain-language
summary — then THE GATE: the founder's explicit yes, never inferred.
On approval comes the weld: ONE bookkeeping commit on the same
branch — the ROADMAP checkbox ticks, the memory file MOVES to
history/ (frontmatter gains its shipped date and PR number), the spec
finalizes — then squash-merge, branch deleted, main pulled. Why
atomic: state and work land together or die together. There is no
instant where main claims "done" without containing the work, or
contains the work while claiming "not done" — a crash between merging
and bookkeeping cannot exist, because they are the same merge.
(Workshop tasks with no roadmap line ship the same way, keyed by
slug, minus the tick.)

Sources:
[ship](skills/ship.md)
[ROADMAP](ROADMAP.md)
[history/](history/README.md)

**Status is never stored — it is read.** A task's status is not a
field anywhere. It is read from the bench, the box, and the note:
git (does the branch exist; is the PR draft or ready; what was
pushed when), the ROADMAP checkbox (which flips only inside the
weld), and the memory's Status section (the narrative handshake
surface). The board renders these; it originates nothing. That is why
nothing here can rot: there is no status copy to forget to update.

Sources:
[board](#the-board)

### Information relay & retention

Claude has no memory. Every session — tomorrow's, the other PC's, a
cloud lane's — wakes knowing nothing it wasn't handed. The repo IS
the memory: every session is an amnesiac walking into a workshop
arranged so thoroughly that notes on the benches replace
remembering. Everything in this section exists to answer one
question: how does what one session learned reach the next one,
whole?

**The relay map — what is written where, by whom, when:**

- **A lane's own memory, at four moments**
  ([the diary rule](skills/parallel-lanes.md#the-four-memory-moments-the-lanes-diary-rule)):
  the handshake claim when it wakes; each decision or dead end AS
  IT HAPPENS; the moment it blocks (with a matching `BLOCKED:` PR
  comment); and the completion rewrite BEFORE flipping its PR
  ready. Dead ends are recorded precisely because they are
  invisible in the final diff — the next reader must not re-walk
  them.
- **Handoff's cognitive rewrite**
  ([handoff](skills/handoff.md), FULL): at every leaving, each
  active task's memory (except live lanes, which keep their own) is
  REWRITTEN for a cold reader — not appended to. Rewriting forces
  re-reading; a memory that is only ever appended to becomes a log,
  and logs rot.
- **The inline Web/Design paste** ([handoff step
  2](skills/handoff.md#2--the-inline-webdesign-paste-full-only)):
  the founder's leaving message carries it — any text before the
  trigger (a leaving phrase or `/handoff`) is the paste, taken
  verbatim; a bare trigger means none. This is the ONE manual carry
  in the entire loop, and it cannot be automated: Claude Web and
  Claude Design cannot write the repo, and no session can see the
  founder's other browser tabs. Only the founder carries that
  knowledge across — so the leaving message carries it inline, no
  question asked.
- **Ship's weld** (above): the moment a task's story stops being
  in-flight and becomes permanent history — in the same commit as
  the work it narrates.
- **Pickup's reconciliation** ([pickup](skills/pickup.md)): every
  sitting starts by reading git AND the board AND the memories —
  and where they disagree, git wins, said plainly. If the board is
  stale it is repainted on the spot from sources. The board's
  maiden week supplied the canonical example: it listed
  already-merged branches as still sitting on origin, but they were
  phantoms — stale local remote-tracking refs no ritual had ever
  pruned; GitHub had deleted them at merge. One fetch-with-prune
  and a repaint healed it, exactly as designed: the note lied, git
  didn't.

**The retention guarantees** — what survives what:

| Event | What survives | What is lost |
|---|---|---|
| A machine dies mid-work | every pushed commit — and pushing every commit is law; the bench artifacts (branch, spec, memory, draft PR) live on origin from birth | at most the working tree's unpushed edits |
| A session ends uncleanly on a lane branch | the session-end hook auto-commits and pushes WIP as an explicit `wip:` commit | nothing, if the network held; otherwise the commit waits locally for the next push |
| A lane dies or a spawn fails | the pre-birthed bench; every pushed commit; the failure itself, written into the lane's memory and the lane's Sessions row (+ Needs-you mirror) — nothing is silently parked ([dispatch law](LAWS.md#workflow-non-negotiable)) | only the lane's unpushed thoughts |
| A ritual is skipped | all git state, and therefore all status — status is read, not stored; the next [pickup](skills/pickup.md) reconciles and repaints | the day's Web/Design narrative, if FULL handoff (which reads the paste from the leaving message) never ran — that knowledge has no other carrier |
| Weeks away | everything: the board renders where things stand, memories hold each story, pickup rebuilds the briefing from sources | nothing — at worst the board is stale until pickup heals it |

**Origin is the only courier.** Nothing passes between the work PC,
the home PC, and cloud lanes except what origin carries: pushed
commits, pushed branches, PRs, and the board (itself just a pushed
file). Machines share no other channel — no local state matters,
which is why any seat can die, be reinstalled, or go offline
without the project losing a sentence. If it isn't on origin, it
doesn't exist.

**Reading it back — recall.** Everything above is the write path;
recall is the read path. It fires on its own judgment for any question
about the past, ongoing, or future state of the project, routes the
question through the routing table (the read mirror of
[§Where information goes](#where-information-goes)), and answers FROM
the files with a Sources block — never from conversational memory. Its
honesty rails: "not recorded" beats reconstruction, and because chats
are disposable, anything that never left a conversation is truthfully
not recorded — that fix belongs to [handoff](skills/handoff.md)'s
harvest, not to recall. Home: [recall](skills/recall.md) ·
[D-039](DECISIONS.md#d-039--2026-07--recall--questions-answered-from-files-never-from-memory-the-d-036-routing-tables-read-mirror-model-invoked-at-discretion).

### The five rituals

Rituals are the workshop's verbs — the only writers of shared
state. Each fires itself; the founder never has to remember one.
(How they fire: [§Skills](#skills). Two are a pair: ship ends by
running handoff in QUIET mode.)

**pickup** — fires unprompted on the founder's first message of a
control-tower session (dispatched lanes skip it). It claims the
baton,
reads ROADMAP + DASHBOARD + every active memory + live git,
self-heals stranded micro-PRs, repaints the board if stale, and
renders the sit-down briefing: you-are-here bars, cloud lanes, focus
blocks, needs-you list, one next action. The founder sees the whole
workshop in one screen and starts talking.

Sources:
[pickup](skills/pickup.md)
[ROADMAP](ROADMAP.md)
[DASHBOARD](DASHBOARD.md)

**handoff** — the leaving ritual; fires on leaving phrases ("done for
today", "bye"), explicit call, or as ship's QUIET tail. FULL mode
secures all work onto origin, reads the Web/Design paste from the
leaving message, rewrites every active non-lane memory for a cold
reader, repaints the board, and ships the note as a micro-PR — then
closes the session. QUIET (ship's tail) only repaints and recommends
what's next; it never closes the session.

Sources:
[handoff](skills/handoff.md)

**ship** — fires the moment a task's work is complete; a task is
never declared done in conversation without it. It syncs the branch
with main, gates (tests, linter, spec, weave-lint), rewrites the
memory, flips the draft PR ready, and summarizes in plain language —
then stops at THE GATE for the founder's explicit yes. On approval it
performs the atomic weld, squash-merges, deletes the branch, pulls
main, and runs its QUIET tail.

Sources:
[ship](skills/ship.md)
[atomic weld](#task-anatomy--lifecycle)

**decide** — fires unasked on a roadmap-level change — a task added,
subtracted, moved, or pivoted; a stage reordered or paused — or any
standing product/workshop convention change; task-local implementation
calls stay in the task's memory instead. It appends the next
D-number to DECISIONS in the locked format and applies the ripple —
every file the decision touches — in the SAME commit, so the log and
reality never diverge. A decision is never a micro-PR; standalone
ones get their own branch and the founder's approval.

Sources:
[decide](skills/decide.md)
[DECISIONS](DECISIONS.md)

**liftoff** — fires on "take it to the cloud" and equivalents; closes
the session. It runs a FULL handoff first (origin must be whole
before anything spawns), triages every open item through the
eligibility gate, births anything unbirthed bench-first, spawns
eligible lanes cloud-side, verifies each canary handshake, repaints
the board as the flight plan — every lane airborne, held, or
failed, each with its reason — and ends by FIRING THE COCKPIT
([D-046](DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)),
handing it the baton for the flight. The board IS the flight plan
and the birth prompt only points at it — a prompt is a delivery
channel and channels truncate, so where they disagree the board
governs ([#193](https://github.com/wsher0901/roam/pull/193)). From the trigger phrase on it
needs
zero mid-ritual approvals: the founder is leaving.

Sources:
[liftoff](skills/liftoff.md)

### The baton

The control tower is the ONE session the founder is actively
driving — the
only seat that runs rituals, writes main's bookkeeping, and repaints
the board. The baton is the right to be that session: claimed by
pickup on fresh origin, released by FULL handoff or liftoff (both of
which close the session — liftoff's fire hands the baton to the
cockpit it summons, the control tower online, for the length of the
flight). Between control towers the baton is dormant —
nobody holds it, and lanes fly on regardless (baton law).

Sources:
[pickup](skills/pickup.md)
[handoff](skills/handoff.md)
[liftoff](skills/liftoff.md)
[baton law](LAWS.md#parallel-lanes--cloud)

Why exactly one: the board and main's bookkeeping have a single
writer at a time precisely so they can be trusted. Two control
towers
would mean two sessions repainting the same surface and running
rituals against each other — the classic two-truths failure this
architecture exists to prevent. The founder can sit anywhere, but
only in one place at a time.

Supersession handles the stale seat: every repaint stamps date,
ritual, and seat on the board. A session that discovers its own
seat-stamp superseded — the founder has sat down somewhere else —
self-closes: push what exists, write nothing. And release is
physical, not merely procedural — the close-lock: FULL handoff and
liftoff end by writing `.claude/session-closed` as their last act,
and from then on the prompt hook rejects every input to that session
("this session is closed — open a fresh `claude`"). The session-start
hook deletes the flag before anything else, so new sessions are
always live.

Sources:
[handoff](skills/handoff.md)
[liftoff](skills/liftoff.md)

### Lanes, local & cloud

A lane is one parallel work stream — a background agent, a worktree
session, or a cloud session — flying one task on its own branch.
The lane law is seat-blind: local and cloud lanes follow identical
rules, so a task's artifacts never betray where they were made (the
seat-invariance law — only ritual stamps name seats). Mechanics live
in parallel-lanes; the shape of the law, in prose:

The baton-holder (control tower or cockpit) births every lane
bench-first — branch, spec,
memory
stub, draft PR, all verified on origin BEFORE any session exists.
Then the canary handshake: the lane's first act is one trivial pushed
commit (its memory Status → "claimed"); the baton-holder answers by
writing "airborne" into that same memory — or "spawn failed → run
locally" into memory and the lane's Sessions row (+ Needs-you mirror)
if no canary arrives. A lane that sees failed/aborted, or silence past the
timeout, self-terminates cleanly. Why this dance: the bench proves
the world can see the task; the canary proves the lane can reach the
world. A worker that cannot push is a zombie writing into the void —
the handshake starves zombies before they cost a day's work, a lesson
bought when early cloud sandboxes couldn't push to origin and their
work died with them (D-020).

Sources:
[lane law](LAWS.md#parallel-lanes--cloud)
[parallel-lanes](skills/parallel-lanes.md)
[bench-first](#task-anatomy--lifecycle)
[D-020](DECISIONS.md#d-020--2026-07--parallel-lanes-v2-native-lanes-replace-hand-built-orchestration)

While flying, a lane pushes every commit, never shares a file with
any sibling (so merges can't collide), keeps its own memory at the
four moments, and speaks only through its PR — `BLOCKED:` comments
for questions, the ready-flip plus plain summary for completion.
Those pushed commits are also the lane's heartbeat: the
baton-holder
reads them for liveness and never adopts or prunes a lane whose
heartbeat is fresh — reclaiming a bench takes a terminal Status or
real silence past the staleness window.

Sources:
[four moments](skills/parallel-lanes.md#the-four-memory-moments-the-lanes-diary-rule)

What a lane may touch:

| Surface | A lane… |
|---|---|
| its own branch — code, spec, its memory | writes freely, pushing every commit |
| its own PR | speaks through it: `BLOCKED:` comments, ready-flip, summary |
| main — the [board](DASHBOARD.md), [IDEAS](IDEAS.md), [ROADMAP](ROADMAP.md) ticks, [history/](history/README.md), any merge | NEVER — baton-holder rituals own all of main's bookkeeping |

Why the ROADMAP tick is the founder's line: the checkbox is the only
stored task state, and it flips only inside ship's weld, downstream
of the founder's yes. If a lane could tick it, "done" would stop
meaning "founder-approved and merged" — the one meaning it must keep.
Ideas a lane surfaces reach IDEAS the same way: harvested by a
baton-holder ritual, never written by the lane.

Sources:
[ship](skills/ship.md)
[IDEAS](IDEAS.md)

Dispatch is one fork of the away-mode chooser (next section):
mid-session lanes default LOCAL (background agents, worktrees); CLOUD
dispatch happens only through liftoff, whose gate is now hard
disqualifiers — secrets exposure, cloud-incompatible needs, or a
file-collision with a flying sibling — with fully-specified the sort
key, not a bar. Ineligible, held, or waiting items are never silently
parked: each gets its status written into its own memory and the board
(the chooser law).

Sources:
[liftoff](skills/liftoff.md)
[chooser law — LAWS §Workflow](LAWS.md#workflow-non-negotiable)

### Delegation — the away-mode chooser

Where work runs is one decision, one variable at each fork. Are you at
the keyboard? Then parallelizable work becomes a LOCAL lane — a
background agent or a worktree session — while you drive the main
task. Are you leaving? Then ask whether work should continue. If
nothing continues, handoff parks the shop and closes the session. If
work continues, one more question decides: is the machine staying on?
If the machine is going dark — the standard away posture since
[D-046](DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
— liftoff lifts the eligible work to the cloud and fires the
cockpit, briefed from the board. If it must stay on, go remote —
the tether, the backstop posture: the control tower relocates to
your phone,
nothing is parked, nothing is closed, the baton stays put.

```mermaid
flowchart TD
  A{Leaving the machine?} -->|no| L[Local lane]
  A -->|yes| B{Should work continue?}
  B -->|no| H[Handoff]
  B -->|yes| C{Machine staying on?}
  C -->|yes| G[Go remote — the tether]
  C -->|no| F[Liftoff — cloud]
```

Each away leaf carries its own notification channel and reply loop.
After liftoff the cockpit IS the channel: its decision-shaped
turn-end reports arrive as Claude-app pushes, and your replies in
that one thread are command — one surface, full authorship. The
tether pushes to the Claude app; you answer a blocked lane right
in the app and it resumes in-thread. A cloud lane pushes through
GitHub; you answer as a PR comment and the routine feeds your reply to
the running session. After handoff there is no channel — and that is
correct: nothing is flying, so silence is the right state until the
next pickup. The cloud launch route was proven once, at the
2026-07-16 maiden flight; the recorded winner is route 1 —
label-spawn, ready-flip then label
([parallel-lanes §Cloud spawn](skills/parallel-lanes.md#cloud-spawn--route-ladder)).

Sources:
[chooser law — LAWS §Workflow](LAWS.md#workflow-non-negotiable)
[go-remote](skills/go-remote.md)
[liftoff](skills/liftoff.md)
[handoff](skills/handoff.md)

### Micro-PRs

Main is PR-only, and every merge waits for the founder — with exactly
one carve-out. A micro-PR touches ONLY DASHBOARD.md and/or IDEAS.md,
is written by a ritual (handoff, liftoff, ship's tail — or pickup's
stale-repaint, which rides the same carve-out), and squash-merges
immediately without asking (D-002 as recut by D-023).

Sources:
[DASHBOARD.md](DASHBOARD.md)
[IDEAS.md](IDEAS.md)
[D-002](DECISIONS.md#d-002--2026-06--handoff-note-merge-policy)
[D-023](DECISIONS.md#d-023--2026-07--universal-draft-pr-at-birth--micro-pr-carve-out-recut-amends-d-002-d-008-d-020)

Why it is safe: both files are derived or inbox surfaces — the
board is repainted wholesale from sources by the next ritual
anyway, and IDEAS only ever gains dated inbox lines — so the worst
possible bad merge is a stale rendering or a noisy line, each
healed mechanically. No code, no laws, no contracts, no history can
ride one. And the physical gate survives: main still takes no
direct pushes, and `.claude/settings.json` grants no session a
standing `gh pr merge` allowance (its bypass variants are
explicitly denied) — the allowance exists only inside the ritual
skills' narrow `allowed-tools`, so even the self-merge can only
happen where a ritual is running. Approval was
skipped for exactly one reason: the founder approving a note the
system just wrote to itself adds nothing but friction to the
leaving habit.

### The board

DASHBOARD.md is the workshop's one state surface — and deliberately
the least authoritative file in the repo. Its repaint model is
event-driven: rituals repaint it wholesale from sources (pickup when
stale, handoff, liftoff, ship's tail) — never edited by hand, never
patched incrementally, never on a timer. Every repaint recomputes all
counts from ROADMAP checkboxes at render time (the derivation law:
LAWS §Knowledge & tracking) and stamps its header with date · ritual
· seat, so staleness is self-declaring. Git outranks it on any
disagreement — the board is a rendering of the truth, not the truth.

Sources:
[DASHBOARD.md](DASHBOARD.md)
[pickup](skills/pickup.md)
[handoff](skills/handoff.md)
[liftoff](skills/liftoff.md)
[ship](skills/ship.md)
[ROADMAP](ROADMAP.md)
[LAWS §Knowledge & tracking](LAWS.md#knowledge--tracking)

How to read every board section, glyph, and bar: §Reading the board.
The board's shape is defined once, in handoff §4; rituals render it,
nothing else writes it.

Sources:
[§Reading the board](#reading-the-board)
[handoff §4](skills/handoff.md)

### Skills

The rituals run on Claude Code's skill system, split in two
deliberately. The procedure — the actual numbered steps — lives
vault-readable in docs/skills/, woven into the link graph like any
other doc, so the founder can read every ritual in Obsidian and a PR
can amend one like any law. The trigger lives in
`.claude/skills/<name>/SKILL.md` as a thin stub: frontmatter naming
the skill and its firing description, and a one-line body — "Read
docs/skills/<name>.md and follow it exactly." A stub that only points
cannot drift from its procedure (D-024; now a law in LAWS §Knowledge
& tracking).

Sources:
[docs/skills/](skills/)
[D-024](DECISIONS.md#d-024--2026-07--architecture-v2-memoryhistory-narrative-layer-dashboard-as-sole-state-surface-rituals-as-skills-amends-d-008-retires-handoffmd--shiplogmd)
[LAWS §Knowledge & tracking](LAWS.md#knowledge--tracking)

Skills are model-invoked: the stub's description is what the model
reads to know WHEN to fire — leaving phrases summon handoff,
take-it-to-the-cloud phrasing summons liftoff, task completion
summons ship, a roadmap-level statement summons decide, and the
session-start hook directs control-tower sessions to render pickup
unprompted. Rituals fire on moments, not remembered commands — though
the founder may invoke one directly when the invocation carries
something: `/handoff` at the end of a leaving message is the inline
paste's carrier
([D-040](DECISIONS.md#d-040--2026-07--handoff-input-inversion--the-leaving-message-carries-the-webdesign-paste-inline-the-never-skipped-question-is-retired-a-bare-trigger-means-none-amends-the-two-touchpoints-laws-wording-upholds-d-032)).

Sources:
[handoff](skills/handoff.md)
[liftoff](skills/liftoff.md)
[ship](skills/ship.md)
[decide](skills/decide.md)
[pickup](skills/pickup.md)

One more deliberate narrowing: no session holds a standing merge
permission — it is granted per-ritual. The stubs for ship, handoff,
and liftoff carry `allowed-tools: Bash(gh pr merge --squash
--delete-branch:*)` — the only merge allowance anywhere — so the
capability to merge exists exactly where a ritual (and, for
non-micro PRs, the founder's fresh yes) is present, and nowhere
else.

## Reading the board
The DASHBOARD is repainted only at ritual moments — pickup when stale
· handoff · liftoff · ship's tail — never hand-edited; between
rituals, git outranks it. Glyphs: 🟢 done · 🟡 ongoing · 🔴 issue
(always mirrored into Needs you) · ⚪ idle. Bars fill left to right (█
done · ░ remaining). Stage-map colors: green done · blue active ·
orange locked behind a dependency · gray queued. Sections: Needs you
(your action queue — one sentence per item, receipts on the line
below) · Sessions (every live session, one table — main · control
tower /
local parallel / cloud — with what each needs from you) · You are
here (version and stage bars) · Stage map (dependencies) · Claude Web
+ Design discussion (open chats by their exact titles, so you can
search them) · Shipped (the ten newest; the full chronology is the
ledger). The board's shape is defined once, in handoff §4.

Sources:
[DASHBOARD](DASHBOARD.md)
[the ledger](history/README.md#the-ledger)
[handoff §4](skills/handoff.md)

## Where information goes
One home per class. New information APPENDS there via the named
vehicle; changed information UPSERTS in place via the same writer —
never a second copy anywhere. The weave links to a fact's home; it
never duplicates it.

| Information | Home | Appended by | Upserted by |
|---|---|---|---|
| Task story · decisions-in-flight · dead ends · blocks | its [memory/<id>.md](memory/TEMPLATE.md) | the working session, at the four diary moments | cognitive rewrite at handoff; frozen at weld |
| Shipped narrative | [history/](history/README.md) (four doors) | the atomic weld, quadrant per the legend | frozen — link repairs only |
| Chronology of everything shipped | [the ledger](history/README.md#the-ledger) | one weld-prepended line | never — append-only |
| Fresh gotcha / machine trap | the task's memory, or [DASHBOARD](DASHBOARD.md) Needs-you | the session / a ritual | promoted to LAWS · a skill · SETUP via PR when permanent |
| Permanent workshop rule | [LAWS](LAWS.md) | PR + D-number | D-number PR only |
| Any decision | [DECISIONS](DECISIONS.md) | decide, append-only | never — amendments are new entries |
| Plan structure | [ROADMAP](ROADMAP.md) | decide-gated PR | structure via D; ticks by ship only |
| Status · progress · counts | [DASHBOARD](DASHBOARD.md) | ritual repaint, at render time | the repaint IS the upsert; never hand-edited |
| Unvisited idea | [IDEAS](IDEAS.md) | ritual harvest / micro-PR | promoted out via decide when adopted |
| Engine rule / OPEN slot fill | [ENGINE](ENGINE.md) | decide | decide — the register shrinks by D-number |
| Tooling · stack · config inventory | [SETUP](SETUP.md) | ops PR | ops PR; status never (the board's job) |
| Fact vocabulary (F-* · TP-* · telemetry) | [FACTS](data/FACTS.md) | decide; IDs append-only | definitions via D; IDs never reused |
| Source vetting verdicts | `SOURCES-<family>` → [SOURCES](data/SOURCES.md) at T7 | vetting lanes | grade moves via demotion evidence + D |
| Design-session governance | [DESIGN-KICKOFF](DESIGN-KICKOFF.md) | ops PR | ops PR |
| Explanations · terms · mechanisms | [HOME](HOME.md) (this file) | PR | PR |
| Identity | [FOUNDATION](FOUNDATION.md) | founder-approved PR + D-number | same — rare by design |

## Terms

The newcomer test, which this section must always pass: a stranger
reading only this section can decode any sentence in the repo. Each
term gets one or two plain-English lines and a link home — follow
the link for the full story.

### Naming & structure

- **Vn.Sm.Tk (the ID system)** — Version → Stage → Task; the one
  official way to name planned work (V1.S3.T1 = Version 1, Stage 3,
  Task 1). Home: [§Roadmap manual](#roadmap-manual).
- **version / stage / task** — a version is an outcome milestone
  (the ladder lives in
  [ROADMAP §The versions](ROADMAP.md#the-versions)); a stage is an
  ordered slice of one with a completion criterion; a task is the
  PR-sized unit (one task = one branch = one PR).
  Home: [§Roadmap manual](#roadmap-manual).
- **workshop slug** — the kebab-case name (e.g. engine-swap) that
  stands in for a roadmap ID when work has no
  [ROADMAP](ROADMAP.md) line — ops, docs, infrastructure. It keys
  the branch, memory, and history files exactly as an ID would;
  shipping it skips only the ROADMAP tick.
  Home: [§Roadmap manual](#roadmap-manual).
- **[P] / [seq]** — task tags: [P] = parallel-safe (touches files
  no sibling task touches); [seq] = must follow its dependency.
  Home: [§Roadmap manual](#roadmap-manual).
- **rolling wave** — the planning-depth law: the active version
  fully staged and tasked, the next a rough bucket, the one after
  name-only, sockets pooled unversioned
  ([D-004](DECISIONS.md#d-004--2026-06--planning-notation--rolling-wave-depth),
  amended by
  [D-022](DECISIONS.md#d-022--2026-07--version-ladder--lifespan-split-amends-d-004)).
  Home: [§Roadmap manual](#roadmap-manual).
- **spec** — a task's stable contract (goal, scope edges, plan,
  Done-means), born from the discussion that opened the task;
  skipped when the roadmap line is already fully specified.
  Home: [specs/](specs/README.md) ·
  [§Task anatomy](#task-anatomy--lifecycle).
- **frontmatter** — the YAML block (type / title / status, plus
  per-class keys) atop every doc; renders as a table on GitHub and
  as Properties in Obsidian. Templates:
  [specs/TEMPLATE](specs/TEMPLATE.md) ·
  [memory/TEMPLATE](memory/TEMPLATE.md).
- **weave rule** — every mention of a roadmap ID, D-number, fact or
  parameter ID, or sibling doc in docs/ is a markdown link, never
  plain text. Home: [LAWS §Knowledge &
  tracking](LAWS.md#knowledge--tracking).
- **retroactivity law** — when a convention is adopted or changed,
  every pre-existing file is backfilled in the same PR;
  later-found gaps are repaired the moment they are found.
  Home: [LAWS §Knowledge & tracking](LAWS.md#knowledge--tracking).
- **derivation law** — derived values (counts, totals, statuses)
  are never written as literals; they are computed from source at
  render time. The reason the [board](#the-board)'s numbers can be
  trusted. Home:
  [LAWS §Knowledge & tracking](LAWS.md#knowledge--tracking).
- **fact families (F-WX, F-SS, F-FE, F-TT, F-CC)** — the five
  groups of world facts the engine checks:
  [Weather](data/FACTS.md#f-wx--weather-14--source-task-v1s1t2),
  [Sky & sea](data/FACTS.md#f-ss--sky--sea-10--source-task-v1s1t3),
  [Feasibility](data/FACTS.md#f-fe--feasibility-14--source-task-v1s1t4),
  [Time & transport](data/FACTS.md#f-tt--time--transport-8--source-task-v1s1t5),
  [Crowds & calendar](data/FACTS.md#f-cc--crowds--calendar-8--source-task-v1s1t6).
- **TP parameters (TP-01..47)** — everything a traveler may TELL
  the engine; all optional, all defaulting to Null.
  Home: [FACTS Appendix
  A](data/FACTS.md#appendix-a--traveler-parameters-tp-0147--per-d-011--d-012).
- **source slot** — the join key between a fact and its vetted
  source: every fact names one slot; one
  [SOURCES](data/SOURCES.md) entry exists per slot.
  Home: [§Reading the data files](#reading-the-data-files).
- **Dictionary (of a fact)** — the exact payload keys a vetted
  source must supply for that fact; doubles as the schema-drift
  contract that live payloads are monitored against.
  Home: [§Reading the data files](#reading-the-data-files).
- **grades A–D** — source reliability grades, assigned at vetting
  and living afterwards: A renders verified, B verified where
  covered, C as a labeled estimate, D always unverified. Canonical
  matrix: [ENGINE §7](ENGINE.md#7-render--honest-pixels).
- **socket** — a named future capability deliberately excluded from
  the current version but designed to plug in later without a
  rewrite. Home: [ROADMAP §Pool](ROADMAP.md#pool--unversioned-sockets).
- **D-number** — one permanently recorded decision (D-001, D-002,
  …) with rationale and rejected alternatives.
  Home: [DECISIONS](DECISIONS.md).

### Workflow & rituals

- **the rituals** — the five self-firing procedures that own all
  shared state: [pickup](skills/pickup.md) (sit-down briefing) ·
  [handoff](skills/handoff.md) (leaving) · [ship](skills/ship.md)
  (task close) · [decide](skills/decide.md) (decision recorder) ·
  [liftoff](skills/liftoff.md) (hand the workshop to the cloud).
  Explained: [§The five rituals](#the-five-rituals).
- **FULL / QUIET (handoff modes)** — FULL is the real leaving
  ritual (secure, read the inline paste, rewrite, repaint, close);
  QUIET is
  [ship](skills/ship.md)'s tail — repaint and recommend only, the
  session stays open. Home: [handoff](skills/handoff.md).
- **control tower** — the ground Claude Code session the founder
  is actively driving; holder of the baton, sole runner of rituals
  and writer of main's bookkeeping. Called "cockpit" before
  [D-046](DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
  — [history/](history/README.md) files and DECISIONS entries
  written before D-046 use "cockpit" in this ground meaning. Home:
  [§The baton](#the-baton) ·
  [LAWS §Parallel lanes & cloud](LAWS.md#parallel-lanes--cloud).
- **cockpit** — the cloud command session: a control tower,
  online, with full authorship; born at
  [liftoff](skills/liftoff.md)'s fire (briefed by the
  board-derived flight plan) or a founder summon, holding the
  baton for its bounded flight. Charter:
  [SETUP §cloud accounts](SETUP.md#once-and-done--cloud-accounts).
- **the baton** — the right to be the control tower: claimed by
  [pickup](skills/pickup.md) on fresh origin, released by FULL
  [handoff](skills/handoff.md) or [liftoff](skills/liftoff.md)
  (whose fire hands it to the cockpit for the flight),
  dormant between sittings. Home: [§The baton](#the-baton).
- **close-lock** — the physical end of a session: FULL
  [handoff](skills/handoff.md) and [liftoff](skills/liftoff.md) write
  `.claude/session-closed` as their last act; from that moment the
  prompt hook rejects every further input. Home:
  [§The baton](#the-baton).
- **seat** — where a session physically runs: work PC, home PC, or
  a cloud lane. Ritual stamps name seats; nothing else does.
  Home: [machine-setup](skills/machine-setup.md).
- **seat-invariance** — the law that a task's artifacts must be
  indistinguishable by seat — same birth, same format, same
  quality, wherever made. Home:
  [LAWS §Parallel lanes & cloud](LAWS.md#parallel-lanes--cloud).
- **bench-first** — the universal birth order: branch → spec (if
  discussed) → memory stub → draft PR, all pushed to origin BEFORE
  any session works the task
  ([D-023](DECISIONS.md#d-023--2026-07--universal-draft-pr-at-birth--micro-pr-carve-out-recut-amends-d-002-d-008-d-020)).
  Home: [§Task anatomy](#task-anatomy--lifecycle).
- **lane** — one parallel work stream (background agent, worktree
  session, or cloud session) flying one task on its own branch.
  Home: [§Lanes, local & cloud](#lanes-local--cloud) ·
  [parallel-lanes](skills/parallel-lanes.md).
- **exploratory subagents** — parallel research Claude spawns
  inside one task's own session; no branch, no spec, no PR —
  distinct from roadmap [P] lanes, which are separate sessions on
  separate branches. Home:
  [SETUP §Staged](SETUP.md#staged--turns-on-when-its-stage-opens).
- **the lane law** — the seat-blind rulebook every lane obeys:
  bench-first birth, canary handshake, push every commit, share no
  file, keep its own memory, speak through its PR, never write
  main. Home:
  [LAWS §Parallel lanes & cloud](LAWS.md#parallel-lanes--cloud) ·
  [parallel-lanes](skills/parallel-lanes.md#the-lane-law-seat-blind--identical-local-or-cloud).
- **canary handshake** — a lane's first act: one trivial pushed
  commit proving it can reach origin, acknowledged (or failed) by
  the baton-holder in the lane's memory before real work starts.
  Home:
  [parallel-lanes §Canary
  handshake](skills/parallel-lanes.md#canary-handshake-both-sides).
- **heartbeat / liveness** — commits are the heartbeat: a bench
  whose branch committed within the staleness window is LIVE —
  untouchable, never adopted or pruned; a terminal Status or
  silence past the window makes it RECLAIMABLE. Home:
  [parallel-lanes §Liveness](skills/parallel-lanes.md#liveness--live-vs-reclaimable)
  · [LAWS §Workflow](LAWS.md#workflow-non-negotiable).
- **park protocol / rescue-save** — how FULL
  [handoff](skills/handoff.md) stands a local lane down: rescue-save
  (a `wip:` commit + push) ONLY if the tree holds unsaved work, then
  one stamped Status line in the lane's memory — the only moment the
  control tower may touch a lane mid-flight. Home:
  [LAWS §Parallel lanes & cloud](LAWS.md#parallel-lanes--cloud) ·
  [handoff §1.5](skills/handoff.md#15--park-the-local-lanes-full-only).
- **wake-lock** — a lane's first act on ANY wake or resume: re-read
  its own memory Status; a Status it does not own (parked · respawned
  · superseded · failed) means push nothing and terminate
  ([D-032](DECISIONS.md#d-032--2026-07--fleet-continuity--handoff-parks-every-local-lane-liftoff-respawns-parked-benches-wake-lock-parks-every-outcome-extends-the-d-020d-023-lane-law-upholds-d-009)).
  Home: [parallel-lanes §Wake-lock &
  parking](skills/parallel-lanes.md#wake-lock--parking).
- **respawn / adopt** — [liftoff](skills/liftoff.md) re-flying a
  parked lane on its EXISTING bench: no second birth; the worker
  canaries on the same branch and the baton-holder's ack
  overwrites the
  parked Status. Home: [parallel-lanes
  §Respawn](skills/parallel-lanes.md#respawn-on-an-existing-bench-liftoff-adopt).
- **the chooser (dispatch & away-mode)** — one variable per fork: at
  the keyboard → LOCAL lane; leaving + nothing continues → handoff;
  leaving + continues + machine dark → liftoff (the standard away
  posture — it fires the cockpit); leaving + continues + machine
  must stay on → go-remote (backstop). Cloud only via liftoff's
  sanctioned routes;
  nothing is ever silently parked — every held, failed, or waiting
  item is written into its memory and the board. Home:
  [§Delegation](#delegation--the-away-mode-chooser) ·
  [LAWS §Workflow](LAWS.md#workflow-non-negotiable).
- **go-remote / tether** — the away-mode where the machine stays on
  and the control tower relocates to the founder's phone via Remote
  Control. A posture, not a leaving ritual: parks nothing, closes
  nothing, keeps the baton; a BACKSTOP since
  [D-046](DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
  — machine-off + the cockpit is the plan.
  Home: [go-remote](skills/go-remote.md) ·
  [§Delegation](#delegation--the-away-mode-chooser).
- **idle-wait** — a blocked lane on a phone-reachable vehicle (cloud
  session · RC-tethered local session) stays alive and waits for the
  founder's reply instead of parking; the reply resumes it in-thread.
  Home: [parallel-lanes §Wake-lock &
  parking](skills/parallel-lanes.md#wake-lock--parking).
- **label-spawn** — the sanctioned cloud launch: label the
  pre-birthed draft PR `lane:cloud` and a GitHub-triggered routine
  starts the cloud session; zero secrets, phone-drivable. Home:
  [parallel-lanes §Cloud
  spawn](skills/parallel-lanes.md#cloud-spawn--route-ladder).
- **liftoff** — the leaving ritual's cloud variant: FULL handoff,
  then triage, birth, spawn, handshake-verify, a board repaint
  that doubles as the flight plan — and the cockpit fire, with
  that flight plan as the payload. Home:
  [liftoff](skills/liftoff.md).
- **memory file** — docs/memory/&lt;id&gt;.md: a task's living
  story in the locked format (Status first), on the task's branch,
  rewritten at rituals and the lane moments; MOVES to history/ at
  ship. Home: [memory/](memory/README.md) ·
  [§Information relay & retention](#information-relay--retention).
- **history file** — docs/history/&lt;id&gt;.md: the memory's final
  form, landed by the weld with shipped date and PR number; the
  permanent narrative beside git's technical record.
  Home: [history/](history/README.md).
- **atomic weld** — ship's single bookkeeping commit (ROADMAP tick
  + memory→history move + spec finalize) merged together with the
  work, so state and work land or die together. Home:
  [§Task anatomy](#task-anatomy--lifecycle) ·
  [ship](skills/ship.md#7--on-approval--the-atomic-weld).
- **THE GATE** — [ship](skills/ship.md)'s stop point: a
  plain-language summary, then the wait for the founder's explicit
  yes — never inferred; Actions must be green before the gate may
  even be announced. Home: [ship §6](skills/ship.md#6--the-gate) ·
  [§Task anatomy](#task-anatomy--lifecycle).
- **micro-PR** — the one self-merging PR class: written by a
  ritual, touching ONLY [DASHBOARD.md](DASHBOARD.md) and/or
  [IDEAS.md](IDEAS.md)
  ([D-002](DECISIONS.md#d-002--2026-06--handoff-note-merge-policy)
  as amended by
  [D-023](DECISIONS.md#d-023--2026-07--universal-draft-pr-at-birth--micro-pr-carve-out-recut-amends-d-002-d-008-d-020)).
  Home: [§Micro-PRs](#micro-prs).
- **the board** — [DASHBOARD.md](DASHBOARD.md): the one rendered
  state surface, repainted wholesale by rituals, stamped, and
  always outranked by git. Home: [§The board](#the-board).
- **the two touchpoints** — the founder's only ritual duties: final
  merge approval, and the leaving ritual (with its Web/Design
  paste). Home: [§The daily loop](#the-daily-loop) ·
  [LAWS §The two touchpoints](LAWS.md#the-two-touchpoints).
- **paste block** — the single copy-paste artifact a Claude Web
  chat produces when its discussion changed something; delivered
  only when its content reaches the repo through Claude Code.
  Home: [§The daily loop](#the-daily-loop).
- **claim check** — the mandatory "is this task already open
  elsewhere?" question before any task starts, answered by open
  branches + draft PRs; the founder is asked only on genuine
  ambiguity. Home: [LAWS §Workflow](LAWS.md#workflow-non-negotiable).
- **blocker vs gotcha** — a blocker stops work and names who or
  what unblocks it; a gotcha is a discovered trap that costs time
  but not progress. Both land in the task's memory (task-local) or
  the board's Needs-you (founder-facing); permanent gotchas promote
  to [LAWS](LAWS.md) or a skill.
  Home: [LAWS §Knowledge & tracking](LAWS.md#knowledge--tracking).
- **pacing law** — finish-first: the ongoing task and pending
  blocks outrank new tasks; at most "Now" plus one parallel slot
  needs the founder's attention; stopping is a valid next step
  ([D-009](DECISIONS.md#d-009--2026-06--pacing-law-finish-first-flexible-cap)).

### Product & engine

- **Suggest / Plan / Edit (the spine)** — the one loop Roam ships:
  suggest ranked trips from whatever is given → plan the full
  day-by-day → edit anything with whole-plan re-validation.
  Home: [FOUNDATION §The spine](FOUNDATION.md#the-spine).
- **validity engine** — the deterministic checks-and-scoring module
  (the isolated [engine/](../engine/README.md) directory; often
  just "the engine"): it fetches facts, runs the five families'
  checks, and scores plans — distinct from the brain. Built in
  [V1.S3](ROADMAP.md#v1s3--engine-core--two-families-deep).
- **planning brain** — Claude (server-side API) doing the
  conversational planning; consumes the engine's verdicts, never
  invents facts
  ([D-005](DECISIONS.md#d-005--2026-06--stack-re-trial-vs-foundation-v1-d-001-upheld--frontend-layer)).
- **check module** — one pluggable condition checker per fact
  family; adding one never rewrites what exists — it adds a module,
  and every new check re-tunes the rankings by design. Home:
  [FOUNDATION §What Roam checks](FOUNDATION.md#what-roam-checks).
- **reliability law** — never fabricate: every fact is checked,
  every claim carries source + confidence, anything unverifiable
  renders labeled unverified. Home:
  [FOUNDATION §The reliability law](FOUNDATION.md#the-reliability-law);
  engine rules: [ENGINE §11](ENGINE.md#11-invariants--the-reliability-law).
- **reliability ladder** — the six fallback rungs for
  coverage-risky facts: global source → regional source → computed
  → estimated (labeled) → LLM-research grade (unverified) → refusal
  ([D-010](DECISIONS.md#d-010--2026-06--global-coverage-via-graded-fallback-ladders);
  [ENGINE §3](ENGINE.md#3-acquire--get-the-facts)).
- **preferences-as-defaults** — the engine honors a stated
  preference but surfaces a significantly better alternative when
  one exists; preferences steer, they don't blind. Home:
  [ENGINE §6](ENGINE.md#6-synthesize--build-the-plan).
- **provenance** — every stored traveler value is marked stated,
  inferred, or default; stated beats inferred beats default, newer
  beats older
  ([D-012](DECISIONS.md#d-012--2026-06--elicitation--inference-policy-ask-tiers-provenance-upsert);
  [ENGINE §2](ENGINE.md#2-intake--resolve-the-traveler)).
- **floor input** — the guaranteed minimum: origin + dates is
  always enough to get a plan
  ([D-011](DECISIONS.md#d-011--2026-06--traveler-input-vocabulary-rich-nullable-tiered-append-only)).
  Home: [FOUNDATION §What Roam is](FOUNDATION.md#what-roam-is).
- **fact cache** — the bitemporal, append-only store of every
  fetched fact: valid_for (when true in the world) + recorded_at
  (when we learned it); values are superseded, never overwritten
  ([D-015](DECISIONS.md#d-015--2026-06--data-asset-law-bitemporal-append-only-license-segmented)).
  Explained: [§Reading the data files](#reading-the-data-files).
- **freshness window** — the maximum cache staleness a fact
  tolerates before refetch; windows tighten as the activity date
  nears. Explained:
  [§Reading the data files](#reading-the-data-files).
- **claim ledger** — the log of every claim the product actually
  rendered (fact, source slot, grade, when shown); paired with
  harvested actuals it yields the calibration report — "was our
  'verified' actually right". Home:
  [FACTS Appendix C2](data/FACTS.md#c2--quality--ground-truth-p5).
- **the quiet asset** — the compounding dataset of
  place-and-condition knowledge that accrues as a side effect of
  caching. Home:
  [FOUNDATION §The dataset](FOUNDATION.md#the-dataset--the-quiet-asset).
- **SI-canonical units** — all storage and engine math is
  SI/metric; conversion to US units happens only at display time
  ([D-013](DECISIONS.md#d-013--2026-06--canonical-units-si-storage-display-time-conversion);
  [ENGINE §7](ENGINE.md#7-render--honest-pixels)).

## Reading the data files

The engine's knowledge lives in three documents under docs/data/:
FACTS (what the engine must know, what it may be told, and what the
app records about itself — Appendix C), SOURCES (where each fact
verifiably comes from), and SCHEMA (how it will all be stored — a
placeholder until V1.S1.T7). This is the manual for reading them.

Sources:
[docs/data/](data/FACTS.md)
[FACTS](data/FACTS.md)
[Appendix C](data/FACTS.md#appendix-c--telemetry-vocabulary-what-the-app-records)
[SOURCES](data/SOURCES.md)
[SCHEMA](data/SCHEMA.md)
[V1.S1.T7](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)

**Fact IDs and families.** Every world fact has a stable ID:
F-&lt;family&gt;-&lt;number&gt;, across five families — F-WX weather,
F-SS sky & sea, F-FE feasibility, F-TT time & transport, F-CC crowds
& calendar. IDs never change meaning; extension is append-only. Each
fact entry states What it is, which spine step consumes it, its
geographic scope, its freshness need, its type, and its source slot.
FACTS lists check INPUTS only — how facts become scores is engine
logic (V1.S3), not data.

Sources:
[F-WX weather](data/FACTS.md#f-wx--weather-14--source-task-v1s1t2)
[F-SS sky & sea](data/FACTS.md#f-ss--sky--sea-10--source-task-v1s1t3)
[F-FE feasibility](data/FACTS.md#f-fe--feasibility-14--source-task-v1s1t4)
[F-TT time & transport](data/FACTS.md#f-tt--time--transport-8--source-task-v1s1t5)
[F-CC crowds & calendar](data/FACTS.md#f-cc--crowds--calendar-8--source-task-v1s1t6)
[FACTS](data/FACTS.md)
[V1.S3](ROADMAP.md#v1s3--engine-core--two-families-deep)

**The two jobs.** A fact's "Spine:" line names who consumes it.
Suggest judges TRIP MERIT — "is this trip worth it for these
dates?" (a destination famous for an activity is docked when that
activity's conditions are bad in the window). Plan judges
PLACEMENT of individual activities into days and hours. Edit
re-validates the whole plan and inherits every Plan fact — its
needs are covered by freshness tightening as the activity date
nears. Inside the forecast horizon, Suggest sharpens its merit read
with the real forecast instead of climatology.

**Fact types.** fetched (from an external source) · computed
(math — exact everywhere, no fetch) · curated (maintained in-repo
as data) · estimated (labeled ranges) · LLM-research grade (always
rendered unverified). A computed fact names the slot of its primary
input — no separate fetch occurs.

**Source slots and Dictionaries.** The source slot is the join key
between the two files: every fact names exactly one slot, a slot may
serve many facts, and SOURCES holds exactly one entry per slot. A
fact's "Dictionary:" line lists the exact payload keys a vetted
source must supply — and doubles as the schema-drift contract: live
payloads are monitored against it, and drift feeds source health
(FACTS Appendix C3). Where a fact has no Dictionary line yet, the
vetting task derives one from its What line.

Sources:
[SOURCES](data/SOURCES.md)
[FACTS Appendix C3](data/FACTS.md#c3--source-health-p6)

**Grades.** Each vetted source earns a reliability grade, A–D, which
decides how its facts RENDER — from verified (A) through labeled
estimate (C) to always-unverified (D). The canonical grade → render
matrix is ENGINE §7; grades are living — demoted on sustained
failure, drift, or miscalibration, promoted only by re-vetting
(D-015).

Sources:
[ENGINE §7](ENGINE.md#7-render--honest-pixels)
[D-015](DECISIONS.md#d-015--2026-06--data-asset-law-bitemporal-append-only-license-segmented)

**The reliability ladder.** Facts marked ⚠ are coverage-risky:
nothing global and authoritative serves them everywhere. Each
declares a fallback ladder, vetted top-down (D-010): (1) a source
global by construction (numerical models, astronomical math) → (2)
regional authoritative sources → (3) computed from physics → (4)
estimated ranges, labeled → (5) LLM-research grade, rendered
unverified → (6) refusal — the engine says "can't verify here" rather
than guessing. The ladder is how coverage stays global without the
reliability law bending: quality degrades HONESTLY, rung by labeled
rung.

Sources:
[D-010](DECISIONS.md#d-010--2026-06--global-coverage-via-graded-fallback-ladders)

**Freshness windows.** Every fact declares the maximum cache
staleness it tolerates before refetch — from 1–3 hours (near-term
forecasts) to yearly (climate normals) — and windows tighten as the
activity date nears. Freshness is why the cache can be aggressive
without serving stale truth.

**The fact cache.** Storage is bitemporal and append-only (D-015):
every value carries valid_for (when it is true in the world) and
recorded_at (when we learned it), and new values supersede rather
than overwrite old ones. The revision series this preserves —
forecast vs later forecast vs observed actual — is the proprietary
core of the quiet asset. Source data is stored in license-segmented,
attributed layers; world data stays strictly separate from traveler
and event data.

Sources:
[D-015](DECISIONS.md#d-015--2026-06--data-asset-law-bitemporal-append-only-license-segmented)
[quiet asset](FOUNDATION.md#the-dataset--the-quiet-asset)

**Units.** Everything stored or computed is SI/metric, exclusively;
conversion to US units happens only at render time (D-013).

Sources:
[D-013](DECISIONS.md#d-013--2026-06--canonical-units-si-storage-display-time-conversion)

**A SOURCES entry** records, per slot: the facts served · the chosen
source and why · the confirmed payload keys (checked against the
Dictionary) · grade · freshness served · coverage and ladder position
· cost · retention_rights · license_class · attribution duties · the
spike script path and its last verified run · alternatives rejected.
Retention and license are PRIMARY selection criteria, not footnotes:
a caching-prohibited source would hollow the asset layer, so it
disqualifies the slot (D-015). Spike scripts live in `scripts/spikes/`
— each is a plain Node fetch proving the source actually returns the
Dictionary keys.

Sources:
[SOURCES](data/SOURCES.md)
[D-015](DECISIONS.md#d-015--2026-06--data-asset-law-bitemporal-append-only-license-segmented)

**The traveler side.** FACTS Appendix A holds the TP parameters —
everything a traveler may TELL the engine. Each row carries an ask
tier (U asked upfront within the six-question cap · L asked later when
it earns its question · N never asked — inferred, defaulted, or
composition-adjusted · S a settings field), who consumes it, and its
handling tier (engine / brain-only / socket). Every stored value
carries provenance; stated-only fields are never inferred (D-011,
D-012). Appendix B lists plan parameters — schema the plans need
(lodging anchor, item lock-state) that are neither world facts nor
traveler inputs.

Sources:
[FACTS Appendix A](data/FACTS.md#appendix-a--traveler-parameters-tp-0147--per-d-011--d-012)
[D-011](DECISIONS.md#d-011--2026-06--traveler-input-vocabulary-rich-nullable-tiered-append-only)
[D-012](DECISIONS.md#d-012--2026-06--elicitation--inference-policy-ask-tiers-provenance-upsert)
[Appendix B](data/FACTS.md#appendix-b--plan-parameters-t7-must-schema-not-world-facts)

**Telemetry.** Appendix C defines three registers: behavior events
(captured from day one under a strict privacy floor, used later —
D-014), quality & ground truth (the claim ledger, harvested actuals,
and the calibration they yield), and source health (fetch success,
drift, ladder falls — the demotion law's evidence).

Sources:
[Appendix C](data/FACTS.md#appendix-c--telemetry-vocabulary-what-the-app-records)
[D-014](DECISIONS.md#d-014--2026-06--telemetry-posture-capture-now-use-later)

## Equipment & environment

**The stack**, in one paragraph: Next.js App Router (TypeScript,
React 19) + Supabase (Postgres + Auth) + Vercel; the planning brain
is the Claude API, server-side only; the engine is isolated in
engine/ with a hard boundary (no app imports) so it could one day
move to a Python worker without a rewrite. Frontend layer: Tailwind v4
+ shadcn/ui on Base UI, Motion, MapLibre GL, dnd-kit, the Vercel AI
SDK ("AI SDK UI" flavor), TanStack Query + Zustand. Doctrine:
stream-first, cache-heavy, parallel fan-out, DB co-located. Canonical,
with sources: SETUP §Stack (D-001 · D-005 · D-007). App code lives in
`src/`, engine code in `engine/`, spike scripts in `scripts/spikes/`,
CI in `.github/workflows/ci.yml` (lint + test on every PR — ship's
gate is real).

Sources:
[engine/](../engine/README.md)
[SETUP §Stack](SETUP.md#stack)
[D-001](DECISIONS.md#d-001--2026-06--tech-stack)
[D-005](DECISIONS.md#d-005--2026-06--stack-re-trial-vs-foundation-v1-d-001-upheld--frontend-layer)
[D-007](DECISIONS.md#d-007--2026-06--shadcnui-builds-on-base-ui-not-radix)
[ship](skills/ship.md)

**The skills**, one line each: pickup — the sit-down briefing,
unprompted · handoff — the leaving ritual, FULL or QUIET · ship —
task close, gate, and weld · decide — the decision recorder + ripple ·
liftoff — hand the workshop to the cloud · go-remote — the phone
tether, the backstop away posture (machine stays on) · recall — ask
about anything
past, ongoing, or future; answered from the files with receipts,
never from memory, on its own judgment · parallel-lanes — the lane
manual (consulted, not fired) · machine-setup — per-machine setup and
verify.

Sources:
[pickup](skills/pickup.md)
[handoff](skills/handoff.md)
[ship](skills/ship.md)
[decide](skills/decide.md)
[liftoff](skills/liftoff.md)
[go-remote](skills/go-remote.md)
[recall](skills/recall.md)
[parallel-lanes](skills/parallel-lanes.md)
[machine-setup](skills/machine-setup.md)

**MCPs, plugins, subagents.** Stage-gated — tooling is added only
when its roadmap stage opens, never stockpiled; the ladder lives in
SETUP §Staged (canonical). Shared plugin switches live in
`.claude/settings.json`; machine-local plugins and every token live
in `.claude/settings.local.json` and local MCP config — the repo is
public, so credentials exist per-machine only, never in it (LAWS
§Safety).

Sources:
[SETUP §Staged](SETUP.md#staged--turns-on-when-its-stage-opens)
[LAWS §Safety](LAWS.md#safety-non-negotiable)

**Machines.** Two seats plus the cloud: work PC and home PC, each
with exactly one clone, each labeled via `git config roam.machine` so
ritual stamps can name seats. Setup, verification, and the known
per-machine traps: machine-setup (canonical). Cloud lanes need no
setup — they are born from origin and die into it.

Sources:
[machine-setup](skills/machine-setup.md)

**The Obsidian vault.** docs/ IS the vault — every knowledge file
here is Obsidian-readable, and the weave rule doubles as its link
graph. Deliberately OUTSIDE the vault: the `.claude/` machinery
(stubs, hooks, settings — harness config, not knowledge), the root
stubs (CLAUDE.md, AGENTS.md, README — import shims and public front
door), and all code. docs/.obsidian/ (the app's workspace state)
stays gitignored. In Obsidian the founder READS; the one write
surface is quick capture into IDEAS. The board's Shipped table is
static markdown re-derived at every repaint — no Obsidian community
plugin is needed anywhere; the one table-rendering plugin the board
once leaned on is retired. Per-machine graph and bookmark tuning:
machine-setup §Vault lens.

Sources:
[CLAUDE.md](../CLAUDE.md)
[AGENTS.md](../AGENTS.md)
[README](../README.md)
[IDEAS](IDEAS.md)
[machine-setup §Vault lens](skills/machine-setup.md#vault-lens)

## Roadmap manual

How to read [ROADMAP.md](ROADMAP.md)
([D-004](DECISIONS.md#d-004--2026-06--planning-notation--rolling-wave-depth),
amended by
[D-022](DECISIONS.md#d-022--2026-07--version-ladder--lifespan-split-amends-d-004)):

- **Notation** — Vn = Version · Vn.Sm = Stage (ordered, each with a
  completion criterion) · Vn.Sm.Tk = Task, the PR-sized unit (one task =
  one branch = one PR). The only vocabulary — no synonyms: not
  "MVP", not "demo build", not "milestone".
- **Tags** — [P] = parallel-safe (touches files no sibling task
  touches) · [seq] = must follow; "after X" names the dependency
  when it is not simply the previous task.
- **Branch names** — the lowercase ID plus a slug
  (e.g. feat/v1.s3.t3-weather); branches, PRs, and ritual stamps
  reference these IDs.
- **Work IDs** — Vn.Sm.Tk from [ROADMAP](ROADMAP.md) for planned
  work; a workshop slug (kebab-case, e.g. engine-swap) for
  workshop/ops tasks with no roadmap line; never hand-assigned
  labels beyond these ([IDEAS](IDEAS.md) is the inbox for
  everything unnumbered —
  [D-023](DECISIONS.md#d-023--2026-07--universal-draft-pr-at-birth--micro-pr-carve-out-recut-amends-d-002-d-008-d-020)).
- **Small steps** — checkboxes in the task's spec or PR
  description, never in [ROADMAP](ROADMAP.md).
- **Depth (rolling wave)** — active version fully staged and
  tasked · next version a rough bucket · the one after name-only ·
  sockets pooled unversioned.
- **Progress** — checkbox ticks land only via
  [ship](skills/ship.md)'s atomic weld at merge time.

**Git outranks notes; nothing important lives only in a
conversation.**
