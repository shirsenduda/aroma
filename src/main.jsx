/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import ReactDOM from "react-dom/client"; //Comes form node Modules
import App from "../src/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
