/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Menume.css";
import Blendcompo from "../Blendcompo/Blendcompo";
import Coffeeicon from "../Coffeeicon/Coffeeicon";
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
            <div className="topparttexttw">
              <Coffeeicon />
              <div className="partlast">
                <button className="buttonthr">
                  <div className="circleth">
                    <img
                      src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>
                  Lorem ipsum dolor sit amet.
                  <div className="circleth">
                    <i className="ri-headphone-line"></i>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="bottomparttext">
            <div className="bottompartmenu">
              <img src="/img/coffee-white-SjY7b5HH.png" alt="" />
            </div>
            <div className="bottompartmenutw">
              <div className="partmenuon">
              <Coffeeicon/>
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
                  <p className="teatexx">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa, beatae.
                  </p>
                  
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
