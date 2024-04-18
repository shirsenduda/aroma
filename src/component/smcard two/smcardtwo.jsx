/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './smcardtwo.css'
const Smcard = ({fooddatapass,Key}) => {
  return (
    <div>
      <div className="cardbodyyy" key={Key}>
        <img src={fooddatapass.foodimg} alt="" />
        <div className='carttt'>
        <i className="ri-shopping-cart-line"></i>
        </div>
        <div className='productnameei'>{fooddatapass.foodname}</div>
        <p className='pp'>Price:{fooddatapass.price}</p>
      </div>
      
      
    </div>
  )
}

export default Smcard
