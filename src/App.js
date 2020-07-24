import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/admin/Navbar";
import Footer from "./components/admin/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
