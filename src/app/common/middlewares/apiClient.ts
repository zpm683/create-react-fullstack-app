import axios from "axios";
import { getApiServerURL } from "../utils/processEnvUtils";

/**
 * apiClient: axios instance
 * @see https://github.com/axios/axios#creating-an-instance
 */
export const apiClient = axios.create({
  baseURL: getApiServerURL(),
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
  // timeout:ProcessEnvUtils.getApiTimeout(),
});

/**
 * axios interceptors
 */
// axios.interceptors.response.use(
//   (response) => {
//     return response.data;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
