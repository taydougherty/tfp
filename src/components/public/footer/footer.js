import React from "react";
import './footer.scss'

const footer = () => {

    return (
        <div className="mainWrapper">
          <div className="container">
            <div className="row footerContents">
              {/* Copyright */}
              <div className="col copyright">
                <p className="copyrightFollowUs">&copy; Sheila Mojtehedi {new Date().getFullYear()}</p>
              </div>
              {/* navlinks column */}
              <div className="col socialMedia">
                <div>
                  <p className="copyrightFollowUs">
                      Follow Us:
                      <a href="#twitterLink" className="fa fa-twitter"> </a>
                      <a href="#instagram" className="fa fa-instagram"> </a>
                      <a href="#facebook" className="fa fa-facebook"> </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer