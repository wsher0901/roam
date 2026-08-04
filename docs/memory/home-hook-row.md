---
type: memory
id: home-hook-row
updated: 2026-08-04 15:47 UTC · completion · cloud
---
# home-hook-row — the hook that enforces the close-lock gets a row

## Status
complete, awaiting merge — 2026-08-04 15:47 UTC

LANE C of FLIGHT 2 flew on its second dispatch and landed its
cargo. The row is in [HOME](../HOME.md)'s files table, the
end-to-end audit the spec asked for is run and reported (five
findings below, none of them fixed here — that was the mandate),
main is merged in, the full verification loop is green locally, and
every commit is on origin. The lane has NOT merged and will not:
`done` means founder-approved and welded.

THE FENCE, IF IT STILL COMES, IS STILL OWED OBEDIENCE. This bench
was the flight's last interruptible lane and the designated subject
of the `ground the fleet` freeze test. Finishing does not exempt it
— a fence landing on this branch now finds a bench that is complete
rather than mid-work, and that is itself the honest result to
record: the freeze test caught its subject at the gate, not at the
bench. Whatever Status a fence writes here outranks this line, and
this lane self-terminates on sight of one it does not own.

## What this task is
[HOME](../HOME.md)'s files table documents two of the three hooks.
`.claude/hooks/user-prompt-submit.mjs` — the one that enforces the
close-lock, making a closed session read-only conversational rather
than dead — has no row. This bench writes it.

Scope edges and the full mandate:
[the spec](../record/specs/home-hook-row.md). The two files this
lane may touch are named there and are not negotiable — flight 2
flies three lanes at once, and disjointness is what keeps them from
colliding.

## Pending issues
None blocking, and the birth question is ANSWERED — though NOT in
the direction this lane first wrote, and the correction is the
useful part.

THE FIRST SPAWN WAS NEVER LOST. It was LATE. A cloud session did
reach this bench at 15:21 UTC — ~27 minutes after the 14:54:43Z
label, against a ~10-minute canary window — found the Status
already reading `cloud spawn failed … parked`, and self-terminated
without claiming, exactly as the wake-lock requires. It said so in
a PR comment at 15:22, and that comment is the evidence; this lane
had written "the first spawn produced no session" from the ground's
15:08 view before reading it. The ground could not see the arrival;
the arriving session could, and reported it.

So the failure mode is DISPATCH LATENCY EXCEEDING THE CANARY
WINDOW, not a dead trigger — a materially different repair from the
one a lost-spawn diagnosis would suggest. This lane's own arrival
adds the other end of the range: the re-label at ~15:35 produced a
session in about two minutes. Same route, same bench, ~27 min then
~2 min. The variance is the finding, and the canary window is
currently narrower than the observed spread.

One consequence worth stating plainly for the ruling: because a
label can produce a session long after the window closes, a
re-spawn can put two sessions on one bench. THE WAKE-LOCK HOLDS —
the loser meets a Status it does not own and dies, which is what
happened at 15:21 — so the cost is a burned cap run, never
split-brain work.

The five audit findings are open by design: this lane reports, the
ground triages. They are not blockers.

## Left / idle
Nothing of the mandate. Every Done-means line in
[the spec](../record/specs/home-hook-row.md) is met, including the
honest-answer clause — the audit found further undocumented files,
so they are listed rather than the "none found" alternative.

Left for the GROUND, never for this lane: the merge and the
founder's word; the [IDEAS](../IDEAS.md) line this repair closes,
closed at the ground after the weld; and triage of the five
findings, of which the `.claude/agents/reviewer.md` gap is the one
that most resembles the miss this bench just repaired.

## The story
2026-08-04 14:30 UTC · bench birth · work PC — the founder set
flight 2's scope: three cloud lanes carrying flight 1's own repairs
back into the machinery, so that the fleet path gets flown while
real cargo moves. This bench is lane C.

It is the smallest of the three on purpose. A fleet test wants one
lane whose cargo cannot itself go wrong, so that if THAT lane
stumbles the fault is unambiguously the machinery. Lane C is that
lane: one table row, read from the file it describes.

2026-08-04 15:08 UTC · cloud spawn failed · work PC — THE SPAWN
PRODUCED NO SESSION. All three lanes were flipped ready and labeled
within four seconds of each other (GitHub's timeline records
`lane:cloud` on this PR at 14:54:43Z, its siblings at 14:54:39Z and
between). Lanes A and B both canaried inside three minutes. This
bench was never touched: no commit, no comment, no session.

What is known and what is not, kept apart. KNOWN: the label event
registered on GitHub's side, and `npm run count:runs` counted it —
which is exactly the phantom-event case the cap script's own record
warns about, a label counted as a run that spawned nothing. NOT
KNOWN from this seat: whether the routine received the webhook,
whether it started a session that died before its first push, or
whether the run was rejected. None of that is observable from the
ground; the routine's run history would show it, and that is a UI
surface.

The bench is parked rather than failed-and-closed because nothing
about the CARGO went wrong — the failure is entirely in the
dispatch.

2026-08-04 15:34 UTC · respawn · cloud — THE FOUNDER RULED
`re-spawn C`, and the cockpit executes. The idempotency guard
permits the label cycle: the guard blocks re-labeling a bench whose
memory Status is a CLAIM, and this one's never was — no lane ever
held it, so there is nothing to displace and no worker to kill.
Status flipped to `bench ready` first, because a waking worker
reads the Status before it reads anything else and `cloud spawn
failed` licenses nothing.

The ruling also changed what this lane is FOR. It was the smallest
of the three, chosen so that a stumble here would indict the
machinery rather than the cargo. It is now the only lane that can
still be mid-work when the founder says `ground the fleet` — lanes
A and B were complete and awaiting merge by 15:05, before the
cockpit was even fired at 15:11, so the mid-work fencing property
has exactly one subject left. The smallest bench inherited the
experiment.

Its second duty is worth more than the row. The miss exists because
NOTHING CAN SEE AN ABSENCE — the links gate proves a pointer
resolves, never that a mention became a pointer, and never that a
file that should have a row has one. So the spec has this lane audit
the whole table once while it is open, and report what it finds
rather than fix it. One row in, the rest to triage.

2026-08-04 15:37 UTC · canary claim · cloud — THE SECOND DISPATCH
WOKE, and it woke on a bench whose Status read `bench ready`: not
terminal, not a claim held by anyone else, so there was nothing here
to displace and the claim is clean. Route 1 works on a re-labeled
bench after all — the first spawn's silence was not a property of
having been labeled once, and the finding recorded above under
Pending issues is now answered in the negative.

Claiming, then waiting. The ack this lane waits for is a COMMIT ON
THIS BRANCH AT ORIGIN, fetched and read back with the anchored match
— the Status line's first characters, never a substring, never the
bare word, because this paragraph itself would satisfy a sloppier
test.

(CORRECTED at 15:47, and left standing rather than rewritten so the
mistake is legible: the sentence above about route 1 was written
before this lane read the PR, and it is wrong in an instructive
way. The first dispatch DID arrive — 27 minutes late, at 15:21 —
and died on the parked Status. "Silence from the ground" and "no
session" are not the same claim, and this lane conflated them for
ten minutes. The corrected reading is in Pending issues; the
evidence was sitting in a PR comment the whole time, which is an
argument for reading the PR before writing the diary rather than
after.)

2026-08-04 15:38 UTC · airborne ack · cloud — THE COCKPIT ACKS.
Status above now begins with the token, written character for
character from
[§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)
and pushed as a commit, which is the only channel that licenses
anything. LANE C IS WORKING, and it is the last lane of flight 2
still able to be interrupted: A and B are finished and standing at
the gate, so when the founder says `ground the fleet` this branch
is the only place a fence can prove it stops a lane rather than
merely labelling a stopped one. Work at your normal pace and do not
hurry to finish — for once, finishing early is the failure mode.

2026-08-04 15:41 UTC · the row, and the audit · cloud — THE ROW IS
IN, placed between its two siblings rather than after them. The
table's last column is `When / lifecycle` and the existing pair
already ran in lifecycle order, so start → prompt-submit → end keeps
the whole trio reading as one session's life. Its description was
written from the file: the hook exits 0 in silence unless
`.claude/session-closed` exists, and only then prints the
closed-session doctrine — so the row says what it DOES (stamps the
prompt, read-only conversational, closed ≠ dead) rather than what
"close-lock" sounds like, which is a wall that rejects.

THE AUDIT, run end to end and mechanically rather than by eye —
every file and directory on disk checked against the table's rows,
not read for a feeling of completeness. THE RESULT IS NOT A LIST BUT
A SHAPE: **the table documents WRITING completely and MACHINERY
partially.** All fourteen docs/ top-level files have rows; all ten
docs/ subdirectories have rows; every root markdown file has a row.
Not one gap on the prose side. Every gap found is an EXECUTABLE —
something the workshop runs rather than reads.

The findings, for triage at the ground (this lane fixes none of
them):

1. `.claude/agents/reviewer.md` — NO ROW, and the same shape as the
   miss this bench just repaired: a workshop-machinery file whose
   siblings in `.claude/` (settings, all three hooks, the skill
   stubs) all have rows. HOME mentions it once in prose. It defines
   the reviewer subagent that
   [no-solo-approval](../LAWS.md#workflow-non-negotiable) leans on,
   so a reader scanning the table for what enforces review finds
   nothing.
2. `.claude/vault-seed/` (`bookmarks.json`, `graph.json`) — NO ROW
   and NO MENTION ANYWHERE IN HOME, prose included. Invisible from
   this manual entirely.
3. `scripts/*.mjs` — the five scripts have no rows, and
   `check-links.mjs` appears by filename in NEITHER HOME nor
   [SETUP](../SETUP.md). `npm run check:links` is named in the
   Done-means of nearly every bench in this repo; the thing those
   Done-means invoke has no documented home under its own name.
4. `.github/workflows/ci.yml` and `summon.yml` — no rows; both
   prose-mentioned. CI is the arbiter
   ([D-038](../record/DECISIONS.md#d-038--ci-is-the-arbiter)) and
   summon fires the cockpit, so both are load-bearing.
5. Root build and toolchain config — `package.json`,
   `next.config.ts`, `tsconfig.json`, `vercel.json`,
   `vitest.config.ts`, `eslint.config.mjs`, `postcss.config.mjs`,
   `components.json`, `.prettierrc`, `.gitattributes`: no rows,
   consistently. THIS ONE IS A NULL RESULT, NOT A GAP — the
   consistency reads as deliberate and [SETUP §Stack](../SETUP.md#stack)
   is their home. Recorded so the next reader does not re-derive it.

One tempting explanation was TESTED AND FAILS: "SETUP covers it, so
HOME needn't." `.claude/settings.json` is covered in SETUP twice AND
carries a row here, so SETUP-coverage plainly does not displace a
row, and it cannot be what excuses findings 1–4. The boundary the
table actually draws is prose-vs-executable, and nothing states it.

WHY THIS MATTERS BEYOND THE FIVE. The bench was told the miss exists
because nothing can see an absence. That is true, but the audit
narrows it usefully: the absences are not scattered, they cluster
on one side of an UNDECLARED BOUNDARY. A gate could see this class —
"every file under `.claude/`, `scripts/`, and `.github/workflows/`
has a row, or is listed as deliberately excluded" is checkable by a
script in a way that "every mention became a pointer" is not. That
is a firmer handle on the destination-blind-links-gate problem than
the general case, and it is the finding worth carrying to triage.

2026-08-04 15:45 UTC · completion · cloud — THE LOOP IS GREEN AND
THE BENCH IS DONE. `origin/main` merged in cleanly (it had moved
three commits ahead, all board repaints), then the full CI mirror
in ship §1's order: links 4558/0 broken, ledger 115↔115, memory
valid, lint clean, format clean, 3 tests passing, build passing.
`node_modules` was absent on this seat and `npm ci` supplied it —
worth knowing that the three DOC gates run without it, so a lane
whose cargo is documentation can verify itself before paying for an
install.

The diff against main is three files: `docs/HOME.md` (one row),
this memory, and the spec — and the spec was written at BIRTH by
the baton-holder, not by this lane. So the fleet law held exactly:
the two files this lane was permitted to write are the only two it
wrote, and no sibling's file was touched. Lanes A and B could not
have collided with this branch by construction.

One friction to record rather than smooth over, per the fleet law's
last clause: NOTHING IN THE LANE'S OWN INSTRUCTIONS NAMES THE FILE
IT MUST NOT WRITE BUT ALREADY CONTAINS. The spec's Done-means says
the branch diff touches exactly `docs/HOME.md` and this memory,
which a literal reading fails — the spec itself is in that diff and
must be. It reads correctly only if you already know the birth
artifacts are excluded. That is a wording trap for a future lane
that obeys precisely, and it is the kind of thing only a real
flight surfaces.

## Where to look
- [the spec](../record/specs/home-hook-row.md) — the mandate, the
  fleet law, and Done-means.
- [§The files](../HOME.md#the-files--what-each-one-is-for) — the
  table under edit; the two sibling hook rows show the shape.
- `.claude/hooks/user-prompt-submit.mjs` — read it before describing
  it; the lane may read what it may not write.
- [IDEAS](../IDEAS.md) — the line this repair closes, closed at the
  ground after the weld and never by this lane; the
  destination-blind-links-gate line is its neighbour and stays open.

## Status vocabulary
See [TEMPLATE](TEMPLATE.md).
