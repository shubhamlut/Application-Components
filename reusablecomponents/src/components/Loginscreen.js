import React from "react";
import "../styles/Loginscreen.css";

const Loginscreen = () => {
  return (
    <>
    <div className="loginwrapper">
      <div className="loginContainer">
        <div className="loginheader">
          <h3>Login</h3>
        </div>
        <div className="loginWrapper">
        <div className="loginContent">
          <input
            type="email"
            className="loginemail"
            id="email"
            name="email"
            placeholder="Email address"
            color=""
          />
          <input
            type="password"
            className="loginpassword"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="loginContentTwo">
            <span>
          <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            value="checked"
          />
          <label for="checkbox">Remember me</label>
          </span>
          <a href="https://www.example.com" target="_blank">Forgot password?</a>
        </div>
        <div className="loginButton">
          <input type="submit" className="primary-button" value="Login" />
        </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Loginscreen;
