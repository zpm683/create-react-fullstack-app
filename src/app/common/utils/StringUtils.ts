/**
 * 文字列ユーティリティクラス
 */
export class StringUtils {
  /**
   * ランダム文字列生成器
   */
  static getRandomString() {
    return Math.random().toString(36).substr(2).toUpperCase();
  }
}
