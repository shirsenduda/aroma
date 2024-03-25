/* eslint-disable no-unused-vars */
"use client";
import React, { useState } from "react";
import Hamburder from "../Hamburger/Hamburger";
import Cross from '../Cross/Cross'
import Search from '../Search/Search'
import Cart from '../Cart/Cart'
import Button from '../Buttons/Button'
import "./Nav.css";
import './sidenav.css'
const Navbar = () => {
  const [bt, setbt] = useState("Login");
  const [btt, setbtt] = useState("Sign-Up");
  const [Slide, setSlide] = useState(true);
  const togglefunction = () => {
    setSlide((item) => !item);
  };
  return (
    <>
      <div className="Nav">
        <Hamburder togle={togglefunction} />
        
        <div className="partonenav">
        <img src="/img/jj.svg" alt="" />
        </div>
        <div className="parttwonav">
        <h3 className="item">Home</h3>
        <h3 className="item">Service</h3>
        <h3 className="item">Menu</h3>
        <h3 className="item">About</h3>
        </div>
        <div className="partthreenav">
        <Search/>
        <Cart/>
        <Button bttt={bt}/>
        </div>
        
      </div>
      <div className={ Slide=== true ? "sidenav" : "sidenavtwo"}>
        <div className="partoneside">
        <Cross togle={togglefunction} />
        <div className="partonenavside">
        <img src="/img/logtw.svg" alt="" />
        </div>
        <Search/>
        </div>

        <div className="parttwonavside"></div>
        <div className="partthreenavside">
        <h3 className="itemm">Home</h3>
        <h3 className="itemm">Service</h3>
        <h3 className="itemm">Menu</h3>
        <h3 className="itemm">About</h3>
        </div>
        <div className="bttstore">
          <Button bt={bt}/>
          <Button bttt={btt}/>
          </div>
      
      </div>
      
    </>
  );
};

export default Navbar;
