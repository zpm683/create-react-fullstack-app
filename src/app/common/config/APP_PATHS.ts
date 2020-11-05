import { getBaseURL } from "../utils/processEnvUtils";

/**
 * APP_PATHS
 */
export class APP_PATHS {
  /** root path */
  static readonly ROOT = getBaseURL();

  /** login */
  static readonly LOGIN = `${APP_PATHS.ROOT}login`;

  /** isDeving */
  static readonly ISDEVING = `${APP_PATHS.ROOT}isDeving`;

  // TODO: add more path
}
