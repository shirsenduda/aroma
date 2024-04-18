/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";
import "./Pagefive.css";
import Productoneopt from "../../allProductoption/Productoptionone/Productoptionone";
import Producttwoopt from "../../allProductoption/Productoptiontwoo/Productoptiontwo";
import Productthreeopt from "../../allProductoption/Productoptionthree/Productoptionthree";
import Productitem from "../../Fooditems/Fooditem";
import Poductitemtwo from "../../Fooditems two/Fooditemtwo";
import Productitemthree from '../../Fooditems three/Fooditemthree'
const Pagefive = () => {
  const [data, setdata] = useState(0);

  const rendercondition = () => {
    if (data === 0) {
      return (
        <>
          <div className="productsparttt">
            <Productitem />
            <Productitem />
          </div>
        </>
      );
    } else if (data === 1) {
      return (
        <>
          <div className="productsparttt">
            <Poductitemtwo />
            <Poductitemtwo />
          </div>
          ;
        </>
      );
    }
    return (
      <>
        <div className="productsparttt">
            <Productitemthree/>
            <Productitemthree/>
          </div>
      </>
    );
  };

  const call = rendercondition()

  const dataValueChange = () => {
    setdata(0);
  };
  const dataValueChangeAgain = () => {
    setdata(1);
  };
  const dataValueChangeAgainagain = () => {
    setdata(2);
  };
  useEffect(() => {
    console.log("Mount food items");
  }, []);

  return (
    <>
      <div className="Product">
        <div className="zerorow">
          <div className="fooditemm">-Food Item-</div>
        </div>
        <div className="firstroww">
          <div className="productoption">
            <Productoneopt changedataAgain={dataValueChange} />
            <Producttwoopt changedata={dataValueChangeAgain} />
            <Productthreeopt changedatathree={dataValueChangeAgainagain} />
          </div>
        </div>
        <div className="line"></div>

        {/* Condition of changing fooditems data */}
        {call}
      </div>
    </>
  );
};

export default Pagefive;
