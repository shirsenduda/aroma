/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./RecipescomponentDrinksthree.css";
const Recipescomponent = ({passrecipedata,Key}) => {
  return (
    <>
      <div className="recpichild" key={Key}>
        <div className="imgstorerec">
          <img
            src={passrecipedata.imgrecipethreesand}
            alt=""
          />
        </div>
        <div className="imgstorerectw">
          <div className="smtex">{passrecipedata.headingrecipethreesand}</div>
          <div className="smtexvx">{passrecipedata.namerecipethreesand}</div>
          <div className="smtexvx">{passrecipedata.namerecipetwooosand}</div>
        </div>
      </div>
    </>
  );
};

export default Recipescomponent;
