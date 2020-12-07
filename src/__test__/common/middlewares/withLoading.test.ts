/**
 * withLoading.ts unit test
 *
 */
import { withLoading } from "../../../app/@common/middlewares/thunks/withLoading";
import { AppThunk } from "../../../app/store";
type AppThunkDispatch = Parameters<AppThunk>[0];
type AppThunkStore = Parameters<AppThunk>[1];

describe("withLoading.ts unit test", () => {
  it("Case withLoading", () => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    const callApi = jest
      .fn()
      .mockResolvedValueOnce(true)
      .mockResolvedValueOnce(false)
      .mockRejectedValueOnce("err:xxx");

    const okAction = withLoading<boolean>(
      async () => {
        return await callApi();
      },
      () => {},
      () => {},
    );

    const haveBackendErrAction = withLoading<boolean>(
      async () => {
        return await callApi();
      },
      () => {},
      () => {},
    );

    const haveCatchedErrAction = withLoading<boolean>(
      async () => {
        return await callApi();
      },
      () => {},
      () => {},
    );
    okAction(
      dispatch as AppThunkDispatch,
      getState as AppThunkStore,
      undefined,
    );
    expect(dispatch).toBeCalledTimes(2);
    expect(callApi).toBeCalledTimes(1);
    haveBackendErrAction(
      dispatch as AppThunkDispatch,
      getState as AppThunkStore,
      undefined,
    );
    expect(dispatch).toBeCalledTimes(4);
    expect(callApi).toBeCalledTimes(2);
    haveCatchedErrAction(
      dispatch as AppThunkDispatch,
      getState as AppThunkStore,
      undefined,
    );
    expect(dispatch).toBeCalledTimes(6);
    expect(callApi).toBeCalledTimes(3);
  });
});
