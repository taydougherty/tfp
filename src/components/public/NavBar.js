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
<<<<<<< HEAD
          <Link to={"/leadership"}> Leadership </Link>
        </li>
        <li className="nav-item">
          <Link to={"/blog"}> Blog </Link>
        </li>
        <li className="nav-item">
          <Link to={"/contact"}> Contact Us </Link>
=======
          <a className="nav-link" href="/leadership">Leadership</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/blog">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contactus">Contact Us</a>
>>>>>>> be135f419da66f9b7928d533526b908c44c6653a
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
