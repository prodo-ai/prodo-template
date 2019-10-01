import * as React from "react";
import { Link } from "@prodo/route";
import Counter from "../components/Counter";

const Home = () => (
  <div>
    <h1>Home</h1>
    <p>
      This is the home page. <Link to="about">Go to About</Link>.
    </p>

    <p>This is a counter</p>
    <Counter />
  </div>
);

export default Home;
