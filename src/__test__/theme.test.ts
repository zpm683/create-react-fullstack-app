/**
 * theme unit test
 *
 */

import theme from "../app/theme";

describe("theme.tsx unit test.", () => {
  it("theme", () => {
    expect(theme.palette.type).toBe("light");
  });
});
