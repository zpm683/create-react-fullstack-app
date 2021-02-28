/**
 * app/index.tsx unit test
 *
 */

import React from "react";
import { render } from "@testing-library/react";
import { App } from "../../app";

describe("app/index.tsx unit test", () => {
  test("renders learn react link", () => {
    const { container } = render(<App />);
    expect(container).toBeDefined();
  });
});
