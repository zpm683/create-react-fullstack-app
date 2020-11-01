/**
 * BrowserUtils.ts unit test
 *
 */
import { DataUtils } from "../../../app/common/utils";

describe("BrowserUtils.ts unit test", () => {
  it("Case isNullObject", () => {
    const obj1 = {};
    const obj2: Object = [];
    const obj3: Object = [1];
    const obj4 = "";
    const obj5 = "1";
    const obj6 = { test: 1 };
    expect(DataUtils.isNullObject(obj1)).toBeTruthy();
    expect(DataUtils.isNullObject(obj2)).toBeTruthy();
    expect(DataUtils.isNullObject(obj3)).toBeFalsy();
    expect(DataUtils.isNullObject(obj4)).toBeTruthy();
    expect(DataUtils.isNullObject(obj5)).toBeFalsy();
    expect(DataUtils.isNullObject(obj6)).toBeFalsy();
  });
});
