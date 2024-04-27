/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './AdvatiseSectiont.css'
const AdvatiseSectiont = ({Recipee,recipeimg}) => {
  return (
    <>
      <div className="recipeadv">
              <img
                
                src={recipeimg}
                // {recipeimg}
                alt=""
              />
              
              <div className="descc">
                <h3 className="Discover">DISCOVER</h3>
                <h1 className="Discoverr">{Recipee}</h1>
                <div className="Discoverrr">
                  <div className="Discoverrrone">
                    From a classic latté to deliciously chilled smoothies, try
                    making your
                  </div>
                  <div className="Discoverrrtwo">
                    favorite Cold coffee recipes at home and share a snap of
                    your
                  </div>
                  <div className="Discoverrrthree">
                    creations using the hashtag #Aroma Recipes
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default AdvatiseSectiont
