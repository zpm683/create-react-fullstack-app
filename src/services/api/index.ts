import axios from "axios";
import {serverConfig} from "../config/severConfig";

const apiClient = axios.create({
  baseURL: serverConfig.apiUrl,
  headers: {
    "Content-Type": "application/json"
  },
  responseType: "json"
});

export async function xxxxxApi(data: any) {
  try {
    console.log("...to do post data")
    const response = await apiClient.post("/xxxxx", data );
    return { response };
  } catch (error) {
    return { error };
  }
}
