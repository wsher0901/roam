---
type: probe-record
title: Flight 4 — the freeze drill, logged from inside the hold (2026-08-04)
status: frozen
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

**WHO IS WRITING THIS SECTION, BECAUSE IT IS NOT THE SEAT THAT WROTE
THE REST.** The fence landed on this branch before the lane could
fill this heading, so it is written by the WORK PC DESK that adopted
the bench on **2026-08-04 at 21:26Z**, after
[land MODE P](../../skills/land.md#mode-p--pause-and-transfer-the-founder-is-going-local)
grounded the flight. The observability law survives the change of
hand by ATTRIBUTION rather than by pretence: every fact below names
which seat saw it and with what instrument. Above this line "this
seat" means the lane; below it, the lane is called the lane and the
desk is called the desk, and nothing is written as an observation
that neither of them made.

Three sources, and no fourth:

1. **Git objects on origin** — the desk reads them directly.
2. **GitHub's repository events API** — the server's own record of
   which pushes it accepted, and when. Read by the desk; its limits
   are stated below, because they turned out to matter.
3. **THE LANE'S OWN STAND-DOWN COMMENT** on
   [PR #303](https://github.com/wsher0901/roam/pull/303#issuecomment-5184732402),
   posted **21:17:42Z** — after the cockpit had already landed and
   painted its board, which is why no board and no commit carries
   any of it. It is the only surviving witness to the lane's last
   four minutes: the lane's final local commit `29a0bd0` was never
   pushed and died with the container, exactly as the lane said it
   would.

### The push itself — ACCEPTED

| Fact | Value | Seat · instrument |
|---|---|---|
| The attempt | `d5347ca..40685e4`, exit 0, clean fast-forward | lane · git's push report, relayed in its stand-down comment |
| Commit stamp | **21:11:37Z** | desk · the git object |
| Accepted by origin | **21:11:40Z**, `before` = `d5347ca` | desk · events API |
| Parent | `d5347ca` — the exact SHA the hold started on | desk · the git object |
| Rebase or force | neither: the parent is unchanged, the author date is preserved, and the server's own `before` field matches the head the hold began on | desk · git object + events API |

**THE NULL RESULT NOW RESTS ON TWO INDEPENDENT INSTRUMENTS, and
that is what this section adds.** The hold's poll saw no fence for
fifteen minutes; then the exit push — a plain `git push` onto a
branch the lane had deliberately never fetched — was accepted as a
fast-forward from the very SHA the hold started on. A polling
interval can miss something that lands between two reads. A
fast-forward cannot: had any commit reached this branch during the
window, that push would have been refused. The lane made this point
in its own comment and it is kept here because it is the stronger
half of the finding.

### THE REJECTION THAT CAME AFTERWARDS — a post-window artifact, NOT the drill's answer

The fence's own block demanded this be looked for and, if found,
labelled. It was found. **YES — the fence met a live worker.** The
lane was still running at 21:14:06Z, finished its completion pass,
committed locally at **21:15:55Z**, pushed, and **that push was
rejected**. Git's refusal, as the lane captured it:

```text
hint: the same ref. If you want to integrate the remote changes, use
hint: 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

**THIS CAPTURE IS THE TAIL OF THE MESSAGE, NOT ALL OF IT** — the
lane's command piped git's output through `tail -3`, so the leading
`! [rejected]` and `error:` lines were discarded before any seat
could read them. They are NOT reconstructed here. Writing what git
"usually says" would be precisely the fabrication this flight exists
to avoid, and a partial verbatim capture honestly labelled is worth
more than a complete invented one. The push was not retried, per
[the spec](../specs/flight-4-freeze.md)'s step 3. The lane then read
`held — landed for local pickup 2026-08-04` from origin at
**21:16:11Z**, recognised a terminal Status it does not own, pushed
nothing further, and stood down — the wake-lock behaving exactly as
[§Wake-lock](../../skills/parallel-lanes.md#wake-lock--parking)
writes it.

**AND IT IS STILL NOT THE DRILL'S ANSWER.** Flight 4's finding on
the rejected-push rule is the null result recorded in `40685e4`: the
window ran 20:53:54Z → 21:09:32Z and closed unused. This rejection
arrived roughly six minutes after that window shut, produced by the
LANDING RITUAL doing its ordinary job, not by the instrument this
bench was built to be. It is the first time in four flights that a
fence has met a live worker, and it is a post-window artifact. No
later reader may promote it.

**THE SYMMETRY IS THE PART WORTH KEEPING.** The cockpit's fence
push at 21:12:22Z was rejected by this lane's `40685e4`; this lane's
push at ~21:15:5xZ was rejected by the cockpit's `7870659`. Both
seats were live, both were moving, and **each learned the other
existed by being refused**. The mechanism the drill could not
observe inside its window was observed twice outside it, once in
each direction.

### What the sync merge made visible — the lane's last finding

Reported by the lane in its stand-down comment; the desk did not
observe it and records it as the lane's. Merging current `main` at
completion brought `9cb9214`
([#306](https://github.com/wsher0901/roam/pull/306), authored
21:01:35Z), whose board records a cockpit **seated 20:59Z** that saw
this lane's checkpoint commit, named `d5347ca`, computed the window
and published the call. **So the proximate cause of the null result
is readable, and no mechanical link failed:** the lane signalled,
the cockpit seated inside the window, saw the signal, computed the
deadline, and published it. What did not happen on time was the
founder's three words — which arrived at ~21:11, about two minutes
after the close. THE DRILL'S ONE UN-AUTOMATED LINK IS THE ONLY ONE
THAT DID NOT HOLD.

Two limits the lane stated about its own claim, kept verbatim in
substance: it observed a **document**, not the events that document
asserts; and whether the founder was absent or deliberately silent
is **not observable from this seat**.

**The two seats computed different window edges, and both were
right.** The cockpit's board put the close at 21:08:52; the lane's
own deadline was 21:09:32, because its hold counted from its first
read of origin rather than from the push. About forty seconds apart,
each seat reading its own clock as the derivation law requires. A
lane that had trusted the board's close over its own would have
exited early.

### What the desk observed on its own, and why it changes the instrument list

**A REJECTED PUSH LEAVES NO SERVER-SIDE TRACE — verified twice in
this flight's own record.** The events API shows pushes on this ref
at 20:49:04Z, 20:50:15Z, 21:11:40Z and 21:14:06Z, and nothing
between or after. The cockpit's refused attempt at 21:12:22Z and the
lane's refused attempt at ~21:15:5xZ are both absent, because a
refusal is a thing the server declines to record. THE CONSEQUENCE IS
DOCTRINAL: the most interesting event of this flight is knowable
only because a lane wrote it into a PR comment before dying. Had the
lane stood down silently, the record would show a clean chain of
accepted pushes and the rejection would have left no evidence
anywhere — the fence would have been read, forever, as landing on a
bench that had already finished, which is exactly the wrong
conclusion three flights already drew.

**AND THE EVENTS API IS NOT A COMPLETE PUSH LOG.** The checkpoint
push — `c08a079..d5347ca`, the single most important push of this
drill — HAS NO `PushEvent` in the feed, while its neighbours on the
same ref at 20:50:15Z and 21:11:40Z both do, and the feed's window
covers 19:10Z → 21:18Z continuously. WHY IT IS MISSING IS **not
observable from this seat**; the desk notes only that it landed in
the same second as an unrelated push to `main` (`4a2957c`,
20:53:51Z). A desk using this feed as a push ledger would have
concluded the checkpoint push never happened. It is a corroborating
instrument, never a primary one — the git objects are primary.

Sources:
[the spec](../specs/flight-4-freeze.md) ·
[the lane's stand-down comment](https://github.com/wsher0901/roam/pull/303#issuecomment-5184732402) ·
[flight 1's log](flight-1-shakedown.md) ·
[LAWS §Parallel lanes & cloud](../../LAWS.md#parallel-lanes--cloud) ·
[parallel-lanes](../../skills/parallel-lanes.md) ·
[land](../../skills/land.md) ·
[D-074](../DECISIONS.md#d-074--phase-1-closes-on-flights-3-and-4)
