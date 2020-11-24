import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.scss'

function NavBar() {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white customNavBar">
      <div class="collapse navbar-collapse" id="navbar_wrap">
        <a class="logo_button">
          <NavLink to={"/home"} className="NavLink">
            <div id="brand_icon">Sheila Mojtehedi</div>
          </NavLink>
          {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button> */}
        </a>

        <div>
          <ul className="nav fixed-top navbar bg-white justify-content-center">
            <li className="nav-item">
              <NavLink to={"/home"} activeStyle={{ fontWeight: "bold", color: "black", opacity: "1"}}> Home </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/leadership"} activeStyle={{ fontWeight: "bold", color: "black", opacity: "1"}}> About </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/services"} activeStyle={{ fontWeight: "bold", color: "black", opacity: "1"}}> Services </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/blog"} activeStyle={{ fontWeight: "bold", color: "black", opacity: "1"}}> Insights </NavLink>
            </li>
          </ul>
        </div>
        <a id="contact_button" href="mailto:sheila@mojtehedi.com">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
