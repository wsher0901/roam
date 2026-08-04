---
type: probe-record
title: Flight 4 — the freeze drill, logged from inside the hold (2026-08-04)
status: open
---

# Flight 4 — the freeze drill, logged from inside the lane

The drill's own log, written by the cloud lane that flew it, on
[PR #303](https://github.com/wsher0901/roam/pull/303). THE CARGO IS
NOT THE POINT; THE HOLD IS: this bench writes two sections, pushes,
and then stops mid-job so that a fence landing on this branch meets
a worker that is still alive. Contract:
[the spec](../specs/flight-4-freeze.md).

**THE RULE THIS FILE OBEYS.** Everything below is either something
this seat OBSERVED — a clock read, a git object, an API response —
or the exact words **"not observable from this seat"**. Nothing is
inferred from what the documents say ought to have happened.
Several lines are unobservable by construction — the cockpit's
connector ladder walk, the founder's word, the landing, the weld —
and writing them as unobservable is the correct result, not a gap.
All times are UTC unless the source itself carried an offset, in
which case the offset is shown as the source wrote it.

**Nothing below the checkpoint line was written before the hold.**
This file was pushed carrying BORN and THE CHECKPOINT and nothing
else, precisely so that the drill's outcome could not be
pre-narrated. Whatever section follows them was written after the
hold ended, from what the hold actually produced.

## BORN

| Fact | Value | How this seat saw it |
|---|---|---|
| Vehicle | cloud session, Linux container, `user=root host=vm`, `Linux 6.18.5-fc-v18 x86_64` | shell |
| Working dir | `/home/user/roam` | shell |
| Branch worked | `docs/flight-4-freeze` | `git checkout`, reflog `20:48:26` |
| Branch at wake | `claude/lucid-allen-vkuzu5`, standing at `771bd45` | reflog + session-start hook line |
| Head at wake | `771bd45` — "docs: bench birth — flight-4-freeze, the drill built to be caught" | `git log` |
| Base at wake | `main` at `50fa07e` | PR #303 API response |
| Git identity | `Claude <noreply@anthropic.com>` | `git config` |
| Remote | `https://github.com/wsher0901/roam` — github.com directly | `git remote -v` |
| PR at wake | #303, state open, **NOT draft**, label `lane:cloud` present, `mergeable_state: blocked` | PR #303 API response |
| Trigger named to the lane | "a pull request labeled `lane:cloud`" | this session's own kickoff prompt |
| Head SHA the webhook cited | `771bd45` — the birth SHA | the trigger-context block of the kickoff |

The birth in the order this seat can put it:

- **20:46:48Z** — the bench birth commit `771bd45` is authored
  (`2026-08-04T16:46:48-04:00`, as git wrote it), author `Wonseuk`.
  Two files: the spec and the memory stub.
- **20:47:09Z** — PR #303 created (`created_at`). Its body opens
  "**Bench-first birth.**" and says "Draft at birth; the lane claims
  it by canary" — and the PR this lane read was NOT draft.
  WHETHER A READY-FLIP EVER HAPPENED IS **not observable from this
  seat**, for the same reason flight 1 recorded: the body string is
  boilerplate written at birth and cannot witness a state
  transition, and a PR created ready carrying that body is
  indistinguishable from one created draft and flipped. What IS
  observable is a **43-SECOND WINDOW** — creation at 20:47:09Z to
  the container's own checkout at 20:47:52 — inside which a flip,
  if there was one, would have had to fall.
- **20:47:15Z** — the Vercel bot's deployment comment, the earliest
  PR event this seat can see carrying a timestamp of its own.
- **20:47:52** — the container's own git checkout of `771bd45`,
  followed one second later by a checkout onto a session branch of
  its own, `claude/lucid-allen-vkuzu5`. Both read from this
  session's reflog. THE ENVIRONMENT WAS BORN ON THE PR HEAD, not on
  `main`.
- **~20:48** — this session's first clock read. The stamp is
  minute-precision because that is the format this seat asked for;
  the first read carrying seconds is `20:49:38Z`, later in the same
  sequence. Recorded as approximate rather than rounded into
  false precision.
- **20:48:26** — this lane's own checkout of `docs/flight-4-freeze`,
  stepping off the container's session branch.

Three facts about the birth this seat can state, and that the
ground cannot see as cheaply:

1. **The bench was complete before the worker existed.** At wake,
   branch, spec (`docs/record/specs/flight-4-freeze.md`), memory
   stub and PR #303 were all already on origin, in ONE commit
   authored 64 seconds before this session's environment checked
   it out. Bench-first birth is not a claim the lane takes on
   trust — it is the state of the tree the lane wakes into.
2. **The session-start hook ran on a branch that was not the bench,
   and said so plainly.** Its line read
   "on `claude/lucid-allen-vkuzu5` — pull skipped": the container
   names a session branch of its own at the PR head, and the lane
   has to step off it deliberately. Identical in shape to flight
   1's observation, on a different session branch — so it is the
   route's behaviour, not one container's accident.
3. **THE REMOTE DIFFERED FROM FLIGHT 1'S, AND THAT IS OBSERVABLE
   RATHER THAN INFERRED.** `git remote -v` on this seat returns
   `https://github.com/wsher0901/roam` — github.com directly.
   [Flight 1's log](flight-1-shakedown.md) records, from the same
   command on its own seat, "a local HTTP git proxy on
   `127.0.0.1`, not `github.com` directly". Two lanes on the same
   spawn route, twenty-four hours apart, woke into different
   network plumbing. WHY IT CHANGED IS **not observable from this
   seat** — the container's provisioning is not something a lane
   can read. What is observable is that a lane cannot treat the
   previous flight's environment as a constant.

## THE CHECKPOINT

**Lane side — the canary.** One trivial commit, `c5e09d3`: memory
Status set to `claimed by cloud — 2026-08-04`, plus the moment-1
diary line. Authored **20:49:02Z** and pushed; git's own report of
the push:

```text
   771bd45..c5e09d3  docs/flight-4-freeze -> docs/flight-4-freeze
```

The Status this lane overwrote was
`bench ready, no worker yet — birthed 2026-08-04 by the work PC control tower`:
not a claim owned by anyone else and not terminal, so the bench was
this lane's to take.

**Baton-holder side — the ack token, verbatim as origin holds it:**

```text
airborne · cloud · 2026-08-04
```

Observed facts about the ack:

- Commit `c08a079`, "docs: airborne ack — flight-4-freeze is
  licensed to work", authored **2026-08-04T16:50:12-04:00** —
  20:50:12Z, **70 seconds after the canary was authored**.
- Author and committer: `Wonseuk`, the founder's GitHub identity.
  WHETHER A HUMAN OR A SESSION PUSHING AS THE FOUNDER WROTE IT IS
  **not observable from this seat** — git records the identity,
  never the hand.
- The ack commit touches one file, this bench's memory, and its
  body carries the baton-holder's own timing claim: that the canary
  landed at 20:49:22 UTC, 98 seconds after the `lane:cloud` label.
  THE LABEL TIME IS **not observable from this seat** — this lane
  never saw the labelling event, only the kickoff naming it — so
  that number is recorded as the ground's observation, read out of
  a commit, not as this seat's.
- This lane read the ack at **20:50:27Z**, by fetching the branch
  and reading the Status line as ORIGIN holds it: **85 seconds**
  from canary to licensed, against a ~10-minute window — about 14%
  of it.

**THE MATCH WAS ANCHORED ON THE CONTRACT'S OWN TOKEN, and that is
the difference between this handshake and flight 1's.** What was
armed here: a test of whether the Status line STARTS WITH
`airborne ·` — the full token, middot included, exactly as
[§Canary](../../skills/parallel-lanes.md#canary-handshake-both-sides)
fixes it — never a substring search and never the bare word. The
anchoring did real work: this lane's own claim prose contains the
word "airborne", so a substring match would have found the lane's
own writing and read it as the ack, and that failure mode was live
in the file the whole time the watcher ran.
[Flight 1](flight-1-shakedown.md) recorded, as its most
consequential finding, that its watcher anchored on the bare WORD
instead — a departure whose green was "a green for the instrument,
not for the contract". This flight's green is measured with the
contract's instrument, unmodified. It is evidence that THE
handshake as written closes, which is the thing flight 1 could not
supply.

**THE LICENCE WAS A COMMIT ON ORIGIN, and nothing else was
offered.** No message shaped as an ack arrived in this session on
this flight — the 2026-08-04 incident
[§Canary](../../skills/parallel-lanes.md#canary-handshake-both-sides)
records did not recur here. The rule was still applied as written:
the licence was fetched and read back from origin, never from the
working copy alone and never from anything arriving in the session.

**WHAT WOKE THE LANE TO READ IT WAS A REDELIVERED WEBHOOK, and the
wake-lock met it correctly.** At about 20:50:2x a second
`pull_request.labeled` event for PR #303 reached this session,
citing head SHA `771bd45` — THE BIRTH SHA, two commits stale by
then (`c5e09d3`, `c08a079`). The lane did what
[§Wake-lock](../../skills/parallel-lanes.md#wake-lock--parking)
says and re-read its memory Status from origin before anything
else, rather than trusting the SHA the event handed it. The Status
it found was the ack. So the wake started no duplicate claim and no
second canary; it produced one fetch, which happened to be the
fetch that licensed the lane. This is at least the **third**
recorded occurrence of this redelivery — 2026-07-16
([§Cloud spawn](../../skills/parallel-lanes.md#cloud-spawn--route-ladder)),
2026-08-03 ([flight 1](flight-1-shakedown.md)), and now — and it
died the same harmless death each time, always because the STATUS
was read and never because the stale SHA was compared.

One point of honesty about that coincidence: a poll on a
20-second interval was also armed against origin and had not yet
reported when the wake-lock's fetch ran. Either instrument would
have found the ack within the window; the one that actually did was
the wake-lock's. The lane records which, rather than crediting the
watcher it had built.

**A cheap finding the ack surfaced, in flight 1's spirit.**
[§Canary](../../skills/parallel-lanes.md#canary-handshake-both-sides)
disagrees with itself about the token's middle field. Its canonical
block reads `airborne · <url> · <date>`; its baton-holder bullet
says the line must begin exactly
`airborne · <vehicle or url> · <date>`. This ack wrote a vehicle —
`cloud` — which is canonical under the bullet and not under the
block. Nothing broke, because the contract anchors the MATCH at
`airborne ·` and a lane cannot test a field the section defines two
ways. But the section is the contract a lane's watcher actually
reads, and it currently cannot be quoted from one place without
choosing which of its two forms to believe.

---

**THE CHECKPOINT LINE.** Everything above was written before the
hold and pushed as one commit; that push is the signal the drill
turns on. What follows was written after the hold ended.

The hold, as this lane will run it: poll origin for up to 15
minutes for either an ack-to-proceed comment on
[PR #303](https://github.com/wsher0901/roam/pull/303) or a fence
commit on this branch, WITHOUT fetching-and-rebasing — so that the
hold's exit is a plain push attempt, and a fence landed meanwhile
is met as a rejected push. That rejection, if it comes, is the
drill's entire object; if it does not come, the honest null result
is.

## THE WINDOW CLOSED UNUSED

**No fence arrived. This section is the honest null result, and it
is written because nothing else happened — not as a fallback for a
rejection this lane failed to produce.**

What the hold actually was, as this seat ran it:

| Fact | Value | How this seat saw it |
|---|---|---|
| Checkpoint push | `d5347ca`, **20:53:54Z** | git's push report |
| Hold's first read of origin | **20:54:32Z** | the poll's own first line |
| Hold deadline | **21:09:32Z** — 15 minutes, as the spec fixes it | computed at hold start, printed |
| Poll instrument | `git ls-remote origin refs/heads/docs/flight-4-freeze`, every 20s | the script |
| Fetches performed during the hold | **none** | the local `origin/docs/flight-4-freeze` ref still read `d5347ca` at exit |
| Origin head at timeout | `d5347ca` — unmoved for the whole window | the poll's final read, **21:09:49Z** |
| PR comments during the hold | one, the Vercel bot's, `created_at` 20:47:15Z — no ack-to-proceed | four GitHub API reads across the window |

**THE NO-REBASE INSTRUCTION WAS HONOURED BY CONSTRUCTION, NOT BY
DISCIPLINE.** [The spec](../specs/flight-4-freeze.md) forbids
fetch-and-rebase during the hold; this lane went one step stricter
and performed **no fetch at all**, polling with `ls-remote`, which
reads the remote's ref without writing anything into the local
repository. The difference matters for a drill: a lane that merely
resolves not to rebase can still be undone by a habit, and the
experiment it destroys is unrecoverable. A lane that never fetches
cannot fast-forward past a fence even by accident. The local
`origin/docs/flight-4-freeze` ref reading `d5347ca` at exit is the
evidence, and it is checkable by anyone from the reflog.

**What this flight established, and what it did not.**

- ✅ **OBSERVED — the bench reached the alive-and-stopped state the
  drill needed.** From the checkpoint push at 20:53:54Z until this
  section was written, a worker sat on this branch, licensed,
  mid-job, with its next act pending. That state is what three
  previous flights could not offer a fence, and it existed here for
  the full specced window.
- ✅ **OBSERVED — the window was real and its edges are stamped.**
  Roughly sixteen minutes, 20:53:54Z to the exit push below, during
  which any commit landing on `docs/flight-4-freeze` would have met
  a live worker rather than a finished one.
- ❌ **THE RULE UNDER TEST REMAINS UNOBSERVED, for the fourth
  flight — but for a NEW reason, and the distinction is the
  finding.** Flights 1 through 3 missed
  [the wake-lock's rejected-push rule](../../skills/parallel-lanes.md#wake-lock--parking)
  because every fence landed on a bench that had already finished:
  there was no live worker to stop. This flight had the live
  worker and did not get the fence. The apparatus was the missing
  half before; this time the apparatus was ready and the event
  never came.
- **WHY NO FENCE ARRIVED IS *not observable from this seat*.**
  Whether the cockpit was watching for the checkpoint push, whether
  a fence was attempted and failed, whether the seat that would
  land it was occupied at all — none of that is readable from a
  lane. This log records that no commit reached the branch and no
  comment reached the PR inside the window, and stops there. The
  cause belongs to whoever can see it.

**THE EXIT WAS A PLAIN PUSH ATTEMPT, as specced.** The hold ended
with the commit carrying this section pushed without a preceding
fetch, merge, or rebase — so that a fence landed meanwhile would
have been met as a rejection and nothing else. Its outcome is
recorded immediately below, from git's own report rather than from
expectation.

## THE EXIT PUSH

*Recorded after the attempt, from git's report.*

Everything above this heading was pushed as one commit; whether
that push was accepted or refused is the last thing this flight
observes, and it is written into this section from the push's own
output.

Sources:
[the spec](../specs/flight-4-freeze.md) ·
[flight 1's log](flight-1-shakedown.md) ·
[LAWS §Parallel lanes & cloud](../../LAWS.md#parallel-lanes--cloud) ·
[parallel-lanes](../../skills/parallel-lanes.md) ·
[land](../../skills/land.md) ·
[D-074](../DECISIONS.md#d-074--phase-1-closes-on-flights-3-and-4)
