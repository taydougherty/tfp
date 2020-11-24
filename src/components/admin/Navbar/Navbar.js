import React, { Component } from "react";
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import "./Navbar.scss";


const StyledButton = withStyles({
  root: {
    background: '#008b8b',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    letterSpacing: '2px'
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
    };

    this.logout = this.logout.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.deAuthenticate = this.deAuthenticate.bind(this);
  }



  authenticate() {
    this.setState({
      authenticated: true,
    });
  }

  deAuthenticate() {
    this.setState({
      authenticated: false,
    });
  }

  logout() {
    axios
      .get("/user/logout")
      .then(
        function (data) {
          this.deAuthenticate();
          localStorage.removeItem("authenticated");
          localStorage.removeItem("user");
          window.location.reload();
        }.bind(this)
      )
      .catch(function (err) {
        console.log(err);
      });
  }

  render() {

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-nav ">
          <div className="nameLogo float-left">Sheila Mojtehedi</div>
          <div className="ml-auto">
            <StyledButton className="logout-btn " type="submit" onClick={this.logout}>LOG OUT</StyledButton>
          </div>
        </nav >
      </div >
    );
  }

}

export default Navigation;
