---
type: chronicle-story
shelf: I — the away surface
status: living
updated: 2026-08-05 · four runs on the record · work PC
---

# Land — how a flight ends

> **CURRENT ENDING (2026-08-05).** Land is the cockpit-only ending
> ritual, and it has now RUN — four times, all on 2026-08-04, after
> a month of existing only on paper. AUTO-LAND fired itself once
> when the fleet emptied; MODE P grounded a fleet twice, on the
> founder's word; and a superseded cockpit retired through it once
> writing no board at all. Its fence is a commit, so the resume
> point is the branch tip by construction. The doctrine it started
> with — two modes routed by fleet state — has been recut into three
> SCENARIOS that route into those modes, and the tombstone rule that
> began as a cockpit clause now governs every seat. Its worst defect
> was never in the landing itself but in what the landing PAINTED:
> two clauses of the same ritual wrote two different board lines for
> one landing, and only one of them was a line the next sit-down
> could act on.

## What it is

The ritual a flight ends through. Its premise is that **sessions are
cattle and branches are the work** — a cockpit dying is not a loss
if the record it leaves is complete, so the whole job is making the
leaving legible.

Two modes, routed by state rather than chosen:

- **MODE R · RETIRE** — the flight's work is done and merged. Final
  board repaint, then silence. These are the duties the cockpit
  [charter](../COCKPIT-CHARTER.md)'s rule 6 used to carry.
- **MODE P · PAUSE-AND-TRANSFER** — the founder is going local while
  work is still flying. Every live lane gets a FENCE, and the board
  becomes the single transfer material.

## What raised it

An improvisation that kept being re-improvised. Ending a flight was
a duty the cockpit assembled from its charter each time, which meant
every flight ended slightly differently and none of them the same
way twice. [D-054](../record/DECISIONS.md#d-054--the-landing-skill)
made it a first-class ritual with a written procedure.

## What changed, in order

- **[D-054](../record/DECISIONS.md#d-054--the-landing-skill) — the
  skill is born.** One skill, two modes, routed by deriving the
  fleet from origin: nothing flying → MODE R, work flying → MODE P,
  and the founder's "ground the fleet" forces MODE P outright. Three
  design choices carry most of its weight. **The fence is a
  COMMIT** — so the resume point is the branch tip by construction,
  and nothing has to be recorded correctly for it to be right.
  **The board is the single transfer material**, so a landing has
  exactly one output to get right. And the fence rides the
  [wake-lock](../skills/parallel-lanes.md#wake-lock--parking), with
  an **honesty clause** attached: this is wake-lock-mediated, not an
  interrupt, so a lane mid-turn may finish its current step and a
  landing report states LAST-OBSERVED state, never a guaranteed
  freeze.
- **[D-056](../record/DECISIONS.md#d-056--team-aware-leaving-rituals)
  — teams first.** Every ritual road out of a sitting must capture a
  live agent team's findings before killing it, because a team's
  output lives in transcripts that die with the session.
- **[D-061](../record/DECISIONS.md#d-061--the-landing-doctrine-recut-to-three-scenarios)
  — recut to three SCENARIOS.** The founder's three-scenario model
  replaces "two modes" as the way in: **AUTO-LAND** when the fleet
  empties and nothing awaits the founder, run unprompted · **DESK
  TAKEOVER** when a pickup finds a live cockpit holding decisions ·
  and the founder's **FREEZE**, unchanged. The modes survive as
  where the scenarios ROUTE. The same decision makes a superseded
  cockpit retire by the full ritual rather than just stopping.
- **[D-062](../record/DECISIONS.md#d-062--the-wake-rule-generalized)
  — the tombstone stops being a cockpit rule.** ANY superseded seat
  exits by its own closing ritual and never bare: a cockpit by
  landing, a ground control tower by capture-then-close. **No
  superseded seat writes a board**, because the baton has already
  moved.
- **The two-lines defect, and the third bug under it.** MODE P
  painted two different board lines for ONE landing — [land](../skills/land.md)'s §(d)
  wrote "no live cockpit — grounded for local pickup" and its §(e)
  wrote "No live seat — LANDED via MANUAL-LAND · awaiting next
  pickup" — while pickup's fleet-resume trigger matched only the
  FIRST. A board painted by §(e) would have offered no resume at the
  next sit-down: **the lanes fenced and findable and simply never
  surfaced.** Nothing lost, everything stalled, no gate red. The
  critic then found a third bug not in the mandate: the DESK
  TAKEOVER branch had no writer at all, because Scenario 2 has the
  superseded cockpit write NO board, so a fleet it fenced could
  never get a grounded marker from anyone. [Pickup §6](../skills/pickup.md#6--fleet-resume-on-the-founders-answer)
  now names THE DESK as that writer.
- **2026-08-04 — it ran, four times in one day.** DERIVED, NOT
  RECALLED, and the method matters because these stamps leave no
  mark at HEAD: the board's own PAINT-STAMP HISTORY was read out of
  git (`git log -- docs/DASHBOARD.md`, then each revision's
  `Painted … by land …` line), and cross-checked against the flight
  records. A later reader re-derives it the same way; the stamps are
  not visible on the current board. **AUTO-LAND at
  13:53 UTC** from the cloud, the mode firing itself · **MODE P at
  16:02 UTC**, grounding flight 2's fleet, three benches later
  adopted at a desk for zero cap runs · **flight 3's superseded
  cockpit**, which woke, read its own supersession off the board,
  retired by Scenario 2 and wrote no board — the carve-out working
  exactly as [D-062](../record/DECISIONS.md#d-062--the-wake-rule-generalized) wrote it · and **MODE P at 21:16 UTC**, grounding
  flight 4's single lane at a fence.

## Where it stands

**The census row for this item is now false, and that is the point
of the ending rule.** It read: *"with no recorded run, and the
founder does not believe it ever ran (2026-07-28); its first test
rides the planned first-story shakedown flight."* That sentence was
TRUE THE DAY IT WAS WRITTEN. Seven days later the ritual had run
four times, in three of its scenarios, and produced a real defect
report. Nothing about the census was careless — endings simply go
stale, which is why every story names one place to rewrite rather
than burying its conclusion in prose.

What the runs proved: the fence stops a live worker (observed
2026-08-04, in both directions), the board carries a landing across
a session boundary intact, and a superseded seat will retire itself
correctly without being told.

What is still untested: **MODE R's MANUAL retire — a founder
retiring a finished flight by word rather than the mode firing
itself.** AUTO-LAND has fired; and the trigger table routes only its
two no-fleet triggers to MODE R, so "MODE R with cargo still owed"
is a state the ritual cannot enter BY CONSTRUCTION rather than a gap
in its testing. And the honesty clause remains a promise kept by
careful writing rather than by any mechanism.

## Sources

Down-links only.

- [land](../skills/land.md) — the ritual's living text: the trigger
  table, three scenarios, and both modes.
- [D-054](../record/DECISIONS.md#d-054--the-landing-skill) · birth ·
  [D-056](../record/DECISIONS.md#d-056--team-aware-leaving-rituals)
  · teams ·
  [D-061](../record/DECISIONS.md#d-061--the-landing-doctrine-recut-to-three-scenarios)
  · the three-scenario recut ·
  [D-062](../record/DECISIONS.md#d-062--the-wake-rule-generalized) ·
  every seat.
- [flight 4's log](../record/probes/flight-4-freeze.md) — the
  21:16 UTC MODE P landing and the fence that met a live worker.
- [the ledger](../record/history/README.md#the-ledger) — the
  two-lines defect and the third bug beneath it, in the entry that
  repaired them.
- [parallel-lanes §Wake-lock & parking](../skills/parallel-lanes.md#wake-lock--parking)
  — the mechanism the fence rides.
