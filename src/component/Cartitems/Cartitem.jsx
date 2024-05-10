/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Cartitem.css";
import Muinus from "../muinus/Muinuss";
import Plus from "../Plus/Plus";
import cartdataitems from "../Cartitemdata/Cartitemsdata";
const Cartitem = () => {
  const [increment, setincrement] = useState(1);
  const changenumber = () => {
    setincrement((i) => i + 1);
  };

  useEffect(()=>{
    console.log("Ubdate state");
  },[])
  return (
    <>
      
        
      
    </>
  );
};

export default Cartitem;
