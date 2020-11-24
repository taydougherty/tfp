import React from "react";
<<<<<<< HEAD
import { NavLink } from "react-router-dom";
import './NavBar.scss'
=======
import { Link } from "react-router-dom";
import "./NavBar.scss";
>>>>>>> master

function NavBar() {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white customNavBar">
<<<<<<< HEAD
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
=======
      <Link to={"/"} className="link">
        <img
          className="logo"
          alt="logo"
          src={require("../../../assets/images/logo.jpeg")}
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul className="nav fixed-top navbar bg-white justify-content-end">
          <li className="nav-item">
            <Link to={"/"}> Home </Link>
          </li>
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
>>>>>>> master
      </div>
    </nav>
  );
}

export default NavBar;
