/**
 * i18n unit test
 *
 */
import en from "../../../../app/@common/i18n/locales/en-US";

describe("i18n unit test", () => {
  it("check english locales", () => {
    expect(en).toBeDefined();
    expect(en.FORGET_PASSWORD).toBe("forget password");
    expect(en.GO_TO_ROOT).toBe("go to root page");
    expect(en.HELLO).toBe("hello");
    expect(en.IS_DEVING).toBe("is deving");
    expect(en.LOGIN).toBe("login");
    expect(en.NOT_FOUND_404).toBe("ohhh no~ 404 NotFound");
    expect(en.PASSWORD).toBe("password");
    expect(en.REGIST).toBe("regist");
    expect(en.SEVIER_ERR_500).toBe("ohhh no~ 500 NotFound");
    expect(en.USER_NAME).toBe("userName");
  });
});
