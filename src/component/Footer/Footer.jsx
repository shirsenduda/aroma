/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './footer.css'
import Button from '../Buttons/Button'
const Footer = () => {
    const [bt, setbt] = useState("Check Now");
  return (
   <>
   <div className="footerbody">
    <img src="./img/bg-foo.png" alt="" />
    
    <div className='row1'>
        <div className="logofooterone">
        <h1>Aroma cafe</h1>
        <h3 className='h22'>Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your Perfect Espresso Escape</h3>
        <div className="btt">
           <button className='buttonn'>Visit Now</button>
        </div>
        </div>
        <div className="logofootertwo">
            <h1 className='xx'>Footer Link</h1>
            <h5 className='onee'>Policy</h5>
            <h5 className='onee'>ipsum dolor.</h5>
            <h5 className='onee'>sit amet.</h5>
            <h5 className='onee'>Terms of Us</h5>
        </div>
        <div className="logofooterthree">
            <h1 className='xx'>Quick Link</h1>
            <h5 className='onee'>Lorem ipsum.</h5>
            <h5 className='onee'>ipsum dolor.</h5>
            <h5 className='onee'>sit amet.</h5>
            <h5 className='onee'>Lorem,ip.</h5>
        </div>
        <div className="logofooterfour">
            <h1 className='xx'>Address</h1>
            <h5 className='onee'>Wall Street,New York</h5>
            <h5 className='onee'>+91 6909094988</h5>
            <h5 className='email'>
                
                <div className='input'>
                <input type="email" className="input" id="Email" name="Email" placeholder="AromaCafe.io" />
                <input className="button--submit" value="Subscribe" type="submit"></input>
                </div>


            </h5>
            
        </div>
        <div className='creator'>Created by SD-DAS</div>
        <div className='copyright'>Copyright 2023 Aroma Cafe . All Rights Reserved.</div>
    </div>

   </div>
   </>
  )
}

export default Footer


    