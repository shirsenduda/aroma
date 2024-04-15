/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Cartitem.css";
import Muinus from "../muinus/Muinuss";
import Plus from "../Plus/Plus";
import cartdataitems from "../Cartitemdata/Cartitemsdata";
const Cartitem = () => {
    const [increment, setincrement] = useState(1);
    const changenumber = ()=>{
        setincrement((i)=>i+1)
    }
  return <>{cartdataitems.map((item) => (
    <div className="itemscart">
          <div className="itemimg">
            <img
              src={item.productimg}
              alt=""
            />
          </div>
          <div className="itemdetail">
            <div className="itemname">{item.productname}</div>
            <div className="itemname">{item.productdes}</div>
            <div className="itemname">{item.productprice}</div>
          </div>
          <div className="itemplus">
            <div className="itemplusleft">
              <Muinus />
            </div>
            <div className="itemplusmid">
              <p>{increment}</p>
            </div>
            <div className="itemplusright">
              <Plus passchangenumber = {changenumber} />
            </div>
          </div>
        </div>
  ))}</>;
};

export default Cartitem;
