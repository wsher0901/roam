# engine/

The Roam planning engine: condition checks, scoring, and explanations.

## Isolation rule (D-005)

This directory is a standalone module, deliberately separated from the
Next.js app in `src/`:

- Code in `engine/` MUST NOT import anything from `src/` (no app code,
  no React, no Next.js APIs).
- The app imports the engine via the `@engine/*` path alias — never the
  reverse.
- Everything here must run and test without a browser or a web server
  (`npm test` runs the engine suite with zero app involvement).

Why: the engine is the product's brain and may one day be extracted
(e.g. to Python for ML tuning). Keeping it dependency-clean makes that
a move, not a rewrite.

## Status

Placeholder only. The real CheckModule contract, Verdict shape, and
orchestrator arrive with V1.S3.T1 — nothing here defines that contract
yet.
