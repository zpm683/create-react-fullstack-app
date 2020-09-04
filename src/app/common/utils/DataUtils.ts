/**
 * データユーティリティクラス
 */
export class DataUtils {
  static isNullObject(obj: Object) {
    return Object.keys(obj).length === 0 ? true : false;
  }
}
