/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import './Productoptiontwo.css'
const Productoptionone = ({changedata}) => {
  return (
    <>
      <div className="productoptionone" onClick={changedata}>
        <div className="sideiconimg">
          <i className="ri-bread-fill"></i>
        </div>
        <div className="sideicondes">
          <div className="popular">Special</div>
          <div className="popularr">Bread</div>
        </div>
      </div>
    </>
  );
};

export default Productoptionone;
