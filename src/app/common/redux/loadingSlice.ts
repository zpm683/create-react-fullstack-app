import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { LoadingState } from "common.params.loading";

const initialState: LoadingState = {
  isLoading: false,
  errMsg: "",
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    /** setIsLoading */
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    /** setErrMsg */
    setErrMsg(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.errMsg = action.payload;
    },
    /** cleanErrMsg */
    cleanErrMsg(state, action: PayloadAction<void>) {
      state.isLoading = false;
      state.errMsg = "";
    },
  },
});

export const selectLoading = (state: RootState) => state.common.loading;
export const { setErrMsg, cleanErrMsg, setIsLoading } = loadingSlice.actions;
export const loadingReducer = loadingSlice.reducer;
