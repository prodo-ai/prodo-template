import { fireEvent, render, waitForDomChange } from "@testing-library/react";
import * as React from "react";
import { Store, Provider } from "@prodo/core";
import App from "../src/App";
import { model } from "../src/model";
import { createMemoryHistory } from "history";

const renderWithProdo = (
  ui: React.ReactElement,
  context: { store: Store<any, any>; Provider: Provider },
) => {
  return {
    ...render(<context.Provider>{ui}</context.Provider>),
    store: context.store,
  };
};

describe("App", () => {
  it("can render App without crashing", async () => {
    const { getByTestId } = renderWithProdo(
      <App />,
      model.createStore({
        route: {
          history: createMemoryHistory(),
        },
        initState: {
          count: 0,
        },
      }),
    );

    expect(getByTestId("counter").textContent).toBe("0");
  });

  it("navigates to about page when clicking link", async () => {
    const { container, store, getByTestId } = renderWithProdo(
      <App />,
      model.createStore({
        route: {
          history: createMemoryHistory(),
        },
        initState: {
          count: 0,
        },
      }),
    );

    fireEvent.click(getByTestId("link-about"));
    await waitForDomChange({ container });

    expect(store.universe.route.path).toBe("/about");
  });
});
