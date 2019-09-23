import { createModel } from "@prodo/core";
import loggerPlugin from "@prodo/logger";

export interface State {}

export const model = createModel<State>().with(loggerPlugin);
export const { state, watch, dispatch } = model.ctx;
