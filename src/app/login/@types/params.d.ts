/**
 * login common type
 */
declare module "login.params" {
  export type UserId = string;
  export type Password = string;
  export type LoginInfo = {
    userId: UserId;
    password: Password;
  };
}
