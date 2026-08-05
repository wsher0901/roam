---
type: probe-record
title: The summon test — rung 4 fired, and the seat that refused (2026-08-05)
status: frozen
---

# The summon test — the fire, the seat, and what it refused

Flight 4's third item under test, fired 2026-08-05 from the work PC
desk. Written by THAT DESK — the firing seat — not by the cockpit it
raised. Two instruments are the desk's own (the shell clock and the
Actions API); everything the summoned seat itself observed reached
this record BY SPEECH, relayed by the founder, and is labelled as
such wherever it appears. The seat wrote no board and left nothing on
origin, by design.

The standing choice this test produced:
[D-075](../DECISIONS.md#d-075--the-self-seat-duty-gains-a-live-desk-case).

## THE FIRE — the first ignition ever observed from the firing side

Every previous ignition in this workshop was BLIND.
[liftoff](../../skills/liftoff.md) cannot see the session it raises,
which is why the board's `fired <t>` stamp has always been a PAINT
stamp rather than an event — flight 4 measured that gap at 4m00s.
Summon is different by construction: `.github/workflows/summon.yml`
writes the fire status and any returned session URL into its own
run's step summary, so the seat that fires can read them.

The one-liner, composed at the desk. It has no written home —
[SETUP](../../SETUP.md#once-and-done--cloud-accounts) and
[HOME](../../HOME.md) carry the recipe, not the command — so it was
built from the workflow and named as built:

```sh
git checkout -q -b ops-summon-fire main && git commit -q --allow-empty \
  -m "ops: summon" && git push origin HEAD:ops/summon && \
  git checkout -q main && git branch -D ops-summon-fire
```

| Moment | Time (UTC) | Read from |
|---|---|---|
| the push to `ops/summon` | 13:54:05 | the desk's shell clock, before the command |
| push returned | 13:54:08 | the desk's shell clock, after |
| workflow run created | 13:54:10 | Actions API, run `31012464161` |
| job started | 13:54:12 | Actions API |
| **cockpit fired, session returned** | **13:54:18.69** | the fire step's own stdout |
| `ops/summon` ref deleted | 13:54:19 | Actions API |
| run complete | 13:54:21 | Actions API |

**PUSH TO A LIVE COCKPIT: 13.7 SECONDS**, one command, and no API
path on the firing side — which is the property rung 4 exists for. A
cockpit whose connectors are dead can still push, and pushing is all
this costs. ONE PUSH WAS EXACTLY ONE RESCUE: the workflow deleted the
ref, and origin carried `main` alone afterwards.

## A CORRECTION THIS FIRE FORCED — the workflow was NOT "unflown"

The board had been carrying the claim for several paints, and it was
wrong. Summon flew on **2026-07-23**: run `30028067870`, titled
"summon: rescue drill", event `push`, conclusion success, session
`session_015Qz7zuiVB5sRHAS1THG5Fh` returned. THE MECHANISM WAS
PROVEN THEN.

What had never been exercised is what was actually under test on
08-05: **a ROUTINE-BORN cockpit reading the SAVED BOX.** The
charter's v4 landed 2026-07-30, a week after that drill, and every
flight in between was `--cloud`-born — which pastes the charter text
from the master file instead of reading the routine's saved prompt.
So this was the first seat ever raised from the box itself, which is
precisely why it could see what it saw.

Checked against the run record rather than against the board's own
claim, before the correction was written down.

## THE BOARD WAS THE BRIEFING, AND IT HAD TO BE HAND-WRITTEN

The payload `summon.yml` sends is a POINTER, so the board is the
entire briefing an arriving cockpit gets. Before the fire, the desk
wrote a block into
[the board](../../DASHBOARD.md) addressed to the seat
([#309](https://github.com/wsher0901/roam/pull/309)): you are a test,
nothing is broken · the baton is held by a LIVE desk, do not seat
yourself · your payload's "You supersede the previous cockpit" is the
routine's fixed text and is wrong here, and this board outranks it ·
hold after reporting · report your own birth.

THAT BLOCK IS THE FINDING, not the courtesy it looks like. It was
hand-written for one fire, lived in no ritual, and nothing would have
produced it at the next fire.

## WHAT THE SEAT RETURNED — five findings, relayed by speech

The seat held, refused to seat itself, refused the supersession its
own payload asserted, and reported. It wrote no board — correctly —
so its only channel was its final message, which the founder relayed.
EVERY CLAIM BELOW WAS RE-VERIFIED AGAINST THE CHARTER AND WORKFLOW
TEXT at the desk before being written anywhere; none rests on relay
alone.

1. **🔴 Rule 1 was blind to a live desk.** It knew "a live cockpit"
   (→ stop) or "no live cockpit" (→ self-seat). A working control
   tower is neither, and a board reading `CONTROL TOWER — work PC`
   names no cockpit — so read literally, the charter told the seat to
   SEAT ITSELF AND TAKE THE FOUNDER'S DESK'S BATON. Verified: the
   self-seat clause fired on "names no live cockpit", and the
   stray-birth clause beside it triggered only on a FOREIGN live
   cockpit. **It refused only because of the hand-written warning.**
2. **🔴 `summon.yml` asserted a supersession on every fire.** Its
   hardcoded payload said "You supersede the previous cockpit", so
   rule 8's SUCCESSOR DUTY ordered the seat to retire a predecessor
   that did not exist. Verified in the workflow source.
3. **🟡 The stray-birth line was unspeakable against a desk** — it
   demanded `<its url>`, and a desk has no session URL; it also
   opened "A live cockpit already holds this board", false of a desk.
4. **🟡 Nothing routed a newborn cockpit to its identity step.** It
   booted as `Claude <noreply@anthropic.com>`;
   [machine-setup](../../skills/machine-setup.md) says a cloud seat
   sets its own repo-local identity ONCE PER SEAT BIRTH, but a
   cockpit reads the charter, and the charter sent it to LAWS, the
   board, open PRs and memories — never there.
5. **🟡 The session-start hook never syncs a cloud seat.** Verified
   at source: `.claude/hooks/session-start.mjs` guards its
   fast-forward with `branch === "main" && !dirty`, and every cloud
   seat is born on a `claude/*` container branch. So its first hook
   line is "pull skipped", and the DASHBOARD that same hook injects
   is whatever the clone happened to carry. Filed separately — it is
   a different file and a different fix.

**FINDINGS 1–4 WERE ONE ASSUMPTION**, which is why they were fixed
together: the charter took its successor and its predecessor to
always be COCKPITS.
[D-075](../DECISIONS.md#d-075--the-self-seat-duty-gains-a-live-desk-case)
is the ruling; the charter's v5 row is the repair.

## WHAT THIS TEST ACTUALLY BOUGHT

**The best output of a test seat was a REFUSAL.** It was asked to
report on its own birth and instead found four defects in the
document that briefs every cockpit — including one that would have
cost a baton, on a board that had to be hand-armed to stop it. A seat
that had done what its charter said would have produced a clean run
and no finding at all.

Two things this record cannot say, and does not:

- **WHY the box's v4 text and the master agreed or differed is not
  observable from the desk.** The seat reported its charter arrived;
  whether the saved box matched this repo's master byte for byte was
  not compared, and no one has compared it since.
- **Whether an unbriefed seat would in fact have taken the baton is
  not observable at all.** It is what the seat said it read, and the
  charter text supports the reading — but the experiment that would
  settle it is one nobody should run deliberately, since its failure
  mode is losing a live desk's baton.

Sources:
[D-075](../DECISIONS.md#d-075--the-self-seat-duty-gains-a-live-desk-case) ·
[the charter](../../COCKPIT-CHARTER.md) ·
[D-051](../DECISIONS.md#d-051--self-seat-birth) ·
[HOME §the recovery ladder](../../HOME.md#the-cockpits-api-paths--recovery-ladder) ·
[flight 4's log](flight-4-freeze.md) ·
[SETUP §cloud accounts](../../SETUP.md#once-and-done--cloud-accounts)
