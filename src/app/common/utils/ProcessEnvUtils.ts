/**
 * アプリ環境依存ユーティリティクラス
 */
export class ProcessEnvUtils {
  /**
   * production モードの場合、true
   * ※ $ npm run build || yarn build 実行時に true となります。
   */
  static isProduction() {
    return process.env.NODE_ENV === "production";
  }

  /**
   * development モードの場合、true
   * ※ $ npm start || yarn start 実行時に true となります。
   */
  static isDevelopment() {
    return process.env.NODE_ENV === "development";
  }

  /**
   * test モードの場合、true
   * ※ $ npm run test || yarn test 実行時に true となります。
   */
  static isTest() {
    return process.env.NODE_ENV === "test";
  }

  /**
   * baseURLを取得します。
   */
  static getBaseURL() {
    return _getString(process.env.REACT_APP_BASE_URL);
  }

  /**
   * ApiServerURLを取得します。
   */
  static getLogServerURL() {
    return _getString(process.env.REACT_APP_LOG_URL);
  }

  /**
   * ApiServerURLを取得します。
   */
  static getApiServerURL() {
    return _getString(process.env.REACT_APP_API_URL);
  }

  /**
   * Web APIのタイムアウト値（ミリ秒）を取得します。
   */
  static getApiTimeout() {
    return _getNumber(process.env.REACT_APP_API_TIMEOUT);
  }

  /**
   * コンテキストルートパスを取得します。
   */
  static getContextPath(): string {
    // 現在のパスのルートから1レベルまでをコンテキストルートパスとして使用する
    //   ex) /lifemark/karte/xx → /lifemark
    return this.isProduction()
      ? window.location.pathname.replace(/^((\/([^/]*)){1}).*$/, "$1")
      : "";
  }

  /**
   * アプリケーションルートパスを取得します。
   */
  static getAppRootPath(): string {
    // 現在のパスのルートから2レベルまでをアプリケーションルートパスとして使用する
    //   ex) /lifemark/karte/xx → /framework/karte
    return this.isProduction()
      ? window.location.pathname.replace(/^((\/([^/]*)){2}).*$/, "$1")
      : "";
  }
}

/**
 * 定義値を文字列で取得します。
 * ※未定義の場合、空文字列を返します。
 * @private
 * @param env 環境変数
 */
function _getString(env: string | undefined): string {
  return env ? env : "";
}

/**
 * 定義値を真理値で取得します。
 * ※未定義、および、true 以外の場合、false を返します。
 * @private
 * @param env 環境変数
 *
 */
//eslint-disable-next-line
function _getBoolean(env: string | undefined): boolean {
  return !!env && env.toLowerCase() === "true";
}

/**
 * 定義値を数値で取得します。
 * ※未定義の場合、0 を返します。
 * @private
 * @param env 環境変数
 */
function _getNumber(env: string | undefined): number {
  return env ? Number(env) : 0;
}
