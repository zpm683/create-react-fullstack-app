import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../store";
import { callLoginApi } from "../service/api/loginApi";
import { ILoginInfo } from "login.params";
import { RequestData } from "login.api.loginApi";
import { LoadingState } from "lib.loading";

interface ILoginStoreState {
  loadingState: LoadingState;
  loginInfo: ILoginInfo;
  isLogined: boolean;
  token: string;
}

const initialState: ILoginStoreState = {
  loadingState: {
    isLoading: false,
    errMsg:""
  },
  isLogined: false,
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
    /** setIsLoading */
    setLoadingState(state, action: PayloadAction<LoadingState>) {
      state.loadingState = action.payload;
    },

    /** saveLoginInfo */
    saveLoginInfo(state, action: PayloadAction<ILoginInfo>) {
      state.loginInfo = action.payload;
    },
    /** changLoginState */
    setLoginState(state, action: PayloadAction<boolean>) {
      state.isLogined = action.payload;
      state.loadingState = {
        isLoading: false,
        errMsg:""
      };
    },
  },
});

export const selectLoginInfo = (state: RootState) => state.login.loginInfo;
export const selectIsLogined = (state: RootState) => state.login.isLogined;
export const selectLoadingState = (state: RootState) => state.login.loadingState;

export const loginActions = loginSlice.actions;
export const loginReducer = loginSlice.reducer;

export const doLoginApi = (params: RequestData): AppThunk => async (
  dispatch
) => {
  try {
    dispatch(loginActions.setLoadingState({
      isLoading: true,
      errMsg:""
    }));
    const result = await callLoginApi(params);
    if (result) {
      setTimeout(() => {
        dispatch(loginActions.setLoginState(true));
      }, 1000);
    } else {
      dispatch(loginActions.setLoadingState({
        isLoading: false,
        errMsg:"ログインできませんでした"
      }));
    }
  } catch (err) {
    dispatch(loginActions.setLoadingState({
      isLoading: false,
      errMsg:"ログインできませんでした"
    }));
  }
};
