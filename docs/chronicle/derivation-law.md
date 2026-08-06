---
type: chronicle-story
shelf: III — the information system
status: living
updated: 2026-08-06 · written · cloud lane
---

# The derivation law — nothing true is written from memory

> **CURRENT ENDING (2026-08-06).** Two clauses, both about refusing
> to write down something you could instead read. **Derived values**
> — counts, totals, statuses — are never written as literals; they
> are computed from source at render time. **Time is derived, never
> recalled**: every stamp, date or time written anywhere comes from
> a clock read at write time — the shell clock on a seat, the VM
> clock on a lane, git metadata when reading the past — never typed
> from memory. **The census cell for this item is ACCURATE**:
> "standing, two clauses" is exactly what LAWS carries at HEAD. The
> law has since been restated as STYLE inside the response doctrine
> and drawn on by the board's own rendering rules, but its text has
> not moved.

## What it is

A rule against a specific and very human failure: writing down a
number or a date that was true when you learned it.

The two clauses look like different rules and are the same one. A
count written as a literal is a fact frozen at the moment of typing;
a timestamp written from memory is the same thing with a different
unit. Both are correct on arrival and both rot silently, because
neither carries any indication of when it was learned.

The remedy in both halves is identical — **go and look** — and the
law's contribution is to make that non-negotiable rather than
diligent. A session does not decide whether the count is probably
still right; it recomputes. A ritual does not recall today's date;
it reads a clock.

The second clause names its sources explicitly, and the enumeration
is the useful part: the shell clock on a seat, the VM clock on a
lane, git metadata when reading the past. Naming the clock per seat
is what makes the rule operable for a cloud lane, which has no
access to the founder's machine and no business guessing.

## What raised it

Rituals counting for themselves
([#62](https://github.com/wsher0901/roam/pull/62)) — the first
clause's origin, and a small change with a general principle
underneath it. A ritual that reports how many of something exist
should count them, not carry a number forward from the last time
anybody counted.

The second clause was raised much later and by a different kind of
evidence: a stale `updated:` line that MIS-ATTRIBUTED A SEAT, found
2026-07-16. A date typed from memory did not merely go stale — it
made the record say the wrong session had done the work.

## What changed, in order

- **[#62](https://github.com/wsher0901/roam/pull/62) — rituals count
  for themselves.** The first clause in practice before it is a
  named law: derived values are computed, not carried.
- **[D-035](../record/DECISIONS.md#d-035--state-surfaces-v2) — state
  surfaces v2, where the law becomes structural.** The board's
  sections, order and rendering rules are fixed to
  [handoff §4](../skills/handoff.md#4--repaint-dashboard-the-board-spec--single-source)
  as the single writer-spec; pickup renders DELTAS and points at the
  board instead of mirroring it; welds stamp `shipped: <date HH:MM>`
  and append a ledger line. The entry also records a rejected
  alternative that is this law in its purest form: **backfilling
  times into frozen stories was refused because it invents data.**
  Deriving a value you do not have is not derivation.
- **[#147](https://github.com/wsher0901/roam/pull/147) — the time
  doctrine, and the clause that names the clocks.** Time is derived,
  never recalled; ship's and handoff's stamps read the shell clock.
  Flown end-to-end by a local lane as the maiden flight's leg B —
  the law's second clause was itself proved by a seat that had to
  read its own clock to write its own record.
- **Restated as style, not re-homed.**
  [D-052](../record/DECISIONS.md#d-052--response-doctrine) makes
  "state is derived live" a clause of the response doctrine —
  explicitly the derivation law restated as style, with the law
  itself left where it is. This is the routing law working: a second
  AUDIENCE for a rule is not a second home for it.
- **Enforced by the tooling it implies.** The memory validator
  demands a `YYYY-MM-DD` stamp in a Status body, which is how a
  copied-verbatim template row without a real date goes red rather
  than shipping a fictional one.

## Where it stands

Standing, two clauses, unamended — and, unusually for a law this
old, still routinely load-bearing rather than merely observed.

Its ongoing cost is visible in what the workshop keeps having to
say. The DASHBOARD carries the standing reminder that **git outranks
this board**; the liveness rule holds that commits are the heartbeat
because a Status word can lag; the chronicle's own story spec orders
its writers to derive endings at write time because SEVERAL CENSUS
CELLS HAVE BEEN WRONG. Those are three different surfaces
independently discovering that a written-down state claim is worth
less than a re-derived one — which is the derivation law being
rediscovered rather than remembered.

That pattern also explains why this item's census cell is one of the
two in its slice that needed no correction. The cell says the law is
standing with two clauses; the law is standing with two clauses. A
rule that tells you not to trust written summaries is, pleasingly,
the rule whose own written summary held up.

The honest limit: neither clause is machine-enforced in general. The
memory validator catches a missing date in one file class, and CI
catches nothing else here — a literal count typed into a document
today would pass every gate the workshop has. This law is kept by
being read, which is why it sits in the always-loaded file.

## Sources

Down-links only — this story cites the record beneath it and never
another story's prose.

- [LAWS §Knowledge & tracking](../LAWS.md#knowledge--tracking) — the
  two clauses at HEAD.
- [D-035](../record/DECISIONS.md#d-035--state-surfaces-v2) · the
  board spec and the refusal to invent data ·
  [D-052](../record/DECISIONS.md#d-052--response-doctrine) · the law
  restated as style.
- [time-doctrine](../record/history/workshop/definition/time-doctrine.md)
  — the time clause's own account, and the mis-attributed seat.
- [state-surfaces-v2](../record/history/workshop/mechanism/state-surfaces-v2.md)
  — the surfaces the law shaped.
- [TEMPLATE](../memory/TEMPLATE.md) — the `updated:` discipline and
  the validator's date demand.
- Spans cited by the census:
  [#62](https://github.com/wsher0901/roam/pull/62) ·
  [#147](https://github.com/wsher0901/roam/pull/147).
