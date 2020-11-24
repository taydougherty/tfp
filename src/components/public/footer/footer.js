import React from "react";
import './footer.scss'

const footer = () => {

    return (
      <div class="footer_wrapper">
        <div className="footer_container">
          <div className="left"></div>
          <div className="center">
            <p className="copyright">&copy; Sheila Mojtehedi {new Date().getFullYear()}</p>
          </div>
          <div className="right">
            <ul>
              <li>sheila@mojtehedi.com</li>
              <li>(858) 449-4921</li>
            </ul>
          </div>
        </div>
      </div>
  );
}

export default footer