/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Login.css";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const FormHandler = (e) => {
    if (e.target.id === "username") {
      setemail(e.target.value);
      console.log(e.target.value);
    } else if (e.target.id === "password") {
      setpassword(e.target.value);
      console.log(e.target.value);
    }
  };
  return (
    <>
      <div className="login-container">
        <form className="login-form">
          <p className="heading">Login</p>
          <p className="paragraph">Login to your account</p>
          <div className="input-group">
            <input
              onChange={FormHandler}
              required=""
              placeholder="Username"
              id="username"
              type="text"
              value={email}
            />
          </div>
          <div className="input-group">
            <input
              onChange={FormHandler}
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
              No account?
              <Link to={"/aroma/SignUp"} className="a">
                Sign Up
              </Link>
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