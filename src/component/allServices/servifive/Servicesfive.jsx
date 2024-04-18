/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Servicesfive.css'
const Services = ({passservicedatathree,Key}) => {
  return (
    <>
    <div className='Services' key={Key}>
        <div className="serimg">
        <img src={passservicedatathree.servicedataimgthree} alt="" />
        </div>
        <div className="sertext">
        {passservicedatathree.servicedatatextthree}
        </div>
    </div>
    </>
  )
}

export default Services
