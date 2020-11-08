/**
 * ProcessEnvUtils.ts unit test
 *
 */
import * as ProcessEnvUtils from "../../../app/common/utils/processEnvUtils";

describe("ProcessEnvUtils.ts unit test", () => {
  it("Case get NODE_ENV", () => {
    expect(ProcessEnvUtils.isDevelopment()).toBeFalsy();
    expect(ProcessEnvUtils.isProduction()).toBeFalsy();
    expect(ProcessEnvUtils.isTest()).toBeTruthy();
  });

  it("Case get REACT_APP_*", () => {
    expect(ProcessEnvUtils.getBaseURL()).toBe("/");
    expect(ProcessEnvUtils.getApiServerURL()).toBe(
      "http://localhost:8080/test/api",
    );
    expect(ProcessEnvUtils.getLogServerURL()).toBe(
      "http://localhost:8080/test/log",
    );
    expect(ProcessEnvUtils.getApiTimeout()).toBe(1000);
  });

  // it("Case getContextPath", () => {
  //   process.env.NODE_ENV = 'production';
  //   expect(ProcessEnvUtils.getContextPath()).toBe("");
  // });

  // it("Case getContextPath", () => {
  //   expect(ProcessEnvUtils.getAppRootPath()).toBe("");
  // });
});
