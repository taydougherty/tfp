import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.scss'

function NavBar() {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      {/* Logo */}
      <a class="logo_button">
        <NavLink to={"/home"} className="NavLink">
          <div id="brand_icon">Sheila Mojtehedi</div>
        </NavLink>
      </a> 

      {/* Hamburger menu button */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>

      {/* Links */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="nav navbar bg-white justify-content-center">
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
            <li className="nav-item">
              {/* Hamburger contact button */}
              <a id="hamburger_contact_button" href="mailto:sheila@mojtehedi.com">Contact</a>
            </li>
          </ul>

          {/* Contact button */}
          <a id="contact_button" href="mailto:sheila@mojtehedi.com">Contact</a>
        </div>
    </nav>
  );
}

export default NavBar;
