import { useDispatch } from "react-redux";
import { cleanToken } from "../../login";
import { useHistory } from "react-router-dom";
import { APP_PATHS } from "../../common/config";

/**
 * useGoRootPage
 *
 * @returns goRootPage()
 * @example const goRootPage = useGoRootPage();
 */
export function useGoRootPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const goRootPage = () => {
    dispatch(cleanToken());
    history.push(APP_PATHS.ROOT);
  };

  return goRootPage;
}
