/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Button.css'
const Button = ({bt,bttt,btn,btttt}) => {
  return (
    <>
    <button className="button" id="buttonid">{bt}{bttt}{btn}{btttt}</button>
    </>
  )
}

export default Button
