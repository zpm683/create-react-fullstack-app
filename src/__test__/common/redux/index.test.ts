/**
 * common/redux/index.ts unit test
 *
 */
import {
  cleanErrMsg,
  commonReducer,
  selectLoading,
  setErrMsg,
  setIsLoading,
} from "../../../app/@common/redux";

describe("common/redux/index.ts unit test", () => {
  it("Case commonReducer", () => {
    expect(commonReducer).toBeDefined();
  });
  it("Case actions", () => {
    expect(cleanErrMsg).toBeDefined();
    expect(setErrMsg).toBeDefined();
    expect(setIsLoading).toBeDefined();
  });
  it("Case selector", () => {
    expect(selectLoading).toBeDefined();
  });
});
