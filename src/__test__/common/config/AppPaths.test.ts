/**
 * APP_PATHS.ts unit test
 *
 */
import { APP_PATHS } from "../../../app/common/config/APP_PATHS";
const ROOT_PATH = APP_PATHS.ROOT;

describe("APP_PATHS.ts unit test", () => {
  it("check root path", () => {
    expect(ROOT_PATH).toBe("/");
  });

  it("check all APP_PATHS", () => {
    expect(APP_PATHS.EDITER).toBe(`${ROOT_PATH}editer`);
    expect(APP_PATHS.KARTE).toBe(`${ROOT_PATH}karte`);
    expect(APP_PATHS.KARTE_MAIN).toBe(`${ROOT_PATH}karteMain`);
    expect(APP_PATHS.LOGIN).toBe(`${ROOT_PATH}login`);
    expect(APP_PATHS.MAINMENU).toBe(`${ROOT_PATH}mainmenu`);
    expect(APP_PATHS.TEMPLATE).toBe(`${ROOT_PATH}template`);
    expect(APP_PATHS.SYOJYOU_CREATE).toBe(`${ROOT_PATH}syojyouCreate`);
    expect(APP_PATHS.SYOJYOU_UPDATE).toBe(`${ROOT_PATH}syojyouUpdate`);
    expect(APP_PATHS.SYSTEM_CONFIG).toBe(`${ROOT_PATH}system-config`);
  });
});
