/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Button.css'
const Button = ({bt,bttt,btn}) => {
  return (
    <>
    <button className="button" id="buttonid">{bt}{bttt}{btn}</button>
    </>
  )
}

export default Button
