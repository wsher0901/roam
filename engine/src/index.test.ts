import { describe, expect, it } from "vitest";

import { ENGINE_NAME, engineSmokeCheck } from "./index";

describe("engine smoke test", () => {
  it("runs without any app or browser dependencies", () => {
    expect(engineSmokeCheck()).toBe(`${ENGINE_NAME} is wired up`);
  });
});
