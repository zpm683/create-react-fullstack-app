/**
 * react-router
 * @see https://github.com/ReactTraining/react-router
 */

import React from "react";
import { Switch, Route } from "react-router-dom";
import { APP_PATHS } from "./common/config";

// TODO: import component
import { Login } from "./login";
import { NotFound404, IsDoingDev } from "./err-page";

/**
 * Routes
 */
export const Router = () => {
  return (
    <Switch>
      <Route exact path={APP_PATHS.ROOT} component={Login} />
      <Route path={APP_PATHS.LOGIN} component={Login} />
      <Route path={APP_PATHS.ISDEVING} component={IsDoingDev} />
      <Route path="*" component={NotFound404} />
    </Switch>
  );
};
