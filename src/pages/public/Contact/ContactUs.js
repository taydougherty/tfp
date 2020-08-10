
import NavBar from "../../../components/public/NavBar/NavBar";
import ContactUsForm from "../../../components/public/contactUs/contactUsForm";
import React, { Component } from "react";

class ContactUsPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ContactUsForm />
      </div>
    );
  }
}

export default ContactUsPage