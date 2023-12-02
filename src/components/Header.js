import React from "react";
import "./Header.css";
import { Link, NavLink, BrowserRouter as Router } from "react-router-dom";
import logoImage from "../assets/images/IP_LOGO.png";
import pfpIcon from "../assets/images/header-userpfp-icon.png";
import arrowIcon from "../assets/images/header-arrow-icon.png";

function Header() {
  return (
    <div className="headerContainer">
      <div className="inlineContent">
      <NavLink to="/" className="logoLink">
            <img
              src={logoImage}
              alt="logo"  
              className="headerLogo"
              style={{ width: "40px", height: "40px" }}
            />
            <div className="internpedia">INTERNPEDIA</div>
      </NavLink>
        
      </div>
      <div className="inlineContent">
       
        <NavLink to="/review" className="Header-link arrowLink">
          <div className="arrowLinkContent">
            Write a Review
            <img src={arrowIcon} alt="Arrow Icon" className="arrowIcon" />
          </div> 
        </NavLink>

        <NavLink className="Header-link arrowLink" to="/">
          <div className="arrowLinkContent">
            Contact Us
            <img src={arrowIcon} alt="Arrow Icon" className="arrowIcon" />
          </div>
        </NavLink>

        <NavLink className="Header-link profileLink" to="/userpage">
          <div className="profileLinkContent">
            Profile
            <img src={pfpIcon} alt="Profile Icon" className="profileIcon" />
          </div>
        </NavLink>

      </div>
    </div>
  );
}

export default Header;
