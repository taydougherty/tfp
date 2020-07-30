import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <ul className="nav fixed-top navbar bg-white justify-content-end">
        <li className="nav-item">
          <Link to={"/services"}> Services </Link>
        </li>
        <li className="nav-item">
          <Link to={"/leadership"}> Leadership </Link>
        </li>
        <li className="nav-item">
          <Link to={"/blog"}> Blog </Link>
        </li>
        <li className="nav-item">
          <Link to={"/contact"}> Contact Us </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
