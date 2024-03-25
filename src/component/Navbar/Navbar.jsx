// /* eslint-disable no-unused-vars */
// "use client"
// import React, { useState } from 'react'
// import './Nav.css'
// import Button from '../Buttons/Button'
// import Cart from '../Cart/Cart'
// import Search from '../Search/Search'
// import Hamburder from '../Hamburger/Hamburger'
// import Cross from '../Cross/Cross'
// import Sidenavcss from './Sidenav.module.css'
// import Boxcss from './Box.module.css'
// import './Mid.css'
// // gsap

// const Navbar = () => {
//   const [Slide, setSlide] = useState(true);
//     const togglefunction  = ()=>{
//         setSlide((item)=>!item)
//     }

//     const [Searchinput, setSearchinput] = useState(true);

//     const [searchinp, setsearchinp] = useState("hello");

    


//   return (
//     <>
//     <div className="Nav">
//     <Hamburder  togle={togglefunction} />
//         <div className="partone" >
//         <img src="/img/jj.svg" alt="" />
//         </div>

//         <div className="Searchinput===true? parttwo : parttwoo>
//             <h3>Home</h3>
//             <h3>Contact</h3>
//             <h3>Blog</h3>
//             <h3>About</h3>
//             </search>
//               <input type="Search" placeholder = "search" 
//               onChange={(e)=>{
//                 setsearchinp(e.target.value)
//               }}
              
//               />
              
//               <div className='searchicon'>
//               <i className="ri-search-line"></i>
//               </div>
//             </search>
//         </div>
        
//         <div className='partthree'>
//             <Search toglesearch={setSearchinput}/>
//             <Cart/>
//             <Button/>
//         </div>
        
//     </div>
//     <div className={ Slide===true? Sidenavcss.sidenavactive : Sidenavcss.sidenav}>
//       <div className={Boxcss.Box}>
//       <Cross togle={togglefunction}/>
      
//         <div className='partone'>
//         <img src="/img/jj.svg" alt="" />
//         </div>
//         <div className='partthree'>
//             <Search/>
//         </div>
//     </div>
//     </div>
//     </>
//   )
// }

// export default Navbar
 /* eslint-disable no-unused-vars */
import React from 'react'

const Navbar = () => {
  return (
    <div>
      
    </div>
  )
}

export default Navbar

