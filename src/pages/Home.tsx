import * as React from "react";
import logo from "../logo.svg";

const Home = () => (
  <div className="home">
    <img className="logo" alt="Prodo logo" src={logo} />
    <a
      href="https://docs.prodo.dev/introduction/getting-started"
      target="_blank"
    >
      <h1>Get started with Prodo</h1>
    </a>
    <h3>
      Edit <em>src/pages/Home.tsx</em> and save to reload.
    </h3>
  </div>
);

export default Home;
