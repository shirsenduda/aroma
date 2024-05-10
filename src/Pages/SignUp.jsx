/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Coffeeicon from "../component/Coffeeicon/Coffeeicon";
import { useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Loginmain.css";
import Navbar from "../component/Nav/Navbar";
import Layout from "../component/Layout/Layout";
import Signup from '../component/Sign-Up/Sign-Up'
const Login = ({ cart }) => {
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
  return (
    <Layout>
      <Navbar Cart={cart} />
      <div className="Logincs" ref={container}>
        <div className="logincstw">
          <Coffeeicon />
          <Signup/>
          <Coffeeicon />
        </div>
      </div>
    </Layout>
  );
};

export default Login;
