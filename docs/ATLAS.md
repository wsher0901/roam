---
type: atlas
title: Atlas
status: living
---

# Atlas — the system spine

Stamp: 2026-08-03 · no-scroll rewrap + diagrams 1 and 8 ·
work PC (born 2026-07-27 by the atlas bench · home PC).
The workshop depicted as eight diagrams on one page. THIS PAGE
RENDERS, IT ORIGINATES NOTHING — like [the board](DASHBOARD.md),
it is among the least authoritative files in the repo: every box
links to the prose section that owns the doctrine, and on any
disagreement THE PROSE GOVERNS. A bench that changes what a
diagram depicts re-renders the diagram in the same PR
([HOME §Where information goes](HOME.md#where-information-goes)).

THE RENDERING LAW, and every re-render obeys it
([D-072](record/DECISIONS.md#d-072--the-atlas-no-scroll-law)): every
diagram is TOP-DOWN — `flowchart TD`, never `LR`. A NODE LABEL IS A
NAME, NEVER A SENTENCE: at most two lines via `<br/>`, and no line
over 45 characters. Whatever a box wants to explain belongs in the
prose under its diagram or in the home its Boxes line links —
a page that scrolls sideways cannot show a shape, and the shape is
the only thing this page has to offer.

## 1 · The task loop

One task = one branch = one PR — born public, gated only by the
founder's word, welded atomically. Upstream of the bench sits THE
INTAKE BAND: nothing is scope until a voiced thought has passed
through the inbox and the triage.

```mermaid
flowchart TD
  subgraph INTAKE["INTAKE — how a thought becomes a bench"]
    IN["a voiced idea or defect"] -->|"the entry contract"| IDL["one dated IDEAS line —<br/>the only inbox"]
    IDL --> DCD["decide — the triage"]
    DCD -->|"nothing is scope until triaged"| RML["a ROADMAP line —<br/>the only stored task state"]
  end
  RML --> P["freshly pulled main"]
  P --> B["bench-first birth —<br/>branch · spec · memory stub · draft PR"]
  B --> W["work — every commit pushed, the heartbeat"]
  W --> M["memory rewritten at trigger moments"]
  M --> W
  W --> V["sync with main —<br/>verification loop · Actions green"]
  V --> C["the critic — reviewer subagent, advisory"]
  C --> G{"THE GATE —<br/>review, then the founder's word"}
  subgraph WELD["the atomic weld — ONE bookkeeping commit"]
    T1["ROADMAP checkbox ticked"]
    T2["memory moves to record/history quadrant"]
    T3["spec frontmatter goes shipped"]
    T4["ledger line prepended"]
  end
  G -->|"the word"| WELD
  G -->|"no word"| WAIT["wait — never merge"]
  WELD --> SQ["squash-merge + branch deleted + main pulled"]
  SQ --> TAIL["ship's tail —<br/>QUIET repaint, the micro-PR carve-out"]
```

THE GATE's review is an INDEPENDENT one — no diff merges on its
author's own approval, which is why the box names the review and
the word as two separate acts.

Boxes: [the only inbox and its entry contract — IDEAS](IDEAS.md)
· [the triage — decide](skills/decide.md)
· [the ROADMAP and how to read it — HOME §Roadmap manual](HOME.md#roadmap-manual)
· [bench-first birth — LAWS §Workflow](LAWS.md#workflow-non-negotiable)
· [the heartbeat — LAWS §Task anatomy](LAWS.md#task-anatomy)
· [the verification loop — ship §1](skills/ship.md#1--preflight)
  (the commands' one home) ·
  [the law requiring it — LAWS §Workflow](LAWS.md#workflow-non-negotiable)
· [the critic — ship §6](skills/ship.md#6--the-gate)
· [THE GATE and no-solo-approval — LAWS §Workflow](LAWS.md#workflow-non-negotiable)
· [the atomic weld — ship §7](skills/ship.md#7--on-approval--the-atomic-weld)
· [the tail — ship §8](skills/ship.md#8--tail)
· [micro-PRs — HOME](HOME.md#micro-prs).

## 2 · The file flow

What a sitting reads at start, and which writer owns each surface
— one home per class, never a second copy.

```mermaid
flowchart TD
  subgraph READS["session start reads"]
    H["session-start hook —<br/>pull main, print the board"] --> D1["DASHBOARD"]
    D1 --> L["LAWS — always loaded via the CLAUDE.md import"]
    L --> ME["the active memory — the story so far"]
  end
  subgraph WRITES["ritual writers"]
    PK["pickup"] -->|"stale repaint"| BOARD["DASHBOARD"]
    HF["handoff"] -->|"memory rewrites + repaint + note"| BOARD
    LF["liftoff"] -->|"flight-plan repaint"| BOARD
    SH["ship"] -->|"weld + tail repaint"| BOARD
    SH -->|"tick"| RM["ROADMAP"]
    SH -->|"memory + ledger"| REC["record/history"]
    DE["decide"] -->|"entry + ripple, same commit"| DEC["record/DECISIONS + affected files"]
    ANY["any voiced idea or defect"] -->|"one dated line, unasked"| ID["IDEAS — the single inbox"]
  end
  READS --> WRITES
```

Boxes: [the hook and the day — HOME](HOME.md#a-day-in-the-workshop)
· [the board's writers — HOME §The board](HOME.md#the-board)
· [the repaint spec — handoff §4](skills/handoff.md#4--repaint-dashboard-the-board-spec--single-source)
· [ticks by ship only — HOME §Where information goes](HOME.md#where-information-goes)
· [the weld — ship §7](skills/ship.md#7--on-approval--the-atomic-weld)
· [decide](skills/decide.md)
· [the IDEAS clause — LAWS §Workflow](LAWS.md#workflow-non-negotiable).

## 3 · Away & return

The chooser decides how a sitting ends; land and pickup close the
circle — sessions are cattle, branches are the work. A flight can
be ended by the cockpit itself, by a desk taking over, or by the
founder's word
([D-061](record/DECISIONS.md#d-061--the-landing-doctrine-recut-to-three-scenarios)).

```mermaid
flowchart TD
  A{"leaving the machine?"} -->|no| LL["parallelizable work: LOCAL lane"]
  A -->|yes| B{"should work continue?"}
  B -->|no| H["handoff — park the shop, close the session"]
  B -->|yes| C{"machine staying on?"}
  C -->|yes| G["go-remote — the tether, a backstop posture"]
  C -->|no| F["liftoff — eligible work to the cloud"]
  F --> CP["the cockpit —<br/>the control tower online"]
  CP --> T{"what ends the flight?"}
  T -->|"work done, nothing awaiting"| AL["AUTO-LAND —<br/>the cockpit fires it, unprompted"]
  T -->|"the founder returns to a desk"| SUP["DESK TAKEOVER —<br/>pickup adopts the decision queue"]
  T -->|"the founder's word: ground the fleet"| FR["THE FREEZE — word-only, forces MODE P"]
  T -->|"the founder's word: land"| MR["MANUAL RETIRE — on an empty fleet"]
  AL --> LA{"land — mode derived from the fleet"}
  SUP --> LA
  FR --> LA
  MR --> LA
  LA -->|"nothing flying"| R["MODE R — retire:<br/>final repaint, branches verified dead"]
  LA -->|"work flying"| PP["MODE P — pause-and-transfer:<br/>THE FENCE, one pushed commit per lane"]
  R --> PU["pickup — the next sitting claims the baton"]
  PP --> PU
  H --> PU
  G -->|"leaving phrase from the phone"| H
  PU -->|"fleet resume ask"| RES["fresh workers claim<br/>the fenced branches"]
```

Boxes: [the chooser — HOME §Delegation](HOME.md#delegation--the-away-mode-chooser)
· [handoff](skills/handoff.md) · [go-remote](skills/go-remote.md)
· [liftoff](skills/liftoff.md)
· [the cockpit's standing job — COCKPIT-CHARTER](COCKPIT-CHARTER.md)
· [the trigger table — land](skills/land.md#the-trigger-table--what-starts-a-landing)
· [AUTO-LAND](skills/land.md#scenario-1--auto-land-the-cockpit-fires-it)
· [DESK TAKEOVER](skills/land.md#scenario-2--desk-takeover-the-desk-fires-it)
· [THE FREEZE](skills/land.md#scenario-3--the-founders-freeze-word-only)
· [the mode routing — land §0](skills/land.md#0--derive-the-fleet-route-the-mode)
· [MODE R](skills/land.md#mode-r--retire-the-flights-natural-end)
· [MODE P and the fence](skills/land.md#mode-p--pause-and-transfer-the-founder-is-going-local)
· [the fleet resume — pickup §6](skills/pickup.md#6--fleet-resume-on-the-founders-answer)
· [the baton — HOME](HOME.md#the-baton)
· [every BATON rendering — handoff §4's case table](skills/handoff.md#4--repaint-dashboard-the-board-spec--single-source).

## 4 · A lane's life

A worker on a pre-birthed bench: claimed by canary, licensed by
the ack token, bounded by the wake-lock, merged only by the
baton-holder on the founder's word.

```mermaid
flowchart TD
  B["the bench, pre-birthed —<br/>branch · spec · memory stub · draft PR"] --> S["spawn —<br/>local agent/worktree · cloud route 1"]
  S --> CL["canary claim —<br/>one trivial push, Status: claimed"]
  CL --> ACK{"ack within the window?"}
  ACK -->|yes| AIR["airborne · url · date —<br/>the exact ack token"]
  ACK -->|"no, or a Status it does not own"| TERM["self-terminate — push what exists, stop"]
  AIR --> WK["work — every commit pushed,<br/>the diary at four moments"]
  WK --> BL["BLOCKED: a PR comment —<br/>idle-wait, the founder replies"]
  BL -->|"the reply resumes it in-thread"| WK
  WK --> DONE["completion —<br/>final rewrite, ready-flip + summary"]
  DONE --> RV["non-author review +<br/>the founder's word"]
  RV --> MG["merged by the baton-holder"]
  WK -.->|"a rejected push is a wake"| WLK["wake-lock — a foreign Status means terminate"]
  WLK -.-> TERM
```

Boxes: [the lane law — parallel-lanes](skills/parallel-lanes.md#the-lane-law-seat-blind--identical-local-or-cloud)
· [bench-first birth](skills/parallel-lanes.md#bench-first-birth-baton-holder-procedure)
· [route 1, the recipe of record](skills/parallel-lanes.md#cloud-spawn--route-ladder)
· [the canary handshake and the ack token](skills/parallel-lanes.md#canary-handshake-both-sides)
· [the four diary moments](skills/parallel-lanes.md#the-four-memory-moments-the-lanes-diary-rule)
· [the wake-lock](skills/parallel-lanes.md#wake-lock--parking)
· [the mail slot](skills/parallel-lanes.md#answering-a-lane-the-mail-slot)
· [no-solo-approval — LAWS §Workflow](LAWS.md#workflow-non-negotiable).

## 5 · The surfaces

Who may write what: one baton-holder commands, lanes speak through
their PRs, teams explore and review, Web and Design never write.
Every merge into main waits for the founder's word and is performed
by the baton-holder as the atomic weld — the sole carve-out being
the ritual micro-PR, which merges itself.

```mermaid
flowchart TD
  subgraph BATON["the baton-holder —<br/>exactly one commanding session"]
    T["control tower — the desk seat"]
    CK["cockpit —<br/>the control tower ONLINE"]
  end
  BATON -->|"rituals own main's bookkeeping"| MAIN["main —<br/>DASHBOARD · IDEAS · ROADMAP · record/"]
  LN["lanes — workers on pre-birthed benches"] -->|"own branch · own diary · PR speech"| BR["task branches on origin"]
  LN -.->|never| MAIN
  TM["agent teams —<br/>explore and review, one sitting"] -.->|"never a bench, a merge, or a ritual"| MAIN
  W["Claude Web —<br/>the external review"] -.->|"no-write surface"| MAIN
  DS["Claude Design —<br/>extracted tokens only"] -.->|"no-write surface"| MAIN
  BR -->|"THE GATE — review, then the word"| MAIN
```

Boxes: [the baton law — LAWS §Parallel lanes & cloud](LAWS.md#parallel-lanes--cloud)
· [the cockpit — HOME §The baton](HOME.md#the-baton)
· [lane rule 7, never writes main](skills/parallel-lanes.md#the-lane-law-seat-blind--identical-local-or-cloud)
· [the team boundary — HOME §Agent teams](HOME.md#agent-teams)
· [Web's mandatory job and no-solo-approval — LAWS §Workflow](LAWS.md#workflow-non-negotiable)
· [the Design no-write clause — LAWS §Knowledge & tracking](LAWS.md#knowledge--tracking).

## 6 · State surfaces

Status is derived, never carried — every count is computed at
render time, and git outranks every note.

```mermaid
flowchart TD
  G["git and origin —<br/>the heartbeat: branches, commits, PRs"] --> BD["DASHBOARD —<br/>rendered at rituals, least authoritative"]
  R["ROADMAP checkboxes —<br/>the ONLY stored task state"] --> BD
  M["memory Status lines —<br/>the handshake surface"] --> BD
  HF["record/history frontmatter —<br/>shipped stamps + PR numbers"] --> BD
  BD -.->|"on any disagreement"| G
```

Boxes: [the derivation law and the ladder — LAWS §Knowledge & tracking](LAWS.md#knowledge--tracking)
· [ticks by ship only — LAWS §Knowledge & tracking](LAWS.md#knowledge--tracking)
· [the Status vocabulary — TEMPLATE](memory/TEMPLATE.md#status-vocabulary)
· [the board's repaint model — HOME §The board](HOME.md#the-board)
· [how to read it — HOME §Reading the board](HOME.md#reading-the-board)
· [the board spec, and every BATON rendering — handoff §4's case table](skills/handoff.md#4--repaint-dashboard-the-board-spec--single-source).

## 7 · The enforcement & update mesh

How a law reaches an act. Every layer below is a DELIVERY stage —
none of them originates doctrine, and the prose each box links is
where the rule actually lives.

```mermaid
flowchart TD
  IMP["CLAUDE.md —<br/>the ambient import"] --> REG["the LAWS register — NAME, rule, pointer"]
  REG --> SK["skills — the procedure, read at act time"]
  SK --> ST["point-only stubs"]
  ST --> MRG["the five board-writing stubs —<br/>the ONLY merge allowance"]
  REG --> HK["three session hooks"]
  HK --> H1["session-start"]
  HK --> H2["user-prompt-submit"]
  HK --> H3["session-end — the crash net"]
  MRG --> CI
  H3 --> CI["CI — every PR and main:<br/>seven checks"]
  CI --> CR["the critic — advisory"]
  CR --> XR["the external Web review —<br/>no-solo-approval"]
  XR --> W["THE FOUNDER'S WORD —<br/>the sole merge authority"]
  DEN["THE DENIES —<br/>ambient permission rails"]
  SUM["THE SUMMON WORKFLOW —<br/>out of band"]
  JUD["JUDGMENT ONLY —<br/>four joints, named below"]
  DEN -.-> SK
  SUM -.-> IMP
  CI -.->|"the honest gap"| JUD
  W -.->|"the honest gap"| JUD
  classDef gap fill:#4e342e,stroke:#3e2723,color:#ffffff,stroke-dasharray: 5 5
  classDef ambient fill:#37474f,stroke:#263238,color:#ffffff
  class JUD gap
  class DEN,SUM ambient
```

DRAFT-PR-AT-BIRTH IS WHAT MAKES CI UNIVERSAL: the workflow fires
on pull requests and on main, so a branch would be uncovered
until its PR existed — and the
[bench-first law](LAWS.md#workflow-non-negotiable) gives every
task a draft PR in its first minute. The two laws interlock;
neither covers the floor alone.

THE THREE HOOKS, each drawn as a name and each doing one job:
SESSION-START syncs main, injects the board, orders the briefing,
hands over the lane-liveness verdict, and clears the close-lock ·
USER-PROMPT-SUBMIT stamps a closed session read-only ·
SESSION-END is the crash net, committing and pushing WIP on a lane
branch. CI's seven checks are the same commands the verification
loop runs, and [ship §1](skills/ship.md#1--preflight) is their one
home.

TWO BOXES ARE NOT STAGES, and are drawn apart from the cascade
for that reason: THE DENIES are ambient permission rails
evaluated at every tool call in every session — force-push, hard
reset, `rm -rf`, repo delete, admin and cross-repo merges — and
THE SUMMON WORKFLOW is out-of-band, a push to the reserved
`ops/summon` branch that is a cockpit's self-rescue when its
connectors are dead, never a step in delivering a law to an act.

THE DASHED BOX IS NOT DECORATION, and its FOUR JOINTS are these:

1. **The links gate is destination-blind** — it proves an anchor
   EXISTS, never that it is the RIGHT one, and never that a
   mention became a link at all.
2. **Nothing checks the derivation law** — a bar can render the
   wrong number of segments and every gate stays green.
3. **Board freshness is only ever repaired at a ritual**, so
   between rituals the board is stale by design.
4. **THE TERMINUS ITSELF** — nothing mechanical enforces that the
   external review happened or that the word was given; the
   ritual merge allowance is unconditional once a ritual is
   running.

Each is a real miss this workshop has already paid for, or a rail
it has chosen not to build. Their inbox lines are in
[IDEAS](IDEAS.md); the guard-shaped ones would be hosted by the
HARNESS V2 bench, which does not name them today.

Boxes: [the ambient import and the session hooks — HOME §The files](HOME.md#the-files--what-each-one-is-for)
· [the close-lock the prompt hook enforces — HOME §Terms](HOME.md#terms)
· [the register itself — LAWS](LAWS.md)
· [skills and their point-only stubs — HOME §Skills](HOME.md#skills)
· [the merge allowance, its narrowness, and the micro-PR carve-out — HOME §Micro-PRs](HOME.md#micro-prs)
· [the verification loop the checks mirror — ship §1](skills/ship.md#1--preflight)
· [the critic — ship §6](skills/ship.md#6--the-gate)
· [no-solo-approval — LAWS §Workflow](LAWS.md#workflow-non-negotiable)
· [the founder's word — LAWS §The three touchpoints](LAWS.md#the-three-touchpoints)
· [the wiring inventory — SETUP](SETUP.md).

## 8 · A sitting

The ordinary ground day, end to end. Seven diagrams above draw
tasks, lanes, seats and surfaces; this one draws the CONTAINER
they happen inside — one sitting, opened by a hook and closed by a
ritual. The work loop in the middle is diagram 1, run once per
task.

```mermaid
flowchart TD
  HK["the session-start hook —<br/>pull · the board · close-lock cleared"] --> PU["pickup —<br/>the claim + the sit-down"]
  PU --> WORK["the work loop —<br/>each task runs diagram 1"]
  WORK --> HF["handoff FULL —<br/>capture · park · repaint"]
  HF --> CR["the close report —<br/>then the close-lock is written"]
  CR -->|"the prompt hook stamps it"| CLS["the closed session —<br/>read-only, never dead"]
  CLS --> NX["the next sitting"]
  NX --> HK
  WORK -.->|"a weld ships"| QT["QUIET — ship's tail:<br/>a board repaint, no close"]
  QT -.->|"returns to the sitting"| WORK
```

TWO ENDINGS ARE NOT DRAWN HERE because they are not ground
endings: LIFTOFF closes the sitting by handing the baton to a
cockpit, and LAND ends a FLIGHT rather than a desk. Both live in
[§3](#3--away--return), which is where the chooser belongs.

THE CLOSE-LOCK IS WHY THIS CYCLE HAS AN END AND NOT A FADE. Handoff
writes `.claude/session-closed` as its last act; from that moment
the prompt hook stamps every further input, and the session stays
CONVERSATIONAL BUT READ-ONLY — it answers by fresh derivation from
origin, names whoever now holds the baton, and refuses every write,
command act and ritual. The session-start hook deletes the flag
before anything else, so the next sitting is always born live.

Boxes: [pickup](skills/pickup.md)
· [handoff, and the board spec it renders — handoff §4](skills/handoff.md#4--repaint-dashboard-the-board-spec--single-source)
· [the close report — handoff §6](skills/handoff.md#6--close-full-only)
· [ship's QUIET tail — ship §8](skills/ship.md#8--tail)
· [the hooks — HOME §The files](HOME.md#the-files--what-each-one-is-for)
· [close-lock and closed ≠ dead — HOME §Terms](HOME.md#terms)
· [the away-mode chooser — HOME §Delegation](HOME.md#delegation--the-away-mode-chooser).
