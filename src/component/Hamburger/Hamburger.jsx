/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./hamburger.css"
const Hamburger = ({togle}) => {
  return (
    <>
    
    <div className="burger" onClick={togle}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    
    </>
  )
}

export default Hamburger
