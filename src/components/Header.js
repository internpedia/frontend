import React from "react";
import "./Header.css";
import { rich_black, white } from "../colors";
import { Link, BrowserRouter as Router } from "react-router-dom";

function Header() {
  return (
    <div className="headerContainer">
      <div className="inlineContent">
        <div class="logo">
          <img
            src="/images/IP_LOGO.png"
            alt="logo"
            className="headerLogo"
            style={{ width: "40px", height: "40px" }}
          />
        </div>
        <div class="internpedia" style={{ marginLeft: "12px" }}>
          INTERNPEDIA
        </div>
      </div>
      <div className="inlineContent">
        <Router>
          <Link className="Header-link" to="/">Write a Review</Link>
          <Link className="Header-link" to="/">
            Contact Us
          </Link>
          <Link className="Header-link" to="/">Profile</Link>
        </Router>
      </div>
    </div>
  );
}

export default Header;
