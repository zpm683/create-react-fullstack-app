/**
 * APP_PATHS.ts unit test
 *
 */
import { APP_PATHS } from "../../../@common/config/APP_PATHS";
const ROOT_PATH = APP_PATHS.ROOT;

describe("APP_PATHS.ts unit test", () => {
  it("check root path", () => {
    expect(ROOT_PATH).toBe("/");
  });

  it("check all APP_PATHS", () => {
    expect(APP_PATHS.ROOT).toBe(`${ROOT_PATH}`);
    expect(APP_PATHS.LOGIN).toBe(`${ROOT_PATH}login`);
    expect(APP_PATHS.ISDEVING).toBe(`${ROOT_PATH}deving`);
  });
});
