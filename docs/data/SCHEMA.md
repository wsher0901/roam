---
type: schema
title: Storage schema
status: placeholder
---
# Storage schema — placeholder

This file becomes the human-readable mirror of
`supabase/migrations/*.sql` once
[V1.S1.T7](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
ships — the SQL migrations are the truth; this page will explain
them. Nothing is invented here before then. What T7 must cover: the
fact cache, places, plans, and plan_versions tables per the ROADMAP
line; the storage-shape laws in
[FACTS.md](FACTS.md#how-to-read-this-file) (bitemporal, append-only)
and [Appendix B](FACTS.md#appendix-b--plan-parameters-t7-must-schema-not-world-facts);
the telemetry tables in
[FACTS Appendix C4](FACTS.md#c4--storage-note-for-v1s1t7);
and [D-015](../DECISIONS.md#d-015--2026-06--data-asset-law-bitemporal-append-only-license-segmented)'s
license-segmented layers.
