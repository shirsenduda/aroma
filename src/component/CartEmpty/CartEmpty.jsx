/* eslint-disable no-unused-vars */
import React from "react";
import "./cartEmpty.css";
import Loader from "../Loader/Loader";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
const CartEmpty = () => {
  return (
    <>
      <div className="cartEmpty">
        <div className="iconempty">
          <Loader />
        </div>
        <div className="Continuempty">Your Cart is empty?</div>
        
        <div className="Continuempty">
          <Link to={"/aroma/"} className="Li" >
            <button className="buttonnn" id="buttonid">Go to Home→</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartEmpty;
