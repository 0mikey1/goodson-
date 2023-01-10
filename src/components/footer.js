import React from "react";
import "../styles/footer.css";
import { HashLink } from "react-router-hash-link";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>

          <div className="col-md-3">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/#videos">Videos</a>
              </li>
              <li>
                <HashLink to="/#photos"> Photos</HashLink>
              </li>
              <li>
                <HashLink to="/#AboutUs"> About Us</HashLink>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="copyright">
          Copyright &copy; 2022 Goodson Film. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
