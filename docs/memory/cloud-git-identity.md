---
type: memory
id: cloud-git-identity
updated: 2026-08-04 15:02 UTC · payload complete · cloud
---
# cloud-git-identity — the third seat joins the one-time list

## Status
airborne · cloud · 2026-08-04

Payload written and the CI mirror is green locally. The lane is at
its fourth diary moment: the next acts are the push, the Actions
check on the pushed head, the ready-flip and the completion comment.
The lane does not merge.

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
