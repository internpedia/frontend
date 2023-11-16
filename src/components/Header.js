import React from "react";
import "./Header.css";
import { rich_black, white } from "../colors";
import { Link, BrowserRouter as Router } from "react-router-dom";

function Header() {
  return (
    <div
      className="headerContainer"
      style={{ backgroundColor: rich_black, color: white }}
    >
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
          <Link to="/">Write a Review</Link>
          <Link to="/" style={{ marginLeft: "15px", marginRight: "15px" }}>
            Contact Us
          </Link>
          <Link to="/">Profile</Link>
        </Router>
      </div>
    </div>
  );
}

export default Header;
