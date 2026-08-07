---
type: history
slug: flight-reflection-audit
shipped: 2026-08-07 19:25 UTC
pr: #339
---

# flight-reflection-audit — did the workshop learn, or only fly?

## Status

complete, awaiting merge — 2026-08-07

Step 4 of the closing campaign, under
[D-079](../../../../record/DECISIONS.md#d-079--the-closing-campaigns-advance-word)'s
advance word.

## What this task is

Four cloud flights flew on 2026-08-03 → 05 and each cost real cap
runs. This bench answers, machine-checkably, whether the workshop
KEPT what they bought: a record exists, the chronicle rows read
WRITTEN, and every finding traces to a closed line or a
standing-open one. Contract:
[the spec](../../../../record/specs/flight-reflection-audit.md).

## Pending issues

None.

## Left / idle

Nothing. Step 5 — the phase-2 close — is a separate bench and
follows the lane welds.

## The story

2026-08-06 18:55 UTC · THIRTY-FOUR LINES, ZERO ORPHANS · work PC

**THE PROOF, and it is a command rather than a claim.**
`npm run audit:flights`, exit 0:

```
FLIGHT 1 — the shakedown (2026-08-03)
  A record      PASS  (1 anchor)
  B canary-handshake.md   PASS  (rows=1 · WRITTEN=true · story names the flight=true)
  C findings    PASS  (9 open · 2 closed · 0 orphan)

FLIGHT 2 — the three-bench fleet (2026-08-04)
  A record      PASS  (3 anchors)
  B land.md               PASS  (rows=1 · WRITTEN=true · story names the flight=true)
  C findings    PASS  (13 open · 0 closed · 0 orphan)

FLIGHT 3 — the desk takeover (2026-08-04)
  A record      PASS  (1 anchor)
  B land.md               PASS  (rows=1 · WRITTEN=true · story names the flight=true)
  C findings    PASS  (10 open · 0 closed · 0 orphan)

FLIGHT 4 — the failure drill / the freeze (2026-08-04 → 05)
  A record      PASS  (2 anchors)
  B wake-lock.md          PASS  (rows=1 · WRITTEN=true · story names the flight=true)
  B land.md               PASS  (rows=1 · WRITTEN=true · story names the flight=true)
  C findings    PASS  (11 open · 1 closed · 0 orphan)

ZERO-ORPHAN GREP: 34 flight-born OPEN lines, 0 without a STANDING clause
CHECK FAILURES: 0
```

**A GREEN THAT HAS NEVER BEEN RED IS NOT EVIDENCE**, so the checker
was broken deliberately, in both of its directions, before its green
was believed:

| break | expected | observed |
|---|---|---|
| a flight-4 line's `**STANDING:**` stripped | that line reports as an orphan | `C findings FAIL (11 open · 1 orphan)`, exit 1 |
| `wake-lock.md`'s census row demoted from WRITTEN to PROPOSAL | check B fails for flight 4 only | `FAIL flight 4: wake-lock.md rows=1 written=false`, exit 1 |
| both restored | exit 0 | exit 0 |

The first break was attempted once against the FIRST `**STANDING:**`
in the file and the audit stayed green — correctly, because that
line is not flight-born. The break had to be aimed at a line the
audit actually claims to cover before it meant anything. **A
negative test that does not touch the thing under test proves the
thing under test is untouched.**

**THE AUDIT FOUND ITS OWN BUG, and it is the enumeration law again.**
Check B first matched a census row by looking for the story's
filename anywhere in `INDEX.md`. That passed — by accident. Anchored
properly on the link target, it FAILED: `land.md` matched TWO lines.
The second is a PROSE DOWN-LINK at the foot of the census, not a row
at all. The correct anchor is a link target **inside a pipe-table
line**, because a pipe-table line is what makes a row a row. Three
matchers, three different answers, and only the third one is reading
the census:

1. filename anywhere → green, and green for the wrong reason;
2. link target anywhere → red, and red for the wrong reason;
3. link target in a table row → green, and it means something.

**Not a CI gate, on purpose.** This audits a JUDGEMENT — was the
lesson kept? — and a gate that goes red on an honest "still open"
would teach the workshop to close lines to get to green. It runs by
hand, and the reasoning is written into the script's own header so
the next reader does not "fix" the omission.

**What the numbers say about the flights themselves — and the first
two things I wrote here were both false.** Flight 2 and flight 3
closed NOTHING outright; every one of their findings stays open with
a reason. The draft said **23 findings**, which is 13 + 10 — but
FOUR lines name both flights, so the union is **19**, not the sum.
And it said most of those reasons were the same one, the box
master's fence. Counted rather than assumed, the fence accounts for
**4 of 19**:

| standing reason | lines |
|---|---|
| assorted one-offs with no shared cause | 8 |
| needs its own bench or gate | 4 |
| a box master's fenced text | 4 |
| behavior, not wording | 2 |
| a founder call, filed deferred | 1 |

**There is no dominant blocker.** The tidy conclusion — "the
workshop's next real constraint is the box, not the doctrine" — was
a sentence that sounded like a finding and was built on a sum that
double-counted and a majority that was 21%. What the record actually
says is duller and more useful: **the residue of two flights is a
long tail**, and no single unlock clears it.

Both errors were caught the same way as the census-row bug — by
running the count instead of trusting the sentence.

2026-08-07 19:22 UTC · RE-RUN AGAINST A FULL CENSUS · work PC

**CHECK B ONLY MEANT SOMETHING ONCE THE CENSUS WAS FULL.** When this
bench first ran, 29 of 66 rows read WRITTEN and the four flights'
stories happened to be among them — so B passed, but it passed on a
census that was still two thirds proposals. It has now been re-run
against main with all **66 of 66** rows WRITTEN and none remaining a
proposal, and the result is unchanged: four flights, every check
PASS, **34 flight-born open lines and ZERO orphans**.

That is the difference between a green that is true and a green that
is merely not yet false. Nothing about the checker changed; what
changed is that its subject finally exists in full.

## Where to look

- [the spec](../../../../record/specs/flight-reflection-audit.md) — the three
  checks and the out-of-scope list.
- `scripts/flight-audit.mjs` — the checker, with its two matching
  rules and the not-a-gate reasoning in the header.
- [findings-closeout](findings-closeout.md) — the bench that wrote
  the `STANDING:` clauses check C reads.
- [LAWS §Knowledge & tracking](../../../../LAWS.md#knowledge--tracking) — the
  enumeration law this bench broke and repaired once more.
