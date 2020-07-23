import React, { Component } from "react";
import { Nav, Navbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./style.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Navigation extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          className="pb-4"
        >
          <Navbar.Brand href="/">
            <img src="" alt="Smiley face" width="120px"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-center">
              <Nav.Link href="/home" className="link text-center">
                <OverlayTrigger
                  key="bottom"
                  placement="bottom"
                  overlay={<Tooltip id="tooltip-bottom">Dashboard</Tooltip>}
                ></OverlayTrigger>
                <span className="link_name">Dashboard</span>
              </Nav.Link>
              <Nav.Link href="/need-scheduling" className="link text-center">
                <OverlayTrigger
                  key="bottom"
                  placement="bottom"
                  overlay={
                    <Tooltip id="tooltip-bottom">Need Scheduling</Tooltip>
                  }
                ></OverlayTrigger>
                <span className="link_name">Need Scheduling</span>
              </Nav.Link>
              <Nav.Link href="/scheduled" className="link text-center">
                <OverlayTrigger
                  key="bottom"
                  placement="bottom"
                  overlay={<Tooltip id="tooltip-bottom">Scheduled</Tooltip>}
                ></OverlayTrigger>
                <span className="link_name">Scheduled</span>
              </Nav.Link>
              <Nav.Link href="/plan-pending" className="link text-center">
                <OverlayTrigger
                  key="bottom"
                  placement="bottom"
                  overlay={<Tooltip id="tooltip-bottom">Plan Pending</Tooltip>}
                ></OverlayTrigger>
                <span className="link_name">Plan Pending</span>
              </Nav.Link>
              <Nav.Link href="/plan-uploaded" className="link text-center">
                <OverlayTrigger
                  key="bottom"
                  placement="bottom"
                  overlay={<Tooltip id="tooltip-bottom">Plan Uploaded</Tooltip>}
                ></OverlayTrigger>
                <span className="link_name">Plan Uploaded</span>
              </Nav.Link>
              <Nav.Link href="/upload" className="link text-center">
                <OverlayTrigger
                  key="bottom"
                  placement="bottom"
                  overlay={<Tooltip id="tooltip-bottom">Upload</Tooltip>}
                ></OverlayTrigger>
                <span className="link_name">Upload</span>
              </Nav.Link>
              <Nav.Link href="/faq" className="link text-center">
                <OverlayTrigger
                  key="bottom"
                  placement="bottom"
                  overlay={<Tooltip id="tooltip-bottom">FAQ</Tooltip>}
                ></OverlayTrigger>
                <span className="link_name">FAQ</span>
              </Nav.Link>
              <Nav.Link href="/pre-questions" className="link text-center">
                <OverlayTrigger
                  key="bottom"
                  placement="bottom"
                  overlay={<Tooltip id="tooltip-bottom">Pre-Questions</Tooltip>}
                ></OverlayTrigger>
                <span className="link_name">Pre-Questions</span>
              </Nav.Link>
              <Nav.Link
                href="/"
                className="link text-center"
                onClick={this.onLogoutClick}
              >
                <OverlayTrigger
                  key="bottom"
                  placement="bottom"
                  overlay={<Tooltip id="tooltip-bottom">Log-Out</Tooltip>}
                ></OverlayTrigger>
                <span className="link_name">Log-Out</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

Navigation.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Navigation);
