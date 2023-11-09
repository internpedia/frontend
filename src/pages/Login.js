import React from "react";
import "./Login.css";
import getWindowDimensions from "../hooks/getWindowDimensions";

//Some changes made here

function Login() {
  return (
    <div>
      <div className="loginAll">
        <h1 className="loginHeader">Ready to leave a review? </h1>
        <p className="belowHeader">
          Log in to share your internship experience with the world!
        </p>
        <div className="loginBox">
          <div className="userName">
            <form className="responseBox">
              <label>Username</label>
              <input type="text" id="UN"></input>
            </form>
          </div>
          <div className="password">
            <form className="responseBox">
              <label>Password</label>
              <input type="text" id="PS"></input>
            </form>
          </div>
          <p className="forgot">Forgot your password?</p>
          <button className="login">Log In</button>
          <div className="goToSignin">
            <p>
              Don't have an acount?<span> Sign Up.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
