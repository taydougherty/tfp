import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ContactUs from '../src/Components/contactUs/contactUs'
import Footer from '../src/Components/footer/footer'

function App() {
  return (
    <div className="App">
      <div className="pageContainer">
        <div className="contentWrap">

        </div>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
