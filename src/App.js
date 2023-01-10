import React from "react";
import Landing from "./pages/Landing";
import Navbar from "./components/navbar.js";
import AboutUs from "./components/AboutUs.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" exact element={<Landing />} />
        <Route path="/about" exact element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
