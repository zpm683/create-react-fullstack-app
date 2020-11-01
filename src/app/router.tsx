/**
 * react-router
 * @see https://github.com/ReactTraining/react-router
 */

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme } from "./theme";
import { APP_PATHS } from "./common/config";

// TODO: import component
import { Login } from "./login";
import { NotFound404, IsDoingDev } from "./err-page";
import { LoadingShower } from "./common/components";

export const Router = () => {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline data-testid="CssBaseline" />
        <LoadingShower />
        <BrowserRouter>
          <Switch>
            <Route exact path={APP_PATHS.ROOT} component={Login} />
            <Route path={APP_PATHS.LOGIN} component={Login} />
            <Route path={APP_PATHS.ISDEVING} component={IsDoingDev} />
            <Route path="*" component={NotFound404} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </>
  );
};
