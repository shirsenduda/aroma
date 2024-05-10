/* eslint-disable no-unused-vars */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React from "react";
import Offercss from "./Offer.module.css";

const Offer = () => {
  return (
    <>
      <div
        className={Offercss.box}
        // div modules
      >
        <div className={Offercss.slideone}>
          <div className={Offercss.storecup}>
            <img src="./img/addcup.svg" alt="" />
          </div>
          <div className={Offercss.storecup2}>
            <img src="./img/addcup.svg" alt="" />
          </div>
          <div className={Offercss.storecup3}>
            <img src="./img/addcup.svg" alt="" />
          </div>
          <div className={Offercss.storecup4}>
            <img src="./img/addcup.svg" alt="" />
          </div>
          <div className={Offercss.storecup5}>
            <img src="./img/addcup.svg" alt="" />
          </div>
          <div className={Offercss.storecup6}>
            <img src="./img/addcup.svg" alt="" />
          </div>
          <div className={Offercss.storecup7}>
            <img src="./img/addcup.svg" alt="" />
          </div>
          <div className={Offercss.storecup8}>
            <img src="./img/addcup.svg" alt="" />
          </div>
          <img src="./img/cop.svg" alt="" className={Offercss.cop} />
          <h1 className={Offercss.brew}>BREWSCAPE</h1>

          <div className={Offercss.maincir}>
            <div className={Offercss.storecup9}>
              <img src="./img/addcup.svg" alt="" />
            </div>
            <div className={Offercss.chaistore}>
              <img src="./img/chai.png" alt="" />
            </div>

            <button className={Offercss.bt1}>Cappuccino</button>
            <button className={Offercss.bt2}>
              4.2{" "}
              <div className={Offercss.star}>
                <img src="./img/starr.svg" alt="" />
              </div>
            </button>
            <button className={Offercss.bt3}>18K</button>
          </div>
          <div className={Offercss.leftp}>
            <div className={Offercss.people}>
              <div className={Offercss.circle}>
                <img
                  src="https://images.unsplash.com/photo-1601288496920-b6154fe3626a?q=80&w=1826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className={Offercss.circle2}>
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className={Offercss.circle3}>
                <img
                  src="https://images.unsplash.com/photo-1615496935451-de442613d722?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <h5>1M +</h5>
              <div className={Offercss.sat}>Satisfied Customer</div>
            </div>
            <div className={Offercss.describ}>
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                beatae impedit quasi voluptatem enim possimus!
              </h6>
            </div>
          </div>
          <div className={Offercss.rightp}>
            <div className={Offercss.rightcircle}>
              <img src="./img/fra.png" alt="" />
            </div>
            <div className={Offercss.frapp}>Frappuccino</div> <br />
            <div className={Offercss.chill}>Chilled Coffee Drink</div>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
