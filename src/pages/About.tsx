import * as React from "react";
import { Link } from "@prodo/route";

const About = () => (
  <div>
    <h1>About</h1>
    <p>
      This is the about page. <Link to="/">Go home</Link>.
    </p>
  </div>
);

export default About;
