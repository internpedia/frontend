import React from 'react';
import './Homepage.css';

function Homepage() {
  return (
    <div className="Homepage">
      <header className="App-header">
        <div className="landing-page-container">
          <h1>Find Your Dream Internship</h1>
        </div>
      </header>

      <div className="bigcontainer">
        <div className="text-section">
          <h2>Discover what students are saying about their recent internship experiences</h2>
        </div>

        <div className="container">
          <h3>Trending Reviews Of The Week</h3>
          <div className="box">Review</div>
          <div className="box">Review</div>
          <div className="box">Review</div>
          <div className="box">Review</div>
          <div className="box">Review</div>
        </div>

        <p className="description-paragraph">
          We've curated a list of the most sought-after companies and organizations where students have completed internships and shared their candid feedback. By diving into these reviews, you can gain valuable information about the companies that interest you and make more informed decisions about your future internships.
        </p>
      </div>

      <div className="bigcontainer2">
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
