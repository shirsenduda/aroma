/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Aboutme from "../component/Aboutme/Aboutme";
import { useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Loginmain.css";
import Page2 from "../component/allpages/Page2/Pagetwo";
import Cheaf from "../component/Cheaf/Cheaff";
import Blogs from "../component/Blogs/Blog";
import Layout from "../component/Layout/Layout";
import Navbar from "../component/Nav/Navbar";

const About = ({cart,setProgress}) => {
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
          scale: 0.5,
          ease: "power1.inOut",
        },
        { scope: container }
      );
      tll.from(
        ".topAboutpartrighttop",
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
  
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
    console.log("Mountt");
  }, []);
  // .aboutbox
  return (
    <Layout>
      <Navbar Cart={cart}/>
      <div className="aboutmainn" ref={container}>
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
        <h1 className="Blogtext">Blogs</h1>
        <div className="blo">
          <div className="blogimg">
            <img src="./img/Blog.png" alt="" />
          </div>
          <Blogs />
        </div>
      </div>
    </Layout>
  );
};

export default About;
