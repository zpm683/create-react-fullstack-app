import { FC, useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNextPage } from "../../../@common/hooks";
import { selectLoginInfo, selectToken, setToken } from "../../redux/loginSlice";
import { LoginPanel } from "./LoginPanel.components";
import { callLoginApi } from "../../api/loginApi";
import { LoginPanelViewModel } from "./LoginPanel.viewmodel";

export const LoginPanelContainer: FC = () => {
  const nextPage = useNextPage();
  const dispatch = useDispatch();

  const loginInfo = useSelector(selectLoginInfo);
  const token = useSelector(selectToken);

  function doEnter(keyCode: number) {
    if (keyCode !== 13) return;
    handleLogin();
  }

  // const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
  //   callLoginApi({ user: "123", pass: "456" }),
  // );

  // if (isLoading) return "Loading...";
  // if (error) return "An error has occurred: ";

  useEffect(() => {
    if (token !== "") {
      nextPage("ISDEVING");
    }
  }, [nextPage, token]);

  const handleLogin = () => {
    // do some api
    // mork token is done!
    dispatch(setToken("ok"));
  };

  return (
    <LoginPanel
      viewModel={new LoginPanelViewModel({ loginInfo })}
      onClickLoginBtn={handleLogin}
      onKeyPressLoginBtn={(e) => doEnter(e.which)}
      onKeyPressTextField={(e) => doEnter(e.which)}
    />
  );
};
