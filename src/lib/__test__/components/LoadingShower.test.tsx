/**
 * app/index.tsx  unit test
 *
 */
import React from "react";
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { LoadingShower } from "../../components/LoadingShower";
import { useSelector, useOnline } from "../@tools/morkFunc";

describe("LoadingShower.tsx unit test.", () => {
  it("when has err", async () => {
    useSelector.mockReturnValue({ isLoading: true, errMsg: "Err" });
    useOnline.mockReturnValue(false);

    const { getByTestId, queryByTestId } = render(<LoadingShower />);
    expect(useOnline).toBeCalled();
    expect(useSelector).toBeCalled();

    const SnackbarELE = getByTestId("LoadingShower-Snackbar");
    const BackdropELE = getByTestId("LoadingShower-Backdrop");
    expect(SnackbarELE).toBeInTheDocument();
    expect(BackdropELE).toBeInTheDocument();

    fireEvent.click(BackdropELE);

    waitForElementToBeRemoved(SnackbarELE).then(() => {
      expect(queryByTestId("LoadingShower-Snackbar")).not.toBeInTheDocument();
    });

    useSelector.mockReset();
    useOnline.mockReset();
  });

  it("when no err", () => {
    useSelector.mockReturnValue({ isLoading: false, errMsg: "" });
    useOnline.mockReturnValue(true);

    const { queryByTestId, container } = render(<LoadingShower />);
    expect(useOnline).toBeCalled();
    expect(useSelector).toBeCalled();

    expect(queryByTestId("LoadingShower-Backdrop")).toBeInTheDocument();
    expect(queryByTestId("LoadingShower-Snackbar")).not.toBeInTheDocument();

    expect(container).toMatchSnapshot();

    useSelector.mockReset();
    useOnline.mockReset();
  });
});
