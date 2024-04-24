/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Recipescomponenttwo.css";
const Recipescomponenttwo = ({passrecipedatatwo,Key}) => {
  return (
    <>
      <div className="recpichild" key={Key}>
        <div className="imgstorerec">
          <img
            src={passrecipedatatwo.imgrecipetwo}
            alt=""
          />
        </div>
        <div className="imgstorerectw">
          <div className="smtex">{passrecipedatatwo.headingrecipetwo}</div>
          <div className="smtexvx">{passrecipedatatwo.namerecipetwo}</div>
          <div className="smtexvx">{passrecipedatatwo.namerecipetwoo}</div>
        </div>
      </div>
    </>
  );
};

export default Recipescomponenttwo;
