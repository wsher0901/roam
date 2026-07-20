---
type: spec
id: shakedown-audit
title: Shakedown-audit — close the Shakedown Flight on paper
status: shipped
stage: workshop
branch: docs/shakedown-audit
pr: 175
opened: 2026-07-19
shipped: 2026-07-20 13:17
---

# shakedown-audit — close the Shakedown Flight on paper

**Links:**
[clerk-autospawn](clerk-autospawn.md) ·
[clerk-notify](clerk-notify.md) ·
[SETUP §Staged](../SETUP.md#staged--turns-on-when-its-stage-opens)
· [SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
·
[parallel-lanes §Answering a lane](../skills/parallel-lanes.md#answering-a-lane-the-mail-slot)
·
[parallel-lanes §Cloud spawn](../skills/parallel-lanes.md#cloud-spawn--route-ladder)
·
[D-043](../DECISIONS.md#d-043--2026-07--cloud-ignition--away-command-redesign--route-ladder-v2-ready-flip-then-label-is-the-recipe-of-record-api-ignition-and-the-cloud-clerk-staged-the-claude-app-the-single-away-surface-amends-d-041-upholds-the-lane-law-and-the-wake-lock)
· precedent:
[maiden-flight-report](../history/workshop/mechanism/maiden-flight-report.md)

## Goal

Close the Shakedown Flight (phases 1–2, 2026-07-17 → 2026-07-19) on
paper, one theme one bench: grade the
[A-checklist](clerk-autospawn.md#the-a-checklist-graded-at-the-flight)
and the
[N-checklist](clerk-notify.md#the-n-checklist-graded-at-the-flight),
close every recorded deviation as a forensics finding, resolve the
two "in verification" staged lines per the cloud-clerk precedent,
sweep [IDEAS](../IDEAS.md), and stage the board sweep for the ship
tail. Founder-mandated 2026-07-19, in-session, after the origin ref
cleanup surfaced the resurrection incident (finding 5).

## Out of scope

- Fixing the reviewer agent-type DEFECT — the
  [IDEAS](../IDEAS.md) line stays open; ship §6's synchronous
  fallback remains lawful.
- Adopting the detached-verification process lesson into
  [ship](../skills/ship.md) — this bench only appends the dated
  [IDEAS](../IDEAS.md) proposal; the founder decides later.
- [liftoff](../skills/liftoff.md) — WAS outside the mandate's
  files-touched list; its fire:clerk line still read "in
  verification" (found gap, surfaced at THE GATE for the founder's
  word — repair rides a follow-up unless folded in there). The
  founder's gate answer — "Q7: fold it in", 2026-07-20 — folded
  the repair into this bench: the line now carries the verified
  stamp per the cloud-clerk precedent (see §Deviations).
- Merging — external Web review precedes the merge word. This bench
  rides to THE GATE and holds.

## Plan

1. STEP 0, machine-local before the bench: resurrection tripwire
   (expect main only) · the docs/cloud-clerk local straggler
   resolved content-level against PR #156.
2. Grade the A-checklist in
   [clerk-autospawn](clerk-autospawn.md) — tick each box, result in
   one line under it; A2 · A3 · A5 and A4's routines-page glance are
   founder attestations, asked at THE GATE; anything unanswered is
   marked "pending founder attest"
   ([maiden-flight-report](../history/workshop/mechanism/maiden-flight-report.md)
   precedent) — never invented.
3. Grade the N-checklist in [clerk-notify](clerk-notify.md) — N2 ·
   N3 from the live 07-17 record; N1 · N4 · N5 · N6 from the clerk's
   self-report (the founder opens the still-live clerk session,
   asks, pastes here).
4. §Forensics ledger below — each recorded deviation of the flight
   becomes a closed finding here, narrated in the memory.
5. Verification flips, cloud-clerk precedent exactly:
   [SETUP §Staged](../SETUP.md#staged--turns-on-when-its-stage-opens)
   — the clerk-notify and clerk-autospawn lines resolve out of "in
   verification" ·
   [parallel-lanes §Answering a lane](../skills/parallel-lanes.md#answering-a-lane-the-mail-slot)
   — the watcher line drops "in verification". Doctrine ripple from
   finding 5: the session-hygiene sentence in
   [parallel-lanes §Cloud spawn](../skills/parallel-lanes.md#cloud-spawn--route-ladder)
   gains the confirmed clause (retirement does not reliably stop the
   heartbeat push — verify the branch stays dead).
6. [IDEAS](../IDEAS.md) sweep: the double-dispatch diagnostic line
   closes on the founder's word at THE GATE (redelivery mechanism,
   evidence already appended) · one NEW dated line — the
   detached-verification process lesson (finding 6) · the reviewer
   agent-type DEFECT stays open, untouched.
7. Board sweep staged for the ship tail (ritual-written, post-weld):
   Needs-you №1 clears entirely (credential paste done 07-19 ·
   session-1v6419 deleted, resurrection on record · grading + audit
   = this bench); the thread line repoints — the Friday Web chat's
   real sidebar title is "Comprehensive architecture review and
   system audit"; the live ops surface line reads "current ops
   chat (title unrecorded at weld)" — the founder's gate answer,
   2026-07-20, left the sidebar title unread; the fallback wording
   given with it is recorded verbatim.
8. CI mirror green · ship §6 critic (synchronous fallback lawful —
   the DEFECT stands) · ready-flip → THE GATE. DO NOT MERGE.

## Forensics ledger

Each finding is a recorded deviation of the flight, closed here;
the narrative lives in the memory (history/ after the weld).

1. **Fire-1 400 (invalid_routine_id).** The first `fire:clerk`
   answered 400 pre-spawn — the pasted routine id lacked the
   documented `trig_` prefix. Cause: transcription, not doctrine —
   [SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
   already documents the `trig_…` id; the fix (corrected
   `.env.local`, ONE sanctioned retry, clean in ~3 s) landed live at
   A1. No session was created by the failure; the unburned-run
   confirm completes with A4's routines-page glance. CLOSED,
   contingent only on that glance.
2. **Exit-127 libuv assert (Windows).** fire-clerk's failure path
   exits via a cosmetic libuv assert on Windows — exit 127, not the
   scripted 1. Honest-nonzero HOLDS (the failure direction is
   preserved); diagnosis + disposition: §Finding 2 — diagnosis
   below. CLOSED — contained fix applied 2026-07-19, both failure
   paths re-run to an honest exit 1, assert gone.
3. **Shared-SETUP construction held.** The phase-2 payloads' one
   shared file (SETUP) was resolved at construction — lane A
   ([#170](https://github.com/wsher0901/roam/pull/170)) owned it;
   lane B's two declared doc mentions landed as recorded cockpit
   acts in [#171](https://github.com/wsher0901/roam/pull/171)'s weld
   commit. No merge conflict — the lane law's rule 4 held by
   construction, not by luck. CLOSED.
4. **Cloud-proxy 403 on branch delete.** The 07-17 attempt to
   delete `claude/session-1v6419` from the CLOUD seat first
   no-opped ("Everything up-to-date", ref surviving), then answered
   HTTP 403 on the explicit refspec. RESOLVED 2026-07-19: the
   founder-seat delete succeeded first try — classified as the
   cloud git proxy's infrastructure rail (sessions may not delete
   `claude/*` refs), the C7 hypothesis confirmed. CLOSED.
5. **Resurrection incident.** 2026-07-19 (evidence UTC, GitHub
   events API): first delete 07-20 01:51:23Z (DeleteEvent, actor
   wsher0901, this seat) → clean 60-s check → **CreateEvent 07-20
   01:55:20Z, actor wsher0901** — the retired first-clerk session's
   git proxy re-created the ref four minutes after deletion, at the
   byte-identical SHA `5cdb5d9` — a MAIN-history commit (the 07-17
   00:07 board repaint, main's HEAD when the session was born,
   CreateEvent 07-17 14:26:10Z): the platform auto-creates a
   session branch pointing at main, so zero-unique-work was true by
   construction. Re-delete 02:00:01Z (DeleteEvent) held through a
   90-s foreground watch and the STEP-0 tripwire. Doctrine ripple
   shipped with this bench (Plan 5): ending/archiving a session
   does not reliably stop its heartbeat push — after any
   retirement, verify the branch stays dead. CLOSED.
6. **Detached background verification is not verification.** The
   60-s resurrection spot-check ran as a detached background task:
   its exit code was lost ("process exited while detached") and its
   main-only answer, though true at read time, aged into a false
   all-clear four minutes later. Process lesson proposed as a dated
   [IDEAS](../IDEAS.md) line (graduation into ship's verification
   norms is the founder's later call, not this bench). CLOSED as a
   finding; the proposal rides.

### Finding 2 — diagnosis

Reproduced 2026-07-19 without firing (fake credentials from a
temp cwd; the 401 rejects before any routine spawn — no cap run
burned, the real `.env.local` never read). Result: the
missing-credentials path (pre-fetch) already exits an honest 1;
the bad-credentials path (401 answered after the fetch) died in
libuv's `src\win\async.c` line-94 assert — exit 127 — because
`process.exit(1)` fired while undici's network handles were still
unwinding. Contained fix applied to `scripts/fire-clerk.mjs` (the
pre-declared deviation): the post-fetch body now lives in an async
function whose failure paths RETURN 1, assigned to
`process.exitCode`, so the process drains and ends with the honest
number. Re-run: both failure paths exit 1, assert gone. The
success path is preserved by construction (same statements, return
0 instead of fall-through) — its live verification is the next
liftoff fire, which cannot be rehearsed without burning a run.

## Done means

- [x] Every A box ticked with a one-line result, or explicitly
      "pending founder attest".
- [x] Every N box ticked with a one-line result, or explicitly
      "pending founder attest".
- [x] The §Forensics ledger's six findings closed (finding 1
      contingent only on A4's glance), narrated in the memory.
- [x] SETUP §Staged carries neither clerk line as "in
      verification" — both resolved per the cloud-clerk precedent.
- [x] parallel-lanes: the watcher line has no "in verification";
      the session-hygiene sentence carries the confirmed
      resurrection clause.
- [x] IDEAS: the process-lesson line appended (dated); the
      double-dispatch line closed on the founder's gate word; the
      reviewer DEFECT line untouched.
- [x] Board-sweep content staged for the ship tail (executes
      post-weld).
- [x] The 2026-07-20 gate answers folded verbatim, hedges
      included: A2 · A3 attested, A5's does-not-recall recorded,
      the sidebar title recorded unread, liftoff's fire:clerk
      line repaired in-bench on the founder's "Q7: fold it in";
      everything unanswered pends exactly as written.
- [x] Full CI mirror green; the pushed commit's Actions run green.
      (Ticked at the weld, 2026-07-20 — the founder's merge word.)

## Verification

- grep `A1` … `A5` in [clerk-autospawn](clerk-autospawn.md) — five
  boxes, each ticked or "pending founder attest".
- grep `N1` … `N6` in [clerk-notify](clerk-notify.md) — six boxes,
  same rule.
- grep `in verification` in `docs/SETUP.md` — absent from the two
  clerk lines.
- grep `in verification` in `docs/skills/parallel-lanes.md` —
  absent from the watcher line.
- grep `in verification` in `docs/skills/liftoff.md` — absent
  (the gate-word fold).
- grep `stays dead` in `docs/skills/parallel-lanes.md` — the
  confirmed session-hygiene clause.
- grep `detached` in `docs/IDEAS.md` — the dated process-lesson
  line.
- `npm run check:links` · `check:ledger` · `check:memory` — green.

## Deviations

- `scripts/fire-clerk.mjs` may be touched under the §Finding 2
  contained-fix clause — pre-declared in the kickoff; a scripts/
  change makes the push non-docs-only, so Vercel builds once.
- Gate-word scope extension, 2026-07-20:
  `docs/skills/liftoff.md` joins the files-touched list on the
  founder's "Q7: fold it in" — the fire:clerk found gap repaired
  in-bench instead of riding a follow-up (§Out of scope records
  the flip).
