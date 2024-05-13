/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Menume from "../component/Menume/Menume";
import { useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./mainmenuu.css";
import Ourmenume from "../component/Ourmenume/Ourmenume";
import Coffeeicon from "../component/Coffeeicon/Coffeeicon";
import Productitem from "../component/Fooditems/Fooditem";
import Page4 from "../component/allpages/Page4/Pagefour";
import Pagethree from "../component/allpages/Page3/Pagethree";
import Layout from "../component/Layout/Layout";
import Navbar from "../component/Nav/Navbar";
const About = ({ cart, setProgress, userName }) => {
  const locomotiveScroll = new LocomotiveScroll();
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
    console.log("Mountt");
  }, []);
  const tl = gsap.timeline();
  const tll = gsap.timeline();
  const container = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline();
    const tll = gsap.timeline();
    const tlll = gsap.timeline();
    const tllll = gsap.timeline();
    const tlllll = gsap.timeline();

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
        ".Menume,.Headfood,.Headfoodtw,.Headfoodthr,.partlast,.coffeeicon",
        {
          y: 50,
          duration: 2, // seconds
          delay: 0.5,
          opacity: 0,
          stagger: 0.3,
          z: -300,
          ease: "power1.inOut",
        },
        { scope: container }
      );
      tlll.from(
        ".bottompartmenu,.partmenuon,.partmenutwone,.tea",
        {
          y: 10,
          duration: 2, // seconds
          delay: 0.7,
          opacity: 0,
          stagger: 0.3,
          z: -300,
          scale: 0.5,
          ease: "power1.inOut",
        },
        { scope: container }
      );
      tllll.to(
        ".bottompartmenu",
        {
          duration: 1.5, // seconds
          delay: 0.5,
          width: 330,
          stagger: 0.3,
        },
        { scope: container }
      );
      tlllll.from(
        ".bottompartmenu",
        {
          duration: 150, // seconds
          delay: 0.5,
          stagger: 0.3,
          rotation: 1440,
          repeat: -1,
          z: -300,
        },
        { scope: container }
      );
      gsap.from(".ourmen,.ourmenuparttw,.xyzz", {
        y: 10,
        duration: 1, // seconds
        delay: 0.5,
        opacity: 0,
        stagger: 0.3,
        z: -300,
        scale: 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".ourmen,.ourmenuparttw,.xyzz",
        },
      });
      gsap.from(".Swiperthreeee", {
        y: 10,
        duration: 1, // seconds
        delay: 0.5,
        opacity: 0,
        stagger: 0.3,
        z: -300,

        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".Swiperthreeee",
          ease: "power1.inOut",
        },
      });
      gsap.from(".bestwishes,.Cookiesboxt", {
        y: 20,
        duration: 1, // seconds
        delay: 0.6,
        opacity: 0,
        stagger: 0.5,
        z: -300,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".bestwishes,.Cookiesboxt",
        },
      });
    };
    animation();
  });
  return (
    <Layout>
      <Navbar userNami={userName} Cart={cart} />
      <div className="mainmenuuu" ref={container}>
        <Menume />
        <div className="secondmenuu">
          <div className="secondmenuuu">
            <h1 className="ourmen">Classic Coffee</h1>
          </div>
          <Ourmenume />
        </div>
        <div className="thirdmenuu">
          <Pagethree />
        </div>
      </div>
    </Layout>
  );
};

export default About;
