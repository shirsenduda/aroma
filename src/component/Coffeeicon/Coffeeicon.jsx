/* eslint-disable no-unused-vars */
// export default Coffeeicon;
import React from 'react'
import './Coffeeicon.css'
// import { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
const Coffeeicon = () => {
//   const container = useRef();
//   useGSAP(() => {
//   const tl = gsap.timeline();
//   tl.to(
//     ".coffeeicon",
//     {
//       y:0,
//       duration: 2, // seconds
//       delay: 0.5,
//       opacity :1,
//       stagger: 0.3,
//       scale:1.04
//     },
//     { scope: container }
//   ); 
// }); 
  return (
    <>
    <div className="coffeeicon" >
       <img src="/img/6.png" alt="" />
    </div>
    </>
  )
}
// ref={container}
export default Coffeeicon
