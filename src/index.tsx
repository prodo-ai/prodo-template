import { ProdoProvider } from "@prodo/core";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import { model } from "./model";

import "./styles.css";

const store = model.createStore({
  initState: {},
});

ReactDOM.render(
  <ProdoProvider value={store}>
    <App />
  </ProdoProvider>,
  document.getElementById("root"),
);
