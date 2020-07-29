import NavBar from '../Components/NavBar';
import ContactUsForm from '../Components/contactUs/'
import Footer from '../Components/footer/footer'
import React, { Component } from "react";

class ContactUsPage extends Component {

    state = {

    };

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
