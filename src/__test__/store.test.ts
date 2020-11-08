/**
 * store.ts unit test
 *
 */

import { store, persistor } from "../app/store";
export const storeState = store.getState();

describe("store.ts unit test.", () => {
  it("Case store", () => {
    expect(store).toBeDefined();
  });
  it("Case persistor", () => {
    expect(persistor).toBeDefined();
  });
});
