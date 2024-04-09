/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Data.css";
const Data = ({data}) => {
  return (
    <>
      <div className="cardd">
        <div className="img">
          <img
            src={data.img}
            alt=""
          />
        </div>
        <div className="textBox">
          <div className="textContent">
            <p className="h1">{data.Name}</p>
            <span className="span">{data.time}</span>
          </div>
          <p className="p">{data.bio}</p>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Data;
