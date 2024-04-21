/* eslint-disable no-unused-vars */
import React from "react";
import "./Recipe.css";
import { useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Recipe = () => {
  const locomotiveScroll = new LocomotiveScroll();
  // Gsap code write
  return (
    <>
      <div className="Recipe">
        <div className="Recipemain">
          {/* <div className="recipecircle">
            <div className="recipeadv">
              <img
                src="https://images.unsplash.com/photo-1586558284960-362f8577f94d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="descc"></div>
            </div>
          </div>
          <div className="recipecircletwo"></div> */}
        </div>
      </div>
    </>
  );
};

export default Recipe;
