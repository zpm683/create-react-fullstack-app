/**
 * V3のstore（redux store）
 *  
 */

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

// import { persistReducer, persistStore, PersistConfig } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// redux-persist永続化の設定
// const persistConfig: PersistConfig<IStoreData> = {
//   key: "StoreData", // Storageに保存されるキー名を指定する
//   storage, // 保存先としてlocalStorageがここで設定される
//   // whitelist: [] // Stateは`loginStoreState`のみStorageに保存する
//   // blacklist: ['visibilityFilter'] // `visibilityFilter`は保存しない
// };
// 永続化設定されたReducerとして定義
// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;