---
type: chronicle-story
shelf: I — the away surface
status: living
updated: 2026-08-06 · written · cloud lane
---

# The cockpit's proving flights (2026-07-22 · 07-23)

> **CURRENT ENDING (2026-08-06).** Both flights completed and
> welded, proving the assembled chain end to end while producing the
> correction benches that hardened it — the census cell is accurate
> and holds. Their verdict has aged WELL, because what they proved
> was not that the machinery worked but **that its written
> instructions did not**, and instructions are what a future seat
> obeys. Every near-failure of 07-22 failed against a written
> instruction rather than a missing one. One caution for a later
> reader: **the two benches' `shipped:` frontmatter stamps disagree
> with the API on ordering** — checked at this writing,
> [#191](https://github.com/wsher0901/roam/pull/191) merged
> 18:09:02 UTC and
> [#193](https://github.com/wsher0901/roam/pull/193) 19:12:59 UTC,
> an hour later, while the files' stamps read 16:19 and 15:09 and
> imply the reverse. **Use the API times; the frontmatter stamps are
> not a reliable ordering source.**

## What it was

Two consecutive days on which the away architecture was flown as an
assembled whole for the first time, rather than tested in pieces.
The 07-22 flight ran the full chain — **liftoff → cloud-born cockpit
→ bench birth → label-spawned lane → canary → non-author review →
the founder's word → the weld** — with a deliberately tiny payload:
a single stale phrase in a charter box.

The 07-23 flight repeated the shape and spent its day on cleanup and
probes: the clerk's retirement, a summon rescue drill, a lane-authored
scrub, and the `gh` probe that overturned a premise the previous day
had built on.

## What raised it

[D-046](../record/DECISIONS.md#d-046--flight-cockpit-the-control-tower-online)
and [D-047](../record/DECISIONS.md#d-047--cloud-born-cockpit) had
assembled a chain that existed only on paper. Every link had been
reasoned about; none had been operated together. The payload was
chosen to be trivial ON PURPOSE, so that any failure observed would
be a failure of the MACHINERY rather than of the work — the same
cargo-is-ballast principle later probes reused.

## What happened, in order

- **The cockpit is born by `--cloud` and briefed by a mandate that
  ARRIVES CUT MID-SENTENCE.** It recovers, because the flight plan
  had already been welded to the board and the board governs. This
  is the incident that turned "the board is the flight plan" from a
  sensible practice into written doctrine.
- **The cockpit births the bench ITSELF and then label-spawns one
  lane**, so the payload diff is LANE-AUTHORED — which makes a
  non-author cockpit review plus the founder's word lawful without
  an external Web review. The flight's legal shape was designed
  before it flew.
- **15:43 UTC — the lane canaries** (`a6b0552`) and waits.
- **The ack arrives late AND malformed.** The cockpit's first ack
  (`4511b14`) landed as the ~10-minute window elapsed and read
  **"airborne — #191" with an EM-DASH**, where the lane's poll
  filtered for a middot. The lane read the window as timed out and
  staged a clean stand-down.
- **The wake-lock catches it.** The stand-down PUSH WAS REJECTED —
  origin had moved — and the rejected push is a wake, so the lane
  re-read its Status before retrying and found the real ack waiting.
  It dropped the stand-down and did the edit. The cockpit then
  re-stamped its ack in the contract form (`3693e48`, middot).
- **The cockpit loses its GitHub connector mid-flight**, stranding
  merge, label — and therefore lane spawn — PR-open and CI-read. It
  remains a full author and stops being a commander.
- **18:09:02 UTC — [#191](https://github.com/wsher0901/roam/pull/191)
  merges**, the flight's payload: one phrase, `control tower's` →
  `baton-holder's`, in the lane-worker charter box that the D-046
  vocabulary sweep had missed because the sweep did not reach inside
  a fenced block.
- **19:12:59 UTC — [#193](https://github.com/wsher0901/roam/pull/193)
  merges**, nine corrections in one theme, plus a deliberate
  omission: the merge-on-signal Action, the permanent fix for the
  API-flap class, was STAGED AND NOT BUILT — and later rejected
  outright.
- **[#195](https://github.com/wsher0901/roam/pull/195) — the
  connector ladder** and
  [D-048](../record/DECISIONS.md#d-048--cockpit-resilience), built
  the same day the flap was suffered.
- **07-23 — the second flight.** The clerk is retired in the repo
  ([#197](https://github.com/wsher0901/roam/pull/197)); the summon
  workflow flies its rescue drill (run `30028067870`, conclusion
  success); a lane-authored scrub merges on a cockpit's non-author
  review plus the word
  ([#200](https://github.com/wsher0901/roam/pull/200)); and the
  session-title experiment is DISPROVEN at that day's birth — the
  platform ignored the prompt-supplied line and auto-titled from
  charter content.
- **[#207](https://github.com/wsher0901/roam/pull/207) — the `gh`
  probe** overturns the previous day's premise, and
  [D-049](../record/DECISIONS.md#d-049--gh-second-path) gives the
  cockpit a second API path.

## What it found

**1 · THE GOVERNING FINDING: every step that nearly failed failed
against a WRITTEN instruction, not a missing one.** The repo, as it
stood, told a future seat to do things that cannot work — a pty
wrapper around a console whose capture is exactly what the wrapper
refuses; an environment named wrongly; a `gh` install the setup
script could not perform. **A wrong instruction is worse than an
absent one**, because a seat following it burns the attempt and
learns nothing.

**2 · The ack token needed ONE canonical, machine-checkable form,
and the match had to be ANCHORED.** Both failure modes were lived on
this flight, not imagined: the watcher first matched its OWN claim
prose (which contains the word "airborne"), and then, once the token
mattered, missed an em-dash variant entirely. §Canary wins as the
contract, because it is what the watcher actually reads.

**3 · The wake-lock's rejected-push rule works, proven under real
conditions.** This is the flight's most valuable single datum. A
lane about to do the wrong thing was stopped not by a check it ran
but by a push that failed — **state disagreement surfacing as an
error the lane could not ignore.**

**4 · A birth prompt is a delivery channel, and channels truncate.**
Hence: the plan is welded to the board FIRST, the prompt carries a
pointer, and where they disagree the board governs.

**5 · The connector is a single point of command failure**, and
in-session redundancy was believed impossible — which forced
resilience to be a ladder LEAVING the session. The belief was
overturned the next day; **the architecture it produced survived the
overturning**, because a ladder that ends outside the session is
still correct when a second path exists inside it.

**6 · "Non-author" means the PAYLOAD DIFF.** A baton-holder
necessarily writes the memory stub and the airborne ack on
bench-first flights, and neither makes it the payload's author — but
it may never review a payload it wrote itself.

**7 · A verify-before-rely item is only worth writing if someone
answers it.** The title line was carried as explicitly unproven,
tested at the very next birth, disproven, and dropped — with the
instruction it replaced recorded beside the answer. That is the
shape such an item is supposed to end in, demonstrated once so it
could be imitated.

## Where it stands

**Both flights are closed, and the chain they proved is the chain
still in use** — with two of its components since replaced by
simpler ones. The `CONOUT$` console-attach that #193 documented as
rung 1's real shape was DELETED two days later by
[D-051](../record/DECISIONS.md#d-051--self-seat-birth), once the
self-URL made it redundant; and the no-`gh` premise that #195's
ladder rested on was reversed by
[D-049](../record/DECISIONS.md#d-049--gh-second-path). **Neither
reversal invalidated the flight** — both were the flights' own
method working: fly it, record what actually happened, correct the
instruction.

**The findings' shelf life splits cleanly.** Findings 1, 3, 4 and 6
are permanent and have been generalized into law or doctrine.
Finding 2 is closed by the anchored contract, and its enforcement
now lives in every lane's poll. Findings 5 and 7 are historical in
their specifics and permanent in their lesson.

**What these flights did NOT reach** is what
[D-074](../record/DECISIONS.md#d-074--phase-1-closes-on-flights-3-and-4)
later named: the desk takeover of a LIVE cockpit holding a decision,
and the failure drill running the connector rungs as deliberate
failures. Both flights succeeded, which is precisely why neither
exercised the paths that only open when something goes wrong.

## Sources

Down-links only.

- [lane-worker-baton](../record/history/workshop/mechanism/lane-worker-baton.md)
  — the 07-22 payload bench, with the canary wrinkle recorded by the
  seat that lived it.
- [flight-hardening](../record/history/workshop/mechanism/flight-hardening.md)
  — the nine corrections and the two findings left for the founder.
- [cockpit-resilience](../record/history/workshop/mechanism/cockpit-resilience.md)
  · the ladder built the same day ·
  [env-clerk-scrub](../record/history/workshop/mechanism/env-clerk-scrub.md)
  · the 07-23 lane-authored weld.
- [D-047](../record/DECISIONS.md#d-047--cloud-born-cockpit) ·
  [D-048](../record/DECISIONS.md#d-048--cockpit-resilience) ·
  [D-049](../record/DECISIONS.md#d-049--gh-second-path) ·
  [D-051](../record/DECISIONS.md#d-051--self-seat-birth) — the four
  decisions these two days produced or overturned.
- [parallel-lanes §Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)
  — where the ack contract and the em-dash precedent now live.
- [the wake-lock](wake-lock.md) — the rule that saved this flight,
  in its own story.
