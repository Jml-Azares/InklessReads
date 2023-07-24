import React, { useContext } from "react";
import Header from "./Header";

import Footer from "./Footer";
import Chatbot from "./Chatbot";
import { Navigate, Outlet } from "react-router-dom";
import { StateContext } from "../contexts/ContextProvider";

const Layout = ({ cart, setCart }) => {
  const { token } = useContext(StateContext);

  if (!token) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
