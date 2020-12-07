import { AppThunk } from "../../../store";
import { cleanErrMsg, setIsLoading, setErrMsg } from "../../redux";
type AppThunkDispatch = Parameters<AppThunk>[0];
type AppThunkStore = Parameters<AppThunk>[1];

/**
 * withLoading
 * 
 * @param asyncCommand
 * @param onSuccess
 * @param onFailure
 * @example
 * export const doLoginApi = (params: RequestData): AppThunk =>
  withLoading<ResponseData>(
    async (dispatch, getState) => {
      return await callLoginApi(params);
    },
    (result, dispatch, getState) => {
      console.log(`result${result}`);
      dispatch(loginActions.setToken("test Token"));
    },
    (dispatch, getState) => {
      console.log(getState().common.loading.errMsg);
    }
  );
 */
export function withLoading<T>(
  asyncCommand: (
    dispatch: AppThunkDispatch,
    getStates: AppThunkStore,
  ) => Promise<T>,
  onSuccess: (
    result: T,
    dispatch: AppThunkDispatch,
    getStates: AppThunkStore,
  ) => void = () => {},
  onFailure: (
    dispatch: AppThunkDispatch,
    getStates: AppThunkStore,
  ) => void = () => {},
): AppThunk {
  return async (dispatch, getState) => {
    try {
      dispatch(cleanErrMsg());
      dispatch(setIsLoading(true));
      const result = await asyncCommand(dispatch, getState);
      dispatch(setIsLoading(false));
      if (result) {
        onSuccess(result, dispatch, getState);
      } else {
        onFailure(dispatch, getState);
        dispatch(setErrMsg("result Err"));
      }
    } catch (error) {
      onFailure(dispatch, getState);
      dispatch(setErrMsg(JSON.stringify(error)));
    }
  };
}
