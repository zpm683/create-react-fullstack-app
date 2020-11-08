/**
 * theme.ts unit test
 *
 */

import theme from "../app/theme";

describe("theme.ts unit test.", () => {
  it("theme", () => {
    expect(theme.palette.type).toBe("light");
  });
});
