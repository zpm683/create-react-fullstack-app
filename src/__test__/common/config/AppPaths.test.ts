/**
 * APP_PATHS.ts unit test
 *
 */
import { APP_PATHS } from "../../../app/common/config/APP_PATHS";

describe("APP_PATHS.ts unit test", () => {
  it("Case APP_PATHS ", () => {
    expect(APP_PATHS).not.toBeNull();
  });
});
