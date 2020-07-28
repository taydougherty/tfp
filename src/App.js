import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/admin/Navbar";
// import Login from "./components/admin/Login";
import Register from "./components/admin/Register";
import Footer from "./components/admin/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <Login /> */}
      <Register />
      <Footer />
    </div>
  );
}

export default App;
