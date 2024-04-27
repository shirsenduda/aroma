/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import "./Breakfast.css";
import Pagefive from "../component/allpages/Page5/Pagefive";
import LocomotiveScroll from "locomotive-scroll";
import AdvatiseSection from "../component/AdvatiseSection/AdvatiseSection";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AdvatiseSectiont from "../component/AdvatiseSection two/AdvatiseSectiont";
const Breakfast = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const container = useRef();
  useGSAP(() => {
    const tl = gsap.timeline();
    const tll = gsap.timeline();
    const tlll = gsap.timeline();
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
        ".recipeadv,.Discover,.Discoverr,.Discoverrrone,.Discoverrrtwo,.Discoverrrthree",
        {
          y: 25,
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
  gsap.registerPlugin(ScrollTrigger);
  return (
    <>
      <div className="Breakfast" ref={container}>
        <div className="Breakfastchild">
          <div className="bannerbreak">
            {/* <AdvatiseSectiont Breakfastname = "# Breakfast" breakfastimg = "https://images.unsplash.com/photo-1707569518073-d698b6e83f84?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> */}
            <AdvatiseSection Breakfastname = "# Breakfast"  breakfastimg = "https://images.unsplash.com/photo-1707569518073-d698b6e83f84?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          </div>
          <Pagefive />
        </div>
      </div>
    </>
  );
};

export default Breakfast;
