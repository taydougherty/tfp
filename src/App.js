import React from "react";
import "./App.css";

import Navigation from "./components/admin/Navbar";
import Blog from "./pages/admin/Blog"

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <Blog />
      </div>
    </div>
  );
}

export default App;
