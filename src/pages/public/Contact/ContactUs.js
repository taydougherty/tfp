
import NavBar from "../../../Components/public/NavBar";
import ContactUsForm from "../../../Components/public/contactUs/contactUsForm";
import Footer from "../../../Components/public/footer/footer";
import React, { Component } from "react";

class ContactUsPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ContactUsForm />
        <Footer />
      </div>
    );
  }
}

export default ContactUsPage;
