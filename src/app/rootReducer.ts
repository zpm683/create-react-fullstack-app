/**
 * V3の RootReducer
 *  
 */

import { combineReducers } from "redux";
import { loginReducer } from "./login";

// TODO:add Reducer
export const rootReducer = combineReducers({
  login: loginReducer
});

export type RootReducer = ReturnType<typeof rootReducer>;
