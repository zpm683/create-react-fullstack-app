/**
 * App (Root Component)
 */

import React from "react";
import { Router } from "./router";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
import { i18n } from "./@common/i18n";
import { ErrorBoundary, LoadingShower } from "./@common/components";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { CssBaseline } from "@material-ui/core";

export const App = () => {
  return (
    <>
      <CssBaseline />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MuiThemeProvider theme={theme}>
            <I18nextProvider i18n={i18n}>
              <ErrorBoundary>
                <LoadingShower />
                <BrowserRouter children={<Router />} />
              </ErrorBoundary>
            </I18nextProvider>
          </MuiThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
};
