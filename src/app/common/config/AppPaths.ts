import { SEVER_CONFIG } from "./severConfig";

/**
 * App链接配置
 */
// TODO:加入更多链接
export class AppPaths {
  /** 根 */
  static readonly ROOT = SEVER_CONFIG.baseURL;

  /** login */
  static readonly LOGIN = `${AppPaths.ROOT}login`;

  /** menu */
  static readonly MENU = `${AppPaths.ROOT}menu`;

    /** deving */
    static readonly DEVING = `${AppPaths.ROOT}deving`;
}
