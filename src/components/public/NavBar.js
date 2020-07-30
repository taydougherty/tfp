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
          <a className="nav-link" href="/leadership">Leadership</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/blog">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contactus">Contact Us</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
