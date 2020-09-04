/**
 * ProcessEnvUtils
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
}

function _getString(env: string | undefined): string {
  return env ? env : "";
}

//eslint-disable-next-line
function _getBoolean(env: string | undefined): boolean {
  return !!env && env.toLowerCase() === "true";
}

function _getNumber(env: string | undefined): number {
  return env ? Number(env) : 0;
}
