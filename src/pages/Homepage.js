import React, {useState} from 'react';
import './Homepage.css';
import { Link } from "react-router-dom";
import searchIcon from "../assets/images/search-glass-icon.png";
import dropDown from './images/Vector.png';
import blueDropDown from './images/blueDropdown.png';
import arrowIcon from './images/header-arrow-icon.png'


function Homepage() {

  const [search, setSearch] = useState('');
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="Homepage">
      <section className="landing-page-section">
        <div className="landing-page-container">
          
          <p className="hero-subtitle rounded-box">📝    Data-driven reviews by students, for students.</p>
          <h1 className="non-bold-title">Find Your Dream Internship</h1>
          
          <div className="search-container">
            <input type="text" placeholder="Search for anything" className="search-input" value={search} onChange={handleChange}/>
            <Link to="/search" state={{searched: search}} className="search-button">
              <img src={searchIcon} alt="Search" className="search-icon" />
            </Link>
          </div>

          <div className="filter-buttons" style={{marginBottom:'20px', marginTop:'30px'}}>
            <button className="filter-button industry">Industry <img src={dropDown}></img></button>
            <button className="filter-button career-role">Career Role <img src={blueDropDown}></img></button>
          </div>
          <div style={{display:"flex", justifyContent:"center", alignItems:'center', gap:'10px'}}>
            <p className="review-invitation">Have an internship you want to review? </p>
            <p className="review-link"> Write A Review</p>
            <img src={arrowIcon} style={{height: "10px"}}></img>
            
          </div>
          
          <p className="landing-page-intro"> Welcome to Internpedia, the leading platform for students to share their internship experiences and insights. Our mission is to provide a trusted space where you can read and leave honest reviews of internships across a multitude of industries.</p>
        </div>
      </section>

      <section className="trending-internships-section">
        <div className="trending-internships">
          <div className="overlap">
            
            <div className="div-framer">
              <div className="overlap-group">
                <img className="SVG" alt="Svg" src="src/assets/images/trending-internship-section-icon.png" />
                <div className="p-framer-text">
                  <div className="text-wrapper">Internships Of The Week</div>
                </div>
                <div className="pseudo" />
              </div>
            </div>
            
            <div className="div-framer-tro">
              <p className="heading-we-connect">
                Discover what students are saying about their recent internship experiences.
              </p>
            </div>
            <div className="div" />
            
            <div className="scaled-wrapper">
              <div className="SVG-2">
                <div className="next-button">
                  <div className="overlap-group-2">
                    <img className="next" alt="Next" src="next.png" />
                    <div className="ellipse" /> 
                  </div>
                </div>
                
                <div className="overlap-wrapper">
                  <div className="overlap-group-2">
                    <img className="img" alt="Next" src="image.png" />
                    <div className="ellipse" />
                  </div>
                </div>
                
                <div className="group">
                  <div className="group-2">
                    <img className="star" alt="Star" src="star-1.svg" />
                    <img className="star-2" alt="Star" src="star-2.svg" />
                    <img className="star-3" alt="Star" src="star-3.svg" />
                    <img className="star-4" alt="Star" src="star-4.svg" />
                    <img className="star-5" alt="Star" src="star-5.svg" />
                  </div>
                  
                  <div className="overlap-2">
                    <p className="lorem-ipsum-dolor">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                      ut&nbsp;&nbsp;labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea consequat.”
                    </p>
                    <div className="group-3">
                      <div className="overlap-group-wrapper">
                        <div className="overlap-3">
                          <img className="line" alt="Line" src="line-2.svg" />
                          <div className="group-4">
                            <div className="overlap-group-3">
                              <div className="text-wrapper-2">Name Surname</div>
                              <div className="text-wrapper-3">Position, Company Name</div>
                            </div>
                            <div className="image-wrapper">
                              <img className="image" alt="Image" src="image-2.png" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <img className="image-2" alt="Image" src="image-529.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="div-framer-quk">
              <p className="we-ve-curated-a-list">
                We&#39;ve curated a list of the most sought-after companies and organizations where students have completed
                internships and shared their candid feedback. By diving into these reviews, you can gain valuable
                information about the companies that interest you and make more informed decisions about your future
                internships.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="bigcontainer2">
      <p>Join The Community</p>
        <h4>Connect with Us</h4>
        <div className="container2">
          <div className="box2">Slack</div>
          <div className="box2">Github</div>
          <div className="box2">LinkedIn</div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
