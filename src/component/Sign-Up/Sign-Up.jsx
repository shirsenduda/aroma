/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Sign-Up.css";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const FormHandler = (e) => {
    if (e.target.id === "email") {
      setemail(e.target.value);
      console.log(e.target.value);
    } else if (e.target.id === "password") {
      setpassword(e.target.value);
      console.log(e.target.value);
    }else{
      setusername(e.target.value);
      console.log(e.target.value);
    }
  };
  return (
    <>
      <div className="login-container">
        <form className="login-form">
          <p className="heading">Sign-Up</p>
          <p className="paragraph">Sign to your account</p>
          <div className="input-group">
            <input
              onChange={FormHandler}
              required=""
              placeholder="Username"
              id="username"
              type="text"
              value={username}

            />
          </div>
          <div className="input-group">
            <input
              onChange={FormHandler}
              required=""
              placeholder="Email"
              name="Email"
              id="email"
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
              value={password}
            />
          </div>
          <button className="signin">Sign-Up</button>

          <div className="bottom-text">
            <p>
              account?
              <Link to={"/aroma/Login"} className="a">
                Login
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
