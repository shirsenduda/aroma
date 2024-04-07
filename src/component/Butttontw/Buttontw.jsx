/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Buttontw.css'
const Buttontw = ({getstart,login,sign}) => {
  return (
    <>
    <button className="getstart">{getstart}{login}{sign}</button>
    </>
  )
}

export default Buttontw
