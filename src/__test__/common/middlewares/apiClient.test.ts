/**
 * apiClient.ts unit test
 *
 */
import { apiClient } from "../../../app/@common/middlewares/apiClient";

describe("apiClient.ts unit test", () => {
  it("Case apiClient", () => {
    expect(apiClient).toBeDefined();
    expect(apiClient).toBeInstanceOf(Function);
  });
});
