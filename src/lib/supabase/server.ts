import "server-only";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Reused across requests within a serverless instance; per-request auth
// state is disabled since V1 has no users (accounts arrive in V2).
// Direct Postgres (pooled via Supavisor) is only for migrations/T4+ —
// app data access goes through this HTTP client.
let client: SupabaseClient | null = null;

export function getSupabaseServerClient(): SupabaseClient {
  if (client) return client;

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) {
    throw new Error(
      "Missing SUPABASE_URL or SUPABASE_PUBLISHABLE_KEY. " +
        "Copy .env.example to .env.local and fill in real values.",
    );
  }

  client = createClient(url, key, {
    auth: { persistSession: false },
  });
  return client;
}
