/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "../../aroma/src/App";
import "./index.css";
import Navbar from "./component/Nav/Navbar";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import About from "./Pages/About";
import Menu from './Pages/Menu'
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Menu",
        element: <Menu />,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}/>
);
