import NavBar from '../components/NavBar';
import ContactUsForm from '../components/contactUs/contactUsForm'
import Footer from '../components/footer/footer'
import React, { Component } from "react";

class ContactUsPage extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <ContactUsForm />
                <Footer />
            </div>
        )
    }
}

export default ContactUsPage;
