/**
 * functionUtils.ts unit test
 *
 */
import { wait, getUUID } from "../../../app/common/utils/functionUtils";

describe("functionUtils.ts unit test", () => {
  it("Case wait", async () => {
    await expect(wait(100)).resolves.toBeUndefined();
  });

  it("Case getUUID", () => {
    expect(typeof getUUID()).toBe("string");
  });
});
