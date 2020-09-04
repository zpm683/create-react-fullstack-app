/**
 * root-reducer
 * @see https://redux.js.org/
 */
import { combineReducers } from "@reduxjs/toolkit";
import { commonReducer } from "./common";
import { loginReducer } from "./login";

export const rootReducer = combineReducers({
  common: commonReducer,
  login: loginReducer,
  // TODO:add Reducer
});
