/**
 * router.tsx unit test
 *
 */

import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { Router } from "../app/router";
import { Provider } from "react-redux";
import { store } from "../app/store";

describe("router.tsx unit test", () => {
  it("full app rendering", () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Router />
        </MemoryRouter>
      </Provider>,
    );
    expect(container.innerHTML).toMatch("ログイン");
  });

  it("landing on a bad page shows 404 page", () => {
    const { getByRole } = render(
      <MemoryRouter initialEntries={["/some/bad/route"]}>
        <Router />
      </MemoryRouter>,
    );
    expect(getByRole("heading")).toHaveTextContent("ページが存在しません。");
  });
});
