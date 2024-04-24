/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Recipescomponent.css";
const Recipescomponent = ({passrecipedata,Key}) => {
  return (
    <>
      <div className="recpichild" key={Key}>
        <div className="imgstorerec">
          <img
            src={passrecipedata.imgrecipe}
            alt=""
          />
        </div>
        <div className="imgstorerectw">
          <div className="smtex">{passrecipedata.headingrecipe}</div>
          <div className="smtexvx">{passrecipedata.namerecipe}</div>
          <div className="smtexvx">{passrecipedata.namerecipetwo}</div>
        </div>
      </div>
    </>
  );
};

export default Recipescomponent;
