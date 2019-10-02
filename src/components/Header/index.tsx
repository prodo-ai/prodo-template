import * as React from "react";
import { Link } from "@prodo/route";

import "./styles.scss";

const Header = () => (
  <header>
    <div className="container">
      <Link to="/">My App</Link>
    </div>
  </header>
);

export default Header;
