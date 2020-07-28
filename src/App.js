import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/admin/Navbar";
import Login from "./components/admin/Login";
import Footer from "./components/admin/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
