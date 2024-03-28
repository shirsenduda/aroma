
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Ourmenudata.css";
const Ourmenudata = ({datta}) => {
  return (
    <>
      <div className="xyzz">
        <div className="Ourmenudata">
          <h5>{datta.price}</h5>
          <h3>{datta.name}</h3>
        </div>
        <div className="linex">
          <div className="boxline"></div>
        </div>
      </div>
    </>
  );
};

export default Ourmenudata;
