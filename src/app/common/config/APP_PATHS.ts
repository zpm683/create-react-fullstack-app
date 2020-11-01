import { ProcessEnvUtils } from "../utils/ProcessEnvUtils";

/**
 * APP_PATHS
 */
export class APP_PATHS {
  /** root path */
  static readonly ROOT = ProcessEnvUtils.getBaseURL();

  /** login */
  static readonly LOGIN = `${APP_PATHS.ROOT}login`;

  /** isDeving */
  static readonly ISDEVING = `${APP_PATHS.ROOT}isDeving`;

  // TODO: add more path
}
