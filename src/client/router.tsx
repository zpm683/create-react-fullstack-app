import React from "react";
import { Router, Switch, Route, Redirect } from "react-router";
import { createBrowserHistory } from "history";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";

// TODO: import your component
import Example from "./components/example/page";
import NotFound404  from "./common/components/ErrPage/404";

const history = createBrowserHistory();

const BASE_URL = "/";
export default () => {
  return (
    <div>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Router history={history}>
          <Switch>
            <Route exact path={`${BASE_URL}`} component={Example}/>
            <Route  path={`${BASE_URL}example`} component={Example}/>
            <Route  path={`${BASE_URL}404NotFound`} component={NotFound404}/>
            <Redirect exact to={`${BASE_URL}404NotFound`} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </div>
  );
};
