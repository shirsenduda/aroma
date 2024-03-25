/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Testimonialsingle.css";
const Testimonialsingle = ({Testimoniall}) => {
  return (
    <>
      <div className="Testimonialmain">
        <div className="partonetesti">
          <div className="circle1testi">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div className="parttwotesti">Jenny Roy</div>
        <div className="partthreetesti">
          <div className="starstesti">
            <img src="/public/img/start.svg"  alt="" />
          </div>
          <div className="starstesti">
            <img src="/public/img/start.svg"  alt="" />
          </div>
          <div className="starstesti">
            <img src="/public/img/start.svg"  alt="" />
          </div>
          <div className="starstesti">
            <img src="/public/img/start.svg"  alt="" />
          </div>
        </div>
        <div className="partfourtesti">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          maiores totam magnam.
        </div>
        <div className="partfivetesti">
          <div className="instatest">
            <i className="ri-instagram-line"></i>
          </div>
          <div className="instatest">
            <i className="ri-twitter-fill"></i>
          </div>
          <div className="instatest">
            <i className="ri-facebook-circle-fill"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonialsingle;
