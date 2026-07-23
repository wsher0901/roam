---
type: history
id: clerk-retirement
updated: 2026-07-23 · weld · work PC
shipped: 2026-07-23 12:02
pr: 197
---

# clerk-retirement — the repo stops pointing at a deleted routine

## Status

shipped — merged [#197](https://github.com/wsher0901/roam/pull/197),
2026-07-23. Tower-authored, so the no-solo-approval law required an
external review before the founder's word: the external Web review
returned **PASS on `0fe69a9`**, and the founder's word followed.

## What this task is

One theme: the clerk is gone from the ladder.

The founder deleted the clerk routine on 2026-07-22. The repo did not
notice. That left a fallback rung — the rung a seat reaches for
exactly when everything above it has already failed — pointing at a
vehicle that cannot fire, plus a promised notification channel that
would now silently never announce anything.

This bench removed every LIVE instruction that reaches for the clerk,
kept every VERIFIED RECORD of what the clerk proved, and added no new
machinery.

The governing distinction, which decided every single edit: an
instruction tells a future seat to DO something, and a false one is a
trap; a record says what WAS proved, and deleting it destroys
evidence. Instructions went. Records got a tombstone and stayed.

## Pending issues

None blocking the gate.

Two non-urgent founder acts are RECORDED rather than performed:
removing the now-dead `CLERK_` pair from each seat's `.env.local` (a
dead token is inert — it cannot fire anything, and it is not a leak,
since those files are gitignored and never left the machines), and
the standing home-PC seat debt (the `COCKPIT_` pair plus
`claude --version` at 2.1.195 or later).

One judgment call is deliberately left to the founder at the gate:
whether to keep or drop the
[parallel-lanes](../../../skills/parallel-lanes.md) hunk (see The story).
It is separable — dropping it disturbs nothing else.

The board sweep (mandate item 6) has NOT run: it belongs to the ship
tail, which fires after the weld. Still owed once merged — the
standing manual-acts item loses the clerk re-save, and Needs-you
keeps only the home-PC seat debt.

## Left / idle

Nothing parked. The bench runs to THE GATE and stops there by
mandate: ship to the gate, DO NOT MERGE.

## The story

**Birth.** Claim check first: origin carried `main` alone at 0ae16f1
and no open PRs, so nothing was live to adopt and nothing to collide
with. Branch cut from that tip; spec and memory stub as the first
commits; draft PR
[#197](https://github.com/wsher0901/roam/pull/197) laid on origin
before any payload edit — public and rescuable from its first minute.

**No new D-number, and why that is written down.** The temptation
was a D-049. It would have been wrong.
[D-046](../../../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
already DECIDED the retirement and named its trigger;
[D-048](../../../DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047)
then superseded the clerk's last unique function, the last-resort
reach, by ending the connector ladder at the phone bootstrap. A
decide records a roadmap-level CHANGE; nothing here changed that was
not already decided. Writing D-049 would have implied the retirement
was still open on 2026-07-23 — false. So the reasoning went into the
spec instead, explicitly, so that a future seat reading "the
retirement executed" does not go hunting for the decide that
authorized it.

**What the founder's early deletion actually did.**
[D-046](../../../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
staged the
retirement to execute "at the cockpit maiden drill's closeout". The
founder deleted the routine on 07-22, ahead of that closeout. That
inverted the risk the staging was protecting against: the staging
assumed the paper would be retired before the vehicle, so the worst
case was a live vehicle nobody used. What happened is the reverse —
the vehicle died first, so the paper became a set of instructions
that could not work, in exactly the places reached under failure.

**The one deviation, and why it was taken.** The mandate's FILES
TOUCHED list is explicit and closes with "nothing outside". Reading
the tree against it turned up a file the list does not name:
[parallel-lanes §Mail slot](../../../skills/parallel-lanes.md) carried two
live clerk instructions — the clerk as the away-surface FALLBACK,
"armed until its staged retirement", and the clerk as an armable
WATCHER whose turn-end announcements were named the notification
channel for `BLOCKED:` comments, lane completions, and CI red on
main. A third, smaller one sat further down: an open battle-test
checklist item deferring the dormant-baton case to a retirer that no
longer exists.

The second of these is the one that decided the call. A fallback that
cannot fire fails LOUDLY — a seat tries it, it errors, the seat
climbs on. A notification channel that cannot fire fails SILENTLY:
the founder simply never hears about the blocked lane, and nothing
anywhere reports a fault. Leaving it would have shipped the exact
trap this bench exists to remove.

It would also have passed the bench's own verification line. That
line reads "no live instruction anywhere tells a seat to FIRE the
clerk" — and parallel-lanes does not say fire, it says ARM. The grep
would have come back green over a live defect. Worth recording as a
lesson about verification wording: a check phrased around one verb
does not cover a synonym.

Treatment matched what §3 prescribes for SETUP — annotate, never
delete. The clerk keeps its verified credit in every sentence; what
changed is that none of them still tells a seat the vehicle is armed,
and the notification duty now points where it actually lives, the
cockpit's turn-end report (charter rule 5). Flagged in the spec's
Deviations, in the PR summary, and here, so the founder can drop the
hunk at the gate without disturbing anything else. Scaling the work
down is the founder's call — but so is being told about a trap the
bench found and stepped around.

**Verification, and one thing that had to be checked mechanically.**
The mandate's hardest constraint was "keep every D-046 link intact —
decides are immutable and their anchors are load-bearing". Those
anchor slugs run to ~400 characters; comparing them by eye is not
verification. So the slug SET was extracted from each touched file
before and after and compared: identical for liftoff, SETUP, and
IDEAS; purely additive for parallel-lanes (one D-048 slug added, none
lost). `check:links` independently confirms all 2421 internal links
resolve.

Both fire probes ran foreground with their output captured, per the
shakedown-audit lesson that a detached background check is not a
check. `fire.mjs clerk` exits 1 with the honest unknown-target
message. `fire.mjs cockpit`, given fake credentials from a temp cwd
(the [#175](https://github.com/wsher0901/roam/pull/175) method),
reaches the endpoint and is rejected 401 pre-spawn — zero cap burn,
no session, and exit 1 rather than the Windows 127 that the
`process.exitCode` drain idiom exists to prevent. That last detail is
the point of the probe: it proves the drain idiom still works after
the edit, not merely that the target is gone.

**A self-review catch.** After the first push, re-reading my own
SETUP splices found three defects of my own making: a tombstone
sentence claiming "everything below this line is RECORD" that
over-reached past its entry into the next bullet; two parentheticals
left dangling where the tombstone had displaced their lead-in; and —
worst — the autospawn entry still instructing a seat to "re-save the
routine after any master edit", a live instruction to re-save a box
that no longer exists. Fixed in a second commit. The lesson is small
and repeatable: splicing a header onto an existing bullet orphans
whatever grammar followed it, so re-read the rendered entry, not just
the diff hunk.

**The critic, and what it caught that I had not.** Ship §6's critic
ran against the first pushed head and returned three findings. Two
had already been fixed by the self-review commit that landed while it
was running — the over-reaching "everything below this line" claim
and the dangling parentheticals — which is a useful data point about
the critic: it reviews a SNAPSHOT, so a fast-moving branch can make
its findings stale between spawn and verdict. Worth re-reading each
finding against current state rather than either dismissing or
re-applying wholesale.

The third was live and mine: the new [IDEAS](../../../IDEAS.md) entry cited
`D-046` and `D-048` as bare text while linking them correctly two
lines earlier in the same entry — a weave-rule breach. The same slip
had reached this memory and the spec. Fixed.

That fix forced a small ruling worth recording, because a future seat
will hit it. Not every `D-0NN` in a sentence is a citation. Three
kinds appear in this bench's prose: real citations, which are now
links; `D-049`, a number that does not exist and therefore cannot be
linked; and META-mentions that talk about the anchor slugs themselves
("every D-046 link in the tree survives this bench untouched"), where
linking would point the reader at the very thing the sentence is
already discussing. Only the first kind takes a link. The repo's
existing prose already follows this line — [SETUP](../../../SETUP.md)
carries bare parenthetical D-numbers of the second and third kinds —
so this is a reading of the weave rule, not an exception to it.

**The external review, verbatim onto the record.** PASS on
`0fe69a9`. Verified independently by the reviewer: nine files in
scope; `fire.mjs` cockpit-only with the drain idiom intact and
`fire.mjs clerk` exiting 1 with an honest message (RUN by the
reviewer, not taken on trust); zero live clerk instructions across
skills, SETUP, LAWS, HOME, `package.json`, `.env.example`, and
`scripts` — the surviving SETUP mentions being the tombstone itself;
`specs/` correctly left as record; the gates re-run independently —
links 2440/0, ledger 86↔86, memory valid; Actions green.

**The deviation, ruled on.** The founder APPROVED the
[parallel-lanes](../../../skills/parallel-lanes.md) hunk and ordered it to
stay, with the reasoning stated for the record: a silent notification
channel is a worse failure than a loud fallback, and the mandate's
grep said "fire" where that file says "arm" — so this was **a gap in
the mandate, not an overreach by the bench**. The dormant-baton
reassignment to the cockpit was ruled correct on the same pass.

That ruling is the durable lesson of this bench, and it generalizes
past the clerk: a verification phrased around one verb does not cover
its synonyms, and a bench that finds a live defect just outside its
file list should annotate it and flag it rather than ship a green
grep over a known trap. The founder's call confirms the flag-and-fix
posture was right — but the flag is what made the call possible.

## Where to look

- Spec: [clerk-retirement](../../../specs/clerk-retirement.md) — the
  contract, the no-new-D-number reasoning, the Done-means with each
  verification's captured result.
- PR: [#197](https://github.com/wsher0901/roam/pull/197) — the public
  window; the deviation is flagged in its summary.
- The decision that staged this:
  [D-046](../../../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock).
- The decision that superseded the clerk's last function:
  [D-048](../../../DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047).
- What the clerk proved, kept as record:
  [cloud-clerk](../../../specs/cloud-clerk.md) (C1–C6) ·
  [clerk-notify](../../../specs/clerk-notify.md) (N2/N3) ·
  [clerk-autospawn](../../../specs/clerk-autospawn.md) (A1/A4) ·
  [shakedown-audit](../../../specs/shakedown-audit.md).
- Where the live instructions were removed:
  [liftoff §2 and §4](../../../skills/liftoff.md) ·
  [parallel-lanes §Mail slot](../../../skills/parallel-lanes.md) ·
  [SETUP §cloud accounts](../../../SETUP.md#once-and-done--cloud-accounts).
