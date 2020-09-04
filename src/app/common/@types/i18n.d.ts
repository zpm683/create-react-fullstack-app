/*
 * i18n key
 */
declare module "common.i18n" {
  export type LoginLocalesKeys = Readonly<{
    /**
     * Hello
     */
    HELLO: string;
    /**
     * Login
     */
    LOGIN: string;
    /**
     * regist
     */
    REGIST: string;
    /**
     * userName
     */
    USER_NAME: string;
    /**
     * password
     */
    PASSWORD: string;
    /**
     * forget password
     */
    FORGET_PASSWORD: string;
  }>;

  export type ErrPageLocalesKeys = Readonly<{
    /**
     * is deving
     */
    IS_DEVING: string;
    /**
     * go to root compontent
     */
    GO_TO_ROOT: string;
    /**
     * NotFound404
     */
    NOT_FOUND_404: string;
    /**
     * SevierErr500
     */
    SEVIER_ERR_500: string;
  }>;

  export type AllLocalesKeys = LoginLocalesKeys & ErrPageLocalesKeys;
}
