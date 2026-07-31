---
type: atlas
title: Atlas
status: living
---

# Atlas — the system spine

Stamp: 2026-07-31 · diagram 7 added — the enforcement mesh ·
work PC (born 2026-07-27 by the atlas bench · home PC).
The workshop depicted as seven diagrams on one page. THIS PAGE
RENDERS, IT ORIGINATES NOTHING — like [the board](DASHBOARD.md),
it is among the least authoritative files in the repo: every box
links to the prose section that owns the doctrine, and on any
disagreement THE PROSE GOVERNS. A bench that changes what a
diagram depicts re-renders the diagram in the same PR
([HOME §Where information goes](HOME.md#where-information-goes)).

## 1 · The task loop

One task = one branch = one PR — born public, gated only by the
founder's word, welded atomically.

```mermaid
flowchart TD
  P["freshly pulled main"] --> B["bench-first birth: branch + spec + memory stub + draft PR"]
  B --> W["work — every commit pushed, the heartbeat"]
  W --> M["memory rewritten at trigger moments"]
  M --> W
  W --> V["sync with main + the verification loop + Actions green"]
  V --> C["the critic — reviewer subagent, advisory"]
  C --> G{"THE GATE — independent review, then the founder's word"}
  subgraph WELD["the atomic weld — ONE bookkeeping commit"]
    T1["ROADMAP checkbox ticked"]
    T2["memory moves to record/history quadrant"]
    T3["spec frontmatter goes shipped"]
    T4["ledger line prepended"]
  end
  G -->|"the word"| WELD
  G -->|"no word"| WAIT["wait — never merge"]
  WELD --> SQ["squash-merge + branch deleted + main pulled"]
  SQ --> TAIL["ship's tail — QUIET board repaint, a micro-PR that merges unasked (the one carve-out)"]
```

Boxes: [bench-first birth — LAWS §Workflow](LAWS.md#workflow-non-negotiable)
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
flowchart LR
  subgraph READS["session start reads"]
    H["session-start hook: pull main, print the board"] --> D1["DASHBOARD"]
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
  F --> CP["the cockpit — the control tower online, holds the baton; advises on gates, executes rulings"]
  CP --> T{"what ends the flight?"}
  T -->|"work done AND nothing awaits the founder — same turn"| AL["AUTO-LAND: the cockpit fires it, unprompted — never at birth, never on a timer, never silent"]
  T -->|"founder returns to a desk with gates undecided"| SUP["DESK TAKEOVER: pickup adopts the decision queue, writes COCKPIT SUPERSEDED — the cockpit self-retires on its next wake"]
  T -->|"the founder's word: ground the fleet"| FR["THE FREEZE — word-only, forces MODE P"]
  T -->|"the founder's word: land"| MR["MANUAL RETIRE — on an empty fleet"]
  AL --> LA{"land — mode derived from the fleet"}
  SUP --> LA
  FR --> LA
  MR --> LA
  LA -->|"nothing flying"| R["MODE R retire: final repaint, retired branches verified dead"]
  LA -->|"work flying"| PP["MODE P pause-and-transfer: THE FENCE — a pushed commit per lane writing Status held; the board carries the fleet-at-ground table"]
  R --> PU["pickup — the next sitting claims the baton"]
  PP --> PU
  H --> PU
  G -->|"leaving phrase from the phone"| H
  PU -->|"fleet resume ask"| RES["fresh workers claim the fenced branches — old sessions never revived"]
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
  B["bench pre-birthed by the baton-holder: branch + spec + memory stub + draft PR on origin"] --> S["spawn — LOCAL: background agent or worktree · CLOUD: route 1, ready-flip then the lane:cloud label"]
  S --> CL["canary claim — one trivial push, Status: claimed by vehicle + date"]
  CL --> ACK{"ack within the window?"}
  ACK -->|yes| AIR["Status begins exactly: airborne · url · date — middots, character-for-character"]
  ACK -->|"no, or a Status the lane does not own"| TERM["self-terminate — push what exists, stop"]
  AIR --> WK["work: every commit pushed, diary at the four moments, no file shared with a sibling"]
  WK --> BL["BLOCKED: PR comment — idle-wait on a phone-reachable vehicle"]
  BL -->|"the founder's reply resumes it in-thread"| WK
  WK --> DONE["completion: final memory rewrite, then ready-flip + plain summary"]
  DONE --> RV["non-author review + the founder's word — a lane never merges"]
  RV --> MG["merged by the baton-holder"]
  WK -.->|"a rejected push is a wake: re-read own Status first"| WLK["wake-lock — a foreign Status means terminate"]
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

```mermaid
flowchart TD
  subgraph BATON["the baton-holder — exactly one commanding session"]
    T["control tower — the desk seat"]
    CK["cockpit — the control tower ONLINE: same role, a cloud seat"]
  end
  BATON -->|"rituals own ALL of main's bookkeeping; merges on the founder's word — sole carve-out: ritual micro-PRs"| MAIN["main: DASHBOARD + IDEAS + ROADMAP ticks + record/"]
  LN["lanes — workers on pre-birthed benches"] -->|"own branch + own diary + PR speech, nothing else"| BR["task branches on origin"]
  LN -.->|never| MAIN
  TM["agent teams — exploration and review at a ground seat, single sitting"] -.->|"never author a bench, never merge, never run a ritual"| MAIN
  W["Claude Web — the external review of self-authored diffs"] -.->|"no-write surface"| MAIN
  DS["Claude Design — extracted tokens only, via paste block"] -.->|"no-write surface"| MAIN
  BR -->|"THE GATE: review + the word, then the baton-holder welds"| MAIN
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
flowchart LR
  G["git and origin — branches, commits, PRs: the heartbeat"] --> BD["DASHBOARD — rendered wholesale at ritual moments, stamped, least authoritative"]
  R["ROADMAP checkboxes — the ONLY stored task state, ticked only by ship"] --> BD
  M["memory Status lines — the handshake surface, one state from the locked vocabulary"] --> BD
  HF["record/history frontmatter — shipped stamps + PR numbers"] --> BD
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
  IMP["CLAUDE.md — the ambient import, loaded into every session"] --> REG["the LAWS register — NAME, rule, pointer"]
  REG --> SK["skills — the procedure, read at act time"]
  SK --> ST["point-only stubs — a stub cannot drift from its procedure"]
  ST --> MRG["the five board-writing stubs carry the ONLY merge allowance"]
  REG --> HK["three session hooks"]
  HK --> H1["session-start — pull main, inject the board, direct a control-tower session to render pickup, hand over the lane-liveness verdict, clear the close-lock"]
  HK --> H2["user-prompt-submit — stamp a closed session read-only"]
  HK --> H3["session-end — the crash net: WIP committed and pushed on a lane branch"]
  MRG --> CI
  H3 --> CI["CI on every PR and on main — lint, format:check, check:links, check:ledger, check:memory, test, build"]
  CI --> CR["the critic — advisory, and its round is pushed to the memory before the gate"]
  CR --> XR["the external Web review — no-solo-approval, before the word"]
  XR --> W["THE FOUNDER'S WORD — the sole merge authority"]
  DEN["ALWAYS ON, not a stage — the settings denies: force-push, hard reset, rm -rf, repo delete, admin and cross-repo merges, evaluated at every tool call"]
  SUM["OUT OF BAND, not a stage — the summon workflow: a push to ops/summon is the cockpit's self-rescue when its connectors are dead"]
  JUD["JUDGMENT ONLY — no gate covers these: the links gate proves an anchor EXISTS, never that it is the RIGHT one, and never that a mention became a link at all; nothing checks the derivation law; board freshness is only ever repaired at a ritual; AND THE TERMINUS ITSELF — no machine enforces that the review happened or that the word was given"]
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

TWO BOXES ARE NOT STAGES, and are drawn apart from the cascade
for that reason: THE DENIES are ambient permission rails
evaluated at every tool call in every session, and THE SUMMON
WORKFLOW is out-of-band — a cockpit's self-rescue when its
connectors are dead, never a step in delivering a law to an act.

THE DASHED BOX IS NOT DECORATION. Each joint in it is a real miss
this workshop has already paid for, or a rail it has chosen not
to build — including the TERMINUS, where nothing mechanical
enforces that the external review happened or that the word was
given; the ritual allowance is unconditional once a ritual is
running. Their inbox lines are in [IDEAS](IDEAS.md); the
guard-shaped ones would be hosted by the HARNESS V2 bench, which
does not name them today.

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
