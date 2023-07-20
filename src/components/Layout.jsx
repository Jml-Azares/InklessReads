import React from "react";
import Header from "./Header";

import Footer from "./Footer";
import Chatbot from "./Chatbot";
import { Outlet } from "react-router-dom";

const Layout = ({ cart, setCart }) => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
