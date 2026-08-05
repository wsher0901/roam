---
type: chronicle-story
shelf: II — the lane system
status: living
updated: 2026-08-05 · the token's two forms still stand · work PC
---

# The canary handshake and the ack token

> **CURRENT ENDING (2026-08-05).** The handshake works and is proven
> end to end: a lane claims its bench with one trivial commit, waits,
> and is licensed by an ACK COMMIT ON ORIGIN and by nothing else —
> not a message, not a notification, however perfect the token it
> carries. Flight 4 flew it with the contract's own instrument,
> unmodified, and closed in 85 seconds. **Two things are still
> open, and neither is closed by this story.** Its own section
> defines the ack token's middle field TWO different ways, so the
> contract cannot be quoted from one place without choosing which
> half to believe; and whether the match should anchor on the token
> or the bare word is FILED DEFERRED by the founder, with no ruling
> made. Both are stated here because a story that tidied them away
> would be lying about the state of the thing it describes.

## What it is

The two-sided greeting that turns a birthed bench into a working
lane, and the single home of the constants it runs on.

- **Lane side:** first act on waking is one trivial commit — memory
  Status → `claimed by <vehicle> — <date>` — pushed to its branch.
  Then WAIT.
- **Baton-holder side:** watch for that canary; on arrival overwrite
  the lane's Status so the line begins exactly with the token, and
  push. **The push IS the ack.**

[§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)
is also where three constants live and nowhere else: the canary
window (~10 minutes cloud, ~2 local, both sides the same), the
liveness staleness window (~30 minutes, deliberately longer so a
live lane between commits never reads dead), and the reply-ack
window (~15 minutes, founder-side).

## What raised it

The need for a lane to know it may begin. A bench birthed on origin
is not yet a claim, and two sessions reaching for the same branch is
the failure the whole lane system is built to make impossible. The
handshake makes claiming an ACT — a commit, visible to everyone —
rather than an assumption.

## What changed, in order

- **The token gets one canonical form, and one home.** The Status
  line begins, exactly, `airborne · <url> · <date>` — middots, not
  em-dashes, token first. Every other home (the memory
  [TEMPLATE](../memory/TEMPLATE.md)'s state table, the
  [lane-worker master](../LANE-WORKER.md)) is declared a COPY, with
  §Canary winning any disagreement, because §Canary is the contract
  the lane's watcher actually reads.
- **2026-07-22 ([#191](https://github.com/wsher0901/roam/pull/191))
  — both failure modes, lived on one flight.** The watcher first
  matched the lane's OWN CLAIM TEXT: a lane waiting for the
  "airborne ack" writes that word itself, so a substring search
  finds the lane's own prose and reads it as permission. Then, once
  the token mattered, it missed an **em-dash ack** entirely, read
  the window as timed out, and staged a stand-down. Only the
  wake-lock's rejected-push rule saved the flight. THE MATCH IS
  ANCHORED as a result: the test is whether the line STARTS WITH
  `airborne ·`, never a substring, never the bare word.
- **2026-08-04 ([#268](https://github.com/wsher0901/roam/pull/268))
  — the false ack, and the rule it forced.** About twenty seconds
  after its canary, flight 1's lane received a message shaped like
  its own watcher's output, carrying a well-formed token that named
  the cockpit's REAL session URL. Read as an ack, it meant
  *licensed*. Three checks against the record refused it: origin
  still held the lane's own claim and no ack commit existed on the
  branch · the watcher task was still running with its output file
  at **0 bytes**, so the instrument the message impersonated had
  emitted nothing · and the real ack landed afterwards as a commit
  whose Status line carried DIFFERENT TEXT. **What produced that
  message is not observable from either seat** — injection,
  redelivery, or harness artifact — and neither seat guessed. The
  rule follows from what IS observable: if a message can license a
  lane, anything able to write into that lane's session can start it
  working.
- **[#278](https://github.com/wsher0901/roam/pull/278) — the licence
  is written down in all three places a reader meets it.** Flight
  2's lane A put "the licence is a COMMIT ON ORIGIN" into the prose
  block, the lane-side bullet (fetch the branch, read Status as
  ORIGIN holds it), and the baton-holder side (the push is the ack).
- **2026-08-04 — flight 4 flies the contract's own instrument.**
  Its lane armed the anchored test on the FULL token, exactly as
  §Canary fixes it, rather than the bare word
  [flight 1](../record/probes/flight-1-shakedown.md) had substituted
  and recorded as its most consequential finding. The anchoring did
  real work: that lane's own claim prose contained the word
  "airborne" the whole time the watcher ran. Canary authored
  20:49:02Z, ack commit 20:50:12Z, read back from origin 20:50:27Z —
  **85 seconds from claim to licensed, about 14% of the window.**
  That green is a green for the contract rather than for a modified
  instrument, which is the thing flight 1 could not supply.

## What is still open — and this story does not close it

**THE TOKEN IS DEFINED TWICE, DIFFERENTLY, IN ONE SECTION.** The
canonical block reads `airborne · <url> · <date>`. The baton-holder
bullet, thirty lines below, says the line must begin exactly
`airborne · <vehicle or url> · <date>`. Flight 4's ack wrote a
vehicle — `cloud` — which is canonical under the bullet and not
under the block. **Nothing broke**, because the contract anchors the
match at `airborne ·` and a lane cannot test a field its own
section defines two ways. But §Canary is declared the home that wins
every disagreement, and it currently cannot be quoted from one place
without choosing which of its own halves to believe. Filed; unfixed.

**WHETHER TO ANCHOR ON THE TOKEN OR THE WORD IS DEFERRED BY THE
FOUNDER, WITH NO RULING MADE.** §Canary fixes the test at
`airborne ·`. Flight 1's lane deliberately anchored on the bare word
instead, reasoning that the anchor does the safety work while the
middot only adds brittleness — against the em-dash ack of
2026-07-22, that reasoning has a real case. The counter is that the
token is what stops the ack matching by accident, which is exactly
the failure the same flight met. **The founder filed it DEFERRED on
2026-08-04 and ruled neither way.** It is not an oversight and this
story does not resolve it.

One smaller thing, from flight 4: a cloud lane's remote is not a
constant across flights — flight 1 observed a local HTTP git proxy,
flight 4 observed `github.com` directly, same spawn route a day
apart. Nothing in the handshake depends on it today; it is worth
knowing before anything does.

## Sources

Down-links only.

- [§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)
  — the contract, the token, and the three constants.
- [§Wake-lock & parking](../skills/parallel-lanes.md#wake-lock--parking)
  — the backstop that saved the 2026-07-22 flight.
- [flight 1's log](../record/probes/flight-1-shakedown.md) — the
  false ack, and the bare-word anchor it recorded against itself.
- [flight 4's log](../record/probes/flight-4-freeze.md) — THE
  CHECKPOINT section: the 85-second handshake and the two-formed
  middle field.
- [#191](https://github.com/wsher0901/roam/pull/191) · the em-dash
  ack · [#268](https://github.com/wsher0901/roam/pull/268) · the
  false ack · [#278](https://github.com/wsher0901/roam/pull/278) ·
  the licence written into all three homes.
- [the memory TEMPLATE](../memory/TEMPLATE.md) — the state table
  that copies this token.
