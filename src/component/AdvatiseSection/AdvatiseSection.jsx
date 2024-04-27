/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './AdvatiseSection.css'
const AdvatiseSection = ({Breakfastname,Recipee,breakfastimg}) => {
  return (
    <>
      <div className="recipeadv">
              <img
                
                src={breakfastimg} 
                alt=""
              />
              
              <div className="descc">
                <h3 className="Discover">DISCOVER</h3>
                <h1 className="Discoverr">{Breakfastname}{Recipee}</h1>
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

export default AdvatiseSection
