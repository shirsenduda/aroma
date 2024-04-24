/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'
import './Recipescomponentthree.css'
const Recipescomponentthree = ({passrecipedatathree,Key}) => {
  return (
    <>
      <div className="recpichild" key={Key}>
        <div className="imgstorerec">
          <img
            src={passrecipedatathree.imgrecipethree}
            alt=""
          />
        </div>
        <div className="imgstorerectw">
          <div className="smtex">{passrecipedatathree.headingrecipethree}</div>
          <div className="smtexvx">{passrecipedatathree.namerecipethree}</div>
          <div className="smtexvx">{passrecipedatathree.namerecipetwooo}</div>
        </div>
      </div>
    </>
  )
}

export default Recipescomponentthree
