/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Plus.css";
const Plus = ({passchangenumber}) => {
  return (
    <>
      <div className="plus" onClick={passchangenumber}>
        <div className="storeplus">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Plus;
