---
type: memory
id: clerk-retirement
updated: 2026-07-23 · bench birth · work PC
---

# clerk-retirement — the repo stops pointing at a deleted routine

## Status

bench ready — 2026-07-23. Born bench-first at the work PC from the
fresh main tip (0ae16f1): branch `docs/clerk-retirement`, spec,
this memory, draft PR on origin before any payload edit. No lane
flies this one; the control tower authors it directly, so it is a
self-authored diff and needs external Web review before the
founder's word (the no-solo-approval law).

## What this task is

One theme: the clerk is gone from the ladder.

The founder deleted the clerk routine on 2026-07-22. The repo did
not notice. That leaves a fallback rung — the rung a seat reaches
for exactly when everything above it has already failed — pointing
at a vehicle that cannot fire, plus a promised notification channel
that will now silently never announce anything.

This bench removes every LIVE instruction that reaches for the
clerk, keeps every VERIFIED RECORD of what the clerk proved, and
adds no new machinery. The governing distinction, which decides
every single edit: an instruction tells a future seat to DO
something and a false one is a trap; a record says what WAS proved
and deleting it destroys evidence. Instructions go, records get a
tombstone and stay.

No new D-number. D-046 already decided the retirement and D-048
superseded its last unique function, so this bench executes a
standing decision instead of making a new one — reasoning written
into the spec so a future seat does not hunt for a decide that was
never meant to exist.

## Pending issues

None blocking. Two non-urgent founder acts are recorded rather than
performed: removing the now-dead `CLERK_` pair from each seat's
`.env.local` (a dead token is inert), and the standing home-PC seat
debt (the `COCKPIT_` pair plus `claude --version` at 2.1.195 or
later).

## Left / idle

Nothing parked. The bench runs to the gate in one sitting: the six
payload files, the verification battery, then ship.

## The story

**2026-07-23, 10:00, work PC — birth.** Claim check first: origin
carried `main` alone at 0ae16f1 and no open PRs, so nothing was
live to adopt and nothing to collide with. Branch cut from that
tip, spec and this memory as the first commits, draft PR laid on
origin before any payload edit — the bench is public and rescuable
from its first minute.

**The one deviation, decided at the reading.** The mandate's FILES
TOUCHED list is explicit and closes with "nothing outside". Reading
the tree against it turned up a file the list does not name and
probably should: `docs/skills/parallel-lanes.md` §Mail slot carries
two live clerk instructions — the clerk as the away-surface
FALLBACK, "armed until its staged retirement", and the clerk as an
armable WATCHER whose turn-end announcements are the notification
channel for `BLOCKED:` comments, lane completions, and CI red on
main.

That is the same defect the mandate opens by describing, one file
over. The second half is the worse one: a fallback that cannot fire
fails loudly the moment a seat tries it, but a notification channel
that cannot fire fails SILENTLY — the founder simply never hears
about the blocked lane. Leaving it would ship the exact trap this
bench exists to remove while the bench's own verification line
("no live instruction anywhere tells a seat to fire the clerk")
read green, because that line says "fire" and this file says
"arm".

The call: annotate it, in the same shape §3 prescribes for SETUP —
the clerk keeps its verified credit, neither sentence still tells a
seat the vehicle is armed, and the notification duty is pointed at
where it actually lives now, the cockpit's turn-end (charter rule
5). Flagged loudly in the spec's Deviations, in the PR summary, and
here, so the founder can drop the hunk at the gate without
disturbing anything else. Scaling the work down is the founder's
call, not the bench's — but so is being told about a trap the
bench found and stepped around.

## Where to look

- Spec: [clerk-retirement](../specs/clerk-retirement.md) — the
  contract, the no-new-D-number reasoning, the Done-means battery.
- The decision that staged this:
  [D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
  — its clerk-retirement-staged clause, and the trigger it named.
- The decision that superseded the clerk's last function:
  [D-048](../DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047)
  — the connector ladder ending in the phone bootstrap.
- What the clerk actually proved, kept as record:
  [cloud-clerk](../specs/cloud-clerk.md) (C1–C6) ·
  [clerk-notify](../specs/clerk-notify.md) (N2/N3) ·
  [clerk-autospawn](../specs/clerk-autospawn.md) (A1/A4) ·
  [shakedown-audit](../specs/shakedown-audit.md).
- The live instructions being removed:
  [liftoff §2 and §4](../skills/liftoff.md) ·
  [parallel-lanes §Mail slot](../skills/parallel-lanes.md) ·
  [SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts).
