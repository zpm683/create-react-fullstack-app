/**
 * dataUtils.ts unit test
 *
 */
import {
  isEmptyObject,
  fomartString,
  fomartStringToBool,
  fomartStringToNumber,
} from "../../utils/dataUtils";

describe("dataUtils.ts unit test", () => {
  it("check isEmptyObject", () => {
    const obj1 = {};
    const obj2: Object = [];
    const obj3: Object = [1];
    const obj4 = "";
    const obj5 = "1";
    const obj6 = { test: 1 };
    expect(isEmptyObject(obj1)).toBeTruthy();
    expect(isEmptyObject(obj2)).toBeTruthy();
    expect(isEmptyObject(obj3)).toBeFalsy();
    expect(isEmptyObject(obj4)).toBeTruthy();
    expect(isEmptyObject(obj5)).toBeFalsy();
    expect(isEmptyObject(obj6)).toBeFalsy();
  });

  it("check fomartString", () => {
    expect(fomartString("")).toBe("");
    expect(fomartString("test")).toBe("test");
    expect(fomartString(undefined)).toBe("");
  });

  it("check fomartStringToBool", () => {
    expect(fomartStringToBool("true")).toBe(true);
    expect(fomartStringToBool("false")).toBe(false);
    expect(fomartStringToBool("")).toBe(false);
    expect(fomartStringToBool("test")).toBe(false);
    expect(fomartStringToBool(undefined)).toBe(false);
  });

  it("check fomartStringToNumber", () => {
    expect(fomartStringToNumber("123")).toBe(123);
    expect(fomartStringToNumber("false")).toBeNaN();
    expect(fomartStringToNumber("")).toBe(0);
    expect(fomartStringToNumber("test123")).toBeNaN();
    expect(fomartStringToNumber(undefined)).toBe(0);
  });
});
