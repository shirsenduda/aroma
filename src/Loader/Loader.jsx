/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React from 'react'
// import './Loader.css'
// const Loader = () => {
//   return (
//     <>
//     <div className="loaderparent">
//         <div className="loader">
//           <div className="bar1"></div>
//           <div className="bar2"></div>
//           <div className="bar3"></div>
//           <div className="bar4"></div>
//           <div className="bar5"></div>
//           <div className="bar6"></div>
//           <div className="bar7"></div>
//           <div className="bar8"></div>
//           <div className="bar9"></div>
//           <div className="bar10"></div>
//           <div className="bar11"></div>
//           <div className="bar12"></div>
//         </div>
//         </div>
//     </>
//   )
// }

// export default Loader


import React from 'react';
import '@dotlottie/player-component/dist/dotlottie-player.mjs';
import './Loader.css'
const MyLottieAnimation = () => {
  return (
    <>
    <div className='loaderparent'>
    <dotlottie-player
      src="https://lottie.host/a6d5950b-f017-4f37-8ba1-bc41d8c8a422/TbA8hHQ12U.json"
      background="transparent"
      speed={3}
      style={{ width: '300px', height: '300px' }}
      direction={1}
      playMode="normal"
      loop
      autoplay
    ></dotlottie-player>
    </div>
    </>
  );
};

export default MyLottieAnimation;
