/**
 * ログインデータのAPI
 *  
 */

// import { request } from "../../../../lib";
import { RequestData } from "login.api.loginApi";

export async function callLoginApi(data: RequestData) {
  try {
    const response = true;
    return response;
  } catch (error) {
    return error;
  }
}
