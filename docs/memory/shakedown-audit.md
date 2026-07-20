---
type: memory
id: shakedown-audit
updated: 2026-07-19 · bench birth · home PC
---
# shakedown-audit — close the Shakedown Flight on paper

## Status
Bench ready — birthed 2026-07-19 22:40 by the home-PC cockpit,
which works this bench itself (no lane). STEP 0 already cleared
machine-locally before birth: tripwire clean (origin shows main
only) · the docs/cloud-clerk local straggler deleted after a
content-level proof (its tip 600c311 is an ancestor of merged PR
#156's head acd8851 — every local byte reached main via the
squash).

## What this task is
The Shakedown Flight (phases 1–2, 2026-07-17 → 2026-07-19) closes
on paper: the A-checklist and N-checklist graded in their shipped
specs, six recorded deviations closed as forensics findings, the
two "in verification" staged lines resolved per the cloud-clerk
precedent, the IDEAS sweep, and the board sweep staged for the
ship tail. Founder-mandated in-session 2026-07-19. Contract:
[the spec](../specs/shakedown-audit.md).

## Pending issues
Founder attestations, asked at THE GATE (never invented — the
maiden-flight-report precedent): A2 · A3 · A5, one line each ·
A4's routines-page glance (also closes finding 1's unburned-run
confirm) · the clerk self-report paste covering N1 · N4 · N5 · N6
· the live ops surface Web chat's sidebar title (for the tail's
thread-line repoint) · the founder's gate word closing the
double-dispatch IDEAS line.

## Left / idle
The whole mandate at birth: A/N grading · forensics ledger ·
finding-2 diagnosis (fire-clerk exit path) · SETUP +
parallel-lanes flips · IDEAS lines · verification · ship to THE
GATE, no merge. The liftoff fire:clerk line's own "in
verification" mention is a found gap OUTSIDE the files-touched
mandate — surfaced at THE GATE, repaired there or in a follow-up
on the founder's word.

## The story
Finding 2 closed first (2026-07-19 22:4x): both fire-clerk failure
paths reproduced with fake credentials from a temp cwd — the 401
path died in libuv's Windows assert exactly as the 07-17 record
said (exit 127), the pre-fetch path was already honest. The fix is
the canonical one — `process.exitCode` over `process.exit()` after
async I/O — and both paths re-ran to an honest 1. The success path
changed only structurally; its live proof is the next liftoff fire.

Born minutes after the origin ref cleanup turned forensic: the
07-19 sitting deleted three dead claude/ branches, and
claude/session-1v6419 came back four minutes later at its
byte-identical SHA — caught by the external Web review after a
detached background spot-check had already aged into a false
all-clear. The founder's mandate folds that incident, the whole
flight's deviation record, and the overdue A/N grading into one
closing bench. Evidence gathered pre-birth while fresh: the
GitHub events chain (delete 01:51:23Z → CreateEvent 01:55:20Z →
re-delete 02:00:01Z, all UTC, actor wsher0901 — the cloud proxy
pushes as the founder) and the branch-tip identity (5cdb5d9 is a
main-history commit: the platform births session branches at
main's HEAD, so the retired clerk's branch never held unique
work by construction).

## Where to look
Spec: [shakedown-audit](../specs/shakedown-audit.md). Graded
specs: [clerk-autospawn](../specs/clerk-autospawn.md) ·
[clerk-notify](../specs/clerk-notify.md). Flips:
[SETUP §Staged](../SETUP.md#staged--turns-on-when-its-stage-opens)
·
[parallel-lanes](../skills/parallel-lanes.md). The flight's
record: [DASHBOARD](../DASHBOARD.md) flight context ·
[#170](https://github.com/wsher0901/roam/pull/170) ·
[#171](https://github.com/wsher0901/roam/pull/171) · the clerk
session
[session_015Jd4wHuux5BitJ6HRwNMta](https://claude.ai/code/session_015Jd4wHuux5BitJ6HRwNMta).
