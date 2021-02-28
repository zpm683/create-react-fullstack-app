/**
 * react-router
 * @see https://github.com/ReactTraining/react-router
 */

import { Switch, Route } from "react-router-dom";
import { APP_PATHS } from "./@common/config";

// TODO: import component
import { LoginContainer } from "./login";
import { NotFound404, IsDoingDev } from "./@common/components";

/**
 * Routes
 */
export const Router = () => {
  return (
    <Switch>
      <Route exact path={APP_PATHS.ROOT} component={LoginContainer} />
      <Route path={APP_PATHS.LOGIN} component={LoginContainer} />
      <Route path={APP_PATHS.ISDEVING} component={IsDoingDev} />
      <Route path="*" component={NotFound404} />
    </Switch>
  );
};
