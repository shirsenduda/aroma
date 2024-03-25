/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
"use Client";
import React, { useState } from "react";
import "./Page3.css";
import Donut from "../../Donut/Donut";
import Donuttwo from "../../Donuttwo/Donuttwo";
import Donutthree from "../../Donutthree/Donutthree";
import Coffeeicon from "../../Coffeeicon/Coffeeicon.jsx";
import Glow from '../../glow/Glow.jsx'
const Pagethree = () => {
  return (
    <>
      <div className="Swiperthree">
        <div className="Cookiesbox">
          <h1 className="bestwishes">Best Donuts For You</h1>
          <Coffeeicon/>
          <Glow/>
          <div className="Cookiesboxt">
            <Donut />
            <Donuttwo />
            <Donutthree />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagethree;

// const products = [
//   {
//     id: 0,
//     donutimg: "./img/x.png",
//     productname: "Choco Donut",
//     productdescription: "Lorem ipsum dolor sit amet ",
//     productdescriptionn: "mdolor sit amet cons. ",
//   },
//   {
//     id: 0,
//     donutimg: "./img/xxx.png",
//     productname: "Choco Donut",
//     productdescription: "Lorem ipsum dolor sit amet ",
//     productdescriptionn: "mdolor sit amet cons. ",
//   },
//   {
//     id: 0,
//     donutimg: "./img/x.png",
//     productname: "Choco Donut",
//     productdescription: "Lorem ipsum dolor sit amet ",
//     productdescriptionn: "mdolor sit amet cons. ",
//   },
// ];
{
  /* {products.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <Donut productdata={item} />
            ))} */
}
