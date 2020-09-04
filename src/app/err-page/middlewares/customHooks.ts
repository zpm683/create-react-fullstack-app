import { useDispatch } from "react-redux";
import { cleanToken } from "../../login";
import { useHistory } from "react-router-dom";
import { AppPaths } from "../../common";

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
    history.push(AppPaths.ROOT);
  };

  return goRootPage;
}
