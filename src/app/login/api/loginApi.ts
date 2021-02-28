import { RequestData, ResponseData } from "login.models.DoLogin";
import { wait } from "../../../lib/utils";

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
    return error;
  }
}
