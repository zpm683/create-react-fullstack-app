/**
 * react-router
 * @see https://github.com/ReactTraining/react-router
 */

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import { AppPaths } from "./common";

// TODO: import component
import Login from "./login";
import { NotFound404, IsDoingDev } from "./err-page";
import { LoadingShower } from "./common";

export default function Router() {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline data-testid="CssBaseline" />
        <LoadingShower />
        <BrowserRouter>
          <Switch>
            <Route exact path={AppPaths.ROOT} component={Login} />
            <Route path={AppPaths.LOGIN} component={Login} />
            <Route path={AppPaths.ISDEVING} component={IsDoingDev} />
            <Route path="*" component={NotFound404} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </>
  );
}
