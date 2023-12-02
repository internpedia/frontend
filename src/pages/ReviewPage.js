import React from 'react';
import "./ReviewPage.css";

//Some changes made here

function ReviewPage() {
  return (
    <div>
        <p className = "writeReviewHeader"> Write a Review: UI/UX designer </p>
        <p className = "belowHeader"> Meta : San Francisco, CA</p>

    <div className = "writereviewBox"> 

    <div className="outer-box">
    <span class="star">&#9733;</span>
           <p class="text">Rating:</p>
           <div class="star-rating">
               <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
            </div>

       </div>

        <div className="outer-box">
        <span class="star">&#9733;</span>
           <p class="text">Title:</p>
          <div className="responseBox">
              <input type="text" id="inputBox" placeholder="Give your review a title..."></input> 
          </div>
       </div>
      
      <div class="outer-box">
      <span class="star">&#9733;</span>
           <p class="text">Description:</p>
          <div className="responseBox">
            <input type="text" id="inputBox" placeholder="Write your review here..."></input> 
          </div>
       </div>

       <div className="outer-box">
           <p class="text">How was the interview process like for you?</p>
          <form className="responseBox">
              <input type="text" id="inputBox" placeholder="Describe your experience here..."></input> 
          </form>
       </div>

      <div className="outer-box">
           <p class="text">Compensation</p>
           <div class="circle"></div> 
           <p>Unpaid</p>
           <div class="circle"></div>
           <p>Paid</p>
       </div>

      <div className="outer-box">
           <p class="text">Did you get a return offer?</p>
           <p>no</p>
          <div class = "oval" > </div>
          <p>yes</p>
       </div>

        <div className="outer-box">
           <p class="text">Skills</p>
          <form className="responseBox">
            <input type="text" id="inputBox" placeholder="Keyword"></input> 
          </form>
       </div>

        <div className="outer-box">
           <p class="text">Attach Images</p>
          <form className="attachImages">
              <input type = 'text' id = "EM" placeholder="Upload Files"></input> 
          </form>
       </div>

        </div>

        <button className = "signup"> Submit </button>
      </div>
  );
}

export default ReviewPage;