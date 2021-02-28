/**
 * DoLogin API models type
 */
declare module "login.models.DoLogin" {
  import { Password, UserId } from "login.params";
  /** Request Data */
  export type RequestData = {
    user: UserId;
    pass: Password;
  };
  /** Response Data */
  export type ResponseData = {
    token: string;
  };
}
