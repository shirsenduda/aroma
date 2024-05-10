/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Loginn from "../component/Loginn/Login";
import Coffeeicon from "../component/Coffeeicon/Coffeeicon";
import { useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Loginmain.css";
import Navbar from "../component/Nav/Navbar";
import Layout from "../component/Layout/Layout";
const Login = ({ cart, setProgress }) => {
  const locomotiveScroll = new LocomotiveScroll();
  const tl = gsap.timeline();
  const tll = gsap.timeline();
  const container = useRef();

  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
    console.log("Mountt");
  }, []);
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
          <Loginn />
          <Coffeeicon />
        </div>
      </div>
    </Layout>
  );
};

export default Login;
