/**
 * customHooks.ts unit test
 *
 */
import { fireEvent } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { useOnline } from "../../hooks/useOnline";

describe("customHooks.ts unit test", () => {
  it("Case useOnline", () => {
    const { result } = renderHook(() => useOnline());
    fireEvent(window, new Event("online"));
    expect(result.current).toBe(true || false);
  });
});
