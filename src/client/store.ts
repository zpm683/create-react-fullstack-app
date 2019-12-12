import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./rootReducer";
import rootSaga from "./rootSaga";
import { persistReducer, persistStore, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";

// TODO: import IXxxxxStoreState Interface in xxxxx/reducers
import { IExampleStoreState } from "../client/components/example/redux/reducers";

export type IStoreState = {
// TODO: add xxxxxStoreState: IXxxxxxStoreState
   exampleStoreState: IExampleStoreState;
};

// redux-persist
// TODO: Re-setting persistConfig
const persistConfig: PersistConfig<IStoreState> = {
  key: "StoreState",
  storage, 
  // whitelist: [] 
  // blacklist: [] 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// init saga
const sagaMiddleware = createSagaMiddleware();

// init store
const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
