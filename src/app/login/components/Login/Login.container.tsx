import { Login } from "./Login.component";
import { LoginPanelContainer } from "../LoginPanel/LoginPanel.container";

export const LoginContainer = () => {
  return (
    <Login>
      <LoginPanelContainer />
    </Login>
  );
};
