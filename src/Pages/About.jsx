/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Aboutme from "../component/Aboutme/Aboutme";
import { useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Loginmain.css";
import Page2 from "../component/allpages/Page2/Pagetwo";
import Cheaf from "../component/Cheaf/Cheaff";
const About = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const tl = gsap.timeline();
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
        ".topAboutpartleft",
        {
          y: 15,
          duration: 2, // seconds
          delay: 0.5,
          opacity: 0,
          stagger: 0.3,
          z: -300,
          scale:0.5,
          ease: "power1.inOut",
        },
        { scope: container }
      );
      tll.from(
        ".abouttext,.abouttextt",
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
      tll.from(
        ".topAboutpartrightbottom",
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
      gsap.from(".Swipertwo", {
        y: 20,
        duration: 1, // seconds
        delay: 0.5,
        opacity: 0,
        stagger: 0.5,
        z: -300,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".Swipertwo",
        },
      });
      gsap.from(".Employee,.cheafpa", {
        y: 20,
        duration: 1, // seconds
        delay: 0.5,
        opacity: 0,
        stagger: 0.5,
        z: -300,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".Employee,.cheafpa",
        },
      });
    };
    animation();
  });
// .aboutbox
  return (
    <>
      <div className="ref={container}">
        <div className="Logincs">
          <Aboutme />
        </div>
        <div className="slid">
          <Page2 />
        </div>
        <div className="blogs">
          <h1 className="Employee">Our Employee's</h1>
          <Cheaf />
        </div>
      </div>
    </>
  );
};

export default About;
