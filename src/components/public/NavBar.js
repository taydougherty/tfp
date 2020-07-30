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
<<<<<<< HEAD:src/components/public/NavBar.js
          <a className="nav-link" href="#">
            Leadership
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contact Us
          </a>
=======
          <a className="nav-link" href="/leadsership">Leadership</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/blog">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contactus">Contact Us</a>
>>>>>>> master:src/components/NavBar.js
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
