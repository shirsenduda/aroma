/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";
import Hamburder from "../Hamburger/Hamburger";
import Cross from "../Cross/Cross";
import Search from "../Search/Search";
import Cart from "../Cart/Cart";
import "./Nav.css";
import "./sidenav.css";
import { Link } from "react-router-dom";
import Buttontw from "../Butttontw/Buttontw";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../../FirebaseAuth/FirebaseAuth";
import toast from "react-hot-toast";
const Navbar = ({ Cart, userNami }) => {
  const [bt, setbt] = useState("Login");
  const [btt, setbtt] = useState("Sign-Up");
  const [Slide, setSlide] = useState(true);
  const [searchtog, setsearchtog] = useState(true);
  const togglefunction = () => {
    setSlide((item) => !item);
  };
  const toglesearch = () => {
    setsearchtog((item) => !item);
  };
  const dropfunction = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  const windowscroll = dropfunction();

  useEffect(() => {
    console.log("Component Mount");
  }, []);
  useEffect(() => {
    console.log(Cart);
  }, [Cart]);

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        toast.success("Logout Successfully");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  const handleLoginpage = () => {
    auth
      .signOut()
      .then(() => {
        // toast.success("Logout Successfully");
      })
      .catch((error) => {
        // toast.error(error);
      });
  };

  // Profile Popup
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* top Nav */}
      <div className="Nav">
        <Hamburder togle={togglefunction} />

        <div className="partonenav">
          <img src="./img/Logootw.png" alt="" />
        </div>
        {searchtog === true ? (
          <>
            <div className="parttwonav">
              <h3 className="item">
                <Link to={"/aroma/Home"} className="Li">
                  Home
                </Link>
              </h3>

              <h3 className="item">
                <Link to={"/aroma/Menu"} className="Li">
                  Menu
                </Link>
              </h3>
              <h3 className="item">
                <Link to={"/aroma/Recipe"} className="Li">
                  Recipes
                </Link>
              </h3>
              <h3 className="item">
                <Link to={"/aroma/about"} className="Li">
                  About
                </Link>
              </h3>
            </div>
          </>
        ) : (
          <>
            <div className="parttwonavv">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="icoons">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
              <input className="inpput" type="search" placeholder="Search" />
            </div>
          </>
        )}

        <div className="partthreenav">
          <div className="searchh" onClick={toglesearch}>
            <i className="ri-search-line "></i>
          </div>

          {userNami ? (
            <>
              <div className="dropdivv">
                <button
                  className="buttonnav"
                  id="buttonid"
                  onClick={toggleMenu}
                >
                  <div className="profileico">
                    <i className="ri-user-3-fill"></i>
                  </div>
                  <div className="profilenami">
                    <span>{userNami}</span>
                  </div>
                  <div className="profilenami">
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                </button>
                {isOpen === true ? (
                  <div className="popupnew"></div>
                ) : (
                  <div className="popupnewopen" onClick={handleLogout}>
                    <svg
                      className="logouticonn"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M18.189 9a15 15 0 0 1 2.654 2.556c.105.13.157.287.157.444m-2.811 3a14.998 14.998 0 0 0 2.654-2.556A.704.704 0 0 0 21 12m0 0H8m5-7.472A6 6 0 0 0 3 9v6a6 6 0 0 0 10 4.472"></path>
                    </svg>

                    <span>Log-out</span>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="dropdivv">
                <button
                  className="buttonnav"
                  id="buttonid"
                  onClick={toggleMenu}
                >
                  <div className="profileico">
                    <i className="ri-user-3-fill"></i>
                  </div>
                  <div className="profilenami">
                    <span></span>
                  </div>
                  <div className="profilenami">
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                </button>
                {isOpen === true ? (
                  <div className="popupnew"></div>
                ) : (
                  <Link to={"/aroma/"} className="Li">
                    <div className="popupnewopen">
                      <svg
                        className="logouticonn"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M18.189 9a15 15 0 0 1 2.654 2.556c.105.13.157.287.157.444m-2.811 3a14.998 14.998 0 0 0 2.654-2.556A.704.704 0 0 0 21 12m0 0H8m5-7.472A6 6 0 0 0 3 9v6a6 6 0 0 0 10 4.472"></path>
                      </svg>

                      <span>Log-in</span>
                    </div>
                  </Link>
                )}
              </div>
            </>
          )}

          <Link to={"/aroma/Cart"}>
            <div className="cart" id="carti">
              <button data-quantity="" className="btn-cart">
                <span className="quantity">{Cart}</span>

                <svg
                  className="icon-cart"
                  viewBox="0 0 24.38 30.52"
                  height="30.52"
                  width="24.38"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    transform="translate(-3.62 -0.85)"
                    d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"
                  ></path>
                </svg>
              </button>
            </div>
          </Link>
        </div>
      </div>

      {/* Side Nav */}
      <div className={Slide === true ? "sidenav" : "sidenavtwo"}>
        <div className="partoneside">
          <Cross togle={togglefunction} />
          <div className="partonenavside">
            <img src="./img/Logootw.png" alt="" />
          </div>

          <i className="ri-search-line" id="searchside" onClick={searchtog}></i>
        </div>

        <div className="parttwonavside"></div>
        <div className="partthreenavside">
          <h3 className="itemm">
            <Link to={"/aroma/Home"} className="Li" onClick={togglefunction}>
              Home
            </Link>
          </h3>

          <h3 className="itemm">
            <Link to={"/aroma/Menu"} className="Li" onClick={togglefunction}>
              Menu
            </Link>
          </h3>
          <h3 className="itemm">
            <Link to={"/aroma/Recipe"} className="Li" onClick={togglefunction}>
              Recipes
            </Link>
          </h3>
          <h3 className="itemm">
            <Link to={"/aroma/about"} className="Li" onClick={togglefunction}>
              About
            </Link>
          </h3>
        </div>
        <div className="bttstore">
          {userNami ? (
            <>
              <button className="getstart">
                <div className="profileicoside">
                  <div className="sideprofileicon">
                    <i className="ri-user-3-fill proff"></i>
                  </div>
                  <div className="sideprofileiconn">{userNami}</div>
                </div>
              </button>
              <Link to={"/aroma/"} className="Li">
                <button className="getstart" onClick={handleLogout}>
                  <svg
                    className="logouticonn"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M18.189 9a15 15 0 0 1 2.654 2.556c.105.13.157.287.157.444m-2.811 3a14.998 14.998 0 0 0 2.654-2.556A.704.704 0 0 0 21 12m0 0H8m5-7.472A6 6 0 0 0 3 9v6a6 6 0 0 0 10 4.472"></path>
                  </svg>

                  <span>Log-out</span>
                </button>
              </Link>
            </>
          ) : (
            <>
              <button className="getstart">
                <div className="profileicoside">
                  <div className="sideprofileicon">
                    <i className="ri-user-3-fill proff"></i>
                  </div>
                  <div className="sideprofileiconn">{userNami}</div>
                </div>
              </button>
              <Link to={"/aroma/"} className="Li">
                <button className="getstart" onClick={handleLoginpage}>
                  <svg
                    className="logouticonn"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M18.189 9a15 15 0 0 1 2.654 2.556c.105.13.157.287.157.444m-2.811 3a14.998 14.998 0 0 0 2.654-2.556A.704.704 0 0 0 21 12m0 0H8m5-7.472A6 6 0 0 0 3 9v6a6 6 0 0 0 10 4.472"></path>
                  </svg>

                  <span>Log-in</span>
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
