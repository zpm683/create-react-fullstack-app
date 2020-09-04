import axios from "axios";
import { ProcessEnvUtils } from "../utils/ProcessEnvUtils";

/**
 * apiClient: axios instance
 *
 * @see https://github.com/axios/axios#creating-an-instance
 */
export const apiClient = axios.create({
  baseURL: ProcessEnvUtils.getApiServerURL(),
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
