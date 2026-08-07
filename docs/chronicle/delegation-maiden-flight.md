---
type: chronicle-story
shelf: II — the lane system
status: living
updated: 2026-08-06 · the verdict's shelf life re-derived · cloud lane
---

# The delegation maiden flight (2026-07-16) — the night the label did nothing

> **CURRENT ENDING (2026-08-06).** Closed on paper by
> [#153](https://github.com/wsher0901/roam/pull/153): route 1
> works, but only against a READY pull request, because the
> routine's trigger is filtered on drafts — proven by a
> three-point experiment run one variable at a time. The flight
> also produced the phantom-run lesson (`count:runs` counts label
> EVENTS, so it is an upper bound and not a spend meter) and two
> unplanned crash tests that existing doctrine absorbed without
> amendment. **Two things the closing verdict could not know have
> since qualified it, and an event's ending must carry its shelf
> life: the enforcement action shipped alongside it was WRONG in a
> way author, critic and external review all missed, corrected the
> next day; and the flight's central failure mode — "the label
> produced nothing" — was re-diagnosed on 2026-08-04 as DISPATCH
> LATENCY rather than a dead trigger, which the flight's own
> instruments could not have distinguished.**

## What it was

The first attempt to start a cloud lane on purpose, flown as a
two-leg experiment on 2026-07-16 with real cargo on both legs:

- **Leg A**, in the cloud — the reviewer subagent's own
  construction, [#146](https://github.com/wsher0901/roam/pull/146).
- **Leg B**, local — a control lane on unrelated cargo,
  [#147](https://github.com/wsher0901/roam/pull/147), flown to
  prove the law itself worked when the vehicle was not in question.

Leg B flew the entire lane law unassisted the same afternoon and
welded cleanly. Leg A spent five hours failing to start.

## What happened, in order

- **17:02:36 — the label goes on a draft PR.** The idempotency
  guard had read zero labels and a "bench ready" Status first.
  Thirteen minutes of watching produced no canary commit, no PR
  comment, no check-run: the only actors on the PR were a bot and
  the label event itself. Spawn declared failed at 17:16; the label
  left in place as evidence.
- **21:29 — the retry ladder opens, with the founder's diagnosis
  first.** The routine was verified Active, bound to the repo,
  prompt current — and showed ZERO runs ever. So the 17:02 event
  had never matched the routine at all, and the local counter's
  reading of 1 was the raw label event rather than a burned run.
- **21:31:49 — step 1: re-label the draft as-is. Nothing.**
  Sixteen minutes of evidence checks found the branch tip unmoved,
  zero comments, zero check-runs, zero timeline actors besides the
  label. A fresh event on a verified-Active routine still spawned
  nothing — which promoted draft-filtering from suspicion to lead
  suspect.
- **~21:53 — step 2: flip the PR ready, then label. A canary in
  ninety seconds.** A cloud session woke on the bench, stamped the
  memory Status "claimed by cloud", and pushed. The ack landed a
  minute later and the lane went to work.
- **21:57 — an uninvited test.** A redelivered `pull_request.labeled`
  webhook arrived citing the PRE-CANARY head SHA. The wake-lock's
  re-read-Status-first rule met it: the Status was the lane's own
  non-terminal claim, so nothing happened. The first of many.
- **21:58 → ~22:04 — the mail slot works.** The lane raised both
  of its reserved questions in ONE `BLOCKED:` comment and idled;
  the founder answered both together about six minutes later; the
  lane resumed in-thread. The reply-ack window was confirmed live
  the same night by a separate 22:10 reply answered by a 22:11
  commit.
- **22:28 — leg A completes**, its full CI mirror green across all
  six checks, and the flight moves to its report bench.
- **The same night, in block 2 — enforcement rides along.** The
  repository was patched to squash-only with branch auto-delete
  (drift found at preflight, verified fixed), and a docs-only build
  skip was implemented as a Vercel `ignoreCommand` — but only after
  the mechanism was checked against current documentation and
  tested against three real commits. It then live-fired on its own
  PR and exposed an edge in the documented canonical form, which
  was upgraded on the spot to prefer the last successfully deployed
  SHA with a parent-commit fallback.

## What it found

1. **The recipe of record.** Ready-flip, THEN label. The trigger
   does not fire on draft PRs — undocumented platform behaviour,
   established by three points with one variable moving at a time,
   which is why the finding survived contact with everything after
   it.
2. **The ready-flip now means two things**, and the guard had to be
   written into doctrine: for a lane mid-flight, ready ≠ complete.
   The staged API route exists specifically to take that overload
   back off.
3. **The phantom-run lesson.** A local proxy that counts trigger
   events is an upper bound on spend, never a meter. Draft-label
   failures burn proxy counts and zero provider runs.
4. **Two crash tests nobody scheduled, both absorbed without
   amending anything.** The redelivered webhook died harmlessly on
   the wake-lock; and a mini-session that closed without a ritual
   repaint left a stale board that the next sitting's pickup healed
   exactly as designed — git outranks the board.
5. **The local half was never in doubt.** Leg B, the control lane,
   flew the whole law unattended while the cloud half was still
   failing to start. That separation is what let the flight
   conclude the VEHICLE was at fault rather than the law.

## Where it stands

The flight is closed and its recipe is still the recipe. Two
qualifications have accumulated since, and both matter more than
anything the closing report got wrong.

**The enforcement action shipped with the report was defective, and
three layers missed it.** The build-skip's failure direction was
asserted as "always build"; that held for one exit code and not for
the one a shallow-clone horizon actually produces, where a
beyond-clone previous SHA exited 128 and turned four productions to
ERROR. It was hardened the next day. The record names the miss as
shared by author, critic AND external review — which is the most
useful thing about it: three independent checks agreed on an
unverified claim about an error path nobody had triggered.

**And the flight's headline failure has been re-diagnosed.** On
2026-08-04 a bench read as "spawn produced no session" turned out
to have received one about 27 minutes after its label — late, past
the canary window, finding a Status it did not own and terminating
correctly. Same route, same bench, ~27 minutes then ~2 on the
respawn. That does not overturn the draft-filtering finding, which
was proven by moving one variable; **it means the flight's
instruments — watch for thirteen minutes, then declare failure —
could not have told a filtered trigger from a slow one.** Anyone
re-reading this event should hold its 17:02 and 21:31 results as
"no session within the window", which is what was actually
observed.

## Sources

Down-links only.

- [the flight report](../record/history/workshop/mechanism/maiden-flight-report.md)
  — the closing bench, its enforcement actions, and the phantom-run
  catch ·
  [leg A's own log](../record/history/workshop/mechanism/reviewer-subagent.md)
  — the ladder as the lane and cockpit recorded it, timestamp by
  timestamp ·
  [leg B](../record/history/workshop/definition/time-doctrine.md) —
  the local control.
- [D-043](../record/DECISIONS.md#d-043--cloud-ignition-and-away-command-redesign)
  — the decision the flight earned ·
  [D-041](../record/DECISIONS.md#d-041--delegation-architecture) —
  the label route it was testing.
- [parallel-lanes §Cloud spawn](../skills/parallel-lanes.md#cloud-spawn--route-ladder)
  — the recipe and the filled verify checklist ·
  [§Wake-lock](../skills/parallel-lanes.md#wake-lock--parking) —
  what killed the redelivery.
- [the ignore-step repair](../record/history/workshop/mechanism/vercel-ignore-fix.md)
  — the enforcement action's defect, corrected.
- PRs: [#146](https://github.com/wsher0901/roam/pull/146) ·
  [#147](https://github.com/wsher0901/roam/pull/147) ·
  [#153](https://github.com/wsher0901/roam/pull/153).
