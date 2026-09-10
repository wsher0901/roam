---
type: dashboard
title: Dashboard
status: living
---

# Dashboard — the state surface

Painted 2026-09-10 · 14:37 UTC by ship's weld · from work PC
THE PRODUCT-FIRST WINDOW IS OPEN — no workshop bench until
[V1.S1](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
closes
2 benches at the gate · needs-you 2 · git outranks this board.
How to read it → [HOME §Reading the board](HOME.md#reading-the-board)

## Needs you

1. 🟡 **THE HOME PC HAS NO DESIGN STACK** — the work PC ran it
   2026-08-11; the second seat is untouched, and nothing in git can
   say so, because the two files it installs live outside the repo.
   Run machine-setup step 12 at the next home-PC sitting — it
   carries the master text of both files, so the seats cannot drift.
   **That step now also carries the `--caps devtools` flag the
   motion-capture duty depends on**, so a home PC set up before
   2026-08-12 would have the agent and not its eyes. (since 08-11)
   → [machine-setup step 12](skills/machine-setup.md#one-time-per-machine)
   · [D-084](record/DECISIONS.md#d-084--the-global-design-stack)

2. 🟡 **THE NO-AGENTS INSTRUCTION HAS NO CLICK — IT NEEDS A RULING
   INSTEAD.** This item was filed on the belief that the sentence
   lives in an editable Claude Code setting. It does not. Searched
   this sitting: `~/.claude/CLAUDE.md`, `~/.claude/settings.json`,
   `~/.claude.json` (every key, and the per-project block),
   `.claude/settings.json`, `.claude/settings.local.json`, and the
   COMPLETE Claude Code settings schema — no key produces it, so
   there is no menu row and no file line to change. **But the
   sentence carves out its own override in its own words — "unless
   the user, a CLAUDE.md file, or a skill asks for it" — and
   [LAWS](LAWS.md) is loaded into every session through the root
   `CLAUDE.md` import, which makes
   [D-082](record/DECISIONS.md#d-082--the-vehicle-chooser)'s chooser
   law exactly such a licence, already in force.** Your one act,
   whenever you want it: say **"retire it"** (the item goes and the
   chooser stands alone) or **"keep it"** (it stays as a watch line).
   Not a click, and nothing is blocked either way. (since 08-07)
   → [D-082](record/DECISIONS.md#d-082--the-vehicle-chooser) ·
   [the bench that raised it](record/history/workshop/definition/chooser-and-blocker.md)

Not counted above, because they block nothing today and wait on you
whenever you want them: **the colour tokens and three reference
images.** The taste pass answered the direction and the font pair;
it did NOT answer colour, so the palette stays reserved and unruled
rather than inherited from the probe you picked — a seat may use
the probe's working values task-locally, but proposing a palette as
Roam's stops and asks. → [DESIGN](DESIGN.md)

## The baton

CONTROL TOWER — work PC, since 2026-09-10 14:12 UTC (pickup)
([handoff §4's case table](skills/handoff.md#4--repaint-dashboard-the-board-spec--single-source),
pickup's plain-claim row).
Last flight: LANDED 2026-08-04 21:16 UTC via MANUAL-LAND.

## In flight

Two benches open at this desk, no lanes, no cloud seat.

| Who | For | State | Move |
|---|---|---|---|
| bench · `product-first` | the product-first window — D-086 and its ripple | 🟡 | at THE GATE — your "review" on the Web surface |
| bench · `deps-sep` | Next 16.3.x + the advisory sweep, and a dependabot lane | 🟡 | at THE GATE — batched into the same review |

Both are SELF-AUTHORED, so both take an external Web review before
any merge word ([LAWS §Workflow](LAWS.md#workflow-non-negotiable),
no-solo-approval).

## Working on

**THE PRODUCT-FIRST WINDOW.**
[D-086](record/DECISIONS.md#d-086--workshop-the-product-first-window)
closes the workshop to new benches until
[V1.S1](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
closes, puts the ceremony on a diet, batches the T3–T6 review, and
splits the inbox so §Open holds product work only. It expires on
[V1.S1](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)'s
own checkboxes — nothing has to remember to end it.

The standing order
([D-060](record/DECISIONS.md#d-060--the-three-phase-standing-order),
phase 1's closing condition amended by
[D-074](record/DECISIONS.md#d-074--phase-1-closes-on-flights-3-and-4),
phase 2's by
[D-081](record/DECISIONS.md#d-081--phase-2-closes-the-polish-pass-is-split-out-not-dropped)),
one phase per line:

- PHASE 1 — settle & test: **CLOSED 2026-08-05.**
- PHASE 2 — the vault: **CLOSED 2026-08-07.** The
  connections-and-content polish pass was carved out as its own
  bench, `vault-connections`, which gates nothing.
- PHASE 3 — Roam: **OPEN, and now the only thing running.**
  [V1.S1](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
  T3–T6 relaunch from scratch, then T7; plus
  [V1.S2.T5](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
  design foundations.

## Recent

**Completed** — the last five; the full chronology is
[the ledger](record/history/README.md#the-ledger).

- **SUPPLY LINES, AND A GATE THAT CAN SEE MOTION** — four shadcn
  registries under an arrival law, Recharts settled as the chart
  layer, and the design-review agent given video and trace capture.
  [#352](https://github.com/wsher0901/roam/pull/352)
- **ROAM HAS A DIRECTION — `place-first`** — the plan on a living
  map; faces ratified as worn, weights and colour deliberately not.
  [#349](https://github.com/wsher0901/roam/pull/349)
- **THE GLOBAL DESIGN STACK** — a machine-wide design capability,
  and [DESIGN](DESIGN.md) made to outrank it inside this repo.
  [#345](https://github.com/wsher0901/roam/pull/345)
- **THE VEHICLE CHOOSER AND THE EXTERNAL-BLOCKER RULE** — two
  founder rulings into law with their homes, in one PR.
  [#343](https://github.com/wsher0901/roam/pull/343)
- **PHASE 2 CLOSED** — 66 of 66 stories, the unrun polish half named
  rather than buried. [#340](https://github.com/wsher0901/roam/pull/340)

**Issues** — none with a home nowhere else.

Every line this section used to carry now lives at its own home —
the inbox, a probe record, a story, or the ledger — and a second
copy here is what the routing law forbids
([D-086](record/DECISIONS.md#d-086--workshop-the-product-first-window)
ruling 4). The one item that had NO home, the summon fire's timing
table, gained one before it moved:
[record/probes/summon-fire.md](record/probes/summon-fire.md).

## Where we are (Roam)

V1 — The demo · 5/34 █████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
S1 · Data Definition · 2/7 ██░░░░░
S2 · Skeleton & design · 3/5 ███░░
S3–S8 · queued in order · 0/22

## Web + Design

- (Web) "GitHub workflow protocol and web instructions setup" — the
  ops chat; next: the batched review of `product-first` and
  `deps-sep`, then the batched T3–T6 review under
  [D-086](record/DECISIONS.md#d-086--workshop-the-product-first-window)
  ruling 3.
- (Design) no chat open; [DESIGN](DESIGN.md) holds the direction and
  the reserved slots.

## Next

**[V1.S1](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
T3–T6 via the chooser.**
