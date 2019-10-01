import * as React from "react";
import { Switch, Route } from "@prodo/route";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

const App = () => (
  <div className="app">
    <Header />

    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
);

export default App;
