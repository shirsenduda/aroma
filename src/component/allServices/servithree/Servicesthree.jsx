/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Servicesthree.css'
const Services = ({passservicedatatwo,Key}) => {
  return (
    <>
    <div className='Servicees' key={Key}>
        <div className="serimgg">
        <img src={passservicedatatwo.servicedataimgtwo} alt="" />
        </div>
        <div className="sertextt">
        {passservicedatatwo.servicedatatexttwo}
        </div>
    </div>
    </>
  )
}

export default Services
