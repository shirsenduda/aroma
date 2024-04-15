/* eslint-disable no-unused-vars */

import React from "react";
import "./Addtocart.css";
import Plus from "../Plus/Plus";
import Muinus from "../muinus/Muinuss";
import Cartitem from "../Cartitems/Cartitem";
const Addtocart = () => {
  return (
    <>
      <div className="cartboxmain">
        <div className="cartboxmainleft">
          <Cartitem/>
        </div>
        <div className="cartboxmainright">
          <div className="totalitems">
            <div className="priceinfo">PRICE DETAILS</div>
            <div className="price">
              <div className="pricetotalleft">Price (2 items) </div>
              <div className="pricetotalright">₹1,59,800</div>
            </div>
            <div className="price">
              <div className="pricetotalleft">Discount</div>
              <div className="pricetotalright">− ₹27,802</div>
            </div>
            <div className="price">
              <div className="pricetotalleft">Delivery Charges</div>
              <div className="pricetotalright">₹40 Free</div>
            </div>
            <div className="price">
              <div className="pricetotalleft">Secured Packaging Fee</div>
              <div className="pricetotalright">₹99</div>
            </div>
            <div className="pricetotal">
              <div className="pricetotalleft">Total Amount</div>
              <div className="pricetotalright">₹1,32,097</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addtocart;
