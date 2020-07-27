import React from 'react';

function NavBar() {
  return (
    <div className="NavBar">
      <ul className="nav fixed-top navbar bg-white justify-content-end">
        <li className="nav-item">
          <a className="nav-link" href="services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Leadership</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
