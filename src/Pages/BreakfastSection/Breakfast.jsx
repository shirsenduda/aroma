/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import "./Breakfast.css";
import Pagefive from "../../component/allpages/Page5/Pagefive";
import LocomotiveScroll from "locomotive-scroll";
import AdvatiseSection from "../../component/AdvatiseSection/AdvatiseSection";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Layout from "../../component/Layout/Layout";
import Navbar from "../../component/Nav/Navbar";

const Breakfast = ({Addtocarti,cart,setProgress}) => {
  
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
          ease: "power1.inOut",
        },
      });
    };
    animation();
    //
  });
  
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
    console.log("Mountt");
  }, []);
  gsap.registerPlugin(ScrollTrigger);
  return (
    <Layout>
      <Navbar Cart={cart}/>
      <div className="Breakfast" ref={container}>
        <div className="Breakfastchild">
          <div className="bannerbreak">
            <AdvatiseSection
              Breakfastname="# Breakfast"
              breakfastimg="https://images.unsplash.com/photo-1707569518073-d698b6e83f84?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <Pagefive AddToCart={Addtocarti} />
        </div>
      </div>
    </Layout>
  );
};

export default Breakfast;
