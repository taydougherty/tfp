import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="mainWrapper">
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
              <p>
                Follow Us:
                <a href="#twitterLink" className="fa fa-twitter">
                  {" "}
                </a>
                <a href="#twitterLink" className="fa fa-instagram">
                  {" "}
                </a>
                <a href="#twitterLink" className="fa fa-facebook">
                  {" "}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
