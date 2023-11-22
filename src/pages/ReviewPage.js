import React from 'react';
import "./ReviewPage.css";

//Some changes made here

function ReviewPage() {
  return (
    <div>
    <div className= "writeReview">
        <h1 className = 'writereviewHeader'> Write a Reviw: UI/UX designer </h1>
        <p className = "belowHeader">Made : San Francisco, CA</p>
      <div className = "writereviewBox"> 
        <div className = "rating">
        <div className= "first">
          <form className ="responseBox">
            <label> Rating
            </label>
            <input type = 'text' id = "FN"></input>
          </form>
        </div>
        <div className= "title">
        <form className ="responseBox">
            <label> Title
            </label>
            <input type = 'text' id = "LN"></input>
          </form>
        </div>
        </div>
        <div className = "description"> 
        <form className ="responseBox">
            <label> How was the interview process like for you? 
            </label>
            <input type = 'text' id = "UN"></input>
          </form>
        </div>
        <div className = "email">
        <form className ="responseBox">
            <label> Email Address
            </label>
            <input type = 'text'  id = "EM"></input>
          </form>
        </div>
        <div className = "password"> 
        <form className ="responseBox">
            <label> Password
            </label>
            <input type = 'text'  id = "PS"></input>
          </form>
        </div>
        <button className = "signup"> Sign Up </button>
        <div className = "goToLogin"> 
        <p>Already have an account? <span >Log In.</span></p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ReviewPage;