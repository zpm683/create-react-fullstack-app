import { combineReducers } from "@reduxjs/toolkit";

// TODO: import def Reducer
import loadingReducer from "./loadingSlice";

// TODO: export common action & selector
export { cleanErrMsg, setErrMsg, setIsLoading, selectLoading } from "./loadingSlice";

// export commonReducer
export const commonReducer = combineReducers({
  loading: loadingReducer,
});
