/**
 * BrowserUtils.ts unit test
 *
 */
import * as BrowserUtils from "../../utils/browserUtils";

describe("BrowserUtils.ts unit test", () => {
  it("Case BrowserUtils static method", () => {
    expect(BrowserUtils.isChrome()).not.toBeNull();
    expect(BrowserUtils.isFirefox()).not.toBeNull();
    expect(BrowserUtils.isIE()).not.toBeNull();
    expect(BrowserUtils.isOnLine()).not.toBeNull();
    expect(BrowserUtils.isOpera()).not.toBeNull();
    expect(BrowserUtils.isSafari()).not.toBeNull();
    expect(BrowserUtils.isSafariOrChrome()).not.toBeNull();
    expect(BrowserUtils.getUserAgent()).not.toBeNull();
  });
});
