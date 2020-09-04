// import { apiClient } from "../../../common";
import { RequestData, ResponseData } from "login.api.loginApi";
import { wait } from "../../../common";

export async function callLoginApi(params: RequestData) {
  try {
    const data: ResponseData = { token: "test" };
    // const installedProductId = window.sessionStorage.getItem("seihinId");
    // const { data } = await apiClient.post<ResponseData>(
    //   `/${installedProductId}/token`,
    //   {
    //     userId: params.user,
    //     password: params.pass,
    //   },
    //   {
    //     headers: {
    //       Authorization: `Basic ${Buffer.from(`${params.user}:${params.pass}`).toString("base64")}`,
    //     },
    //   }
    // );
    await wait(1000);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
