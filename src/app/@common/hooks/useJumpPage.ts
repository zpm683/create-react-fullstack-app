import { useHistory } from "react-router-dom";
import { APP_PATHS } from "../config";

type AppPath = keyof typeof APP_PATHS;

/**
 * useNextPage
 * @returns goNextPage()
 * @example
 * const goNextPage = useNextPage();
 * // ...
 * goNextPage("XX")  // jump
 */
export const useNextPage = () => {
  const history = useHistory();
  const goNextPage = (path: AppPath) => {
    history.push(APP_PATHS[path]);
  };
  return goNextPage;
};

/**
 * useBackPage
 * @returns goBack()
 * @example
 * const goBack = useBackPage();
 * // ...
 * goBack()  // jump
 */
export const useBackPage = (callBackFn: () => void = () => {}) => {
  const history = useHistory();
  const goBack = () => {
    callBackFn();
    history.goBack();
  };
  return goBack;
};

/**
 * useForwardPage
 * @returns goForward()
 * @example
 * const goForward = useForwardPage();
 * // ...
 * goForward()
 */
export const useForwardPage = (callBackFn: () => void = () => {}) => {
  const history = useHistory();
  const goForward = () => {
    callBackFn();
    history.goForward();
  };
  return goForward;
};
