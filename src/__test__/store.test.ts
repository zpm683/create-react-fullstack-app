/**
 * store unit test
 *
 */
import { store, persistor } from "../app/store";

describe("store.ts unit test.", () => {
  it("Case store", () => {
    expect(store).toBeDefined();
  });
  it("Case persistor", () => {
    expect(persistor).toBeDefined();
  });
});
