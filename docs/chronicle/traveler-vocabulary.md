---
type: chronicle-story
shelf: IV — Roam
status: living
updated: 2026-08-06 · written · cloud lane
---

# The traveler vocabulary — every field a traveler may tell Roam, and the law against interrogating them

> **CURRENT ENDING (2026-08-06).** Settled at **47 fields**
> (TP-01..47) in
> [FACTS Appendix A](../data/FACTS.md#appendix-a--traveler-parameters-tp-0147--per-d-011--d-012),
> every one optional and Null by default, because the floor —
> origin + dates — must always suffice. Each field carries an ask
> tier, a handling tier, and provenance; the supersede order is
> **stated > inferred > cohort prior > default, newer > older**,
> with a stated-only class that is never inferred at all. Derived at
> write time: **10 fields are upfront, 17 later, 17 never-asked, 2
> settings** — and one field (TP-24, free-form notes) carries an ask
> value outside the declared four-tier vocabulary. The 10 upfront
> fields do NOT breach the six-question cap, because a question
> bundles fields; that distinction is the whole design and it is
> easy to misread from the table alone.

## What it is

The structured vocabulary of everything a traveler can tell Roam — 47
nullable fields, from adults and children's ages through jet-lag
sensitivity, trade-off priority, and a mainstream↔offbeat dial.

Three orthogonal classifications ride on every field, and confusing
them is the main way to misread the appendix:

- **Ask tier** — WHEN the field is asked. `U` upfront (before the
  first draft), `L` later/contextual, `N` never asked (inferred,
  defaulted, or composition-adjusted with warn-don't-block), `S`
  settings.
- **Handling tier** — WHO consumes it. `engine` (a named V1 check
  reads it), `brain` (Claude personalizes with it, no deterministic
  check), `socket` (stored, unconsumed — waiting for a later
  version). Derived today: 34 engine, 7 brain, 4 engine+brain, 2
  socket.
- **Provenance** — WHERE the value came from: `stated`, `inferred`, or
  `default`, plus `updated_at`, so a later value can supersede an
  earlier one by a stated rule rather than by whoever wrote last.

The floor is the load-bearing promise: origin + dates always suffices,
and every other field defaults to Null. When date flexibility is
anything but fixed, trip length becomes the single non-negotiable
ask — with a statistics-based default if the traveler declines even
that.

## What raised it

[FOUNDATION](../FOUNDATION.md) promises the engine works "from the
floor (origin + free dates) to rich preferences". That sentence is
cheap to write and expensive to honour: a deterministic check cannot
read a paragraph of free text, so anything a check consumes has to be
a structured field — while asking for 47 structured fields upfront
would produce a form nobody finishes.

The vocabulary exists to resolve exactly that tension, and the
anti-fatigue law is the shape of the resolution: **users must not feel
interrogated.** A second pressure raised the provenance half:
chat-first means most fields arrive mid-conversation and must upsert
correctly, and an inferred preference masquerading as a stated one
would corrupt both the tailoring and the trust.

## What changed, in order

- **[#31](https://github.com/wsher0901/roam/pull/31) — the vocabulary
  is born at 26 fields**
  ([D-011](../record/DECISIONS.md#d-011--traveler-input-vocabulary)).
  Rich, nullable, tiered, append-only. The floor is fixed as sacred
  (null-default is what keeps it sacred), each field gets a handling
  tier, and extension is defined as one nullable column plus a
  D-number — with removals and renames after
  [V1.S1.T7](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
  becoming migrations. Two alternatives were rejected and both
  rejections still bind: floor-only (it underpowers logic FOUNDATION
  explicitly names — red-eye fit, jet-lag pacing, multi-airport
  choice) and free-text-only supplements (the brain can read them,
  deterministic checks cannot).
- **[#33](https://github.com/wsher0901/roam/pull/33) — 26 → 47, and
  the asking policy arrives**
  ([D-012](../record/DECISIONS.md#d-012--elicitation-and-inference-policy)).
  The growth is the smaller half of this bench. The larger half is
  that every field gains an ask tier with the **upfront set capped at
  six questions** — origin; dates + flexibility (+ trip length when
  dates are open); who's going; budget; multi-city openness; one light
  interest pass — with language comfort joining contextually when
  scope goes international. Provenance and the supersede order land
  here, as does the **stated-only class** — nationality, special
  conditions, accessibility, and allergy details inside dietary — which
  is never inferred under any circumstances. And a founder correction
  became structure: **pace was split from day density**, because
  fast-paced does not mean dense. Pace is per-stop speed; density is
  day fullness; merging them conflates speed with fullness.
- **[#85](https://github.com/wsher0901/roam/pull/85) — the cohort
  layer**
  ([D-025](../record/DECISIONS.md#d-025--foundation-v4-principles-recut)).
  Personalization becomes four layers rather than three: stated >
  inferred (the traveler's own behavior) > **cohort prior** > default.
  The guard shipped with the layer — category patterns are priors,
  never pigeonholes; the traveler's own signal always outranks them;
  demographic stereotypes never drive — and the order was carried down
  into [ENGINE §2](../ENGINE.md#2-intake--resolve-the-traveler) so the
  pipeline enforces what the identity file promises.

## Where it stands

Settled as a vocabulary and unexercised as a system: 47 fields exist
on paper, and the intake stage that resolves them
([ENGINE §2](../ENGINE.md#2-intake--resolve-the-traveler)) is not
built — [V1.S3](../ROADMAP.md#v1s3--engine-core--two-families-deep) is
where these fields first meet code, and
[V1.S1.T7](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
is where their validation lands.

Derived from Appendix A at this story's write time:

| Ask tier | Fields |
| --- | --- |
| `U` — upfront | 10 |
| `L` — later / contextual | 17 |
| `N` — never asked | 17 |
| `S` — settings | 2 |
| outside the declared vocabulary | 1 |
| **Total** | **47** |

Three readings of that table are worth stating, because each is a way
the appendix gets misread.

**Ten upfront fields, six upfront questions — and no contradiction.**
The cap is on QUESTIONS, not fields: "who's going" resolves adults,
children's ages and seniors in one breath; "dates" carries start, end,
flexibility, and optional boundary times. Counting U-rows and
concluding the cap is breached is the obvious mistake, and the design
is precisely that one question may fill several fields.

**`N` is doing two different jobs.** For most fields it means what
D-012 says — inferred, defaulted, or composition-adjusted (heat
ceiling, cabin class, max stops). But three of the four stated-only
fields — accessibility, nationality/passports, special conditions —
are ALSO marked `N`, where it cannot mean inferred, since inferring
them is exactly what is forbidden. For those, `N` means never asked
AND never inferred: the value exists only if the traveler volunteers
it, or, for passports, arrives from an account page once auth exists.
The two senses are consistent with the rules but not distinguished by
the letter, and a reader working from the table alone would have to
notice the stated-only line to tell them apart.

**One row is outside the vocabulary.** TP-24, free-form notes, carries
the ask value "always-on capture" rather than any of `U`/`L`/`N`/`S`.
It is a sensible thing for that field to be — notes are captured
whenever they appear, never asked for — but the legend declares four
tiers and the table uses five. A small, real gap between a file's
stated vocabulary and its contents, recorded here rather than fixed,
because a story is not a licence to edit the thing it describes.

The open edge is that provenance is a promise about storage that no
storage yet enforces: the `{stated | inferred | default} + updated_at`
contract and the supersede order are written down and will be schemaed
in T7. Until then, the class that matters most — the fields that must
never be inferred — is protected by a rule in a document rather than a
constraint in a database.

## Sources

Down-links only.

- [FACTS Appendix A](../data/FACTS.md#appendix-a--traveler-parameters-tp-0147--per-d-011--d-012)
  — the 47 fields with ask tiers, consumers, and handling tiers; every
  count above is derived from this table.
- [D-011](../record/DECISIONS.md#d-011--traveler-input-vocabulary) —
  rich, nullable, tiered, append-only; the floor and the rejected
  alternatives.
- [D-012](../record/DECISIONS.md#d-012--elicitation-and-inference-policy)
  — ask tiers, the six-question cap, provenance and supersede order,
  the stated-only class, pace vs density.
- [D-025](../record/DECISIONS.md#d-025--foundation-v4-principles-recut)
  — the cohort-prior layer and its anti-stereotype guard.
- [the traveler-vocabulary story](../record/history/product/definition/traveler-vocabulary.md)
  — [#33](https://github.com/wsher0901/roam/pull/33): 26 → 47 and the
  founder's pace correction.
- [the v1.s1.t1 story](../record/history/product/definition/v1.s1.t1.md)
  — [#31](https://github.com/wsher0901/roam/pull/31): the inventory
  the vocabulary was born inside.
- [ENGINE §2](../ENGINE.md#2-intake--resolve-the-traveler) — the
  intake stage that resolves these fields and carries the supersede
  order.
- [FOUNDATION §Principles](../FOUNDATION.md#principles) — the floor
  promise and layered personalization.
