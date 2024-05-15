/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Coffeeicon from "../component/Coffeeicon/Coffeeicon";
import { useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Loginmain.css";
import Navbar from "../component/Nav/Navbar";
import Layout from "../component/Layout/Layout";
// import Signup from '../component/Sign-Up/Sign-Up'
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../FirebaseAuth/FirebaseAuth";


const SighUp = ({ cart, setProgress, userName }) => {
  const navigateLogin = useNavigate();
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
    console.log("Mountt");
  }, []);
  const locomotiveScroll = new LocomotiveScroll();
  const tl = gsap.timeline();
  const tll = gsap.timeline();
  const container = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline();
    const tll = gsap.timeline();

    // 🤓animation Part:-
    const animation = () => {
      tl.from(
        ".burger,.partonenav,.parttwonav,.partthreenav",
        {
          y: -10,
          duration: 2, // seconds
          delay: 0.5,
          opacity: 0,
          stagger: 0.3,
          z: -300,
          ease: "power1.inOut",
        },
        { scope: container }
      );
      tll.from(
        ".login-container,.coffeeicon",
        {
          y: 15,
          duration: 2, // seconds
          delay: 0.5,
          opacity: 0,
          stagger: 0.3,
          z: -300,
          ease: "power1.inOut",
        },
        { scope: container }
      );
    };
    animation();
  });

  // userSighup State
  const [UserSignUp, setUserSignUp] = useState({
    username: "",
    email: "",
    password: "",
  });
  const FormHandler = (e) => {
    setUserSignUp({ ...UserSignUp, [e.target.id]: e.target.value });
    console.log(UserSignUp);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    if (!UserSignUp.username || !UserSignUp.email || !UserSignUp.password) {
      // alert("Fill all field");
      return toast.error("All Field are require");
    } else {
      createUserWithEmailAndPassword(
        auth,
        UserSignUp.email,
        UserSignUp.password
      )
        .then(async (res) => {
          const user = res.user;
          await updateProfile(user, {
            displayName: UserSignUp.username,
          });

          navigateLogin("/aroma/Login");
        })
        .catch((err) => toast.error(err.message));
    }
  };
  return (
    <Layout>
      <Navbar Cart={cart} />
      <div className="Logincs" ref={container}>
        <div className="logincstw">
          <Coffeeicon />
          {/* <Signup/> */}
          <div className="login-container">
            <form className="login-form">
              <p className="heading">Sign-Up</p>
              <p className="paragraph">Sign to your account</p>
              <div className="input-group">
                <input
                  autoComplete="off"
                  onChange={FormHandler}
                  required=""
                  placeholder="Username"
                  id="username"
                  type="text"
                  value={UserSignUp.username}
                />
              </div>
              <div className="input-group">
                <input
                  autoComplete="off"
                  onChange={FormHandler}
                  required=""
                  placeholder="Email"
                  name="Email"
                  id="email"
                  type="text"
                  value={UserSignUp.email}
                />
              </div>
              <div className="input-group">
                <input
                  autoComplete="off"
                  onChange={FormHandler}
                  required=""
                  placeholder="Password"
                  name="password"
                  id="password"
                  type="text"
                  value={UserSignUp.password}
                />
              </div>
              <button className="signin" onClick={handleSumbit}>
                Sign-Up
              </button>

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
          <Coffeeicon />
        </div>
      </div>
    </Layout>
  );
};

export default SighUp;
