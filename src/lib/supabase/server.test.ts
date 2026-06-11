import { beforeEach, describe, expect, it, vi } from "vitest";

// The server-only guard throws outside a React Server environment;
// neutralize it for unit tests.
vi.mock("server-only", () => ({}));

describe("supabase server client", () => {
  beforeEach(() => {
    vi.resetModules();
    vi.unstubAllEnvs();
  });

  it("throws a clear error when env vars are missing", async () => {
    vi.stubEnv("SUPABASE_URL", "");
    vi.stubEnv("SUPABASE_PUBLISHABLE_KEY", "");
    const { getSupabaseServerClient } = await import("./server");
    expect(() => getSupabaseServerClient()).toThrow(/SUPABASE_URL/);
  });

  it("constructs and memoizes a client with env present (no network)", async () => {
    vi.stubEnv("SUPABASE_URL", "https://example.supabase.co");
    vi.stubEnv("SUPABASE_PUBLISHABLE_KEY", "sb_publishable_test");
    const { getSupabaseServerClient } = await import("./server");
    const client = getSupabaseServerClient();
    expect(client).toBeDefined();
    expect(getSupabaseServerClient()).toBe(client);
  });
});
