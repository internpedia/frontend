import React from 'react';
import './Homepage.css'

//Some changes made here

function Homepage() {
  return (
    <div className="Homepage">
         <header className="App-header">
    <html>
      <head>
          <link rel="stylesheet" type="text/css" href=".src/components/Homepage.css"/>
      </head>
  <body>
<header>
    <div class="header-container">
      <h1>Find Your Dream Internship</h1>
    </div>
</header>
    <div class = "bigcontainer"> 
    <div class = "text-section">
      <h2>Discover what students are saying about their recent internship experiences</h2>
    </div>
    <div class="container">
       <h3>Trending Reviews Of The Week</h3>
        <div class="box">Review</div>
        <div class="box">Review</div>
        <div class="box">Review</div>
        <div class="box">Review</div>
        <div class="box">Review</div>
    </div>
    <p class="description-paragraph">
        We've curated a list of the most sought-after companies and organizations where students have completed internships and shared their candid feedback. By diving into these reviews, you can gain valuable information about the companies that interest you and make more informed decisions about your future internships.
    </p>
  </div>

  <div class = "bigcontainer2"> 
  <h4>Connect with Us</h4>
  <div class="container2">
        <div class="box2">Slack</div>
        <div class="box2">Github</div>
        <div class="box2">LinkedIn</div>
  </div>
  </div>

</body>
</html>
</header> 
    </div>
  );
}

export default Homepage;
