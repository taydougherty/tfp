
import NavBar from "../../../components/public/NavBar";
import ContactUsForm from "../../../components/public/contactUs/contactUsForm";
import Footer from "../../../components/public/footer/footer";
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
