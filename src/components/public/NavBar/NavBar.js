import React from "react";
import { Link } from "react-router-dom";
import './NavBar.scss'

function NavBar() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <Link to={"/"} className="link"><img className="logo" alt="logo" src={require('../../../assets/images/logo.jpeg')} /></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
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
    </nav>
  );
}

export default NavBar;
