/**
 * StringUtils.ts unit test
 *
 */
import { StringUtils } from "../../../app/common";

describe("StringUtils.ts unit test", () => {
  it("Case getRandomString", () => {
    expect(StringUtils.getRandomString()).not.toBeNull();
    expect(StringUtils.getRandomString()).toBeDefined();
  });
});
