/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import './Blendcompo.css'
const Blendcompo = ({blenddata}) => {
  return (
    <>
      <div className="partoneho">
        
       
        <div className="partonehot">
        <i className="ri-cup-line"></i>
        </div>
        <div className="partonehott">
        <h3 className="blend">{blenddata.nameblend}</h3>
        </div>
      </div>
    </>
  );
};

export default Blendcompo;
