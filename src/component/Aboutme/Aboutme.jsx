/* eslint-disable no-unused-vars */
import React from "react";
import "./About.css";
import Aboutpageslider from "../Aboutpageslider/Aboutpageslider";
import Button from "../Buttons/Button";
import Buttontw from "../Butttontw/Buttontw";
import Aboutbox from "../Aboutbox/Aboutbox";
const Aboutme = () => {
  return (
    <>
      <div className="Aboutme">
        <div className="topAboutpart">
          <div className="topAboutpartleft">
            <Aboutpageslider />
          </div>
          <div className="topAboutpartright">
            <div className="topAboutpartrighttop">
              {/* <img
                src="https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              /> */}
              <div className="topAboutpartrighttopone">
                <div className="abouttext">
                  <h1 className="rov">
                    Revolutionize Our with <br /> Commute Aroma Brand <br />
                  </h1>
                </div>
                <div className="abouttextt">
                  <span className="rovv">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nesciunt cum quasi expedita maiores voluptatibus voluptate?
                  </span>{" "}
                  <br />
                  <span className="rovvs">
                    <Buttontw getstart="GET STARTED" />
                  </span>
                </div>
              </div>
            </div>
            <div className="topAboutpartrightbottom">
              <Aboutbox />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
