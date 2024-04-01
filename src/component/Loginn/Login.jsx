/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Login.css";
import Button from "../Buttons/Button";
const Login = () => {
  const [submit, setsubmit] = useState("Login");
  return (
    <>
      <div className="login-container">
        <form className="login-form">
          <p className="heading">Login</p>
          <p className="paragraph">Login to your account</p>
          <div className="input-group">
            <input
              required=""
              placeholder="Username"
              id="username name="
              type="text"
            />
          </div>
          <div className="input-group">
            <input
              required=""
              placeholder="Password"
              name="password"
              id="password"
              type="password"
            />
          </div>
          {/* <button type="submit">Login</button> */}
          <button className="signin">Login</button>

          <div className="bottom-text">
            <p>
              No account? <a href="#">Sign Up</a>
            </p>
            <p>
              <a href="#">Forgot password?</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
