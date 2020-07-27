/**
 * 日期处理工具
 */
export class DateUtils {
  /**
   * dateFormat
   */
  static dateFormat(date: any) {
    return "yyyy-MM-dd HH:mm:ss.SSS"
      .replace(/yyyy/g, date.getFullYear())
      .replace(/MM/g, `00${date.getMonth() + 1}`.slice(-2))
      .replace(/dd/g, `00${date.getDate()}`.slice(-2))
      .replace(/HH/g, `00${date.getHours()}`.slice(-2))
      .replace(/mm/g, `00${date.getMinutes()}`.slice(-2))
      .replace(/ss/g, `00${date.getSeconds()}`.slice(-2))
      .replace(/SSS/g, `000${date.getMilliseconds()}`.slice(-3));
  }
}
