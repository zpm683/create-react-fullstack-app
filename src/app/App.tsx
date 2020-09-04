/**
 * App (Root Component)
 */

import React from "react";
import WebRouter from "./Router";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <WebRouter />
      </PersistGate>
    </Provider>
  );
}
