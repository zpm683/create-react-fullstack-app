/**
 * customHooks.ts unit test
 *
 */

import { renderHook, act } from "@testing-library/react-hooks";
import { useOnline, usePrevious } from "../../../app/common/middlewares/hooks";

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
});
