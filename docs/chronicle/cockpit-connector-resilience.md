---
type: chronicle-story
shelf: I — the away surface
status: living
updated: 2026-08-06 · written · cloud lane
---

# The cockpit's connector resilience — a command seat that survives its own API

> **CURRENT ENDING (2026-08-06).** Five rungs — prevent · detect ·
> repair in place · degrade · self-rescue — with TWO API paths
> beneath them, ending in a push to `ops/summon` that fires a
> replacement, and the phone bootstrap last. **Two clauses of the
> census cell are now overtaken and both move the same way: toward
> proven.** The cell says the summon secrets "exist by NAME"; the
> workflow has since FIRED FOR REAL — on 2026-07-23 as a rescue
> drill, and again on 2026-08-05, measured at **13.7 seconds from
> push to a live cockpit**, with no API path on the firing side,
> which is the exact property rung 4 exists for. What the cell gets
> right and what remains true is the honest gap: **rungs 2b and 5
> are still ungraded**, because a connector flap cannot be emulated
> and only a real one tests them.

## What it is

The answer to a specific and unpleasant discovery: a cloud session's
GitHub connector can die mid-flight, and when it does the cockpit
stops being a COMMANDER while remaining a full AUTHOR. Git keeps
working. Merging, labelling, opening PRs and reading CI do not.

The ladder is what a seat climbs when that happens:

- **R0 PREVENT** — poll on a cadence rather than sleeping on one
  long monitor, reporting only on change. Written as a MITIGATION
  with its cost stated, never as the fix.
- **R1 DETECT** — one cheap probe immediately before ANY command
  act, reported in the same turn. Never a command act on an
  unverified connector.
- **R2 REPAIR IN PLACE** — retry, then the `gh` path, then
  in-session revival from the shell, then tell the founder in one
  fixed sentence as its own whole turn.
- **R3 DEGRADE** — git-only work continues; commanding pauses;
  nothing is lost or redone.
- **R4 SELF-RESCUE** — push one empty commit to `ops/summon`, then
  land.

## What it was raised by

**The first end-to-end flight lost its cockpit's connector
mid-flight**, on 2026-07-22
([#191](https://github.com/wsher0901/roam/pull/191)), stranding
merge, label — and therefore lane spawn — PR-open and CI-read. The
seat was still a perfectly good author and could do nothing with it.

## What changed, in order

- **[D-048](../record/DECISIONS.md#d-048--cockpit-resilience) — the
  ladder, built on a premise that was WRONG.** External research
  said a cloud session receives a session-scoped GitHub MCP
  injection and has NO `gh` CLI by design, making the connector the
  sole API path and in-session redundancy IMPOSSIBLE. From that
  premise the architecture follows inevitably: **if redundancy is
  impossible, resilience must be a ladder that leaves the
  session** — and since a connector-dead cockpit can still PUSH, the
  rescue trigger is a push.
- **The summon workflow goes live**, with two triggers: a push to
  the reserved branch `ops/summon`, and `workflow_dispatch`. It
  reuses the verified fire vehicle AS-IS rather than reimplementing
  it, deletes the `ops/summon` ref afterwards so **one push is
  exactly one rescue**, and never echoes the token. Concurrency is
  set so a second summon cannot cancel a first mid-fire.
- **MERGE-ON-SIGNAL was rejected, and the reasoning is the most
  load-bearing paragraph here.** It was the obvious permanent fix.
  It restores only MERGE, while a connector-dead cockpit still
  cannot spawn lanes or open benches — the smallest fraction of lost
  command. And decisively: **every session pushes as the founder**,
  so a push-triggered merge cannot distinguish the baton-holder from
  a lane or from a redelivered webhook. It would break
  no-solo-approval STRUCTURALLY, not by accident. A push-triggered
  SUMMON passes the same test, which is why it is permitted: a stray
  spawn is recoverable noise — one cap run — never a law breach.
- **A scoped token in the cloud environment was rejected for the
  same class of reason:** every cloud session reads that
  environment, lanes included, so the token would hand lane sessions
  the command powers the lane law denies them.
- **[D-049](../record/DECISIONS.md#d-049--gh-second-path) — the
  premise is overturned by a probe, and the ladder survives.** `gh`
  installs from the UBUNTU ARCHIVE (allowlisted, where
  `cli.github.com` is egress-blocked) and authenticates
  AUTOMATICALLY through the proxy: `GH_TOKEN` is the literal
  placeholder `proxy-injected`, and the proxy substitutes real
  credentials in transit. So merge, label, PR-open and CI-read each
  have TWO paths, and **a single connector flap no longer demotes a
  cockpit from commander to author.**
- **That correction has a three-revision history, kept because each
  revision was once written as certain.** First: the `gh` install is
  EGRESS-BLOCKED, so never attempt it. Second: no `gh` BY DESIGN,
  redundancy impossible. Third: installable AND proxy-authenticated —
  the earlier failure was **the wrong apt source, not a design
  wall.** The path is written REST-shaped everywhere (`gh api`,
  never bare porcelain) because porcelain riding GraphQL is
  proxy-blocked with a 403, and writing it REST-shaped is what stops
  a future seat rediscovering that.
- **Supersession made explicit**, so the founder never commands a
  dead cockpit by accident: a tombstone as the final message, a
  REFUSAL GUARD that re-derives from origin and replies with nothing
  but the tombstone, and a successor duty to repaint the board so it
  always names exactly one live commanding seat.
- **2026-08-05 — rung 4 fires, and the seat it raises finds five
  defects.** Told in full in
  [the proving-flights story](cockpit-proving-flights.md) and
  [the probe record](../record/probes/summon-test.md). The fire
  itself was clean: push at 13:54:05, live cockpit at 13:54:18.69,
  ref deleted, run complete at 13:54:21.

## Where it stands

**The ladder is live, its top is proven, and its bottom is not — in
exactly the way a ladder tends to be.**

Rung 4 has now been exercised twice, and the second firing **forced
a correction to the board's own claim**: the board had been carrying
"the summon workflow is unflown" for several paints, and it was
wrong — summon flew on 2026-07-23, run `30028067870`, conclusion
success. What had never been exercised was something subtler and
more interesting: **a ROUTINE-BORN cockpit reading the SAVED BOX**
rather than the charter text pasted from the master file. Every
flight between the drill and the test was `--cloud`-born, so the
2026-08-05 seat was the first ever raised from the box itself —
which is precisely why it could see what it saw.

**Rungs 2b and 5 remain ungraded, and the census is right to say
so.** Whether a cloud session can revive its own injected connector
from the shell, and whether the mobile app can create a session on a
repo, are both untestable from a healthy desk. They need a real
flap.
[D-074](../record/DECISIONS.md#d-074--phase-1-closes-on-flights-3-and-4)
keeps them in scope by naming the failure drill as one of the two
flights phase 1 cannot close without — running the connector rungs
as **deliberate failures rather than hoped-for ones.**

**One residual is accepted rather than fixed.** On a `push` event
GitHub runs the workflow definition FROM THE PUSHED REF, so the
`ref: main` checkout pin protects the fire SCRIPT but not
`summon.yml` itself: a push to `ops/summon` carrying an edited
workflow would run the edited version. Accepted on the grounds that
only the founder and the founder's own sessions can push to this
repo, and the worst case is one unwanted routine fire — recoverable
noise, never repo write. Revisit if a session is ever observed
authoring workflow files.

## Sources

Down-links only.

- [HOME §The cockpit's API paths & recovery ladder](../HOME.md#the-cockpits-api-paths--recovery-ladder)
  — the living procedure a seat reads mid-flap.
- [D-048](../record/DECISIONS.md#d-048--cockpit-resilience) · the
  ladder, the summon workflow, and the two rejections ·
  [D-049](../record/DECISIONS.md#d-049--gh-second-path) · the second
  API path and the three-revision correction ·
  [D-074](../record/DECISIONS.md#d-074--phase-1-closes-on-flights-3-and-4)
  · the failure drill that would grade the rest.
- [the summon test](../record/probes/summon-test.md) — the fire
  timings, the unflown-claim correction, and the five findings.
- [cockpit-resilience](../record/history/workshop/mechanism/cockpit-resilience.md)
  — the bench that built the ladder, and what it shipped unproven.
- [COCKPIT-CHARTER](../COCKPIT-CHARTER.md) — rules 6 and 8, the
  probe-before-command duty and the tombstone.
