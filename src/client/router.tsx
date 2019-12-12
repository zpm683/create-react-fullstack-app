import React from "react";
import { Router, Switch, Route, Redirect } from "react-router";
import { createBrowserHistory } from "history";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import { routerConfig, BASE_URL } from "./common/config/routerList";
const history = createBrowserHistory();

export default () => {
  return (
    <div>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Router history={history}>
          <Switch>
            { routerConfig.map((oneRooter, index) => {
              return (
                <Route
                  key={index}
                  exact={oneRooter.exact}
                  path={oneRooter.path}
                  component={oneRooter.component}
                />
              );
            })}
            <Redirect exact to={`${BASE_URL}404NotFound`} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </div>
  );
};
