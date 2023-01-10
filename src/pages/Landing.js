import React from "react";
import "../styles/landing.css";
import Features from "../components/features";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AboutUs from "../components/AboutUs";

import { HashLink } from "react-router-hash-link";

function Landing() {
  return (
    <div>
      <div className="container ">
        <div className="row d-flex align-items-center">
          <div className="col">
            <h1>Goodson Film</h1>
            <p className="text-white">
              {" "}
              Capturing your vision in stunning detail.{" "}
            </p>
          </div>
        </div>
      </div>

      <Features />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default Landing;
