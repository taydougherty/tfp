import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <ul className="nav fixed-top navbar bg-white justify-content-end">
        <li className="nav-item">
          <Link to={"/services"} className="nav-link"> Services </Link>
        </li>
        <li className="nav-item">
          <Link to={"/leadership"} className="nav-link"> Leadership </Link>
        </li>
        <li className="nav-item">
          <Link to={"/blog"} className="nav-link"> Blog </Link>
        </li>
        <li className="nav-item">
          <Link to={"/contact"} className="nav-link"> Contact Us </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
