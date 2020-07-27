/**
 * アプリ環境依存ユーティリティクラス
 */
export class ProcessEnvUtils {
  /**
   * production モードの場合、true
   * ※ $ yarn build 実行時に true となります。
   */
  static isProduction() {
    return process.env.NODE_ENV === "production";
  }

  /**
   * development モードの場合、true
   * ※ $ yarn dev 実行時に true となります。
   */
  static isDevelopment() {
    return process.env.NODE_ENV === "development";
  }

  /**
   * test モードの場合、true
   * ※ $ yarn test 実行時に true となります。
   */
  static isTest() {
    return process.env.NODE_ENV === "test";
  }
}
