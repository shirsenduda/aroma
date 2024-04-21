/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Appcss from "./App.module.css";
import "remixicon/fonts/remixicon.css";
import LocomotiveScroll from "locomotive-scroll";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Pageonee from "./component/allpages/Page1/Pageone";
import Pagetwoo from "./component/allpages/Page2/Pagetwo";
import Pagethree from "./component/allpages/Page3/Pagethree";
import PageFour from "./component/allpages/Page4/Pagefour";
import Pagefive from "./component/allpages/Page5/Pagefive";
import Pagesix from "./component/allpages/Page6/Pagesix";
import Pageseven from "./component/allpages/Page7/Pageseven";
//hello
const App = () => {
  const [ramu, setramu] = useState("hi");
  const locomotiveScroll = new LocomotiveScroll();
  const container = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline();
    const tll = gsap.timeline();
    const tlll = gsap.timeline();
    const tllll = gsap.timeline();
    const tlllll = gsap.timeline();

    // animation Part:-
    let animation = () => {
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
        ".h1,.circlediv,.onedes,.coffimg,.coffeeicon",
        {
          y: 35,
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
        ".write,.offer,.Swiper,.parttwothird",
        {
          y: 40,
          duration: 2, // seconds
          delay: 1,
          opacity: 0,
          stagger: 0.3,
          z: -300,
          scale: 0.4,
          ease: "power1.inOut",
        },
        { scope: container }
      );

      tllll.to(
        ".write",
        {
          duration: 1.5, // seconds
          delay: 0.5,
          width: 330,
          stagger: 0.3,
        },
        { scope: container }
      );
      tlllll.from(
        ".write",
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

      gsap.from(".page4", {
        y: 20,
        duration: 1, // seconds
        delay: 0.5,
        opacity: 0,
        stagger: 0.5,
        z: -300,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".page4",
        },
      });
     
      gsap.from(".Swipertwo", {
        y: 10,
        duration: 1, // seconds
        delay: 0.5,
        opacity: 0,
        stagger: 0.3,
        z: -300,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".Swipertwo",
        },
      });
      gsap.from(".Product", {
        y: 10,
        duration: 1, // seconds
        delay: 0.5,
        opacity: 0,
        stagger: 0.3,
        z: -300,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".Product",
        },
      });
      gsap.from(".pagesixx", {
        y: 10,
        duration: 1, // seconds
        delay: 0.5,
        opacity: 0,
        stagger: 0.3,
        z: -300,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".pagesixx",
        },
      });
      gsap.from(".Pageseven", {
        y: 10,
        duration: 1, // seconds
        delay: 0.5,
        opacity: 0,
        stagger: 0.3,
        z: -300,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".Pageseven",
        },
      });
      gsap.from(".Menume", {
        y: 10,
        duration: 1, // seconds
        delay: 0.5,
        opacity: 0,
        stagger: 0.3,
        z: -300,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".Menume",
        },
      });
    };

    // call animaton function
    animation();
  });
  return (
    <>
      <div className={Appcss.main} ref={container}>
        <Pageonee />
        <PageFour />
       
        <Pagetwoo />
        <Pagefive />
        <Pagesix />
        <Pageseven />
      </div>
    </>
  );
};

export default App;
