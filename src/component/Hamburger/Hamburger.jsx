/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./hamburger.css"
const Hamburger = ({togle}) => {
  return (
    <>
    
    <div className="burgerham" onClick={togle}>
    <i className="ri-menu-2-line"></i>
    {/* <i className="ri-menu-4-line"></i> */}
    </div>
    
    </>
  )
}

export default Hamburger
