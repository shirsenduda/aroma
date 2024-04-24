/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Recipechangecircle.css";
const Recipechangecircle = ({passdata,Key}) => {
  return (
    <>
      <div className="recipecircletwooncircle" key={Key}>
        <img
          src={passdata.img}
          alt=""
        />
      </div>
    </>
  );
};

export default Recipechangecircle;
