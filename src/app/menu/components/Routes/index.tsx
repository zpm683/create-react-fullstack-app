import React from "react";
import { Route, Switch } from "react-router-dom";

// 侧栏
import { rootMenuList } from "../../config/leftMenu";

/**
 * 页面中间部分的路由组件
 */
interface IOwnProps {}
type RoutesProps = IOwnProps;
export default function Routes(props: RoutesProps) {
  return (
    <Switch>
      {rootMenuList.map((menu, x) => {
        return menu.list.map((info, y) => {
          return (
            <Route
              key={`${x}-${y}`}
              path={info.path}
              children={info.main}
            />
          );
        });
      })}
    </Switch>
  );
}
