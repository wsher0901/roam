---
type: memory
id: shakedown-audit
updated: 2026-07-19 · ship · home PC
---
# shakedown-audit — close the Shakedown Flight on paper

## Status
Complete, awaiting merge — 2026-07-19, at THE GATE on the home-PC
cockpit. Full CI mirror green (lint · format · links 2070/0 ·
ledger 79↔79 · memory · tests 3/3 · build); external Web review
precedes the founder's merge word. Six founder attestations ride
the gate ask (see Pending issues).

## What this task is
The Shakedown Flight (phases 1–2, 2026-07-17 → 2026-07-19) closes
on paper: the A-checklist and N-checklist graded in their shipped
specs, six recorded deviations closed as forensics findings, the
two "in verification" staged lines resolved per the cloud-clerk
precedent, the IDEAS sweep, and the board sweep staged for the
ship tail. Founder-mandated in-session 2026-07-19. Contract:
[the spec](../specs/shakedown-audit.md).

## Pending issues
Founder attestations, asked at THE GATE (the maiden-flight-report
precedent — recorded, never invented): A2 · A3 · A5, one line
each · A4's routines-page glance (the same glance closes finding
1's unburned-run confirm) · the clerk self-report paste covering
N1 · N4 · N5 · N6 · the live ops surface Web chat's sidebar title
(for the tail's thread-line repoint) · the founder's gate word
making the double-dispatch IDEAS close effective. Answers that
arrive at the gate are folded in before the weld; any that don't
stay "pending founder attest" in the graded specs, exactly as
written.

## Left / idle
Post-weld only: the ship tail's board sweep (Needs-you №1 clears
entirely; the thread line repoints — the Friday Web chat's real
sidebar title is "Comprehensive architecture review and system
audit"; the live ops surface is the current Web chat). One found
gap OUTSIDE the mandate's files-touched list, surfaced at the
gate: [liftoff](../skills/liftoff.md)'s fire:clerk line still
reads "in verification" — repaired on the founder's word there or
in a follow-up.

## The story
Born minutes after the origin ref cleanup turned forensic: the
07-19 sitting deleted three dead claude/ branches, and
claude/session-1v6419 came back four minutes later at its
byte-identical SHA — caught by the external Web review after a
detached background spot-check had already aged into a false
all-clear. The founder's mandate folded that incident, the whole
flight's deviation record, and the overdue A/N grading into one
closing bench.

STEP 0 cleared machine-locally before birth: the tripwire showed
origin at main only (the re-delete held), and the docs/cloud-clerk
local straggler fell to a content-level proof stronger than any
diff — its tip 600c311 is an ancestor of merged PR #156's head
acd8851, so every local byte reached main via the squash by
construction.

The forensic spine of the bench is the GitHub events chain,
gathered pre-birth while fresh (all UTC): the branch's original
CreateEvent 2026-07-17 14:26:10Z — the platform births a session
branch at main's then-HEAD, which is why its tip 5cdb5d9 is a
main-history commit and zero-unique-work was true by construction
— then DeleteEvent 2026-07-20 01:51:23Z (this seat's first
delete), **CreateEvent 01:55:20Z** (the resurrection, four minutes
later, actor wsher0901 — the cloud git proxy pushes as the
founder), DeleteEvent 02:00:01Z (the foreground re-delete, which
held through a 90-s watch and the STEP-0 tripwire). The doctrine
ripple shipped here: retirement does not reliably stop a session's
heartbeat push — verify the branch stays dead.

Finding 2 closed by live repro: both fire-clerk failure paths run
with fake credentials from a temp cwd (the 401 rejects pre-spawn —
no cap run burned, the real `.env.local` never read). The 401 path
died in libuv's `src\win\async.c` assert exactly as the 07-17
record said — `process.exit(1)` during undici teardown, exit 127 —
and the canonical repair (post-fetch paths return a code into
`process.exitCode`, the process drains) re-ran both paths to an
honest 1. The success path changed only structurally; its live
proof is the next liftoff fire. One measurement lesson inside the
lesson: the first re-check read exit 0 because a `tail` pipe
swallowed node's code — the foreground-and-quote rule (finding 6)
applies to the auditor too.

Findings 3 and 4 closed on the existing record, no new digging
needed — which is itself the story: the shared-SETUP construction
(lane A owned the file, lane B's two declared doc mentions landed
as recorded cockpit acts in #171's weld) proved the lane law's
never-share-a-file rule can be engineered at bench construction
rather than hoped for; and the 07-17 cloud-proxy 403 dissolved the
moment a founder-seat hand tried the same delete — the cloud rail
was the actor all along (sessions may not delete claude/ refs),
closing C7 and retroactively explaining Friday's "Everything
up-to-date" no-op as the proxy's polite half of the same refusal.
A gate-time note for the DEFECT ledger: ship §6's critic ran
NATIVELY this sitting — the reviewer agent-type registered without
the fallback, first success since the defect was graduated; the
IDEAS line stays open per the mandate, the datum recorded here for
its eventual diagnosis. The critic's one notable finding (this
story's own missing narration of findings 3–4) was repaired before
the gate — the paragraph above is that repair.

Grading stayed strictly evidence-or-attest: A1, N2, N3 green from
the live record; A4's proxy-blindness confirmed by the cap
arithmetic (count:runs read 2, true total 3); six boxes carry
"pending founder attest" — nothing invented. The flips followed
the cloud-clerk precedent exactly: both staged lines left §Staged,
the standing §cloud accounts bullets took the verified stamps
(clerk routine · charter duty 6), and the C6 datum's removal from
§Staged lost nothing — it lives in the cloud-clerk spec and
history. IDEAS: the double-dispatch diagnostic closed (effective
on the founder's gate word), the detached-verification lesson
inboxed as finding 6's proposal, the reviewer DEFECT left open.

## Where to look
Spec: [shakedown-audit](../specs/shakedown-audit.md). PR:
[#175](https://github.com/wsher0901/roam/pull/175). Graded specs:
[clerk-autospawn](../specs/clerk-autospawn.md) ·
[clerk-notify](../specs/clerk-notify.md). Flips:
[SETUP §Staged](../SETUP.md#staged--turns-on-when-its-stage-opens)
· [SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
·
[parallel-lanes §Answering a lane](../skills/parallel-lanes.md#answering-a-lane-the-mail-slot)
·
[parallel-lanes §Cloud spawn](../skills/parallel-lanes.md#cloud-spawn--route-ladder).
The flight's PRs:
[#170](https://github.com/wsher0901/roam/pull/170) ·
[#171](https://github.com/wsher0901/roam/pull/171). The clerk
session:
[session_015Jd4wHuux5BitJ6HRwNMta](https://claude.ai/code/session_015Jd4wHuux5BitJ6HRwNMta).
