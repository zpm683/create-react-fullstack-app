/**
 * customHooks.ts unit test
 *
 */

import { renderHook, act } from "@testing-library/react-hooks";
import {
  useOnline,
  usePrevious,
  useComponentDidMount,
  useComponentWillMount,
} from "../../../app/common";

describe("customHooks.ts unit test", () => {
  it("Case useOnline", () => {
    const { result } = renderHook(() => useOnline());
    expect(result.current).toBe(true || false);
  });

  it("Case usePrevious", () => {
    const { result } = renderHook(() => usePrevious("test"));
    act(() => {
      // FIXME
      expect(result.current).toBeNull();
    });
  });

  it("Case useComponentDidMount", () => {
    const fn = jest.fn();
    renderHook(() => useComponentDidMount(fn));
    act(() => {
      expect(fn).toBeCalledTimes(1);
    });
  });

  it("Case useComponentWillMount", () => {
    const fn = jest.fn();
    renderHook(() => useComponentWillMount(fn));
    act(() => {
      expect(fn).toBeCalledTimes(1);
    });
  });
});
