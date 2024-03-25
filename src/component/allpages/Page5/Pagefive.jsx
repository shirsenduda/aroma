/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
 "use client";
 import React, {  useState } from "react";
 import "./Pagefive.css";
 import Productoneopt from "../../allProductoption/Productoptionone/Productoptionone";
 import Producttwoopt from "../../allProductoption/Productoptiontwoo/Productoptiontwo";
 import Productthreeopt from "../../allProductoption/Productoptionthree/Productoptionthree";
 import Productitem from "../../Fooditems/Fooditem";
const Pagefive = () => {
  const [line, setline] = useState(true);
  const [linee, setlinee] = useState(true);

  const changeline = () => {
    setline((itemm) => !itemm);
  };
  const changelinee = () => {
    setlinee((itemm) => !itemm);
  };
  return (
    <>
      <div className="Product">
        <div className="zerorow">
          <div className="fooditemm">-Food Item-</div>
        </div>
        <div className="firstroww">
          <div className="productoption">
            <Productoneopt linefunctionn={changelinee} />
            <Producttwoopt linefunction={changeline} />
           
            <Productthreeopt />
          
          </div>
        </div>
        <div className="line">
          {/* <div className={line === true ? "lineonee" : "lineoneee"}></div>
          <div className={linee === false ? "lineonee" : "lineoneeee"}></div>
           */}
        </div>
        <div className="productsparttt">
           <Productitem /> 
           <Productitem /> 
          </div>
      </div>
    </>
  );
};

export default Pagefive;


