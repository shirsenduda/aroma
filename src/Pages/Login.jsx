/* eslint-disable no-unused-vars */
import React from "react";
import Loginn from "../component/Loginn/Login";
import Coffeeicon from "../component/Coffeeicon/Coffeeicon";
import { useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Loginmain.css";
const Login = () => {
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
    <>
      <div className="Logincs" ref={container}>
        <div className="logincstw">
          <Coffeeicon />
          <Loginn />
          <Coffeeicon />
        </div>
      </div>
    </>
  );
};

export default Login;
