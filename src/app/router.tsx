/**
 * V3の ルートサーバー （react-router）
 *  
 */

import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import { AppPaths } from "./common";

// TODO: import component
import Login from "./login";
import Menu from "./menu";
import { NotFound404, IsDoingDev } from "../lib";

export default () => {
  return (
    <div>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path={AppPaths.ROOT} component={Login} />
            <Route path={AppPaths.LOGIN} component={Login} />
            <Route path={AppPaths.MENU} component={Menu} />
            <Route path={AppPaths.DEVING} component={IsDoingDev} />
            <Route path="*" component={NotFound404} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </div>
  );
};
