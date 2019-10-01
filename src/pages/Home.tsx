import * as React from "react";
import { Link } from "@prodo/route";

const Home = () => (
  <div>
    <h1>Home</h1>
    <p>
      This is the home page. <Link to="about">About</Link>
    </p>
  </div>
);

export default Home;
