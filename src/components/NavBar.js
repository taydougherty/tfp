import React from 'react';

function NavBar() {
  return (
    <div className="NavBar">
      <ul className="nav fixed-top navbar bg-white justify-content-end">
        <li className="nav-item">
          <a className="nav-link" href="services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/leadsership">Leadership</a>
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
