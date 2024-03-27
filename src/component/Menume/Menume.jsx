/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Menume.css";
import Blendcompo from "../Blendcompo/Blendcompo";
const Aboutme = () => {
  const blenddata = [
    {
      imgblend: "/img/onee.svg",
      nameblend: "Black Coffee",
    },
    {
      imgblend: "/img/twee.svg",
      nameblend: "Milk Coffee",
    },
    {
      imgblend: "/img/thee.svg",
      nameblend: "Milk Foam",
    },
  ];

  return (
    <>
      <div className="Menume">
        <div className="firstboxmenu">
          <img src="/img/menu.jpg" alt="" />
        </div>
        <div className="firstboxmenutwo">
          <div className="topparttext">
            <h1 className="Headfood">
              DIGITAL <br /> EXPERIENCE
            </h1>
            <div className="Headfoodtw">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              amet tenetur earum beatae. Fugit alias cumque nulla eum saepe
            </div>
            <div className="Headfoodthr">
              <button className="buttontw">Order Now</button>
            </div>
          </div>
          <div className="bottomparttext">
            <div className="bottompartmenu">
              <img src="/img/coffee-white-SjY7b5HH.png" alt="" />
            </div>
            <div className="bottompartmenutw">
              <div className="partmenuon">
                <h1 className="prem">Premium Blen Coffee</h1>
                <p className="premm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, ex.
                </p>
              </div>
              <div className="partmenutw">
                <div className="partmenutwone">
                  {blenddata.map((item) => (
                    <Blendcompo blenddata={item} />
                  ))}
                  
                </div>
                <div className="tea">
                  <h3 className="teatex">Tea Story</h3>
                  <p className="teatexx">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, beatae.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
