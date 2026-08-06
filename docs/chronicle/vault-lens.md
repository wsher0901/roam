---
type: chronicle-story
shelf: III — the information system
status: living
updated: 2026-08-06 · ending CLOSED at review — both seats attested · work PC
---

# The vault lens — a view that travels, applied by a phrase

> **CURRENT ENDING (2026-08-06).** Settled as a design AND settled
> as a state — the ending this story twice got wrong in the
> cautious direction. The lens is two seed JSONs versioned in
> `.claude/vault-seed/`, applied to a seat by saying **"apply the
> vault lens"**, which copies them into the gitignored live
> `docs/.obsidian/`. Every machine, including a future third, gets
> the same view from origin. **But whether any given seat has
> actually applied it CANNOT BE READ FROM THE REPOSITORY**, because
> the live config is gitignored by design — so per-seat status is
> knowable only from a note somebody remembered to write. The
> founder's word IS such a record, and this workshop has one for
> EVERY SEAT: **work PC 2026-07-28, home PC 2026-07-30** — the
> second captured in [#252](https://github.com/wsher0901/roam/pull/252)
> (`937d5ec`), which cleared the standing Needs-you act with the
> words "every seat now done". The board stopped carrying the item
> because it was FINISHED, not because a repaint dropped it
> either way.

## What it is

A reading view for the Obsidian vault that lives in `docs/`, made
reproducible across machines.

**The lens itself** — graph color groups (history gray · data blue ·
skills green · memory and specs yellow · everything ungrouped, the
core docs, keeping the accent), a default graph filter `-path:record`
that hides the archive until you clear it, and four bookmarks that
are the front door on every seat:
[DASHBOARD](../DASHBOARD.md) · [HOME](../HOME.md) ·
[ROADMAP](../ROADMAP.md) · [LAWS](../LAWS.md).

**The mechanism** — two seed files, `.claude/vault-seed/graph.json`
and `.claude/vault-seed/bookmarks.json`, versioned in git. The
procedure at
[machine-setup §Vault lens](../skills/machine-setup.md#vault-lens)
copies exactly those two into `docs/.obsidian/`, overwriting nothing
else there, and drops the retired Dataview plugin if present.

**The trigger** — the phrase "apply the vault lens" in any
control-tower session.

The load-bearing split is between the SEED (versioned, shared,
authoritative) and the LIVE CONFIG (gitignored, per-machine,
disposable). Obsidian writes constantly into `.obsidian/`; versioning
it would put machine-local churn into every diff.

## What raised it

Two questions from an ops Web chat, closed together, and the answer
to the first shaped everything after it.

**Should the vault be restructured to read better?** Rejected, and
for a reason worth keeping: **folder restructuring breaks the weave,
because every corpus link encodes the current paths.** The structure
stays (flat core plus five semantic folders) and the READING
EXPERIENCE is changed instead, in a layer no link depends on. That
is the whole idea of a lens — improve the view without touching the
thing being viewed.

Repo-side index notes were rejected in the same breath, on the
derivation law: hand-maintained indexes rot, and they would buy
nothing the graph lens does not already give.

The second question was whether the tree carried deletable junk. A
full inbound-link orphan scan on 2026-07-11 found **zero deletable
files** — the unlinked history backfills are archive-by-design,
windowed by the board and fronted by their README.

## What changed, in order

- **[#82](https://github.com/wsher0901/roam/pull/82) — the lens is
  born as a HAND RECIPE.** Documented as
  [machine-setup](../skills/machine-setup.md) §Vault lens, with a
  pointer from [HOME §Equipment](../HOME.md#equipment--environment):
  graph groups, the archive filter, the bookmark sequence, all as
  steps a person performs. It ships alongside the clean-tree
  verdict. One execution detail became a small standing lesson: the
  draft's heading carried its qualifier inline ("Vault lens (per
  machine, ~2 min, optional but recommended)") while its own HOME
  ripple linked `#vault-lens` — **a qualified heading slugs
  differently**, so the heading was cut to exactly "Vault lens" with
  the qualifier moved into the body, and `check:links` proved the
  anchor.
- **[#91](https://github.com/wsher0901/roam/pull/91) — the recipe
  becomes a phrase, and the config starts travelling.** The two seed
  JSONs enter `.claude/vault-seed/`, machine-setup is rewritten as
  the copy procedure behind "apply the vault lens", and the skill
  stub carries the trigger. Colors were converted to Obsidian's
  decimal RGB at this bench (gray #808080 → 8421504 · blue #4A9EFF →
  4890367 · green #4CAF50 → 5025616 · yellow #FFD54F → 16766287),
  and bookmarks ship with `ctime: 0`, which Obsidian accepts and
  overwrites on first edit. A field find was promoted into the skill
  as documented known behavior: **Obsidian on Windows may realign
  markdown tables and leave zero-content CRLF working-tree
  changes**, which git normalizes at commit so they never enter
  history.
- **[D-057](../record/DECISIONS.md#d-057--the-record-shelf) at
  [#229](https://github.com/wsher0901/roam/pull/229) — the record
  shelf moves, and the lens needs re-seeding.** The archive filter
  is a PATH filter, so moving 155 files under `docs/record/` changed
  what it must exclude — the filter is `-path:record` today. The
  bench explicitly placed **performing the re-seed OUT OF SCOPE**,
  as "a per-seat manual act, reported at the gate". The work PC was
  re-seeded on 2026-07-28; the census recorded the home PC as still
  owed.

## Where it stands — and the closed question three readers called open

The design is finished and good. One phrase, two files, any number
of machines, and the seed is the single source so a third computer
would inherit the identical view without anyone writing it down
again.

**The interesting part is not the lens; it is the OBSERVABILITY of a
per-seat act.** `docs/.obsidian/` is gitignored — line 157 of
`.gitignore` — which is the correct call and has an unavoidable
consequence: **no seat's application of the lens is visible from
origin, ever.** Whether a seat has re-seeded is
not derivable from the repository at all. It can only be known from
a note — and notes are exactly what the derivation law distrusts,
which is why this story spent two revisions calling a closed
question open.

**AND THE RECORD ANSWERED IT ALL ALONG — three readers missed the
same commit.** This story first said the home-PC state could not be
known; the desk reviewing it "corrected" that to *work PC attested,
home PC still owed*; and the external review found what neither had:
[#252](https://github.com/wsher0901/roam/pull/252) (`937d5ec`,
2026-07-30) cleared the standing act with the founder's words "every
seat now done". **Speech was the channel, it was used, and it was
recorded.** The state was closed a week before anyone wrote that it
was open.

Why three readers missed it is the finding worth keeping. Each
consulted the census's *founder input owed* item — which was written
2026-07-28, two days BEFORE the act that closed it — and none asked
whether anything AFTER that date had answered it. **A dated
attestation is evidence of its date and of nothing later**, and this
story was careful about every part of that sentence except the last
clause. The board's silence was read as "a repaint may have dropped
it" when it meant "it was finished"; the cautious reading was wrong
in the same way the careless one would have been.

The generalizable finding survives, narrowed to what is true: **an
obligation that is per-seat, manual, and stored in gitignored state
cannot be confirmed by derivation — only by speech, recorded.** The
workshop's usual answer, git outranks every note, has nothing to
outrank a note with here; what it does have is a habit of writing
the founder's word into a commit, and that habit is what closed
this. The failure was never the mechanism. It was three readers
stopping at a dated line.

## Sources

Down-links only — this story cites the frozen record and the living
machinery beneath it, never another story's prose.

- [machine-setup §Vault lens](../skills/machine-setup.md#vault-lens)
  — the living procedure, the lens's contents, and the Windows CRLF
  note.
- [the vault-lens story](../record/history/workshop/mechanism/vault-lens.md)
  — [#82](https://github.com/wsher0901/roam/pull/82): the hand
  recipe, the two rejections, and the clean-tree verdict.
- [the vault-lens-seed story](../record/history/workshop/mechanism/vault-lens-seed.md)
  — [#91](https://github.com/wsher0901/roam/pull/91): the seed
  files, the color conversions, and the one-phrase trigger.
- [the record-shelf spec](../record/specs/record-shelf.md) — the
  re-seed placed explicitly out of scope as a per-seat manual act.
- [D-057](../record/DECISIONS.md#d-057--the-record-shelf) — the move
  that changed what the archive filter must exclude.
- `.claude/vault-seed/graph.json` ·
  `.claude/vault-seed/bookmarks.json` — the seed as it stands.
