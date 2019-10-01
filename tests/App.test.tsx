import { render } from "@testing-library/react";
import * as React from "react";
import App from "../src/App";
import { model } from "../src/model";
import { createMemoryHistory } from "history";

describe("App", () => {
  it("can render App without crashing", async () => {
    const history = createMemoryHistory();
    const { Provider } = model.createStore({
      initState: { count: 0 },
      route: {
        history,
      },
    });

    const { getByTestId } = render(
      <Provider>
        <App />
      </Provider>,
    );

    expect(getByTestId("counter").textContent).toBe("0");
  });
});
