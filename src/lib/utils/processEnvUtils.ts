import { fomartString, fomartStringToNumber } from "./dataUtils";

export const isProduction = () => {
  return process.env.NODE_ENV === "production";
};

export const isDevelopment = () => {
  return process.env.NODE_ENV === "development";
};

export const isTest = () => {
  return process.env.NODE_ENV === "test";
};

export const getBaseURL = () => {
  return fomartString(process.env.REACT_APP_BASE_URL);
};

export const getLogServerURL = () => {
  return fomartString(process.env.REACT_APP_LOG_URL);
};

export const getApiServerURL = () => {
  return fomartString(process.env.REACT_APP_API_URL);
};

export const getApiTimeout = () => {
  return fomartStringToNumber(process.env.REACT_APP_API_TIMEOUT);
};
