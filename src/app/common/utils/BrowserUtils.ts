/**
 * BrowserUtils
 */
export class BrowserUtils {
  static getUserAgent() {
    return window.navigator.userAgent;
  }

  static isSafari() {
    return /\bsafari\b/i.test(this.getUserAgent());
  }

  static isChrome() {
    return /\bchrome\b/i.test(this.getUserAgent());
  }

  static isSafariOrChrome() {
    return /\b(safari|chrome)\b/i.test(this.getUserAgent());
  }

  static isFirefox() {
    return /\b(firefox|gecko)\b/i.test(this.getUserAgent());
  }

  static isOpera() {
    return /\bopera\b/i.test(this.getUserAgent());
  }

  static isIE() {
    return /\bmsie\b/i.test(this.getUserAgent());
  }

  static isOnLine() {
    return window.navigator.onLine;
  }
}
