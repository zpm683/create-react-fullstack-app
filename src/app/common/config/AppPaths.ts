import { ProcessEnvUtils } from "../utils/ProcessEnvUtils";

/**
 * AppPaths
 */
export class AppPaths {
  /** root path */
  static readonly ROOT = ProcessEnvUtils.getBaseURL();

  /** login */
  static readonly LOGIN = `${AppPaths.ROOT}login`;

  /** isDeving */
  static readonly ISDEVING = `${AppPaths.ROOT}isDeving`;

  // TODO: add more path
}
