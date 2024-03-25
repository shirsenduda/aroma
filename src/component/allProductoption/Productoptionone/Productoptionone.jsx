/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import './Productoptionone.css'
const Productoptionone = ({linefunctionn}) => {
  return (
    <>
      <div className="productoptionone" onClick={linefunctionn}>
        <div className="sideiconimg">
          <i className="ri-cup-line"></i>
        </div>
        <div className="sideicondes">
          <div className="popular">Popular</div>
          <div className="popularr">Coffee</div>
        </div>
      </div>
    </>
  );
};

export default Productoptionone;
