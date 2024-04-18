/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Services.css'
const Services = ({passservicedata,Key}) => {
  return (
    <>
    <div className='Services' key={Key}>
        <div className="serimg">
        <img src={passservicedata.servicedataimg} alt="" />
        </div>
        <div className="sertext">
        {passservicedata.servicedatatext}
        </div>
    </div>
    </>
  )
}

export default Services
