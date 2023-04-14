import { version } from "../src/index";

describe("test module", () => {
  it("defined", () => {
    expect(version).toBeDefined();
  });
});
