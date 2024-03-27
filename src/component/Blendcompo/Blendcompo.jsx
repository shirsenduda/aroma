/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import './Blendcompo.css'
const Blendcompo = ({blenddata}) => {
  return (
    <>
      <div className="partoneho">
        <img src={blenddata.imgblend} alt="" />
        <h3 className="blend">{blenddata.nameblend}</h3>
      </div>
    </>
  );
};

export default Blendcompo;
