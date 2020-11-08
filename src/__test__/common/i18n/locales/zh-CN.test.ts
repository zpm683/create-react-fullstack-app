/**
 * i18n unit test
 *
 */
import cn from "../../../../app/common/i18n/locales/zh-CN";

describe("i18n unit test", () => {
  it("check chinese locales", () => {
    expect(cn).toBeDefined();
    expect(cn.FORGET_PASSWORD).toBe("忘记密码");
    expect(cn.GO_TO_ROOT).toBe("返回起始页");
    expect(cn.HELLO).toBe("你好");
    expect(cn.IS_DEVING).toBe("开发中");
    expect(cn.LOGIN).toBe("登录");
    expect(cn.NOT_FOUND_404).toBe("页面飞了");
    expect(cn.PASSWORD).toBe("密码");
    expect(cn.REGIST).toBe("注册");
    expect(cn.SEVIER_ERR_500).toBe("服务器崩了");
    expect(cn.USER_NAME).toBe("用户名");
  });
});
