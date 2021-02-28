/**
 * i18n unit test
 *
 */
import { LOGIN_KEYS, ERR_PAGE_KEYS } from "../../../@common/i18n/keys";

describe("i18n unit test", () => {
  it("check LOGIN_KEYS ", () => {
    expect(LOGIN_KEYS).toBeDefined();
    expect(LOGIN_KEYS.FORGET_PASSWORD).toBe("FORGET_PASSWORD");
    expect(LOGIN_KEYS.HELLO).toBe("HELLO");
    expect(LOGIN_KEYS.LOGIN).toBe("LOGIN");
    expect(LOGIN_KEYS.LOGIN).toBe("LOGIN");
    expect(LOGIN_KEYS.PASSWORD).toBe("PASSWORD");
    expect(LOGIN_KEYS.REGIST).toBe("REGIST");
    expect(LOGIN_KEYS.USER_NAME).toBe("USER_NAME");
  });

  it("check ERR_PAGE_KEYS ", () => {
    expect(ERR_PAGE_KEYS).toBeDefined();
    expect(ERR_PAGE_KEYS.GO_TO_ROOT).toBe("GO_TO_ROOT");
    expect(ERR_PAGE_KEYS.IS_DEVING).toBe("IS_DEVING");
    expect(ERR_PAGE_KEYS.NOT_FOUND_404).toBe("NOT_FOUND_404");
    expect(ERR_PAGE_KEYS.SEVIER_ERR_500).toBe("SEVIER_ERR_500");
  });
});
