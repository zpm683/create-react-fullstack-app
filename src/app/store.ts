import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import localforage from "localforage";
import { rootReducer } from "./rootReducer";

/**
 * redux-persist config
 * @see
 */
const persistConfig = {
  key: "root",
  version: 1,
  storage: localforage,
  whitelist: [],
  // blacklist: ['visibilityFilter']
};

/**
 * persistedReducer
 */
const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 *  store
 */
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

/**
 *  make persistor
 */
export const persistor = persistStore(store);
/**
 *  store RootState Type
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 *  AppThunk Type
 */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
