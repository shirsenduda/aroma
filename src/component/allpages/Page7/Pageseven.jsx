/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Pageseven.css'
import Testimonials from '../../Testimonials/Testimonials'
const Pageseven = () => {
  return (
    <>
    <div className="Pageseven">
        <div className="Testimonial">
          <h1>Testimonials</h1>
        </div>
        <div className="Testimonialparttwo">
          <img src="./img/Testimonial.svg" alt="" />
          <Testimonials/>
        </div>
    </div>
    </>
  )
}

export default Pageseven

