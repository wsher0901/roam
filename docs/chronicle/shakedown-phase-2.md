---
type: chronicle-story
shelf: II — the lane system
status: living
updated: 2026-08-06 · written from the record · cloud lane
---

# Shakedown phase 2, the lane half (2026-07-17) — two lanes, nobody watching

> **CURRENT ENDING (2026-08-06).** Two cloud lanes flown FULLY
> UNATTENDED — the founder watched the ignition and left — both
> completed, both cleared by external review, both welded:
> [#170](https://github.com/wsher0901/roam/pull/170) and
> [#171](https://github.com/wsher0901/roam/pull/171). The finding
> that outlived the flight is a construction technique rather than
> a rule: **never-share-a-file can be ENGINEERED AT BENCH
> CONSTRUCTION rather than hoped for.** One lane owned the
> contested file; the other declared its two mentions of that file
> as weld-deferred acts in its own spec, and the baton-holder
> landed them at the weld. No collision was avoided by luck,
> because none was possible. The verdict was audited and confirmed
> two days later at
> [#175](https://github.com/wsher0901/roam/pull/175) — where the
> reviewer's agent-type also registered natively for the first
> time since its defect.

## What it was

The second phase of the Shakedown Flight, and the first liftoff
where the founder genuinely left. Two file-disjoint benches were
birthed, labelled, and then flown with nobody at the desk:

- **Payload A — the Hands doctrine.** The founder's choose-your-
  hands passage into its three homes in one ripple commit: verbatim
  into SETUP, the decision entry into the log, one pointer line
  into the lane manual. A lane-written decide, on the precedent set
  when the critic's own decision had been written the same way.
- **Payload B — the memory-format CI gate.** A zero-dependency
  script validating every task memory against the locked template,
  wired into the package scripts, the CI workflow, and the ship
  ritual's mirror list.

Both specs were written to leave the lane ZERO decisions. That is
the phase's posture in one sentence: if nobody is watching, nothing
should need asking.

## What happened, in order

- **Both benches were born bench-first and made file-disjoint BY
  CONSTRUCTION, not by inspection.** The collision risk was
  concrete: payload B's work implied two documentation mentions in
  a file payload A owned outright. Rather than sequencing the
  lanes, or letting one lane edit the other's file, those two
  mentions were DECLARED IN B'S SPEC as weld-deferred acts
  belonging to the baton-holder.
- **Ignition, then departure.** Payload B canaried 189 seconds
  after its label and was acked airborne; payload A canaried at
  20:59 UTC with a 110-second label-to-canary gap. The founder
  verified both spawns and left.
- **Payload B ran its own negative test before trusting its
  script.** A deliberately broken scratch copy — never committed —
  triggered all four failure modes on one line and exited nonzero.
  The script also prints an honest vacuous pass on zero files
  rather than a silent success.
- **Payload A hit one dead end and repaired it under the
  retroactivity law.** The link checker flagged a broken
  placeholder in the lane's OWN spec — a link written at bench
  birth pointing at a target literally named "link", before the
  real anchor existed. Because the spec was inside the task's
  touch-list, the placeholder was repointed in the same PR rather
  than deferred.
- **Both lanes completed unattended, and neither wrote main.** The
  welds happened later, at a cockpit sitting, in the founder's
  stated order — and payload B's two declared mentions landed in
  its weld commit exactly as its spec had said they would.

## What it found

1. **Unattended flight works, on fully-specified cargo.** Both
   lanes ran to completion with no founder present, no question
   asked, and no deviation from spec. The precondition is visible
   in both specs: zero lane decisions.
2. **The never-share-a-file clause is a construction rule, not a
   hope.** The technique — one lane owns the file; a sibling
   declares its mentions as weld-deferred baton-holder acts — is
   the reusable output of this flight, and the audit two days later
   named it as such. The same technique is what later made a
   SEVEN-lane fleet lawful, when the shared file was moved to the
   weld before launch rather than discovered at a merge.
3. **Split-brain was structurally impossible, and the record says
   why in four independent ways** — a sole label-triggered lane per
   bench, file-disjoint siblings, a fresh heartbeat guarding each
   bench under the liveness rule, and the wake-lock behind all of
   it. Belt, braces, and two more belts.
4. **A lane can write a decision entry.** Payload A's whole cargo
   was doctrine — a founder's words into a decision log — flown by
   a worker nobody was watching. The safety comes from the specs
   and the gates, not from proximity.

## Where it stands

Confirmed and closed. The audit bench that graded this flight
closed its findings on the existing record rather than needing new
digging, which is itself the result: the flight's own paper was
sufficient two days later, when the people reading it were no
longer the people who flew it.

**One thing has changed underneath the verdict, and it is worth
stating rather than leaving to inference.** This flight's proof was
"two unattended lanes complete" — a scale of two, on cargo sized so
that neither lane ran long. What has run since is larger and
faster: a lane on doc-sized cargo has been measured at roughly five
minutes from licence to completion, and seven benches have flown as
one fleet. The construction technique scaled with them. The
UNATTENDED half scaled less comfortably: this flight's founder left
after watching two ignitions, where a seven-lane fleet's failures
have been about the baton-holder's attention at the handshake, not
about the lanes' ability to work alone.

The lanes were never the fragile part. The handshake was.

## Sources

Down-links only.

- [payload A's log](../record/history/workshop/definition/agent-teams-brain.md)
  — the ripple commit, the canary timing, and the placeholder dead
  end ·
  [payload B's log](../record/history/workshop/mechanism/check-memory.md)
  — the negative self-test, and the two weld-deferred mentions.
- [the shakedown audit](../record/history/workshop/mechanism/shakedown-audit.md)
  — the grading bench: the shared-file construction confirmed, and
  the first native critic registration.
- [D-045](../record/DECISIONS.md#d-045--hands-doctrine) — payload
  A's cargo ·
  [D-044](../record/DECISIONS.md#d-044--the-pre-gate-critic-goes-live)
  — the lane-written-decide precedent it followed.
- [parallel-lanes §The lane law](../skills/parallel-lanes.md#the-lane-law-seat-blind--identical-local-or-cloud)
  — clause 4, the rule this flight proved engineerable ·
  [§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)
  — the handshake both lanes ran.
- PRs: [#170](https://github.com/wsher0901/roam/pull/170) ·
  [#171](https://github.com/wsher0901/roam/pull/171) ·
  [#175](https://github.com/wsher0901/roam/pull/175).
