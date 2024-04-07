/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
"use client";
import React, { useState } from "react";
import Hamburder from "../Hamburger/Hamburger";
import Cross from "../Cross/Cross";
import Search from "../Search/Search";
import Cart from "../Cart/Cart";
import Button from "../Buttons/Button";
import "./Nav.css";
import "./sidenav.css";
import { Link } from "react-router-dom";
import Buttontw from "../Butttontw/Buttontw";
const Navbar = () => {
  const [bt, setbt] = useState("Login");
  const [btt, setbtt] = useState("Sign-Up");
  const [Slide, setSlide] = useState(true);
  const togglefunction = () => {
    setSlide((item) => !item);
  };
  return (
    <>
      {/* top Nav */}
      <div className="Nav">
        <Hamburder togle={togglefunction} />

        <div className="partonenav">
          <img src="./img/jj.svg" alt="" />
        </div>
        <div className="parttwonav">
          <h3 className="item">
            {" "}
            <Link to={"/aroma/"} className="Li">
              Home
            </Link>
          </h3>
          <h3 className="item">Service</h3>
          <h3 className="item">
            <Link to={"/aroma/Menu"} className="Li">
              {" "}
              Menu{" "}
            </Link>
          </h3>
          <h3 className="item">
            <Link to={"/aroma/about"} className="Li">
              {" "}
              About{" "}
            </Link>
          </h3>
        </div>
        <div className="partthreenav">
          <Search />
          <Cart />
          <Link to={"/aroma/Login"}>
            <Button bttt={bt} />
          </Link>
        </div>
      </div>

      {/* Side Nav */}
      <div className={Slide === true ? "sidenav" : "sidenavtwo"}>
        <div className="partoneside">
          <Cross togle={togglefunction} />
          <div className="partonenavside">
            <img src="./img/logtw.svg" alt="" />
          </div>
          <Search />
        </div>

        <div className="parttwonavside"></div>
        <div className="partthreenavside">
          <h3 className="itemm">
            <Link to={"/aroma/"} className="Li">
              Home
            </Link>
          </h3>
          <h3 className="itemm">Service</h3>
          <h3 className="itemm">
            <Link to={"/aroma/Menu"} className="Li">
              {" "}
              Menu{" "}
            </Link>
          </h3>
          <h3 className="itemm">
            <Link to={"/aroma/about"} className="Li">
              {" "}
              About{" "}
            </Link>
          </h3>
        </div>
        <div className="bttstore">
          <Link to={"/aroma/Login"} className="Li">
            {" "}
            <Buttontw login="Login" />{" "}
          </Link>

          <Buttontw sign="Sign-up" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
