/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Bevarage.css";
const Bevarage = ({fooddatapass,Key}) => {
  return (
    <>
      <div className="cardbodyyy" key={Key}>
        <img
          src={fooddatapass.foodimg}
          alt=""
        />
        <div className="carttt">
          <i className="ri-shopping-cart-line"></i>
        </div>
        <div className="productnameei">{fooddatapass.foodname}</div>
        <p className="pp">Price:{fooddatapass.price}</p>
      </div>
    </>
  );
};

export default Bevarage;
