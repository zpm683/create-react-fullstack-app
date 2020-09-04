/**
 * withLoading.ts unit test
 *
 */
import { withLoading } from "../../../app/common";

describe("withLoading.ts unit test", () => {
  it("Case withLoading", () => {
    expect(withLoading).toBeDefined();
    expect(withLoading).toBeInstanceOf(Function);
  });
});
