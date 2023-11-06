import React from "react";
import "./SignUp.css";

//Some changes made here

function SignUp() {
  return (
    <div>
      <div className= "signinAll">
        <h1 className = 'signinHeader'> Want to leave a review? </h1>
        <p className = "belowHeader">Sign up to share your internship experience with the world!</p>
      <div className = "signinBox"> 
        <div className = "firstLast">
        <div className= "first">
          <form className ="responseBox">
            <label> First Name
            </label>
            <input type = 'text' id = "FN"></input>
          </form>
        </div>
        <div className= "last">
        <form className ="responseBox">
            <label> Last Name
            </label>
            <input type = 'text' id = "LN"></input>
          </form>
        </div>
        </div>
        <div className = "userName"> 
        <form className ="responseBox">
            <label> Username
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

export default SignUp;
