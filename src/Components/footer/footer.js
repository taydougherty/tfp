import React from "react";
import './footer.scss'

const footer = () => {

    return (
        <div className="mainWrapper">
          <div className="container">
            <div className="row">
              {/* Logo column */}
              <div className="col">
                <h1>insert Logo here</h1>
              </div>
              {/* navlinks column */}
              <div className="col navLinks">
              <h3>Sheila Mojtehedi</h3>
                  <ul>
                    <li><a href="some linkage" >Services</a></li>
                    <li><a href="some linkage" >Leadership</a></li>
                    <li><a href="some linkage" >Blog</a></li>
                    <li><a href="some linkage" >Contact Us</a></li>
                  </ul>
              </div>
            </div>
          </div>

            <hr />

          <div className="container">
            <div className="row">
              {/* Copyright */}
              <div className="col copyright">
                <p>&copy; Sheila Mojtehedi {new Date().getFullYear()}</p>
              </div>
              {/* navlinks column */}
              <div className="col socialMedia">
                <div>
                  <p>Follow Us:
                      <a href="#twitterLink" className="fa fa-twitter"> </a>
                      <a href="#twitterLink" className="fa fa-instagram"> </a>
                      <a href="#twitterLink" className="fa fa-facebook"> </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default footer