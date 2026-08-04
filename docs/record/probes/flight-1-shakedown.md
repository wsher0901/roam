---
type: probe-record
title: Flight 1 — the shakedown, logged from inside it (2026-08-03)
status: frozen
---

# Flight 1 — the shakedown, logged from inside the lane

The flight's own log, written by the cloud lane that flew it, on
[PR #268](https://github.com/wsher0901/roam/pull/268). The bench is
CARGO: the payload is small and harmless so that any failure
observed is a failure of the MACHINERY, not of the work. Contract:
[the spec](../specs/flight-1-probe.md).

**THE RULE THIS FILE OBEYS.** Everything below is either something
this seat OBSERVED — a clock read, a git object, an API response —
or the exact words **"not observable from this seat"**. Nothing is
inferred from what the documents say ought to have happened. Several
lines are unobservable by construction: they happen after the lane's
last push, and writing them as unobservable is the correct result,
not a gap. All times are UTC unless the source itself carried an
offset, in which case the offset is shown as the source wrote it.

## BORN

| Fact | Value | How this seat saw it |
|---|---|---|
| Vehicle | cloud session, Linux container, `user=root host=vm` | shell |
| Working dir | `/home/user/roam` | shell |
| Branch worked | `docs/flight-1-probe` | `git status` |
| Branch at wake | `claude/lucid-allen-7gxtus`, created at `c8fe3d9` | reflog + session-start hook line |
| Head at wake | `c8fe3d9` — "flight-1-probe bench born — spec + memory stub" | `git log` |
| Base at wake | `main` at `41d3c61` (it moved mid-flight — see MOMENT 4) | PR #268 API response |
| Git identity | `Claude <noreply@anthropic.com>` | `git config` |
| Remote | a local HTTP git proxy on `127.0.0.1`, not `github.com` directly | `git remote -v` |
| PR at wake | #268, **state ready — NOT draft**, label `lane:cloud` present | PR #268 API response |
| Trigger named to the lane | "a pull request labeled `lane:cloud`" | this session's own kickoff prompt |

The birth in the order this seat can put it:

- **21:36:28Z** — PR #268 created (`created_at`). Its body opens
  "**Draft PR at birth**", and the PR this lane read was NOT draft.
  That is the whole of what this seat saw. WHETHER A READY-FLIP
  EVER HAPPENED IS **not observable from this seat**: the body
  string is boilerplate written at birth and cannot witness a state
  transition, a PR created ready carrying that same body is
  indistinguishable from one created draft and flipped, and this
  seat could not read the PR's event timeline. What IS observable
  is a 25-SECOND WINDOW — creation at 21:36:28Z to the container's
  own checkout at 21:36:53 — inside which a flip, if there was one,
  would have had to fall. A window, not an instant.
- **21:36:34Z** — the Vercel bot's deployment comment, the earliest
  PR event this seat can see with a timestamp of its own.
- **21:36:45Z** — the PR's `updated_at` on this seat's first read.
  What edit that stamp belongs to is **not observable from this
  seat**; the PR API returns the stamp, not its cause.
- **21:36:53** — the container's own git checkout of `c8fe3d9`, 35
  seconds before this session's first clock read. THE ENVIRONMENT
  WAS BORN ON THE PR HEAD, not on `main` — the clone arrives already
  standing on the bench.
- **21:37:28** — this session's first clock read, and its checkout
  of `docs/flight-1-probe`.

Two facts about the birth that this seat can state and that the
ground cannot see as cheaply:

1. **The bench was complete before the worker existed.** At wake,
   branch, spec (`docs/record/specs/flight-1-probe.md`), memory stub
   and the PR were all already on origin, in ONE commit authored
   before this session's environment was created. Bench-first birth
   is not a claim the lane has to take on trust — it is the state of
   the tree the lane wakes into.
2. **The session-start hook ran on a branch that was not the bench,
   and said so plainly.**
   Its line read "on `claude/lucid-allen-7gxtus` — pull skipped": the
   container names a session branch of its own at the PR head, and
   the lane has to step off it deliberately. The hook printed the
   truth rather than the expectation, which is how a lane catches
   this in one line instead of one commit.

## THE CANARY

**Lane side.** One trivial commit — memory Status set to
`claimed by cloud — 2026-08-03`, plus the moment-1 diary line —
pushed at **21:38:01** as commit `676c9b3`, roughly 33 seconds after
this session's first clock read. The Status this lane overwrote was
`bench ready, no worker yet`: not a claim owned by anyone else and
not terminal, so the bench was this lane's to take.

**Baton-holder side — the ack token, verbatim as posted:**

```text
airborne · https://claude.ai/code/session_01NcE9UvzhybxinCqre5LvE2 · 2026-08-03
```

Middots, not em-dashes; the token first on the line. It matches
[§Canary](../../skills/parallel-lanes.md#canary-handshake-both-sides)'s
contract character-for-character — the form the 2026-07-22 near-miss
was recorded to protect. Observed facts about the ack:

- Commit `5b21ab6`, "docs: airborne ack — flight-1-probe is licensed
  to work", authored **2026-08-03T17:38:53-04:00** — 21:38:53Z, **52
  seconds after the canary landed**.
- Author and committer: `Wonseuk`, the founder's GitHub identity.
  WHETHER A HUMAN OR A SESSION PUSHING AS THE FOUNDER WROTE IT IS
  NOT OBSERVABLE FROM THIS SEAT — git records the identity, never
  the hand.
- The ack's URL field names THIS LANE'S OWN cloud session.
- This lane's watcher detected it at **21:39:15**, its own polling
  interval behind the push. Canary → licensed to work: **74 seconds
  of the ~10-minute window**, about 12% of it.

**THE MATCH WAS ANCHORED — BUT NOT ON THE TOKEN THE CONTRACT
FIXES, AND THAT IS THIS FLIGHT'S MOST CONSEQUENTIAL FINDING.** What
was actually armed: the watcher tested whether the Status line
STARTS WITH the bare word `airborne`, never a substring search.
The anchoring did real work — this lane's own claim prose contains
the word "airborne", so a substring match would have found the
lane's own writing and read it as the ack, and that failure mode
was live in the file the whole time the watcher ran. But
[§Canary](../../skills/parallel-lanes.md#canary-handshake-both-sides)
does not fix the match at the word. It fixes it at the full token —
"STARTS WITH `airborne ·` … never a substring search anywhere in
the memory, and never a search for the bare word" — and the lane
departed from it deliberately, reasoning recorded as MOMENT 2.

The reasoning was good and the ack happened to arrive in canonical
form, so the outcome was correct. THE PROBLEM IS NOT THE OUTCOME.
[The spec](../specs/flight-1-probe.md)'s simulation law says the
rituals are NOT special-cased for the test, and that friction
produced by running one exactly as written is a FINDING to record
rather than smooth over. **This lane changed the instrument it was
measuring with.** Checklist item 3's green was therefore measured
against a matcher the contract does not sanction: it is evidence
that A handshake closed, not that THE handshake as written closes.
A test flight that adjusts the instrument mid-measurement reports
on an aircraft nobody flies.

**The skill question this raises, recorded here so it does not
evaporate at the weld:** should §Canary's match anchor on the WORD
`airborne` rather than on the token `airborne ·`? The lane's
argument is not weak — the em-dash ack of 2026-07-22 is the exact
failure §Canary was written against, and an anchored word-match
catches both that failure and the self-match, while the token-match
catches only the self-match. The counter-argument is that the
token is what makes the ack unforgeable-by-accident, and a lane
that widens its own matcher widens it toward false positives. This
is a question for the machinery's owner, not for a lane to settle
by acting; it belongs in [IDEAS](../../IDEAS.md), which a lane may
not write.

Two things the ack surfaced that are cheap to fix and cost nothing
to notice:

- **The `updated:` stamp carries no timezone.** The ack's frontmatter
  reads `2026-08-03 17:38 · airborne ack · work PC`; the canary's
  reads `2026-08-03 21:38 UTC · canary claim · cloud`. Same minute,
  four hours apart on the page. Nothing is wrong — each seat read its
  own clock, as the derivation law requires — but a cold reader
  cannot order a memory's own stamps without knowing each seat's
  offset.
- **The claim form differs between its two homes.**
  [§Canary](../../skills/parallel-lanes.md#canary-handshake-both-sides)'s
  lane side says `claimed by <vehicle> — <date>`;
  [TEMPLATE](../../memory/TEMPLATE.md)'s state table says
  `claimed — <vehicle · date>`. Only the airborne row is
  machine-checked, so the claim row can drift between homes without
  anything going red. This lane wrote §Canary's form.

## THE DIARY

One line per memory moment
([the four](../../skills/parallel-lanes.md#the-four-memory-moments-the-lanes-diary-rule)).

**WHICH LINES WERE LIVE AND WHICH WERE TRANSCRIBED.** The memory
kept the diary live at every moment; THIS FILE did not, and the
distinction was blurred in the first draft. This file did not exist
until commit `7e05970` at **21:42:59**, after the ack — so its
MOMENT 1 and MOMENT 2 lines are TRANSCRIPTIONS from the memory,
which earned the at-the-moment property that the probe inherited.
MOMENT 4 and the wake-lock line were written live: commits
`f39eb81` at **21:45:01** and `3e34913` at **21:49:55**, each as
its moment happened.

The two files' stamps disagreed, and git settles it — each was
recording a different event, so both were right and neither said
which:

- **MOMENT 2** — the probe stamps 21:38, the memory 21:42. The
  DECISION was made around 21:38, while the watcher was being armed
  and before the ack existed at 21:38:53 to test it; it was WRITTEN
  DOWN at 21:42:59 in `7e05970`. Decision time and transcription
  time, four minutes apart.
- **MOMENT 4** — the probe stamps 21:45, the memory 21:46. The
  completion diary went in at 21:45:01 (`f39eb81`); the memory's
  21:46 belongs to `eafdc79` at 21:46:55, the revision that
  followed it. The moment is 21:45; 21:46 is the edit after it.

- **21:38 — MOMENT 1, the handshake claim** (live in the memory,
  transcribed here). Status → claimed by
  cloud, pushed, then the wait. Written into the memory as the canary
  commit itself, so the claim and its diary line are the same act.
- **21:38 — MOMENT 2, the first decision** (live in the memory,
  transcribed here). Made while arming the
  watcher, before the ack existed to test it: keep the match
  anchored at the START of
  the line but on the WORD `airborne` rather than on `airborne ·`,
  so that an em-dash ack — the exact 2026-07-22 failure — is still
  caught, while a substring match on the lane's own prose still
  cannot be. The stricter test would have been correct here and
  brittle in the recorded failure; the anchor is what does the
  safety work, not the middot. **This is the departure THE CANARY
  section now records as a finding: the reasoning was the lane's
  own, and the contract was §Canary's to change, not the lane's.**
- **21:49 — THE WAKE-LOCK MET A REDELIVERED WEBHOOK, LIVE.** After
  completion, a second `pull_request.labeled` event arrived for this
  PR, citing `c8fe3d9` — THE BIRTH SHA, five commits stale. The lane
  did what the rule says and re-read its memory Status before
  anything else: `complete, awaiting merge`, its own. Completion
  parks, so the wake started no work, re-claimed nothing, and wrote
  no duplicate. This is a second occurrence of the redelivery first
  recorded on 2026-07-16, and it died the same harmless death — but
  note WHAT did the saving. Not the stale SHA, which the lane never
  compared; THE STATUS READ. A wake that trusted the event's SHA
  instead would have found a branch five commits ahead of the SHA it
  was handed, and had to guess what that meant.
- **MOMENT 3, blocking — DID NOT OCCUR.** No `BLOCKED:` comment was
  posted, because nothing on this flight was ambiguous enough to need
  the founder. Recorded as absent rather than omitted: a probe that
  silently drops a moment reads the same as one that never reached
  it.
- **21:45 — MOMENT 4, completion** (live). Branch synced with the main that
  had moved under it (#269 landed mid-flight), the full verification
  loop run green — links 4481/0 broken, ledger 114↔114, memory
  valid, lint, format, 3 tests, build — and the simulation law
  checked mechanically rather than asserted: EVERY commit this lane
  authored touches `docs/memory/flight-1-probe.md` and this file and
  nothing else, listed rather than claimed. The branch's other
  changed files — [DASHBOARD](../../DASHBOARD.md),
  [IDEAS](../../IDEAS.md) — arrived in the sync
  merge, authored on `main` by the founder in #269; the lane wrote
  none of them. The distinction matters because a bare branch diff
  cannot make it: the diff shows the files, `git log --author` shows
  the hand. Written before the completion comment, per the contract's
  ordering.

## WHAT A GREEN FLIGHT PROVES

The nine links of the chain, each an observation or the exact words
"not observable from this seat".

1. **Bench pre-birthed** — ✅ OBSERVED. Branch, spec, memory stub and
   PR #268 were all on origin at `c8fe3d9` before this session's
   environment was created (`21:36:53` checkout of a commit already
   carrying all four).
2. **Spawn route 1** — ✅ PARTIALLY OBSERVED, and the unobserved
   parts named. Observed: at wake the PR was READY (not draft) and carried
   the `lane:cloud` label, and this session's kickoff names that label
   as its trigger. **The ORDER of the ready-flip and the label — the
   thing route 1 actually fixes — is not observable from this seat:**
   the PR API returns current state and one `updated_at`, and this
   seat could not read the PR's event timeline (the issue-timeline
   call rejects a PR number with "Could not resolve to an Issue").
   NOR IS THE FLIP ITSELF OBSERVABLE. The PR was created at
   21:36:28Z with a body opening "Draft PR at birth" and was READY
   when this lane read it 25 seconds later — but a PR created ready
   with that same boilerplate body reads identically, so WHETHER A
   FLIP EVER HAPPENED IS **not observable from this seat**. What is
   observed: the spawn worked, the label was present, and the PR was
   ready. What is not: that a flip occurred, and that it preceded
   the label — the one thing route 1 actually fixes.
3. **Canary inside the window** — ⚠️ OBSERVED, BUT NOT WITH THE
   CONTRACT'S INSTRUMENT. Canary 21:38:01, ack authored 21:38:53,
   detected 21:39:15: 74 seconds against a ~10-minute window, and
   the ack's form matches
   [§Canary](../../skills/parallel-lanes.md#canary-handshake-both-sides)
   character-for-character. What this does NOT establish is that
   §Canary's handshake closes, because the lane's watcher anchored
   on the bare word `airborne` where the contract fixes the full
   token `airborne ·`. The timing is sound; the matcher was the
   lane's own. THE CANARY section carries the finding and the skill
   question it raises. A green measured with a modified instrument
   is a green for the instrument, not for the contract.
4. **Work pushed** — ✅ OBSERVED. Every commit of this flight was
   pushed as it was made; the branch, not the session, holds the
   work. This line is verifiable by anyone from `git log` alone,
   which is the point of it.
5. **Ready flip** — ⚠️ OBSERVED AS A NO-OP, and this is a finding.
   The PR was ALREADY READY when this lane woke. WHY it was ready is
   not this seat's to say — see item 2 — so the observation stands
   on its own without a cause: there was no flip left for the lane
   to perform at completion, so THE READY STATE CARRIES NO
   INFORMATION ABOUT COMPLETION for this lane —
   [§Cloud spawn](../../skills/parallel-lanes.md#cloud-spawn--route-ladder)'s
   "ready ≠ complete" guard, met in the wild. What this lane can
   actually signal at completion is the memory Status, the pushed
   commit, and the @mention comment; the flip is the one contract step
   that route 1 has already consumed. The staged `api-ignition`
   target named in that section is the thing that would give it back.
6. **Non-author review** — NOT OBSERVABLE FROM THIS SEAT. It happens
   after this lane's last push, and no-solo-approval puts it in
   another session's hands by construction.
7. **The founder's word** — NOT OBSERVABLE FROM THIS SEAT.
8. **The weld** — NOT OBSERVABLE FROM THIS SEAT. A lane never merges;
   "done" means founder-approved and merged, and neither half is the
   lane's to see.
9. **Auto-land unprompted** — NOT OBSERVABLE FROM THIS SEAT. Landing
   is the cockpit's ritual
   ([land](../../skills/land.md)), fired after this bench closes.

**What the four unobservable lines are worth.** They are not
failures of the flight and not gaps in the log — they are the shape
of the lane's seat, drawn accurately. A lane can prove its own birth,
its handshake, and its work. It cannot prove its review, its
approval, its merge, or its fleet's landing, and a probe that claimed
otherwise would launder assumption into the record. The ground can
close those four in a sentence each; the lane can only mark where its
sight ends. **That boundary — five links visible from inside, four
only from outside — is this flight's actual result.**

This log is frozen as written: it is the view from ONE seat, and
editing it later from the ground would destroy the only thing it
records that nothing else can. The four unobservable links belong to
whoever can see them — the bench's entry in
[record/history/](../history), written after the weld.

**REPAIRED 2026-08-04, AND THIS LINE IS THE RECORD OF IT.** A reader
must never find a silently edited "frozen" file. At the gate the
pre-gate critic ([ship §6](../../skills/ship.md#6--the-gate))
returned ten findings against this log, the founder ruled that a
FRESH cloud lane repair them — so authorship stays off the reviewing
seat — and this pass is that lane's. It is not a rewrite from the
ground: every change REMOVES a claim the original seat could not
support, or names an instrument honestly, which is the freeze's own
principle rather than an exception to it. What changed: BORN and
checklist item 2 no longer conclude that a ready-flip happened —
that is now "not observable from this seat", against a 25-second
window rather than an instant · checklist item 5 keeps its
observation and drops the doc-derived cause that contradicted item 2
· THE CANARY section now reports the matcher that was actually armed
(the bare word, not the token), records THE LANE CHANGED THE
INSTRUMENT IT WAS MEASURING WITH as a finding, and carries the skill
question that follows · checklist item 3 is downgraded from ✅ to ⚠️
accordingly · THE DIARY separates the lines written live from the
ones transcribed after the ack, and reconciles the two files' stamps
from git · two weave misses fixed. Nothing was ADDED to the seat's
observations; the original text is in the branch's history at
`e0d8385`.

Sources:
[the spec](../specs/flight-1-probe.md) ·
[LAWS §Parallel lanes & cloud](../../LAWS.md#parallel-lanes--cloud) ·
[parallel-lanes](../../skills/parallel-lanes.md) ·
[liftoff](../../skills/liftoff.md) ·
[land](../../skills/land.md) ·
[D-043](../DECISIONS.md#d-043--cloud-ignition-and-away-command-redesign) ·
[D-046](../DECISIONS.md#d-046--flight-cockpit-the-control-tower-online)
