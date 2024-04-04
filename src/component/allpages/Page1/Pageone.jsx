/* eslint-disable no-unused-vars */

import React from "react";
import "./Page1.css";
import Nav from "../../Nav/Navbar.jsx";
import Swiper from "../../Swiperjs/Swiper.jsx";
import Coffeeicon from "../../Coffeeicon/Coffeeicon.jsx";
import Write from "../../rotatecup/write.jsx";
import "./secondpart.css";
import "./thirdpart.css";

const Pageone = () => {
  return (
    <>
      <div className="Pageone">
        <div className="secondpart">
          <img src="./img/Group 21.png" alt="" />
          <Nav />
          <div className="partone">
            <Coffeeicon />
            <div className="h1">
              Brewing Moments
              <br />
              Good Memories
            </div>

            <div className="partonesecond">
              <div className="onem">
                <div className="circlediv">
                  <div className="circle1">
                    <img
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>
                  <div className="circle2">
                    <img
                      src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>
                  <div className="circle3">
                    <img
                      src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>
                  <h4>1M +</h4>
                </div>

                <div className="onedes">Satisfied Customer</div>
                <Coffeeicon />
              </div>
              <div className="coffimg">
                <img
                  src="https://images.unsplash.com/photo-1608613116093-669b66163a76?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="parttwo">
            <div className="parttwosecond">
              <div className="xyz">
                <Write />
                <div className="beans">
                  <Swiper />
                </div>
              </div>
              <div className="parttwosecondonee">
                <Coffeeicon />
                <div className="offer">
                  <div className="circle4">
                    <img
                      src="https://images.unsplash.com/photo-1530373239216-42518e6b4063?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>

                  <h6 className="Fra">Frappuccino</h6>

                  <div className="offer1">
                    <p className="fiftypercent">Up 50% Discount</p>
                  </div>
                  <div className="arroww">
                    <i className="ri-arrow-right-down-line"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="parttwothird">
              <div className="parttwosecondone">
                <i className="ri-instagram-line"></i>
              </div>
              <a href="https://github.com/shirsenduda/aroma" className="aa">
              <div className="parttwosecondtwo">
              <i className="ri-github-fill"></i>
              </div>
              </a>
              
              <div className="parttwosecondthree">
                <i className="ri-discord-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pageone;
