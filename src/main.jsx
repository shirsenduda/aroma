/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react"; //Comes form node Modules
import ReactDOM from "react-dom/client"; //Comes form node Modules
import App from "../src/App";
import "./index.css";
import Navbar from "./component/Nav/Navbar";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Login from "./Pages/Login";

// React router code
//hello
// 🙂 Hope you Undestand this lines of code
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
        path: "/aroma/Login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
