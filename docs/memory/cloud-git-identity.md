---
type: memory
id: cloud-git-identity
updated: 2026-08-04 16:01 UTC · fenced by land MODE P · cloud
---
# cloud-git-identity — the third seat joins the one-time list

## Status
held — landed for local pickup 2026-08-04

THE PAUSE BLOCK — a resuming seat can continue from this alone.

- **What it did.** The full payload, complete and green. Nothing
  was interrupted.
- **How much of the spec is done.** ALL of it, confirmed line by
  line by the cockpit's independent review
  ([the verdict](https://github.com/wsher0901/roam/pull/279#issuecomment-5181501454)).
- **What is left.** NO WORK. Only the founder's merge word.
- **THE EXACT NEXT STEP.** Give the merge word on
  [#279](https://github.com/wsher0901/roam/pull/279), then
  [ship](../skills/ship.md) welds it. At
  [pickup §6](../skills/pickup.md#6--fleet-resume-on-the-founders-answer)
  answer `local cloud-git-identity` — adopt at the desk, zero cap
  runs — never `redeploy`, which would spawn a worker onto finished
  work.
- **Why it paused.** Landed for local pickup 2026-08-04 on the
  founder's freeze word, so the gate reaches the desk through
  pickup's resume ask. The lane was already complete; nothing was
  frozen mid-work.

CARRY THIS TO THE DESK — the review found a gap this bench's own
change creates and was not scoped to fix: `machine-setup` step 1 now
covers three seats while step 2 (`roam.machine`) still names only
"work PC" and "home PC". The cockpit set `cloud` by inference and
that string is now in ritual stamps on the board. Triage after the
weld, not here.

THE COMPLETION STATE THIS FENCE REPLACED was
`complete, awaiting merge — 2026-08-04`, and it remains true.

The payload is on origin at `9a522fa` and that pushed head's Actions
run is GREEN (`checks` ✓, 15:03 UTC) — not merely local green. The
PR was already ready when the lane arrived, route 1 having flipped
it to fire the label, so there was no flip left to perform; the lane
says so rather than claiming the act. What remains is the founder's:
an external review, then the word. THE LANE DOES NOT MERGE.

## What this task is
[machine-setup](../skills/machine-setup.md)'s one-time list gives a
git identity to the work PC and the home PC. A cloud seat gets
neither, so it starts as `Claude <noreply@anthropic.com>` — and
flight 1's cockpit found out the way it is always found out, with
its first push rejected for email privacy because it carried the
founder's real address.

This bench adds the cloud seat to that step. Scope edges and the
full mandate: [the spec](../record/specs/cloud-git-identity.md). The
two files this lane may touch are named there and are not
negotiable — flight 2 flies three lanes at once, and disjointness is
what keeps them from colliding.

## Pending issues
None blocking. Four findings, below, none of which this lane may
act on itself.

## Left / idle
Nothing of the mandate. What is deliberately NOT done, and why:

- The IDEAS line this repair closes stays open — it is closed at the
  ground, after the weld, never by this lane.
- §The law's "Known seats" list still names only the two desks
  (finding 2). Out of this bench's two-file, one-step scope.

## The story
2026-08-04 14:29 UTC · bench birth · work PC — the founder set
flight 2's scope: three cloud lanes carrying flight 1's own repairs
back into the machinery, so that the fleet path gets flown while
real cargo moves. This bench is lane B.

This cargo has a property the other two lack, and it is why it was
put in the fleet: THE LANE IS ITS OWN EVIDENCE. It runs on the very
seat the missing step describes, so it can read its own identity
rather than infer one. The spec makes that a Done-means rather than
a suggestion — flight 1's costliest fault was a lane writing down
what the docs predicted instead of what it observed.

2026-08-04 14:56 UTC · canary · cloud — the lane woke on the label,
claimed the bench with a trivial commit, and waited. The ack landed
at 14:58 as commit `435ebe6`, Status `airborne · cloud · 2026-08-04`.
The watcher tested the START of the Status line, read from ORIGIN
rather than the working copy — the two guards §Canary added after
flight 1's false ack. Both mattered in the ordinary way: the lane's
own claim prose sat in the same file, and only origin can prove an
ack exists.

### What the seat actually reads (the evidence Done-means asks for)
Read on this seat before any edit, not carried over from the docs:

```text
user.name   = Claude
user.email  = noreply@anthropic.com
scope       = GLOBAL, from file:/root/.gitconfig
repo-local  = unset (both keys)
```

So the docs' prediction held exactly: no repo-local override, no
inherited desk identity, and the value is the Anthropic noreply
address rather than anything of the founder's. The lane then set
its own repo-local identity from the repo itself —
`git log -1 --format='%an <%ae>' origin/main` returns
`Wonseuk Her <…@users.noreply.github.com>` — which is the mechanism
the new step now prescribes, so the step is written from a seat that
has performed it rather than from one imagining it.

### The decision inside the step
The step tells a seat to DERIVE the identity rather than storing the
literal address in the file. Three reasons, in order of weight: the
derivation law (a value with a home is never copied to a second
one); a cloud seat has no browser and cannot open GitHub's settings
page, so a "look it up" instruction would be unfollowable exactly
where it is needed; and the file's existing voice already says
"personal name + GitHub noreply email" without literals, so a
literal would have been the odd line out. The command was run on
this seat before it was written down.

The step also names the QUIET failure alongside the loud one. The
rejection flight 1 hit is what makes the gap memorable, but it only
fires if a seat reaches for the founder's real address. A seat that
touches nothing fails silently instead — it just authors commits
under `Claude`, which is precisely the seat-tell seat-invariance
forbids. Without that sentence the step reads as being about one
rare rejection rather than about every commit a cloud seat makes.

### Findings (flight 2 cargo — the rituals were not special-cased)
1. THE HEADING IS THE WRONG FRAME, confirmed rather than suspected.
   The bench birth predicted this and the spec forbade restructuring
   the file over it. It is real: "One-time per machine" cannot
   describe a seat that is rebuilt for every flight, and the step
   now carries its own "ONCE PER SEAT BIRTH" rider to say so
   locally. That rider is a patch over a section heading that is now
   accurate for ten of its eleven items — a later bench should
   decide whether the list splits by lifetime rather than by
   machine.
2. §THE LAW'S SEAT LIST HAS THE SAME GAP. "Known seats" names the
   two desks and their clone paths; a cloud seat is a third seat
   with a clone, and it is absent there too. This bench's mandate is
   one step in one list, so it was left alone rather than widened.
3. THE VERIFICATION LOOP ASSUMES DEPENDENCIES THAT A FRESH CLOUD
   SEAT DOES NOT HAVE. `node_modules` was empty on arrival, so
   `npm run lint` and `npm run format:check` both failed on a
   missing package — `prettier-plugin-tailwindcss`, imported from
   `noop.js` — which reads at first glance like a repo fault rather
   than an unbuilt seat. `npm ci` fixed it and the full mirror went
   green. [ship §1](../skills/ship.md#1--preflight) lists the five
   commands with no install rung, and nothing on the cloud path
   installs for you; a desk never sees this because its clone was
   built once and stayed built.
4. THE LANE HAD TO FIX ITS OWN IDENTITY TO DO THE TASK AT ALL. To
   commit at the repo's convention the lane applied the very step it
   was writing, before writing it. That is the bench working as
   designed, but it means the step arrives already proven on exactly
   one seat and never yet run by a seat that read it — the first
   cloud lane to follow it cold is the real test.
5. THE REDELIVERED LABEL EVENT FIRED AGAIN, AND THE WAKE-LOCK HELD
   AGAIN. At 15:03 UTC a second `pull_request.labeled` webhook
   arrived for this PR citing head `aa3f8c4` — the bench-birth
   commit, three commits stale. This is the case
   [§Cloud spawn](../skills/parallel-lanes.md#cloud-spawn--route-ladder)
   records from 2026-07-16, but that instance woke a lane that had
   not started; this one hit a lane MID-FLIGHT, between its payload
   push and its completion comment. The rule did its job unchanged:
   re-read Status from origin FIRST, find `airborne · cloud ·
   2026-08-04` — non-terminal and this lane's own — and therefore
   neither re-canary nor restart, but continue in place. Worth
   noting because the stale SHA is what makes the duplicate legible;
   a redelivery citing the CURRENT head would be indistinguishable
   from a fresh spawn on the Status check alone, and only the
   already-claimed Status would stop it.
6. `complete, awaiting merge` WRITTEN VERBATIM FAILS THE GATE. It is
   the one row in [TEMPLATE](TEMPLATE.md)'s vocabulary carrying no
   `<date>` placeholder, while `check:memory` requires a YYYY-MM-DD
   stamp somewhere in the Status body — so a lane that copies the
   table exactly, as this one did, goes red with "Status carries no
   date". Prose elsewhere in the body satisfies it, which is why the
   gap has survived; a lane writing a terse Status trips it. Cheap
   fix either way — a `— <date>` in that row, or the checker
   exempting it — but it is the founder's call, not this lane's.

## Where to look
- [the spec](../record/specs/cloud-git-identity.md) — the mandate,
  the fleet law, and Done-means.
- [flight 1's story](../record/history/workshop/mechanism/flight-1-probe.md)
  — the rejected first push.
- [machine-setup](../skills/machine-setup.md) — the file under edit;
  the one-time list is where the step goes.
- [IDEAS](../IDEAS.md) — the line this repair closes, closed at the
  ground after the weld and never by this lane. The neighbouring
  bot-identity line is a DIFFERENT question and stays open.

## Status vocabulary
See [TEMPLATE](TEMPLATE.md).
