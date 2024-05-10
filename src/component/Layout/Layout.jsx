/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React, { Children, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
// import Navbar from "../Nav/Navbar";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// React router code
//  Hope you Undestand this lines of code
// const Layout = () => {
//   const [loadercondition, setloadercondition] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setloadercondition();
//     }, 1000);
//   }, []);

//   const callLoader = Loader();

//   return (
//     <>
//       {loadercondition === true ? (
//         callLoader
//       ) : (
//         <>
//           <Navbar />
//           <div className="content">{Children}</div>
//           <Footer />
//         </>
//       )}
//     </>
//   );
// };

// export default Layout;
import './Layout.css'
const Layout = ({children}) => {

  return (
    <>
      <div className="content">
        {children}
        </div>
      <Footer />
    </>
  );
};

export default Layout;
