/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'
import './Cross.css'
const Cross = ({togle}) => {
  return (
    <>
    <div className="Cross" onClick={togle}>
    <i className="ri-close-fill"></i>
    </div>
    </>
  )
}

export default Cross
