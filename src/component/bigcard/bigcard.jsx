/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./bgcard.css";
import Button from "../Buttons/Button";

const bigcard = () => {
  return (
    <>
      <div className="cardbgg">
        <img
          src="https://coffee-cafe-tcj.netlify.app/assets/coffee-beans-bg-Mg2HxwYr.png"
          alt=""
        />

        <div className="andro">
          <h1 className="Armac">
            Aroma Cafe is availabe for <br />
            Android and Ios
          </h1>
        </div>
        <div className="androo">
          <button className="playstore-button">
            <span className="icon">
              <svg
                fill="currentcolor"
                viewBox="-52.01 0 560.035 560.035"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier"></g>
                <g id="SVGRepo_tracerCarrier"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655"></path>
                </g>
              </svg>
            </span>
            <span className="texts">
              <span className="text-1">Download form</span>
              <span className="text-2">App store</span>
            </span>
          </button>
          <button className="playstore-button">
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3.60972 1.81396L13.793 12L3.61082 22.1864C3.41776 22.1048 3.24866 21.962 3.13555 21.7667C3.0474 21.6144 3.00098 21.4416 3.00098 21.2656V2.73453C3.00098 2.32109 3.25188 1.96625 3.60972 1.81396ZM14.5 12.707L16.802 15.009L5.86498 21.342L14.5 12.707ZM17.699 9.50896L20.5061 11.1347C20.9841 11.4114 21.1473 12.0232 20.8705 12.5011C20.783 12.6523 20.6574 12.778 20.5061 12.8655L17.698 14.491L15.207 12L17.699 9.50896ZM5.86498 2.65796L16.803 8.98996L14.5 11.293L5.86498 2.65796Z"></path>
              </svg>
            </span>
            <span className="texts">
              <span className="text-1">Download form</span>
              <span className="text-2">Play store</span>
            </span>
          </button>
        </div>
        {/* <Button btn="See More"/> */}
      </div>
    </>
  );
};

export default bigcard;
