export type LoginPanelModel = {
  loginInfo: {
    userId: string;
    password: string;
  };
};

// TODO:讨论LoginPanelViewModel和 Redux的loginSlice, loginSlice其实也是一种VM
export class LoginPanelViewModel {
  constructor(private model: LoginPanelModel) {}

  get userId() {
    //　you can remake this data in here
    return this.model.loginInfo.userId;
  }

  get password() {
    //　you can remake this data in here
    return this.model.loginInfo.password;
  }
}
