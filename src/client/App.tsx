import React from "react";
import WebRouter from "./router";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import "./common/i18n/init";

import { PersistGate } from "redux-persist/integration/react";
export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <WebRouter />
      </PersistGate>
    </Provider>
  );
};
