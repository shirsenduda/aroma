/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { NextUIProvider } from "@nextui-org/react";
import React, { useEffect, useState } from "react"; //Comes form node Modules
import ReactDOM from "react-dom/client"; //Comes form node Modules
import App from "../src/App";
import "./index.css";
import Navbar from "./component/Nav/Navbar";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Loader from "./Loader/Loader";
import Recipe from "./Pages/Recipe";
import LocomotiveScroll from "locomotive-scroll";
// React router code
// 🙂 Hope you Undestand this lines of code
const Layout = () => {
  const [loadercondition, setloadercondition] = useState(true);
  const locomotiveScroll = new LocomotiveScroll();

  useEffect(() => {
    setTimeout(() => {
      setloadercondition();
    }, 1000);
  }, []);

  const callLoader = Loader();

  return (
    <>
      {loadercondition === true ? (
        callLoader
      ) : (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/aroma/",
    element: <Layout />,
    children: [
      {
        path: "/aroma/",
        element: <App />,
      },
      {
        path: "/aroma/about",
        element: <About />,
      },
      {
        path: "/aroma/Menu",
        element: <Menu />,
      },
      {
        path: "/aroma/Recipe",
        element: <Recipe />,
      },
      {
        path: "/aroma/Login",
        element: <Login />,
      },
      {
        path: "/aroma/Cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <RouterProvider router={router} />
  </NextUIProvider>
);
