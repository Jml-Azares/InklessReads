import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import Chatbot from "./Chatbot";
import { Outlet } from "react-router-dom";

const Layout = ({ cart, setCart }) => {
  return (
    <>
      <Header cart={cart} setCart={setCart} />
      <Hero />
      <Outlet />
      <Chatbot />
      <Footer />
    </>
  );
};

export default Layout;
