/**
 * loadingSlice.ts unit test
 *
 */
import {
  cleanErrMsg,
  selectLoading,
  setErrMsg,
  setIsLoading,
  loadingReducer,
} from "../../../@common/redux/loadingSlice";
import { LoadingState } from "@common.params";
import { RootState } from "../../../store";

describe("loadingSlice.ts unit test", () => {
  const initialState: LoadingState = {
    isLoading: false,
    errMsg: "",
  };

  it("Case loadingSlice", () => {
    expect(loadingReducer).not.toBeNull();
  });

  it("Case actions not toBeNull", () => {
    expect(cleanErrMsg).not.toBeNull();
    expect(setErrMsg).not.toBeNull();
    expect(setIsLoading).not.toBeNull();
  });

  it("Case cleanErrMsg action", () => {
    expect(loadingReducer(initialState, cleanErrMsg())).toEqual(
      Object.assign({}, initialState, {
        errMsg: "",
      }),
    );
  });

  it("Case setErrMsg action", () => {
    expect(loadingReducer(initialState, setErrMsg("test"))).toEqual(
      Object.assign({}, initialState, {
        errMsg: "test",
      }),
    );
  });

  it("Case setIsLoading action", () => {
    expect(loadingReducer(initialState, setIsLoading(true))).toEqual(
      Object.assign({}, initialState, {
        isLoading: true,
      }),
    );
    expect(loadingReducer(initialState, setIsLoading(false))).toEqual(
      Object.assign({}, initialState, {
        isLoading: false,
      }),
    );
  });

  it("Case selector", () => {
    const morkStoreState = {
      common: {
        loading: initialState,
      },
    };
    expect(selectLoading(morkStoreState as RootState)).toBe(initialState);
  });
});
