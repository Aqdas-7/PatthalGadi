/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Hireme from "./pages/Hireme";
import Learn from "./pages/Learn";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Portfolio",
    element: <Portfolio />,
  },
  {
    path: "/hireme",
    element: <Hireme />,
  },
  {
    path: "/learn",
    element: <Learn />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
