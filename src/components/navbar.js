import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav style={{ display: "flex", alignItems: "center" }}>
      <Link className="logo" to="/" style={{ marginRight: "auto" }}>
        GOODSON FILM
      </Link>

      <HashLink to="/#videos">Videos</HashLink>
      <HashLink to="/#photos">Photos</HashLink>
      <HashLink to="/#AboutUs">About Us</HashLink>
    </nav>
  );
}

export default Navbar;
