import { createModel } from "@prodo/core";
import loggerPlugin from "@prodo/logger";
import routePlugin from "@prodo/route";

export interface State {
  count: number;
}

export const model = createModel<State>()
  .with(loggerPlugin)
  .with(routePlugin);

export const { state, watch, dispatch } = model.ctx;
