import { combineReducers } from "redux";
import { IStoreState } from "./store";

// TODO:  import xxxxReducer
import exampleReducer from "./components/example/redux/reducers";
export const rootReducer = combineReducers<IStoreState>({
  // TODO: add Reducer xxxxStoreState: xxxxReducer
  exampleStoreState: exampleReducer
});
