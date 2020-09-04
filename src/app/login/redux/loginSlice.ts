import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../store";
import { callLoginApi } from "../service/api/loginApi";
import { LoginInfo } from "login.params";
import { RequestData, ResponseData } from "login.api.loginApi";
import { withLoading } from "../../common";

interface ILoginStoreState {
  loginInfo: LoginInfo;
  token: string;
}

const initialState: ILoginStoreState = {
  loginInfo: {
    password: "",
    userId: "",
  },
  token: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    /** saveLoginInfo */
    saveLoginInfo(state, action: PayloadAction<LoginInfo>) {
      state.loginInfo = action.payload;
    },
    /** setToken */
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    /** setToken */
    cleanToken(state) {
      state.token = "";
    },
  },
});

export const selectLoginInfo = (state: RootState) => state.login.loginInfo;
export const selectToken = (state: RootState) => state.login.token;

export const { cleanToken, saveLoginInfo, setToken } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;

export const doLoginApi = (params: RequestData): AppThunk =>
  withLoading<ResponseData>(
    async (dispatch, getState) => {
      return await callLoginApi(params);
    },
    (result, dispatch, getState) => {
      console.log(`result${JSON.stringify(result)}`);
      dispatch(setToken(result.token));
    },
    (dispatch, getState) => {
      console.log(getState().common.loading.errMsg);
    },
  );
