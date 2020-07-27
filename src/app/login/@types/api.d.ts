/**
 * loginApi パラメーター定義
 */
declare module "login.api.loginApi" {
  import { Password, UserId } from "login.params";
  /** リクエストパラメーター */
  export type RequestData = {
    user: UserId;
    pass: Password;
  };
  /** レスポンスデータ */
  export type ResponseData = {
    token: string;
  };
}
