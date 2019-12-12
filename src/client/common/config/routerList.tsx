/**
 *  you need import & set router rule with your component
 */
import React from "react";
import { RouteComponentProps } from "react-router";

// TODO: import your component
import Example from "../../components/example/page/index";
// import Xxxx from "../../components/Xxxx/xxxx";
import { NotFound404 } from "../../components/errPage/page";


/**
 * exact & path & component
 * there are props from react-router <Router>
 */
interface IRouterConfig {
  exact: boolean;
  path: string;
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}



export const BASE_URL = "/";
export const routerConfig: IRouterConfig[] = [
  {
        path: `${BASE_URL}`,
        component: Example,
        exact: true
  },
  {
    path: `${BASE_URL}example`,
    component: Example,
    exact: true
  },
  //TODO: set your router rule
  // {
  //     path:`${BASE_URL}xxxx`,
  //     component:Xxxx,
  //     exact: true
  // },
  {
    path: `${BASE_URL}404NotFound`,
    component: NotFound404,
    exact: true
  }
];
