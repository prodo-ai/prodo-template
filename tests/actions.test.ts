import { model } from "../src/model";
import { createMemoryHistory } from "history";
import * as actions from "../src/actions";

describe("actions", () => {
  it("can increase count", async () => {
    const history = createMemoryHistory();
    const { store } = model.createStore({
      initState: { count: 0 },
      route: {
        history,
      },
    });

    expect(store.universe.state).toEqual({
      count: 0,
    });

    await store.dispatch(actions.changeCount)(100);

    expect(store.universe.state).toEqual({
      count: 100,
    });
  });
});
