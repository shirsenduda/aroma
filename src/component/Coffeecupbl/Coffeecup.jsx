/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Coffeecup.css'
const Coffeecup = ({coffeecup}) => {
  return (
    <>
    <div className="coffeecuup">
        <img src={coffeecup.img} alt="" />
    </div>
    </>
  )
}

export default Coffeecup
