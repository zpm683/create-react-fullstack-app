import { getBaseURL } from "../utils/processEnvUtils";
const BASEURL = getBaseURL();

/**
 *  APP_PATHS
 */
export const APP_PATHS = {

  ROOT: BASEURL,

  /** login */
  LOGIN: `${BASEURL}login`,

  /** isDeving */
  ISDEVING: `${BASEURL}deving`,
};
