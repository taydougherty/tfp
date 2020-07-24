import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <div className="admin-footer">
      <Container>
        <div>
          <h4>Company</h4>
          <ul className="list-unstyled">
            <li>Services</li>
            <li>Leadership</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} The Fine Print - All Rights
            Reserved
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
