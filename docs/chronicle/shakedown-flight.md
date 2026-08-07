---
type: chronicle-story
shelf: I — the away surface
status: living
updated: 2026-08-06 · written · cloud lane
---

# The Shakedown Flight (2026-07-17 → 19)

> **CURRENT ENDING (2026-08-06).** Closed on paper on 2026-07-20 at
> [#175](https://github.com/wsher0901/roam/pull/175), with
> A1/A2/A3/N2/N3 green, six forensics findings closed, and **three
> attestations honestly pending — which were never obtained.** They
> could not be: the clerk whose self-report covered N1, N4, N5 and
> N6 was deleted two days later, so that checklist lost its only
> possible witness. The verdict has a shelf life and it has run out
> in the useful direction — the flight's SUBJECT is retired, so
> nothing it graded is load-bearing today. **Its findings outlived
> its subject.** The attestation haze it recorded is what produced
> the single-surface cockpit redesign
> ([D-046](../record/DECISIONS.md#d-046--flight-cockpit-the-control-tower-online)),
> and its resurrection incident produced a verification rule the
> workshop still runs.

## What it was

The first real exercise of the away architecture: a three-day
outing across 2026-07-17 → 19 that flew the cloud clerk, its
standing watch, and its API ignition together, then graded them
against checklists written before the flight — the A-checklist for
the ignition, the N-checklist for the watch.

It was a shakedown in the literal sense. Nothing about it was meant
to produce work; it was meant to produce EVIDENCE about machinery
that had shipped and never been used.

## What raised it

Two benches had merged on 2026-07-17 carrying explicitly ungraded
checklists — [clerk-notify](cloud-clerk.md)
([#163](https://github.com/wsher0901/roam/pull/163)) and
clerk-autospawn ([#164](https://github.com/wsher0901/roam/pull/164))
— each stating in its own memory that grading happens AT THE FLIGHT,
after the merge. The flight existed to redeem those promises.

Its closing bench was then founder-mandated in-session on
2026-07-19, minutes after an origin cleanup turned forensic.

## What happened, in order

- **2026-07-17 — the clerk flies, founder-run, and comes back all
  green.** C1 fresh derivation, verified externally and delta-aware
  against its own morning report · C2 a comment posted live on
  [#155](https://github.com/wsher0901/roam/pull/155), verbatim · **C3
  refused an out-of-charter request, cited the charter, and pointed
  at the cockpit** · C4 "fine on the phone" · **C5 about 4.5 hours
  idle, environment reclaimed, auto-revived on open from both phone
  and web, answer fresh and correct — the known resume-hang did not
  occur** · C6 zero app pushes observed all day.
- **2026-07-19 — a routine cleanup becomes a forensic
  investigation.** The sitting deleted three dead `claude/` branches.
  Four minutes later `claude/session-1v6419` **came back at its
  byte-identical SHA.** It was caught by the external Web review
  AFTER a detached background spot-check had already aged into a
  false all-clear — the check ran, returned clean, and stayed
  believed while the world moved under it.
- **The events chain, gathered pre-birth while fresh.** All UTC:
  original CreateEvent 07-17 14:26:10 — the platform births a
  session branch at main's then-HEAD, which is why its tip was a
  main-history commit and **zero-unique-work was true by
  construction** — then DeleteEvent 07-20 01:51:23, **CreateEvent
  01:55:20 (the resurrection, actor `wsher0901`, because the cloud
  git proxy pushes as the founder)**, and DeleteEvent 02:00:01, the
  foreground re-delete, which held through a 90-second watch and the
  next session's tripwire.
- **2026-07-20 — closed on paper at
  [#175](https://github.com/wsher0901/roam/pull/175).** The A and N
  checklists graded EVIDENCE-OR-ATTEST, six deviations closed as
  forensics findings, the two "in verification" staged lines
  resolved, and the founder's gate answers folded in verbatim —
  **hedges included.**

## What it found

**1 · Retirement does not reliably stop a session's heartbeat
push.** The resurrection was not a mystery to be solved but a
property to be documented: a session branch can be recreated by the
platform after deletion, pushing as the founder. The doctrine ripple
is a verification duty — **verify the branch stays dead** — and it
generalizes past this incident into the workshop's habit of
re-running a sweep to prove it finished.

**2 · A spot-check has a shelf life, and a stale clean result is
worse than no result.** The background check that returned all-clear
was correct when it ran and wrong when it was believed. This is the
same failure the chronicle's ending rule exists for, found here
first in miniature.

**3 · A failure path can lie about its own exit code.** Both
`fire-clerk` failure paths were reproduced live with fake
credentials from a temp cwd — the 401 rejects PRE-SPAWN, so no cap
run is burned and the real `.env.local` is never read. The 401 path
died in libuv's `async.c` assert exactly as the 07-17 record said:
`process.exit(1)` during undici teardown, exit 127. The canonical
repair — post-fetch paths return a code into `process.exitCode` so
the process drains — re-ran both paths to an honest 1.

**4 · The measurement lesson inside the lesson.** The first re-check
read exit 0 **because a `tail` pipe swallowed node's exit code.**
The instrument was wrong, not the code. It produced the
foreground-and-quote rule, and it is the single most transferable
finding of the flight: a pipeline can hide the very value you are
measuring.

**5 · THE ATTESTATION HAZE — the finding that redesigned the away
surface.** The founder could not reconstruct where-did-what across
Friday's three surfaces. The clerk, Remote Control and the GitHub
app each held a SLIVER of command and **none held authorship**. This
is not a usability complaint; it is a structural one, and
[D-046](../record/DECISIONS.md#d-046--flight-cockpit-the-control-tower-online)
answers it structurally: one surface with full authorship, so that
everything done away from the desk happens in one session that can
act and leaves the ordinary paper trail.

**6 · Three attestations stayed pending, and were written as
pending.** A4's routines-page glance, A5 (asked — the founder did
not recall), and the clerk's self-report covering N1, N4, N5, N6.
They were never invented, never quietly dropped, and never
obtained — the clerk died first. **The gap is the record.**

## Where it stands

**Closed, and its subject is gone.** The clerk was deleted on
2026-07-22 and tombstoned in the repo a day later, so the
A-checklist grades machinery that no longer exists and the
N-checklist grades a watch that was never scored and now never can
be. That sounds like waste and mostly is not: the flight's value
turned out to lie in the findings ABOUT the workshop rather than in
the grades about the clerk.

**Its verdict's shelf life, stated plainly** — the event variant's
requirement. Findings 1, 2 and 4 are permanent: they are about
verification, staleness and measurement, and none depends on the
clerk. Finding 5 is spent in the best way, having been ACTED ON
completely. Findings 3 and 6 are historical — a fixed script and a
checklist with no witness left.

**What it could not settle, and what inherited the question.** The
flight tested a surface that has since been replaced, so it says
nothing about the cockpit that replaced it. The successor questions
went to the proving flights of 07-22 and 07-23, and from there to
the phase-1 flights that
[D-074](../record/DECISIONS.md#d-074--phase-1-closes-on-flights-3-and-4)
still names as owed.

## Sources

Down-links only.

- [shakedown-audit](../record/history/workshop/mechanism/shakedown-audit.md)
  — the closing bench: the events chain, the six findings, and the
  gate answers folded verbatim.
- [maiden-flight-report](../record/history/workshop/mechanism/maiden-flight-report.md)
  — the earlier delegation maiden and the draft-trigger finding that
  set the recipe of record.
- [cloud-clerk](../record/history/workshop/mechanism/cloud-clerk.md)
  · the C1–C7 results verbatim ·
  [clerk-notify](../record/history/workshop/mechanism/clerk-notify.md)
  · the N-checklist ·
  [clerk-autospawn](../record/history/workshop/mechanism/clerk-autospawn.md)
  · the A-checklist.
- [D-043](../record/DECISIONS.md#d-043--cloud-ignition-and-away-command-redesign)
  · the away architecture under test ·
  [D-046](../record/DECISIONS.md#d-046--flight-cockpit-the-control-tower-online)
  · the redesign the haze produced.
- [the clerk's story](cloud-clerk.md) — what was flown here, and how
  it ended.
