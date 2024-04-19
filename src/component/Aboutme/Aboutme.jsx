/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import "./About.css";
import Aboutpageslider from "../Aboutpageslider/Aboutpageslider";
import Button from "../Buttons/Button";
import Buttontw from "../Butttontw/Buttontw";
import Aboutbox from "../Aboutbox/Aboutbox";
const Aboutme = () => {
  const AboutBox = [
    {
      id: 0,
      Name: "#Lorem, ipsum.",
      img: "https://images.unsplash.com/photo-1527596428171-7885b82c91c6?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      Name: "#Lorem, xyzzz.",
      img: "https://images.unsplash.com/photo-1583555929401-a411458578f9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      Name: "#Lorem,dolor.",
      img: "https://images.unsplash.com/photo-1517958911667-09c05f6cd698?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <>
      <div className="Aboutme">
        <div className="topAboutpart">
          <div className="topAboutpartleft">
            <Aboutpageslider />
          </div>
          <div className="topAboutpartright">
            <div className="topAboutpartrighttop">
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
                  </span>
                  <br />
                  <span className="rovvs">
                    {/* <Buttontw getstart="" /> */}
                    <button className="abiutbut">GET STARTED</button>
                  </span>
                </div>
              </div>
            </div>
            <div className="topAboutpartrightbottom">
              {AboutBox.map((item) => (
                <Aboutbox about={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
