/**
 * 菜单配置
 *  
 */

import React from "react";
import Assignment from "@material-ui/icons/Assignment";
import Settings from "@material-ui/icons/Settings";
import { AppPaths } from "../../common";
import { IsDoingDev } from "../../../lib";
import {IMenuInfo, IRootMenu} from "common.memu";

/**
 * 二级菜单1
 */
const menu1: IMenuInfo[] = [
  {
    path: `${AppPaths.DEVING}`,
    text: "Test1",
    tip: "demo",
    main: <IsDoingDev />,
  },
];

/**
 * 二级菜单2
 */
const menu2: IMenuInfo[] = [
  {
    path: `${AppPaths.DEVING}`,
    text: "Test2",
    tip: "demo",
    main: <IsDoingDev />,
  },
  {
    path: `${AppPaths.DEVING}`,
    text: "Test3",
    tip: "demo",
    main: <IsDoingDev />,
  },
];

/**
 * 一级菜单
 */
export const rootMenuList: IRootMenu[] = [
  {
    title: "菜单1",
    list: menu1,
    icon: <Assignment />,
  },
  {
    title: "菜单2",
    list: menu2,
    icon: <Settings />,
  },
];
