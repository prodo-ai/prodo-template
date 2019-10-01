import * as React from "react";
import { state, watch, dispatch } from "../model";
import * as actions from "../actions";

const Counter = () => (
  <div className="counter">
    <button onClick={() => dispatch(actions.changeCount)(-1)}>-</button>
    <h1 className="count" data-testid="counter">
      {watch(state.count)}
    </h1>
    <button onClick={() => dispatch(actions.changeCount)(1)}>+</button>{" "}
  </div>
);

export default Counter;
