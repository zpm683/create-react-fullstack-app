/**
 * 服务器配置
 */
import { ProcessEnvUtils } from "../../../lib";

interface ISeverConfig {
  /**
   * baseURL
   */
  readonly baseURL: string;
  /**
   * logServerURL
   */
  readonly logServerURL: string;
  /**
   * apiServerURL
   */
  readonly apiServerURL: string;
}

/**
 * 服务器配置
 */
let SEVER_CONFIG: ISeverConfig = {
  baseURL: "",
  logServerURL: "",
  apiServerURL: "",
};

// 开发环境
if (ProcessEnvUtils.isDevelopment()) {
  SEVER_CONFIG = {
    baseURL: "/",
    apiServerURL: "http://localhost:8080/web-platform-server/api",
    logServerURL: "http://localhost:5050/log",
  };
}

// 生产环境
if (ProcessEnvUtils.isProduction()) {
  SEVER_CONFIG = {
    baseURL: "/",
    apiServerURL: "http://localhost:8080/web-platform-server/api",
    logServerURL: "http://localhost:5050/log",
  };
}

export { SEVER_CONFIG };