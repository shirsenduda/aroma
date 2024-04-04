/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Ourmenume.css";
import Glow from "../glow/Glow";
import Ourmenudata from "../Ourmenudata/Ourmenudata";
const Ourmenume = () => {
  const Ourmenuddata = [
    {
      price: "$30.00",
      name: "Caramel"
    },
    {
      price: "$25.00",
      name: "chocolate "
    },
    {
      price: "$10.00",
      name: "double es"
    },
    {
      price: "$26.00",
      name: "Burger"
    },
  ];
  return (
    <>
      <div className="Ourmenu">
        <Glow />
        <div className="ourmenupartone">
          <div className="ourmenupartt">
           {Ourmenuddata.map((itemm)=>(
            <Ourmenudata datta={itemm} />
           ))}
          </div>
        </div>
        <div className="ourmenuparttw">
          <img src="./img/Ourmenuu.svg" alt="" />
        </div>
        <div className="ourmenupartthr">
          <div className="ourmenupartt">
          {Ourmenuddata.map((itemm)=>(
            <Ourmenudata datta={itemm} />
           ))}
          </div>
        </div>
        <div className="ourmenupartfr"></div>
      </div>
    </>
  );
};

export default Ourmenume;
