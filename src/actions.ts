import { state } from "./model";

export const changeCount = (amount: number) => {
  state.count += amount;
};
