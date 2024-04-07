/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./About.css";
const Aboutbox = ({ about }) => {
  return (
    <>
      <div className="aboutbox">
        <img src={about.img} alt="" />
        <span className="lo">{about.Name}</span>
      </div>
    </>
  );
};

export default Aboutbox;
