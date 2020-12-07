/**
 * i18n unit test
 *
 */
import ja from "../../../../app/@common/i18n/locales/ja-JP";

describe("i18n unit test", () => {
  it("check japanese locales", () => {
    expect(ja).toBeDefined();
    expect(ja.FORGET_PASSWORD).toBe("パスワードをお忘れの方はこちら");
    expect(ja.GO_TO_ROOT).toBe("ルートページに戻る");
    expect(ja.HELLO).toBe("こんにちは");
    expect(ja.IS_DEVING).toBe("開発中");
    expect(ja.LOGIN).toBe("ログイン");
    expect(ja.NOT_FOUND_404).toBe("ページが存在しません");
    expect(ja.PASSWORD).toBe("パスワード");
    expect(ja.REGIST).toBe("新規利用登録");
    expect(ja.SEVIER_ERR_500).toBe("サーバー接続エラーがあります");
    expect(ja.USER_NAME).toBe("ユーザー名");
  });
});
