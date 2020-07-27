/**
 * common.params
 * 公共接口定义
 */

/**
 * common.memu
 * 菜单组件接口
 */
declare module "common.memu" {
  /**
   * root menu interface
   */
  export interface IRootMenu {
    title: string;
    list: IMenuInfo[];
    icon: JSX.Element;
  }
  /**
   *  child menu interface
   */
  export interface IMenuInfo {
    path: string;
    text: string;
    tip: string;
    main: JSX.Element;
  }
}
