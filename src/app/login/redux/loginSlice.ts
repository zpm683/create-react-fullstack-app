import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { LoginInfo } from "login.params";

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
