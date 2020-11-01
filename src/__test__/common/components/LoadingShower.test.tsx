/**
 * app/index.tsx  unit test
 *
 */
import React from "react";
import * as redux from "react-redux";
import { render, fireEvent, act } from "@testing-library/react";
import { LoadingShower } from "../../../app/common/components/LoadingShower";

describe("LoadingShower.tsx unit test.", () => {
  it("Check ChildComponents", () => {
    const useSelectorSpy = jest.spyOn(redux, "useSelector");
    useSelectorSpy.mockReturnValue({ isLoading: true, errMsg: "Err" });
    const { getByTestId } = render(<LoadingShower />);
    expect(getByTestId("LoadingShower-Snackbar")).toBeInTheDocument();
    expect(getByTestId("LoadingShower-Backdrop")).toBeInTheDocument();
    useSelectorSpy.mockReset();
    useSelectorSpy.mockRestore();
  });
});
