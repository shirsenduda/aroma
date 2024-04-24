/* eslint-disable no-unused-vars */
import React from "react";
import "./Recipe.css";

import { useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Recipescomponent from "../component/Recipescomponent/Recipescomponent";
import Recipechangecircle from "../component/Recipechangecircle/Recipechangecircle";
import Recipescomponenttwo from "../component/Recipescomponenttwo/Recipescomponenttwo";
import Recipescomponentthree from "../component/Recipescomponentthree/Recipescomponentthree";
const Recipe = () => {
  const circleimgdata = [
    {
      id: 0,
      img: "https://images.unsplash.com/photo-1514919224949-507c703a3a88?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1628676825875-031ad212c31e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const receipedata = [
    {
      key: 0,
      imgrecipe:
        "https://images.unsplash.com/photo-1571328003758-4a3921661729?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headingrecipe: "Lorem ipsum dolor",
      namerecipe: "Cold Coffee",
      namerecipetwo: "with Chocolate",
    },
    {
      key: 1,
      imgrecipe:
        "https://www.nescafe.com/in/sites/default/files/styles/rlp_desktop/public/dalgona-coffee-recipe-grid-view-desktop.jpg?itok=ePFL4L3B",
      headingrecipe: "Lorem ipsum dolor",
      namerecipe: "Dalgona Coffee",
      namerecipetwo: "with Ice",
    },
  ];
  const receipedatatwo = [
    {
      key: 0,
      imgrecipetwo:
        "https://plus.unsplash.com/premium_photo-1671660015348-0bfcc2e0b8cf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headingrecipetwo: "Lorem ipsum dolor",
      namerecipetwo: "Hot Cocoa",
      namerecipetwoo: "with candy",
    },
    {
      key: 1,
      imgrecipetwo:
        "https://images.unsplash.com/photo-1631885408212-4520b2a27a21?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headingrecipetwo: "Lorem ipsum dolor",
      namerecipetwo: "Cold Latte",
      namerecipetwoo: "with Chocolate",
    },
  ];
  const receipedatathree = [
    {
      key: 0,
      imgrecipethree:
        "https://images.unsplash.com/photo-1519148246701-3dc1897a7a21?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headingrecipethree: "Lorem ipsum dolor",
      namerecipethree: "Brownies",
      namerecipetwooo: "with Coffee",
    },
    {
      key: 1,
      imgrecipethree:
        "https://images.unsplash.com/photo-1542326237-94b1c5a538d4?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headingrecipethree: "Lorem ipsum dolor",
      namerecipethree: "Icecreame",
      namerecipetwooo: "with Cocoa",
    },
  ];
  const locomotiveScroll = new LocomotiveScroll();
  // Gsap code write
  const container = useRef();
  gsap.registerPlugin(ScrollTrigger);
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
  return (
    <>
      <div className="Recipe" ref={container}>
        <div className="Recipemain">
          <div className="recipecircle">
            <div className="recipeadv">
              <img
                src="https://images.unsplash.com/photo-1586558284960-362f8577f94d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="descc">
                <h3 className="Discover">DISCOVER</h3>
                <h1 className="Discoverr">Coffee Recipes</h1>
                <div className="Discoverrr">
                  <div className="Discoverrrone">
                    From a classic latté to deliciously chilled smoothies, try
                    making your
                  </div>
                  <div className="Discoverrrtwo">
                    favorite Cold coffee recipes at home and share a snap of
                    your
                  </div>
                  <div className="Discoverrrthree">
                    creations using the hashtag #Aroma Recipes
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="recipecircletwo">
            <div className="recipecircletwoon">
              <div className="childrec">
                {circleimgdata.map((item, key) => (
                  <Recipechangecircle passdata={item} Key={key} />
                ))}
              </div>
            </div>
            <div className="recipystore">OUR TOP RECIPES</div>
            <div className="recipystoreon">
              {receipedata.map((itemtwo, key) => (
                <Recipescomponent passrecipedata={itemtwo} Key={key} />
              ))}
            </div>
            <div className="recipystoreon">
              {receipedatatwo.map((itemtwo, key) => (
                <Recipescomponenttwo passrecipedatatwo={itemtwo} key={key} />
              ))}
            </div>
            <div className="recipystoreon">
              {receipedatathree.map((itemtwo, key) => (
                <Recipescomponentthree
                  passrecipedatathree={itemtwo}
                  key={key}
                />
              ))}
            </div>
            <div className="refreshdata">
              <div className="storerefresh">
                <i className="ri-refresh-line refreshicon"></i>
                <h5 className="refreshname">Refresh</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
