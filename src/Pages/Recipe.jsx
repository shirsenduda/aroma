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
import Pageseven from "../component/allpages/Page7/Pageseven";
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
      key: 2,
      imgrecipetwo:
        "https://images.unsplash.com/photo-1571328003758-4a3921661729?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headingrecipetwo: "Lorem ipsum dolor",
      namerecipetwo: "Cold Coffee",
      namerecipetwoo: "with Chocolate",
    },
    {
      key: 3,
      imgrecipetwo:
        "https://images.unsplash.com/photo-1571328003758-4a3921661729?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headingrecipetwo: "Lorem ipsum dolor",
      namerecipetwo: "Cold Coffee",
      namerecipetwoo: "with Chocolate",
    },
  ];
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
              {receipedata.map((itemtwo, key) => (
                <Recipescomponent passrecipedata={itemtwo} Key={key} />
              ))}
            </div>
            <div className="recipystoreon">
              {receipedata.map((itemtwo, key) => (
                <Recipescomponent passrecipedata={itemtwo} Key={key} />
              ))}
            </div>
            <div className="refreshdata">
              <div className="storerefresh">
                <i className="ri-refresh-line refreshicon"></i>
                <h5 className="refreshname">Refresh</h5>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Recipe;
