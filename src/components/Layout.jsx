import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ cart, setCart }) => {
  return (
    <>
      <Header cart={cart} setCart={setCart} />
      <Hero />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
